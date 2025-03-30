// sample script to drop into typescritp projects to evaluate circular type references
import ts from 'typescript';
import path from 'path';

interface DependencyGraph {
    [key: string]: Set<string>;
}

// Analyze dependencies of types in TypeScript files
function buildDependencyGraph(filePaths: string[], compilerOptions: ts.CompilerOptions): DependencyGraph {
    const program = ts.createProgram(filePaths, compilerOptions);
    const typeChecker = program.getTypeChecker();
    const graph: DependencyGraph = {};

    function getTypeName(type: ts.Type): string {
        if (type.symbol && type.symbol.name !== '__type') {
            return type.symbol.name;
        }
        return typeChecker.typeToString(type);
    }

    filePaths.forEach(filePath => {
        const sourceFile = program.getSourceFile(filePath);
        if (!sourceFile) return;

        ts.forEachChild(sourceFile, visit);

        function visit(node: ts.Node) {
            if (ts.isTypeAliasDeclaration(node) || ts.isInterfaceDeclaration(node)) {
                const typeName = node.name.text;
                graph[typeName] = new Set();

                ts.forEachChild(node, child => {
                    analyzeDependencies(typeName, child);
                });
            }
            ts.forEachChild(node, visit);
        }

        function analyzeDependencies(currentType: string, node: ts.Node) {
            const type = typeChecker.getTypeAtLocation(node);
            const referencedTypeName = getTypeName(type);
            if (referencedTypeName && referencedTypeName !== currentType) {
                graph[currentType].add(referencedTypeName);
            }
            ts.forEachChild(node, child => analyzeDependencies(currentType, child));
        }
    });

    return graph;
}

// Detect cycles in the dependency graph
function detectCycles(graph: DependencyGraph): string[][] {
    const visited = new Set<string>();
    const stack = new Set<string>();
    const cycles: string[][] = [];

    function visit(node: string, path: string[]) {
        if (stack.has(node)) {
            const cycleStart = path.indexOf(node);
            cycles.push(path.slice(cycleStart).concat(node));
            return;
        }

        if (visited.has(node)) return;
        visited.add(node);
        stack.add(node);
        path.push(node);

        graph[node]?.forEach(dependency => visit(dependency, path));

        stack.delete(node);
        path.pop();
    }

    Object.keys(graph).forEach(node => visit(node, []));

    return cycles;
}

// Main entrypoint
function main() {
    const tsconfigPath = ts.findConfigFile("../", ts.sys.fileExists, "tsconfig.json");

    if (!tsconfigPath) {
        console.error("tsconfig.json not found!");
        process.exit(1);
    }

    const configFile = ts.readConfigFile(tsconfigPath, ts.sys.readFile);
    const parsedConfig = ts.parseJsonConfigFileContent(configFile.config, ts.sys, path.dirname(tsconfigPath));
    const files = parsedConfig.fileNames;

    const dependencyGraph = buildDependencyGraph(files, parsedConfig.options);
    const cycles = detectCycles(dependencyGraph);

    if (cycles.length > 0) {
        console.error("🚨 Circular type references detected:");
        cycles.forEach((cycle, idx) => {
            console.error(`${idx + 1}. ${cycle.join(' → ')}`);
        });
        process.exit(1);
    } else {
        console.log("✅ No circular type references found!");
    }
}

main();

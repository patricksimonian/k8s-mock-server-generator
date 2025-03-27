/**
* Info contains versioning information. how we'll want to distribute that information.
* @resourceType info
* @kind Info
*/
export interface io_k8s_apimachinery_pkg_version_Info {
/**
* 
* @required
*/
minor: string;
/**
* 
* @required
*/
platform: string;
/**
* 
* @required
*/
buildDate: string;
/**
* 
* @required
*/
gitCommit: string;
/**
* 
* @required
*/
goVersion: string;
/**
* 
* @required
*/
major: string;
/**
* 
* @required
*/
compiler: string;
/**
* 
* @required
*/
gitTreeState: string;
/**
* 
* @required
*/
gitVersion: string;
}

/**
* Create a new Info with default values
* @param data - Optional partial data to override defaults
* @returns A new io_k8s_apimachinery_pkg_version_Info instance with defaults applied
*/
export function createio_k8s_apimachinery_pkg_version_Info(data?: Partial<io_k8s_apimachinery_pkg_version_Info>): io_k8s_apimachinery_pkg_version_Info {
 return {
   minor: data?.minor !== undefined ? data.minor : '',
   platform: data?.platform !== undefined ? data.platform : '',
   buildDate: data?.buildDate !== undefined ? data.buildDate : '',
   gitCommit: data?.gitCommit !== undefined ? data.gitCommit : '',
   goVersion: data?.goVersion !== undefined ? data.goVersion : '',
   major: data?.major !== undefined ? data.major : '',
   compiler: data?.compiler !== undefined ? data.compiler : '',
   gitTreeState: data?.gitTreeState !== undefined ? data.gitTreeState : '',
   gitVersion: data?.gitVersion !== undefined ? data.gitVersion : '',
 };
}

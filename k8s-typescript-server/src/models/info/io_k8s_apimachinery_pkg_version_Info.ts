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
compiler: string;
/**
* 
* @required
*/
gitVersion: string;
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
gitTreeState: string;
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
minor: string;
}

/**
* Create a new Info with default values
* @param data - Optional partial data to override defaults
* @returns A new io_k8s_apimachinery_pkg_version_Info instance with defaults applied
*/
export function createio_k8s_apimachinery_pkg_version_Info(data?: Partial<io_k8s_apimachinery_pkg_version_Info>): io_k8s_apimachinery_pkg_version_Info {
 return {
   compiler: data?.compiler !== undefined ? data.compiler : '',
   gitVersion: data?.gitVersion !== undefined ? data.gitVersion : '',
   platform: data?.platform !== undefined ? data.platform : '',
   buildDate: data?.buildDate !== undefined ? data.buildDate : '',
   gitCommit: data?.gitCommit !== undefined ? data.gitCommit : '',
   gitTreeState: data?.gitTreeState !== undefined ? data.gitTreeState : '',
   goVersion: data?.goVersion !== undefined ? data.goVersion : '',
   major: data?.major !== undefined ? data.major : '',
   minor: data?.minor !== undefined ? data.minor : '',
 };
}

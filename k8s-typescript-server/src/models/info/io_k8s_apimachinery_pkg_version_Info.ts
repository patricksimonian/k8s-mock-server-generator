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
gitTreeState: string;
/**
* 
* @required
*/
gitVersion: string;
/**
* 
* @required
*/
goVersion: string;
/**
* 
* @required
*/
minor: string;
/**
* 
* @required
*/
buildDate: string;
/**
* 
* @required
*/
compiler: string;
/**
* 
* @required
*/
gitCommit: string;
/**
* 
* @required
*/
major: string;
/**
* 
* @required
*/
platform: string;
}

/**
* Create a new Info with default values
* @param data - Optional partial data to override defaults
* @returns A new io_k8s_apimachinery_pkg_version_Info instance with defaults applied
*/
export function createio_k8s_apimachinery_pkg_version_Info(data?: Partial<io_k8s_apimachinery_pkg_version_Info>): io_k8s_apimachinery_pkg_version_Info {
 return {
   gitTreeState: data?.gitTreeState !== undefined ? data.gitTreeState : '',
   gitVersion: data?.gitVersion !== undefined ? data.gitVersion : '',
   goVersion: data?.goVersion !== undefined ? data.goVersion : '',
   minor: data?.minor !== undefined ? data.minor : '',
   buildDate: data?.buildDate !== undefined ? data.buildDate : '',
   compiler: data?.compiler !== undefined ? data.compiler : '',
   gitCommit: data?.gitCommit !== undefined ? data.gitCommit : '',
   major: data?.major !== undefined ? data.major : '',
   platform: data?.platform !== undefined ? data.platform : '',
 };
}

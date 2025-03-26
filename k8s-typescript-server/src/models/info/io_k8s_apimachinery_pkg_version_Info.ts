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
platform: string;
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
gitTreeState: string;
/**
* 
* @required
*/
major: string;
/**
* 
* @required
*/
buildDate: string;
}

/**
* Create a new Info with default values
* @param data - Optional partial data to override defaults
* @returns A new io_k8s_apimachinery_pkg_version_Info instance with defaults applied
*/
export function createio_k8s_apimachinery_pkg_version_Info(data?: Partial<io_k8s_apimachinery_pkg_version_Info>): io_k8s_apimachinery_pkg_version_Info {
 return {
   gitVersion: data?.gitVersion !== undefined ? data.gitVersion : '',
   goVersion: data?.goVersion !== undefined ? data.goVersion : '',
   minor: data?.minor !== undefined ? data.minor : '',
   platform: data?.platform !== undefined ? data.platform : '',
   compiler: data?.compiler !== undefined ? data.compiler : '',
   gitCommit: data?.gitCommit !== undefined ? data.gitCommit : '',
   gitTreeState: data?.gitTreeState !== undefined ? data.gitTreeState : '',
   major: data?.major !== undefined ? data.major : '',
   buildDate: data?.buildDate !== undefined ? data.buildDate : '',
 };
}

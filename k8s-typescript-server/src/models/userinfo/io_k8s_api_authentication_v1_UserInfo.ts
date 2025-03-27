/**
* UserInfo holds the information about the user needed to implement the user.Info interface.
* @resourceType userinfo
* @kind Userinfo
*/
export interface io_k8s_api_authentication_v1_UserInfo {
/**
* Any additional information provided by the authenticator.
*/
extra?: Record<string, any>;
/**
* The names of groups this user is a part of.
* @isArray
*/
groups?: string[];
/**
* A unique value that identifies this user across time. If this user is deleted and another user by the same name is added, they will have different UIDs.
*/
uid?: string;
/**
* The name that uniquely identifies this user among all active users.
*/
username?: string;
}

/**
* Create a new Userinfo with default values
* @param data - Optional partial data to override defaults
* @returns A new io_k8s_api_authentication_v1_UserInfo instance with defaults applied
*/
export function createio_k8s_api_authentication_v1_UserInfo(data?: Partial<io_k8s_api_authentication_v1_UserInfo>): io_k8s_api_authentication_v1_UserInfo {
 return {
   extra: data?.extra !== undefined ? data.extra : {},
   groups: data?.groups !== undefined ? data.groups : [],
   uid: data?.uid !== undefined ? data.uid : '',
   username: data?.username !== undefined ? data.username : '',
 };
}

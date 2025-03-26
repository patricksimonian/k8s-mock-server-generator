/**
* TokenRequestSpec contains client provided parameters of a token request.
* @resourceType tokenrequestspec
* @kind Tokenrequestspec
*/
export interface io_k8s_api_authentication_v1_TokenRequestSpec {
/**
* Audiences are the intendend audiences of the token. A recipient of a token must identify themself with an identifier in the list of audiences of the token, and otherwise should reject the token. A token issued for multiple audiences may be used to authenticate against any of the audiences listed but implies a high degree of trust between the target audiences.
* @required
* @isArray
*/
audiences: string[];
/**
* BoundObjectReference is a reference to an object that a token is bound to.
* @isObject
*/
boundObjectRef?: { apiVersion?: string; kind?: string; name?: string; uid?: string };
/**
* ExpirationSeconds is the requested duration of validity of the request. The token issuer may return a token with a different validity duration so a client needs to check the 'expiration' field in a response.
*/
expirationSeconds?: number;
}

/**
* Create a new Tokenrequestspec with default values
* @param data - Optional partial data to override defaults
* @returns A new io_k8s_api_authentication_v1_TokenRequestSpec instance with defaults applied
*/
export function createio_k8s_api_authentication_v1_TokenRequestSpec(data?: Partial<io_k8s_api_authentication_v1_TokenRequestSpec>): io_k8s_api_authentication_v1_TokenRequestSpec {
 return {
   audiences: data?.audiences !== undefined ? data.audiences : [],
   boundObjectRef: data?.boundObjectRef !== undefined ? data.boundObjectRef : {},
   expirationSeconds: data?.expirationSeconds !== undefined ? data.expirationSeconds : 0,
 };
}

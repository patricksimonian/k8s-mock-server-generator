/**
* TokenReviewSpec is a description of the token authentication request.
* @resourceType tokenreviewspec
* @kind Tokenreviewspec
*/
export interface io_k8s_api_authentication_v1_TokenReviewSpec {
/**
* Audiences is a list of the identifiers that the resource server presented with the token identifies as. Audience-aware token authenticators will verify that the token was intended for at least one of the audiences in this list. If no audiences are provided, the audience will default to the audience of the Kubernetes apiserver.
* @isArray
*/
audiences?: string[];
/**
* Token is the opaque bearer token.
*/
token?: string;
}

/**
* Create a new Tokenreviewspec with default values
* @param data - Optional partial data to override defaults
* @returns A new io_k8s_api_authentication_v1_TokenReviewSpec instance with defaults applied
*/
export function createio_k8s_api_authentication_v1_TokenReviewSpec(data?: Partial<io_k8s_api_authentication_v1_TokenReviewSpec>): io_k8s_api_authentication_v1_TokenReviewSpec {
 return {
   audiences: data?.audiences !== undefined ? data.audiences : [],
   token: data?.token !== undefined ? data.token : '',
 };
}

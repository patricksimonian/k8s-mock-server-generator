/**
* TokenReviewStatus is the result of the token authentication request.
* @resourceType tokenreviewstatus
* @kind Tokenreviewstatus
*/
export interface io_k8s_api_authentication_v1_TokenReviewStatus {
/**
* Audiences are audience identifiers chosen by the authenticator that are compatible with both the TokenReview and token. An identifier is any identifier in the intersection of the TokenReviewSpec audiences and the token's audiences. A client of the TokenReview API that sets the spec.audiences field should validate that a compatible audience identifier is returned in the status.audiences field to ensure that the TokenReview server is audience aware. If a TokenReview returns an empty status.audience field where status.authenticated is "true", the token is valid against the audience of the Kubernetes API server.
* @isArray
*/
audiences?: string[];
/**
* Authenticated indicates that the token was associated with a known user.
*/
authenticated?: boolean;
/**
* Error indicates that the token couldn't be checked
*/
error?: string;
/**
* UserInfo holds the information about the user needed to implement the user.Info interface.
* @isObject
*/
user?: { extra?: Record<string, any>; groups?: string[]; uid?: string; username?: string };
}

/**
* Create a new Tokenreviewstatus with default values
* @param data - Optional partial data to override defaults
* @returns A new io_k8s_api_authentication_v1_TokenReviewStatus instance with defaults applied
*/
export function createio_k8s_api_authentication_v1_TokenReviewStatus(data?: Partial<io_k8s_api_authentication_v1_TokenReviewStatus>): io_k8s_api_authentication_v1_TokenReviewStatus {
 return {
   audiences: data?.audiences !== undefined ? data.audiences : [],
   authenticated: data?.authenticated !== undefined ? data.authenticated : false,
   error: data?.error !== undefined ? data.error : '',
   user: data?.user !== undefined ? data.user : {},
 };
}

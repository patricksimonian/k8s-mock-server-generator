/**
* JSONSchemaProps is a JSON-Schema following Specification Draft 4 (http://json-schema.org/).
* @resourceType jsonschemaprop
* @kind Jsonschemaprop
*/
export interface io_k8s_apiextensions_apiserver_pkg_apis_apiextensions_v1_JSONSchemaProps {
/**
* 
* @isArray
*/
required?: string[];
/**
* x-kubernetes-map-type annotates an object to further describe its topology. This extension must only be used when type is object and may have 2 possible values:

1) `granular`:
     These maps are actual maps (key-value pairs) and each fields are independent
     from each other (they can each be manipulated by separate actors). This is
     the default behaviour for all maps.
2) `atomic`: the list is treated as a single entity, like a scalar.
     Atomic maps will be entirely replaced when updated.
*/
x-kubernetes-map-type?: string;
/**
* 
*/
exclusiveMaximum?: boolean;
/**
* 
* @isArray
*/
oneOf?: any[];
/**
* 
*/
title?: string;
/**
* 
*/
maxItems?: number;
/**
* 
*/
multipleOf?: number;
/**
* 
*/
patternProperties?: Record<string, any>;
/**
* 
* @isArray
*/
allOf?: any[];
/**
* format is an OpenAPI v3 format string. Unknown formats are ignored. The following formats are validated:

- bsonobjectid: a bson object ID, i.e. a 24 characters hex string - uri: an URI as parsed by Golang net/url.ParseRequestURI - email: an email address as parsed by Golang net/mail.ParseAddress - hostname: a valid representation for an Internet host name, as defined by RFC 1034, section 3.1 [RFC1034]. - ipv4: an IPv4 IP as parsed by Golang net.ParseIP - ipv6: an IPv6 IP as parsed by Golang net.ParseIP - cidr: a CIDR as parsed by Golang net.ParseCIDR - mac: a MAC address as parsed by Golang net.ParseMAC - uuid: an UUID that allows uppercase defined by the regex (?i)^[0-9a-f]{8}-?[0-9a-f]{4}-?[0-9a-f]{4}-?[0-9a-f]{4}-?[0-9a-f]{12}$ - uuid3: an UUID3 that allows uppercase defined by the regex (?i)^[0-9a-f]{8}-?[0-9a-f]{4}-?3[0-9a-f]{3}-?[0-9a-f]{4}-?[0-9a-f]{12}$ - uuid4: an UUID4 that allows uppercase defined by the regex (?i)^[0-9a-f]{8}-?[0-9a-f]{4}-?4[0-9a-f]{3}-?[89ab][0-9a-f]{3}-?[0-9a-f]{12}$ - uuid5: an UUID5 that allows uppercase defined by the regex (?i)^[0-9a-f]{8}-?[0-9a-f]{4}-?5[0-9a-f]{3}-?[89ab][0-9a-f]{3}-?[0-9a-f]{12}$ - isbn: an ISBN10 or ISBN13 number string like "0321751043" or "978-0321751041" - isbn10: an ISBN10 number string like "0321751043" - isbn13: an ISBN13 number string like "978-0321751041" - creditcard: a credit card number defined by the regex ^(?:4[0-9]{12}(?:[0-9]{3})?|5[1-5][0-9]{14}|6(?:011|5[0-9][0-9])[0-9]{12}|3[47][0-9]{13}|3(?:0[0-5]|[68][0-9])[0-9]{11}|(?:2131|1800|35\\d{3})\\d{11})$ with any non digit characters mixed in - ssn: a U.S. social security number following the regex ^\\d{3}[- ]?\\d{2}[- ]?\\d{4}$ - hexcolor: an hexadecimal color code like "#FFFFFF: following the regex ^#?([0-9a-fA-F]{3}|[0-9a-fA-F]{6})$ - rgbcolor: an RGB color code like rgb like "rgb(255,255,2559" - byte: base64 encoded binary data - password: any kind of string - date: a date string like "2006-01-02" as defined by full-date in RFC3339 - duration: a duration string like "22 ns" as parsed by Golang time.ParseDuration or compatible with Scala duration format - datetime: a date time string like "2014-12-15T19:30:20.000Z" as defined by date-time in RFC3339.
*/
format?: string;
/**
* 
*/
not?: any;
/**
* 
*/
nullable?: boolean;
/**
* x-kubernetes-int-or-string specifies that this value is either an integer or a string. If this is true, an empty type is allowed and type as child of anyOf is permitted if following one of the following patterns:

1) anyOf:
   - type: integer
   - type: string
2) allOf:
   - anyOf:
     - type: integer
     - type: string
   - ... zero or more
*/
x-kubernetes-int-or-string?: boolean;
/**
* x-kubernetes-list-map-keys annotates an array with the x-kubernetes-list-type `map` by specifying the keys used as the index of the map.

This tag MUST only be used on lists that have the "x-kubernetes-list-type" extension set to "map". Also, the values specified for this attribute must be a scalar typed field of the child structure (no nesting is supported).

The properties specified must either be required or have a default value, to ensure those properties are present for all list items.
* @isArray
*/
x-kubernetes-list-map-keys?: string[];
/**
* x-kubernetes-validations describes a list of validation rules written in the CEL expression language.
* @isArray
*/
x-kubernetes-validations?: io_k8s_apiextensions_apiserver_pkg_apis_apiextensions_v1_ValidationRule[];
/**
* 
* @references io.k8s.apiextensions-apiserver.pkg.apis.apiextensions.v1.ExternalDocumentation
*/
externalDocs?: io_k8s_apiextensions_apiserver_pkg_apis_apiextensions_v1_ExternalDocumentation;
/**
* 
*/
minLength?: number;
/**
* 
*/
minItems?: number;
/**
* 
*/
minimum?: number;
/**
* 
*/
pattern?: string;
/**
* 
*/
type?: string;
/**
* 
*/
uniqueItems?: boolean;
/**
* x-kubernetes-list-type annotates an array to further describe its topology. This extension must only be used on lists and may have 3 possible values:

1) `atomic`: the list is treated as a single entity, like a scalar.
     Atomic lists will be entirely replaced when updated. This extension
     may be used on any type of list (struct, scalar, ...).
2) `set`:
     Sets are lists that must not have multiple items with the same value. Each
     value must be a scalar, an object with x-kubernetes-map-type `atomic` or an
     array with x-kubernetes-list-type `atomic`.
3) `map`:
     These lists are like maps in that their elements have a non-index key
     used to identify them. Order is preserved upon merge. The map tag
     must only be used on a list with elements of type object.
Defaults to atomic for arrays.
*/
x-kubernetes-list-type?: string;
/**
* 
* @isArray
*/
enum?: io_k8s_apiextensions_apiserver_pkg_apis_apiextensions_v1_JSON[];
/**
* 
*/
exclusiveMinimum?: boolean;
/**
* 
*/
dependencies?: Record<string, any>;
/**
* 
*/
id?: string;
/**
* 
* @references io.k8s.apiextensions-apiserver.pkg.apis.apiextensions.v1.JSONSchemaPropsOrArray
*/
items?: io_k8s_apiextensions_apiserver_pkg_apis_apiextensions_v1_JSONSchemaPropsOrArray;
/**
* 
*/
maxLength?: number;
/**
* 
*/
maxProperties?: number;
/**
* 
*/
maximum?: number;
/**
* 
* @references io.k8s.apiextensions-apiserver.pkg.apis.apiextensions.v1.JSONSchemaPropsOrBool
*/
additionalProperties?: io_k8s_apiextensions_apiserver_pkg_apis_apiextensions_v1_JSONSchemaPropsOrBool;
/**
* 
* @isArray
*/
anyOf?: any[];
/**
* x-kubernetes-embedded-resource defines that the value is an embedded Kubernetes runtime.Object, with TypeMeta and ObjectMeta. The type must be object. It is allowed to further restrict the embedded object. kind, apiVersion and metadata are validated automatically. x-kubernetes-preserve-unknown-fields is allowed to be true, but does not have to be if the object is fully specified (up to kind, apiVersion, metadata).
*/
x-kubernetes-embedded-resource?: boolean;
/**
* x-kubernetes-preserve-unknown-fields stops the API server decoding step from pruning fields which are not specified in the validation schema. This affects fields recursively, but switches back to normal pruning behaviour if nested properties or additionalProperties are specified in the schema. This can either be true or undefined. False is forbidden.
*/
x-kubernetes-preserve-unknown-fields?: boolean;
/**
* 
*/
minProperties?: number;
/**
* 
*/
properties?: Record<string, any>;
/**
* 
*/
definitions?: Record<string, any>;
/**
* 
*/
description?: string;
/**
* 
* @references io.k8s.apiextensions-apiserver.pkg.apis.apiextensions.v1.JSONSchemaPropsOrBool
*/
additionalItems?: io_k8s_apiextensions_apiserver_pkg_apis_apiextensions_v1_JSONSchemaPropsOrBool;
/**
* default is a default value for undefined object fields. Defaulting is a beta feature under the CustomResourceDefaulting feature gate. Defaulting requires spec.preserveUnknownFields to be false.
* @references io.k8s.apiextensions-apiserver.pkg.apis.apiextensions.v1.JSON
*/
default?: io_k8s_apiextensions_apiserver_pkg_apis_apiextensions_v1_JSON;
/**
* 
* @references io.k8s.apiextensions-apiserver.pkg.apis.apiextensions.v1.JSON
*/
example?: io_k8s_apiextensions_apiserver_pkg_apis_apiextensions_v1_JSON;
/**
* 
*/
$ref?: string;
/**
* 
*/
$schema?: string;
}

/**
* Create a new Jsonschemaprop with default values
* @param data - Optional partial data to override defaults
* @returns A new io_k8s_apiextensions_apiserver_pkg_apis_apiextensions_v1_JSONSchemaProps instance with defaults applied
*/
export function createio_k8s_apiextensions_apiserver_pkg_apis_apiextensions_v1_JSONSchemaProps(data?: Partial<io_k8s_apiextensions_apiserver_pkg_apis_apiextensions_v1_JSONSchemaProps>): io_k8s_apiextensions_apiserver_pkg_apis_apiextensions_v1_JSONSchemaProps {
 return {
   required: data?.required !== undefined ? data.required : [],
   x-kubernetes-map-type: data?.x-kubernetes-map-type !== undefined ? data.x-kubernetes-map-type : '',
   exclusiveMaximum: data?.exclusiveMaximum !== undefined ? data.exclusiveMaximum : false,
   oneOf: data?.oneOf !== undefined ? data.oneOf : [],
   title: data?.title !== undefined ? data.title : '',
   maxItems: data?.maxItems !== undefined ? data.maxItems : 0,
   multipleOf: data?.multipleOf !== undefined ? data.multipleOf : 0,
   patternProperties: data?.patternProperties !== undefined ? data.patternProperties : {},
   allOf: data?.allOf !== undefined ? data.allOf : [],
   format: data?.format !== undefined ? data.format : '',
   not: data?.not !== undefined ? data.not : createio_k8s_apiextensions_apiserver_pkg_apis_apiextensions_v1_JSONSchemaProps(),
   nullable: data?.nullable !== undefined ? data.nullable : false,
   x-kubernetes-int-or-string: data?.x-kubernetes-int-or-string !== undefined ? data.x-kubernetes-int-or-string : false,
   x-kubernetes-list-map-keys: data?.x-kubernetes-list-map-keys !== undefined ? data.x-kubernetes-list-map-keys : [],
   x-kubernetes-validations: data?.x-kubernetes-validations !== undefined ? data.x-kubernetes-validations : [],
   externalDocs: data?.externalDocs !== undefined ? data.externalDocs : createio_k8s_apiextensions_apiserver_pkg_apis_apiextensions_v1_ExternalDocumentation(),
   minLength: data?.minLength !== undefined ? data.minLength : 0,
   minItems: data?.minItems !== undefined ? data.minItems : 0,
   minimum: data?.minimum !== undefined ? data.minimum : 0,
   pattern: data?.pattern !== undefined ? data.pattern : '',
   type: data?.type !== undefined ? data.type : '',
   uniqueItems: data?.uniqueItems !== undefined ? data.uniqueItems : false,
   x-kubernetes-list-type: data?.x-kubernetes-list-type !== undefined ? data.x-kubernetes-list-type : '',
   enum: data?.enum !== undefined ? data.enum : [],
   exclusiveMinimum: data?.exclusiveMinimum !== undefined ? data.exclusiveMinimum : false,
   dependencies: data?.dependencies !== undefined ? data.dependencies : {},
   id: data?.id !== undefined ? data.id : '',
   items: data?.items !== undefined ? data.items : createio_k8s_apiextensions_apiserver_pkg_apis_apiextensions_v1_JSONSchemaPropsOrArray(),
   maxLength: data?.maxLength !== undefined ? data.maxLength : 0,
   maxProperties: data?.maxProperties !== undefined ? data.maxProperties : 0,
   maximum: data?.maximum !== undefined ? data.maximum : 0,
   additionalProperties: data?.additionalProperties !== undefined ? data.additionalProperties : createio_k8s_apiextensions_apiserver_pkg_apis_apiextensions_v1_JSONSchemaPropsOrBool(),
   anyOf: data?.anyOf !== undefined ? data.anyOf : [],
   x-kubernetes-embedded-resource: data?.x-kubernetes-embedded-resource !== undefined ? data.x-kubernetes-embedded-resource : false,
   x-kubernetes-preserve-unknown-fields: data?.x-kubernetes-preserve-unknown-fields !== undefined ? data.x-kubernetes-preserve-unknown-fields : false,
   minProperties: data?.minProperties !== undefined ? data.minProperties : 0,
   properties: data?.properties !== undefined ? data.properties : {},
   definitions: data?.definitions !== undefined ? data.definitions : {},
   description: data?.description !== undefined ? data.description : '',
   additionalItems: data?.additionalItems !== undefined ? data.additionalItems : createio_k8s_apiextensions_apiserver_pkg_apis_apiextensions_v1_JSONSchemaPropsOrBool(),
   default: data?.default !== undefined ? data.default : createio_k8s_apiextensions_apiserver_pkg_apis_apiextensions_v1_JSON(),
   example: data?.example !== undefined ? data.example : createio_k8s_apiextensions_apiserver_pkg_apis_apiextensions_v1_JSON(),
   $ref: data?.$ref !== undefined ? data.$ref : '',
   $schema: data?.$schema !== undefined ? data.$schema : '',
 };
}
// Required imports
import { io_k8s_apiextensions_apiserver_pkg_apis_apiextensions_v1_ExternalDocumentation, createio_k8s_apiextensions_apiserver_pkg_apis_apiextensions_v1_ExternalDocumentation } from '../externaldocumentation/io_k8s_apiextensions_apiserver_pkg_apis_apiextensions_v1_ExternalDocumentation';
import { io_k8s_apiextensions_apiserver_pkg_apis_apiextensions_v1_JSON, createio_k8s_apiextensions_apiserver_pkg_apis_apiextensions_v1_JSON } from '../json/io_k8s_apiextensions_apiserver_pkg_apis_apiextensions_v1_JSON';
import { io_k8s_apiextensions_apiserver_pkg_apis_apiextensions_v1_JSONSchemaPropsOrArray, createio_k8s_apiextensions_apiserver_pkg_apis_apiextensions_v1_JSONSchemaPropsOrArray } from '../jsonschemapropsorarray/io_k8s_apiextensions_apiserver_pkg_apis_apiextensions_v1_JSONSchemaPropsOrArray';
import { io_k8s_apiextensions_apiserver_pkg_apis_apiextensions_v1_JSONSchemaPropsOrBool, createio_k8s_apiextensions_apiserver_pkg_apis_apiextensions_v1_JSONSchemaPropsOrBool } from '../jsonschemapropsorbool/io_k8s_apiextensions_apiserver_pkg_apis_apiextensions_v1_JSONSchemaPropsOrBool';
import { io_k8s_apiextensions_apiserver_pkg_apis_apiextensions_v1_ValidationRule, createio_k8s_apiextensions_apiserver_pkg_apis_apiextensions_v1_ValidationRule } from '../io.k8s.apiextensions-apiserver.pkg.apis.apiextensions.v1.ValidationRule';

# DnlApi.ProductApi

All URIs are relative to *https://148.251.91.143:8000/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**productCreatePost**](ProductApi.md#productCreatePost) | **POST** /product/create | 
[**productIdDelete**](ProductApi.md#productIdDelete) | **DELETE** /product/{id} | 
[**productIdGet**](ProductApi.md#productIdGet) | **GET** /product/{id} | 
[**productIdPatch**](ProductApi.md#productIdPatch) | **PATCH** /product/{id} | 
[**productIdSendPatch**](ProductApi.md#productIdSendPatch) | **PATCH** /product/{id}/send | 
[**productListGet**](ProductApi.md#productListGet) | **GET** /product/list | 
[**productPublicGet**](ProductApi.md#productPublicGet) | **GET** /product/public | 


<a name="productCreatePost"></a>
# **productCreatePost**
> ObjectCreated productCreatePost(opts)



Creates new product

### Example
```javascript
var DnlApi = require('dnl_api');
var defaultClient = DnlApi.ApiClient.instance;

// Configure API key authorization: auth_token
var auth_token = defaultClient.authentications['auth_token'];
auth_token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//auth_token.apiKeyPrefix = 'Token';

var apiInstance = new DnlApi.ProductApi();

var opts = { 
  'body': new DnlApi.ProductRoutRateTable() // ProductRoutRateTable | Product to create
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.productCreatePost(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**ProductRoutRateTable**](ProductRoutRateTable.md)| Product to create | [optional] 

### Return type

[**ObjectCreated**](ObjectCreated.md)

### Authorization

[auth_token](../README.md#auth_token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="productIdDelete"></a>
# **productIdDelete**
> Success productIdDelete(id)



Deletes product

### Example
```javascript
var DnlApi = require('dnl_api');
var defaultClient = DnlApi.ApiClient.instance;

// Configure API key authorization: auth_token
var auth_token = defaultClient.authentications['auth_token'];
auth_token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//auth_token.apiKeyPrefix = 'Token';

var apiInstance = new DnlApi.ProductApi();

var id = 789; // Number | Product id to get info about


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.productIdDelete(id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| Product id to get info about | 

### Return type

[**Success**](Success.md)

### Authorization

[auth_token](../README.md#auth_token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="productIdGet"></a>
# **productIdGet**
> InlineResponse200132 productIdGet(id)



Gets product

### Example
```javascript
var DnlApi = require('dnl_api');
var defaultClient = DnlApi.ApiClient.instance;

// Configure API key authorization: auth_token
var auth_token = defaultClient.authentications['auth_token'];
auth_token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//auth_token.apiKeyPrefix = 'Token';

var apiInstance = new DnlApi.ProductApi();

var id = 789; // Number | Product id to get info about


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.productIdGet(id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| Product id to get info about | 

### Return type

[**InlineResponse200132**](InlineResponse200132.md)

### Authorization

[auth_token](../README.md#auth_token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="productIdPatch"></a>
# **productIdPatch**
> InlineResponse200132 productIdPatch(id, opts)



Modifies product

### Example
```javascript
var DnlApi = require('dnl_api');
var defaultClient = DnlApi.ApiClient.instance;

// Configure API key authorization: auth_token
var auth_token = defaultClient.authentications['auth_token'];
auth_token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//auth_token.apiKeyPrefix = 'Token';

var apiInstance = new DnlApi.ProductApi();

var id = 789; // Number | Product id to get info about

var opts = { 
  'body': new DnlApi.ProductRoutRateTable() // ProductRoutRateTable | Product to modify
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.productIdPatch(id, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| Product id to get info about | 
 **body** | [**ProductRoutRateTable**](ProductRoutRateTable.md)| Product to modify | [optional] 

### Return type

[**InlineResponse200132**](InlineResponse200132.md)

### Authorization

[auth_token](../README.md#auth_token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="productIdSendPatch"></a>
# **productIdSendPatch**
> Success productIdSendPatch(id)





### Example
```javascript
var DnlApi = require('dnl_api');
var defaultClient = DnlApi.ApiClient.instance;

// Configure API key authorization: auth_token
var auth_token = defaultClient.authentications['auth_token'];
auth_token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//auth_token.apiKeyPrefix = 'Token';

var apiInstance = new DnlApi.ProductApi();

var id = 789; // Number | Product to proceed


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.productIdSendPatch(id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| Product to proceed | 

### Return type

[**Success**](Success.md)

### Authorization

[auth_token](../README.md#auth_token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="productListGet"></a>
# **productListGet**
> InlineResponse200133 productListGet(opts)



Gets products

### Example
```javascript
var DnlApi = require('dnl_api');
var defaultClient = DnlApi.ApiClient.instance;

// Configure API key authorization: auth_token
var auth_token = defaultClient.authentications['auth_token'];
auth_token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//auth_token.apiKeyPrefix = 'Token';

var apiInstance = new DnlApi.ProductApi();

var opts = { 
  'page': 56, // Number | 
  'perPage': 56, // Number | 
  'orderBy': "orderBy_example", // String | 
  'orderDir': "orderDir_example", // String | 
  'agentId': 56, // Number | 
  'name': "name_example", // String | 
  'rateTableId': 56, // Number | 
  'routePlanId': 56, // Number | 
  'type': "type_example", // String | 
  'updateBy': "updateBy_example", // String | 
  'updateAtGt': "updateAtGt_example", // String | 
  'updateAtLt': "updateAtLt_example" // String | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.productListGet(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **page** | **Number**|  | [optional] 
 **perPage** | **Number**|  | [optional] 
 **orderBy** | **String**|  | [optional] 
 **orderDir** | **String**|  | [optional] 
 **agentId** | **Number**|  | [optional] 
 **name** | **String**|  | [optional] 
 **rateTableId** | **Number**|  | [optional] 
 **routePlanId** | **Number**|  | [optional] 
 **type** | **String**|  | [optional] 
 **updateBy** | **String**|  | [optional] 
 **updateAtGt** | **String**|  | [optional] 
 **updateAtLt** | **String**|  | [optional] 

### Return type

[**InlineResponse200133**](InlineResponse200133.md)

### Authorization

[auth_token](../README.md#auth_token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="productPublicGet"></a>
# **productPublicGet**
> InlineResponse200134 productPublicGet(opts)



Gets publicproducts

### Example
```javascript
var DnlApi = require('dnl_api');
var defaultClient = DnlApi.ApiClient.instance;

// Configure OAuth2 access token for authorization: api_auth
var api_auth = defaultClient.authentications['api_auth'];
api_auth.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new DnlApi.ProductApi();

var opts = { 
  'page': 56, // Number | 
  'perPage': 56, // Number | 
  'orderBy': "orderBy_example", // String | 
  'orderDir': "orderDir_example", // String | 
  'name': "name_example", // String | 
  'reference': 56, // Number | 
  'techPrefix': 56 // Number | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.productPublicGet(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **page** | **Number**|  | [optional] 
 **perPage** | **Number**|  | [optional] 
 **orderBy** | **String**|  | [optional] 
 **orderDir** | **String**|  | [optional] 
 **name** | **String**|  | [optional] 
 **reference** | **Number**|  | [optional] 
 **techPrefix** | **Number**|  | [optional] 

### Return type

[**InlineResponse200134**](InlineResponse200134.md)

### Authorization

[api_auth](../README.md#api_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


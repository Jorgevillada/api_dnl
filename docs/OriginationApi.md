# DnlApi.OriginationApi

All URIs are relative to *https://148.251.91.143:8000/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**didBillingRuleCreatePost**](OriginationApi.md#didBillingRuleCreatePost) | **POST** /did/billing_rule/create | 
[**didBillingRuleIdDelete**](OriginationApi.md#didBillingRuleIdDelete) | **DELETE** /did/billing_rule/{id} | 
[**didBillingRuleIdGet**](OriginationApi.md#didBillingRuleIdGet) | **GET** /did/billing_rule/{id} | 
[**didBillingRuleIdPatch**](OriginationApi.md#didBillingRuleIdPatch) | **PATCH** /did/billing_rule/{id} | 
[**didBillingRuleListGet**](OriginationApi.md#didBillingRuleListGet) | **GET** /did/billing_rule/list | 
[**didClientClientIdDelete**](OriginationApi.md#didClientClientIdDelete) | **DELETE** /did/client/{client_id} | 
[**didClientClientIdGet**](OriginationApi.md#didClientClientIdGet) | **GET** /did/client/{client_id} | 
[**didClientClientIdPatch**](OriginationApi.md#didClientClientIdPatch) | **PATCH** /did/client/{client_id} | 
[**didClientCreatePost**](OriginationApi.md#didClientCreatePost) | **POST** /did/client/create | 
[**didClientListGet**](OriginationApi.md#didClientListGet) | **GET** /did/client/list | 
[**didOrigInvoiceListGet**](OriginationApi.md#didOrigInvoiceListGet) | **GET** /did/orig_invoice/list | 
[**didRepositoryCreatePost**](OriginationApi.md#didRepositoryCreatePost) | **POST** /did/repository/create | 
[**didRepositoryIdDelete**](OriginationApi.md#didRepositoryIdDelete) | **DELETE** /did/repository/{id} | 
[**didRepositoryIdGet**](OriginationApi.md#didRepositoryIdGet) | **GET** /did/repository/{id} | 
[**didRepositoryIdPatch**](OriginationApi.md#didRepositoryIdPatch) | **PATCH** /did/repository/{id} | 
[**didRepositoryListGet**](OriginationApi.md#didRepositoryListGet) | **GET** /did/repository/list | 
[**didRoutingListGet**](OriginationApi.md#didRoutingListGet) | **GET** /did/routing/list | 
[**didVendorClientIdDelete**](OriginationApi.md#didVendorClientIdDelete) | **DELETE** /did/vendor/{client_id} | 
[**didVendorClientIdGet**](OriginationApi.md#didVendorClientIdGet) | **GET** /did/vendor/{client_id} | 
[**didVendorClientIdPatch**](OriginationApi.md#didVendorClientIdPatch) | **PATCH** /did/vendor/{client_id} | 
[**didVendorClientIdUploadDidsPost**](OriginationApi.md#didVendorClientIdUploadDidsPost) | **POST** /did/vendor/{client_id}/upload_dids | 
[**didVendorCreatePost**](OriginationApi.md#didVendorCreatePost) | **POST** /did/vendor/create | 
[**didVendorListGet**](OriginationApi.md#didVendorListGet) | **GET** /did/vendor/list | 


<a name="didBillingRuleCreatePost"></a>
# **didBillingRuleCreatePost**
> ObjectCreated didBillingRuleCreatePost(opts)



Creates new didbillingplan

### Example
```javascript
var DnlApi = require('dnl_api');
var defaultClient = DnlApi.ApiClient.instance;

// Configure API key authorization: auth_token
var auth_token = defaultClient.authentications['auth_token'];
auth_token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//auth_token.apiKeyPrefix = 'Token';

var apiInstance = new DnlApi.OriginationApi();

var opts = { 
  'body': new DnlApi.DidBillingPlan() // DidBillingPlan | DidBillingPlan to create
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.didBillingRuleCreatePost(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**DidBillingPlan**](DidBillingPlan.md)| DidBillingPlan to create | [optional] 

### Return type

[**ObjectCreated**](ObjectCreated.md)

### Authorization

[auth_token](../README.md#auth_token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="didBillingRuleIdDelete"></a>
# **didBillingRuleIdDelete**
> Success didBillingRuleIdDelete(id)



Deletes didbillingplan

### Example
```javascript
var DnlApi = require('dnl_api');
var defaultClient = DnlApi.ApiClient.instance;

// Configure API key authorization: auth_token
var auth_token = defaultClient.authentications['auth_token'];
auth_token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//auth_token.apiKeyPrefix = 'Token';

var apiInstance = new DnlApi.OriginationApi();

var id = 789; // Number | DidBillingPlan id to get info about


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.didBillingRuleIdDelete(id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| DidBillingPlan id to get info about | 

### Return type

[**Success**](Success.md)

### Authorization

[auth_token](../README.md#auth_token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="didBillingRuleIdGet"></a>
# **didBillingRuleIdGet**
> InlineResponse200126 didBillingRuleIdGet(id)



Gets didbillingplan

### Example
```javascript
var DnlApi = require('dnl_api');
var defaultClient = DnlApi.ApiClient.instance;

// Configure API key authorization: auth_token
var auth_token = defaultClient.authentications['auth_token'];
auth_token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//auth_token.apiKeyPrefix = 'Token';

var apiInstance = new DnlApi.OriginationApi();

var id = 789; // Number | DidBillingPlan id to get info about


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.didBillingRuleIdGet(id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| DidBillingPlan id to get info about | 

### Return type

[**InlineResponse200126**](InlineResponse200126.md)

### Authorization

[auth_token](../README.md#auth_token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="didBillingRuleIdPatch"></a>
# **didBillingRuleIdPatch**
> InlineResponse200126 didBillingRuleIdPatch(id, opts)



Modifies didbillingplan

### Example
```javascript
var DnlApi = require('dnl_api');
var defaultClient = DnlApi.ApiClient.instance;

// Configure API key authorization: auth_token
var auth_token = defaultClient.authentications['auth_token'];
auth_token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//auth_token.apiKeyPrefix = 'Token';

var apiInstance = new DnlApi.OriginationApi();

var id = 789; // Number | DidBillingPlan id to get info about

var opts = { 
  'body': new DnlApi.DidBillingPlan() // DidBillingPlan | DidBillingPlan to modify
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.didBillingRuleIdPatch(id, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| DidBillingPlan id to get info about | 
 **body** | [**DidBillingPlan**](DidBillingPlan.md)| DidBillingPlan to modify | [optional] 

### Return type

[**InlineResponse200126**](InlineResponse200126.md)

### Authorization

[auth_token](../README.md#auth_token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="didBillingRuleListGet"></a>
# **didBillingRuleListGet**
> InlineResponse200127 didBillingRuleListGet(opts)



Gets didbillingplans

### Example
```javascript
var DnlApi = require('dnl_api');
var defaultClient = DnlApi.ApiClient.instance;

// Configure API key authorization: auth_token
var auth_token = defaultClient.authentications['auth_token'];
auth_token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//auth_token.apiKeyPrefix = 'Token';

var apiInstance = new DnlApi.OriginationApi();

var opts = { 
  'page': 56, // Number | 
  'perPage': 56, // Number | 
  'orderBy': "orderBy_example", // String | 
  'orderDir': "orderDir_example", // String | 
  'name': "name_example", // String | 
  'rateTableId': 56, // Number | 
  'type': "type_example", // String | 
  'ratePerMinGt': "ratePerMinGt_example", // String | 
  'ratePerMinLt': "ratePerMinLt_example" // String | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.didBillingRuleListGet(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **page** | **Number**|  | [optional] 
 **perPage** | **Number**|  | [optional] 
 **orderBy** | **String**|  | [optional] 
 **orderDir** | **String**|  | [optional] 
 **name** | **String**|  | [optional] 
 **rateTableId** | **Number**|  | [optional] 
 **type** | **String**|  | [optional] 
 **ratePerMinGt** | **String**|  | [optional] 
 **ratePerMinLt** | **String**|  | [optional] 

### Return type

[**InlineResponse200127**](InlineResponse200127.md)

### Authorization

[auth_token](../README.md#auth_token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="didClientClientIdDelete"></a>
# **didClientClientIdDelete**
> Success didClientClientIdDelete(clientId)



Deletes clientdid

### Example
```javascript
var DnlApi = require('dnl_api');
var defaultClient = DnlApi.ApiClient.instance;

// Configure API key authorization: auth_token
var auth_token = defaultClient.authentications['auth_token'];
auth_token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//auth_token.apiKeyPrefix = 'Token';

var apiInstance = new DnlApi.OriginationApi();

var clientId = 789; // Number | ClientDid id to get info about


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.didClientClientIdDelete(clientId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **clientId** | **Number**| ClientDid id to get info about | 

### Return type

[**Success**](Success.md)

### Authorization

[auth_token](../README.md#auth_token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="didClientClientIdGet"></a>
# **didClientClientIdGet**
> InlineResponse200122 didClientClientIdGet(clientId)



Gets clientdid

### Example
```javascript
var DnlApi = require('dnl_api');
var defaultClient = DnlApi.ApiClient.instance;

// Configure API key authorization: auth_token
var auth_token = defaultClient.authentications['auth_token'];
auth_token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//auth_token.apiKeyPrefix = 'Token';

var apiInstance = new DnlApi.OriginationApi();

var clientId = 789; // Number | ClientDid id to get info about


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.didClientClientIdGet(clientId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **clientId** | **Number**| ClientDid id to get info about | 

### Return type

[**InlineResponse200122**](InlineResponse200122.md)

### Authorization

[auth_token](../README.md#auth_token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="didClientClientIdPatch"></a>
# **didClientClientIdPatch**
> InlineResponse200122 didClientClientIdPatch(clientId, opts)



Modifies clientdid

### Example
```javascript
var DnlApi = require('dnl_api');
var defaultClient = DnlApi.ApiClient.instance;

// Configure API key authorization: auth_token
var auth_token = defaultClient.authentications['auth_token'];
auth_token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//auth_token.apiKeyPrefix = 'Token';

var apiInstance = new DnlApi.OriginationApi();

var clientId = 789; // Number | ClientDid id to get info about

var opts = { 
  'body': new DnlApi.ClientDid() // ClientDid | ClientDid to modify
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.didClientClientIdPatch(clientId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **clientId** | **Number**| ClientDid id to get info about | 
 **body** | [**ClientDid**](ClientDid.md)| ClientDid to modify | [optional] 

### Return type

[**InlineResponse200122**](InlineResponse200122.md)

### Authorization

[auth_token](../README.md#auth_token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="didClientCreatePost"></a>
# **didClientCreatePost**
> ObjectCreated didClientCreatePost(opts)



Creates new clientdid

### Example
```javascript
var DnlApi = require('dnl_api');
var defaultClient = DnlApi.ApiClient.instance;

// Configure API key authorization: auth_token
var auth_token = defaultClient.authentications['auth_token'];
auth_token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//auth_token.apiKeyPrefix = 'Token';

var apiInstance = new DnlApi.OriginationApi();

var opts = { 
  'body': new DnlApi.ClientDid() // ClientDid | ClientDid to create
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.didClientCreatePost(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**ClientDid**](ClientDid.md)| ClientDid to create | [optional] 

### Return type

[**ObjectCreated**](ObjectCreated.md)

### Authorization

[auth_token](../README.md#auth_token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="didClientListGet"></a>
# **didClientListGet**
> InlineResponse200123 didClientListGet(opts)



Gets didclients

### Example
```javascript
var DnlApi = require('dnl_api');
var defaultClient = DnlApi.ApiClient.instance;

// Configure API key authorization: auth_token
var auth_token = defaultClient.authentications['auth_token'];
auth_token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//auth_token.apiKeyPrefix = 'Token';

var apiInstance = new DnlApi.OriginationApi();

var opts = { 
  'page': 56, // Number | 
  'perPage': 56, // Number | 
  'orderBy': "orderBy_example", // String | 
  'orderDir': "orderDir_example", // String | 
  'clientId': 56, // Number | 
  'name': "name_example", // String | 
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
apiInstance.didClientListGet(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **page** | **Number**|  | [optional] 
 **perPage** | **Number**|  | [optional] 
 **orderBy** | **String**|  | [optional] 
 **orderDir** | **String**|  | [optional] 
 **clientId** | **Number**|  | [optional] 
 **name** | **String**|  | [optional] 
 **updateAtGt** | **String**|  | [optional] 
 **updateAtLt** | **String**|  | [optional] 

### Return type

[**InlineResponse200123**](InlineResponse200123.md)

### Authorization

[auth_token](../README.md#auth_token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="didOrigInvoiceListGet"></a>
# **didOrigInvoiceListGet**
> InlineResponse200131 didOrigInvoiceListGet(opts)



Gets originvoices

### Example
```javascript
var DnlApi = require('dnl_api');
var defaultClient = DnlApi.ApiClient.instance;

// Configure API key authorization: auth_token
var auth_token = defaultClient.authentications['auth_token'];
auth_token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//auth_token.apiKeyPrefix = 'Token';

var apiInstance = new DnlApi.OriginationApi();

var opts = { 
  'page': 56, // Number | 
  'perPage': 56, // Number | 
  'orderBy': "orderBy_example", // String | 
  'orderDir': "orderDir_example", // String | 
  'clientId': 56, // Number | 
  'createType': "createType_example", // String | 
  'invoiceNumber': "invoiceNumber_example", // String | 
  'state': "state_example", // String | 
  'invoiceTimeGte': "invoiceTimeGte_example", // String | 
  'invoiceTimeLt': "invoiceTimeLt_example" // String | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.didOrigInvoiceListGet(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **page** | **Number**|  | [optional] 
 **perPage** | **Number**|  | [optional] 
 **orderBy** | **String**|  | [optional] 
 **orderDir** | **String**|  | [optional] 
 **clientId** | **Number**|  | [optional] 
 **createType** | **String**|  | [optional] 
 **invoiceNumber** | **String**|  | [optional] 
 **state** | **String**|  | [optional] 
 **invoiceTimeGte** | **String**|  | [optional] 
 **invoiceTimeLt** | **String**|  | [optional] 

### Return type

[**InlineResponse200131**](InlineResponse200131.md)

### Authorization

[auth_token](../README.md#auth_token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="didRepositoryCreatePost"></a>
# **didRepositoryCreatePost**
> ObjectCreated didRepositoryCreatePost(opts)



Creates new didvendor

### Example
```javascript
var DnlApi = require('dnl_api');
var defaultClient = DnlApi.ApiClient.instance;

// Configure API key authorization: auth_token
var auth_token = defaultClient.authentications['auth_token'];
auth_token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//auth_token.apiKeyPrefix = 'Token';

var apiInstance = new DnlApi.OriginationApi();

var opts = { 
  'body': new DnlApi.DidBillingRel() // DidBillingRel | DidVendor to create
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.didRepositoryCreatePost(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**DidBillingRel**](DidBillingRel.md)| DidVendor to create | [optional] 

### Return type

[**ObjectCreated**](ObjectCreated.md)

### Authorization

[auth_token](../README.md#auth_token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="didRepositoryIdDelete"></a>
# **didRepositoryIdDelete**
> Success didRepositoryIdDelete(id)



Deletes didrepository item

### Example
```javascript
var DnlApi = require('dnl_api');
var defaultClient = DnlApi.ApiClient.instance;

// Configure API key authorization: auth_token
var auth_token = defaultClient.authentications['auth_token'];
auth_token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//auth_token.apiKeyPrefix = 'Token';

var apiInstance = new DnlApi.OriginationApi();

var id = 789; // Number | DidRepository item id to get info about


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.didRepositoryIdDelete(id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| DidRepository item id to get info about | 

### Return type

[**Success**](Success.md)

### Authorization

[auth_token](../README.md#auth_token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="didRepositoryIdGet"></a>
# **didRepositoryIdGet**
> InlineResponse200128 didRepositoryIdGet(id)



Gets didrepository item

### Example
```javascript
var DnlApi = require('dnl_api');
var defaultClient = DnlApi.ApiClient.instance;

// Configure API key authorization: auth_token
var auth_token = defaultClient.authentications['auth_token'];
auth_token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//auth_token.apiKeyPrefix = 'Token';

var apiInstance = new DnlApi.OriginationApi();

var id = 789; // Number | DidRepository item id to get info about


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.didRepositoryIdGet(id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| DidRepository item id to get info about | 

### Return type

[**InlineResponse200128**](InlineResponse200128.md)

### Authorization

[auth_token](../README.md#auth_token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="didRepositoryIdPatch"></a>
# **didRepositoryIdPatch**
> InlineResponse200128 didRepositoryIdPatch(id, opts)



Modifies didrepository item

### Example
```javascript
var DnlApi = require('dnl_api');
var defaultClient = DnlApi.ApiClient.instance;

// Configure API key authorization: auth_token
var auth_token = defaultClient.authentications['auth_token'];
auth_token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//auth_token.apiKeyPrefix = 'Token';

var apiInstance = new DnlApi.OriginationApi();

var id = 789; // Number | DidRepository item id to get info about

var opts = { 
  'body': new DnlApi.DidBillingRel() // DidBillingRel | DidRepository item to modify
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.didRepositoryIdPatch(id, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| DidRepository item id to get info about | 
 **body** | [**DidBillingRel**](DidBillingRel.md)| DidRepository item to modify | [optional] 

### Return type

[**InlineResponse200128**](InlineResponse200128.md)

### Authorization

[auth_token](../README.md#auth_token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="didRepositoryListGet"></a>
# **didRepositoryListGet**
> InlineResponse200129 didRepositoryListGet(opts)



Gets didrepository items

### Example
```javascript
var DnlApi = require('dnl_api');
var defaultClient = DnlApi.ApiClient.instance;

// Configure API key authorization: auth_token
var auth_token = defaultClient.authentications['auth_token'];
auth_token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//auth_token.apiKeyPrefix = 'Token';

var apiInstance = new DnlApi.OriginationApi();

var opts = { 
  'page': 56, // Number | 
  'perPage': 56, // Number | 
  'orderBy': "orderBy_example", // String | 
  'orderDir': "orderDir_example", // String | 
  'clientBillingRuleId': 56, // Number | 
  'clientResId': 56, // Number | 
  'did': "did_example", // String | 
  'id': 56, // Number | 
  'vendorBillingRuleId': 56, // Number | 
  'vendorResId': 56 // Number | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.didRepositoryListGet(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **page** | **Number**|  | [optional] 
 **perPage** | **Number**|  | [optional] 
 **orderBy** | **String**|  | [optional] 
 **orderDir** | **String**|  | [optional] 
 **clientBillingRuleId** | **Number**|  | [optional] 
 **clientResId** | **Number**|  | [optional] 
 **did** | **String**|  | [optional] 
 **id** | **Number**|  | [optional] 
 **vendorBillingRuleId** | **Number**|  | [optional] 
 **vendorResId** | **Number**|  | [optional] 

### Return type

[**InlineResponse200129**](InlineResponse200129.md)

### Authorization

[auth_token](../README.md#auth_token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="didRoutingListGet"></a>
# **didRoutingListGet**
> InlineResponse200130 didRoutingListGet(opts)



Gets didstaticrouting items

### Example
```javascript
var DnlApi = require('dnl_api');
var defaultClient = DnlApi.ApiClient.instance;

// Configure API key authorization: auth_token
var auth_token = defaultClient.authentications['auth_token'];
auth_token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//auth_token.apiKeyPrefix = 'Token';

var apiInstance = new DnlApi.OriginationApi();

var opts = { 
  'page': 56, // Number | 
  'perPage': 56, // Number | 
  'orderBy': "orderBy_example", // String | 
  'orderDir': "orderDir_example", // String | 
  'did': "did_example", // String | 
  'itemId': 56, // Number | 
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
apiInstance.didRoutingListGet(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **page** | **Number**|  | [optional] 
 **perPage** | **Number**|  | [optional] 
 **orderBy** | **String**|  | [optional] 
 **orderDir** | **String**|  | [optional] 
 **did** | **String**|  | [optional] 
 **itemId** | **Number**|  | [optional] 
 **updateAtGt** | **String**|  | [optional] 
 **updateAtLt** | **String**|  | [optional] 

### Return type

[**InlineResponse200130**](InlineResponse200130.md)

### Authorization

[auth_token](../README.md#auth_token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="didVendorClientIdDelete"></a>
# **didVendorClientIdDelete**
> Success didVendorClientIdDelete(clientId)



Deletes didvendor

### Example
```javascript
var DnlApi = require('dnl_api');
var defaultClient = DnlApi.ApiClient.instance;

// Configure API key authorization: auth_token
var auth_token = defaultClient.authentications['auth_token'];
auth_token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//auth_token.apiKeyPrefix = 'Token';

var apiInstance = new DnlApi.OriginationApi();

var clientId = 789; // Number | DidVendor id to get info about


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.didVendorClientIdDelete(clientId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **clientId** | **Number**| DidVendor id to get info about | 

### Return type

[**Success**](Success.md)

### Authorization

[auth_token](../README.md#auth_token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="didVendorClientIdGet"></a>
# **didVendorClientIdGet**
> InlineResponse200124 didVendorClientIdGet(clientId)



Gets didvendor

### Example
```javascript
var DnlApi = require('dnl_api');
var defaultClient = DnlApi.ApiClient.instance;

// Configure API key authorization: auth_token
var auth_token = defaultClient.authentications['auth_token'];
auth_token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//auth_token.apiKeyPrefix = 'Token';

var apiInstance = new DnlApi.OriginationApi();

var clientId = 789; // Number | DidVendor id to get info about


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.didVendorClientIdGet(clientId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **clientId** | **Number**| DidVendor id to get info about | 

### Return type

[**InlineResponse200124**](InlineResponse200124.md)

### Authorization

[auth_token](../README.md#auth_token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="didVendorClientIdPatch"></a>
# **didVendorClientIdPatch**
> InlineResponse200124 didVendorClientIdPatch(clientId, opts)



Modifies didvendor

### Example
```javascript
var DnlApi = require('dnl_api');
var defaultClient = DnlApi.ApiClient.instance;

// Configure API key authorization: auth_token
var auth_token = defaultClient.authentications['auth_token'];
auth_token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//auth_token.apiKeyPrefix = 'Token';

var apiInstance = new DnlApi.OriginationApi();

var clientId = 789; // Number | DidVendor id to get info about

var opts = { 
  'body': new DnlApi.VendorDid() // VendorDid | DidVendor to modify
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.didVendorClientIdPatch(clientId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **clientId** | **Number**| DidVendor id to get info about | 
 **body** | [**VendorDid**](VendorDid.md)| DidVendor to modify | [optional] 

### Return type

[**InlineResponse200124**](InlineResponse200124.md)

### Authorization

[auth_token](../README.md#auth_token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="didVendorClientIdUploadDidsPost"></a>
# **didVendorClientIdUploadDidsPost**
> InlineResponse200124 didVendorClientIdUploadDidsPost(dupliateHandling, file, clientId)



Creates new vendordids file

### Example
```javascript
var DnlApi = require('dnl_api');
var defaultClient = DnlApi.ApiClient.instance;

// Configure API key authorization: auth_token
var auth_token = defaultClient.authentications['auth_token'];
auth_token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//auth_token.apiKeyPrefix = 'Token';

var apiInstance = new DnlApi.OriginationApi();

var dupliateHandling = "Overwrite"; // String | How to handle duplicates

var file = "/path/to/file.txt"; // File | File to upload

var clientId = 789; // Number | Vendor to upload DIDs


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.didVendorClientIdUploadDidsPost(dupliateHandling, file, clientId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **dupliateHandling** | **String**| How to handle duplicates | [default to Overwrite]
 **file** | **File**| File to upload | 
 **clientId** | **Number**| Vendor to upload DIDs | 

### Return type

[**InlineResponse200124**](InlineResponse200124.md)

### Authorization

[auth_token](../README.md#auth_token)

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/json

<a name="didVendorCreatePost"></a>
# **didVendorCreatePost**
> ObjectCreated didVendorCreatePost(opts)



Creates new didvendor

### Example
```javascript
var DnlApi = require('dnl_api');
var defaultClient = DnlApi.ApiClient.instance;

// Configure API key authorization: auth_token
var auth_token = defaultClient.authentications['auth_token'];
auth_token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//auth_token.apiKeyPrefix = 'Token';

var apiInstance = new DnlApi.OriginationApi();

var opts = { 
  'body': new DnlApi.VendorDid() // VendorDid | DidVendor to create
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.didVendorCreatePost(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**VendorDid**](VendorDid.md)| DidVendor to create | [optional] 

### Return type

[**ObjectCreated**](ObjectCreated.md)

### Authorization

[auth_token](../README.md#auth_token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="didVendorListGet"></a>
# **didVendorListGet**
> InlineResponse200125 didVendorListGet(opts)



Gets didvendors

### Example
```javascript
var DnlApi = require('dnl_api');
var defaultClient = DnlApi.ApiClient.instance;

// Configure API key authorization: auth_token
var auth_token = defaultClient.authentications['auth_token'];
auth_token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//auth_token.apiKeyPrefix = 'Token';

var apiInstance = new DnlApi.OriginationApi();

var opts = { 
  'page': 56, // Number | 
  'perPage': 56, // Number | 
  'orderBy': "orderBy_example", // String | 
  'orderDir': "orderDir_example", // String | 
  'clientId': 56, // Number | 
  'name': "name_example", // String | 
  'status': true, // Boolean | 
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
apiInstance.didVendorListGet(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **page** | **Number**|  | [optional] 
 **perPage** | **Number**|  | [optional] 
 **orderBy** | **String**|  | [optional] 
 **orderDir** | **String**|  | [optional] 
 **clientId** | **Number**|  | [optional] 
 **name** | **String**|  | [optional] 
 **status** | **Boolean**|  | [optional] 
 **updateAtGt** | **String**|  | [optional] 
 **updateAtLt** | **String**|  | [optional] 

### Return type

[**InlineResponse200125**](InlineResponse200125.md)

### Authorization

[auth_token](../README.md#auth_token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


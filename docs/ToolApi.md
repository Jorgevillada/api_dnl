# DnlApi.ToolApi

All URIs are relative to *https://148.251.91.143:8000/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**toolRateGenerationIdDelete**](ToolApi.md#toolRateGenerationIdDelete) | **DELETE** /tool/rate_generation/{id} | 
[**toolRateGenerationIdGet**](ToolApi.md#toolRateGenerationIdGet) | **GET** /tool/rate_generation/{id} | 
[**toolRateGenerationIdPatch**](ToolApi.md#toolRateGenerationIdPatch) | **PATCH** /tool/rate_generation/{id} | 
[**toolRateGenerationListGet**](ToolApi.md#toolRateGenerationListGet) | **GET** /tool/rate_generation/list | 
[**toolRateGenerationPost**](ToolApi.md#toolRateGenerationPost) | **POST** /tool/rate_generation | 
[**toolRerateIdDelete**](ToolApi.md#toolRerateIdDelete) | **DELETE** /tool/rerate/{id} | 
[**toolRerateIdGet**](ToolApi.md#toolRerateIdGet) | **GET** /tool/rerate/{id} | 
[**toolRerateIdPatch**](ToolApi.md#toolRerateIdPatch) | **PATCH** /tool/rerate/{id} | 
[**toolRerateListGet**](ToolApi.md#toolRerateListGet) | **GET** /tool/rerate/list | 
[**toolReratePost**](ToolApi.md#toolReratePost) | **POST** /tool/rerate | 
[**toolSendRateDetailListGet**](ToolApi.md#toolSendRateDetailListGet) | **GET** /tool/send_rate/detail_list | 
[**toolSendRateListGet**](ToolApi.md#toolSendRateListGet) | **GET** /tool/send_rate/list | 
[**toolSendRatePost**](ToolApi.md#toolSendRatePost) | **POST** /tool/send_rate | 
[**toolSimulateCallPost**](ToolApi.md#toolSimulateCallPost) | **POST** /tool/simulate_call | 


<a name="toolRateGenerationIdDelete"></a>
# **toolRateGenerationIdDelete**
> Success toolRateGenerationIdDelete(id)



Deletes rategenerationtemplate

### Example
```javascript
var DnlApi = require('dnl_api');
var defaultClient = DnlApi.ApiClient.instance;

// Configure API key authorization: auth_token
var auth_token = defaultClient.authentications['auth_token'];
auth_token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//auth_token.apiKeyPrefix = 'Token';

var apiInstance = new DnlApi.ToolApi();

var id = 789; // Number | RateGenerationTemplate id to get info about


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.toolRateGenerationIdDelete(id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| RateGenerationTemplate id to get info about | 

### Return type

[**Success**](Success.md)

### Authorization

[auth_token](../README.md#auth_token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="toolRateGenerationIdGet"></a>
# **toolRateGenerationIdGet**
> InlineResponse200175 toolRateGenerationIdGet(id)



Gets rategenerationtemplate

### Example
```javascript
var DnlApi = require('dnl_api');
var defaultClient = DnlApi.ApiClient.instance;

// Configure API key authorization: auth_token
var auth_token = defaultClient.authentications['auth_token'];
auth_token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//auth_token.apiKeyPrefix = 'Token';

var apiInstance = new DnlApi.ToolApi();

var id = 789; // Number | RateGenerationTemplate id to get info about


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.toolRateGenerationIdGet(id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| RateGenerationTemplate id to get info about | 

### Return type

[**InlineResponse200175**](InlineResponse200175.md)

### Authorization

[auth_token](../README.md#auth_token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="toolRateGenerationIdPatch"></a>
# **toolRateGenerationIdPatch**
> InlineResponse200175 toolRateGenerationIdPatch(id, opts)



Modifies rategenerationtemplate

### Example
```javascript
var DnlApi = require('dnl_api');
var defaultClient = DnlApi.ApiClient.instance;

// Configure API key authorization: auth_token
var auth_token = defaultClient.authentications['auth_token'];
auth_token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//auth_token.apiKeyPrefix = 'Token';

var apiInstance = new DnlApi.ToolApi();

var id = 789; // Number | RateGenerationTemplate id to get info about

var opts = { 
  'body': new DnlApi.RateGenerationTemplate() // RateGenerationTemplate | RateGenerationTemplate to modify
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.toolRateGenerationIdPatch(id, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| RateGenerationTemplate id to get info about | 
 **body** | [**RateGenerationTemplate**](RateGenerationTemplate.md)| RateGenerationTemplate to modify | [optional] 

### Return type

[**InlineResponse200175**](InlineResponse200175.md)

### Authorization

[auth_token](../README.md#auth_token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="toolRateGenerationListGet"></a>
# **toolRateGenerationListGet**
> InlineResponse200176 toolRateGenerationListGet(opts)



Gets rategenerationtemplates

### Example
```javascript
var DnlApi = require('dnl_api');
var defaultClient = DnlApi.ApiClient.instance;

// Configure API key authorization: auth_token
var auth_token = defaultClient.authentications['auth_token'];
auth_token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//auth_token.apiKeyPrefix = 'Token';

var apiInstance = new DnlApi.ToolApi();

var opts = { 
  'page': 56, // Number | 
  'perPage': 56, // Number | 
  'orderBy': "orderBy_example", // String | 
  'orderDir': "orderDir_example", // String | 
  'createBy': "createBy_example", // String | 
  'name': "name_example", // String | 
  'createOnGt': "createOnGt_example", // String | 
  'createOnLt': "createOnLt_example", // String | 
  'lastGeneratedGt': "lastGeneratedGt_example", // String | 
  'lastGeneratedLt': "lastGeneratedLt_example" // String | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.toolRateGenerationListGet(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **page** | **Number**|  | [optional] 
 **perPage** | **Number**|  | [optional] 
 **orderBy** | **String**|  | [optional] 
 **orderDir** | **String**|  | [optional] 
 **createBy** | **String**|  | [optional] 
 **name** | **String**|  | [optional] 
 **createOnGt** | **String**|  | [optional] 
 **createOnLt** | **String**|  | [optional] 
 **lastGeneratedGt** | **String**|  | [optional] 
 **lastGeneratedLt** | **String**|  | [optional] 

### Return type

[**InlineResponse200176**](InlineResponse200176.md)

### Authorization

[auth_token](../README.md#auth_token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="toolRateGenerationPost"></a>
# **toolRateGenerationPost**
> ObjectCreated toolRateGenerationPost(opts)



Creates new rategenerationtemplate

### Example
```javascript
var DnlApi = require('dnl_api');
var defaultClient = DnlApi.ApiClient.instance;

// Configure API key authorization: auth_token
var auth_token = defaultClient.authentications['auth_token'];
auth_token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//auth_token.apiKeyPrefix = 'Token';

var apiInstance = new DnlApi.ToolApi();

var opts = { 
  'body': new DnlApi.RateGenerationTemplate() // RateGenerationTemplate | RateGenerationTemplate to create
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.toolRateGenerationPost(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**RateGenerationTemplate**](RateGenerationTemplate.md)| RateGenerationTemplate to create | [optional] 

### Return type

[**ObjectCreated**](ObjectCreated.md)

### Authorization

[auth_token](../README.md#auth_token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="toolRerateIdDelete"></a>
# **toolRerateIdDelete**
> Success toolRerateIdDelete(id)



Deletes reratecdrtask

### Example
```javascript
var DnlApi = require('dnl_api');
var defaultClient = DnlApi.ApiClient.instance;

// Configure API key authorization: auth_token
var auth_token = defaultClient.authentications['auth_token'];
auth_token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//auth_token.apiKeyPrefix = 'Token';

var apiInstance = new DnlApi.ToolApi();

var id = 789; // Number | RerateCdrTask id to get info about


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.toolRerateIdDelete(id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| RerateCdrTask id to get info about | 

### Return type

[**Success**](Success.md)

### Authorization

[auth_token](../README.md#auth_token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="toolRerateIdGet"></a>
# **toolRerateIdGet**
> InlineResponse200177 toolRerateIdGet(id)



Gets reratecdrtask

### Example
```javascript
var DnlApi = require('dnl_api');
var defaultClient = DnlApi.ApiClient.instance;

// Configure API key authorization: auth_token
var auth_token = defaultClient.authentications['auth_token'];
auth_token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//auth_token.apiKeyPrefix = 'Token';

var apiInstance = new DnlApi.ToolApi();

var id = 789; // Number | RerateCdrTask id to get info about


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.toolRerateIdGet(id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| RerateCdrTask id to get info about | 

### Return type

[**InlineResponse200177**](InlineResponse200177.md)

### Authorization

[auth_token](../README.md#auth_token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="toolRerateIdPatch"></a>
# **toolRerateIdPatch**
> InlineResponse200177 toolRerateIdPatch(id, opts)



Modifies reratecdrtask

### Example
```javascript
var DnlApi = require('dnl_api');
var defaultClient = DnlApi.ApiClient.instance;

// Configure API key authorization: auth_token
var auth_token = defaultClient.authentications['auth_token'];
auth_token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//auth_token.apiKeyPrefix = 'Token';

var apiInstance = new DnlApi.ToolApi();

var id = 789; // Number | RerateCdrTask id to get info about

var opts = { 
  'body': new DnlApi.RerateCdrTask() // RerateCdrTask | RerateCdrTask to modify
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.toolRerateIdPatch(id, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| RerateCdrTask id to get info about | 
 **body** | [**RerateCdrTask**](RerateCdrTask.md)| RerateCdrTask to modify | [optional] 

### Return type

[**InlineResponse200177**](InlineResponse200177.md)

### Authorization

[auth_token](../README.md#auth_token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="toolRerateListGet"></a>
# **toolRerateListGet**
> InlineResponse200178 toolRerateListGet(opts)



Gets reratecdrtasks

### Example
```javascript
var DnlApi = require('dnl_api');
var defaultClient = DnlApi.ApiClient.instance;

// Configure API key authorization: auth_token
var auth_token = defaultClient.authentications['auth_token'];
auth_token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//auth_token.apiKeyPrefix = 'Token';

var apiInstance = new DnlApi.ToolApi();

var opts = { 
  'page': 56, // Number | 
  'perPage': 56, // Number | 
  'orderBy': "orderBy_example", // String | 
  'orderDir': "orderDir_example" // String | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.toolRerateListGet(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **page** | **Number**|  | [optional] 
 **perPage** | **Number**|  | [optional] 
 **orderBy** | **String**|  | [optional] 
 **orderDir** | **String**|  | [optional] 

### Return type

[**InlineResponse200178**](InlineResponse200178.md)

### Authorization

[auth_token](../README.md#auth_token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="toolReratePost"></a>
# **toolReratePost**
> ObjectCreated toolReratePost(opts)



Creates new reratecdrtask

### Example
```javascript
var DnlApi = require('dnl_api');
var defaultClient = DnlApi.ApiClient.instance;

// Configure API key authorization: auth_token
var auth_token = defaultClient.authentications['auth_token'];
auth_token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//auth_token.apiKeyPrefix = 'Token';

var apiInstance = new DnlApi.ToolApi();

var opts = { 
  'body': new DnlApi.RerateCdrTask() // RerateCdrTask | RerateCdrTask to create
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.toolReratePost(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**RerateCdrTask**](RerateCdrTask.md)| RerateCdrTask to create | [optional] 

### Return type

[**ObjectCreated**](ObjectCreated.md)

### Authorization

[auth_token](../README.md#auth_token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="toolSendRateDetailListGet"></a>
# **toolSendRateDetailListGet**
> InlineResponse200180 toolSendRateDetailListGet(opts)



Gets ratesendlogdetail

### Example
```javascript
var DnlApi = require('dnl_api');
var defaultClient = DnlApi.ApiClient.instance;

// Configure API key authorization: auth_token
var auth_token = defaultClient.authentications['auth_token'];
auth_token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//auth_token.apiKeyPrefix = 'Token';

var apiInstance = new DnlApi.ToolApi();

var opts = { 
  'page': 56, // Number | 
  'perPage': 56, // Number | 
  'orderBy': "orderBy_example", // String | 
  'orderDir': "orderDir_example", // String | 
  'id': 56, // Number | 
  'sendTo': "sendTo_example", // String | 
  'status': "status_example", // String | 
  'trunkId': 56, // Number | 
  'downloadDateGt': "downloadDateGt_example", // String | 
  'downloadDateLt': "downloadDateLt_example", // String | 
  'downloadDeadlineGt': "downloadDeadlineGt_example", // String | 
  'downloadDeadlineLt': "downloadDeadlineLt_example" // String | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.toolSendRateDetailListGet(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **page** | **Number**|  | [optional] 
 **perPage** | **Number**|  | [optional] 
 **orderBy** | **String**|  | [optional] 
 **orderDir** | **String**|  | [optional] 
 **id** | **Number**|  | [optional] 
 **sendTo** | **String**|  | [optional] 
 **status** | **String**|  | [optional] 
 **trunkId** | **Number**|  | [optional] 
 **downloadDateGt** | **String**|  | [optional] 
 **downloadDateLt** | **String**|  | [optional] 
 **downloadDeadlineGt** | **String**|  | [optional] 
 **downloadDeadlineLt** | **String**|  | [optional] 

### Return type

[**InlineResponse200180**](InlineResponse200180.md)

### Authorization

[auth_token](../README.md#auth_token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="toolSendRateListGet"></a>
# **toolSendRateListGet**
> InlineResponse200179 toolSendRateListGet(opts)



Gets ratesendlog

### Example
```javascript
var DnlApi = require('dnl_api');
var defaultClient = DnlApi.ApiClient.instance;

// Configure API key authorization: auth_token
var auth_token = defaultClient.authentications['auth_token'];
auth_token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//auth_token.apiKeyPrefix = 'Token';

var apiInstance = new DnlApi.ToolApi();

var opts = { 
  'page': 56, // Number | 
  'perPage': 56, // Number | 
  'orderBy': "orderBy_example", // String | 
  'orderDir': "orderDir_example" // String | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.toolSendRateListGet(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **page** | **Number**|  | [optional] 
 **perPage** | **Number**|  | [optional] 
 **orderBy** | **String**|  | [optional] 
 **orderDir** | **String**|  | [optional] 

### Return type

[**InlineResponse200179**](InlineResponse200179.md)

### Authorization

[auth_token](../README.md#auth_token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="toolSendRatePost"></a>
# **toolSendRatePost**
> ObjectCreated toolSendRatePost(opts)



Creates new ratesend

### Example
```javascript
var DnlApi = require('dnl_api');
var defaultClient = DnlApi.ApiClient.instance;

// Configure API key authorization: auth_token
var auth_token = defaultClient.authentications['auth_token'];
auth_token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//auth_token.apiKeyPrefix = 'Token';

var apiInstance = new DnlApi.ToolApi();

var opts = { 
  'body': new DnlApi.RateSend() // RateSend | RateSend to create
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.toolSendRatePost(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**RateSend**](RateSend.md)| RateSend to create | [optional] 

### Return type

[**ObjectCreated**](ObjectCreated.md)

### Authorization

[auth_token](../README.md#auth_token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="toolSimulateCallPost"></a>
# **toolSimulateCallPost**
> Success toolSimulateCallPost(opts)



make simulate call

### Example
```javascript
var DnlApi = require('dnl_api');
var defaultClient = DnlApi.ApiClient.instance;

// Configure API key authorization: auth_token
var auth_token = defaultClient.authentications['auth_token'];
auth_token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//auth_token.apiKeyPrefix = 'Token';

var apiInstance = new DnlApi.ToolApi();

var opts = { 
  'body': new DnlApi.ClientCdrSimulateCall() // ClientCdrSimulateCall | Carriers to create
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.toolSimulateCallPost(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**ClientCdrSimulateCall**](ClientCdrSimulateCall.md)| Carriers to create | [optional] 

### Return type

[**Success**](Success.md)

### Authorization

[auth_token](../README.md#auth_token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


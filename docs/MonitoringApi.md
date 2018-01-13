# DnlApi.MonitoringApi

All URIs are relative to *https://198.100.149.164:8000/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**monitoringFraudDetectionAllDelete**](MonitoringApi.md#monitoringFraudDetectionAllDelete) | **DELETE** /monitoring/fraud_detection/all | 
[**monitoringFraudDetectionAllPatch**](MonitoringApi.md#monitoringFraudDetectionAllPatch) | **PATCH** /monitoring/fraud_detection/all | 
[**monitoringFraudDetectionIdDelete**](MonitoringApi.md#monitoringFraudDetectionIdDelete) | **DELETE** /monitoring/fraud_detection/{id} | 
[**monitoringFraudDetectionIdGet**](MonitoringApi.md#monitoringFraudDetectionIdGet) | **GET** /monitoring/fraud_detection/{id} | 
[**monitoringFraudDetectionIdPatch**](MonitoringApi.md#monitoringFraudDetectionIdPatch) | **PATCH** /monitoring/fraud_detection/{id} | 
[**monitoringFraudDetectionListGet**](MonitoringApi.md#monitoringFraudDetectionListGet) | **GET** /monitoring/fraud_detection/list | 
[**monitoringFraudDetectionPost**](MonitoringApi.md#monitoringFraudDetectionPost) | **POST** /monitoring/fraud_detection | 
[**monitoringLoopDetectionAllDelete**](MonitoringApi.md#monitoringLoopDetectionAllDelete) | **DELETE** /monitoring/loop_detection/all | 
[**monitoringLoopDetectionAllPatch**](MonitoringApi.md#monitoringLoopDetectionAllPatch) | **PATCH** /monitoring/loop_detection/all | 
[**monitoringLoopDetectionIdDelete**](MonitoringApi.md#monitoringLoopDetectionIdDelete) | **DELETE** /monitoring/loop_detection/{id} | 
[**monitoringLoopDetectionIdGet**](MonitoringApi.md#monitoringLoopDetectionIdGet) | **GET** /monitoring/loop_detection/{id} | 
[**monitoringLoopDetectionIdPatch**](MonitoringApi.md#monitoringLoopDetectionIdPatch) | **PATCH** /monitoring/loop_detection/{id} | 
[**monitoringLoopDetectionListGet**](MonitoringApi.md#monitoringLoopDetectionListGet) | **GET** /monitoring/loop_detection/list | 
[**monitoringLoopDetectionPost**](MonitoringApi.md#monitoringLoopDetectionPost) | **POST** /monitoring/loop_detection | 
[**monitoringRuleAllDelete**](MonitoringApi.md#monitoringRuleAllDelete) | **DELETE** /monitoring/rule/all | 
[**monitoringRuleAllPatch**](MonitoringApi.md#monitoringRuleAllPatch) | **PATCH** /monitoring/rule/all | 
[**monitoringRuleIdDelete**](MonitoringApi.md#monitoringRuleIdDelete) | **DELETE** /monitoring/rule/{id} | 
[**monitoringRuleIdGet**](MonitoringApi.md#monitoringRuleIdGet) | **GET** /monitoring/rule/{id} | 
[**monitoringRuleIdPatch**](MonitoringApi.md#monitoringRuleIdPatch) | **PATCH** /monitoring/rule/{id} | 
[**monitoringRuleListGet**](MonitoringApi.md#monitoringRuleListGet) | **GET** /monitoring/rule/list | 
[**monitoringRulePost**](MonitoringApi.md#monitoringRulePost) | **POST** /monitoring/rule | 


<a name="monitoringFraudDetectionAllDelete"></a>
# **monitoringFraudDetectionAllDelete**
> InlineResponse2002 monitoringFraudDetectionAllDelete(opts)



Deletes multiple found frauddetection

### Example
```javascript
var DnlApi = require('dnl_api');
var defaultClient = DnlApi.ApiClient.instance;

// Configure API key authorization: auth_token
var auth_token = defaultClient.authentications['auth_token'];
auth_token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//auth_token.apiKeyPrefix = 'Token';

var apiInstance = new DnlApi.MonitoringApi();

var opts = { 
  'active': true, // Boolean | 
  'enableBlock': true, // Boolean | 
  'hour24Duration': 56, // Number | 
  'hour24Revenue': 56, // Number | 
  'name': "name_example", // String | 
  'oneHourDuration': 56, // Number | 
  'oneHourRevenue': 56 // Number | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.monitoringFraudDetectionAllDelete(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **active** | **Boolean**|  | [optional] 
 **enableBlock** | **Boolean**|  | [optional] 
 **hour24Duration** | **Number**|  | [optional] 
 **hour24Revenue** | **Number**|  | [optional] 
 **name** | **String**|  | [optional] 
 **oneHourDuration** | **Number**|  | [optional] 
 **oneHourRevenue** | **Number**|  | [optional] 

### Return type

[**InlineResponse2002**](InlineResponse2002.md)

### Authorization

[auth_token](../README.md#auth_token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="monitoringFraudDetectionAllPatch"></a>
# **monitoringFraudDetectionAllPatch**
> InlineResponse2002 monitoringFraudDetectionAllPatch(opts)



Modifies multiple found frauddetection

### Example
```javascript
var DnlApi = require('dnl_api');
var defaultClient = DnlApi.ApiClient.instance;

// Configure API key authorization: auth_token
var auth_token = defaultClient.authentications['auth_token'];
auth_token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//auth_token.apiKeyPrefix = 'Token';

var apiInstance = new DnlApi.MonitoringApi();

var opts = { 
  'body': new DnlApi.FraudDetectionActivate(), // FraudDetectionActivate | FraudDetection to modify
  'active': true, // Boolean | 
  'enableBlock': true, // Boolean | 
  'hour24Duration': 56, // Number | 
  'hour24Revenue': 56, // Number | 
  'name': "name_example", // String | 
  'oneHourDuration': 56, // Number | 
  'oneHourRevenue': 56 // Number | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.monitoringFraudDetectionAllPatch(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**FraudDetectionActivate**](FraudDetectionActivate.md)| FraudDetection to modify | [optional] 
 **active** | **Boolean**|  | [optional] 
 **enableBlock** | **Boolean**|  | [optional] 
 **hour24Duration** | **Number**|  | [optional] 
 **hour24Revenue** | **Number**|  | [optional] 
 **name** | **String**|  | [optional] 
 **oneHourDuration** | **Number**|  | [optional] 
 **oneHourRevenue** | **Number**|  | [optional] 

### Return type

[**InlineResponse2002**](InlineResponse2002.md)

### Authorization

[auth_token](../README.md#auth_token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="monitoringFraudDetectionIdDelete"></a>
# **monitoringFraudDetectionIdDelete**
> Success monitoringFraudDetectionIdDelete(id)



Deletes frauddetection rule

### Example
```javascript
var DnlApi = require('dnl_api');
var defaultClient = DnlApi.ApiClient.instance;

// Configure API key authorization: auth_token
var auth_token = defaultClient.authentications['auth_token'];
auth_token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//auth_token.apiKeyPrefix = 'Token';

var apiInstance = new DnlApi.MonitoringApi();

var id = 789; // Number | FraudDetection rule id to get info about


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.monitoringFraudDetectionIdDelete(id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| FraudDetection rule id to get info about | 

### Return type

[**Success**](Success.md)

### Authorization

[auth_token](../README.md#auth_token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="monitoringFraudDetectionIdGet"></a>
# **monitoringFraudDetectionIdGet**
> InlineResponse200134 monitoringFraudDetectionIdGet(id)



Gets frauddetection rule

### Example
```javascript
var DnlApi = require('dnl_api');
var defaultClient = DnlApi.ApiClient.instance;

// Configure API key authorization: auth_token
var auth_token = defaultClient.authentications['auth_token'];
auth_token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//auth_token.apiKeyPrefix = 'Token';

var apiInstance = new DnlApi.MonitoringApi();

var id = 789; // Number | FraudDetection rule id to get info about


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.monitoringFraudDetectionIdGet(id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| FraudDetection rule id to get info about | 

### Return type

[**InlineResponse200134**](InlineResponse200134.md)

### Authorization

[auth_token](../README.md#auth_token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="monitoringFraudDetectionIdPatch"></a>
# **monitoringFraudDetectionIdPatch**
> InlineResponse200134 monitoringFraudDetectionIdPatch(id, opts)



Modifies frauddetection rule

### Example
```javascript
var DnlApi = require('dnl_api');
var defaultClient = DnlApi.ApiClient.instance;

// Configure API key authorization: auth_token
var auth_token = defaultClient.authentications['auth_token'];
auth_token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//auth_token.apiKeyPrefix = 'Token';

var apiInstance = new DnlApi.MonitoringApi();

var id = 789; // Number | FraudDetection rule id to get info about

var opts = { 
  'body': new DnlApi.FraudDetection() // FraudDetection | FraudDetection rule to modify
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.monitoringFraudDetectionIdPatch(id, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| FraudDetection rule id to get info about | 
 **body** | [**FraudDetection**](FraudDetection.md)| FraudDetection rule to modify | [optional] 

### Return type

[**InlineResponse200134**](InlineResponse200134.md)

### Authorization

[auth_token](../README.md#auth_token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="monitoringFraudDetectionListGet"></a>
# **monitoringFraudDetectionListGet**
> InlineResponse200135 monitoringFraudDetectionListGet(opts)



Gets frauddetection rules

### Example
```javascript
var DnlApi = require('dnl_api');
var defaultClient = DnlApi.ApiClient.instance;

// Configure API key authorization: auth_token
var auth_token = defaultClient.authentications['auth_token'];
auth_token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//auth_token.apiKeyPrefix = 'Token';

var apiInstance = new DnlApi.MonitoringApi();

var opts = { 
  'page': 56, // Number | 
  'perPage': 56, // Number | 
  'orderBy': "orderBy_example", // String | 
  'orderDir': "orderDir_example", // String | 
  'active': true, // Boolean | 
  'enableBlock': true, // Boolean | 
  'hour24Duration': 56, // Number | 
  'hour24Revenue': 56, // Number | 
  'name': "name_example", // String | 
  'oneHourDuration': 56, // Number | 
  'oneHourRevenue': 56, // Number | 
  'updateBy': "updateBy_example", // String | 
  'updateOnGt': "updateOnGt_example", // String | 
  'updateOnLt': "updateOnLt_example" // String | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.monitoringFraudDetectionListGet(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **page** | **Number**|  | [optional] 
 **perPage** | **Number**|  | [optional] 
 **orderBy** | **String**|  | [optional] 
 **orderDir** | **String**|  | [optional] 
 **active** | **Boolean**|  | [optional] 
 **enableBlock** | **Boolean**|  | [optional] 
 **hour24Duration** | **Number**|  | [optional] 
 **hour24Revenue** | **Number**|  | [optional] 
 **name** | **String**|  | [optional] 
 **oneHourDuration** | **Number**|  | [optional] 
 **oneHourRevenue** | **Number**|  | [optional] 
 **updateBy** | **String**|  | [optional] 
 **updateOnGt** | **String**|  | [optional] 
 **updateOnLt** | **String**|  | [optional] 

### Return type

[**InlineResponse200135**](InlineResponse200135.md)

### Authorization

[auth_token](../README.md#auth_token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="monitoringFraudDetectionPost"></a>
# **monitoringFraudDetectionPost**
> ObjectCreated monitoringFraudDetectionPost(opts)



Creates new frauddetection rules

### Example
```javascript
var DnlApi = require('dnl_api');
var defaultClient = DnlApi.ApiClient.instance;

// Configure API key authorization: auth_token
var auth_token = defaultClient.authentications['auth_token'];
auth_token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//auth_token.apiKeyPrefix = 'Token';

var apiInstance = new DnlApi.MonitoringApi();

var opts = { 
  'body': new DnlApi.FraudDetection() // FraudDetection | FraudDetection rules to create
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.monitoringFraudDetectionPost(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**FraudDetection**](FraudDetection.md)| FraudDetection rules to create | [optional] 

### Return type

[**ObjectCreated**](ObjectCreated.md)

### Authorization

[auth_token](../README.md#auth_token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="monitoringLoopDetectionAllDelete"></a>
# **monitoringLoopDetectionAllDelete**
> InlineResponse2002 monitoringLoopDetectionAllDelete(opts)



Deletes multiple found loopdetection

### Example
```javascript
var DnlApi = require('dnl_api');
var defaultClient = DnlApi.ApiClient.instance;

// Configure API key authorization: auth_token
var auth_token = defaultClient.authentications['auth_token'];
auth_token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//auth_token.apiKeyPrefix = 'Token';

var apiInstance = new DnlApi.MonitoringApi();

var opts = { 
  'blockSecond': 56, // Number | 
  'name': "name_example", // String | 
  'occurance': 56, // Number | 
  'period': 56 // Number | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.monitoringLoopDetectionAllDelete(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **blockSecond** | **Number**|  | [optional] 
 **name** | **String**|  | [optional] 
 **occurance** | **Number**|  | [optional] 
 **period** | **Number**|  | [optional] 

### Return type

[**InlineResponse2002**](InlineResponse2002.md)

### Authorization

[auth_token](../README.md#auth_token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="monitoringLoopDetectionAllPatch"></a>
# **monitoringLoopDetectionAllPatch**
> InlineResponse2002 monitoringLoopDetectionAllPatch(opts)



Modifies multiple found loopdetection

### Example
```javascript
var DnlApi = require('dnl_api');
var defaultClient = DnlApi.ApiClient.instance;

// Configure API key authorization: auth_token
var auth_token = defaultClient.authentications['auth_token'];
auth_token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//auth_token.apiKeyPrefix = 'Token';

var apiInstance = new DnlApi.MonitoringApi();

var opts = { 
  'body': new DnlApi.LoopDetectionActivate(), // LoopDetectionActivate | LoopDetection to modify
  'blockSecond': 56, // Number | 
  'name': "name_example", // String | 
  'occurance': 56, // Number | 
  'period': 56 // Number | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.monitoringLoopDetectionAllPatch(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**LoopDetectionActivate**](LoopDetectionActivate.md)| LoopDetection to modify | [optional] 
 **blockSecond** | **Number**|  | [optional] 
 **name** | **String**|  | [optional] 
 **occurance** | **Number**|  | [optional] 
 **period** | **Number**|  | [optional] 

### Return type

[**InlineResponse2002**](InlineResponse2002.md)

### Authorization

[auth_token](../README.md#auth_token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="monitoringLoopDetectionIdDelete"></a>
# **monitoringLoopDetectionIdDelete**
> Success monitoringLoopDetectionIdDelete(id)



Deletes loopdetection rule

### Example
```javascript
var DnlApi = require('dnl_api');
var defaultClient = DnlApi.ApiClient.instance;

// Configure API key authorization: auth_token
var auth_token = defaultClient.authentications['auth_token'];
auth_token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//auth_token.apiKeyPrefix = 'Token';

var apiInstance = new DnlApi.MonitoringApi();

var id = 789; // Number | LoopDetection rule id to get info about


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.monitoringLoopDetectionIdDelete(id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| LoopDetection rule id to get info about | 

### Return type

[**Success**](Success.md)

### Authorization

[auth_token](../README.md#auth_token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="monitoringLoopDetectionIdGet"></a>
# **monitoringLoopDetectionIdGet**
> InlineResponse200132 monitoringLoopDetectionIdGet(id)



Gets loopdetection rule

### Example
```javascript
var DnlApi = require('dnl_api');
var defaultClient = DnlApi.ApiClient.instance;

// Configure API key authorization: auth_token
var auth_token = defaultClient.authentications['auth_token'];
auth_token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//auth_token.apiKeyPrefix = 'Token';

var apiInstance = new DnlApi.MonitoringApi();

var id = 789; // Number | LoopDetection rule id to get info about


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.monitoringLoopDetectionIdGet(id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| LoopDetection rule id to get info about | 

### Return type

[**InlineResponse200132**](InlineResponse200132.md)

### Authorization

[auth_token](../README.md#auth_token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="monitoringLoopDetectionIdPatch"></a>
# **monitoringLoopDetectionIdPatch**
> InlineResponse200132 monitoringLoopDetectionIdPatch(id, opts)



Modifies loopdetection rule

### Example
```javascript
var DnlApi = require('dnl_api');
var defaultClient = DnlApi.ApiClient.instance;

// Configure API key authorization: auth_token
var auth_token = defaultClient.authentications['auth_token'];
auth_token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//auth_token.apiKeyPrefix = 'Token';

var apiInstance = new DnlApi.MonitoringApi();

var id = 789; // Number | LoopDetection rule id to get info about

var opts = { 
  'body': new DnlApi.LoopDetection() // LoopDetection | LoopDetection rule to modify
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.monitoringLoopDetectionIdPatch(id, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| LoopDetection rule id to get info about | 
 **body** | [**LoopDetection**](LoopDetection.md)| LoopDetection rule to modify | [optional] 

### Return type

[**InlineResponse200132**](InlineResponse200132.md)

### Authorization

[auth_token](../README.md#auth_token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="monitoringLoopDetectionListGet"></a>
# **monitoringLoopDetectionListGet**
> InlineResponse200133 monitoringLoopDetectionListGet(opts)



Gets loopdetection rules

### Example
```javascript
var DnlApi = require('dnl_api');
var defaultClient = DnlApi.ApiClient.instance;

// Configure API key authorization: auth_token
var auth_token = defaultClient.authentications['auth_token'];
auth_token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//auth_token.apiKeyPrefix = 'Token';

var apiInstance = new DnlApi.MonitoringApi();

var opts = { 
  'page': 56, // Number | 
  'perPage': 56, // Number | 
  'orderBy': "orderBy_example", // String | 
  'orderDir': "orderDir_example", // String | 
  'blockSecond': 56, // Number | 
  'name': "name_example", // String | 
  'occurance': 56, // Number | 
  'period': 56, // Number | 
  'idIn': "idIn_example", // String | 
  'trunkCountGt': 56, // Number | 
  'trunkCountLt': 56 // Number | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.monitoringLoopDetectionListGet(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **page** | **Number**|  | [optional] 
 **perPage** | **Number**|  | [optional] 
 **orderBy** | **String**|  | [optional] 
 **orderDir** | **String**|  | [optional] 
 **blockSecond** | **Number**|  | [optional] 
 **name** | **String**|  | [optional] 
 **occurance** | **Number**|  | [optional] 
 **period** | **Number**|  | [optional] 
 **idIn** | **String**|  | [optional] 
 **trunkCountGt** | **Number**|  | [optional] 
 **trunkCountLt** | **Number**|  | [optional] 

### Return type

[**InlineResponse200133**](InlineResponse200133.md)

### Authorization

[auth_token](../README.md#auth_token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="monitoringLoopDetectionPost"></a>
# **monitoringLoopDetectionPost**
> ObjectCreated monitoringLoopDetectionPost(opts)



Creates new loopdetection rules

### Example
```javascript
var DnlApi = require('dnl_api');
var defaultClient = DnlApi.ApiClient.instance;

// Configure API key authorization: auth_token
var auth_token = defaultClient.authentications['auth_token'];
auth_token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//auth_token.apiKeyPrefix = 'Token';

var apiInstance = new DnlApi.MonitoringApi();

var opts = { 
  'body': new DnlApi.LoopDetection() // LoopDetection | LoopDetection rules to create
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.monitoringLoopDetectionPost(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**LoopDetection**](LoopDetection.md)| LoopDetection rules to create | [optional] 

### Return type

[**ObjectCreated**](ObjectCreated.md)

### Authorization

[auth_token](../README.md#auth_token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="monitoringRuleAllDelete"></a>
# **monitoringRuleAllDelete**
> InlineResponse2002 monitoringRuleAllDelete(opts)



Deletes multiple found alertrule rule

### Example
```javascript
var DnlApi = require('dnl_api');
var defaultClient = DnlApi.ApiClient.instance;

// Configure API key authorization: auth_token
var auth_token = defaultClient.authentications['auth_token'];
auth_token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//auth_token.apiKeyPrefix = 'Token';

var apiInstance = new DnlApi.MonitoringApi();

var opts = { 
  'active': true, // Boolean | 
  'id': 56, // Number | 
  'lastRunTimeGt': "lastRunTimeGt_example", // String | 
  'lastRunTimeLt': "lastRunTimeLt_example", // String | 
  'name': "name_example" // String | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.monitoringRuleAllDelete(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **active** | **Boolean**|  | [optional] 
 **id** | **Number**|  | [optional] 
 **lastRunTimeGt** | **String**|  | [optional] 
 **lastRunTimeLt** | **String**|  | [optional] 
 **name** | **String**|  | [optional] 

### Return type

[**InlineResponse2002**](InlineResponse2002.md)

### Authorization

[auth_token](../README.md#auth_token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="monitoringRuleAllPatch"></a>
# **monitoringRuleAllPatch**
> InlineResponse2002 monitoringRuleAllPatch(opts)



Modifies multiple found alertrule rule

### Example
```javascript
var DnlApi = require('dnl_api');
var defaultClient = DnlApi.ApiClient.instance;

// Configure API key authorization: auth_token
var auth_token = defaultClient.authentications['auth_token'];
auth_token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//auth_token.apiKeyPrefix = 'Token';

var apiInstance = new DnlApi.MonitoringApi();

var opts = { 
  'body': new DnlApi.AlertRuleActivate(), // AlertRuleActivate | AlertRule rule to modify
  'active': true, // Boolean | 
  'id': 56, // Number | 
  'lastRunTimeGt': "lastRunTimeGt_example", // String | 
  'lastRunTimeLt': "lastRunTimeLt_example", // String | 
  'name': "name_example" // String | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.monitoringRuleAllPatch(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**AlertRuleActivate**](AlertRuleActivate.md)| AlertRule rule to modify | [optional] 
 **active** | **Boolean**|  | [optional] 
 **id** | **Number**|  | [optional] 
 **lastRunTimeGt** | **String**|  | [optional] 
 **lastRunTimeLt** | **String**|  | [optional] 
 **name** | **String**|  | [optional] 

### Return type

[**InlineResponse2002**](InlineResponse2002.md)

### Authorization

[auth_token](../README.md#auth_token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="monitoringRuleIdDelete"></a>
# **monitoringRuleIdDelete**
> Success monitoringRuleIdDelete(id)



Deletes alertrule rule

### Example
```javascript
var DnlApi = require('dnl_api');
var defaultClient = DnlApi.ApiClient.instance;

// Configure API key authorization: auth_token
var auth_token = defaultClient.authentications['auth_token'];
auth_token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//auth_token.apiKeyPrefix = 'Token';

var apiInstance = new DnlApi.MonitoringApi();

var id = 789; // Number | AlertRule rule id to get info about


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.monitoringRuleIdDelete(id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| AlertRule rule id to get info about | 

### Return type

[**Success**](Success.md)

### Authorization

[auth_token](../README.md#auth_token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="monitoringRuleIdGet"></a>
# **monitoringRuleIdGet**
> InlineResponse200136 monitoringRuleIdGet(id)



Gets alertrule rule

### Example
```javascript
var DnlApi = require('dnl_api');
var defaultClient = DnlApi.ApiClient.instance;

// Configure API key authorization: auth_token
var auth_token = defaultClient.authentications['auth_token'];
auth_token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//auth_token.apiKeyPrefix = 'Token';

var apiInstance = new DnlApi.MonitoringApi();

var id = 789; // Number | AlertRule rule id to get info about


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.monitoringRuleIdGet(id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| AlertRule rule id to get info about | 

### Return type

[**InlineResponse200136**](InlineResponse200136.md)

### Authorization

[auth_token](../README.md#auth_token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="monitoringRuleIdPatch"></a>
# **monitoringRuleIdPatch**
> InlineResponse200136 monitoringRuleIdPatch(id, opts)



Modifies alertrule rule

### Example
```javascript
var DnlApi = require('dnl_api');
var defaultClient = DnlApi.ApiClient.instance;

// Configure API key authorization: auth_token
var auth_token = defaultClient.authentications['auth_token'];
auth_token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//auth_token.apiKeyPrefix = 'Token';

var apiInstance = new DnlApi.MonitoringApi();

var id = 789; // Number | AlertRule rule id to get info about

var opts = { 
  'body': new DnlApi.AlertRule() // AlertRule | AlertRule rule to modify
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.monitoringRuleIdPatch(id, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| AlertRule rule id to get info about | 
 **body** | [**AlertRule**](AlertRule.md)| AlertRule rule to modify | [optional] 

### Return type

[**InlineResponse200136**](InlineResponse200136.md)

### Authorization

[auth_token](../README.md#auth_token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="monitoringRuleListGet"></a>
# **monitoringRuleListGet**
> InlineResponse200137 monitoringRuleListGet(opts)



Gets alertrule rules

### Example
```javascript
var DnlApi = require('dnl_api');
var defaultClient = DnlApi.ApiClient.instance;

// Configure API key authorization: auth_token
var auth_token = defaultClient.authentications['auth_token'];
auth_token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//auth_token.apiKeyPrefix = 'Token';

var apiInstance = new DnlApi.MonitoringApi();

var opts = { 
  'page': 56, // Number | 
  'perPage': 56, // Number | 
  'orderBy': "orderBy_example", // String | 
  'orderDir': "orderDir_example", // String | 
  'active': true, // Boolean | 
  'name': "name_example", // String | 
  'idIn': "idIn_example", // String | 
  'lastRunTimeGt': "lastRunTimeGt_example", // String | 
  'lastRunTimeLt': "lastRunTimeLt_example" // String | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.monitoringRuleListGet(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **page** | **Number**|  | [optional] 
 **perPage** | **Number**|  | [optional] 
 **orderBy** | **String**|  | [optional] 
 **orderDir** | **String**|  | [optional] 
 **active** | **Boolean**|  | [optional] 
 **name** | **String**|  | [optional] 
 **idIn** | **String**|  | [optional] 
 **lastRunTimeGt** | **String**|  | [optional] 
 **lastRunTimeLt** | **String**|  | [optional] 

### Return type

[**InlineResponse200137**](InlineResponse200137.md)

### Authorization

[auth_token](../README.md#auth_token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="monitoringRulePost"></a>
# **monitoringRulePost**
> ObjectCreated monitoringRulePost(opts)



Creates new alertrule rules

### Example
```javascript
var DnlApi = require('dnl_api');
var defaultClient = DnlApi.ApiClient.instance;

// Configure API key authorization: auth_token
var auth_token = defaultClient.authentications['auth_token'];
auth_token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//auth_token.apiKeyPrefix = 'Token';

var apiInstance = new DnlApi.MonitoringApi();

var opts = { 
  'body': new DnlApi.AlertRule() // AlertRule | AlertRule rules to create
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.monitoringRulePost(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**AlertRule**](AlertRule.md)| AlertRule rules to create | [optional] 

### Return type

[**ObjectCreated**](ObjectCreated.md)

### Authorization

[auth_token](../README.md#auth_token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


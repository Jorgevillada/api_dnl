# DnlApi.ToolApi

All URIs are relative to *https://198.100.149.164:8000/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**toolPcapDownloadQueryKeyGet**](ToolApi.md#toolPcapDownloadQueryKeyGet) | **GET** /tool/pcap/download/{query_key} | 
[**toolPcapQueryPost**](ToolApi.md#toolPcapQueryPost) | **POST** /tool/pcap/query | 
[**toolPcapQueryQueryKeyGet**](ToolApi.md#toolPcapQueryQueryKeyGet) | **GET** /tool/pcap/query/{query_key} | 
[**toolRateGenerationAllDelete**](ToolApi.md#toolRateGenerationAllDelete) | **DELETE** /tool/rate_generation/all | 
[**toolRateGenerationApplyIdPatch**](ToolApi.md#toolRateGenerationApplyIdPatch) | **PATCH** /tool/rate_generation/apply/{id} | 
[**toolRateGenerationIdDelete**](ToolApi.md#toolRateGenerationIdDelete) | **DELETE** /tool/rate_generation/{id} | 
[**toolRateGenerationIdGet**](ToolApi.md#toolRateGenerationIdGet) | **GET** /tool/rate_generation/{id} | 
[**toolRateGenerationIdPatch**](ToolApi.md#toolRateGenerationIdPatch) | **PATCH** /tool/rate_generation/{id} | 
[**toolRateGenerationIdStartPost**](ToolApi.md#toolRateGenerationIdStartPost) | **POST** /tool/rate_generation/{id}/start | 
[**toolRateGenerationListGet**](ToolApi.md#toolRateGenerationListGet) | **GET** /tool/rate_generation/list | 
[**toolRateGenerationPost**](ToolApi.md#toolRateGenerationPost) | **POST** /tool/rate_generation | 
[**toolRateGenerationRatesRateGenerationHistoryIdGet**](ToolApi.md#toolRateGenerationRatesRateGenerationHistoryIdGet) | **GET** /tool/rate_generation/rates/{rate_generation_history_id} | 
[**toolRateUploadAllDelete**](ToolApi.md#toolRateUploadAllDelete) | **DELETE** /tool/rate/upload/all | 
[**toolRateUploadIdDelete**](ToolApi.md#toolRateUploadIdDelete) | **DELETE** /tool/rate/upload/{id} | 
[**toolRateUploadIdGet**](ToolApi.md#toolRateUploadIdGet) | **GET** /tool/rate/upload/{id} | 
[**toolRateUploadIdPatch**](ToolApi.md#toolRateUploadIdPatch) | **PATCH** /tool/rate/upload/{id} | 
[**toolRateUploadListGet**](ToolApi.md#toolRateUploadListGet) | **GET** /tool/rate/upload/list | 
[**toolRateUploadPost**](ToolApi.md#toolRateUploadPost) | **POST** /tool/rate/upload | 
[**toolRateUploadTemplateIdDelete**](ToolApi.md#toolRateUploadTemplateIdDelete) | **DELETE** /tool/rate_upload_template/{id} | 
[**toolRateUploadTemplateIdGet**](ToolApi.md#toolRateUploadTemplateIdGet) | **GET** /tool/rate_upload_template/{id} | 
[**toolRateUploadTemplateIdPatch**](ToolApi.md#toolRateUploadTemplateIdPatch) | **PATCH** /tool/rate_upload_template/{id} | 
[**toolRateUploadTemplateListGet**](ToolApi.md#toolRateUploadTemplateListGet) | **GET** /tool/rate_upload_template/list | 
[**toolRateUploadTemplatePost**](ToolApi.md#toolRateUploadTemplatePost) | **POST** /tool/rate_upload_template | 
[**toolRerateIdDelete**](ToolApi.md#toolRerateIdDelete) | **DELETE** /tool/rerate/{id} | 
[**toolRerateIdGet**](ToolApi.md#toolRerateIdGet) | **GET** /tool/rerate/{id} | 
[**toolRerateIdPatch**](ToolApi.md#toolRerateIdPatch) | **PATCH** /tool/rerate/{id} | 
[**toolRerateListGet**](ToolApi.md#toolRerateListGet) | **GET** /tool/rerate/list | 
[**toolReratePost**](ToolApi.md#toolReratePost) | **POST** /tool/rerate | 
[**toolSendRateAllDelete**](ToolApi.md#toolSendRateAllDelete) | **DELETE** /tool/send_rate/all | 
[**toolSendRateDetailListGet**](ToolApi.md#toolSendRateDetailListGet) | **GET** /tool/send_rate/detail_list | 
[**toolSendRateIdDownloadGet**](ToolApi.md#toolSendRateIdDownloadGet) | **GET** /tool/send_rate/{id}/download | 
[**toolSendRateListGet**](ToolApi.md#toolSendRateListGet) | **GET** /tool/send_rate/list | 
[**toolSendRatePost**](ToolApi.md#toolSendRatePost) | **POST** /tool/send_rate | 
[**toolSimulateCallPost**](ToolApi.md#toolSimulateCallPost) | **POST** /tool/simulate_call | 


<a name="toolPcapDownloadQueryKeyGet"></a>
# **toolPcapDownloadQueryKeyGet**
> InlineResponse200204 toolPcapDownloadQueryKeyGet(queryKey)



Gets pcap file

### Example
```javascript
var DnlApi = require('dnl_api');

var apiInstance = new DnlApi.ToolApi();

var queryKey = "queryKey_example"; // String | Pcap file id to get info about


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.toolPcapDownloadQueryKeyGet(queryKey, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **queryKey** | **String**| Pcap file id to get info about | 

### Return type

[**InlineResponse200204**](InlineResponse200204.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/vnd.tcpdump.pcap

<a name="toolPcapQueryPost"></a>
# **toolPcapQueryPost**
> ObjectCreatedCompositeOrStrPk toolPcapQueryPost(opts)



Creates new pcapquery

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
  'body': new DnlApi.PcapQuery() // PcapQuery | PcapQuery to create
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.toolPcapQueryPost(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**PcapQuery**](PcapQuery.md)| PcapQuery to create | [optional] 

### Return type

[**ObjectCreatedCompositeOrStrPk**](ObjectCreatedCompositeOrStrPk.md)

### Authorization

[auth_token](../README.md#auth_token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="toolPcapQueryQueryKeyGet"></a>
# **toolPcapQueryQueryKeyGet**
> InlineResponse200204 toolPcapQueryQueryKeyGet(queryKey)



Gets pcapquery

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

var queryKey = "queryKey_example"; // String | PcapQuery id to get info about


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.toolPcapQueryQueryKeyGet(queryKey, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **queryKey** | **String**| PcapQuery id to get info about | 

### Return type

[**InlineResponse200204**](InlineResponse200204.md)

### Authorization

[auth_token](../README.md#auth_token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="toolRateGenerationAllDelete"></a>
# **toolRateGenerationAllDelete**
> InlineResponse2002 toolRateGenerationAllDelete(opts)



Deletes multiple found rategenerationtemplate

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
  'createBy': "createBy_example", // String | 
  'createOnGt': "createOnGt_example", // String | 
  'createOnLt': "createOnLt_example", // String | 
  'idIn': "idIn_example", // String | 
  'lastGeneratedGt': "lastGeneratedGt_example", // String | 
  'lastGeneratedLt': "lastGeneratedLt_example", // String | 
  'name': "name_example" // String | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.toolRateGenerationAllDelete(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **createBy** | **String**|  | [optional] 
 **createOnGt** | **String**|  | [optional] 
 **createOnLt** | **String**|  | [optional] 
 **idIn** | **String**|  | [optional] 
 **lastGeneratedGt** | **String**|  | [optional] 
 **lastGeneratedLt** | **String**|  | [optional] 
 **name** | **String**|  | [optional] 

### Return type

[**InlineResponse2002**](InlineResponse2002.md)

### Authorization

[auth_token](../README.md#auth_token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="toolRateGenerationApplyIdPatch"></a>
# **toolRateGenerationApplyIdPatch**
> Success toolRateGenerationApplyIdPatch(id, opts)





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

var id = 789; // Number | RateGeneration history id 

var opts = { 
  'body': new DnlApi.RateGenerationApplyRate() // RateGenerationApplyRate | New rate table parameters
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.toolRateGenerationApplyIdPatch(id, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| RateGeneration history id  | 
 **body** | [**RateGenerationApplyRate**](RateGenerationApplyRate.md)| New rate table parameters | [optional] 

### Return type

[**Success**](Success.md)

### Authorization

[auth_token](../README.md#auth_token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

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
> InlineResponse200193 toolRateGenerationIdGet(id)



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

[**InlineResponse200193**](InlineResponse200193.md)

### Authorization

[auth_token](../README.md#auth_token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="toolRateGenerationIdPatch"></a>
# **toolRateGenerationIdPatch**
> InlineResponse200193 toolRateGenerationIdPatch(id, opts)



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

[**InlineResponse200193**](InlineResponse200193.md)

### Authorization

[auth_token](../README.md#auth_token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="toolRateGenerationIdStartPost"></a>
# **toolRateGenerationIdStartPost**
> ObjectCreated toolRateGenerationIdStartPost(id, opts)



Creates new rategeneration start

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

var id = 789; // Number | RateGeneration template id to start

var opts = { 
  'body': new DnlApi.RateGenerationHistory() // RateGenerationHistory | RateGeneration start to create
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.toolRateGenerationIdStartPost(id, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| RateGeneration template id to start | 
 **body** | [**RateGenerationHistory**](RateGenerationHistory.md)| RateGeneration start to create | [optional] 

### Return type

[**ObjectCreated**](ObjectCreated.md)

### Authorization

[auth_token](../README.md#auth_token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="toolRateGenerationListGet"></a>
# **toolRateGenerationListGet**
> InlineResponse200194 toolRateGenerationListGet(opts)



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
  'idIn': "idIn_example", // String | 
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
 **idIn** | **String**|  | [optional] 
 **lastGeneratedGt** | **String**|  | [optional] 
 **lastGeneratedLt** | **String**|  | [optional] 

### Return type

[**InlineResponse200194**](InlineResponse200194.md)

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

<a name="toolRateGenerationRatesRateGenerationHistoryIdGet"></a>
# **toolRateGenerationRatesRateGenerationHistoryIdGet**
> InlineResponse200195 toolRateGenerationRatesRateGenerationHistoryIdGet(rateGenerationHistoryId, opts)



Gets rategenerationrate

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

var rateGenerationHistoryId = 789; // Number | RateGeneration history id 

var opts = { 
  'page': 56, // Number | 
  'perPage': 56, // Number | 
  'orderBy': "orderBy_example", // String | 
  'orderDir': "orderDir_example", // String | 
  'code': "code_example", // String | 
  'codeName': "codeName_example", // String | 
  'country': "country_example", // String | 
  'generationRateId': 56, // Number | 
  'timeProfileId': 56, // Number | 
  'effectiveDateGt': "effectiveDateGt_example", // String | 
  'generationRateIdIn': "generationRateIdIn_example", // String | 
  'interRateGt': "interRateGt_example", // String | 
  'interRateLt': "interRateLt_example", // String | 
  'intraRateGt': "intraRateGt_example", // String | 
  'intraRateLt': "intraRateLt_example", // String | 
  'rateGt': "rateGt_example", // String | 
  'rateLt': "rateLt_example" // String | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.toolRateGenerationRatesRateGenerationHistoryIdGet(rateGenerationHistoryId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **rateGenerationHistoryId** | **Number**| RateGeneration history id  | 
 **page** | **Number**|  | [optional] 
 **perPage** | **Number**|  | [optional] 
 **orderBy** | **String**|  | [optional] 
 **orderDir** | **String**|  | [optional] 
 **code** | **String**|  | [optional] 
 **codeName** | **String**|  | [optional] 
 **country** | **String**|  | [optional] 
 **generationRateId** | **Number**|  | [optional] 
 **timeProfileId** | **Number**|  | [optional] 
 **effectiveDateGt** | **String**|  | [optional] 
 **generationRateIdIn** | **String**|  | [optional] 
 **interRateGt** | **String**|  | [optional] 
 **interRateLt** | **String**|  | [optional] 
 **intraRateGt** | **String**|  | [optional] 
 **intraRateLt** | **String**|  | [optional] 
 **rateGt** | **String**|  | [optional] 
 **rateLt** | **String**|  | [optional] 

### Return type

[**InlineResponse200195**](InlineResponse200195.md)

### Authorization

[auth_token](../README.md#auth_token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="toolRateUploadAllDelete"></a>
# **toolRateUploadAllDelete**
> InlineResponse2002 toolRateUploadAllDelete(opts)



Deletes multiple found rateuploadtask

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
  'createDateTimeGt': "createDateTimeGt_example", // String | 
  'createDateTimeLt': "createDateTimeLt_example", // String | 
  'endDateTimeGt': "endDateTimeGt_example", // String | 
  'endDateTimeLt': "endDateTimeLt_example", // String | 
  'id': 56, // Number | 
  'idIn': "idIn_example", // String | 
  'method': "method_example", // String | 
  'operatorUser': "operatorUser_example", // String | 
  'rateTableId': 56, // Number | 
  'rateTableName': "rateTableName_example", // String | 
  'startDateTimeGt': "startDateTimeGt_example", // String | 
  'startDateTimeLt': "startDateTimeLt_example", // String | 
  'status': "status_example" // String | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.toolRateUploadAllDelete(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **createDateTimeGt** | **String**|  | [optional] 
 **createDateTimeLt** | **String**|  | [optional] 
 **endDateTimeGt** | **String**|  | [optional] 
 **endDateTimeLt** | **String**|  | [optional] 
 **id** | **Number**|  | [optional] 
 **idIn** | **String**|  | [optional] 
 **method** | **String**|  | [optional] 
 **operatorUser** | **String**|  | [optional] 
 **rateTableId** | **Number**|  | [optional] 
 **rateTableName** | **String**|  | [optional] 
 **startDateTimeGt** | **String**|  | [optional] 
 **startDateTimeLt** | **String**|  | [optional] 
 **status** | **String**|  | [optional] 

### Return type

[**InlineResponse2002**](InlineResponse2002.md)

### Authorization

[auth_token](../README.md#auth_token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="toolRateUploadIdDelete"></a>
# **toolRateUploadIdDelete**
> Success toolRateUploadIdDelete(id)



Deletes rateuploadtask

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

var id = 789; // Number | RateUploadTask id to get info about


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.toolRateUploadIdDelete(id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| RateUploadTask id to get info about | 

### Return type

[**Success**](Success.md)

### Authorization

[auth_token](../README.md#auth_token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="toolRateUploadIdGet"></a>
# **toolRateUploadIdGet**
> InlineResponse200198 toolRateUploadIdGet(id)



Gets rateuploadtask

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

var id = 789; // Number | RateUploadTask id to get info about


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.toolRateUploadIdGet(id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| RateUploadTask id to get info about | 

### Return type

[**InlineResponse200198**](InlineResponse200198.md)

### Authorization

[auth_token](../README.md#auth_token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="toolRateUploadIdPatch"></a>
# **toolRateUploadIdPatch**
> InlineResponse200198 toolRateUploadIdPatch(id, opts)



Modifies rateuploadtask

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

var id = 789; // Number | RateUploadTask id to get info about

var opts = { 
  'body': new DnlApi.RateUploadTask() // RateUploadTask | RateUploadTask to modify
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.toolRateUploadIdPatch(id, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| RateUploadTask id to get info about | 
 **body** | [**RateUploadTask**](RateUploadTask.md)| RateUploadTask to modify | [optional] 

### Return type

[**InlineResponse200198**](InlineResponse200198.md)

### Authorization

[auth_token](../README.md#auth_token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="toolRateUploadListGet"></a>
# **toolRateUploadListGet**
> InlineResponse200117 toolRateUploadListGet(opts)



Gets rateuploadtask

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
  'method': "method_example", // String | 
  'operatorUser': "operatorUser_example", // String | 
  'rateTableId': 56, // Number | 
  'rateTableName': "rateTableName_example", // String | 
  'status': "status_example", // String | 
  'createDateTimeGt': "createDateTimeGt_example", // String | 
  'createDateTimeLt': "createDateTimeLt_example", // String | 
  'endDateTimeGt': "endDateTimeGt_example", // String | 
  'endDateTimeLt': "endDateTimeLt_example", // String | 
  'idIn': "idIn_example", // String | 
  'startDateTimeGt': "startDateTimeGt_example", // String | 
  'startDateTimeLt': "startDateTimeLt_example" // String | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.toolRateUploadListGet(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **page** | **Number**|  | [optional] 
 **perPage** | **Number**|  | [optional] 
 **orderBy** | **String**|  | [optional] 
 **orderDir** | **String**|  | [optional] 
 **id** | **Number**|  | [optional] 
 **method** | **String**|  | [optional] 
 **operatorUser** | **String**|  | [optional] 
 **rateTableId** | **Number**|  | [optional] 
 **rateTableName** | **String**|  | [optional] 
 **status** | **String**|  | [optional] 
 **createDateTimeGt** | **String**|  | [optional] 
 **createDateTimeLt** | **String**|  | [optional] 
 **endDateTimeGt** | **String**|  | [optional] 
 **endDateTimeLt** | **String**|  | [optional] 
 **idIn** | **String**|  | [optional] 
 **startDateTimeGt** | **String**|  | [optional] 
 **startDateTimeLt** | **String**|  | [optional] 

### Return type

[**InlineResponse200117**](InlineResponse200117.md)

### Authorization

[auth_token](../README.md#auth_token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="toolRateUploadPost"></a>
# **toolRateUploadPost**
> ObjectCreated toolRateUploadPost(rateFile)



Creates new rateuploadtask

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

var rateFile = "/path/to/file.txt"; // File | Rate file to upload


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.toolRateUploadPost(rateFile, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **rateFile** | **File**| Rate file to upload | 

### Return type

[**ObjectCreated**](ObjectCreated.md)

### Authorization

[auth_token](../README.md#auth_token)

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/json

<a name="toolRateUploadTemplateIdDelete"></a>
# **toolRateUploadTemplateIdDelete**
> Success toolRateUploadTemplateIdDelete(id)



Deletes rateuploadtemplate

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

var id = 789; // Number | RateUploadTemplate id to get info about


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.toolRateUploadTemplateIdDelete(id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| RateUploadTemplate id to get info about | 

### Return type

[**Success**](Success.md)

### Authorization

[auth_token](../README.md#auth_token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="toolRateUploadTemplateIdGet"></a>
# **toolRateUploadTemplateIdGet**
> InlineResponse200199 toolRateUploadTemplateIdGet(id)



Gets rateuploadtemplate

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

var id = 789; // Number | RateUploadTemplate id to get info about


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.toolRateUploadTemplateIdGet(id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| RateUploadTemplate id to get info about | 

### Return type

[**InlineResponse200199**](InlineResponse200199.md)

### Authorization

[auth_token](../README.md#auth_token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="toolRateUploadTemplateIdPatch"></a>
# **toolRateUploadTemplateIdPatch**
> InlineResponse200199 toolRateUploadTemplateIdPatch(id, opts)



Modifies rateuploadtemplate

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

var id = 789; // Number | RateUploadTemplate id to get info about

var opts = { 
  'body': new DnlApi.RateUploadTemplateModify() // RateUploadTemplateModify | RateUploadTemplate to modify
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.toolRateUploadTemplateIdPatch(id, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| RateUploadTemplate id to get info about | 
 **body** | [**RateUploadTemplateModify**](RateUploadTemplateModify.md)| RateUploadTemplate to modify | [optional] 

### Return type

[**InlineResponse200199**](InlineResponse200199.md)

### Authorization

[auth_token](../README.md#auth_token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="toolRateUploadTemplateListGet"></a>
# **toolRateUploadTemplateListGet**
> InlineResponse200200 toolRateUploadTemplateListGet(opts)



Gets rateuploadtemplate

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
  'appendPrefixValue': "appendPrefixValue_example", // String | 
  'createBy': "createBy_example", // String | 
  'dupMethod': "dupMethod_example", // String | 
  'id': 56, // Number | 
  'name': "name_example", // String | 
  'endDateGt': "endDateGt_example", // String | 
  'endDateLt': "endDateLt_example" // String | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.toolRateUploadTemplateListGet(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **page** | **Number**|  | [optional] 
 **perPage** | **Number**|  | [optional] 
 **orderBy** | **String**|  | [optional] 
 **orderDir** | **String**|  | [optional] 
 **appendPrefixValue** | **String**|  | [optional] 
 **createBy** | **String**|  | [optional] 
 **dupMethod** | **String**|  | [optional] 
 **id** | **Number**|  | [optional] 
 **name** | **String**|  | [optional] 
 **endDateGt** | **String**|  | [optional] 
 **endDateLt** | **String**|  | [optional] 

### Return type

[**InlineResponse200200**](InlineResponse200200.md)

### Authorization

[auth_token](../README.md#auth_token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="toolRateUploadTemplatePost"></a>
# **toolRateUploadTemplatePost**
> ObjectCreated toolRateUploadTemplatePost(opts)



Creates new rateuploadtemplate

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
  'body': new DnlApi.RateUploadTemplate() // RateUploadTemplate | RateUploadTemplate to create
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.toolRateUploadTemplatePost(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**RateUploadTemplate**](RateUploadTemplate.md)| RateUploadTemplate to create | [optional] 

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
> InlineResponse200196 toolRerateIdGet(id)



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

[**InlineResponse200196**](InlineResponse200196.md)

### Authorization

[auth_token](../README.md#auth_token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="toolRerateIdPatch"></a>
# **toolRerateIdPatch**
> InlineResponse200196 toolRerateIdPatch(id, opts)



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

[**InlineResponse200196**](InlineResponse200196.md)

### Authorization

[auth_token](../README.md#auth_token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="toolRerateListGet"></a>
# **toolRerateListGet**
> InlineResponse200197 toolRerateListGet(opts)



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
  'orderDir': "orderDir_example", // String | 
  'errCode': 56, // Number | 
  'id': 56, // Number | 
  'progress': "progress_example", // String | 
  'status': "status_example", // String | 
  'fromDateGt': "fromDateGt_example", // String | 
  'fromDateLt': "fromDateLt_example", // String | 
  'toDateGt': "toDateGt_example", // String | 
  'toDateLt': "toDateLt_example" // String | 
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
 **errCode** | **Number**|  | [optional] 
 **id** | **Number**|  | [optional] 
 **progress** | **String**|  | [optional] 
 **status** | **String**|  | [optional] 
 **fromDateGt** | **String**|  | [optional] 
 **fromDateLt** | **String**|  | [optional] 
 **toDateGt** | **String**|  | [optional] 
 **toDateLt** | **String**|  | [optional] 

### Return type

[**InlineResponse200197**](InlineResponse200197.md)

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

<a name="toolSendRateAllDelete"></a>
# **toolSendRateAllDelete**
> InlineResponse2002 toolSendRateAllDelete()



Deletes multiple found ratesendlog

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

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.toolSendRateAllDelete(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**InlineResponse2002**](InlineResponse2002.md)

### Authorization

[auth_token](../README.md#auth_token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="toolSendRateDetailListGet"></a>
# **toolSendRateDetailListGet**
> InlineResponse200203 toolSendRateDetailListGet(opts)



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

[**InlineResponse200203**](InlineResponse200203.md)

### Authorization

[auth_token](../README.md#auth_token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="toolSendRateIdDownloadGet"></a>
# **toolSendRateIdDownloadGet**
> InlineResponse200201 toolSendRateIdDownloadGet(id)



Gets rate send file

### Example
```javascript
var DnlApi = require('dnl_api');

var apiInstance = new DnlApi.ToolApi();

var id = 789; // Number | Rate send file id to get info about


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.toolSendRateIdDownloadGet(id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| Rate send file id to get info about | 

### Return type

[**InlineResponse200201**](InlineResponse200201.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: text/csv, application/vnd.ms-excel, application/zip

<a name="toolSendRateListGet"></a>
# **toolSendRateListGet**
> InlineResponse200202 toolSendRateListGet(opts)



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

[**InlineResponse200202**](InlineResponse200202.md)

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
> CallApi toolSimulateCallPost(opts)



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

[**CallApi**](CallApi.md)

### Authorization

[auth_token](../README.md#auth_token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


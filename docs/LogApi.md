# DnlApi.LogApi

All URIs are relative to *https://198.100.149.164:8000/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**logAlertRuleGet**](LogApi.md#logAlertRuleGet) | **GET** /log/alert_rule | 
[**logAuthGet**](LogApi.md#logAuthGet) | **GET** /log/auth | 
[**logBalanceGet**](LogApi.md#logBalanceGet) | **GET** /log/balance | 
[**logCreditGet**](LogApi.md#logCreditGet) | **GET** /log/credit | 
[**logEmailGet**](LogApi.md#logEmailGet) | **GET** /log/email | 
[**logExportGet**](LogApi.md#logExportGet) | **GET** /log/export | 
[**logFraudDetectionGet**](LogApi.md#logFraudDetectionGet) | **GET** /log/fraud_detection | 
[**logFtpGet**](LogApi.md#logFtpGet) | **GET** /log/ftp | 
[**logFtpServerGet**](LogApi.md#logFtpServerGet) | **GET** /log/ftp_server | 
[**logImportGet**](LogApi.md#logImportGet) | **GET** /log/import | 
[**logInvoiceCdrGet**](LogApi.md#logInvoiceCdrGet) | **GET** /log/invoice_cdr | 
[**logInvoiceGet**](LogApi.md#logInvoiceGet) | **GET** /log/invoice | 
[**logIpModifyGet**](LogApi.md#logIpModifyGet) | **GET** /log/ip_modify | 
[**logLicenseModifyGet**](LogApi.md#logLicenseModifyGet) | **GET** /log/license_modify | 
[**logModifyGet**](LogApi.md#logModifyGet) | **GET** /log/modify | 
[**logOrigGet**](LogApi.md#logOrigGet) | **GET** /log/orig | 
[**logRateDownloadGet**](LogApi.md#logRateDownloadGet) | **GET** /log/rate_download | 
[**logRateGenerationGet**](LogApi.md#logRateGenerationGet) | **GET** /log/rate_generation | 
[**logRateMassEditGet**](LogApi.md#logRateMassEditGet) | **GET** /log/rate_mass_edit | 
[**logRateUploadGet**](LogApi.md#logRateUploadGet) | **GET** /log/rate_upload | 
[**logRegenerateBalanceGet**](LogApi.md#logRegenerateBalanceGet) | **GET** /log/regenerate_balance | 
[**logRerateCdrDownloadGet**](LogApi.md#logRerateCdrDownloadGet) | **GET** /log/rerate/cdr_download | 
[**logRerateExecGet**](LogApi.md#logRerateExecGet) | **GET** /log/rerate/exec | 
[**logRetrievePasswordGet**](LogApi.md#logRetrievePasswordGet) | **GET** /log/retrieve_password | 
[**logRevisionsGet**](LogApi.md#logRevisionsGet) | **GET** /log/revisions | 
[**logRevisionsIdRestorePost**](LogApi.md#logRevisionsIdRestorePost) | **POST** /log/revisions/{id}/restore | 
[**logScheduledReportGet**](LogApi.md#logScheduledReportGet) | **GET** /log/scheduled_report | 
[**logSchedulerGet**](LogApi.md#logSchedulerGet) | **GET** /log/scheduler | 
[**logSipRegisterGet**](LogApi.md#logSipRegisterGet) | **GET** /log/sip_register | 
[**logSqlGet**](LogApi.md#logSqlGet) | **GET** /log/sql | 
[**logUserSignonGet**](LogApi.md#logUserSignonGet) | **GET** /log/user_signon | 
[**logVersionsGet**](LogApi.md#logVersionsGet) | **GET** /log/versions | 


<a name="logAlertRuleGet"></a>
# **logAlertRuleGet**
> InlineResponse200128 logAlertRuleGet(opts)



Gets alertrule log records

### Example
```javascript
var DnlApi = require('dnl_api');
var defaultClient = DnlApi.ApiClient.instance;

// Configure API key authorization: auth_token
var auth_token = defaultClient.authentications['auth_token'];
auth_token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//auth_token.apiKeyPrefix = 'Token';

var apiInstance = new DnlApi.LogApi();

var opts = { 
  'page': 56, // Number | 
  'perPage': 56, // Number | 
  'orderBy': "orderBy_example", // String | 
  'orderDir': "orderDir_example", // String | 
  'status': "status_example", // String | 
  'alertRulesIdIn': "alertRulesIdIn_example", // String | 
  'finishTimeGt': "finishTimeGt_example", // String | 
  'finishTimeLt': "finishTimeLt_example" // String | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.logAlertRuleGet(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **page** | **Number**|  | [optional] 
 **perPage** | **Number**|  | [optional] 
 **orderBy** | **String**|  | [optional] 
 **orderDir** | **String**|  | [optional] 
 **status** | **String**|  | [optional] 
 **alertRulesIdIn** | **String**|  | [optional] 
 **finishTimeGt** | **String**|  | [optional] 
 **finishTimeLt** | **String**|  | [optional] 

### Return type

[**InlineResponse200128**](InlineResponse200128.md)

### Authorization

[auth_token](../README.md#auth_token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="logAuthGet"></a>
# **logAuthGet**
> InlineResponse200102 logAuthGet(opts)



Gets authorizationlog

### Example
```javascript
var DnlApi = require('dnl_api');
var defaultClient = DnlApi.ApiClient.instance;

// Configure API key authorization: auth_token
var auth_token = defaultClient.authentications['auth_token'];
auth_token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//auth_token.apiKeyPrefix = 'Token';

var apiInstance = new DnlApi.LogApi();

var opts = { 
  'page': 56, // Number | 
  'perPage': 56, // Number | 
  'orderBy': "orderBy_example", // String | 
  'orderDir': "orderDir_example", // String | 
  'failedReason': "failedReason_example", // String | 
  'loginIp': "loginIp_example", // String | 
  'status': "status_example", // String | 
  'username': "username_example", // String | 
  'loginTimeGt': "loginTimeGt_example", // String | 
  'loginTimeLt': "loginTimeLt_example" // String | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.logAuthGet(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **page** | **Number**|  | [optional] 
 **perPage** | **Number**|  | [optional] 
 **orderBy** | **String**|  | [optional] 
 **orderDir** | **String**|  | [optional] 
 **failedReason** | **String**|  | [optional] 
 **loginIp** | **String**|  | [optional] 
 **status** | **String**|  | [optional] 
 **username** | **String**|  | [optional] 
 **loginTimeGt** | **String**|  | [optional] 
 **loginTimeLt** | **String**|  | [optional] 

### Return type

[**InlineResponse200102**](InlineResponse200102.md)

### Authorization

[auth_token](../README.md#auth_token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="logBalanceGet"></a>
# **logBalanceGet**
> InlineResponse200105 logBalanceGet(opts)



Gets balancelog

### Example
```javascript
var DnlApi = require('dnl_api');
var defaultClient = DnlApi.ApiClient.instance;

// Configure API key authorization: auth_token
var auth_token = defaultClient.authentications['auth_token'];
auth_token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//auth_token.apiKeyPrefix = 'Token';

var apiInstance = new DnlApi.LogApi();

var opts = { 
  'page': 56, // Number | 
  'perPage': 56, // Number | 
  'orderBy': "orderBy_example", // String | 
  'orderDir': "orderDir_example", // String | 
  'clientId': 56, // Number | 
  'id': 56, // Number | 
  'dateGt': "dateGt_example", // String | 
  'dateLt': "dateLt_example" // String | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.logBalanceGet(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **page** | **Number**|  | [optional] 
 **perPage** | **Number**|  | [optional] 
 **orderBy** | **String**|  | [optional] 
 **orderDir** | **String**|  | [optional] 
 **clientId** | **Number**|  | [optional] 
 **id** | **Number**|  | [optional] 
 **dateGt** | **String**|  | [optional] 
 **dateLt** | **String**|  | [optional] 

### Return type

[**InlineResponse200105**](InlineResponse200105.md)

### Authorization

[auth_token](../README.md#auth_token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="logCreditGet"></a>
# **logCreditGet**
> InlineResponse200106 logCreditGet(opts)



Gets creditlog

### Example
```javascript
var DnlApi = require('dnl_api');
var defaultClient = DnlApi.ApiClient.instance;

// Configure API key authorization: auth_token
var auth_token = defaultClient.authentications['auth_token'];
auth_token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//auth_token.apiKeyPrefix = 'Token';

var apiInstance = new DnlApi.LogApi();

var opts = { 
  'page': 56, // Number | 
  'perPage': 56, // Number | 
  'orderBy': "orderBy_example", // String | 
  'orderDir': "orderDir_example", // String | 
  'carrierName': "carrierName_example", // String | 
  'id': 56, // Number | 
  'modifiedBy': "modifiedBy_example", // String | 
  'modifiedOnGt': "modifiedOnGt_example", // String | 
  'modifiedOnLt': "modifiedOnLt_example" // String | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.logCreditGet(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **page** | **Number**|  | [optional] 
 **perPage** | **Number**|  | [optional] 
 **orderBy** | **String**|  | [optional] 
 **orderDir** | **String**|  | [optional] 
 **carrierName** | **String**|  | [optional] 
 **id** | **Number**|  | [optional] 
 **modifiedBy** | **String**|  | [optional] 
 **modifiedOnGt** | **String**|  | [optional] 
 **modifiedOnLt** | **String**|  | [optional] 

### Return type

[**InlineResponse200106**](InlineResponse200106.md)

### Authorization

[auth_token](../README.md#auth_token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="logEmailGet"></a>
# **logEmailGet**
> InlineResponse200103 logEmailGet(opts)



Gets emaillog

### Example
```javascript
var DnlApi = require('dnl_api');
var defaultClient = DnlApi.ApiClient.instance;

// Configure API key authorization: auth_token
var auth_token = defaultClient.authentications['auth_token'];
auth_token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//auth_token.apiKeyPrefix = 'Token';

var apiInstance = new DnlApi.LogApi();

var opts = { 
  'page': 56, // Number | 
  'perPage': 56, // Number | 
  'orderBy': "orderBy_example", // String | 
  'orderDir': "orderDir_example", // String | 
  'clientId': 56, // Number | 
  'content': "content_example", // String | 
  'sentFrom': "sentFrom_example", // String | 
  'sentTo': "sentTo_example", // String | 
  'status': "status_example", // String | 
  'subject': "subject_example", // String | 
  'type': "type_example", // String | 
  'dateGt': "dateGt_example", // String | 
  'dateLt': "dateLt_example" // String | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.logEmailGet(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **page** | **Number**|  | [optional] 
 **perPage** | **Number**|  | [optional] 
 **orderBy** | **String**|  | [optional] 
 **orderDir** | **String**|  | [optional] 
 **clientId** | **Number**|  | [optional] 
 **content** | **String**|  | [optional] 
 **sentFrom** | **String**|  | [optional] 
 **sentTo** | **String**|  | [optional] 
 **status** | **String**|  | [optional] 
 **subject** | **String**|  | [optional] 
 **type** | **String**|  | [optional] 
 **dateGt** | **String**|  | [optional] 
 **dateLt** | **String**|  | [optional] 

### Return type

[**InlineResponse200103**](InlineResponse200103.md)

### Authorization

[auth_token](../README.md#auth_token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="logExportGet"></a>
# **logExportGet**
> InlineResponse200107 logExportGet(opts)



Gets importexportlogs

### Example
```javascript
var DnlApi = require('dnl_api');
var defaultClient = DnlApi.ApiClient.instance;

// Configure API key authorization: auth_token
var auth_token = defaultClient.authentications['auth_token'];
auth_token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//auth_token.apiKeyPrefix = 'Token';

var apiInstance = new DnlApi.LogApi();

var opts = { 
  'page': 56, // Number | 
  'perPage': 56, // Number | 
  'orderBy': "orderBy_example", // String | 
  'orderDir': "orderDir_example", // String | 
  'id': 56, // Number | 
  'obj': "obj_example", // String | 
  'status': "status_example", // String | 
  'downloadTimeGt': "downloadTimeGt_example", // String | 
  'downloadTimeLt': "downloadTimeLt_example", // String | 
  'finishedTimeGt': "finishedTimeGt_example", // String | 
  'finishedTimeLt': "finishedTimeLt_example" // String | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.logExportGet(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **page** | **Number**|  | [optional] 
 **perPage** | **Number**|  | [optional] 
 **orderBy** | **String**|  | [optional] 
 **orderDir** | **String**|  | [optional] 
 **id** | **Number**|  | [optional] 
 **obj** | **String**|  | [optional] 
 **status** | **String**|  | [optional] 
 **downloadTimeGt** | **String**|  | [optional] 
 **downloadTimeLt** | **String**|  | [optional] 
 **finishedTimeGt** | **String**|  | [optional] 
 **finishedTimeLt** | **String**|  | [optional] 

### Return type

[**InlineResponse200107**](InlineResponse200107.md)

### Authorization

[auth_token](../README.md#auth_token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="logFraudDetectionGet"></a>
# **logFraudDetectionGet**
> InlineResponse200127 logFraudDetectionGet(opts)



Gets frauddetection execution records

### Example
```javascript
var DnlApi = require('dnl_api');
var defaultClient = DnlApi.ApiClient.instance;

// Configure API key authorization: auth_token
var auth_token = defaultClient.authentications['auth_token'];
auth_token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//auth_token.apiKeyPrefix = 'Token';

var apiInstance = new DnlApi.LogApi();

var opts = { 
  'page': 56, // Number | 
  'perPage': 56, // Number | 
  'orderBy': "orderBy_example", // String | 
  'orderDir': "orderDir_example", // String | 
  'fraudDetectionId': 56, // Number | 
  'ruleName': "ruleName_example", // String | 
  'status': "status_example", // String | 
  'finishTimeGt': "finishTimeGt_example", // String | 
  'finishTimeLt': "finishTimeLt_example" // String | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.logFraudDetectionGet(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **page** | **Number**|  | [optional] 
 **perPage** | **Number**|  | [optional] 
 **orderBy** | **String**|  | [optional] 
 **orderDir** | **String**|  | [optional] 
 **fraudDetectionId** | **Number**|  | [optional] 
 **ruleName** | **String**|  | [optional] 
 **status** | **String**|  | [optional] 
 **finishTimeGt** | **String**|  | [optional] 
 **finishTimeLt** | **String**|  | [optional] 

### Return type

[**InlineResponse200127**](InlineResponse200127.md)

### Authorization

[auth_token](../README.md#auth_token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="logFtpGet"></a>
# **logFtpGet**
> InlineResponse200109 logFtpGet(opts)



Gets ftpcdrlogs

### Example
```javascript
var DnlApi = require('dnl_api');
var defaultClient = DnlApi.ApiClient.instance;

// Configure API key authorization: auth_token
var auth_token = defaultClient.authentications['auth_token'];
auth_token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//auth_token.apiKeyPrefix = 'Token';

var apiInstance = new DnlApi.LogApi();

var opts = { 
  'page': 56, // Number | 
  'perPage': 56, // Number | 
  'orderBy': "orderBy_example", // String | 
  'orderDir': "orderDir_example", // String | 
  'clientAlias': "clientAlias_example", // String | 
  'id': 56, // Number | 
  'status': "status_example", // String | 
  'cdrEndTimeLt': "cdrEndTimeLt_example", // String | 
  'cdrStartTimeGt': "cdrStartTimeGt_example", // String | 
  'ftpEndTimeLt': "ftpEndTimeLt_example", // String | 
  'ftpStartTimeGt': "ftpStartTimeGt_example" // String | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.logFtpGet(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **page** | **Number**|  | [optional] 
 **perPage** | **Number**|  | [optional] 
 **orderBy** | **String**|  | [optional] 
 **orderDir** | **String**|  | [optional] 
 **clientAlias** | **String**|  | [optional] 
 **id** | **Number**|  | [optional] 
 **status** | **String**|  | [optional] 
 **cdrEndTimeLt** | **String**|  | [optional] 
 **cdrStartTimeGt** | **String**|  | [optional] 
 **ftpEndTimeLt** | **String**|  | [optional] 
 **ftpStartTimeGt** | **String**|  | [optional] 

### Return type

[**InlineResponse200109**](InlineResponse200109.md)

### Authorization

[auth_token](../README.md#auth_token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="logFtpServerGet"></a>
# **logFtpServerGet**
> InlineResponse200110 logFtpServerGet(opts)



Gets ftpserverlogs

### Example
```javascript
var DnlApi = require('dnl_api');
var defaultClient = DnlApi.ApiClient.instance;

// Configure API key authorization: auth_token
var auth_token = defaultClient.authentications['auth_token'];
auth_token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//auth_token.apiKeyPrefix = 'Token';

var apiInstance = new DnlApi.LogApi();

var opts = { 
  'page': 56, // Number | 
  'perPage': 56, // Number | 
  'orderBy': "orderBy_example", // String | 
  'orderDir': "orderDir_example", // String | 
  'cmd': "cmd_example", // String | 
  'id': 56, // Number | 
  'timeGt': "timeGt_example", // String | 
  'timeLt': "timeLt_example" // String | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.logFtpServerGet(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **page** | **Number**|  | [optional] 
 **perPage** | **Number**|  | [optional] 
 **orderBy** | **String**|  | [optional] 
 **orderDir** | **String**|  | [optional] 
 **cmd** | **String**|  | [optional] 
 **id** | **Number**|  | [optional] 
 **timeGt** | **String**|  | [optional] 
 **timeLt** | **String**|  | [optional] 

### Return type

[**InlineResponse200110**](InlineResponse200110.md)

### Authorization

[auth_token](../README.md#auth_token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="logImportGet"></a>
# **logImportGet**
> InlineResponse200108 logImportGet(opts)



Gets importexportlogs

### Example
```javascript
var DnlApi = require('dnl_api');
var defaultClient = DnlApi.ApiClient.instance;

// Configure API key authorization: auth_token
var auth_token = defaultClient.authentications['auth_token'];
auth_token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//auth_token.apiKeyPrefix = 'Token';

var apiInstance = new DnlApi.LogApi();

var opts = { 
  'page': 56, // Number | 
  'perPage': 56, // Number | 
  'orderBy': "orderBy_example", // String | 
  'orderDir': "orderDir_example", // String | 
  'fileName': "fileName_example", // String | 
  'id': 56, // Number | 
  'obj': "obj_example", // String | 
  'status': "status_example", // String | 
  'finishedTimeGt': "finishedTimeGt_example", // String | 
  'finishedTimeLt': "finishedTimeLt_example", // String | 
  'uploadTimeGt': "uploadTimeGt_example", // String | 
  'uploadTimeLt': "uploadTimeLt_example" // String | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.logImportGet(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **page** | **Number**|  | [optional] 
 **perPage** | **Number**|  | [optional] 
 **orderBy** | **String**|  | [optional] 
 **orderDir** | **String**|  | [optional] 
 **fileName** | **String**|  | [optional] 
 **id** | **Number**|  | [optional] 
 **obj** | **String**|  | [optional] 
 **status** | **String**|  | [optional] 
 **finishedTimeGt** | **String**|  | [optional] 
 **finishedTimeLt** | **String**|  | [optional] 
 **uploadTimeGt** | **String**|  | [optional] 
 **uploadTimeLt** | **String**|  | [optional] 

### Return type

[**InlineResponse200108**](InlineResponse200108.md)

### Authorization

[auth_token](../README.md#auth_token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="logInvoiceCdrGet"></a>
# **logInvoiceCdrGet**
> InlineResponse200111 logInvoiceCdrGet(opts)



Gets invoicecdrlog

### Example
```javascript
var DnlApi = require('dnl_api');
var defaultClient = DnlApi.ApiClient.instance;

// Configure API key authorization: auth_token
var auth_token = defaultClient.authentications['auth_token'];
auth_token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//auth_token.apiKeyPrefix = 'Token';

var apiInstance = new DnlApi.LogApi();

var opts = { 
  'page': 56, // Number | 
  'perPage': 56, // Number | 
  'orderBy': "orderBy_example", // String | 
  'orderDir': "orderDir_example", // String | 
  'clientName': "clientName_example", // String | 
  'id': 56, // Number | 
  'endTimeGt': "endTimeGt_example", // String | 
  'endTimeLt': "endTimeLt_example", // String | 
  'startTimeGt': "startTimeGt_example", // String | 
  'startTimeLt': "startTimeLt_example" // String | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.logInvoiceCdrGet(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **page** | **Number**|  | [optional] 
 **perPage** | **Number**|  | [optional] 
 **orderBy** | **String**|  | [optional] 
 **orderDir** | **String**|  | [optional] 
 **clientName** | **String**|  | [optional] 
 **id** | **Number**|  | [optional] 
 **endTimeGt** | **String**|  | [optional] 
 **endTimeLt** | **String**|  | [optional] 
 **startTimeGt** | **String**|  | [optional] 
 **startTimeLt** | **String**|  | [optional] 

### Return type

[**InlineResponse200111**](InlineResponse200111.md)

### Authorization

[auth_token](../README.md#auth_token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="logInvoiceGet"></a>
# **logInvoiceGet**
> InlineResponse200112 logInvoiceGet(opts)



Gets invoicelog

### Example
```javascript
var DnlApi = require('dnl_api');
var defaultClient = DnlApi.ApiClient.instance;

// Configure API key authorization: auth_token
var auth_token = defaultClient.authentications['auth_token'];
auth_token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//auth_token.apiKeyPrefix = 'Token';

var apiInstance = new DnlApi.LogApi();

var opts = { 
  'page': 56, // Number | 
  'perPage': 56, // Number | 
  'orderBy': "orderBy_example", // String | 
  'orderDir': "orderDir_example", // String | 
  'id': 56, // Number | 
  'status': "status_example", // String | 
  'endTimeGt': "endTimeGt_example", // String | 
  'endTimeLt': "endTimeLt_example", // String | 
  'startTimeGt': "startTimeGt_example", // String | 
  'startTimeLt': "startTimeLt_example" // String | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.logInvoiceGet(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **page** | **Number**|  | [optional] 
 **perPage** | **Number**|  | [optional] 
 **orderBy** | **String**|  | [optional] 
 **orderDir** | **String**|  | [optional] 
 **id** | **Number**|  | [optional] 
 **status** | **String**|  | [optional] 
 **endTimeGt** | **String**|  | [optional] 
 **endTimeLt** | **String**|  | [optional] 
 **startTimeGt** | **String**|  | [optional] 
 **startTimeLt** | **String**|  | [optional] 

### Return type

[**InlineResponse200112**](InlineResponse200112.md)

### Authorization

[auth_token](../README.md#auth_token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="logIpModifyGet"></a>
# **logIpModifyGet**
> InlineResponse200113 logIpModifyGet(opts)



Gets ipmodiflog

### Example
```javascript
var DnlApi = require('dnl_api');
var defaultClient = DnlApi.ApiClient.instance;

// Configure API key authorization: auth_token
var auth_token = defaultClient.authentications['auth_token'];
auth_token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//auth_token.apiKeyPrefix = 'Token';

var apiInstance = new DnlApi.LogApi();

var opts = { 
  'page': 56, // Number | 
  'perPage': 56, // Number | 
  'orderBy': "orderBy_example", // String | 
  'orderDir': "orderDir_example", // String | 
  'id': 56, // Number | 
  '_new': "_new_example", // String | 
  'old': "old_example", // String | 
  'trunkId': "trunkId_example", // String | 
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
apiInstance.logIpModifyGet(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **page** | **Number**|  | [optional] 
 **perPage** | **Number**|  | [optional] 
 **orderBy** | **String**|  | [optional] 
 **orderDir** | **String**|  | [optional] 
 **id** | **Number**|  | [optional] 
 **_new** | **String**|  | [optional] 
 **old** | **String**|  | [optional] 
 **trunkId** | **String**|  | [optional] 
 **updateBy** | **String**|  | [optional] 
 **updateAtGt** | **String**|  | [optional] 
 **updateAtLt** | **String**|  | [optional] 

### Return type

[**InlineResponse200113**](InlineResponse200113.md)

### Authorization

[auth_token](../README.md#auth_token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="logLicenseModifyGet"></a>
# **logLicenseModifyGet**
> InlineResponse200115 logLicenseModifyGet(opts)



Gets licensemodificationlog

### Example
```javascript
var DnlApi = require('dnl_api');
var defaultClient = DnlApi.ApiClient.instance;

// Configure API key authorization: auth_token
var auth_token = defaultClient.authentications['auth_token'];
auth_token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//auth_token.apiKeyPrefix = 'Token';

var apiInstance = new DnlApi.LogApi();

var opts = { 
  'page': 56, // Number | 
  'perPage': 56, // Number | 
  'orderBy': "orderBy_example", // String | 
  'orderDir': "orderDir_example", // String | 
  'id': 56, // Number | 
  'modifyBy': "modifyBy_example", // String | 
  'newValue': 56, // Number | 
  'oldValue': 56, // Number | 
  'switchName': "switchName_example", // String | 
  'type': "type_example", // String | 
  'modifyOnGt': "modifyOnGt_example", // String | 
  'modifyOnLt': "modifyOnLt_example" // String | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.logLicenseModifyGet(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **page** | **Number**|  | [optional] 
 **perPage** | **Number**|  | [optional] 
 **orderBy** | **String**|  | [optional] 
 **orderDir** | **String**|  | [optional] 
 **id** | **Number**|  | [optional] 
 **modifyBy** | **String**|  | [optional] 
 **newValue** | **Number**|  | [optional] 
 **oldValue** | **Number**|  | [optional] 
 **switchName** | **String**|  | [optional] 
 **type** | **String**|  | [optional] 
 **modifyOnGt** | **String**|  | [optional] 
 **modifyOnLt** | **String**|  | [optional] 

### Return type

[**InlineResponse200115**](InlineResponse200115.md)

### Authorization

[auth_token](../README.md#auth_token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="logModifyGet"></a>
# **logModifyGet**
> InlineResponse200114 logModifyGet(opts)



Gets modiflog

### Example
```javascript
var DnlApi = require('dnl_api');
var defaultClient = DnlApi.ApiClient.instance;

// Configure API key authorization: auth_token
var auth_token = defaultClient.authentications['auth_token'];
auth_token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//auth_token.apiKeyPrefix = 'Token';

var apiInstance = new DnlApi.LogApi();

var opts = { 
  'page': 56, // Number | 
  'perPage': 56, // Number | 
  'orderBy': "orderBy_example", // String | 
  'orderDir': "orderDir_example", // String | 
  'detail': "detail_example", // String | 
  'id': 56, // Number | 
  'module': "module_example", // String | 
  'name': "name_example", // String | 
  'type': "type_example", // String | 
  'timeGt': "timeGt_example", // String | 
  'timeLt': "timeLt_example" // String | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.logModifyGet(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **page** | **Number**|  | [optional] 
 **perPage** | **Number**|  | [optional] 
 **orderBy** | **String**|  | [optional] 
 **orderDir** | **String**|  | [optional] 
 **detail** | **String**|  | [optional] 
 **id** | **Number**|  | [optional] 
 **module** | **String**|  | [optional] 
 **name** | **String**|  | [optional] 
 **type** | **String**|  | [optional] 
 **timeGt** | **String**|  | [optional] 
 **timeLt** | **String**|  | [optional] 

### Return type

[**InlineResponse200114**](InlineResponse200114.md)

### Authorization

[auth_token](../README.md#auth_token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="logOrigGet"></a>
# **logOrigGet**
> InlineResponse200116 logOrigGet(opts)



Gets origlog

### Example
```javascript
var DnlApi = require('dnl_api');
var defaultClient = DnlApi.ApiClient.instance;

// Configure API key authorization: auth_token
var auth_token = defaultClient.authentications['auth_token'];
auth_token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//auth_token.apiKeyPrefix = 'Token';

var apiInstance = new DnlApi.LogApi();

var opts = { 
  'page': 56, // Number | 
  'perPage': 56, // Number | 
  'orderBy': "orderBy_example", // String | 
  'orderDir': "orderDir_example", // String | 
  'detail': "detail_example", // String | 
  'logId': 56, // Number | 
  'module': "module_example", // String | 
  'type': "type_example", // String | 
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
apiInstance.logOrigGet(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **page** | **Number**|  | [optional] 
 **perPage** | **Number**|  | [optional] 
 **orderBy** | **String**|  | [optional] 
 **orderDir** | **String**|  | [optional] 
 **detail** | **String**|  | [optional] 
 **logId** | **Number**|  | [optional] 
 **module** | **String**|  | [optional] 
 **type** | **String**|  | [optional] 
 **updateBy** | **String**|  | [optional] 
 **updateOnGt** | **String**|  | [optional] 
 **updateOnLt** | **String**|  | [optional] 

### Return type

[**InlineResponse200116**](InlineResponse200116.md)

### Authorization

[auth_token](../README.md#auth_token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="logRateDownloadGet"></a>
# **logRateDownloadGet**
> InlineResponse200118 logRateDownloadGet(opts)



Gets ratedownloadlog

### Example
```javascript
var DnlApi = require('dnl_api');
var defaultClient = DnlApi.ApiClient.instance;

// Configure API key authorization: auth_token
var auth_token = defaultClient.authentications['auth_token'];
auth_token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//auth_token.apiKeyPrefix = 'Token';

var apiInstance = new DnlApi.LogApi();

var opts = { 
  'page': 56, // Number | 
  'perPage': 56, // Number | 
  'orderBy': "orderBy_example", // String | 
  'orderDir': "orderDir_example", // String | 
  'id': 56, // Number | 
  'logDetailId': "logDetailId_example", // String | 
  'resourceId': 56, // Number | 
  'downloadTimeGt': "downloadTimeGt_example", // String | 
  'downloadTimeLt': "downloadTimeLt_example" // String | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.logRateDownloadGet(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **page** | **Number**|  | [optional] 
 **perPage** | **Number**|  | [optional] 
 **orderBy** | **String**|  | [optional] 
 **orderDir** | **String**|  | [optional] 
 **id** | **Number**|  | [optional] 
 **logDetailId** | **String**|  | [optional] 
 **resourceId** | **Number**|  | [optional] 
 **downloadTimeGt** | **String**|  | [optional] 
 **downloadTimeLt** | **String**|  | [optional] 

### Return type

[**InlineResponse200118**](InlineResponse200118.md)

### Authorization

[auth_token](../README.md#auth_token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="logRateGenerationGet"></a>
# **logRateGenerationGet**
> InlineResponse200120 logRateGenerationGet(opts)



Gets rategenerationhistory log

### Example
```javascript
var DnlApi = require('dnl_api');
var defaultClient = DnlApi.ApiClient.instance;

// Configure API key authorization: auth_token
var auth_token = defaultClient.authentications['auth_token'];
auth_token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//auth_token.apiKeyPrefix = 'Token';

var apiInstance = new DnlApi.LogApi();

var opts = { 
  'page': 56, // Number | 
  'perPage': 56, // Number | 
  'orderBy': "orderBy_example", // String | 
  'orderDir': "orderDir_example", // String | 
  'createBy': "createBy_example", // String | 
  'id': 56, // Number | 
  'isApplied': true, // Boolean | 
  'rateGenerationTemplateId': 56, // Number | 
  'status': "status_example", // String | 
  'createOnGt': "createOnGt_example", // String | 
  'createOnLt': "createOnLt_example", // String | 
  'finishedTimeGt': "finishedTimeGt_example", // String | 
  'finishedTimeLt': "finishedTimeLt_example" // String | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.logRateGenerationGet(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **page** | **Number**|  | [optional] 
 **perPage** | **Number**|  | [optional] 
 **orderBy** | **String**|  | [optional] 
 **orderDir** | **String**|  | [optional] 
 **createBy** | **String**|  | [optional] 
 **id** | **Number**|  | [optional] 
 **isApplied** | **Boolean**|  | [optional] 
 **rateGenerationTemplateId** | **Number**|  | [optional] 
 **status** | **String**|  | [optional] 
 **createOnGt** | **String**|  | [optional] 
 **createOnLt** | **String**|  | [optional] 
 **finishedTimeGt** | **String**|  | [optional] 
 **finishedTimeLt** | **String**|  | [optional] 

### Return type

[**InlineResponse200120**](InlineResponse200120.md)

### Authorization

[auth_token](../README.md#auth_token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="logRateMassEditGet"></a>
# **logRateMassEditGet**
> InlineResponse200119 logRateMassEditGet(opts)



Gets ratemasseditlog

### Example
```javascript
var DnlApi = require('dnl_api');
var defaultClient = DnlApi.ApiClient.instance;

// Configure API key authorization: auth_token
var auth_token = defaultClient.authentications['auth_token'];
auth_token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//auth_token.apiKeyPrefix = 'Token';

var apiInstance = new DnlApi.LogApi();

var opts = { 
  'page': 56, // Number | 
  'perPage': 56, // Number | 
  'orderBy': "orderBy_example", // String | 
  'orderDir': "orderDir_example", // String | 
  'actionType': "actionType_example", // String | 
  'clientId': 56, // Number | 
  'id': 56, // Number | 
  'rateTableId': 56, // Number | 
  'actionTimeGt': "actionTimeGt_example", // String | 
  'actionTimeLt': "actionTimeLt_example" // String | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.logRateMassEditGet(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **page** | **Number**|  | [optional] 
 **perPage** | **Number**|  | [optional] 
 **orderBy** | **String**|  | [optional] 
 **orderDir** | **String**|  | [optional] 
 **actionType** | **String**|  | [optional] 
 **clientId** | **Number**|  | [optional] 
 **id** | **Number**|  | [optional] 
 **rateTableId** | **Number**|  | [optional] 
 **actionTimeGt** | **String**|  | [optional] 
 **actionTimeLt** | **String**|  | [optional] 

### Return type

[**InlineResponse200119**](InlineResponse200119.md)

### Authorization

[auth_token](../README.md#auth_token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="logRateUploadGet"></a>
# **logRateUploadGet**
> InlineResponse200117 logRateUploadGet(opts)



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

var apiInstance = new DnlApi.LogApi();

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
apiInstance.logRateUploadGet(opts, callback);
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

<a name="logRegenerateBalanceGet"></a>
# **logRegenerateBalanceGet**
> InlineResponse200104 logRegenerateBalanceGet(opts)



Gets balancedailyresettask

### Example
```javascript
var DnlApi = require('dnl_api');
var defaultClient = DnlApi.ApiClient.instance;

// Configure API key authorization: auth_token
var auth_token = defaultClient.authentications['auth_token'];
auth_token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//auth_token.apiKeyPrefix = 'Token';

var apiInstance = new DnlApi.LogApi();

var opts = { 
  'page': 56, // Number | 
  'perPage': 56, // Number | 
  'orderBy': "orderBy_example", // String | 
  'orderDir': "orderDir_example", // String | 
  'clientId': 56, // Number | 
  'createBy': "createBy_example", // String | 
  'status': "status_example", // String | 
  'finishedTimeGt': "finishedTimeGt_example", // String | 
  'finishedTimeLt': "finishedTimeLt_example", // String | 
  'startTimeGt': "startTimeGt_example", // String | 
  'startTimeLt': "startTimeLt_example" // String | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.logRegenerateBalanceGet(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **page** | **Number**|  | [optional] 
 **perPage** | **Number**|  | [optional] 
 **orderBy** | **String**|  | [optional] 
 **orderDir** | **String**|  | [optional] 
 **clientId** | **Number**|  | [optional] 
 **createBy** | **String**|  | [optional] 
 **status** | **String**|  | [optional] 
 **finishedTimeGt** | **String**|  | [optional] 
 **finishedTimeLt** | **String**|  | [optional] 
 **startTimeGt** | **String**|  | [optional] 
 **startTimeLt** | **String**|  | [optional] 

### Return type

[**InlineResponse200104**](InlineResponse200104.md)

### Authorization

[auth_token](../README.md#auth_token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="logRerateCdrDownloadGet"></a>
# **logRerateCdrDownloadGet**
> InlineResponse200130 logRerateCdrDownloadGet(opts)



Gets reratecdrdownloadlog

### Example
```javascript
var DnlApi = require('dnl_api');
var defaultClient = DnlApi.ApiClient.instance;

// Configure API key authorization: auth_token
var auth_token = defaultClient.authentications['auth_token'];
auth_token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//auth_token.apiKeyPrefix = 'Token';

var apiInstance = new DnlApi.LogApi();

var opts = { 
  'page': 56, // Number | 
  'perPage': 56, // Number | 
  'orderBy': "orderBy_example", // String | 
  'orderDir': "orderDir_example", // String | 
  'status': "status_example", // String | 
  'createOnGt': "createOnGt_example", // String | 
  'createOnLt': "createOnLt_example", // String | 
  'finishedTimeGt': "finishedTimeGt_example", // String | 
  'finishedTimeLt': "finishedTimeLt_example" // String | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.logRerateCdrDownloadGet(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **page** | **Number**|  | [optional] 
 **perPage** | **Number**|  | [optional] 
 **orderBy** | **String**|  | [optional] 
 **orderDir** | **String**|  | [optional] 
 **status** | **String**|  | [optional] 
 **createOnGt** | **String**|  | [optional] 
 **createOnLt** | **String**|  | [optional] 
 **finishedTimeGt** | **String**|  | [optional] 
 **finishedTimeLt** | **String**|  | [optional] 

### Return type

[**InlineResponse200130**](InlineResponse200130.md)

### Authorization

[auth_token](../README.md#auth_token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="logRerateExecGet"></a>
# **logRerateExecGet**
> InlineResponse200129 logRerateExecGet(opts)



Gets reratereportexeclog

### Example
```javascript
var DnlApi = require('dnl_api');
var defaultClient = DnlApi.ApiClient.instance;

// Configure API key authorization: auth_token
var auth_token = defaultClient.authentications['auth_token'];
auth_token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//auth_token.apiKeyPrefix = 'Token';

var apiInstance = new DnlApi.LogApi();

var opts = { 
  'page': 56, // Number | 
  'perPage': 56, // Number | 
  'orderBy': "orderBy_example", // String | 
  'orderDir': "orderDir_example", // String | 
  'createBy': "createBy_example", // String | 
  'execType': 56, // Number | 
  'status': "status_example", // String | 
  'createOnGt': "createOnGt_example", // String | 
  'createOnLt': "createOnLt_example", // String | 
  'finishTimeGt': "finishTimeGt_example", // String | 
  'finishTimeLt': "finishTimeLt_example" // String | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.logRerateExecGet(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **page** | **Number**|  | [optional] 
 **perPage** | **Number**|  | [optional] 
 **orderBy** | **String**|  | [optional] 
 **orderDir** | **String**|  | [optional] 
 **createBy** | **String**|  | [optional] 
 **execType** | **Number**|  | [optional] 
 **status** | **String**|  | [optional] 
 **createOnGt** | **String**|  | [optional] 
 **createOnLt** | **String**|  | [optional] 
 **finishTimeGt** | **String**|  | [optional] 
 **finishTimeLt** | **String**|  | [optional] 

### Return type

[**InlineResponse200129**](InlineResponse200129.md)

### Authorization

[auth_token](../README.md#auth_token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="logRetrievePasswordGet"></a>
# **logRetrievePasswordGet**
> InlineResponse200121 logRetrievePasswordGet(opts)



Gets retrievepasswordlog

### Example
```javascript
var DnlApi = require('dnl_api');
var defaultClient = DnlApi.ApiClient.instance;

// Configure API key authorization: auth_token
var auth_token = defaultClient.authentications['auth_token'];
auth_token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//auth_token.apiKeyPrefix = 'Token';

var apiInstance = new DnlApi.LogApi();

var opts = { 
  'page': 56, // Number | 
  'perPage': 56, // Number | 
  'orderBy': "orderBy_example", // String | 
  'orderDir': "orderDir_example", // String | 
  'emailAddresses': "emailAddresses_example", // String | 
  'id': 56, // Number | 
  'status': "status_example", // String | 
  'username': "username_example", // String | 
  'modifyTimeGt': "modifyTimeGt_example", // String | 
  'modifyTimeLt': "modifyTimeLt_example" // String | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.logRetrievePasswordGet(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **page** | **Number**|  | [optional] 
 **perPage** | **Number**|  | [optional] 
 **orderBy** | **String**|  | [optional] 
 **orderDir** | **String**|  | [optional] 
 **emailAddresses** | **String**|  | [optional] 
 **id** | **Number**|  | [optional] 
 **status** | **String**|  | [optional] 
 **username** | **String**|  | [optional] 
 **modifyTimeGt** | **String**|  | [optional] 
 **modifyTimeLt** | **String**|  | [optional] 

### Return type

[**InlineResponse200121**](InlineResponse200121.md)

### Authorization

[auth_token](../README.md#auth_token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="logRevisionsGet"></a>
# **logRevisionsGet**
> InlineResponse200101 logRevisionsGet(opts)



Gets object revisions

### Example
```javascript
var DnlApi = require('dnl_api');
var defaultClient = DnlApi.ApiClient.instance;

// Configure API key authorization: auth_token
var auth_token = defaultClient.authentications['auth_token'];
auth_token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//auth_token.apiKeyPrefix = 'Token';

var apiInstance = new DnlApi.LogApi();

var opts = { 
  'page': 56, // Number | 
  'perPage': 56, // Number | 
  'orderBy': "orderBy_example", // String | 
  'orderDir': "orderDir_example", // String | 
  'action': "action_example", // String | 
  'entityName': "entityName_example", // String | 
  'entityPk': "entityPk_example", // String | 
  'revisionNumber': 56, // Number | 
  'userId': 56, // Number | 
  'revisionTimeGt': "revisionTimeGt_example", // String | 
  'revisionTimeLt': "revisionTimeLt_example" // String | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.logRevisionsGet(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **page** | **Number**|  | [optional] 
 **perPage** | **Number**|  | [optional] 
 **orderBy** | **String**|  | [optional] 
 **orderDir** | **String**|  | [optional] 
 **action** | **String**|  | [optional] 
 **entityName** | **String**|  | [optional] 
 **entityPk** | **String**|  | [optional] 
 **revisionNumber** | **Number**|  | [optional] 
 **userId** | **Number**|  | [optional] 
 **revisionTimeGt** | **String**|  | [optional] 
 **revisionTimeLt** | **String**|  | [optional] 

### Return type

[**InlineResponse200101**](InlineResponse200101.md)

### Authorization

[auth_token](../README.md#auth_token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="logRevisionsIdRestorePost"></a>
# **logRevisionsIdRestorePost**
> Success logRevisionsIdRestorePost(id)



Restores object to the specified revision

### Example
```javascript
var DnlApi = require('dnl_api');
var defaultClient = DnlApi.ApiClient.instance;

// Configure API key authorization: auth_token
var auth_token = defaultClient.authentications['auth_token'];
auth_token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//auth_token.apiKeyPrefix = 'Token';

var apiInstance = new DnlApi.LogApi();

var id = 789; // Number | ID of revision to restore to


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.logRevisionsIdRestorePost(id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| ID of revision to restore to | 

### Return type

[**Success**](Success.md)

### Authorization

[auth_token](../README.md#auth_token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="logScheduledReportGet"></a>
# **logScheduledReportGet**
> InlineResponse200122 logScheduledReportGet(opts)



Gets scheduledreportlog

### Example
```javascript
var DnlApi = require('dnl_api');
var defaultClient = DnlApi.ApiClient.instance;

// Configure API key authorization: auth_token
var auth_token = defaultClient.authentications['auth_token'];
auth_token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//auth_token.apiKeyPrefix = 'Token';

var apiInstance = new DnlApi.LogApi();

var opts = { 
  'page': 56, // Number | 
  'perPage': 56, // Number | 
  'orderBy': "orderBy_example", // String | 
  'orderDir': "orderDir_example", // String | 
  'emailTo': "emailTo_example", // String | 
  'id': 56, // Number | 
  'reportName': "reportName_example", // String | 
  'executeTimeGt': "executeTimeGt_example", // String | 
  'executeTimeLt': "executeTimeLt_example" // String | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.logScheduledReportGet(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **page** | **Number**|  | [optional] 
 **perPage** | **Number**|  | [optional] 
 **orderBy** | **String**|  | [optional] 
 **orderDir** | **String**|  | [optional] 
 **emailTo** | **String**|  | [optional] 
 **id** | **Number**|  | [optional] 
 **reportName** | **String**|  | [optional] 
 **executeTimeGt** | **String**|  | [optional] 
 **executeTimeLt** | **String**|  | [optional] 

### Return type

[**InlineResponse200122**](InlineResponse200122.md)

### Authorization

[auth_token](../README.md#auth_token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="logSchedulerGet"></a>
# **logSchedulerGet**
> InlineResponse200123 logSchedulerGet(opts)



Gets schedulerlog

### Example
```javascript
var DnlApi = require('dnl_api');
var defaultClient = DnlApi.ApiClient.instance;

// Configure API key authorization: auth_token
var auth_token = defaultClient.authentications['auth_token'];
auth_token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//auth_token.apiKeyPrefix = 'Token';

var apiInstance = new DnlApi.LogApi();

var opts = { 
  'page': 56, // Number | 
  'perPage': 56, // Number | 
  'orderBy': "orderBy_example", // String | 
  'orderDir': "orderDir_example", // String | 
  'id': 56, // Number | 
  'scriptName': "scriptName_example", // String | 
  'startTimeGt': "startTimeGt_example", // String | 
  'startTimeLt': "startTimeLt_example" // String | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.logSchedulerGet(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **page** | **Number**|  | [optional] 
 **perPage** | **Number**|  | [optional] 
 **orderBy** | **String**|  | [optional] 
 **orderDir** | **String**|  | [optional] 
 **id** | **Number**|  | [optional] 
 **scriptName** | **String**|  | [optional] 
 **startTimeGt** | **String**|  | [optional] 
 **startTimeLt** | **String**|  | [optional] 

### Return type

[**InlineResponse200123**](InlineResponse200123.md)

### Authorization

[auth_token](../README.md#auth_token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="logSipRegisterGet"></a>
# **logSipRegisterGet**
> InlineResponse200124 logSipRegisterGet(opts)



Gets sipregistration

### Example
```javascript
var DnlApi = require('dnl_api');
var defaultClient = DnlApi.ApiClient.instance;

// Configure API key authorization: auth_token
var auth_token = defaultClient.authentications['auth_token'];
auth_token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//auth_token.apiKeyPrefix = 'Token';

var apiInstance = new DnlApi.LogApi();

var opts = { 
  'page': 56, // Number | 
  'perPage': 56, // Number | 
  'orderBy': "orderBy_example", // String | 
  'orderDir': "orderDir_example", // String | 
  'contact': "contact_example", // String | 
  'expires': 56, // Number | 
  'id': 56, // Number | 
  'networkIp': "networkIp_example", // String | 
  'networkPort': 56, // Number | 
  'status': "status_example", // String | 
  'username': "username_example", // String | 
  'uptimeGt': "uptimeGt_example", // String | 
  'uptimeLt': "uptimeLt_example" // String | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.logSipRegisterGet(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **page** | **Number**|  | [optional] 
 **perPage** | **Number**|  | [optional] 
 **orderBy** | **String**|  | [optional] 
 **orderDir** | **String**|  | [optional] 
 **contact** | **String**|  | [optional] 
 **expires** | **Number**|  | [optional] 
 **id** | **Number**|  | [optional] 
 **networkIp** | **String**|  | [optional] 
 **networkPort** | **Number**|  | [optional] 
 **status** | **String**|  | [optional] 
 **username** | **String**|  | [optional] 
 **uptimeGt** | **String**|  | [optional] 
 **uptimeLt** | **String**|  | [optional] 

### Return type

[**InlineResponse200124**](InlineResponse200124.md)

### Authorization

[auth_token](../README.md#auth_token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="logSqlGet"></a>
# **logSqlGet**
> InlineResponse200125 logSqlGet(opts)



Gets pgstatactivity

### Example
```javascript
var DnlApi = require('dnl_api');
var defaultClient = DnlApi.ApiClient.instance;

// Configure API key authorization: auth_token
var auth_token = defaultClient.authentications['auth_token'];
auth_token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//auth_token.apiKeyPrefix = 'Token';

var apiInstance = new DnlApi.LogApi();

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
apiInstance.logSqlGet(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **page** | **Number**|  | [optional] 
 **perPage** | **Number**|  | [optional] 
 **orderBy** | **String**|  | [optional] 
 **orderDir** | **String**|  | [optional] 

### Return type

[**InlineResponse200125**](InlineResponse200125.md)

### Authorization

[auth_token](../README.md#auth_token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="logUserSignonGet"></a>
# **logUserSignonGet**
> InlineResponse200126 logUserSignonGet(opts)



Gets websession

### Example
```javascript
var DnlApi = require('dnl_api');
var defaultClient = DnlApi.ApiClient.instance;

// Configure API key authorization: auth_token
var auth_token = defaultClient.authentications['auth_token'];
auth_token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//auth_token.apiKeyPrefix = 'Token';

var apiInstance = new DnlApi.LogApi();

var opts = { 
  'page': 56, // Number | 
  'perPage': 56, // Number | 
  'orderBy': "orderBy_example", // String | 
  'orderDir': "orderDir_example", // String | 
  'agent': "agent_example", // String | 
  'host': "host_example", // String | 
  'id': 56, // Number | 
  'msg': "msg_example", // String | 
  'userId': 56, // Number | 
  'createTimeGt': "createTimeGt_example", // String | 
  'createTimeLt': "createTimeLt_example" // String | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.logUserSignonGet(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **page** | **Number**|  | [optional] 
 **perPage** | **Number**|  | [optional] 
 **orderBy** | **String**|  | [optional] 
 **orderDir** | **String**|  | [optional] 
 **agent** | **String**|  | [optional] 
 **host** | **String**|  | [optional] 
 **id** | **Number**|  | [optional] 
 **msg** | **String**|  | [optional] 
 **userId** | **Number**|  | [optional] 
 **createTimeGt** | **String**|  | [optional] 
 **createTimeLt** | **String**|  | [optional] 

### Return type

[**InlineResponse200126**](InlineResponse200126.md)

### Authorization

[auth_token](../README.md#auth_token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="logVersionsGet"></a>
# **logVersionsGet**
> InlineResponse200131 logVersionsGet(opts)



Gets versioninformation

### Example
```javascript
var DnlApi = require('dnl_api');
var defaultClient = DnlApi.ApiClient.instance;

// Configure API key authorization: auth_token
var auth_token = defaultClient.authentications['auth_token'];
auth_token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//auth_token.apiKeyPrefix = 'Token';

var apiInstance = new DnlApi.LogApi();

var opts = { 
  'page': 56, // Number | 
  'perPage': 56, // Number | 
  'orderBy': "orderBy_example", // String | 
  'orderDir': "orderDir_example", // String | 
  'id': 56, // Number | 
  'programName': "programName_example" // String | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.logVersionsGet(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **page** | **Number**|  | [optional] 
 **perPage** | **Number**|  | [optional] 
 **orderBy** | **String**|  | [optional] 
 **orderDir** | **String**|  | [optional] 
 **id** | **Number**|  | [optional] 
 **programName** | **String**|  | [optional] 

### Return type

[**InlineResponse200131**](InlineResponse200131.md)

### Authorization

[auth_token](../README.md#auth_token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


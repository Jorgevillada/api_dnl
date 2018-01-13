# DnlApi.ReportsApi

All URIs are relative to *https://198.100.149.164:8000/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**reportCdrActiveGet**](ReportsApi.md#reportCdrActiveGet) | **GET** /report/cdr_active | 
[**reportSipActiveGet**](ReportsApi.md#reportSipActiveGet) | **GET** /report/sip_active | 


<a name="reportCdrActiveGet"></a>
# **reportCdrActiveGet**
> InlineResponse200153 reportCdrActiveGet(opts)



Gets clientcdr

### Example
```javascript
var DnlApi = require('dnl_api');
var defaultClient = DnlApi.ApiClient.instance;

// Configure API key authorization: auth_token
var auth_token = defaultClient.authentications['auth_token'];
auth_token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//auth_token.apiKeyPrefix = 'Token';

var apiInstance = new DnlApi.ReportsApi();

var opts = { 
  'page': 56, // Number | 
  'perPage': 56, // Number | 
  'orderBy': "orderBy_example", // String | 
  'orderDir': "orderDir_example", // String | 
  'egressClientId': 56, // Number | 
  'egressId': 56, // Number | 
  'ingressClientId': 56, // Number | 
  'ingressId': 56, // Number | 
  'lrnDnis': "lrnDnis_example", // String | 
  'originationSourceHostName': "originationSourceHostName_example", // String | 
  'terminationSourceHostName': "terminationSourceHostName_example", // String | 
  'translationAni': "translationAni_example" // String | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.reportCdrActiveGet(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **page** | **Number**|  | [optional] 
 **perPage** | **Number**|  | [optional] 
 **orderBy** | **String**|  | [optional] 
 **orderDir** | **String**|  | [optional] 
 **egressClientId** | **Number**|  | [optional] 
 **egressId** | **Number**|  | [optional] 
 **ingressClientId** | **Number**|  | [optional] 
 **ingressId** | **Number**|  | [optional] 
 **lrnDnis** | **String**|  | [optional] 
 **originationSourceHostName** | **String**|  | [optional] 
 **terminationSourceHostName** | **String**|  | [optional] 
 **translationAni** | **String**|  | [optional] 

### Return type

[**InlineResponse200153**](InlineResponse200153.md)

### Authorization

[auth_token](../README.md#auth_token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="reportSipActiveGet"></a>
# **reportSipActiveGet**
> InlineResponse200124 reportSipActiveGet(opts)



Gets sipregistrationsactive

### Example
```javascript
var DnlApi = require('dnl_api');
var defaultClient = DnlApi.ApiClient.instance;

// Configure API key authorization: auth_token
var auth_token = defaultClient.authentications['auth_token'];
auth_token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//auth_token.apiKeyPrefix = 'Token';

var apiInstance = new DnlApi.ReportsApi();

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
apiInstance.reportSipActiveGet(opts, callback);
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


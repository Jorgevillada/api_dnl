# DnlApi.ClientPortalApi

All URIs are relative to *https://148.251.91.143:8000/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**homeClientGatewayPaymentsGet**](ClientPortalApi.md#homeClientGatewayPaymentsGet) | **GET** /home/client/gateway_payments | 
[**homeClientGet**](ClientPortalApi.md#homeClientGet) | **GET** /home/client | 
[**homeClientPaymentsGet**](ClientPortalApi.md#homeClientPaymentsGet) | **GET** /home/client/payments | 


<a name="homeClientGatewayPaymentsGet"></a>
# **homeClientGatewayPaymentsGet**
> InlineResponse20032 homeClientGatewayPaymentsGet(opts)



Gets paymentgatewayhistory

### Example
```javascript
var DnlApi = require('dnl_api');
var defaultClient = DnlApi.ApiClient.instance;

// Configure API key authorization: auth_token
var auth_token = defaultClient.authentications['auth_token'];
auth_token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//auth_token.apiKeyPrefix = 'Token';

var apiInstance = new DnlApi.ClientPortalApi();

var opts = { 
  'page': 56, // Number | 
  'perPage': 56, // Number | 
  'orderBy': "orderBy_example", // String | 
  'orderDir': "orderDir_example", // String | 
  'paypalId': "paypalId_example", // String | 
  'paypalTransactionId': "paypalTransactionId_example", // String | 
  'type': "type_example", // String | 
  'paidOnGt': "paidOnGt_example", // String | 
  'paidOnLt': "paidOnLt_example" // String | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.homeClientGatewayPaymentsGet(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **page** | **Number**|  | [optional] 
 **perPage** | **Number**|  | [optional] 
 **orderBy** | **String**|  | [optional] 
 **orderDir** | **String**|  | [optional] 
 **paypalId** | **String**|  | [optional] 
 **paypalTransactionId** | **String**|  | [optional] 
 **type** | **String**|  | [optional] 
 **paidOnGt** | **String**|  | [optional] 
 **paidOnLt** | **String**|  | [optional] 

### Return type

[**InlineResponse20032**](InlineResponse20032.md)

### Authorization

[auth_token](../README.md#auth_token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="homeClientGet"></a>
# **homeClientGet**
> InlineResponse20030 homeClientGet()



Gets carrier

### Example
```javascript
var DnlApi = require('dnl_api');
var defaultClient = DnlApi.ApiClient.instance;

// Configure API key authorization: auth_token
var auth_token = defaultClient.authentications['auth_token'];
auth_token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//auth_token.apiKeyPrefix = 'Token';

var apiInstance = new DnlApi.ClientPortalApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.homeClientGet(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**InlineResponse20030**](InlineResponse20030.md)

### Authorization

[auth_token](../README.md#auth_token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="homeClientPaymentsGet"></a>
# **homeClientPaymentsGet**
> InlineResponse20031 homeClientPaymentsGet(opts)



Gets clientpayments

### Example
```javascript
var DnlApi = require('dnl_api');
var defaultClient = DnlApi.ApiClient.instance;

// Configure API key authorization: auth_token
var auth_token = defaultClient.authentications['auth_token'];
auth_token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//auth_token.apiKeyPrefix = 'Token';

var apiInstance = new DnlApi.ClientPortalApi();

var opts = { 
  'page': 56, // Number | 
  'perPage': 56, // Number | 
  'orderBy': "orderBy_example", // String | 
  'orderDir': "orderDir_example", // String | 
  'amountGt': "amountGt_example", // String | 
  'amountLt': "amountLt_example", // String | 
  'paidOnGt': "paidOnGt_example", // String | 
  'paidOnLt': "paidOnLt_example" // String | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.homeClientPaymentsGet(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **page** | **Number**|  | [optional] 
 **perPage** | **Number**|  | [optional] 
 **orderBy** | **String**|  | [optional] 
 **orderDir** | **String**|  | [optional] 
 **amountGt** | **String**|  | [optional] 
 **amountLt** | **String**|  | [optional] 
 **paidOnGt** | **String**|  | [optional] 
 **paidOnLt** | **String**|  | [optional] 

### Return type

[**InlineResponse20031**](InlineResponse20031.md)

### Authorization

[auth_token](../README.md#auth_token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


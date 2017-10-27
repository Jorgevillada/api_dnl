# DnlApi.AgentPortalApi

All URIs are relative to *https://148.251.91.143:8000/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**homeAgentClientsGet**](AgentPortalApi.md#homeAgentClientsGet) | **GET** /home/agent/clients | 


<a name="homeAgentClientsGet"></a>
# **homeAgentClientsGet**
> InlineResponse20011 homeAgentClientsGet(opts)



Gets agentportalclients

### Example
```javascript
var DnlApi = require('dnl_api');
var defaultClient = DnlApi.ApiClient.instance;

// Configure API key authorization: auth_token
var auth_token = defaultClient.authentications['auth_token'];
auth_token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//auth_token.apiKeyPrefix = 'Token';

var apiInstance = new DnlApi.AgentPortalApi();

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
apiInstance.homeAgentClientsGet(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **page** | **Number**|  | [optional] 
 **perPage** | **Number**|  | [optional] 
 **orderBy** | **String**|  | [optional] 
 **orderDir** | **String**|  | [optional] 

### Return type

[**InlineResponse20011**](InlineResponse20011.md)

### Authorization

[auth_token](../README.md#auth_token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


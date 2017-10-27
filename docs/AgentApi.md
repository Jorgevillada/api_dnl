# DnlApi.AgentApi

All URIs are relative to *https://148.251.91.143:8000/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**agentAgentIdCarrierGet**](AgentApi.md#agentAgentIdCarrierGet) | **GET** /agent/{agent_id}/carrier | 
[**agentAgentIdCarrierIdDelete**](AgentApi.md#agentAgentIdCarrierIdDelete) | **DELETE** /agent/{agent_id}/{carrier_id} | 
[**agentAgentIdCarrierPatch**](AgentApi.md#agentAgentIdCarrierPatch) | **PATCH** /agent/{agent_id}/carrier | 
[**agentAgentIdDelete**](AgentApi.md#agentAgentIdDelete) | **DELETE** /agent/{agent_id} | 
[**agentAgentIdGet**](AgentApi.md#agentAgentIdGet) | **GET** /agent/{agent_id} | 
[**agentAgentIdPatch**](AgentApi.md#agentAgentIdPatch) | **PATCH** /agent/{agent_id} | 
[**agentClientsGet**](AgentApi.md#agentClientsGet) | **GET** /agent/clients | 
[**agentCommissionGet**](AgentApi.md#agentCommissionGet) | **GET** /agent/commission | 
[**agentCreatePost**](AgentApi.md#agentCreatePost) | **POST** /agent/create | 
[**agentListGet**](AgentApi.md#agentListGet) | **GET** /agent/list | 
[**agentNotAssignedClientsGet**](AgentApi.md#agentNotAssignedClientsGet) | **GET** /agent/not_assigned_clients | 


<a name="agentAgentIdCarrierGet"></a>
# **agentAgentIdCarrierGet**
> InlineResponse2007 agentAgentIdCarrierGet(agentId)



Gets agent

### Example
```javascript
var DnlApi = require('dnl_api');
var defaultClient = DnlApi.ApiClient.instance;

// Configure API key authorization: auth_token
var auth_token = defaultClient.authentications['auth_token'];
auth_token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//auth_token.apiKeyPrefix = 'Token';

var apiInstance = new DnlApi.AgentApi();

var agentId = 789; // Number | Agent id to get info about


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.agentAgentIdCarrierGet(agentId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **agentId** | **Number**| Agent id to get info about | 

### Return type

[**InlineResponse2007**](InlineResponse2007.md)

### Authorization

[auth_token](../README.md#auth_token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="agentAgentIdCarrierIdDelete"></a>
# **agentAgentIdCarrierIdDelete**
> Success agentAgentIdCarrierIdDelete(agentId, carrierId)



Deletes agentclient

### Example
```javascript
var DnlApi = require('dnl_api');
var defaultClient = DnlApi.ApiClient.instance;

// Configure API key authorization: auth_token
var auth_token = defaultClient.authentications['auth_token'];
auth_token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//auth_token.apiKeyPrefix = 'Token';

var apiInstance = new DnlApi.AgentApi();

var agentId = 789; // Number | AgentClient agent_id to get info about

var carrierId = 789; // Number | AgentClient carrier_id to get info about


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.agentAgentIdCarrierIdDelete(agentId, carrierId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **agentId** | **Number**| AgentClient agent_id to get info about | 
 **carrierId** | **Number**| AgentClient carrier_id to get info about | 

### Return type

[**Success**](Success.md)

### Authorization

[auth_token](../README.md#auth_token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="agentAgentIdCarrierPatch"></a>
# **agentAgentIdCarrierPatch**
> InlineResponse2007 agentAgentIdCarrierPatch(agentId, opts)



Modifies agent

### Example
```javascript
var DnlApi = require('dnl_api');
var defaultClient = DnlApi.ApiClient.instance;

// Configure API key authorization: auth_token
var auth_token = defaultClient.authentications['auth_token'];
auth_token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//auth_token.apiKeyPrefix = 'Token';

var apiInstance = new DnlApi.AgentApi();

var agentId = 789; // Number | Agent id to get info about

var opts = { 
  'body': new DnlApi.AgentCarriersAdd() // AgentCarriersAdd | Agent to modify
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.agentAgentIdCarrierPatch(agentId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **agentId** | **Number**| Agent id to get info about | 
 **body** | [**AgentCarriersAdd**](AgentCarriersAdd.md)| Agent to modify | [optional] 

### Return type

[**InlineResponse2007**](InlineResponse2007.md)

### Authorization

[auth_token](../README.md#auth_token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="agentAgentIdDelete"></a>
# **agentAgentIdDelete**
> Success agentAgentIdDelete(agentId)



Deletes agent

### Example
```javascript
var DnlApi = require('dnl_api');
var defaultClient = DnlApi.ApiClient.instance;

// Configure API key authorization: auth_token
var auth_token = defaultClient.authentications['auth_token'];
auth_token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//auth_token.apiKeyPrefix = 'Token';

var apiInstance = new DnlApi.AgentApi();

var agentId = 789; // Number | Agent id to get info about


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.agentAgentIdDelete(agentId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **agentId** | **Number**| Agent id to get info about | 

### Return type

[**Success**](Success.md)

### Authorization

[auth_token](../README.md#auth_token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="agentAgentIdGet"></a>
# **agentAgentIdGet**
> InlineResponse2005 agentAgentIdGet(agentId)



Gets agent

### Example
```javascript
var DnlApi = require('dnl_api');
var defaultClient = DnlApi.ApiClient.instance;

// Configure API key authorization: auth_token
var auth_token = defaultClient.authentications['auth_token'];
auth_token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//auth_token.apiKeyPrefix = 'Token';

var apiInstance = new DnlApi.AgentApi();

var agentId = 789; // Number | Agent id to get info about


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.agentAgentIdGet(agentId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **agentId** | **Number**| Agent id to get info about | 

### Return type

[**InlineResponse2005**](InlineResponse2005.md)

### Authorization

[auth_token](../README.md#auth_token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="agentAgentIdPatch"></a>
# **agentAgentIdPatch**
> InlineResponse2005 agentAgentIdPatch(agentId, opts)



Modifies agent

### Example
```javascript
var DnlApi = require('dnl_api');
var defaultClient = DnlApi.ApiClient.instance;

// Configure API key authorization: auth_token
var auth_token = defaultClient.authentications['auth_token'];
auth_token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//auth_token.apiKeyPrefix = 'Token';

var apiInstance = new DnlApi.AgentApi();

var agentId = 789; // Number | Agent id to get info about

var opts = { 
  'body': new DnlApi.AgentModify() // AgentModify | Agent to modify
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.agentAgentIdPatch(agentId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **agentId** | **Number**| Agent id to get info about | 
 **body** | [**AgentModify**](AgentModify.md)| Agent to modify | [optional] 

### Return type

[**InlineResponse2005**](InlineResponse2005.md)

### Authorization

[auth_token](../README.md#auth_token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="agentClientsGet"></a>
# **agentClientsGet**
> InlineResponse2009 agentClientsGet(opts)



Gets all agentclients

### Example
```javascript
var DnlApi = require('dnl_api');
var defaultClient = DnlApi.ApiClient.instance;

// Configure API key authorization: auth_token
var auth_token = defaultClient.authentications['auth_token'];
auth_token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//auth_token.apiKeyPrefix = 'Token';

var apiInstance = new DnlApi.AgentApi();

var opts = { 
  'page': 56, // Number | 
  'perPage': 56, // Number | 
  'orderBy': "orderBy_example", // String | 
  'orderDir': "orderDir_example", // String | 
  'assignedBy': "assignedBy_example", // String | 
  'assignedOnGt': "assignedOnGt_example", // String | 
  'assignedOnLt': "assignedOnLt_example" // String | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.agentClientsGet(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **page** | **Number**|  | [optional] 
 **perPage** | **Number**|  | [optional] 
 **orderBy** | **String**|  | [optional] 
 **orderDir** | **String**|  | [optional] 
 **assignedBy** | **String**|  | [optional] 
 **assignedOnGt** | **String**|  | [optional] 
 **assignedOnLt** | **String**|  | [optional] 

### Return type

[**InlineResponse2009**](InlineResponse2009.md)

### Authorization

[auth_token](../README.md#auth_token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="agentCommissionGet"></a>
# **agentCommissionGet**
> InlineResponse2008 agentCommissionGet(opts)



Gets agentcommissionhistorydetail list

### Example
```javascript
var DnlApi = require('dnl_api');
var defaultClient = DnlApi.ApiClient.instance;

// Configure API key authorization: auth_token
var auth_token = defaultClient.authentications['auth_token'];
auth_token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//auth_token.apiKeyPrefix = 'Token';

var apiInstance = new DnlApi.AgentApi();

var opts = { 
  'page': 56, // Number | 
  'perPage': 56, // Number | 
  'orderBy': "orderBy_example", // String | 
  'orderDir': "orderDir_example", // String | 
  'agentId': 56, // Number | 
  'clientId': 56, // Number | 
  'clientCostGt': "clientCostGt_example", // String | 
  'clientCostLt': "clientCostLt_example", // String | 
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
apiInstance.agentCommissionGet(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **page** | **Number**|  | [optional] 
 **perPage** | **Number**|  | [optional] 
 **orderBy** | **String**|  | [optional] 
 **orderDir** | **String**|  | [optional] 
 **agentId** | **Number**|  | [optional] 
 **clientId** | **Number**|  | [optional] 
 **clientCostGt** | **String**|  | [optional] 
 **clientCostLt** | **String**|  | [optional] 
 **endTimeGt** | **String**|  | [optional] 
 **endTimeLt** | **String**|  | [optional] 
 **startTimeGt** | **String**|  | [optional] 
 **startTimeLt** | **String**|  | [optional] 

### Return type

[**InlineResponse2008**](InlineResponse2008.md)

### Authorization

[auth_token](../README.md#auth_token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="agentCreatePost"></a>
# **agentCreatePost**
> ObjectCreated agentCreatePost(opts)



Creates new agent

### Example
```javascript
var DnlApi = require('dnl_api');
var defaultClient = DnlApi.ApiClient.instance;

// Configure API key authorization: auth_token
var auth_token = defaultClient.authentications['auth_token'];
auth_token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//auth_token.apiKeyPrefix = 'Token';

var apiInstance = new DnlApi.AgentApi();

var opts = { 
  'body': new DnlApi.Agent() // Agent | Agent to create
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.agentCreatePost(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**Agent**](Agent.md)| Agent to create | [optional] 

### Return type

[**ObjectCreated**](ObjectCreated.md)

### Authorization

[auth_token](../README.md#auth_token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="agentListGet"></a>
# **agentListGet**
> InlineResponse2006 agentListGet(opts)



Gets agents

### Example
```javascript
var DnlApi = require('dnl_api');
var defaultClient = DnlApi.ApiClient.instance;

// Configure API key authorization: auth_token
var auth_token = defaultClient.authentications['auth_token'];
auth_token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//auth_token.apiKeyPrefix = 'Token';

var apiInstance = new DnlApi.AgentApi();

var opts = { 
  'page': 56, // Number | 
  'perPage': 56, // Number | 
  'orderBy': "orderBy_example", // String | 
  'orderDir': "orderDir_example", // String | 
  'agentId': 56, // Number | 
  'agentName': "agentName_example", // String | 
  'editPermission': true, // Boolean | 
  'email': "email_example", // String | 
  'frequencyType': "frequencyType_example", // String | 
  'methodType': "methodType_example", // String | 
  'commissionGt': "commissionGt_example" // String | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.agentListGet(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **page** | **Number**|  | [optional] 
 **perPage** | **Number**|  | [optional] 
 **orderBy** | **String**|  | [optional] 
 **orderDir** | **String**|  | [optional] 
 **agentId** | **Number**|  | [optional] 
 **agentName** | **String**|  | [optional] 
 **editPermission** | **Boolean**|  | [optional] 
 **email** | **String**|  | [optional] 
 **frequencyType** | **String**|  | [optional] 
 **methodType** | **String**|  | [optional] 
 **commissionGt** | **String**|  | [optional] 

### Return type

[**InlineResponse2006**](InlineResponse2006.md)

### Authorization

[auth_token](../README.md#auth_token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="agentNotAssignedClientsGet"></a>
# **agentNotAssignedClientsGet**
> InlineResponse20010 agentNotAssignedClientsGet(opts)



Gets not assigned clients

### Example
```javascript
var DnlApi = require('dnl_api');
var defaultClient = DnlApi.ApiClient.instance;

// Configure API key authorization: auth_token
var auth_token = defaultClient.authentications['auth_token'];
auth_token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//auth_token.apiKeyPrefix = 'Token';

var apiInstance = new DnlApi.AgentApi();

var opts = { 
  'page': 56, // Number | 
  'perPage': 56, // Number | 
  'orderBy': "orderBy_example", // String | 
  'orderDir': "orderDir_example", // String | 
  'clientId': 56, // Number | 
  'name': "name_example" // String | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.agentNotAssignedClientsGet(opts, callback);
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

### Return type

[**InlineResponse20010**](InlineResponse20010.md)

### Authorization

[auth_token](../README.md#auth_token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


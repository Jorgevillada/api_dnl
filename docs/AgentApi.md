# DnlApi.AgentApi

All URIs are relative to *https://198.100.149.164:8000/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**agentAgentIdAddCarrierPost**](AgentApi.md#agentAgentIdAddCarrierPost) | **POST** /agent/{agent_id}/add_carrier | 
[**agentAgentIdCarrierGet**](AgentApi.md#agentAgentIdCarrierGet) | **GET** /agent/{agent_id}/carrier | 
[**agentAgentIdCarrierIdDelete**](AgentApi.md#agentAgentIdCarrierIdDelete) | **DELETE** /agent/{agent_id}/{carrier_id} | 
[**agentAgentIdCarrierPatch**](AgentApi.md#agentAgentIdCarrierPatch) | **PATCH** /agent/{agent_id}/carrier | 
[**agentAgentIdDelete**](AgentApi.md#agentAgentIdDelete) | **DELETE** /agent/{agent_id} | 
[**agentAgentIdGet**](AgentApi.md#agentAgentIdGet) | **GET** /agent/{agent_id} | 
[**agentAgentIdPatch**](AgentApi.md#agentAgentIdPatch) | **PATCH** /agent/{agent_id} | 
[**agentAllDelete**](AgentApi.md#agentAllDelete) | **DELETE** /agent/all | 
[**agentAllPatch**](AgentApi.md#agentAllPatch) | **PATCH** /agent/all | 
[**agentClientsGet**](AgentApi.md#agentClientsGet) | **GET** /agent/clients | 
[**agentCommissionGet**](AgentApi.md#agentCommissionGet) | **GET** /agent/commission | 
[**agentCreatePost**](AgentApi.md#agentCreatePost) | **POST** /agent/create | 
[**agentListGet**](AgentApi.md#agentListGet) | **GET** /agent/list | 
[**agentNotAssignedClientsGet**](AgentApi.md#agentNotAssignedClientsGet) | **GET** /agent/not_assigned_clients | 


<a name="agentAgentIdAddCarrierPost"></a>
# **agentAgentIdAddCarrierPost**
> Success agentAgentIdAddCarrierPost(agentId, opts)



add carrier list to agent

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

var agentId = 789; // Number | Parent agent id

var opts = { 
  'body': new DnlApi.AgentCarriersAdd() // AgentCarriersAdd | Carriers to add
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.agentAgentIdAddCarrierPost(agentId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **agentId** | **Number**| Parent agent id | 
 **body** | [**AgentCarriersAdd**](AgentCarriersAdd.md)| Carriers to add | [optional] 

### Return type

[**Success**](Success.md)

### Authorization

[auth_token](../README.md#auth_token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="agentAgentIdCarrierGet"></a>
# **agentAgentIdCarrierGet**
> InlineResponse2008 agentAgentIdCarrierGet(agentId)



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

[**InlineResponse2008**](InlineResponse2008.md)

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
> InlineResponse2008 agentAgentIdCarrierPatch(agentId, opts)



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

[**InlineResponse2008**](InlineResponse2008.md)

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
> InlineResponse2006 agentAgentIdGet(agentId)



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

[**InlineResponse2006**](InlineResponse2006.md)

### Authorization

[auth_token](../README.md#auth_token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="agentAgentIdPatch"></a>
# **agentAgentIdPatch**
> InlineResponse2006 agentAgentIdPatch(agentId, opts)



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

[**InlineResponse2006**](InlineResponse2006.md)

### Authorization

[auth_token](../README.md#auth_token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="agentAllDelete"></a>
# **agentAllDelete**
> InlineResponse2002 agentAllDelete(opts)



Deletes multiple found agent

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
  'agentIdIn': "agentIdIn_example", // String | 
  'agentName': "agentName_example", // String | 
  'commissionGt': "commissionGt_example", // String | 
  'commissionLt': "commissionLt_example", // String | 
  'editPermission': true, // Boolean | 
  'email': "email_example", // String | 
  'frequencyType': "frequencyType_example", // String | 
  'methodType': "methodType_example" // String | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.agentAllDelete(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **agentIdIn** | **String**|  | [optional] 
 **agentName** | **String**|  | [optional] 
 **commissionGt** | **String**|  | [optional] 
 **commissionLt** | **String**|  | [optional] 
 **editPermission** | **Boolean**|  | [optional] 
 **email** | **String**|  | [optional] 
 **frequencyType** | **String**|  | [optional] 
 **methodType** | **String**|  | [optional] 

### Return type

[**InlineResponse2002**](InlineResponse2002.md)

### Authorization

[auth_token](../README.md#auth_token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="agentAllPatch"></a>
# **agentAllPatch**
> InlineResponse2002 agentAllPatch(opts)



Modifies multiple found agent

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
  'body': new DnlApi.AgentActivate(), // AgentActivate | Agent to modify
  'agentIdIn': "agentIdIn_example", // String | 
  'agentName': "agentName_example", // String | 
  'commissionGt': "commissionGt_example", // String | 
  'commissionLt': "commissionLt_example", // String | 
  'editPermission': true, // Boolean | 
  'email': "email_example", // String | 
  'frequencyType': "frequencyType_example", // String | 
  'methodType': "methodType_example" // String | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.agentAllPatch(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**AgentActivate**](AgentActivate.md)| Agent to modify | [optional] 
 **agentIdIn** | **String**|  | [optional] 
 **agentName** | **String**|  | [optional] 
 **commissionGt** | **String**|  | [optional] 
 **commissionLt** | **String**|  | [optional] 
 **editPermission** | **Boolean**|  | [optional] 
 **email** | **String**|  | [optional] 
 **frequencyType** | **String**|  | [optional] 
 **methodType** | **String**|  | [optional] 

### Return type

[**InlineResponse2002**](InlineResponse2002.md)

### Authorization

[auth_token](../README.md#auth_token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="agentClientsGet"></a>
# **agentClientsGet**
> InlineResponse20010 agentClientsGet(opts)



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
  'agentId': 56, // Number | 
  'assignedBy': "assignedBy_example", // String | 
  'clientId': 56, // Number | 
  'clientName': "clientName_example", // String | 
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
 **agentId** | **Number**|  | [optional] 
 **assignedBy** | **String**|  | [optional] 
 **clientId** | **Number**|  | [optional] 
 **clientName** | **String**|  | [optional] 
 **assignedOnGt** | **String**|  | [optional] 
 **assignedOnLt** | **String**|  | [optional] 

### Return type

[**InlineResponse20010**](InlineResponse20010.md)

### Authorization

[auth_token](../README.md#auth_token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="agentCommissionGet"></a>
# **agentCommissionGet**
> InlineResponse2009 agentCommissionGet(opts)



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

[**InlineResponse2009**](InlineResponse2009.md)

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
> InlineResponse2007 agentListGet(opts)



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
  'status': true, // Boolean | 
  'usageCount': 56, // Number | 
  'commissionGt': "commissionGt_example", // String | 
  'commissionLt': "commissionLt_example", // String | 
  'usageCountGt': 56, // Number | 
  'usageCountLt': 56 // Number | 
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
 **status** | **Boolean**|  | [optional] 
 **usageCount** | **Number**|  | [optional] 
 **commissionGt** | **String**|  | [optional] 
 **commissionLt** | **String**|  | [optional] 
 **usageCountGt** | **Number**|  | [optional] 
 **usageCountLt** | **Number**|  | [optional] 

### Return type

[**InlineResponse2007**](InlineResponse2007.md)

### Authorization

[auth_token](../README.md#auth_token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="agentNotAssignedClientsGet"></a>
# **agentNotAssignedClientsGet**
> InlineResponse20011 agentNotAssignedClientsGet(opts)



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
  'clientType': "clientType_example", // String | 
  'email': "email_example", // String | 
  'groupId': 56, // Number | 
  'mode': 56, // Number | 
  'name': "name_example", // String | 
  'status': true, // Boolean | 
  'egressCountGt': 56, // Number | 
  'ingressCountGt': 56 // Number | 
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
 **clientType** | **String**|  | [optional] 
 **email** | **String**|  | [optional] 
 **groupId** | **Number**|  | [optional] 
 **mode** | **Number**|  | [optional] 
 **name** | **String**|  | [optional] 
 **status** | **Boolean**|  | [optional] 
 **egressCountGt** | **Number**|  | [optional] 
 **ingressCountGt** | **Number**|  | [optional] 

### Return type

[**InlineResponse20011**](InlineResponse20011.md)

### Authorization

[auth_token](../README.md#auth_token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


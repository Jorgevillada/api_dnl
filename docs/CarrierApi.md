# DnlApi.CarrierApi

All URIs are relative to *https://148.251.91.143:8000/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**carrierBasicCreatePost**](CarrierApi.md#carrierBasicCreatePost) | **POST** /carrier/basic/create | 
[**carrierClientIdAlertsGet**](CarrierApi.md#carrierClientIdAlertsGet) | **GET** /carrier/{client_id}/alerts | 
[**carrierClientIdAlertsPatch**](CarrierApi.md#carrierClientIdAlertsPatch) | **PATCH** /carrier/{client_id}/alerts | 
[**carrierClientIdContactsGet**](CarrierApi.md#carrierClientIdContactsGet) | **GET** /carrier/{client_id}/contacts | 
[**carrierClientIdContactsPatch**](CarrierApi.md#carrierClientIdContactsPatch) | **PATCH** /carrier/{client_id}/contacts | 
[**carrierClientIdDelete**](CarrierApi.md#carrierClientIdDelete) | **DELETE** /carrier/{client_id} | 
[**carrierClientIdEgressTrunkListGet**](CarrierApi.md#carrierClientIdEgressTrunkListGet) | **GET** /carrier/{client_id}/egress_trunk/list | 
[**carrierClientIdEgressTrunkPost**](CarrierApi.md#carrierClientIdEgressTrunkPost) | **POST** /carrier/{client_id}/egress_trunk | 
[**carrierClientIdGet**](CarrierApi.md#carrierClientIdGet) | **GET** /carrier/{client_id} | 
[**carrierClientIdIngressTrunkListGet**](CarrierApi.md#carrierClientIdIngressTrunkListGet) | **GET** /carrier/{client_id}/ingress_trunk/list | 
[**carrierClientIdIngressTrunkPost**](CarrierApi.md#carrierClientIdIngressTrunkPost) | **POST** /carrier/{client_id}/ingress_trunk | 
[**carrierClientIdInvoicesGet**](CarrierApi.md#carrierClientIdInvoicesGet) | **GET** /carrier/{client_id}/invoices | 
[**carrierClientIdInvoicesPatch**](CarrierApi.md#carrierClientIdInvoicesPatch) | **PATCH** /carrier/{client_id}/invoices | 
[**carrierClientIdLowBalanceConfigGet**](CarrierApi.md#carrierClientIdLowBalanceConfigGet) | **GET** /carrier/{client_id}/low_balance_config | 
[**carrierClientIdLowBalanceConfigPatch**](CarrierApi.md#carrierClientIdLowBalanceConfigPatch) | **PATCH** /carrier/{client_id}/low_balance_config | 
[**carrierClientIdPasswordPatch**](CarrierApi.md#carrierClientIdPasswordPatch) | **PATCH** /carrier/{client_id}/password | 
[**carrierClientIdPatch**](CarrierApi.md#carrierClientIdPatch) | **PATCH** /carrier/{client_id} | 
[**carrierClientIdPortalGet**](CarrierApi.md#carrierClientIdPortalGet) | **GET** /carrier/{client_id}/portal | 
[**carrierClientIdPortalPatch**](CarrierApi.md#carrierClientIdPortalPatch) | **PATCH** /carrier/{client_id}/portal | 
[**carrierClientIdSaveAsTemplatePost**](CarrierApi.md#carrierClientIdSaveAsTemplatePost) | **POST** /carrier/{client_id}/save_as_template | 
[**carrierClientIdSccGet**](CarrierApi.md#carrierClientIdSccGet) | **GET** /carrier/{client_id}/scc | 
[**carrierClientIdSccPatch**](CarrierApi.md#carrierClientIdSccPatch) | **PATCH** /carrier/{client_id}/scc | 
[**carrierClientIdSendLowBalanceAlertPatch**](CarrierApi.md#carrierClientIdSendLowBalanceAlertPatch) | **PATCH** /carrier/{client_id}/send_low_balance_alert | 
[**carrierClientIdSendWelcomPatch**](CarrierApi.md#carrierClientIdSendWelcomPatch) | **PATCH** /carrier/{client_id}/send_welcom | 
[**carrierFullCreatePost**](CarrierApi.md#carrierFullCreatePost) | **POST** /carrier/full/create | 
[**carrierGroupCreatePost**](CarrierApi.md#carrierGroupCreatePost) | **POST** /carrier/group/create | 
[**carrierGroupGroupIdDelete**](CarrierApi.md#carrierGroupGroupIdDelete) | **DELETE** /carrier/group/{group_id} | 
[**carrierGroupGroupIdGet**](CarrierApi.md#carrierGroupGroupIdGet) | **GET** /carrier/group/{group_id} | 
[**carrierGroupGroupIdPatch**](CarrierApi.md#carrierGroupGroupIdPatch) | **PATCH** /carrier/group/{group_id} | 
[**carrierGroupListGet**](CarrierApi.md#carrierGroupListGet) | **GET** /carrier/group/list | 
[**carrierListGet**](CarrierApi.md#carrierListGet) | **GET** /carrier/list | 
[**clientCreditClientIdPatch**](CarrierApi.md#clientCreditClientIdPatch) | **PATCH** /client/credit/{client_id} | 
[**clientCreditListGet**](CarrierApi.md#clientCreditListGet) | **GET** /client/credit/list | 
[**clientPastDueListGet**](CarrierApi.md#clientPastDueListGet) | **GET** /client/past_due/list | 
[**egressTrunkResourceIdDelete**](CarrierApi.md#egressTrunkResourceIdDelete) | **DELETE** /egress_trunk/{resource_id} | 
[**egressTrunkResourceIdGet**](CarrierApi.md#egressTrunkResourceIdGet) | **GET** /egress_trunk/{resource_id} | 
[**egressTrunkResourceIdPatch**](CarrierApi.md#egressTrunkResourceIdPatch) | **PATCH** /egress_trunk/{resource_id} | 
[**ingressTrunkResourceIdDelete**](CarrierApi.md#ingressTrunkResourceIdDelete) | **DELETE** /ingress_trunk/{resource_id} | 
[**ingressTrunkResourceIdGet**](CarrierApi.md#ingressTrunkResourceIdGet) | **GET** /ingress_trunk/{resource_id} | 
[**ingressTrunkResourceIdPatch**](CarrierApi.md#ingressTrunkResourceIdPatch) | **PATCH** /ingress_trunk/{resource_id} | 


<a name="carrierBasicCreatePost"></a>
# **carrierBasicCreatePost**
> ObjectCreated carrierBasicCreatePost(opts)



Creates new carrier

### Example
```javascript
var DnlApi = require('dnl_api');
var defaultClient = DnlApi.ApiClient.instance;

// Configure API key authorization: auth_token
var auth_token = defaultClient.authentications['auth_token'];
auth_token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//auth_token.apiKeyPrefix = 'Token';

var apiInstance = new DnlApi.CarrierApi();

var opts = { 
  'body': new DnlApi.Carrier() // Carrier | Carrier to create
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.carrierBasicCreatePost(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**Carrier**](Carrier.md)| Carrier to create | [optional] 

### Return type

[**ObjectCreated**](ObjectCreated.md)

### Authorization

[auth_token](../README.md#auth_token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="carrierClientIdAlertsGet"></a>
# **carrierClientIdAlertsGet**
> InlineResponse20016 carrierClientIdAlertsGet(clientId)



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

var apiInstance = new DnlApi.CarrierApi();

var clientId = 789; // Number | Carrier id to get info about


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.carrierClientIdAlertsGet(clientId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **clientId** | **Number**| Carrier id to get info about | 

### Return type

[**InlineResponse20016**](InlineResponse20016.md)

### Authorization

[auth_token](../README.md#auth_token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="carrierClientIdAlertsPatch"></a>
# **carrierClientIdAlertsPatch**
> InlineResponse20016 carrierClientIdAlertsPatch(clientId, opts)



Modifies carrier

### Example
```javascript
var DnlApi = require('dnl_api');
var defaultClient = DnlApi.ApiClient.instance;

// Configure API key authorization: auth_token
var auth_token = defaultClient.authentications['auth_token'];
auth_token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//auth_token.apiKeyPrefix = 'Token';

var apiInstance = new DnlApi.CarrierApi();

var clientId = 789; // Number | Carrier id to get info about

var opts = { 
  'body': new DnlApi.CarrierAllertSettings() // CarrierAllertSettings | Carrier to modify
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.carrierClientIdAlertsPatch(clientId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **clientId** | **Number**| Carrier id to get info about | 
 **body** | [**CarrierAllertSettings**](CarrierAllertSettings.md)| Carrier to modify | [optional] 

### Return type

[**InlineResponse20016**](InlineResponse20016.md)

### Authorization

[auth_token](../README.md#auth_token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="carrierClientIdContactsGet"></a>
# **carrierClientIdContactsGet**
> InlineResponse20020 carrierClientIdContactsGet(clientId)



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

var apiInstance = new DnlApi.CarrierApi();

var clientId = 789; // Number | Carrier id to get info about


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.carrierClientIdContactsGet(clientId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **clientId** | **Number**| Carrier id to get info about | 

### Return type

[**InlineResponse20020**](InlineResponse20020.md)

### Authorization

[auth_token](../README.md#auth_token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="carrierClientIdContactsPatch"></a>
# **carrierClientIdContactsPatch**
> InlineResponse20020 carrierClientIdContactsPatch(clientId, opts)



Modifies carrier

### Example
```javascript
var DnlApi = require('dnl_api');
var defaultClient = DnlApi.ApiClient.instance;

// Configure API key authorization: auth_token
var auth_token = defaultClient.authentications['auth_token'];
auth_token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//auth_token.apiKeyPrefix = 'Token';

var apiInstance = new DnlApi.CarrierApi();

var clientId = 789; // Number | Carrier id to get info about

var opts = { 
  'body': new DnlApi.CarrierContacts() // CarrierContacts | Carrier to modify
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.carrierClientIdContactsPatch(clientId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **clientId** | **Number**| Carrier id to get info about | 
 **body** | [**CarrierContacts**](CarrierContacts.md)| Carrier to modify | [optional] 

### Return type

[**InlineResponse20020**](InlineResponse20020.md)

### Authorization

[auth_token](../README.md#auth_token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="carrierClientIdDelete"></a>
# **carrierClientIdDelete**
> Success carrierClientIdDelete(clientId)



Deletes carrier

### Example
```javascript
var DnlApi = require('dnl_api');
var defaultClient = DnlApi.ApiClient.instance;

// Configure API key authorization: auth_token
var auth_token = defaultClient.authentications['auth_token'];
auth_token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//auth_token.apiKeyPrefix = 'Token';

var apiInstance = new DnlApi.CarrierApi();

var clientId = 789; // Number | Carrier id to get info about


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.carrierClientIdDelete(clientId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **clientId** | **Number**| Carrier id to get info about | 

### Return type

[**Success**](Success.md)

### Authorization

[auth_token](../README.md#auth_token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="carrierClientIdEgressTrunkListGet"></a>
# **carrierClientIdEgressTrunkListGet**
> InlineResponse20023 carrierClientIdEgressTrunkListGet(clientId, opts)



Gets egresstrunks

### Example
```javascript
var DnlApi = require('dnl_api');
var defaultClient = DnlApi.ApiClient.instance;

// Configure API key authorization: auth_token
var auth_token = defaultClient.authentications['auth_token'];
auth_token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//auth_token.apiKeyPrefix = 'Token';

var apiInstance = new DnlApi.CarrierApi();

var clientId = 789; // Number | Parent carrier

var opts = { 
  'page': 56, // Number | 
  'perPage': 56, // Number | 
  'orderBy': "orderBy_example", // String | 
  'orderDir': "orderDir_example", // String | 
  'carrierId': "carrierId_example", // String | 
  'isActive': true, // Boolean | 
  'name': "name_example", // String | 
  'resourceId': 56, // Number | 
  'resourceTemplateId': 56, // Number | 
  'trunkId': 56, // Number | 
  'trunkName': "trunkName_example" // String | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.carrierClientIdEgressTrunkListGet(clientId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **clientId** | **Number**| Parent carrier | 
 **page** | **Number**|  | [optional] 
 **perPage** | **Number**|  | [optional] 
 **orderBy** | **String**|  | [optional] 
 **orderDir** | **String**|  | [optional] 
 **carrierId** | **String**|  | [optional] 
 **isActive** | **Boolean**|  | [optional] 
 **name** | **String**|  | [optional] 
 **resourceId** | **Number**|  | [optional] 
 **resourceTemplateId** | **Number**|  | [optional] 
 **trunkId** | **Number**|  | [optional] 
 **trunkName** | **String**|  | [optional] 

### Return type

[**InlineResponse20023**](InlineResponse20023.md)

### Authorization

[auth_token](../README.md#auth_token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="carrierClientIdEgressTrunkPost"></a>
# **carrierClientIdEgressTrunkPost**
> ObjectCreated carrierClientIdEgressTrunkPost(clientId, opts)



Creates new egresstrunk

### Example
```javascript
var DnlApi = require('dnl_api');
var defaultClient = DnlApi.ApiClient.instance;

// Configure API key authorization: auth_token
var auth_token = defaultClient.authentications['auth_token'];
auth_token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//auth_token.apiKeyPrefix = 'Token';

var apiInstance = new DnlApi.CarrierApi();

var clientId = 789; // Number | Parent carrier

var opts = { 
  'body': new DnlApi.EgressTrunk() // EgressTrunk | EgressTrunk to create
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.carrierClientIdEgressTrunkPost(clientId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **clientId** | **Number**| Parent carrier | 
 **body** | [**EgressTrunk**](EgressTrunk.md)| EgressTrunk to create | [optional] 

### Return type

[**ObjectCreated**](ObjectCreated.md)

### Authorization

[auth_token](../README.md#auth_token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="carrierClientIdGet"></a>
# **carrierClientIdGet**
> InlineResponse20014 carrierClientIdGet(clientId)



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

var apiInstance = new DnlApi.CarrierApi();

var clientId = 789; // Number | Carrier id to get info about


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.carrierClientIdGet(clientId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **clientId** | **Number**| Carrier id to get info about | 

### Return type

[**InlineResponse20014**](InlineResponse20014.md)

### Authorization

[auth_token](../README.md#auth_token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="carrierClientIdIngressTrunkListGet"></a>
# **carrierClientIdIngressTrunkListGet**
> InlineResponse20025 carrierClientIdIngressTrunkListGet(clientId, opts)



Gets ingresstrunks

### Example
```javascript
var DnlApi = require('dnl_api');
var defaultClient = DnlApi.ApiClient.instance;

// Configure API key authorization: auth_token
var auth_token = defaultClient.authentications['auth_token'];
auth_token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//auth_token.apiKeyPrefix = 'Token';

var apiInstance = new DnlApi.CarrierApi();

var clientId = 789; // Number | Parent carrier

var opts = { 
  'page': 56, // Number | 
  'perPage': 56, // Number | 
  'orderBy': "orderBy_example", // String | 
  'orderDir': "orderDir_example", // String | 
  'callLimit': 56, // Number | 
  'carrierId': "carrierId_example", // String | 
  'cpsLimit': 56, // Number | 
  'isActive': true, // Boolean | 
  'name': "name_example", // String | 
  'resourceId': 56, // Number | 
  'resourceTemplateId': 56, // Number | 
  'trunkId': 56, // Number | 
  'trunkName': "trunkName_example", // String | 
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
apiInstance.carrierClientIdIngressTrunkListGet(clientId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **clientId** | **Number**| Parent carrier | 
 **page** | **Number**|  | [optional] 
 **perPage** | **Number**|  | [optional] 
 **orderBy** | **String**|  | [optional] 
 **orderDir** | **String**|  | [optional] 
 **callLimit** | **Number**|  | [optional] 
 **carrierId** | **String**|  | [optional] 
 **cpsLimit** | **Number**|  | [optional] 
 **isActive** | **Boolean**|  | [optional] 
 **name** | **String**|  | [optional] 
 **resourceId** | **Number**|  | [optional] 
 **resourceTemplateId** | **Number**|  | [optional] 
 **trunkId** | **Number**|  | [optional] 
 **trunkName** | **String**|  | [optional] 
 **updateBy** | **String**|  | [optional] 
 **updateAtGt** | **String**|  | [optional] 
 **updateAtLt** | **String**|  | [optional] 

### Return type

[**InlineResponse20025**](InlineResponse20025.md)

### Authorization

[auth_token](../README.md#auth_token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="carrierClientIdIngressTrunkPost"></a>
# **carrierClientIdIngressTrunkPost**
> ObjectCreated carrierClientIdIngressTrunkPost(clientId, opts)



Creates new ingresstrunk

### Example
```javascript
var DnlApi = require('dnl_api');
var defaultClient = DnlApi.ApiClient.instance;

// Configure API key authorization: auth_token
var auth_token = defaultClient.authentications['auth_token'];
auth_token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//auth_token.apiKeyPrefix = 'Token';

var apiInstance = new DnlApi.CarrierApi();

var clientId = 789; // Number | Parent carrier

var opts = { 
  'body': new DnlApi.IngressTrunk() // IngressTrunk | IngressTrunk to create
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.carrierClientIdIngressTrunkPost(clientId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **clientId** | **Number**| Parent carrier | 
 **body** | [**IngressTrunk**](IngressTrunk.md)| IngressTrunk to create | [optional] 

### Return type

[**ObjectCreated**](ObjectCreated.md)

### Authorization

[auth_token](../README.md#auth_token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="carrierClientIdInvoicesGet"></a>
# **carrierClientIdInvoicesGet**
> InlineResponse20017 carrierClientIdInvoicesGet(clientId)



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

var apiInstance = new DnlApi.CarrierApi();

var clientId = 789; // Number | Carrier id to get info about


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.carrierClientIdInvoicesGet(clientId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **clientId** | **Number**| Carrier id to get info about | 

### Return type

[**InlineResponse20017**](InlineResponse20017.md)

### Authorization

[auth_token](../README.md#auth_token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="carrierClientIdInvoicesPatch"></a>
# **carrierClientIdInvoicesPatch**
> InlineResponse20017 carrierClientIdInvoicesPatch(clientId, opts)



Modifies carrier

### Example
```javascript
var DnlApi = require('dnl_api');
var defaultClient = DnlApi.ApiClient.instance;

// Configure API key authorization: auth_token
var auth_token = defaultClient.authentications['auth_token'];
auth_token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//auth_token.apiKeyPrefix = 'Token';

var apiInstance = new DnlApi.CarrierApi();

var clientId = 789; // Number | Carrier id to get info about

var opts = { 
  'body': new DnlApi.CarrierInvoiceSetting() // CarrierInvoiceSetting | Carrier to modify
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.carrierClientIdInvoicesPatch(clientId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **clientId** | **Number**| Carrier id to get info about | 
 **body** | [**CarrierInvoiceSetting**](CarrierInvoiceSetting.md)| Carrier to modify | [optional] 

### Return type

[**InlineResponse20017**](InlineResponse20017.md)

### Authorization

[auth_token](../README.md#auth_token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="carrierClientIdLowBalanceConfigGet"></a>
# **carrierClientIdLowBalanceConfigGet**
> InlineResponse20021 carrierClientIdLowBalanceConfigGet(clientId)



Gets carrierlowbalanceconfig

### Example
```javascript
var DnlApi = require('dnl_api');
var defaultClient = DnlApi.ApiClient.instance;

// Configure API key authorization: auth_token
var auth_token = defaultClient.authentications['auth_token'];
auth_token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//auth_token.apiKeyPrefix = 'Token';

var apiInstance = new DnlApi.CarrierApi();

var clientId = 789; // Number | CarrierLowBalanceConfig id to get info about


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.carrierClientIdLowBalanceConfigGet(clientId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **clientId** | **Number**| CarrierLowBalanceConfig id to get info about | 

### Return type

[**InlineResponse20021**](InlineResponse20021.md)

### Authorization

[auth_token](../README.md#auth_token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="carrierClientIdLowBalanceConfigPatch"></a>
# **carrierClientIdLowBalanceConfigPatch**
> InlineResponse20021 carrierClientIdLowBalanceConfigPatch(clientId, opts)



Modifies carrierlowbalanceconfig

### Example
```javascript
var DnlApi = require('dnl_api');
var defaultClient = DnlApi.ApiClient.instance;

// Configure API key authorization: auth_token
var auth_token = defaultClient.authentications['auth_token'];
auth_token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//auth_token.apiKeyPrefix = 'Token';

var apiInstance = new DnlApi.CarrierApi();

var clientId = 789; // Number | CarrierLowBalanceConfig id to get info about

var opts = { 
  'body': new DnlApi.CarrierLowBalanceConfig() // CarrierLowBalanceConfig | CarrierLowBalanceConfig to modify
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.carrierClientIdLowBalanceConfigPatch(clientId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **clientId** | **Number**| CarrierLowBalanceConfig id to get info about | 
 **body** | [**CarrierLowBalanceConfig**](CarrierLowBalanceConfig.md)| CarrierLowBalanceConfig to modify | [optional] 

### Return type

[**InlineResponse20021**](InlineResponse20021.md)

### Authorization

[auth_token](../README.md#auth_token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="carrierClientIdPasswordPatch"></a>
# **carrierClientIdPasswordPatch**
> InlineResponse20028 carrierClientIdPasswordPatch(clientId, opts)



Modifies carrier

### Example
```javascript
var DnlApi = require('dnl_api');
var defaultClient = DnlApi.ApiClient.instance;

// Configure API key authorization: auth_token
var auth_token = defaultClient.authentications['auth_token'];
auth_token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//auth_token.apiKeyPrefix = 'Token';

var apiInstance = new DnlApi.CarrierApi();

var clientId = 789; // Number | Carrier id to get info about

var opts = { 
  'body': new DnlApi.CarrierPassword() // CarrierPassword | Carrier to modify
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.carrierClientIdPasswordPatch(clientId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **clientId** | **Number**| Carrier id to get info about | 
 **body** | [**CarrierPassword**](CarrierPassword.md)| Carrier to modify | [optional] 

### Return type

[**InlineResponse20028**](InlineResponse20028.md)

### Authorization

[auth_token](../README.md#auth_token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="carrierClientIdPatch"></a>
# **carrierClientIdPatch**
> InlineResponse20014 carrierClientIdPatch(clientId, opts)



Modifies carrier

### Example
```javascript
var DnlApi = require('dnl_api');
var defaultClient = DnlApi.ApiClient.instance;

// Configure API key authorization: auth_token
var auth_token = defaultClient.authentications['auth_token'];
auth_token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//auth_token.apiKeyPrefix = 'Token';

var apiInstance = new DnlApi.CarrierApi();

var clientId = 789; // Number | Carrier id to get info about

var opts = { 
  'body': new DnlApi.Carrier() // Carrier | Carrier to modify
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.carrierClientIdPatch(clientId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **clientId** | **Number**| Carrier id to get info about | 
 **body** | [**Carrier**](Carrier.md)| Carrier to modify | [optional] 

### Return type

[**InlineResponse20014**](InlineResponse20014.md)

### Authorization

[auth_token](../README.md#auth_token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="carrierClientIdPortalGet"></a>
# **carrierClientIdPortalGet**
> InlineResponse20019 carrierClientIdPortalGet(clientId)



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

var apiInstance = new DnlApi.CarrierApi();

var clientId = 789; // Number | Carrier id to get info about


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.carrierClientIdPortalGet(clientId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **clientId** | **Number**| Carrier id to get info about | 

### Return type

[**InlineResponse20019**](InlineResponse20019.md)

### Authorization

[auth_token](../README.md#auth_token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="carrierClientIdPortalPatch"></a>
# **carrierClientIdPortalPatch**
> InlineResponse20019 carrierClientIdPortalPatch(clientId, opts)



Modifies carrier

### Example
```javascript
var DnlApi = require('dnl_api');
var defaultClient = DnlApi.ApiClient.instance;

// Configure API key authorization: auth_token
var auth_token = defaultClient.authentications['auth_token'];
auth_token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//auth_token.apiKeyPrefix = 'Token';

var apiInstance = new DnlApi.CarrierApi();

var clientId = 789; // Number | Carrier id to get info about

var opts = { 
  'body': new DnlApi.CarrierPortal() // CarrierPortal | Carrier to modify
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.carrierClientIdPortalPatch(clientId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **clientId** | **Number**| Carrier id to get info about | 
 **body** | [**CarrierPortal**](CarrierPortal.md)| Carrier to modify | [optional] 

### Return type

[**InlineResponse20019**](InlineResponse20019.md)

### Authorization

[auth_token](../README.md#auth_token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="carrierClientIdSaveAsTemplatePost"></a>
# **carrierClientIdSaveAsTemplatePost**
> ObjectCreated carrierClientIdSaveAsTemplatePost(clientId, opts)



Creates new carriertemplate

### Example
```javascript
var DnlApi = require('dnl_api');
var defaultClient = DnlApi.ApiClient.instance;

// Configure API key authorization: auth_token
var auth_token = defaultClient.authentications['auth_token'];
auth_token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//auth_token.apiKeyPrefix = 'Token';

var apiInstance = new DnlApi.CarrierApi();

var clientId = 789; // Number | Parent carrier

var opts = { 
  'body': new DnlApi.CarrierTemplateFromClient() // CarrierTemplateFromClient | CarrierTemplate to create
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.carrierClientIdSaveAsTemplatePost(clientId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **clientId** | **Number**| Parent carrier | 
 **body** | [**CarrierTemplateFromClient**](CarrierTemplateFromClient.md)| CarrierTemplate to create | [optional] 

### Return type

[**ObjectCreated**](ObjectCreated.md)

### Authorization

[auth_token](../README.md#auth_token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="carrierClientIdSccGet"></a>
# **carrierClientIdSccGet**
> InlineResponse20018 carrierClientIdSccGet(clientId)



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

var apiInstance = new DnlApi.CarrierApi();

var clientId = 789; // Number | Carrier id to get info about


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.carrierClientIdSccGet(clientId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **clientId** | **Number**| Carrier id to get info about | 

### Return type

[**InlineResponse20018**](InlineResponse20018.md)

### Authorization

[auth_token](../README.md#auth_token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="carrierClientIdSccPatch"></a>
# **carrierClientIdSccPatch**
> InlineResponse20018 carrierClientIdSccPatch(clientId, opts)



Modifies carrier

### Example
```javascript
var DnlApi = require('dnl_api');
var defaultClient = DnlApi.ApiClient.instance;

// Configure API key authorization: auth_token
var auth_token = defaultClient.authentications['auth_token'];
auth_token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//auth_token.apiKeyPrefix = 'Token';

var apiInstance = new DnlApi.CarrierApi();

var clientId = 789; // Number | Carrier id to get info about

var opts = { 
  'body': new DnlApi.CarrierScc() // CarrierScc | Carrier to modify
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.carrierClientIdSccPatch(clientId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **clientId** | **Number**| Carrier id to get info about | 
 **body** | [**CarrierScc**](CarrierScc.md)| Carrier to modify | [optional] 

### Return type

[**InlineResponse20018**](InlineResponse20018.md)

### Authorization

[auth_token](../README.md#auth_token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="carrierClientIdSendLowBalanceAlertPatch"></a>
# **carrierClientIdSendLowBalanceAlertPatch**
> Success carrierClientIdSendLowBalanceAlertPatch(clientId)





### Example
```javascript
var DnlApi = require('dnl_api');
var defaultClient = DnlApi.ApiClient.instance;

// Configure API key authorization: auth_token
var auth_token = defaultClient.authentications['auth_token'];
auth_token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//auth_token.apiKeyPrefix = 'Token';

var apiInstance = new DnlApi.CarrierApi();

var clientId = 789; // Number | Carrier to proceed


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.carrierClientIdSendLowBalanceAlertPatch(clientId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **clientId** | **Number**| Carrier to proceed | 

### Return type

[**Success**](Success.md)

### Authorization

[auth_token](../README.md#auth_token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="carrierClientIdSendWelcomPatch"></a>
# **carrierClientIdSendWelcomPatch**
> Success carrierClientIdSendWelcomPatch(clientId)





### Example
```javascript
var DnlApi = require('dnl_api');
var defaultClient = DnlApi.ApiClient.instance;

// Configure API key authorization: auth_token
var auth_token = defaultClient.authentications['auth_token'];
auth_token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//auth_token.apiKeyPrefix = 'Token';

var apiInstance = new DnlApi.CarrierApi();

var clientId = 789; // Number | Carrier to proceed


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.carrierClientIdSendWelcomPatch(clientId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **clientId** | **Number**| Carrier to proceed | 

### Return type

[**Success**](Success.md)

### Authorization

[auth_token](../README.md#auth_token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="carrierFullCreatePost"></a>
# **carrierFullCreatePost**
> ObjectCreated carrierFullCreatePost(opts)



Creates new carrier

### Example
```javascript
var DnlApi = require('dnl_api');
var defaultClient = DnlApi.ApiClient.instance;

// Configure API key authorization: auth_token
var auth_token = defaultClient.authentications['auth_token'];
auth_token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//auth_token.apiKeyPrefix = 'Token';

var apiInstance = new DnlApi.CarrierApi();

var opts = { 
  'body': new DnlApi.CarrierLong() // CarrierLong | Carrier to create
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.carrierFullCreatePost(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**CarrierLong**](CarrierLong.md)| Carrier to create | [optional] 

### Return type

[**ObjectCreated**](ObjectCreated.md)

### Authorization

[auth_token](../README.md#auth_token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="carrierGroupCreatePost"></a>
# **carrierGroupCreatePost**
> ObjectCreated carrierGroupCreatePost(opts)



Creates new carriergroup

### Example
```javascript
var DnlApi = require('dnl_api');
var defaultClient = DnlApi.ApiClient.instance;

// Configure API key authorization: auth_token
var auth_token = defaultClient.authentications['auth_token'];
auth_token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//auth_token.apiKeyPrefix = 'Token';

var apiInstance = new DnlApi.CarrierApi();

var opts = { 
  'body': new DnlApi.CarrierGroup() // CarrierGroup | CarrierGroup to create
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.carrierGroupCreatePost(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**CarrierGroup**](CarrierGroup.md)| CarrierGroup to create | [optional] 

### Return type

[**ObjectCreated**](ObjectCreated.md)

### Authorization

[auth_token](../README.md#auth_token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="carrierGroupGroupIdDelete"></a>
# **carrierGroupGroupIdDelete**
> Success carrierGroupGroupIdDelete(groupId)



Deletes carriergroup

### Example
```javascript
var DnlApi = require('dnl_api');
var defaultClient = DnlApi.ApiClient.instance;

// Configure API key authorization: auth_token
var auth_token = defaultClient.authentications['auth_token'];
auth_token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//auth_token.apiKeyPrefix = 'Token';

var apiInstance = new DnlApi.CarrierApi();

var groupId = 789; // Number | CarrierGroup id to get info about


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.carrierGroupGroupIdDelete(groupId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **groupId** | **Number**| CarrierGroup id to get info about | 

### Return type

[**Success**](Success.md)

### Authorization

[auth_token](../README.md#auth_token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="carrierGroupGroupIdGet"></a>
# **carrierGroupGroupIdGet**
> InlineResponse20012 carrierGroupGroupIdGet(groupId)



Gets carriergroup

### Example
```javascript
var DnlApi = require('dnl_api');
var defaultClient = DnlApi.ApiClient.instance;

// Configure API key authorization: auth_token
var auth_token = defaultClient.authentications['auth_token'];
auth_token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//auth_token.apiKeyPrefix = 'Token';

var apiInstance = new DnlApi.CarrierApi();

var groupId = 789; // Number | CarrierGroup id to get info about


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.carrierGroupGroupIdGet(groupId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **groupId** | **Number**| CarrierGroup id to get info about | 

### Return type

[**InlineResponse20012**](InlineResponse20012.md)

### Authorization

[auth_token](../README.md#auth_token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="carrierGroupGroupIdPatch"></a>
# **carrierGroupGroupIdPatch**
> InlineResponse20012 carrierGroupGroupIdPatch(groupId, opts)



Modifies carriergroup

### Example
```javascript
var DnlApi = require('dnl_api');
var defaultClient = DnlApi.ApiClient.instance;

// Configure API key authorization: auth_token
var auth_token = defaultClient.authentications['auth_token'];
auth_token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//auth_token.apiKeyPrefix = 'Token';

var apiInstance = new DnlApi.CarrierApi();

var groupId = 789; // Number | CarrierGroup id to get info about

var opts = { 
  'body': new DnlApi.CarrierGroup() // CarrierGroup | CarrierGroup to modify
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.carrierGroupGroupIdPatch(groupId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **groupId** | **Number**| CarrierGroup id to get info about | 
 **body** | [**CarrierGroup**](CarrierGroup.md)| CarrierGroup to modify | [optional] 

### Return type

[**InlineResponse20012**](InlineResponse20012.md)

### Authorization

[auth_token](../README.md#auth_token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="carrierGroupListGet"></a>
# **carrierGroupListGet**
> InlineResponse20013 carrierGroupListGet(opts)



Gets carriergroups

### Example
```javascript
var DnlApi = require('dnl_api');
var defaultClient = DnlApi.ApiClient.instance;

// Configure API key authorization: auth_token
var auth_token = defaultClient.authentications['auth_token'];
auth_token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//auth_token.apiKeyPrefix = 'Token';

var apiInstance = new DnlApi.CarrierApi();

var opts = { 
  'page': 56, // Number | 
  'perPage': 56, // Number | 
  'orderBy': "orderBy_example", // String | 
  'orderDir': "orderDir_example", // String | 
  'groupId': 56, // Number | 
  'groupName': "groupName_example" // String | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.carrierGroupListGet(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **page** | **Number**|  | [optional] 
 **perPage** | **Number**|  | [optional] 
 **orderBy** | **String**|  | [optional] 
 **orderDir** | **String**|  | [optional] 
 **groupId** | **Number**|  | [optional] 
 **groupName** | **String**|  | [optional] 

### Return type

[**InlineResponse20013**](InlineResponse20013.md)

### Authorization

[auth_token](../README.md#auth_token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="carrierListGet"></a>
# **carrierListGet**
> InlineResponse20015 carrierListGet(opts)



Gets carriers

### Example
```javascript
var DnlApi = require('dnl_api');
var defaultClient = DnlApi.ApiClient.instance;

// Configure API key authorization: auth_token
var auth_token = defaultClient.authentications['auth_token'];
auth_token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//auth_token.apiKeyPrefix = 'Token';

var apiInstance = new DnlApi.CarrierApi();

var opts = { 
  'page': 56, // Number | 
  'perPage': 56, // Number | 
  'orderBy': "orderBy_example", // String | 
  'orderDir': "orderDir_example", // String | 
  'carrierTemplateId': 56, // Number | 
  'company': "company_example", // String | 
  'egressCount': 56, // Number | 
  'ingressCount': 56, // Number | 
  'ingressCountSql': 56, // Number | 
  'isActive': true, // Boolean | 
  'isPrepay': true, // Boolean | 
  'name': "name_example", // String | 
  'updateBy': "updateBy_example", // String | 
  'creditLimitGt': "creditLimitGt_example", // String | 
  'creditLimitLt': "creditLimitLt_example", // String | 
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
apiInstance.carrierListGet(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **page** | **Number**|  | [optional] 
 **perPage** | **Number**|  | [optional] 
 **orderBy** | **String**|  | [optional] 
 **orderDir** | **String**|  | [optional] 
 **carrierTemplateId** | **Number**|  | [optional] 
 **company** | **String**|  | [optional] 
 **egressCount** | **Number**|  | [optional] 
 **ingressCount** | **Number**|  | [optional] 
 **ingressCountSql** | **Number**|  | [optional] 
 **isActive** | **Boolean**|  | [optional] 
 **isPrepay** | **Boolean**|  | [optional] 
 **name** | **String**|  | [optional] 
 **updateBy** | **String**|  | [optional] 
 **creditLimitGt** | **String**|  | [optional] 
 **creditLimitLt** | **String**|  | [optional] 
 **updateAtGt** | **String**|  | [optional] 
 **updateAtLt** | **String**|  | [optional] 

### Return type

[**InlineResponse20015**](InlineResponse20015.md)

### Authorization

[auth_token](../README.md#auth_token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="clientCreditClientIdPatch"></a>
# **clientCreditClientIdPatch**
> InlineResponse20026 clientCreditClientIdPatch(clientId, opts)



Modifies clientcredit

### Example
```javascript
var DnlApi = require('dnl_api');
var defaultClient = DnlApi.ApiClient.instance;

// Configure API key authorization: auth_token
var auth_token = defaultClient.authentications['auth_token'];
auth_token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//auth_token.apiKeyPrefix = 'Token';

var apiInstance = new DnlApi.CarrierApi();

var clientId = 789; // Number | ClientCredit id to get info about

var opts = { 
  'body': new DnlApi.ClientCredit() // ClientCredit | ClientCredit to modify
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.clientCreditClientIdPatch(clientId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **clientId** | **Number**| ClientCredit id to get info about | 
 **body** | [**ClientCredit**](ClientCredit.md)| ClientCredit to modify | [optional] 

### Return type

[**InlineResponse20026**](InlineResponse20026.md)

### Authorization

[auth_token](../README.md#auth_token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="clientCreditListGet"></a>
# **clientCreditListGet**
> InlineResponse20027 clientCreditListGet(opts)



Gets clientcredits

### Example
```javascript
var DnlApi = require('dnl_api');
var defaultClient = DnlApi.ApiClient.instance;

// Configure API key authorization: auth_token
var auth_token = defaultClient.authentications['auth_token'];
auth_token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//auth_token.apiKeyPrefix = 'Token';

var apiInstance = new DnlApi.CarrierApi();

var opts = { 
  'page': 56, // Number | 
  'perPage': 56, // Number | 
  'orderBy': "orderBy_example", // String | 
  'orderDir': "orderDir_example", // String | 
  'active': true // Boolean | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.clientCreditListGet(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **page** | **Number**|  | [optional] 
 **perPage** | **Number**|  | [optional] 
 **orderBy** | **String**|  | [optional] 
 **orderDir** | **String**|  | [optional] 
 **active** | **Boolean**|  | [optional] 

### Return type

[**InlineResponse20027**](InlineResponse20027.md)

### Authorization

[auth_token](../README.md#auth_token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="clientPastDueListGet"></a>
# **clientPastDueListGet**
> InlineResponse20029 clientPastDueListGet(opts)



Gets past due report

### Example
```javascript
var DnlApi = require('dnl_api');
var defaultClient = DnlApi.ApiClient.instance;

// Configure API key authorization: auth_token
var auth_token = defaultClient.authentications['auth_token'];
auth_token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//auth_token.apiKeyPrefix = 'Token';

var apiInstance = new DnlApi.CarrierApi();

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
apiInstance.clientPastDueListGet(opts, callback);
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

[**InlineResponse20029**](InlineResponse20029.md)

### Authorization

[auth_token](../README.md#auth_token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="egressTrunkResourceIdDelete"></a>
# **egressTrunkResourceIdDelete**
> Success egressTrunkResourceIdDelete(resourceId)



Deletes egresstrunk

### Example
```javascript
var DnlApi = require('dnl_api');
var defaultClient = DnlApi.ApiClient.instance;

// Configure API key authorization: auth_token
var auth_token = defaultClient.authentications['auth_token'];
auth_token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//auth_token.apiKeyPrefix = 'Token';

var apiInstance = new DnlApi.CarrierApi();

var resourceId = 789; // Number | EgressTrunk id to get info about


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.egressTrunkResourceIdDelete(resourceId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resourceId** | **Number**| EgressTrunk id to get info about | 

### Return type

[**Success**](Success.md)

### Authorization

[auth_token](../README.md#auth_token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="egressTrunkResourceIdGet"></a>
# **egressTrunkResourceIdGet**
> InlineResponse20022 egressTrunkResourceIdGet(resourceId)



Gets egresstrunk

### Example
```javascript
var DnlApi = require('dnl_api');
var defaultClient = DnlApi.ApiClient.instance;

// Configure API key authorization: auth_token
var auth_token = defaultClient.authentications['auth_token'];
auth_token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//auth_token.apiKeyPrefix = 'Token';

var apiInstance = new DnlApi.CarrierApi();

var resourceId = 789; // Number | EgressTrunk id to get info about


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.egressTrunkResourceIdGet(resourceId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resourceId** | **Number**| EgressTrunk id to get info about | 

### Return type

[**InlineResponse20022**](InlineResponse20022.md)

### Authorization

[auth_token](../README.md#auth_token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="egressTrunkResourceIdPatch"></a>
# **egressTrunkResourceIdPatch**
> InlineResponse20022 egressTrunkResourceIdPatch(resourceId, opts)



Modifies egresstrunk

### Example
```javascript
var DnlApi = require('dnl_api');
var defaultClient = DnlApi.ApiClient.instance;

// Configure API key authorization: auth_token
var auth_token = defaultClient.authentications['auth_token'];
auth_token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//auth_token.apiKeyPrefix = 'Token';

var apiInstance = new DnlApi.CarrierApi();

var resourceId = 789; // Number | EgressTrunk id to get info about

var opts = { 
  'body': new DnlApi.EgressTrunk() // EgressTrunk | EgressTrunk to modify
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.egressTrunkResourceIdPatch(resourceId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resourceId** | **Number**| EgressTrunk id to get info about | 
 **body** | [**EgressTrunk**](EgressTrunk.md)| EgressTrunk to modify | [optional] 

### Return type

[**InlineResponse20022**](InlineResponse20022.md)

### Authorization

[auth_token](../README.md#auth_token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="ingressTrunkResourceIdDelete"></a>
# **ingressTrunkResourceIdDelete**
> Success ingressTrunkResourceIdDelete(resourceId)



Deletes ingresstrunk

### Example
```javascript
var DnlApi = require('dnl_api');
var defaultClient = DnlApi.ApiClient.instance;

// Configure API key authorization: auth_token
var auth_token = defaultClient.authentications['auth_token'];
auth_token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//auth_token.apiKeyPrefix = 'Token';

var apiInstance = new DnlApi.CarrierApi();

var resourceId = 789; // Number | IngressTrunk id to get info about


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.ingressTrunkResourceIdDelete(resourceId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resourceId** | **Number**| IngressTrunk id to get info about | 

### Return type

[**Success**](Success.md)

### Authorization

[auth_token](../README.md#auth_token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="ingressTrunkResourceIdGet"></a>
# **ingressTrunkResourceIdGet**
> InlineResponse20024 ingressTrunkResourceIdGet(resourceId)



Gets ingresstrunk

### Example
```javascript
var DnlApi = require('dnl_api');
var defaultClient = DnlApi.ApiClient.instance;

// Configure API key authorization: auth_token
var auth_token = defaultClient.authentications['auth_token'];
auth_token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//auth_token.apiKeyPrefix = 'Token';

var apiInstance = new DnlApi.CarrierApi();

var resourceId = 789; // Number | IngressTrunk id to get info about


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.ingressTrunkResourceIdGet(resourceId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resourceId** | **Number**| IngressTrunk id to get info about | 

### Return type

[**InlineResponse20024**](InlineResponse20024.md)

### Authorization

[auth_token](../README.md#auth_token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="ingressTrunkResourceIdPatch"></a>
# **ingressTrunkResourceIdPatch**
> InlineResponse20024 ingressTrunkResourceIdPatch(resourceId, opts)



Modifies ingresstrunk

### Example
```javascript
var DnlApi = require('dnl_api');
var defaultClient = DnlApi.ApiClient.instance;

// Configure API key authorization: auth_token
var auth_token = defaultClient.authentications['auth_token'];
auth_token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//auth_token.apiKeyPrefix = 'Token';

var apiInstance = new DnlApi.CarrierApi();

var resourceId = 789; // Number | IngressTrunk id to get info about

var opts = { 
  'body': new DnlApi.IngressTrunkModify() // IngressTrunkModify | IngressTrunk to modify
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.ingressTrunkResourceIdPatch(resourceId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resourceId** | **Number**| IngressTrunk id to get info about | 
 **body** | [**IngressTrunkModify**](IngressTrunkModify.md)| IngressTrunk to modify | [optional] 

### Return type

[**InlineResponse20024**](InlineResponse20024.md)

### Authorization

[auth_token](../README.md#auth_token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


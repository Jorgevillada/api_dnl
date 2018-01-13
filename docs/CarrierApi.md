# DnlApi.CarrierApi

All URIs are relative to *https://198.100.149.164:8000/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**carrierAllDelete**](CarrierApi.md#carrierAllDelete) | **DELETE** /carrier/all | 
[**carrierAllPatch**](CarrierApi.md#carrierAllPatch) | **PATCH** /carrier/all | 
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
[**carrierCreateFromTemplateIdPost**](CarrierApi.md#carrierCreateFromTemplateIdPost) | **POST** /carrier/create_from_template/{id} | 
[**carrierFullClientIdGet**](CarrierApi.md#carrierFullClientIdGet) | **GET** /carrier/full/{client_id} | 
[**carrierFullClientIdPatch**](CarrierApi.md#carrierFullClientIdPatch) | **PATCH** /carrier/full/{client_id} | 
[**carrierFullCreatePost**](CarrierApi.md#carrierFullCreatePost) | **POST** /carrier/full/create | 
[**carrierGroupAllDelete**](CarrierApi.md#carrierGroupAllDelete) | **DELETE** /carrier/group/all | 
[**carrierGroupCreatePost**](CarrierApi.md#carrierGroupCreatePost) | **POST** /carrier/group/create | 
[**carrierGroupGroupIdDelete**](CarrierApi.md#carrierGroupGroupIdDelete) | **DELETE** /carrier/group/{group_id} | 
[**carrierGroupGroupIdGet**](CarrierApi.md#carrierGroupGroupIdGet) | **GET** /carrier/group/{group_id} | 
[**carrierGroupGroupIdPatch**](CarrierApi.md#carrierGroupGroupIdPatch) | **PATCH** /carrier/group/{group_id} | 
[**carrierGroupListGet**](CarrierApi.md#carrierGroupListGet) | **GET** /carrier/group/list | 
[**carrierListGet**](CarrierApi.md#carrierListGet) | **GET** /carrier/list | 
[**carrierSimpleListGet**](CarrierApi.md#carrierSimpleListGet) | **GET** /carrier/simple/list | 
[**clientCreditClientIdPatch**](CarrierApi.md#clientCreditClientIdPatch) | **PATCH** /client/credit/{client_id} | 
[**clientCreditListGet**](CarrierApi.md#clientCreditListGet) | **GET** /client/credit/list | 
[**clientPastDueListGet**](CarrierApi.md#clientPastDueListGet) | **GET** /client/past_due/list | 
[**egressCapacityEgressIdIngressIdDelete**](CarrierApi.md#egressCapacityEgressIdIngressIdDelete) | **DELETE** /egress_capacity/{egress_id}/{ingress_id} | 
[**egressCapacityEgressIdIngressIdGet**](CarrierApi.md#egressCapacityEgressIdIngressIdGet) | **GET** /egress_capacity/{egress_id}/{ingress_id} | 
[**egressCapacityEgressIdIngressIdPatch**](CarrierApi.md#egressCapacityEgressIdIngressIdPatch) | **PATCH** /egress_capacity/{egress_id}/{ingress_id} | 
[**egressProfileIdDelete**](CarrierApi.md#egressProfileIdDelete) | **DELETE** /egress_profile/{id} | 
[**egressProfileIdGet**](CarrierApi.md#egressProfileIdGet) | **GET** /egress_profile/{id} | 
[**egressProfileIdPatch**](CarrierApi.md#egressProfileIdPatch) | **PATCH** /egress_profile/{id} | 
[**egressTrunkResourceIdCapacityListGet**](CarrierApi.md#egressTrunkResourceIdCapacityListGet) | **GET** /egress_trunk/{resource_id}/capacity/list | 
[**egressTrunkResourceIdCapacityPost**](CarrierApi.md#egressTrunkResourceIdCapacityPost) | **POST** /egress_trunk/{resource_id}/capacity | 
[**egressTrunkResourceIdDelete**](CarrierApi.md#egressTrunkResourceIdDelete) | **DELETE** /egress_trunk/{resource_id} | 
[**egressTrunkResourceIdGet**](CarrierApi.md#egressTrunkResourceIdGet) | **GET** /egress_trunk/{resource_id} | 
[**egressTrunkResourceIdPassGet**](CarrierApi.md#egressTrunkResourceIdPassGet) | **GET** /egress_trunk/{resource_id}/pass | 
[**egressTrunkResourceIdPassPatch**](CarrierApi.md#egressTrunkResourceIdPassPatch) | **PATCH** /egress_trunk/{resource_id}/pass | 
[**egressTrunkResourceIdPatch**](CarrierApi.md#egressTrunkResourceIdPatch) | **PATCH** /egress_trunk/{resource_id} | 
[**egressTrunkResourceIdProfileListGet**](CarrierApi.md#egressTrunkResourceIdProfileListGet) | **GET** /egress_trunk/{resource_id}/profile/list | 
[**egressTrunkResourceIdProfilePost**](CarrierApi.md#egressTrunkResourceIdProfilePost) | **POST** /egress_trunk/{resource_id}/profile | 
[**ingressTrunkResourceIdCapacityListGet**](CarrierApi.md#ingressTrunkResourceIdCapacityListGet) | **GET** /ingress_trunk/{resource_id}/capacity/list | 
[**ingressTrunkResourceIdDelete**](CarrierApi.md#ingressTrunkResourceIdDelete) | **DELETE** /ingress_trunk/{resource_id} | 
[**ingressTrunkResourceIdGet**](CarrierApi.md#ingressTrunkResourceIdGet) | **GET** /ingress_trunk/{resource_id} | 
[**ingressTrunkResourceIdPatch**](CarrierApi.md#ingressTrunkResourceIdPatch) | **PATCH** /ingress_trunk/{resource_id} | 


<a name="carrierAllDelete"></a>
# **carrierAllDelete**
> InlineResponse2002 carrierAllDelete(opts)



Deletes multiple found all carriers

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
  'carrierTemplateId': 56, // Number | 
  'clientIdIn': "clientIdIn_example", // String | 
  'company': "company_example", // String | 
  'creditLimitGt': 8.14, // Number | 
  'creditLimitLt': 8.14, // Number | 
  'egressCount': 56, // Number | 
  'ingressCount': 56, // Number | 
  'isActive': true, // Boolean | 
  'isPrepay': true, // Boolean | 
  'mode': "mode_example", // String | 
  'name': "name_example", // String | 
  'unlimitedCredit': true, // Boolean | 
  'updateAtGt': "updateAtGt_example", // String | 
  'updateAtLt': "updateAtLt_example", // String | 
  'updateBy': "updateBy_example" // String | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.carrierAllDelete(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **carrierTemplateId** | **Number**|  | [optional] 
 **clientIdIn** | **String**|  | [optional] 
 **company** | **String**|  | [optional] 
 **creditLimitGt** | **Number**|  | [optional] 
 **creditLimitLt** | **Number**|  | [optional] 
 **egressCount** | **Number**|  | [optional] 
 **ingressCount** | **Number**|  | [optional] 
 **isActive** | **Boolean**|  | [optional] 
 **isPrepay** | **Boolean**|  | [optional] 
 **mode** | **String**|  | [optional] 
 **name** | **String**|  | [optional] 
 **unlimitedCredit** | **Boolean**|  | [optional] 
 **updateAtGt** | **String**|  | [optional] 
 **updateAtLt** | **String**|  | [optional] 
 **updateBy** | **String**|  | [optional] 

### Return type

[**InlineResponse2002**](InlineResponse2002.md)

### Authorization

[auth_token](../README.md#auth_token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="carrierAllPatch"></a>
# **carrierAllPatch**
> InlineResponse2002 carrierAllPatch(opts)



Modifies multiple found all carriers

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
  'body': new DnlApi.CarrierActivate(), // CarrierActivate | All Carriers to modify
  'carrierTemplateId': 56, // Number | 
  'clientIdIn': "clientIdIn_example", // String | 
  'company': "company_example", // String | 
  'creditLimitGt': 8.14, // Number | 
  'creditLimitLt': 8.14, // Number | 
  'egressCount': 56, // Number | 
  'ingressCount': 56, // Number | 
  'isActive': true, // Boolean | 
  'isPrepay': true, // Boolean | 
  'mode': "mode_example", // String | 
  'name': "name_example", // String | 
  'unlimitedCredit': true, // Boolean | 
  'updateAtGt': "updateAtGt_example", // String | 
  'updateAtLt': "updateAtLt_example", // String | 
  'updateBy': "updateBy_example" // String | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.carrierAllPatch(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**CarrierActivate**](CarrierActivate.md)| All Carriers to modify | [optional] 
 **carrierTemplateId** | **Number**|  | [optional] 
 **clientIdIn** | **String**|  | [optional] 
 **company** | **String**|  | [optional] 
 **creditLimitGt** | **Number**|  | [optional] 
 **creditLimitLt** | **Number**|  | [optional] 
 **egressCount** | **Number**|  | [optional] 
 **ingressCount** | **Number**|  | [optional] 
 **isActive** | **Boolean**|  | [optional] 
 **isPrepay** | **Boolean**|  | [optional] 
 **mode** | **String**|  | [optional] 
 **name** | **String**|  | [optional] 
 **unlimitedCredit** | **Boolean**|  | [optional] 
 **updateAtGt** | **String**|  | [optional] 
 **updateAtLt** | **String**|  | [optional] 
 **updateBy** | **String**|  | [optional] 

### Return type

[**InlineResponse2002**](InlineResponse2002.md)

### Authorization

[auth_token](../README.md#auth_token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

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
> InlineResponse20018 carrierClientIdAlertsGet(clientId)



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

[**InlineResponse20018**](InlineResponse20018.md)

### Authorization

[auth_token](../README.md#auth_token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="carrierClientIdAlertsPatch"></a>
# **carrierClientIdAlertsPatch**
> InlineResponse20018 carrierClientIdAlertsPatch(clientId, opts)



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

[**InlineResponse20018**](InlineResponse20018.md)

### Authorization

[auth_token](../README.md#auth_token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="carrierClientIdContactsGet"></a>
# **carrierClientIdContactsGet**
> InlineResponse20022 carrierClientIdContactsGet(clientId)



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

[**InlineResponse20022**](InlineResponse20022.md)

### Authorization

[auth_token](../README.md#auth_token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="carrierClientIdContactsPatch"></a>
# **carrierClientIdContactsPatch**
> InlineResponse20022 carrierClientIdContactsPatch(clientId, opts)



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

[**InlineResponse20022**](InlineResponse20022.md)

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
> InlineResponse20025 carrierClientIdEgressTrunkListGet(clientId, opts)



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
  'carrierId': 56, // Number | 
  'dynamicCount': 56, // Number | 
  'ipCount': 56, // Number | 
  'isActive': true, // Boolean | 
  'rateTableId': 56, // Number | 
  'rateTableName': "rateTableName_example", // String | 
  'resourceId': 56, // Number | 
  'resourceTemplateId': 56, // Number | 
  'staticCount': 56, // Number | 
  'trunkId': 56, // Number | 
  'trunkName': "trunkName_example", // String | 
  'updateBy': "updateBy_example", // String | 
  'minProfitValueGt': "minProfitValueGt_example", // String | 
  'minProfitValueLt': "minProfitValueLt_example", // String | 
  'resourceIdIn': "resourceIdIn_example", // String | 
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
 **carrierId** | **Number**|  | [optional] 
 **dynamicCount** | **Number**|  | [optional] 
 **ipCount** | **Number**|  | [optional] 
 **isActive** | **Boolean**|  | [optional] 
 **rateTableId** | **Number**|  | [optional] 
 **rateTableName** | **String**|  | [optional] 
 **resourceId** | **Number**|  | [optional] 
 **resourceTemplateId** | **Number**|  | [optional] 
 **staticCount** | **Number**|  | [optional] 
 **trunkId** | **Number**|  | [optional] 
 **trunkName** | **String**|  | [optional] 
 **updateBy** | **String**|  | [optional] 
 **minProfitValueGt** | **String**|  | [optional] 
 **minProfitValueLt** | **String**|  | [optional] 
 **resourceIdIn** | **String**|  | [optional] 
 **updateAtGt** | **String**|  | [optional] 
 **updateAtLt** | **String**|  | [optional] 

### Return type

[**InlineResponse20025**](InlineResponse20025.md)

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
> InlineResponse20015 carrierClientIdGet(clientId)



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

[**InlineResponse20015**](InlineResponse20015.md)

### Authorization

[auth_token](../README.md#auth_token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="carrierClientIdIngressTrunkListGet"></a>
# **carrierClientIdIngressTrunkListGet**
> InlineResponse20032 carrierClientIdIngressTrunkListGet(clientId, opts)



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
  'carrierId': 56, // Number | 
  'cpsLimit': 56, // Number | 
  'dynamicCount': 56, // Number | 
  'ipCount': 56, // Number | 
  'isActive': true, // Boolean | 
  'name': "name_example", // String | 
  'rateTableId': 56, // Number | 
  'rateTableName': "rateTableName_example", // String | 
  'resourceId': 56, // Number | 
  'resourceTemplateId': 56, // Number | 
  'staticCount': 56, // Number | 
  'trunkId': 56, // Number | 
  'trunkName': "trunkName_example", // String | 
  'updateBy': "updateBy_example", // String | 
  'minProfitValueGt': "minProfitValueGt_example", // String | 
  'minProfitValueLt': "minProfitValueLt_example", // String | 
  'resourceIdIn': "resourceIdIn_example", // String | 
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
 **carrierId** | **Number**|  | [optional] 
 **cpsLimit** | **Number**|  | [optional] 
 **dynamicCount** | **Number**|  | [optional] 
 **ipCount** | **Number**|  | [optional] 
 **isActive** | **Boolean**|  | [optional] 
 **name** | **String**|  | [optional] 
 **rateTableId** | **Number**|  | [optional] 
 **rateTableName** | **String**|  | [optional] 
 **resourceId** | **Number**|  | [optional] 
 **resourceTemplateId** | **Number**|  | [optional] 
 **staticCount** | **Number**|  | [optional] 
 **trunkId** | **Number**|  | [optional] 
 **trunkName** | **String**|  | [optional] 
 **updateBy** | **String**|  | [optional] 
 **minProfitValueGt** | **String**|  | [optional] 
 **minProfitValueLt** | **String**|  | [optional] 
 **resourceIdIn** | **String**|  | [optional] 
 **updateAtGt** | **String**|  | [optional] 
 **updateAtLt** | **String**|  | [optional] 

### Return type

[**InlineResponse20032**](InlineResponse20032.md)

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
> InlineResponse20019 carrierClientIdInvoicesGet(clientId)



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

[**InlineResponse20019**](InlineResponse20019.md)

### Authorization

[auth_token](../README.md#auth_token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="carrierClientIdInvoicesPatch"></a>
# **carrierClientIdInvoicesPatch**
> InlineResponse20019 carrierClientIdInvoicesPatch(clientId, opts)



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

[**InlineResponse20019**](InlineResponse20019.md)

### Authorization

[auth_token](../README.md#auth_token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="carrierClientIdLowBalanceConfigGet"></a>
# **carrierClientIdLowBalanceConfigGet**
> InlineResponse20023 carrierClientIdLowBalanceConfigGet(clientId)



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

[**InlineResponse20023**](InlineResponse20023.md)

### Authorization

[auth_token](../README.md#auth_token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="carrierClientIdLowBalanceConfigPatch"></a>
# **carrierClientIdLowBalanceConfigPatch**
> InlineResponse20023 carrierClientIdLowBalanceConfigPatch(clientId, opts)



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

[**InlineResponse20023**](InlineResponse20023.md)

### Authorization

[auth_token](../README.md#auth_token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="carrierClientIdPasswordPatch"></a>
# **carrierClientIdPasswordPatch**
> InlineResponse20035 carrierClientIdPasswordPatch(clientId, opts)



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

[**InlineResponse20035**](InlineResponse20035.md)

### Authorization

[auth_token](../README.md#auth_token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="carrierClientIdPatch"></a>
# **carrierClientIdPatch**
> InlineResponse20015 carrierClientIdPatch(clientId, opts)



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
  'body': new DnlApi.CarrierModify() // CarrierModify | Carrier to modify
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
 **body** | [**CarrierModify**](CarrierModify.md)| Carrier to modify | [optional] 

### Return type

[**InlineResponse20015**](InlineResponse20015.md)

### Authorization

[auth_token](../README.md#auth_token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="carrierClientIdPortalGet"></a>
# **carrierClientIdPortalGet**
> InlineResponse20021 carrierClientIdPortalGet(clientId)



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

[**InlineResponse20021**](InlineResponse20021.md)

### Authorization

[auth_token](../README.md#auth_token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="carrierClientIdPortalPatch"></a>
# **carrierClientIdPortalPatch**
> InlineResponse20021 carrierClientIdPortalPatch(clientId, opts)



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

[**InlineResponse20021**](InlineResponse20021.md)

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
> InlineResponse20020 carrierClientIdSccGet(clientId)



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

[**InlineResponse20020**](InlineResponse20020.md)

### Authorization

[auth_token](../README.md#auth_token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="carrierClientIdSccPatch"></a>
# **carrierClientIdSccPatch**
> InlineResponse20020 carrierClientIdSccPatch(clientId, opts)



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

[**InlineResponse20020**](InlineResponse20020.md)

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

<a name="carrierCreateFromTemplateIdPost"></a>
# **carrierCreateFromTemplateIdPost**
> ObjectCreated carrierCreateFromTemplateIdPost(id, opts)



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

var id = 789; // Number | Carrier template for creation

var opts = { 
  'body': new DnlApi.CarrierFromTemplate() // CarrierFromTemplate | Carrier to create
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.carrierCreateFromTemplateIdPost(id, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| Carrier template for creation | 
 **body** | [**CarrierFromTemplate**](CarrierFromTemplate.md)| Carrier to create | [optional] 

### Return type

[**ObjectCreated**](ObjectCreated.md)

### Authorization

[auth_token](../README.md#auth_token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="carrierFullClientIdGet"></a>
# **carrierFullClientIdGet**
> InlineResponse20016 carrierFullClientIdGet(clientId)



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
apiInstance.carrierFullClientIdGet(clientId, callback);
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

<a name="carrierFullClientIdPatch"></a>
# **carrierFullClientIdPatch**
> InlineResponse20016 carrierFullClientIdPatch(clientId, opts)



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
  'body': new DnlApi.CarrierLongModify() // CarrierLongModify | Carrier to modify
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.carrierFullClientIdPatch(clientId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **clientId** | **Number**| Carrier id to get info about | 
 **body** | [**CarrierLongModify**](CarrierLongModify.md)| Carrier to modify | [optional] 

### Return type

[**InlineResponse20016**](InlineResponse20016.md)

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

<a name="carrierGroupAllDelete"></a>
# **carrierGroupAllDelete**
> InlineResponse2002 carrierGroupAllDelete(opts)



Deletes multiple found carriergroup

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
apiInstance.carrierGroupAllDelete(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **groupId** | **Number**|  | [optional] 
 **groupName** | **String**|  | [optional] 

### Return type

[**InlineResponse2002**](InlineResponse2002.md)

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
> InlineResponse20013 carrierGroupGroupIdGet(groupId)



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

[**InlineResponse20013**](InlineResponse20013.md)

### Authorization

[auth_token](../README.md#auth_token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="carrierGroupGroupIdPatch"></a>
# **carrierGroupGroupIdPatch**
> InlineResponse20013 carrierGroupGroupIdPatch(groupId, opts)



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

[**InlineResponse20013**](InlineResponse20013.md)

### Authorization

[auth_token](../README.md#auth_token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="carrierGroupListGet"></a>
# **carrierGroupListGet**
> InlineResponse20014 carrierGroupListGet(opts)



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

[**InlineResponse20014**](InlineResponse20014.md)

### Authorization

[auth_token](../README.md#auth_token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="carrierListGet"></a>
# **carrierListGet**
> InlineResponse20017 carrierListGet(opts)



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
  'callLimit': 56, // Number | 
  'carrierTemplateId': 56, // Number | 
  'company': "company_example", // String | 
  'egressCount': 56, // Number | 
  'groupId': 56, // Number | 
  'ingressCount': 56, // Number | 
  'isActive': true, // Boolean | 
  'isPrepay': true, // Boolean | 
  'login': "login_example", // String | 
  'mode': "mode_example", // String | 
  'name': "name_example", // String | 
  'paymentTermId': 56, // Number | 
  'unlimitedCredit': true, // Boolean | 
  'updateBy': "updateBy_example", // String | 
  'callLimitGt': 56, // Number | 
  'callLimitLt': 56, // Number | 
  'cpsLimitGt': 56, // Number | 
  'cpsLimitLt': 56, // Number | 
  'creditLimitGt': 8.14, // Number | 
  'creditLimitLt': 8.14, // Number | 
  'profitMarginGt': 8.14, // Number | 
  'profitMarginLt': 8.14, // Number | 
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
 **callLimit** | **Number**|  | [optional] 
 **carrierTemplateId** | **Number**|  | [optional] 
 **company** | **String**|  | [optional] 
 **egressCount** | **Number**|  | [optional] 
 **groupId** | **Number**|  | [optional] 
 **ingressCount** | **Number**|  | [optional] 
 **isActive** | **Boolean**|  | [optional] 
 **isPrepay** | **Boolean**|  | [optional] 
 **login** | **String**|  | [optional] 
 **mode** | **String**|  | [optional] 
 **name** | **String**|  | [optional] 
 **paymentTermId** | **Number**|  | [optional] 
 **unlimitedCredit** | **Boolean**|  | [optional] 
 **updateBy** | **String**|  | [optional] 
 **callLimitGt** | **Number**|  | [optional] 
 **callLimitLt** | **Number**|  | [optional] 
 **cpsLimitGt** | **Number**|  | [optional] 
 **cpsLimitLt** | **Number**|  | [optional] 
 **creditLimitGt** | **Number**|  | [optional] 
 **creditLimitLt** | **Number**|  | [optional] 
 **profitMarginGt** | **Number**|  | [optional] 
 **profitMarginLt** | **Number**|  | [optional] 
 **updateAtGt** | **String**|  | [optional] 
 **updateAtLt** | **String**|  | [optional] 

### Return type

[**InlineResponse20017**](InlineResponse20017.md)

### Authorization

[auth_token](../README.md#auth_token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="carrierSimpleListGet"></a>
# **carrierSimpleListGet**
> InlineResponse20011 carrierSimpleListGet(opts)



Gets simple client list

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
apiInstance.carrierSimpleListGet(opts, callback);
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

<a name="clientCreditClientIdPatch"></a>
# **clientCreditClientIdPatch**
> InlineResponse20033 clientCreditClientIdPatch(clientId, opts)



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

[**InlineResponse20033**](InlineResponse20033.md)

### Authorization

[auth_token](../README.md#auth_token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="clientCreditListGet"></a>
# **clientCreditListGet**
> InlineResponse20034 clientCreditListGet(opts)



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

[**InlineResponse20034**](InlineResponse20034.md)

### Authorization

[auth_token](../README.md#auth_token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="clientPastDueListGet"></a>
# **clientPastDueListGet**
> InlineResponse20036 clientPastDueListGet(opts)



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
  'name': "name_example", // String | 
  'overDueGt': 8.14, // Number | 
  'overDueIsnull': true // Boolean | 
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
 **overDueGt** | **Number**|  | [optional] 
 **overDueIsnull** | **Boolean**|  | [optional] 

### Return type

[**InlineResponse20036**](InlineResponse20036.md)

### Authorization

[auth_token](../README.md#auth_token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="egressCapacityEgressIdIngressIdDelete"></a>
# **egressCapacityEgressIdIngressIdDelete**
> Success egressCapacityEgressIdIngressIdDelete(ingressId, egressId)



Deletes resourcecapacity

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

var ingressId = 789; // Number | ResourceCapacity ingress_id to get info about

var egressId = 789; // Number | ResourceCapacity egress_id to get info about


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.egressCapacityEgressIdIngressIdDelete(ingressId, egressId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ingressId** | **Number**| ResourceCapacity ingress_id to get info about | 
 **egressId** | **Number**| ResourceCapacity egress_id to get info about | 

### Return type

[**Success**](Success.md)

### Authorization

[auth_token](../README.md#auth_token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="egressCapacityEgressIdIngressIdGet"></a>
# **egressCapacityEgressIdIngressIdGet**
> InlineResponse20029 egressCapacityEgressIdIngressIdGet(ingressId, egressId)



Gets resourcecapacity

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

var ingressId = 789; // Number | ResourceCapacity ingress_id to get info about

var egressId = 789; // Number | ResourceCapacity egress_id to get info about


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.egressCapacityEgressIdIngressIdGet(ingressId, egressId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ingressId** | **Number**| ResourceCapacity ingress_id to get info about | 
 **egressId** | **Number**| ResourceCapacity egress_id to get info about | 

### Return type

[**InlineResponse20029**](InlineResponse20029.md)

### Authorization

[auth_token](../README.md#auth_token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="egressCapacityEgressIdIngressIdPatch"></a>
# **egressCapacityEgressIdIngressIdPatch**
> InlineResponse20029 egressCapacityEgressIdIngressIdPatch(ingressId, egressId, opts)



Modifies resourcecapacity

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

var ingressId = 789; // Number | ResourceCapacity ingress_id to get info about

var egressId = 789; // Number | ResourceCapacity egress_id to get info about

var opts = { 
  'body': new DnlApi.ResourceCapacity() // ResourceCapacity | ResourceCapacity to modify
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.egressCapacityEgressIdIngressIdPatch(ingressId, egressId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ingressId** | **Number**| ResourceCapacity ingress_id to get info about | 
 **egressId** | **Number**| ResourceCapacity egress_id to get info about | 
 **body** | [**ResourceCapacity**](ResourceCapacity.md)| ResourceCapacity to modify | [optional] 

### Return type

[**InlineResponse20029**](InlineResponse20029.md)

### Authorization

[auth_token](../README.md#auth_token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="egressProfileIdDelete"></a>
# **egressProfileIdDelete**
> Success egressProfileIdDelete(id)



Deletes egressprofile

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

var id = 789; // Number | EgressProfile id to get info about


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.egressProfileIdDelete(id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| EgressProfile id to get info about | 

### Return type

[**Success**](Success.md)

### Authorization

[auth_token](../README.md#auth_token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="egressProfileIdGet"></a>
# **egressProfileIdGet**
> InlineResponse20027 egressProfileIdGet(id)



Gets egressprofile

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

var id = 789; // Number | EgressProfile id to get info about


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.egressProfileIdGet(id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| EgressProfile id to get info about | 

### Return type

[**InlineResponse20027**](InlineResponse20027.md)

### Authorization

[auth_token](../README.md#auth_token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="egressProfileIdPatch"></a>
# **egressProfileIdPatch**
> InlineResponse20027 egressProfileIdPatch(id, opts)



Modifies egressprofile

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

var id = 789; // Number | EgressProfile id to get info about

var opts = { 
  'body': new DnlApi.EgressProfile() // EgressProfile | EgressProfile to modify
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.egressProfileIdPatch(id, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| EgressProfile id to get info about | 
 **body** | [**EgressProfile**](EgressProfile.md)| EgressProfile to modify | [optional] 

### Return type

[**InlineResponse20027**](InlineResponse20027.md)

### Authorization

[auth_token](../README.md#auth_token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="egressTrunkResourceIdCapacityListGet"></a>
# **egressTrunkResourceIdCapacityListGet**
> InlineResponse20030 egressTrunkResourceIdCapacityListGet(resourceId, opts)



Gets resourcecapacity items

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

var resourceId = 789; // Number | Parent egress trunk

var opts = { 
  'page': 56, // Number | 
  'perPage': 56, // Number | 
  'orderBy': "orderBy_example", // String | 
  'orderDir': "orderDir_example", // String | 
  'egressId': 56, // Number | 
  'ingressId': 56 // Number | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.egressTrunkResourceIdCapacityListGet(resourceId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resourceId** | **Number**| Parent egress trunk | 
 **page** | **Number**|  | [optional] 
 **perPage** | **Number**|  | [optional] 
 **orderBy** | **String**|  | [optional] 
 **orderDir** | **String**|  | [optional] 
 **egressId** | **Number**|  | [optional] 
 **ingressId** | **Number**|  | [optional] 

### Return type

[**InlineResponse20030**](InlineResponse20030.md)

### Authorization

[auth_token](../README.md#auth_token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="egressTrunkResourceIdCapacityPost"></a>
# **egressTrunkResourceIdCapacityPost**
> ObjectCreated egressTrunkResourceIdCapacityPost(resourceId, opts)



Creates new resourcecapacity

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

var resourceId = 789; // Number | Parent egress trunk

var opts = { 
  'body': new DnlApi.ResourceCapacity() // ResourceCapacity | ResourceCapacity to create
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.egressTrunkResourceIdCapacityPost(resourceId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resourceId** | **Number**| Parent egress trunk | 
 **body** | [**ResourceCapacity**](ResourceCapacity.md)| ResourceCapacity to create | [optional] 

### Return type

[**ObjectCreated**](ObjectCreated.md)

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
> InlineResponse20024 egressTrunkResourceIdGet(resourceId)



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

[**InlineResponse20024**](InlineResponse20024.md)

### Authorization

[auth_token](../README.md#auth_token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="egressTrunkResourceIdPassGet"></a>
# **egressTrunkResourceIdPassGet**
> InlineResponse20026 egressTrunkResourceIdPassGet(resourceId)



Gets egresstrunk pass

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

var resourceId = 789; // Number | EgressTrunk Pass id to get info about


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.egressTrunkResourceIdPassGet(resourceId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resourceId** | **Number**| EgressTrunk Pass id to get info about | 

### Return type

[**InlineResponse20026**](InlineResponse20026.md)

### Authorization

[auth_token](../README.md#auth_token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="egressTrunkResourceIdPassPatch"></a>
# **egressTrunkResourceIdPassPatch**
> InlineResponse20026 egressTrunkResourceIdPassPatch(resourceId, opts)



Modifies egresstrunk pass

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

var resourceId = 789; // Number | EgressTrunk Pass id to get info about

var opts = { 
  'body': new DnlApi.EgressTrunkPass() // EgressTrunkPass | EgressTrunk Pass to modify
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.egressTrunkResourceIdPassPatch(resourceId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resourceId** | **Number**| EgressTrunk Pass id to get info about | 
 **body** | [**EgressTrunkPass**](EgressTrunkPass.md)| EgressTrunk Pass to modify | [optional] 

### Return type

[**InlineResponse20026**](InlineResponse20026.md)

### Authorization

[auth_token](../README.md#auth_token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="egressTrunkResourceIdPatch"></a>
# **egressTrunkResourceIdPatch**
> InlineResponse20024 egressTrunkResourceIdPatch(resourceId, opts)



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

[**InlineResponse20024**](InlineResponse20024.md)

### Authorization

[auth_token](../README.md#auth_token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="egressTrunkResourceIdProfileListGet"></a>
# **egressTrunkResourceIdProfileListGet**
> InlineResponse20028 egressTrunkResourceIdProfileListGet(resourceId, opts)



Gets egressprofiles

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

var resourceId = 789; // Number | Parent egress trunk

var opts = { 
  'page': 56, // Number | 
  'perPage': 56, // Number | 
  'orderBy': "orderBy_example", // String | 
  'orderDir': "orderDir_example", // String | 
  'egressId': 56, // Number | 
  'id': 56, // Number | 
  'ingressId': 56, // Number | 
  'profileId': 56, // Number | 
  'serverName': "serverName_example" // String | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.egressTrunkResourceIdProfileListGet(resourceId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resourceId** | **Number**| Parent egress trunk | 
 **page** | **Number**|  | [optional] 
 **perPage** | **Number**|  | [optional] 
 **orderBy** | **String**|  | [optional] 
 **orderDir** | **String**|  | [optional] 
 **egressId** | **Number**|  | [optional] 
 **id** | **Number**|  | [optional] 
 **ingressId** | **Number**|  | [optional] 
 **profileId** | **Number**|  | [optional] 
 **serverName** | **String**|  | [optional] 

### Return type

[**InlineResponse20028**](InlineResponse20028.md)

### Authorization

[auth_token](../README.md#auth_token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="egressTrunkResourceIdProfilePost"></a>
# **egressTrunkResourceIdProfilePost**
> ObjectCreated egressTrunkResourceIdProfilePost(resourceId, opts)



Creates new egressprofile

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

var resourceId = 789; // Number | Parent egress trunk

var opts = { 
  'body': new DnlApi.EgressProfile() // EgressProfile | EgressProfile to create
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.egressTrunkResourceIdProfilePost(resourceId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resourceId** | **Number**| Parent egress trunk | 
 **body** | [**EgressProfile**](EgressProfile.md)| EgressProfile to create | [optional] 

### Return type

[**ObjectCreated**](ObjectCreated.md)

### Authorization

[auth_token](../README.md#auth_token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="ingressTrunkResourceIdCapacityListGet"></a>
# **ingressTrunkResourceIdCapacityListGet**
> InlineResponse20030 ingressTrunkResourceIdCapacityListGet(resourceId, opts)



Gets resourcecapacity items

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

var resourceId = 789; // Number | Parent ingress trunk

var opts = { 
  'page': 56, // Number | 
  'perPage': 56, // Number | 
  'orderBy': "orderBy_example", // String | 
  'orderDir': "orderDir_example", // String | 
  'egressId': 56, // Number | 
  'ingressId': 56 // Number | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.ingressTrunkResourceIdCapacityListGet(resourceId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resourceId** | **Number**| Parent ingress trunk | 
 **page** | **Number**|  | [optional] 
 **perPage** | **Number**|  | [optional] 
 **orderBy** | **String**|  | [optional] 
 **orderDir** | **String**|  | [optional] 
 **egressId** | **Number**|  | [optional] 
 **ingressId** | **Number**|  | [optional] 

### Return type

[**InlineResponse20030**](InlineResponse20030.md)

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
> InlineResponse20031 ingressTrunkResourceIdGet(resourceId)



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

[**InlineResponse20031**](InlineResponse20031.md)

### Authorization

[auth_token](../README.md#auth_token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="ingressTrunkResourceIdPatch"></a>
# **ingressTrunkResourceIdPatch**
> InlineResponse20031 ingressTrunkResourceIdPatch(resourceId, opts)



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

[**InlineResponse20031**](InlineResponse20031.md)

### Authorization

[auth_token](../README.md#auth_token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


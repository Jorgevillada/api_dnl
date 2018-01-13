# DnlApi.OriginationApi

All URIs are relative to *https://198.100.149.164:8000/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**didBillingRuleAllDelete**](OriginationApi.md#didBillingRuleAllDelete) | **DELETE** /did/billing_rule/all | 
[**didBillingRuleCreatePost**](OriginationApi.md#didBillingRuleCreatePost) | **POST** /did/billing_rule/create | 
[**didBillingRuleIdDelete**](OriginationApi.md#didBillingRuleIdDelete) | **DELETE** /did/billing_rule/{id} | 
[**didBillingRuleIdGet**](OriginationApi.md#didBillingRuleIdGet) | **GET** /did/billing_rule/{id} | 
[**didBillingRuleIdPatch**](OriginationApi.md#didBillingRuleIdPatch) | **PATCH** /did/billing_rule/{id} | 
[**didBillingRuleIdRateParamsPatch**](OriginationApi.md#didBillingRuleIdRateParamsPatch) | **PATCH** /did/billing_rule/{id}/rate_params | 
[**didBillingRuleListGet**](OriginationApi.md#didBillingRuleListGet) | **GET** /did/billing_rule/list | 
[**didClientAllDelete**](OriginationApi.md#didClientAllDelete) | **DELETE** /did/client/all | 
[**didClientAllPatch**](OriginationApi.md#didClientAllPatch) | **PATCH** /did/client/all | 
[**didClientClientIdDelete**](OriginationApi.md#didClientClientIdDelete) | **DELETE** /did/client/{client_id} | 
[**didClientClientIdGet**](OriginationApi.md#didClientClientIdGet) | **GET** /did/client/{client_id} | 
[**didClientClientIdPatch**](OriginationApi.md#didClientClientIdPatch) | **PATCH** /did/client/{client_id} | 
[**didClientCreatePost**](OriginationApi.md#didClientCreatePost) | **POST** /did/client/create | 
[**didClientIdOrigInvoicePost**](OriginationApi.md#didClientIdOrigInvoicePost) | **POST** /did/{client_id}/orig_invoice | 
[**didClientListGet**](OriginationApi.md#didClientListGet) | **GET** /did/client/list | 
[**didOrigInvoiceAllDelete**](OriginationApi.md#didOrigInvoiceAllDelete) | **DELETE** /did/orig_invoice/all | 
[**didOrigInvoiceInvoiceIdDelete**](OriginationApi.md#didOrigInvoiceInvoiceIdDelete) | **DELETE** /did/orig_invoice/{invoice_id} | 
[**didOrigInvoiceInvoiceIdGet**](OriginationApi.md#didOrigInvoiceInvoiceIdGet) | **GET** /did/orig_invoice/{invoice_id} | 
[**didOrigInvoiceInvoiceIdPatch**](OriginationApi.md#didOrigInvoiceInvoiceIdPatch) | **PATCH** /did/orig_invoice/{invoice_id} | 
[**didOrigInvoiceListGet**](OriginationApi.md#didOrigInvoiceListGet) | **GET** /did/orig_invoice/list | 
[**didRepositoryAllDelete**](OriginationApi.md#didRepositoryAllDelete) | **DELETE** /did/repository/all | 
[**didRepositoryAvailableListGet**](OriginationApi.md#didRepositoryAvailableListGet) | **GET** /did/repository/available/list | 
[**didRepositoryCreatePost**](OriginationApi.md#didRepositoryCreatePost) | **POST** /did/repository/create | 
[**didRepositoryIdDelete**](OriginationApi.md#didRepositoryIdDelete) | **DELETE** /did/repository/{id} | 
[**didRepositoryIdGet**](OriginationApi.md#didRepositoryIdGet) | **GET** /did/repository/{id} | 
[**didRepositoryIdPatch**](OriginationApi.md#didRepositoryIdPatch) | **PATCH** /did/repository/{id} | 
[**didRepositoryListGet**](OriginationApi.md#didRepositoryListGet) | **GET** /did/repository/list | 
[**didRepositoryMassAssignPatch**](OriginationApi.md#didRepositoryMassAssignPatch) | **PATCH** /did/repository/mass_assign | 
[**didRoutingListGet**](OriginationApi.md#didRoutingListGet) | **GET** /did/routing/list | 
[**didVendorAllDelete**](OriginationApi.md#didVendorAllDelete) | **DELETE** /did/vendor/all | 
[**didVendorAllPatch**](OriginationApi.md#didVendorAllPatch) | **PATCH** /did/vendor/all | 
[**didVendorClientIdDelete**](OriginationApi.md#didVendorClientIdDelete) | **DELETE** /did/vendor/{client_id} | 
[**didVendorClientIdGet**](OriginationApi.md#didVendorClientIdGet) | **GET** /did/vendor/{client_id} | 
[**didVendorClientIdPatch**](OriginationApi.md#didVendorClientIdPatch) | **PATCH** /did/vendor/{client_id} | 
[**didVendorClientIdUploadDidsPost**](OriginationApi.md#didVendorClientIdUploadDidsPost) | **POST** /did/vendor/{client_id}/upload_dids | 
[**didVendorCreatePost**](OriginationApi.md#didVendorCreatePost) | **POST** /did/vendor/create | 
[**didVendorListGet**](OriginationApi.md#didVendorListGet) | **GET** /did/vendor/list | 


<a name="didBillingRuleAllDelete"></a>
# **didBillingRuleAllDelete**
> InlineResponse2002 didBillingRuleAllDelete(opts)



Deletes multiple found didbillingplan

### Example
```javascript
var DnlApi = require('dnl_api');
var defaultClient = DnlApi.ApiClient.instance;

// Configure API key authorization: auth_token
var auth_token = defaultClient.authentications['auth_token'];
auth_token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//auth_token.apiKeyPrefix = 'Token';

var apiInstance = new DnlApi.OriginationApi();

var opts = { 
  'idIn': "idIn_example", // String | 
  'name': "name_example", // String | 
  'ratePerMinGt': "ratePerMinGt_example", // String | 
  'ratePerMinLt': "ratePerMinLt_example", // String | 
  'rateTableId': 56, // Number | 
  'type': "type_example" // String | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.didBillingRuleAllDelete(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **idIn** | **String**|  | [optional] 
 **name** | **String**|  | [optional] 
 **ratePerMinGt** | **String**|  | [optional] 
 **ratePerMinLt** | **String**|  | [optional] 
 **rateTableId** | **Number**|  | [optional] 
 **type** | **String**|  | [optional] 

### Return type

[**InlineResponse2002**](InlineResponse2002.md)

### Authorization

[auth_token](../README.md#auth_token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="didBillingRuleCreatePost"></a>
# **didBillingRuleCreatePost**
> ObjectCreated didBillingRuleCreatePost(opts)



Creates new didbillingplan

### Example
```javascript
var DnlApi = require('dnl_api');
var defaultClient = DnlApi.ApiClient.instance;

// Configure API key authorization: auth_token
var auth_token = defaultClient.authentications['auth_token'];
auth_token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//auth_token.apiKeyPrefix = 'Token';

var apiInstance = new DnlApi.OriginationApi();

var opts = { 
  'body': new DnlApi.DidBillingPlan() // DidBillingPlan | DidBillingPlan to create
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.didBillingRuleCreatePost(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**DidBillingPlan**](DidBillingPlan.md)| DidBillingPlan to create | [optional] 

### Return type

[**ObjectCreated**](ObjectCreated.md)

### Authorization

[auth_token](../README.md#auth_token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="didBillingRuleIdDelete"></a>
# **didBillingRuleIdDelete**
> Success didBillingRuleIdDelete(id)



Deletes didbillingplan

### Example
```javascript
var DnlApi = require('dnl_api');
var defaultClient = DnlApi.ApiClient.instance;

// Configure API key authorization: auth_token
var auth_token = defaultClient.authentications['auth_token'];
auth_token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//auth_token.apiKeyPrefix = 'Token';

var apiInstance = new DnlApi.OriginationApi();

var id = 789; // Number | DidBillingPlan id to get info about


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.didBillingRuleIdDelete(id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| DidBillingPlan id to get info about | 

### Return type

[**Success**](Success.md)

### Authorization

[auth_token](../README.md#auth_token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="didBillingRuleIdGet"></a>
# **didBillingRuleIdGet**
> InlineResponse200142 didBillingRuleIdGet(id)



Gets didbillingplan

### Example
```javascript
var DnlApi = require('dnl_api');
var defaultClient = DnlApi.ApiClient.instance;

// Configure API key authorization: auth_token
var auth_token = defaultClient.authentications['auth_token'];
auth_token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//auth_token.apiKeyPrefix = 'Token';

var apiInstance = new DnlApi.OriginationApi();

var id = 789; // Number | DidBillingPlan id to get info about


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.didBillingRuleIdGet(id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| DidBillingPlan id to get info about | 

### Return type

[**InlineResponse200142**](InlineResponse200142.md)

### Authorization

[auth_token](../README.md#auth_token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="didBillingRuleIdPatch"></a>
# **didBillingRuleIdPatch**
> InlineResponse200142 didBillingRuleIdPatch(id, opts)



Modifies didbillingplan

### Example
```javascript
var DnlApi = require('dnl_api');
var defaultClient = DnlApi.ApiClient.instance;

// Configure API key authorization: auth_token
var auth_token = defaultClient.authentications['auth_token'];
auth_token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//auth_token.apiKeyPrefix = 'Token';

var apiInstance = new DnlApi.OriginationApi();

var id = 789; // Number | DidBillingPlan id to get info about

var opts = { 
  'body': new DnlApi.DidBillingPlanModify() // DidBillingPlanModify | DidBillingPlan to modify
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.didBillingRuleIdPatch(id, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| DidBillingPlan id to get info about | 
 **body** | [**DidBillingPlanModify**](DidBillingPlanModify.md)| DidBillingPlan to modify | [optional] 

### Return type

[**InlineResponse200142**](InlineResponse200142.md)

### Authorization

[auth_token](../README.md#auth_token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="didBillingRuleIdRateParamsPatch"></a>
# **didBillingRuleIdRateParamsPatch**
> Success didBillingRuleIdRateParamsPatch(id, opts)





### Example
```javascript
var DnlApi = require('dnl_api');
var defaultClient = DnlApi.ApiClient.instance;

// Configure API key authorization: auth_token
var auth_token = defaultClient.authentications['auth_token'];
auth_token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//auth_token.apiKeyPrefix = 'Token';

var apiInstance = new DnlApi.OriginationApi();

var id = 789; // Number | Billing rule with fixed plan to edit

var opts = { 
  'body': new DnlApi.DidBillingPlanModifyRateParams() // DidBillingPlanModifyRateParams | Rate parameters for this item
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.didBillingRuleIdRateParamsPatch(id, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| Billing rule with fixed plan to edit | 
 **body** | [**DidBillingPlanModifyRateParams**](DidBillingPlanModifyRateParams.md)| Rate parameters for this item | [optional] 

### Return type

[**Success**](Success.md)

### Authorization

[auth_token](../README.md#auth_token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="didBillingRuleListGet"></a>
# **didBillingRuleListGet**
> InlineResponse200143 didBillingRuleListGet(opts)



Gets didbillingplans

### Example
```javascript
var DnlApi = require('dnl_api');
var defaultClient = DnlApi.ApiClient.instance;

// Configure API key authorization: auth_token
var auth_token = defaultClient.authentications['auth_token'];
auth_token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//auth_token.apiKeyPrefix = 'Token';

var apiInstance = new DnlApi.OriginationApi();

var opts = { 
  'page': 56, // Number | 
  'perPage': 56, // Number | 
  'orderBy': "orderBy_example", // String | 
  'orderDir': "orderDir_example", // String | 
  'name': "name_example", // String | 
  'rateTableId': 56, // Number | 
  'type': "type_example", // String | 
  'idIn': "idIn_example", // String | 
  'ratePerMinGt': "ratePerMinGt_example", // String | 
  'ratePerMinLt': "ratePerMinLt_example" // String | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.didBillingRuleListGet(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **page** | **Number**|  | [optional] 
 **perPage** | **Number**|  | [optional] 
 **orderBy** | **String**|  | [optional] 
 **orderDir** | **String**|  | [optional] 
 **name** | **String**|  | [optional] 
 **rateTableId** | **Number**|  | [optional] 
 **type** | **String**|  | [optional] 
 **idIn** | **String**|  | [optional] 
 **ratePerMinGt** | **String**|  | [optional] 
 **ratePerMinLt** | **String**|  | [optional] 

### Return type

[**InlineResponse200143**](InlineResponse200143.md)

### Authorization

[auth_token](../README.md#auth_token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="didClientAllDelete"></a>
# **didClientAllDelete**
> InlineResponse2002 didClientAllDelete(opts)



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

var apiInstance = new DnlApi.OriginationApi();

var opts = { 
  'carrierTemplateId': 56, // Number | 
  'clientIdIn': "clientIdIn_example", // String | 
  'company': "company_example", // String | 
  'creditLimitGt': 3.4, // Number | 
  'creditLimitLt': 3.4, // Number | 
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
apiInstance.didClientAllDelete(opts, callback);
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

<a name="didClientAllPatch"></a>
# **didClientAllPatch**
> InlineResponse2002 didClientAllPatch(opts)



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

var apiInstance = new DnlApi.OriginationApi();

var opts = { 
  'body': new DnlApi.CarrierActivate(), // CarrierActivate | All Carriers to modify
  'carrierTemplateId': 56, // Number | 
  'clientIdIn': "clientIdIn_example", // String | 
  'company': "company_example", // String | 
  'creditLimitGt': 3.4, // Number | 
  'creditLimitLt': 3.4, // Number | 
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
apiInstance.didClientAllPatch(opts, callback);
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

<a name="didClientClientIdDelete"></a>
# **didClientClientIdDelete**
> Success didClientClientIdDelete(clientId)



Deletes clientdid

### Example
```javascript
var DnlApi = require('dnl_api');
var defaultClient = DnlApi.ApiClient.instance;

// Configure API key authorization: auth_token
var auth_token = defaultClient.authentications['auth_token'];
auth_token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//auth_token.apiKeyPrefix = 'Token';

var apiInstance = new DnlApi.OriginationApi();

var clientId = 789; // Number | ClientDid id to get info about


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.didClientClientIdDelete(clientId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **clientId** | **Number**| ClientDid id to get info about | 

### Return type

[**Success**](Success.md)

### Authorization

[auth_token](../README.md#auth_token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="didClientClientIdGet"></a>
# **didClientClientIdGet**
> InlineResponse200138 didClientClientIdGet(clientId)



Gets clientdid

### Example
```javascript
var DnlApi = require('dnl_api');
var defaultClient = DnlApi.ApiClient.instance;

// Configure API key authorization: auth_token
var auth_token = defaultClient.authentications['auth_token'];
auth_token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//auth_token.apiKeyPrefix = 'Token';

var apiInstance = new DnlApi.OriginationApi();

var clientId = 789; // Number | ClientDid id to get info about


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.didClientClientIdGet(clientId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **clientId** | **Number**| ClientDid id to get info about | 

### Return type

[**InlineResponse200138**](InlineResponse200138.md)

### Authorization

[auth_token](../README.md#auth_token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="didClientClientIdPatch"></a>
# **didClientClientIdPatch**
> InlineResponse200138 didClientClientIdPatch(clientId, opts)



Modifies clientdid

### Example
```javascript
var DnlApi = require('dnl_api');
var defaultClient = DnlApi.ApiClient.instance;

// Configure API key authorization: auth_token
var auth_token = defaultClient.authentications['auth_token'];
auth_token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//auth_token.apiKeyPrefix = 'Token';

var apiInstance = new DnlApi.OriginationApi();

var clientId = 789; // Number | ClientDid id to get info about

var opts = { 
  'body': new DnlApi.ClientDid() // ClientDid | ClientDid to modify
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.didClientClientIdPatch(clientId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **clientId** | **Number**| ClientDid id to get info about | 
 **body** | [**ClientDid**](ClientDid.md)| ClientDid to modify | [optional] 

### Return type

[**InlineResponse200138**](InlineResponse200138.md)

### Authorization

[auth_token](../README.md#auth_token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="didClientCreatePost"></a>
# **didClientCreatePost**
> ObjectCreated didClientCreatePost(opts)



Creates new clientdid

### Example
```javascript
var DnlApi = require('dnl_api');
var defaultClient = DnlApi.ApiClient.instance;

// Configure API key authorization: auth_token
var auth_token = defaultClient.authentications['auth_token'];
auth_token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//auth_token.apiKeyPrefix = 'Token';

var apiInstance = new DnlApi.OriginationApi();

var opts = { 
  'body': new DnlApi.ClientDid() // ClientDid | ClientDid to create
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.didClientCreatePost(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**ClientDid**](ClientDid.md)| ClientDid to create | [optional] 

### Return type

[**ObjectCreated**](ObjectCreated.md)

### Authorization

[auth_token](../README.md#auth_token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="didClientIdOrigInvoicePost"></a>
# **didClientIdOrigInvoicePost**
> ObjectCreated didClientIdOrigInvoicePost(clientId, opts)



Creates new originvoice

### Example
```javascript
var DnlApi = require('dnl_api');
var defaultClient = DnlApi.ApiClient.instance;

// Configure API key authorization: auth_token
var auth_token = defaultClient.authentications['auth_token'];
auth_token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//auth_token.apiKeyPrefix = 'Token';

var apiInstance = new DnlApi.OriginationApi();

var clientId = 789; // Number | Parent carrier

var opts = { 
  'body': new DnlApi.OrigInvoice() // OrigInvoice | OrigInvoice to create
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.didClientIdOrigInvoicePost(clientId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **clientId** | **Number**| Parent carrier | 
 **body** | [**OrigInvoice**](OrigInvoice.md)| OrigInvoice to create | [optional] 

### Return type

[**ObjectCreated**](ObjectCreated.md)

### Authorization

[auth_token](../README.md#auth_token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="didClientListGet"></a>
# **didClientListGet**
> InlineResponse200139 didClientListGet(opts)



Gets didclients

### Example
```javascript
var DnlApi = require('dnl_api');
var defaultClient = DnlApi.ApiClient.instance;

// Configure API key authorization: auth_token
var auth_token = defaultClient.authentications['auth_token'];
auth_token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//auth_token.apiKeyPrefix = 'Token';

var apiInstance = new DnlApi.OriginationApi();

var opts = { 
  'page': 56, // Number | 
  'perPage': 56, // Number | 
  'orderBy': "orderBy_example", // String | 
  'orderDir': "orderDir_example", // String | 
  'clientId': 56, // Number | 
  'name': "name_example", // String | 
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
apiInstance.didClientListGet(opts, callback);
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
 **updateAtGt** | **String**|  | [optional] 
 **updateAtLt** | **String**|  | [optional] 

### Return type

[**InlineResponse200139**](InlineResponse200139.md)

### Authorization

[auth_token](../README.md#auth_token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="didOrigInvoiceAllDelete"></a>
# **didOrigInvoiceAllDelete**
> InlineResponse2002 didOrigInvoiceAllDelete(opts)



Deletes multiple found originvoice

### Example
```javascript
var DnlApi = require('dnl_api');
var defaultClient = DnlApi.ApiClient.instance;

// Configure API key authorization: auth_token
var auth_token = defaultClient.authentications['auth_token'];
auth_token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//auth_token.apiKeyPrefix = 'Token';

var apiInstance = new DnlApi.OriginationApi();

var opts = { 
  'clientId': 56, // Number | 
  'createType': "createType_example", // String | 
  'invoiceIdIn': "invoiceIdIn_example", // String | 
  'invoiceNumber': "invoiceNumber_example", // String | 
  'invoiceTimeGte': "invoiceTimeGte_example", // String | 
  'invoiceTimeLt': "invoiceTimeLt_example", // String | 
  'state': "state_example" // String | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.didOrigInvoiceAllDelete(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **clientId** | **Number**|  | [optional] 
 **createType** | **String**|  | [optional] 
 **invoiceIdIn** | **String**|  | [optional] 
 **invoiceNumber** | **String**|  | [optional] 
 **invoiceTimeGte** | **String**|  | [optional] 
 **invoiceTimeLt** | **String**|  | [optional] 
 **state** | **String**|  | [optional] 

### Return type

[**InlineResponse2002**](InlineResponse2002.md)

### Authorization

[auth_token](../README.md#auth_token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="didOrigInvoiceInvoiceIdDelete"></a>
# **didOrigInvoiceInvoiceIdDelete**
> Success didOrigInvoiceInvoiceIdDelete(invoiceId)



Deletes originvoice

### Example
```javascript
var DnlApi = require('dnl_api');
var defaultClient = DnlApi.ApiClient.instance;

// Configure API key authorization: auth_token
var auth_token = defaultClient.authentications['auth_token'];
auth_token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//auth_token.apiKeyPrefix = 'Token';

var apiInstance = new DnlApi.OriginationApi();

var invoiceId = 789; // Number | OrigInvoice id to get info about


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.didOrigInvoiceInvoiceIdDelete(invoiceId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **invoiceId** | **Number**| OrigInvoice id to get info about | 

### Return type

[**Success**](Success.md)

### Authorization

[auth_token](../README.md#auth_token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="didOrigInvoiceInvoiceIdGet"></a>
# **didOrigInvoiceInvoiceIdGet**
> InlineResponse200148 didOrigInvoiceInvoiceIdGet(invoiceId)



Gets originvoice

### Example
```javascript
var DnlApi = require('dnl_api');
var defaultClient = DnlApi.ApiClient.instance;

// Configure API key authorization: auth_token
var auth_token = defaultClient.authentications['auth_token'];
auth_token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//auth_token.apiKeyPrefix = 'Token';

var apiInstance = new DnlApi.OriginationApi();

var invoiceId = 789; // Number | OrigInvoice id to get info about


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.didOrigInvoiceInvoiceIdGet(invoiceId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **invoiceId** | **Number**| OrigInvoice id to get info about | 

### Return type

[**InlineResponse200148**](InlineResponse200148.md)

### Authorization

[auth_token](../README.md#auth_token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="didOrigInvoiceInvoiceIdPatch"></a>
# **didOrigInvoiceInvoiceIdPatch**
> InlineResponse200148 didOrigInvoiceInvoiceIdPatch(invoiceId, opts)



Modifies originvoice

### Example
```javascript
var DnlApi = require('dnl_api');
var defaultClient = DnlApi.ApiClient.instance;

// Configure API key authorization: auth_token
var auth_token = defaultClient.authentications['auth_token'];
auth_token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//auth_token.apiKeyPrefix = 'Token';

var apiInstance = new DnlApi.OriginationApi();

var invoiceId = 789; // Number | OrigInvoice id to get info about

var opts = { 
  'body': new DnlApi.OrigInvoice() // OrigInvoice | OrigInvoice to modify
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.didOrigInvoiceInvoiceIdPatch(invoiceId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **invoiceId** | **Number**| OrigInvoice id to get info about | 
 **body** | [**OrigInvoice**](OrigInvoice.md)| OrigInvoice to modify | [optional] 

### Return type

[**InlineResponse200148**](InlineResponse200148.md)

### Authorization

[auth_token](../README.md#auth_token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="didOrigInvoiceListGet"></a>
# **didOrigInvoiceListGet**
> InlineResponse200149 didOrigInvoiceListGet(opts)



Gets originvoices

### Example
```javascript
var DnlApi = require('dnl_api');
var defaultClient = DnlApi.ApiClient.instance;

// Configure API key authorization: auth_token
var auth_token = defaultClient.authentications['auth_token'];
auth_token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//auth_token.apiKeyPrefix = 'Token';

var apiInstance = new DnlApi.OriginationApi();

var opts = { 
  'page': 56, // Number | 
  'perPage': 56, // Number | 
  'orderBy': "orderBy_example", // String | 
  'orderDir': "orderDir_example", // String | 
  'clientId': 56, // Number | 
  'createType': "createType_example", // String | 
  'invoiceNumber': "invoiceNumber_example", // String | 
  'state': "state_example", // String | 
  'invoiceIdIn': "invoiceIdIn_example", // String | 
  'invoiceTimeGte': "invoiceTimeGte_example", // String | 
  'invoiceTimeLt': "invoiceTimeLt_example" // String | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.didOrigInvoiceListGet(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **page** | **Number**|  | [optional] 
 **perPage** | **Number**|  | [optional] 
 **orderBy** | **String**|  | [optional] 
 **orderDir** | **String**|  | [optional] 
 **clientId** | **Number**|  | [optional] 
 **createType** | **String**|  | [optional] 
 **invoiceNumber** | **String**|  | [optional] 
 **state** | **String**|  | [optional] 
 **invoiceIdIn** | **String**|  | [optional] 
 **invoiceTimeGte** | **String**|  | [optional] 
 **invoiceTimeLt** | **String**|  | [optional] 

### Return type

[**InlineResponse200149**](InlineResponse200149.md)

### Authorization

[auth_token](../README.md#auth_token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="didRepositoryAllDelete"></a>
# **didRepositoryAllDelete**
> InlineResponse2002 didRepositoryAllDelete(opts)



Deletes multiple found didbillingrel

### Example
```javascript
var DnlApi = require('dnl_api');
var defaultClient = DnlApi.ApiClient.instance;

// Configure API key authorization: auth_token
var auth_token = defaultClient.authentications['auth_token'];
auth_token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//auth_token.apiKeyPrefix = 'Token';

var apiInstance = new DnlApi.OriginationApi();

var opts = { 
  'assignedDateGt': "assignedDateGt_example", // String | 
  'assignedDateLt': "assignedDateLt_example", // String | 
  'clientBillingRuleId': 56, // Number | 
  'clientBillingRuleName': "clientBillingRuleName_example", // String | 
  'clientId': 56, // Number | 
  'clientResId': 56, // Number | 
  'did': "did_example", // String | 
  'didClientName': "didClientName_example", // String | 
  'didClientResName': "didClientResName_example", // String | 
  'didVendorName': "didVendorName_example", // String | 
  'didVendorResName': "didVendorResName_example", // String | 
  'endDateGt': "endDateGt_example", // String | 
  'endDateIsnull': true, // Boolean | 
  'endDateLt': "endDateLt_example", // String | 
  'id': 56, // Number | 
  'isAvailable': true, // Boolean | 
  'vendorBillingRuleId': 56, // Number | 
  'vendorBillingRuleName': "vendorBillingRuleName_example", // String | 
  'vendorId': 56, // Number | 
  'vendorResId': 56 // Number | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.didRepositoryAllDelete(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **assignedDateGt** | **String**|  | [optional] 
 **assignedDateLt** | **String**|  | [optional] 
 **clientBillingRuleId** | **Number**|  | [optional] 
 **clientBillingRuleName** | **String**|  | [optional] 
 **clientId** | **Number**|  | [optional] 
 **clientResId** | **Number**|  | [optional] 
 **did** | **String**|  | [optional] 
 **didClientName** | **String**|  | [optional] 
 **didClientResName** | **String**|  | [optional] 
 **didVendorName** | **String**|  | [optional] 
 **didVendorResName** | **String**|  | [optional] 
 **endDateGt** | **String**|  | [optional] 
 **endDateIsnull** | **Boolean**|  | [optional] 
 **endDateLt** | **String**|  | [optional] 
 **id** | **Number**|  | [optional] 
 **isAvailable** | **Boolean**|  | [optional] 
 **vendorBillingRuleId** | **Number**|  | [optional] 
 **vendorBillingRuleName** | **String**|  | [optional] 
 **vendorId** | **Number**|  | [optional] 
 **vendorResId** | **Number**|  | [optional] 

### Return type

[**InlineResponse2002**](InlineResponse2002.md)

### Authorization

[auth_token](../README.md#auth_token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="didRepositoryAvailableListGet"></a>
# **didRepositoryAvailableListGet**
> InlineResponse200146 didRepositoryAvailableListGet(opts)



Gets available didrepository items

### Example
```javascript
var DnlApi = require('dnl_api');
var defaultClient = DnlApi.ApiClient.instance;

// Configure API key authorization: auth_token
var auth_token = defaultClient.authentications['auth_token'];
auth_token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//auth_token.apiKeyPrefix = 'Token';

var apiInstance = new DnlApi.OriginationApi();

var opts = { 
  'page': 56, // Number | 
  'perPage': 56, // Number | 
  'orderBy': "orderBy_example", // String | 
  'orderDir': "orderDir_example", // String | 
  'did': "did_example", // String | 
  'id': 56, // Number | 
  'vendorBillingRuleId': 56, // Number | 
  'vendorResId': 56 // Number | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.didRepositoryAvailableListGet(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **page** | **Number**|  | [optional] 
 **perPage** | **Number**|  | [optional] 
 **orderBy** | **String**|  | [optional] 
 **orderDir** | **String**|  | [optional] 
 **did** | **String**|  | [optional] 
 **id** | **Number**|  | [optional] 
 **vendorBillingRuleId** | **Number**|  | [optional] 
 **vendorResId** | **Number**|  | [optional] 

### Return type

[**InlineResponse200146**](InlineResponse200146.md)

### Authorization

[auth_token](../README.md#auth_token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="didRepositoryCreatePost"></a>
# **didRepositoryCreatePost**
> ObjectCreated didRepositoryCreatePost(opts)



Creates new didvendor

### Example
```javascript
var DnlApi = require('dnl_api');
var defaultClient = DnlApi.ApiClient.instance;

// Configure API key authorization: auth_token
var auth_token = defaultClient.authentications['auth_token'];
auth_token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//auth_token.apiKeyPrefix = 'Token';

var apiInstance = new DnlApi.OriginationApi();

var opts = { 
  'body': new DnlApi.DidBillingRel() // DidBillingRel | DidVendor to create
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.didRepositoryCreatePost(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**DidBillingRel**](DidBillingRel.md)| DidVendor to create | [optional] 

### Return type

[**ObjectCreated**](ObjectCreated.md)

### Authorization

[auth_token](../README.md#auth_token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="didRepositoryIdDelete"></a>
# **didRepositoryIdDelete**
> Success didRepositoryIdDelete(id)



Deletes didrepository item

### Example
```javascript
var DnlApi = require('dnl_api');
var defaultClient = DnlApi.ApiClient.instance;

// Configure API key authorization: auth_token
var auth_token = defaultClient.authentications['auth_token'];
auth_token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//auth_token.apiKeyPrefix = 'Token';

var apiInstance = new DnlApi.OriginationApi();

var id = 789; // Number | DidRepository item id to get info about


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.didRepositoryIdDelete(id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| DidRepository item id to get info about | 

### Return type

[**Success**](Success.md)

### Authorization

[auth_token](../README.md#auth_token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="didRepositoryIdGet"></a>
# **didRepositoryIdGet**
> InlineResponse200144 didRepositoryIdGet(id)



Gets didrepository item

### Example
```javascript
var DnlApi = require('dnl_api');
var defaultClient = DnlApi.ApiClient.instance;

// Configure API key authorization: auth_token
var auth_token = defaultClient.authentications['auth_token'];
auth_token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//auth_token.apiKeyPrefix = 'Token';

var apiInstance = new DnlApi.OriginationApi();

var id = 789; // Number | DidRepository item id to get info about


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.didRepositoryIdGet(id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| DidRepository item id to get info about | 

### Return type

[**InlineResponse200144**](InlineResponse200144.md)

### Authorization

[auth_token](../README.md#auth_token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="didRepositoryIdPatch"></a>
# **didRepositoryIdPatch**
> InlineResponse200144 didRepositoryIdPatch(id, opts)



Modifies didrepository item

### Example
```javascript
var DnlApi = require('dnl_api');
var defaultClient = DnlApi.ApiClient.instance;

// Configure API key authorization: auth_token
var auth_token = defaultClient.authentications['auth_token'];
auth_token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//auth_token.apiKeyPrefix = 'Token';

var apiInstance = new DnlApi.OriginationApi();

var id = 789; // Number | DidRepository item id to get info about

var opts = { 
  'body': new DnlApi.DidBillingRelModify() // DidBillingRelModify | DidRepository item to modify
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.didRepositoryIdPatch(id, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| DidRepository item id to get info about | 
 **body** | [**DidBillingRelModify**](DidBillingRelModify.md)| DidRepository item to modify | [optional] 

### Return type

[**InlineResponse200144**](InlineResponse200144.md)

### Authorization

[auth_token](../README.md#auth_token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="didRepositoryListGet"></a>
# **didRepositoryListGet**
> InlineResponse200145 didRepositoryListGet(opts)



Gets didrepository items

### Example
```javascript
var DnlApi = require('dnl_api');
var defaultClient = DnlApi.ApiClient.instance;

// Configure API key authorization: auth_token
var auth_token = defaultClient.authentications['auth_token'];
auth_token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//auth_token.apiKeyPrefix = 'Token';

var apiInstance = new DnlApi.OriginationApi();

var opts = { 
  'page': 56, // Number | 
  'perPage': 56, // Number | 
  'orderBy': "orderBy_example", // String | 
  'orderDir': "orderDir_example", // String | 
  'clientBillingRuleId': 56, // Number | 
  'clientBillingRuleName': "clientBillingRuleName_example", // String | 
  'clientId': 56, // Number | 
  'clientResId': 56, // Number | 
  'did': "did_example", // String | 
  'didClientName': "didClientName_example", // String | 
  'didClientResName': "didClientResName_example", // String | 
  'didVendorName': "didVendorName_example", // String | 
  'didVendorResName': "didVendorResName_example", // String | 
  'id': 56, // Number | 
  'isAvailable': true, // Boolean | 
  'vendorBillingRuleId': 56, // Number | 
  'vendorBillingRuleName': "vendorBillingRuleName_example", // String | 
  'vendorId': 56, // Number | 
  'vendorResId': 56, // Number | 
  'assignedDateGt': "assignedDateGt_example", // String | 
  'assignedDateLt': "assignedDateLt_example", // String | 
  'endDateGt': "endDateGt_example", // String | 
  'endDateIsnull': true, // Boolean | 
  'endDateLt': "endDateLt_example" // String | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.didRepositoryListGet(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **page** | **Number**|  | [optional] 
 **perPage** | **Number**|  | [optional] 
 **orderBy** | **String**|  | [optional] 
 **orderDir** | **String**|  | [optional] 
 **clientBillingRuleId** | **Number**|  | [optional] 
 **clientBillingRuleName** | **String**|  | [optional] 
 **clientId** | **Number**|  | [optional] 
 **clientResId** | **Number**|  | [optional] 
 **did** | **String**|  | [optional] 
 **didClientName** | **String**|  | [optional] 
 **didClientResName** | **String**|  | [optional] 
 **didVendorName** | **String**|  | [optional] 
 **didVendorResName** | **String**|  | [optional] 
 **id** | **Number**|  | [optional] 
 **isAvailable** | **Boolean**|  | [optional] 
 **vendorBillingRuleId** | **Number**|  | [optional] 
 **vendorBillingRuleName** | **String**|  | [optional] 
 **vendorId** | **Number**|  | [optional] 
 **vendorResId** | **Number**|  | [optional] 
 **assignedDateGt** | **String**|  | [optional] 
 **assignedDateLt** | **String**|  | [optional] 
 **endDateGt** | **String**|  | [optional] 
 **endDateIsnull** | **Boolean**|  | [optional] 
 **endDateLt** | **String**|  | [optional] 

### Return type

[**InlineResponse200145**](InlineResponse200145.md)

### Authorization

[auth_token](../README.md#auth_token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="didRepositoryMassAssignPatch"></a>
# **didRepositoryMassAssignPatch**
> InlineResponse2002 didRepositoryMassAssignPatch(opts)





### Example
```javascript
var DnlApi = require('dnl_api');
var defaultClient = DnlApi.ApiClient.instance;

// Configure API key authorization: auth_token
var auth_token = defaultClient.authentications['auth_token'];
auth_token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//auth_token.apiKeyPrefix = 'Token';

var apiInstance = new DnlApi.OriginationApi();

var opts = { 
  'body': new DnlApi.DidBillingRelMassAssign() // DidBillingRelMassAssign | Assign to
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.didRepositoryMassAssignPatch(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**DidBillingRelMassAssign**](DidBillingRelMassAssign.md)| Assign to | [optional] 

### Return type

[**InlineResponse2002**](InlineResponse2002.md)

### Authorization

[auth_token](../README.md#auth_token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="didRoutingListGet"></a>
# **didRoutingListGet**
> InlineResponse200147 didRoutingListGet(opts)



Gets didstaticrouting items

### Example
```javascript
var DnlApi = require('dnl_api');
var defaultClient = DnlApi.ApiClient.instance;

// Configure API key authorization: auth_token
var auth_token = defaultClient.authentications['auth_token'];
auth_token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//auth_token.apiKeyPrefix = 'Token';

var apiInstance = new DnlApi.OriginationApi();

var opts = { 
  'page': 56, // Number | 
  'perPage': 56, // Number | 
  'orderBy': "orderBy_example", // String | 
  'orderDir': "orderDir_example", // String | 
  'did': "did_example", // String | 
  'itemId': 56, // Number | 
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
apiInstance.didRoutingListGet(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **page** | **Number**|  | [optional] 
 **perPage** | **Number**|  | [optional] 
 **orderBy** | **String**|  | [optional] 
 **orderDir** | **String**|  | [optional] 
 **did** | **String**|  | [optional] 
 **itemId** | **Number**|  | [optional] 
 **updateAtGt** | **String**|  | [optional] 
 **updateAtLt** | **String**|  | [optional] 

### Return type

[**InlineResponse200147**](InlineResponse200147.md)

### Authorization

[auth_token](../README.md#auth_token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="didVendorAllDelete"></a>
# **didVendorAllDelete**
> InlineResponse2002 didVendorAllDelete(opts)



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

var apiInstance = new DnlApi.OriginationApi();

var opts = { 
  'carrierTemplateId': 56, // Number | 
  'clientIdIn': "clientIdIn_example", // String | 
  'company': "company_example", // String | 
  'creditLimitGt': 3.4, // Number | 
  'creditLimitLt': 3.4, // Number | 
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
apiInstance.didVendorAllDelete(opts, callback);
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

<a name="didVendorAllPatch"></a>
# **didVendorAllPatch**
> InlineResponse2002 didVendorAllPatch(opts)



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

var apiInstance = new DnlApi.OriginationApi();

var opts = { 
  'body': new DnlApi.CarrierActivate(), // CarrierActivate | All Carriers to modify
  'carrierTemplateId': 56, // Number | 
  'clientIdIn': "clientIdIn_example", // String | 
  'company': "company_example", // String | 
  'creditLimitGt': 3.4, // Number | 
  'creditLimitLt': 3.4, // Number | 
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
apiInstance.didVendorAllPatch(opts, callback);
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

<a name="didVendorClientIdDelete"></a>
# **didVendorClientIdDelete**
> Success didVendorClientIdDelete(clientId)



Deletes didvendor

### Example
```javascript
var DnlApi = require('dnl_api');
var defaultClient = DnlApi.ApiClient.instance;

// Configure API key authorization: auth_token
var auth_token = defaultClient.authentications['auth_token'];
auth_token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//auth_token.apiKeyPrefix = 'Token';

var apiInstance = new DnlApi.OriginationApi();

var clientId = 789; // Number | DidVendor id to get info about


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.didVendorClientIdDelete(clientId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **clientId** | **Number**| DidVendor id to get info about | 

### Return type

[**Success**](Success.md)

### Authorization

[auth_token](../README.md#auth_token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="didVendorClientIdGet"></a>
# **didVendorClientIdGet**
> InlineResponse200140 didVendorClientIdGet(clientId)



Gets didvendor

### Example
```javascript
var DnlApi = require('dnl_api');
var defaultClient = DnlApi.ApiClient.instance;

// Configure API key authorization: auth_token
var auth_token = defaultClient.authentications['auth_token'];
auth_token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//auth_token.apiKeyPrefix = 'Token';

var apiInstance = new DnlApi.OriginationApi();

var clientId = 789; // Number | DidVendor id to get info about


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.didVendorClientIdGet(clientId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **clientId** | **Number**| DidVendor id to get info about | 

### Return type

[**InlineResponse200140**](InlineResponse200140.md)

### Authorization

[auth_token](../README.md#auth_token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="didVendorClientIdPatch"></a>
# **didVendorClientIdPatch**
> InlineResponse200140 didVendorClientIdPatch(clientId, opts)



Modifies didvendor

### Example
```javascript
var DnlApi = require('dnl_api');
var defaultClient = DnlApi.ApiClient.instance;

// Configure API key authorization: auth_token
var auth_token = defaultClient.authentications['auth_token'];
auth_token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//auth_token.apiKeyPrefix = 'Token';

var apiInstance = new DnlApi.OriginationApi();

var clientId = 789; // Number | DidVendor id to get info about

var opts = { 
  'body': new DnlApi.VendorDid() // VendorDid | DidVendor to modify
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.didVendorClientIdPatch(clientId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **clientId** | **Number**| DidVendor id to get info about | 
 **body** | [**VendorDid**](VendorDid.md)| DidVendor to modify | [optional] 

### Return type

[**InlineResponse200140**](InlineResponse200140.md)

### Authorization

[auth_token](../README.md#auth_token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="didVendorClientIdUploadDidsPost"></a>
# **didVendorClientIdUploadDidsPost**
> InlineResponse200140 didVendorClientIdUploadDidsPost(dupliateHandling, file, clientId)



Creates new vendordids file

### Example
```javascript
var DnlApi = require('dnl_api');
var defaultClient = DnlApi.ApiClient.instance;

// Configure API key authorization: auth_token
var auth_token = defaultClient.authentications['auth_token'];
auth_token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//auth_token.apiKeyPrefix = 'Token';

var apiInstance = new DnlApi.OriginationApi();

var dupliateHandling = "Overwrite"; // String | How to handle duplicates

var file = "/path/to/file.txt"; // File | File to upload

var clientId = 789; // Number | Vendor to upload DIDs


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.didVendorClientIdUploadDidsPost(dupliateHandling, file, clientId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **dupliateHandling** | **String**| How to handle duplicates | [default to Overwrite]
 **file** | **File**| File to upload | 
 **clientId** | **Number**| Vendor to upload DIDs | 

### Return type

[**InlineResponse200140**](InlineResponse200140.md)

### Authorization

[auth_token](../README.md#auth_token)

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/json

<a name="didVendorCreatePost"></a>
# **didVendorCreatePost**
> ObjectCreated didVendorCreatePost(opts)



Creates new didvendor

### Example
```javascript
var DnlApi = require('dnl_api');
var defaultClient = DnlApi.ApiClient.instance;

// Configure API key authorization: auth_token
var auth_token = defaultClient.authentications['auth_token'];
auth_token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//auth_token.apiKeyPrefix = 'Token';

var apiInstance = new DnlApi.OriginationApi();

var opts = { 
  'body': new DnlApi.VendorDid() // VendorDid | DidVendor to create
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.didVendorCreatePost(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**VendorDid**](VendorDid.md)| DidVendor to create | [optional] 

### Return type

[**ObjectCreated**](ObjectCreated.md)

### Authorization

[auth_token](../README.md#auth_token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="didVendorListGet"></a>
# **didVendorListGet**
> InlineResponse200141 didVendorListGet(opts)



Gets didvendors

### Example
```javascript
var DnlApi = require('dnl_api');
var defaultClient = DnlApi.ApiClient.instance;

// Configure API key authorization: auth_token
var auth_token = defaultClient.authentications['auth_token'];
auth_token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//auth_token.apiKeyPrefix = 'Token';

var apiInstance = new DnlApi.OriginationApi();

var opts = { 
  'page': 56, // Number | 
  'perPage': 56, // Number | 
  'orderBy': "orderBy_example", // String | 
  'orderDir': "orderDir_example", // String | 
  'clientId': 56, // Number | 
  'name': "name_example", // String | 
  'status': true, // Boolean | 
  'vendorResId': 56, // Number | 
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
apiInstance.didVendorListGet(opts, callback);
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
 **status** | **Boolean**|  | [optional] 
 **vendorResId** | **Number**|  | [optional] 
 **updateAtGt** | **String**|  | [optional] 
 **updateAtLt** | **String**|  | [optional] 

### Return type

[**InlineResponse200141**](InlineResponse200141.md)

### Authorization

[auth_token](../README.md#auth_token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


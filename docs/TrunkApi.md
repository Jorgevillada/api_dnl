# DnlApi.TrunkApi

All URIs are relative to *https://148.251.91.143:8000/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**trunkDigitMapRefIdDelete**](TrunkApi.md#trunkDigitMapRefIdDelete) | **DELETE** /trunk/digit_map/{ref_id} | 
[**trunkDigitMapRefIdGet**](TrunkApi.md#trunkDigitMapRefIdGet) | **GET** /trunk/digit_map/{ref_id} | 
[**trunkDigitMapRefIdPatch**](TrunkApi.md#trunkDigitMapRefIdPatch) | **PATCH** /trunk/digit_map/{ref_id} | 
[**trunkDirectionDirectionIdDelete**](TrunkApi.md#trunkDirectionDirectionIdDelete) | **DELETE** /trunk/direction/{direction_id} | 
[**trunkDirectionDirectionIdGet**](TrunkApi.md#trunkDirectionDirectionIdGet) | **GET** /trunk/direction/{direction_id} | 
[**trunkDirectionDirectionIdPatch**](TrunkApi.md#trunkDirectionDirectionIdPatch) | **PATCH** /trunk/direction/{direction_id} | 
[**trunkEgressListGet**](TrunkApi.md#trunkEgressListGet) | **GET** /trunk/egress/list | 
[**trunkEgressTrunkIdReapplyTemplateIdPatch**](TrunkApi.md#trunkEgressTrunkIdReapplyTemplateIdPatch) | **PATCH** /trunk/egress/{trunk_id}/reapply/{template_id} | 
[**trunkEgressTrunkIdSaveAsTemplatePost**](TrunkApi.md#trunkEgressTrunkIdSaveAsTemplatePost) | **POST** /trunk/egress/{trunk_id}/save_as_template | 
[**trunkGroupGroupIdAddTrunkPatch**](TrunkApi.md#trunkGroupGroupIdAddTrunkPatch) | **PATCH** /trunk/group/{group_id}/add_trunk | 
[**trunkGroupGroupIdDelete**](TrunkApi.md#trunkGroupGroupIdDelete) | **DELETE** /trunk/group/{group_id} | 
[**trunkGroupGroupIdGet**](TrunkApi.md#trunkGroupGroupIdGet) | **GET** /trunk/group/{group_id} | 
[**trunkGroupGroupIdPatch**](TrunkApi.md#trunkGroupGroupIdPatch) | **PATCH** /trunk/group/{group_id} | 
[**trunkGroupListGet**](TrunkApi.md#trunkGroupListGet) | **GET** /trunk/group/list | 
[**trunkGroupPost**](TrunkApi.md#trunkGroupPost) | **POST** /trunk/group | 
[**trunkIngressListGet**](TrunkApi.md#trunkIngressListGet) | **GET** /trunk/ingress/list | 
[**trunkIngressTrunkIdReapplyTemplateIdPatch**](TrunkApi.md#trunkIngressTrunkIdReapplyTemplateIdPatch) | **PATCH** /trunk/ingress/{trunk_id}/reapply/{template_id} | 
[**trunkIngressTrunkIdSaveAsTemplatePost**](TrunkApi.md#trunkIngressTrunkIdSaveAsTemplatePost) | **POST** /trunk/ingress/{trunk_id}/save_as_template | 
[**trunkIpListGet**](TrunkApi.md#trunkIpListGet) | **GET** /trunk/ip/list | 
[**trunkIpResourceIpIdDelete**](TrunkApi.md#trunkIpResourceIpIdDelete) | **DELETE** /trunk/ip/{resource_ip_id} | 
[**trunkIpResourceIpIdGet**](TrunkApi.md#trunkIpResourceIpIdGet) | **GET** /trunk/ip/{resource_ip_id} | 
[**trunkIpResourceIpIdPatch**](TrunkApi.md#trunkIpResourceIpIdPatch) | **PATCH** /trunk/ip/{resource_ip_id} | 
[**trunkListGet**](TrunkApi.md#trunkListGet) | **GET** /trunk/list | 
[**trunkMaxChannelsGet**](TrunkApi.md#trunkMaxChannelsGet) | **GET** /trunk/max_channels | 
[**trunkPrefixIdDelete**](TrunkApi.md#trunkPrefixIdDelete) | **DELETE** /trunk/prefix/{id} | 
[**trunkPrefixIdGet**](TrunkApi.md#trunkPrefixIdGet) | **GET** /trunk/prefix/{id} | 
[**trunkPrefixIdPatch**](TrunkApi.md#trunkPrefixIdPatch) | **PATCH** /trunk/prefix/{id} | 
[**trunkRateSummaryListGet**](TrunkApi.md#trunkRateSummaryListGet) | **GET** /trunk/rate_summary/list | 
[**trunkReplaceActionIdDelete**](TrunkApi.md#trunkReplaceActionIdDelete) | **DELETE** /trunk/replace_action/{id} | 
[**trunkReplaceActionIdGet**](TrunkApi.md#trunkReplaceActionIdGet) | **GET** /trunk/replace_action/{id} | 
[**trunkReplaceActionIdPatch**](TrunkApi.md#trunkReplaceActionIdPatch) | **PATCH** /trunk/replace_action/{id} | 
[**trunkTrunkIdAssignProductProductIdPatch**](TrunkApi.md#trunkTrunkIdAssignProductProductIdPatch) | **PATCH** /trunk/{trunk_id}/assign_product/{product_id} | 
[**trunkTrunkIdDigitMapIdTimeProfileIdAddDigitMapPost**](TrunkApi.md#trunkTrunkIdDigitMapIdTimeProfileIdAddDigitMapPost) | **POST** /trunk/{trunk_id}/{digit_map_id}/{time_profile_id}/add_digit_map | 
[**trunkTrunkIdDigitMapListGet**](TrunkApi.md#trunkTrunkIdDigitMapListGet) | **GET** /trunk/{trunk_id}/digit_map/list | 
[**trunkTrunkIdDirectionListGet**](TrunkApi.md#trunkTrunkIdDirectionListGet) | **GET** /trunk/{trunk_id}/direction/list | 
[**trunkTrunkIdDirectionPost**](TrunkApi.md#trunkTrunkIdDirectionPost) | **POST** /trunk/{trunk_id}/direction | 
[**trunkTrunkIdIpPost**](TrunkApi.md#trunkTrunkIdIpPost) | **POST** /trunk/{trunk_id}/ip | 
[**trunkTrunkIdPrefixListGet**](TrunkApi.md#trunkTrunkIdPrefixListGet) | **GET** /trunk/{trunk_id}/prefix/list | 
[**trunkTrunkIdPrefixPost**](TrunkApi.md#trunkTrunkIdPrefixPost) | **POST** /trunk/{trunk_id}/prefix | 
[**trunkTrunkIdReplaceActionListGet**](TrunkApi.md#trunkTrunkIdReplaceActionListGet) | **GET** /trunk/{trunk_id}/replace_action/list | 
[**trunkTrunkIdReplaceActionPost**](TrunkApi.md#trunkTrunkIdReplaceActionPost) | **POST** /trunk/{trunk_id}/replace_action | 
[**trunkTrunkIdSendInteropPatch**](TrunkApi.md#trunkTrunkIdSendInteropPatch) | **PATCH** /trunk/{trunk_id}/send_interop | 
[**trunkUnclaimedListGet**](TrunkApi.md#trunkUnclaimedListGet) | **GET** /trunk/unclaimed/list | 


<a name="trunkDigitMapRefIdDelete"></a>
# **trunkDigitMapRefIdDelete**
> Success trunkDigitMapRefIdDelete(refId)



Deletes resourcetranslationref

### Example
```javascript
var DnlApi = require('dnl_api');
var defaultClient = DnlApi.ApiClient.instance;

// Configure API key authorization: auth_token
var auth_token = defaultClient.authentications['auth_token'];
auth_token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//auth_token.apiKeyPrefix = 'Token';

var apiInstance = new DnlApi.TrunkApi();

var refId = 789; // Number | ResourceTranslationRef id to get info about


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.trunkDigitMapRefIdDelete(refId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **refId** | **Number**| ResourceTranslationRef id to get info about | 

### Return type

[**Success**](Success.md)

### Authorization

[auth_token](../README.md#auth_token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="trunkDigitMapRefIdGet"></a>
# **trunkDigitMapRefIdGet**
> InlineResponse200194 trunkDigitMapRefIdGet(refId)



Gets resourcetranslationref

### Example
```javascript
var DnlApi = require('dnl_api');
var defaultClient = DnlApi.ApiClient.instance;

// Configure API key authorization: auth_token
var auth_token = defaultClient.authentications['auth_token'];
auth_token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//auth_token.apiKeyPrefix = 'Token';

var apiInstance = new DnlApi.TrunkApi();

var refId = 789; // Number | ResourceTranslationRef id to get info about


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.trunkDigitMapRefIdGet(refId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **refId** | **Number**| ResourceTranslationRef id to get info about | 

### Return type

[**InlineResponse200194**](InlineResponse200194.md)

### Authorization

[auth_token](../README.md#auth_token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="trunkDigitMapRefIdPatch"></a>
# **trunkDigitMapRefIdPatch**
> InlineResponse200194 trunkDigitMapRefIdPatch(refId, opts)



Modifies resourcetranslationref

### Example
```javascript
var DnlApi = require('dnl_api');
var defaultClient = DnlApi.ApiClient.instance;

// Configure API key authorization: auth_token
var auth_token = defaultClient.authentications['auth_token'];
auth_token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//auth_token.apiKeyPrefix = 'Token';

var apiInstance = new DnlApi.TrunkApi();

var refId = 789; // Number | ResourceTranslationRef id to get info about

var opts = { 
  'body': new DnlApi.ResourceTranslationRef() // ResourceTranslationRef | ResourceTranslationRef to modify
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.trunkDigitMapRefIdPatch(refId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **refId** | **Number**| ResourceTranslationRef id to get info about | 
 **body** | [**ResourceTranslationRef**](ResourceTranslationRef.md)| ResourceTranslationRef to modify | [optional] 

### Return type

[**InlineResponse200194**](InlineResponse200194.md)

### Authorization

[auth_token](../README.md#auth_token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="trunkDirectionDirectionIdDelete"></a>
# **trunkDirectionDirectionIdDelete**
> Success trunkDirectionDirectionIdDelete(directionId)



Deletes resourcedirection

### Example
```javascript
var DnlApi = require('dnl_api');
var defaultClient = DnlApi.ApiClient.instance;

// Configure API key authorization: auth_token
var auth_token = defaultClient.authentications['auth_token'];
auth_token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//auth_token.apiKeyPrefix = 'Token';

var apiInstance = new DnlApi.TrunkApi();

var directionId = 789; // Number | ResourceDirection id to get info about


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.trunkDirectionDirectionIdDelete(directionId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **directionId** | **Number**| ResourceDirection id to get info about | 

### Return type

[**Success**](Success.md)

### Authorization

[auth_token](../README.md#auth_token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="trunkDirectionDirectionIdGet"></a>
# **trunkDirectionDirectionIdGet**
> InlineResponse200190 trunkDirectionDirectionIdGet(directionId)



Gets resourcedirection

### Example
```javascript
var DnlApi = require('dnl_api');
var defaultClient = DnlApi.ApiClient.instance;

// Configure API key authorization: auth_token
var auth_token = defaultClient.authentications['auth_token'];
auth_token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//auth_token.apiKeyPrefix = 'Token';

var apiInstance = new DnlApi.TrunkApi();

var directionId = 789; // Number | ResourceDirection id to get info about


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.trunkDirectionDirectionIdGet(directionId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **directionId** | **Number**| ResourceDirection id to get info about | 

### Return type

[**InlineResponse200190**](InlineResponse200190.md)

### Authorization

[auth_token](../README.md#auth_token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="trunkDirectionDirectionIdPatch"></a>
# **trunkDirectionDirectionIdPatch**
> InlineResponse200190 trunkDirectionDirectionIdPatch(directionId, opts)



Modifies resourcedirection

### Example
```javascript
var DnlApi = require('dnl_api');
var defaultClient = DnlApi.ApiClient.instance;

// Configure API key authorization: auth_token
var auth_token = defaultClient.authentications['auth_token'];
auth_token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//auth_token.apiKeyPrefix = 'Token';

var apiInstance = new DnlApi.TrunkApi();

var directionId = 789; // Number | ResourceDirection id to get info about

var opts = { 
  'body': new DnlApi.ResourceDirection() // ResourceDirection | ResourceDirection to modify
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.trunkDirectionDirectionIdPatch(directionId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **directionId** | **Number**| ResourceDirection id to get info about | 
 **body** | [**ResourceDirection**](ResourceDirection.md)| ResourceDirection to modify | [optional] 

### Return type

[**InlineResponse200190**](InlineResponse200190.md)

### Authorization

[auth_token](../README.md#auth_token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="trunkEgressListGet"></a>
# **trunkEgressListGet**
> InlineResponse20023 trunkEgressListGet(opts)



Gets egress trunks

### Example
```javascript
var DnlApi = require('dnl_api');
var defaultClient = DnlApi.ApiClient.instance;

// Configure API key authorization: auth_token
var auth_token = defaultClient.authentications['auth_token'];
auth_token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//auth_token.apiKeyPrefix = 'Token';

var apiInstance = new DnlApi.TrunkApi();

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
apiInstance.trunkEgressListGet(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
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

<a name="trunkEgressTrunkIdReapplyTemplateIdPatch"></a>
# **trunkEgressTrunkIdReapplyTemplateIdPatch**
> Success trunkEgressTrunkIdReapplyTemplateIdPatch(trunkId, templateId)





### Example
```javascript
var DnlApi = require('dnl_api');
var defaultClient = DnlApi.ApiClient.instance;

// Configure API key authorization: auth_token
var auth_token = defaultClient.authentications['auth_token'];
auth_token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//auth_token.apiKeyPrefix = 'Token';

var apiInstance = new DnlApi.TrunkApi();

var trunkId = 789; // Number | Trunk to proceed

var templateId = 789; // Number | Template


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.trunkEgressTrunkIdReapplyTemplateIdPatch(trunkId, templateId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **trunkId** | **Number**| Trunk to proceed | 
 **templateId** | **Number**| Template | 

### Return type

[**Success**](Success.md)

### Authorization

[auth_token](../README.md#auth_token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="trunkEgressTrunkIdSaveAsTemplatePost"></a>
# **trunkEgressTrunkIdSaveAsTemplatePost**
> ObjectCreated trunkEgressTrunkIdSaveAsTemplatePost(trunkId, opts)



Creates new egresstrunktemplate

### Example
```javascript
var DnlApi = require('dnl_api');
var defaultClient = DnlApi.ApiClient.instance;

// Configure API key authorization: auth_token
var auth_token = defaultClient.authentications['auth_token'];
auth_token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//auth_token.apiKeyPrefix = 'Token';

var apiInstance = new DnlApi.TrunkApi();

var trunkId = 789; // Number | Trunk to create template

var opts = { 
  'body': new DnlApi.TrunkTemplateFromResource() // TrunkTemplateFromResource | EgressTrunkTemplate to create
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.trunkEgressTrunkIdSaveAsTemplatePost(trunkId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **trunkId** | **Number**| Trunk to create template | 
 **body** | [**TrunkTemplateFromResource**](TrunkTemplateFromResource.md)| EgressTrunkTemplate to create | [optional] 

### Return type

[**ObjectCreated**](ObjectCreated.md)

### Authorization

[auth_token](../README.md#auth_token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="trunkGroupGroupIdAddTrunkPatch"></a>
# **trunkGroupGroupIdAddTrunkPatch**
> InlineResponse200183 trunkGroupGroupIdAddTrunkPatch(groupId, opts)



Modifies trunkgroup

### Example
```javascript
var DnlApi = require('dnl_api');
var defaultClient = DnlApi.ApiClient.instance;

// Configure API key authorization: auth_token
var auth_token = defaultClient.authentications['auth_token'];
auth_token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//auth_token.apiKeyPrefix = 'Token';

var apiInstance = new DnlApi.TrunkApi();

var groupId = 789; // Number | TrunkGroup id to get info about

var opts = { 
  'body': new DnlApi.TrunkGroupAddTrunk() // TrunkGroupAddTrunk | TrunkGroup to modify
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.trunkGroupGroupIdAddTrunkPatch(groupId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **groupId** | **Number**| TrunkGroup id to get info about | 
 **body** | [**TrunkGroupAddTrunk**](TrunkGroupAddTrunk.md)| TrunkGroup to modify | [optional] 

### Return type

[**InlineResponse200183**](InlineResponse200183.md)

### Authorization

[auth_token](../README.md#auth_token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="trunkGroupGroupIdDelete"></a>
# **trunkGroupGroupIdDelete**
> Success trunkGroupGroupIdDelete(groupId)



Deletes trunkgroup

### Example
```javascript
var DnlApi = require('dnl_api');
var defaultClient = DnlApi.ApiClient.instance;

// Configure API key authorization: auth_token
var auth_token = defaultClient.authentications['auth_token'];
auth_token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//auth_token.apiKeyPrefix = 'Token';

var apiInstance = new DnlApi.TrunkApi();

var groupId = 789; // Number | TrunkGroup id to get info about


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.trunkGroupGroupIdDelete(groupId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **groupId** | **Number**| TrunkGroup id to get info about | 

### Return type

[**Success**](Success.md)

### Authorization

[auth_token](../README.md#auth_token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="trunkGroupGroupIdGet"></a>
# **trunkGroupGroupIdGet**
> InlineResponse200183 trunkGroupGroupIdGet(groupId)



Gets trunkgroup

### Example
```javascript
var DnlApi = require('dnl_api');
var defaultClient = DnlApi.ApiClient.instance;

// Configure API key authorization: auth_token
var auth_token = defaultClient.authentications['auth_token'];
auth_token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//auth_token.apiKeyPrefix = 'Token';

var apiInstance = new DnlApi.TrunkApi();

var groupId = 789; // Number | TrunkGroup id to get info about


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.trunkGroupGroupIdGet(groupId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **groupId** | **Number**| TrunkGroup id to get info about | 

### Return type

[**InlineResponse200183**](InlineResponse200183.md)

### Authorization

[auth_token](../README.md#auth_token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="trunkGroupGroupIdPatch"></a>
# **trunkGroupGroupIdPatch**
> InlineResponse200183 trunkGroupGroupIdPatch(groupId, opts)



Modifies trunkgroup

### Example
```javascript
var DnlApi = require('dnl_api');
var defaultClient = DnlApi.ApiClient.instance;

// Configure API key authorization: auth_token
var auth_token = defaultClient.authentications['auth_token'];
auth_token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//auth_token.apiKeyPrefix = 'Token';

var apiInstance = new DnlApi.TrunkApi();

var groupId = 789; // Number | TrunkGroup id to get info about

var opts = { 
  'body': new DnlApi.TrunkGroup() // TrunkGroup | TrunkGroup to modify
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.trunkGroupGroupIdPatch(groupId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **groupId** | **Number**| TrunkGroup id to get info about | 
 **body** | [**TrunkGroup**](TrunkGroup.md)| TrunkGroup to modify | [optional] 

### Return type

[**InlineResponse200183**](InlineResponse200183.md)

### Authorization

[auth_token](../README.md#auth_token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="trunkGroupListGet"></a>
# **trunkGroupListGet**
> InlineResponse200184 trunkGroupListGet(opts)



Gets trunkgroups

### Example
```javascript
var DnlApi = require('dnl_api');
var defaultClient = DnlApi.ApiClient.instance;

// Configure API key authorization: auth_token
var auth_token = defaultClient.authentications['auth_token'];
auth_token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//auth_token.apiKeyPrefix = 'Token';

var apiInstance = new DnlApi.TrunkApi();

var opts = { 
  'page': 56, // Number | 
  'perPage': 56, // Number | 
  'orderBy': "orderBy_example", // String | 
  'orderDir': "orderDir_example", // String | 
  'groupId': 56, // Number | 
  'groupName': "groupName_example", // String | 
  'trunkType': "trunkType_example", // String | 
  'trunksCount': 56 // Number | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.trunkGroupListGet(opts, callback);
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
 **trunkType** | **String**|  | [optional] 
 **trunksCount** | **Number**|  | [optional] 

### Return type

[**InlineResponse200184**](InlineResponse200184.md)

### Authorization

[auth_token](../README.md#auth_token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="trunkGroupPost"></a>
# **trunkGroupPost**
> ObjectCreated trunkGroupPost(opts)



Creates new trunkgroup

### Example
```javascript
var DnlApi = require('dnl_api');
var defaultClient = DnlApi.ApiClient.instance;

// Configure API key authorization: auth_token
var auth_token = defaultClient.authentications['auth_token'];
auth_token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//auth_token.apiKeyPrefix = 'Token';

var apiInstance = new DnlApi.TrunkApi();

var opts = { 
  'body': new DnlApi.TrunkGroup() // TrunkGroup | TrunkGroup to create
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.trunkGroupPost(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**TrunkGroup**](TrunkGroup.md)| TrunkGroup to create | [optional] 

### Return type

[**ObjectCreated**](ObjectCreated.md)

### Authorization

[auth_token](../README.md#auth_token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="trunkIngressListGet"></a>
# **trunkIngressListGet**
> InlineResponse20025 trunkIngressListGet(opts)



Gets ingress trunks

### Example
```javascript
var DnlApi = require('dnl_api');
var defaultClient = DnlApi.ApiClient.instance;

// Configure API key authorization: auth_token
var auth_token = defaultClient.authentications['auth_token'];
auth_token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//auth_token.apiKeyPrefix = 'Token';

var apiInstance = new DnlApi.TrunkApi();

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
apiInstance.trunkIngressListGet(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
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

<a name="trunkIngressTrunkIdReapplyTemplateIdPatch"></a>
# **trunkIngressTrunkIdReapplyTemplateIdPatch**
> Success trunkIngressTrunkIdReapplyTemplateIdPatch(trunkId, templateId)





### Example
```javascript
var DnlApi = require('dnl_api');
var defaultClient = DnlApi.ApiClient.instance;

// Configure API key authorization: auth_token
var auth_token = defaultClient.authentications['auth_token'];
auth_token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//auth_token.apiKeyPrefix = 'Token';

var apiInstance = new DnlApi.TrunkApi();

var trunkId = 789; // Number | Trunk to proceed

var templateId = 789; // Number | Template


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.trunkIngressTrunkIdReapplyTemplateIdPatch(trunkId, templateId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **trunkId** | **Number**| Trunk to proceed | 
 **templateId** | **Number**| Template | 

### Return type

[**Success**](Success.md)

### Authorization

[auth_token](../README.md#auth_token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="trunkIngressTrunkIdSaveAsTemplatePost"></a>
# **trunkIngressTrunkIdSaveAsTemplatePost**
> ObjectCreated trunkIngressTrunkIdSaveAsTemplatePost(trunkId, opts)



Creates new ingresstrunktemplate

### Example
```javascript
var DnlApi = require('dnl_api');
var defaultClient = DnlApi.ApiClient.instance;

// Configure API key authorization: auth_token
var auth_token = defaultClient.authentications['auth_token'];
auth_token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//auth_token.apiKeyPrefix = 'Token';

var apiInstance = new DnlApi.TrunkApi();

var trunkId = 789; // Number | Trunk to create template

var opts = { 
  'body': new DnlApi.TrunkTemplateFromResource() // TrunkTemplateFromResource | IngressTrunkTemplate to create
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.trunkIngressTrunkIdSaveAsTemplatePost(trunkId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **trunkId** | **Number**| Trunk to create template | 
 **body** | [**TrunkTemplateFromResource**](TrunkTemplateFromResource.md)| IngressTrunkTemplate to create | [optional] 

### Return type

[**ObjectCreated**](ObjectCreated.md)

### Authorization

[auth_token](../README.md#auth_token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="trunkIpListGet"></a>
# **trunkIpListGet**
> InlineResponse200187 trunkIpListGet(opts)



Gets resourceips

### Example
```javascript
var DnlApi = require('dnl_api');
var defaultClient = DnlApi.ApiClient.instance;

// Configure API key authorization: auth_token
var auth_token = defaultClient.authentications['auth_token'];
auth_token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//auth_token.apiKeyPrefix = 'Token';

var apiInstance = new DnlApi.TrunkApi();

var opts = { 
  'page': 56, // Number | 
  'perPage': 56, // Number | 
  'orderBy': "orderBy_example", // String | 
  'orderDir': "orderDir_example", // String | 
  'fqdn': "fqdn_example", // String | 
  'ip': "ip_example", // String | 
  'port': 56, // Number | 
  'resourceId': 56, // Number | 
  'resourceIpId': 56, // Number | 
  'sipRpid': "sipRpid_example" // String | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.trunkIpListGet(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **page** | **Number**|  | [optional] 
 **perPage** | **Number**|  | [optional] 
 **orderBy** | **String**|  | [optional] 
 **orderDir** | **String**|  | [optional] 
 **fqdn** | **String**|  | [optional] 
 **ip** | **String**|  | [optional] 
 **port** | **Number**|  | [optional] 
 **resourceId** | **Number**|  | [optional] 
 **resourceIpId** | **Number**|  | [optional] 
 **sipRpid** | **String**|  | [optional] 

### Return type

[**InlineResponse200187**](InlineResponse200187.md)

### Authorization

[auth_token](../README.md#auth_token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="trunkIpResourceIpIdDelete"></a>
# **trunkIpResourceIpIdDelete**
> Success trunkIpResourceIpIdDelete(resourceIpId)



Deletes resourceip

### Example
```javascript
var DnlApi = require('dnl_api');
var defaultClient = DnlApi.ApiClient.instance;

// Configure API key authorization: auth_token
var auth_token = defaultClient.authentications['auth_token'];
auth_token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//auth_token.apiKeyPrefix = 'Token';

var apiInstance = new DnlApi.TrunkApi();

var resourceIpId = 789; // Number | ResourceIp id to get info about


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.trunkIpResourceIpIdDelete(resourceIpId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resourceIpId** | **Number**| ResourceIp id to get info about | 

### Return type

[**Success**](Success.md)

### Authorization

[auth_token](../README.md#auth_token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="trunkIpResourceIpIdGet"></a>
# **trunkIpResourceIpIdGet**
> InlineResponse200186 trunkIpResourceIpIdGet(resourceIpId)



Gets resourceip

### Example
```javascript
var DnlApi = require('dnl_api');
var defaultClient = DnlApi.ApiClient.instance;

// Configure API key authorization: auth_token
var auth_token = defaultClient.authentications['auth_token'];
auth_token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//auth_token.apiKeyPrefix = 'Token';

var apiInstance = new DnlApi.TrunkApi();

var resourceIpId = 789; // Number | ResourceIp id to get info about


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.trunkIpResourceIpIdGet(resourceIpId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resourceIpId** | **Number**| ResourceIp id to get info about | 

### Return type

[**InlineResponse200186**](InlineResponse200186.md)

### Authorization

[auth_token](../README.md#auth_token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="trunkIpResourceIpIdPatch"></a>
# **trunkIpResourceIpIdPatch**
> InlineResponse200186 trunkIpResourceIpIdPatch(resourceIpId, opts)



Modifies resourceip

### Example
```javascript
var DnlApi = require('dnl_api');
var defaultClient = DnlApi.ApiClient.instance;

// Configure API key authorization: auth_token
var auth_token = defaultClient.authentications['auth_token'];
auth_token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//auth_token.apiKeyPrefix = 'Token';

var apiInstance = new DnlApi.TrunkApi();

var resourceIpId = 789; // Number | ResourceIp id to get info about

var opts = { 
  'body': new DnlApi.ResourceIpAll() // ResourceIpAll | ResourceIp to modify
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.trunkIpResourceIpIdPatch(resourceIpId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resourceIpId** | **Number**| ResourceIp id to get info about | 
 **body** | [**ResourceIpAll**](ResourceIpAll.md)| ResourceIp to modify | [optional] 

### Return type

[**InlineResponse200186**](InlineResponse200186.md)

### Authorization

[auth_token](../README.md#auth_token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="trunkListGet"></a>
# **trunkListGet**
> InlineResponse200181 trunkListGet(opts)



Gets trunks

### Example
```javascript
var DnlApi = require('dnl_api');
var defaultClient = DnlApi.ApiClient.instance;

// Configure API key authorization: auth_token
var auth_token = defaultClient.authentications['auth_token'];
auth_token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//auth_token.apiKeyPrefix = 'Token';

var apiInstance = new DnlApi.TrunkApi();

var opts = { 
  'page': 56, // Number | 
  'perPage': 56, // Number | 
  'orderBy': "orderBy_example", // String | 
  'orderDir': "orderDir_example", // String | 
  'active': true, // Boolean | 
  'carrierId': 56, // Number | 
  'clientNameSql': "clientNameSql_example", // String | 
  'direction': "direction_example", // String | 
  'trunkId': 56, // Number | 
  'trunkName': "trunkName_example", // String | 
  'type': "type_example" // String | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.trunkListGet(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **page** | **Number**|  | [optional] 
 **perPage** | **Number**|  | [optional] 
 **orderBy** | **String**|  | [optional] 
 **orderDir** | **String**|  | [optional] 
 **active** | **Boolean**|  | [optional] 
 **carrierId** | **Number**|  | [optional] 
 **clientNameSql** | **String**|  | [optional] 
 **direction** | **String**|  | [optional] 
 **trunkId** | **Number**|  | [optional] 
 **trunkName** | **String**|  | [optional] 
 **type** | **String**|  | [optional] 

### Return type

[**InlineResponse200181**](InlineResponse200181.md)

### Authorization

[auth_token](../README.md#auth_token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="trunkMaxChannelsGet"></a>
# **trunkMaxChannelsGet**
> InlineResponse200185 trunkMaxChannelsGet(opts)



Gets qostotals

### Example
```javascript
var DnlApi = require('dnl_api');
var defaultClient = DnlApi.ApiClient.instance;

// Configure API key authorization: auth_token
var auth_token = defaultClient.authentications['auth_token'];
auth_token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//auth_token.apiKeyPrefix = 'Token';

var apiInstance = new DnlApi.TrunkApi();

var opts = { 
  'page': 56, // Number | 
  'perPage': 56, // Number | 
  'orderBy': "orderBy_example", // String | 
  'orderDir': "orderDir_example", // String | 
  'endDate': "endDate_example", // String | 
  'startDate': "startDate_example" // String | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.trunkMaxChannelsGet(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **page** | **Number**|  | [optional] 
 **perPage** | **Number**|  | [optional] 
 **orderBy** | **String**|  | [optional] 
 **orderDir** | **String**|  | [optional] 
 **endDate** | **String**|  | [optional] 
 **startDate** | **String**|  | [optional] 

### Return type

[**InlineResponse200185**](InlineResponse200185.md)

### Authorization

[auth_token](../README.md#auth_token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="trunkPrefixIdDelete"></a>
# **trunkPrefixIdDelete**
> Success trunkPrefixIdDelete(id)



Deletes resourceprefix

### Example
```javascript
var DnlApi = require('dnl_api');
var defaultClient = DnlApi.ApiClient.instance;

// Configure API key authorization: auth_token
var auth_token = defaultClient.authentications['auth_token'];
auth_token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//auth_token.apiKeyPrefix = 'Token';

var apiInstance = new DnlApi.TrunkApi();

var id = 789; // Number | ResourcePrefix id to get info about


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.trunkPrefixIdDelete(id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| ResourcePrefix id to get info about | 

### Return type

[**Success**](Success.md)

### Authorization

[auth_token](../README.md#auth_token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="trunkPrefixIdGet"></a>
# **trunkPrefixIdGet**
> InlineResponse200188 trunkPrefixIdGet(id)



Gets resourceprefix

### Example
```javascript
var DnlApi = require('dnl_api');
var defaultClient = DnlApi.ApiClient.instance;

// Configure API key authorization: auth_token
var auth_token = defaultClient.authentications['auth_token'];
auth_token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//auth_token.apiKeyPrefix = 'Token';

var apiInstance = new DnlApi.TrunkApi();

var id = 789; // Number | ResourcePrefix id to get info about


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.trunkPrefixIdGet(id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| ResourcePrefix id to get info about | 

### Return type

[**InlineResponse200188**](InlineResponse200188.md)

### Authorization

[auth_token](../README.md#auth_token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="trunkPrefixIdPatch"></a>
# **trunkPrefixIdPatch**
> InlineResponse200188 trunkPrefixIdPatch(id, opts)



Modifies resourceprefix

### Example
```javascript
var DnlApi = require('dnl_api');
var defaultClient = DnlApi.ApiClient.instance;

// Configure API key authorization: auth_token
var auth_token = defaultClient.authentications['auth_token'];
auth_token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//auth_token.apiKeyPrefix = 'Token';

var apiInstance = new DnlApi.TrunkApi();

var id = 789; // Number | ResourcePrefix id to get info about

var opts = { 
  'body': new DnlApi.ResourcePrefixModify() // ResourcePrefixModify | ResourcePrefix to modify
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.trunkPrefixIdPatch(id, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| ResourcePrefix id to get info about | 
 **body** | [**ResourcePrefixModify**](ResourcePrefixModify.md)| ResourcePrefix to modify | [optional] 

### Return type

[**InlineResponse200188**](InlineResponse200188.md)

### Authorization

[auth_token](../README.md#auth_token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="trunkRateSummaryListGet"></a>
# **trunkRateSummaryListGet**
> InlineResponse200196 trunkRateSummaryListGet(opts)



Gets ingress trunks

### Example
```javascript
var DnlApi = require('dnl_api');
var defaultClient = DnlApi.ApiClient.instance;

// Configure API key authorization: auth_token
var auth_token = defaultClient.authentications['auth_token'];
auth_token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//auth_token.apiKeyPrefix = 'Token';

var apiInstance = new DnlApi.TrunkApi();

var opts = { 
  'page': 56, // Number | 
  'perPage': 56, // Number | 
  'orderBy': "orderBy_example", // String | 
  'orderDir': "orderDir_example", // String | 
  'carrier': "carrier_example", // String | 
  'ingressTrunkName': "ingressTrunkName_example", // String | 
  'prefix': "prefix_example", // String | 
  'rateTableName': "rateTableName_example" // String | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.trunkRateSummaryListGet(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **page** | **Number**|  | [optional] 
 **perPage** | **Number**|  | [optional] 
 **orderBy** | **String**|  | [optional] 
 **orderDir** | **String**|  | [optional] 
 **carrier** | **String**|  | [optional] 
 **ingressTrunkName** | **String**|  | [optional] 
 **prefix** | **String**|  | [optional] 
 **rateTableName** | **String**|  | [optional] 

### Return type

[**InlineResponse200196**](InlineResponse200196.md)

### Authorization

[auth_token](../README.md#auth_token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="trunkReplaceActionIdDelete"></a>
# **trunkReplaceActionIdDelete**
> Success trunkReplaceActionIdDelete(id)



Deletes resourcereplaceaction

### Example
```javascript
var DnlApi = require('dnl_api');
var defaultClient = DnlApi.ApiClient.instance;

// Configure API key authorization: auth_token
var auth_token = defaultClient.authentications['auth_token'];
auth_token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//auth_token.apiKeyPrefix = 'Token';

var apiInstance = new DnlApi.TrunkApi();

var id = 789; // Number | ResourceReplaceAction id to get info about


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.trunkReplaceActionIdDelete(id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| ResourceReplaceAction id to get info about | 

### Return type

[**Success**](Success.md)

### Authorization

[auth_token](../README.md#auth_token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="trunkReplaceActionIdGet"></a>
# **trunkReplaceActionIdGet**
> InlineResponse200192 trunkReplaceActionIdGet(id)



Gets resourcereplaceaction

### Example
```javascript
var DnlApi = require('dnl_api');
var defaultClient = DnlApi.ApiClient.instance;

// Configure API key authorization: auth_token
var auth_token = defaultClient.authentications['auth_token'];
auth_token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//auth_token.apiKeyPrefix = 'Token';

var apiInstance = new DnlApi.TrunkApi();

var id = 789; // Number | ResourceReplaceAction id to get info about


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.trunkReplaceActionIdGet(id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| ResourceReplaceAction id to get info about | 

### Return type

[**InlineResponse200192**](InlineResponse200192.md)

### Authorization

[auth_token](../README.md#auth_token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="trunkReplaceActionIdPatch"></a>
# **trunkReplaceActionIdPatch**
> InlineResponse200192 trunkReplaceActionIdPatch(id, opts)



Modifies resourcereplaceaction

### Example
```javascript
var DnlApi = require('dnl_api');
var defaultClient = DnlApi.ApiClient.instance;

// Configure API key authorization: auth_token
var auth_token = defaultClient.authentications['auth_token'];
auth_token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//auth_token.apiKeyPrefix = 'Token';

var apiInstance = new DnlApi.TrunkApi();

var id = 789; // Number | ResourceReplaceAction id to get info about

var opts = { 
  'body': new DnlApi.ResourceReplaceAction() // ResourceReplaceAction | ResourceReplaceAction to modify
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.trunkReplaceActionIdPatch(id, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| ResourceReplaceAction id to get info about | 
 **body** | [**ResourceReplaceAction**](ResourceReplaceAction.md)| ResourceReplaceAction to modify | [optional] 

### Return type

[**InlineResponse200192**](InlineResponse200192.md)

### Authorization

[auth_token](../README.md#auth_token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="trunkTrunkIdAssignProductProductIdPatch"></a>
# **trunkTrunkIdAssignProductProductIdPatch**
> InlineResponse200197 trunkTrunkIdAssignProductProductIdPatch(trunkId, productId, opts)



Modifies trunk

### Example
```javascript
var DnlApi = require('dnl_api');
var defaultClient = DnlApi.ApiClient.instance;

// Configure API key authorization: auth_token
var auth_token = defaultClient.authentications['auth_token'];
auth_token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//auth_token.apiKeyPrefix = 'Token';

var apiInstance = new DnlApi.TrunkApi();

var trunkId = 789; // Number | Trunk to proceed

var productId = 789; // Number | Product to assign

var opts = { 
  'body': new DnlApi.ResourceWithIps() // ResourceWithIps | Trunk to modify
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.trunkTrunkIdAssignProductProductIdPatch(trunkId, productId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **trunkId** | **Number**| Trunk to proceed | 
 **productId** | **Number**| Product to assign | 
 **body** | [**ResourceWithIps**](ResourceWithIps.md)| Trunk to modify | [optional] 

### Return type

[**InlineResponse200197**](InlineResponse200197.md)

### Authorization

[auth_token](../README.md#auth_token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="trunkTrunkIdDigitMapIdTimeProfileIdAddDigitMapPost"></a>
# **trunkTrunkIdDigitMapIdTimeProfileIdAddDigitMapPost**
> ObjectCreated trunkTrunkIdDigitMapIdTimeProfileIdAddDigitMapPost(trunkId, digitMapId, timeProfileId, opts)



Creates new resourcetranslationref

### Example
```javascript
var DnlApi = require('dnl_api');
var defaultClient = DnlApi.ApiClient.instance;

// Configure API key authorization: auth_token
var auth_token = defaultClient.authentications['auth_token'];
auth_token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//auth_token.apiKeyPrefix = 'Token';

var apiInstance = new DnlApi.TrunkApi();

var trunkId = 789; // Number | Parent gateway resource_id

var digitMapId = 789; // Number | DigitTranslation translation_id

var timeProfileId = 789; // Number | TimeProfile time_profile_id

var opts = { 
  'body': new DnlApi.ResourceTranslationRef() // ResourceTranslationRef | ResourceTranslationRef to create
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.trunkTrunkIdDigitMapIdTimeProfileIdAddDigitMapPost(trunkId, digitMapId, timeProfileId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **trunkId** | **Number**| Parent gateway resource_id | 
 **digitMapId** | **Number**| DigitTranslation translation_id | 
 **timeProfileId** | **Number**| TimeProfile time_profile_id | 
 **body** | [**ResourceTranslationRef**](ResourceTranslationRef.md)| ResourceTranslationRef to create | [optional] 

### Return type

[**ObjectCreated**](ObjectCreated.md)

### Authorization

[auth_token](../README.md#auth_token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="trunkTrunkIdDigitMapListGet"></a>
# **trunkTrunkIdDigitMapListGet**
> InlineResponse200195 trunkTrunkIdDigitMapListGet(trunkId, opts)



Gets resourcetranslationrefs

### Example
```javascript
var DnlApi = require('dnl_api');
var defaultClient = DnlApi.ApiClient.instance;

// Configure API key authorization: auth_token
var auth_token = defaultClient.authentications['auth_token'];
auth_token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//auth_token.apiKeyPrefix = 'Token';

var apiInstance = new DnlApi.TrunkApi();

var trunkId = 789; // Number | Parent gateway resource_id

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
apiInstance.trunkTrunkIdDigitMapListGet(trunkId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **trunkId** | **Number**| Parent gateway resource_id | 
 **page** | **Number**|  | [optional] 
 **perPage** | **Number**|  | [optional] 
 **orderBy** | **String**|  | [optional] 
 **orderDir** | **String**|  | [optional] 

### Return type

[**InlineResponse200195**](InlineResponse200195.md)

### Authorization

[auth_token](../README.md#auth_token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="trunkTrunkIdDirectionListGet"></a>
# **trunkTrunkIdDirectionListGet**
> InlineResponse200191 trunkTrunkIdDirectionListGet(trunkId, opts)



Gets resourcedirections

### Example
```javascript
var DnlApi = require('dnl_api');
var defaultClient = DnlApi.ApiClient.instance;

// Configure API key authorization: auth_token
var auth_token = defaultClient.authentications['auth_token'];
auth_token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//auth_token.apiKeyPrefix = 'Token';

var apiInstance = new DnlApi.TrunkApi();

var trunkId = 789; // Number | Parent trunk id

var opts = { 
  'page': 56, // Number | 
  'perPage': 56, // Number | 
  'orderBy': "orderBy_example", // String | 
  'orderDir': "orderDir_example", // String | 
  'action': "action_example", // String | 
  'digits': "digits_example", // String | 
  'direction': "direction_example", // String | 
  'directionId': 56, // Number | 
  'type': "type_example" // String | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.trunkTrunkIdDirectionListGet(trunkId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **trunkId** | **Number**| Parent trunk id | 
 **page** | **Number**|  | [optional] 
 **perPage** | **Number**|  | [optional] 
 **orderBy** | **String**|  | [optional] 
 **orderDir** | **String**|  | [optional] 
 **action** | **String**|  | [optional] 
 **digits** | **String**|  | [optional] 
 **direction** | **String**|  | [optional] 
 **directionId** | **Number**|  | [optional] 
 **type** | **String**|  | [optional] 

### Return type

[**InlineResponse200191**](InlineResponse200191.md)

### Authorization

[auth_token](../README.md#auth_token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="trunkTrunkIdDirectionPost"></a>
# **trunkTrunkIdDirectionPost**
> ObjectCreated trunkTrunkIdDirectionPost(trunkId, opts)



Creates new resourcedirection

### Example
```javascript
var DnlApi = require('dnl_api');
var defaultClient = DnlApi.ApiClient.instance;

// Configure API key authorization: auth_token
var auth_token = defaultClient.authentications['auth_token'];
auth_token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//auth_token.apiKeyPrefix = 'Token';

var apiInstance = new DnlApi.TrunkApi();

var trunkId = 789; // Number | Parent trunk id

var opts = { 
  'body': new DnlApi.ResourceDirection() // ResourceDirection | ResourceDirection to create
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.trunkTrunkIdDirectionPost(trunkId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **trunkId** | **Number**| Parent trunk id | 
 **body** | [**ResourceDirection**](ResourceDirection.md)| ResourceDirection to create | [optional] 

### Return type

[**ObjectCreated**](ObjectCreated.md)

### Authorization

[auth_token](../README.md#auth_token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="trunkTrunkIdIpPost"></a>
# **trunkTrunkIdIpPost**
> ObjectCreated trunkTrunkIdIpPost(trunkId, opts)



Creates new resourceip

### Example
```javascript
var DnlApi = require('dnl_api');
var defaultClient = DnlApi.ApiClient.instance;

// Configure API key authorization: auth_token
var auth_token = defaultClient.authentications['auth_token'];
auth_token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//auth_token.apiKeyPrefix = 'Token';

var apiInstance = new DnlApi.TrunkApi();

var trunkId = 789; // Number | Parent trunk id

var opts = { 
  'body': new DnlApi.ResourceIpAll() // ResourceIpAll | ResourceIp to create
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.trunkTrunkIdIpPost(trunkId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **trunkId** | **Number**| Parent trunk id | 
 **body** | [**ResourceIpAll**](ResourceIpAll.md)| ResourceIp to create | [optional] 

### Return type

[**ObjectCreated**](ObjectCreated.md)

### Authorization

[auth_token](../README.md#auth_token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="trunkTrunkIdPrefixListGet"></a>
# **trunkTrunkIdPrefixListGet**
> InlineResponse200189 trunkTrunkIdPrefixListGet(trunkId, opts)



Gets resourceprefixs

### Example
```javascript
var DnlApi = require('dnl_api');
var defaultClient = DnlApi.ApiClient.instance;

// Configure API key authorization: auth_token
var auth_token = defaultClient.authentications['auth_token'];
auth_token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//auth_token.apiKeyPrefix = 'Token';

var apiInstance = new DnlApi.TrunkApi();

var trunkId = 789; // Number | Parent trunk id

var opts = { 
  'page': 56, // Number | 
  'perPage': 56, // Number | 
  'orderBy': "orderBy_example", // String | 
  'orderDir': "orderDir_example", // String | 
  'code': "code_example", // String | 
  'codeCap': 56, // Number | 
  'codeCps': 56, // Number | 
  'id': 56, // Number | 
  'rateTableId': 56, // Number | 
  'routingPlanId': 56, // Number | 
  'techPrefix': "techPrefix_example" // String | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.trunkTrunkIdPrefixListGet(trunkId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **trunkId** | **Number**| Parent trunk id | 
 **page** | **Number**|  | [optional] 
 **perPage** | **Number**|  | [optional] 
 **orderBy** | **String**|  | [optional] 
 **orderDir** | **String**|  | [optional] 
 **code** | **String**|  | [optional] 
 **codeCap** | **Number**|  | [optional] 
 **codeCps** | **Number**|  | [optional] 
 **id** | **Number**|  | [optional] 
 **rateTableId** | **Number**|  | [optional] 
 **routingPlanId** | **Number**|  | [optional] 
 **techPrefix** | **String**|  | [optional] 

### Return type

[**InlineResponse200189**](InlineResponse200189.md)

### Authorization

[auth_token](../README.md#auth_token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="trunkTrunkIdPrefixPost"></a>
# **trunkTrunkIdPrefixPost**
> ObjectCreated trunkTrunkIdPrefixPost(trunkId, opts)



Creates new resourceprefix

### Example
```javascript
var DnlApi = require('dnl_api');
var defaultClient = DnlApi.ApiClient.instance;

// Configure API key authorization: auth_token
var auth_token = defaultClient.authentications['auth_token'];
auth_token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//auth_token.apiKeyPrefix = 'Token';

var apiInstance = new DnlApi.TrunkApi();

var trunkId = 789; // Number | Parent trunk id

var opts = { 
  'body': new DnlApi.ResourcePrefixWithIP() // ResourcePrefixWithIP | ResourcePrefix to create
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.trunkTrunkIdPrefixPost(trunkId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **trunkId** | **Number**| Parent trunk id | 
 **body** | [**ResourcePrefixWithIP**](ResourcePrefixWithIP.md)| ResourcePrefix to create | [optional] 

### Return type

[**ObjectCreated**](ObjectCreated.md)

### Authorization

[auth_token](../README.md#auth_token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="trunkTrunkIdReplaceActionListGet"></a>
# **trunkTrunkIdReplaceActionListGet**
> InlineResponse200193 trunkTrunkIdReplaceActionListGet(trunkId, opts)



Gets resourcereplaceactions

### Example
```javascript
var DnlApi = require('dnl_api');
var defaultClient = DnlApi.ApiClient.instance;

// Configure API key authorization: auth_token
var auth_token = defaultClient.authentications['auth_token'];
auth_token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//auth_token.apiKeyPrefix = 'Token';

var apiInstance = new DnlApi.TrunkApi();

var trunkId = 789; // Number | Parent trunk id

var opts = { 
  'page': 56, // Number | 
  'perPage': 56, // Number | 
  'orderBy': "orderBy_example", // String | 
  'orderDir': "orderDir_example", // String | 
  'ani': "ani_example", // String | 
  'aniPrefix': "aniPrefix_example", // String | 
  'dnis': "dnis_example", // String | 
  'dnisPrefix': "dnisPrefix_example", // String | 
  'id': 56, // Number | 
  'type': "type_example" // String | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.trunkTrunkIdReplaceActionListGet(trunkId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **trunkId** | **Number**| Parent trunk id | 
 **page** | **Number**|  | [optional] 
 **perPage** | **Number**|  | [optional] 
 **orderBy** | **String**|  | [optional] 
 **orderDir** | **String**|  | [optional] 
 **ani** | **String**|  | [optional] 
 **aniPrefix** | **String**|  | [optional] 
 **dnis** | **String**|  | [optional] 
 **dnisPrefix** | **String**|  | [optional] 
 **id** | **Number**|  | [optional] 
 **type** | **String**|  | [optional] 

### Return type

[**InlineResponse200193**](InlineResponse200193.md)

### Authorization

[auth_token](../README.md#auth_token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="trunkTrunkIdReplaceActionPost"></a>
# **trunkTrunkIdReplaceActionPost**
> ObjectCreated trunkTrunkIdReplaceActionPost(trunkId, opts)



Creates new resourcereplaceaction

### Example
```javascript
var DnlApi = require('dnl_api');
var defaultClient = DnlApi.ApiClient.instance;

// Configure API key authorization: auth_token
var auth_token = defaultClient.authentications['auth_token'];
auth_token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//auth_token.apiKeyPrefix = 'Token';

var apiInstance = new DnlApi.TrunkApi();

var trunkId = 789; // Number | Parent trunk id

var opts = { 
  'body': new DnlApi.ResourceReplaceAction() // ResourceReplaceAction | ResourceReplaceAction to create
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.trunkTrunkIdReplaceActionPost(trunkId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **trunkId** | **Number**| Parent trunk id | 
 **body** | [**ResourceReplaceAction**](ResourceReplaceAction.md)| ResourceReplaceAction to create | [optional] 

### Return type

[**ObjectCreated**](ObjectCreated.md)

### Authorization

[auth_token](../README.md#auth_token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="trunkTrunkIdSendInteropPatch"></a>
# **trunkTrunkIdSendInteropPatch**
> Success trunkTrunkIdSendInteropPatch(trunkId)





### Example
```javascript
var DnlApi = require('dnl_api');
var defaultClient = DnlApi.ApiClient.instance;

// Configure API key authorization: auth_token
var auth_token = defaultClient.authentications['auth_token'];
auth_token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//auth_token.apiKeyPrefix = 'Token';

var apiInstance = new DnlApi.TrunkApi();

var trunkId = 789; // Number | Trunk to proceed


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.trunkTrunkIdSendInteropPatch(trunkId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **trunkId** | **Number**| Trunk to proceed | 

### Return type

[**Success**](Success.md)

### Authorization

[auth_token](../README.md#auth_token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="trunkUnclaimedListGet"></a>
# **trunkUnclaimedListGet**
> InlineResponse200182 trunkUnclaimedListGet(opts)



Gets trunks

### Example
```javascript
var DnlApi = require('dnl_api');
var defaultClient = DnlApi.ApiClient.instance;

// Configure API key authorization: auth_token
var auth_token = defaultClient.authentications['auth_token'];
auth_token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//auth_token.apiKeyPrefix = 'Token';

var apiInstance = new DnlApi.TrunkApi();

var opts = { 
  'page': 56, // Number | 
  'perPage': 56, // Number | 
  'orderBy': "orderBy_example", // String | 
  'orderDir': "orderDir_example", // String | 
  'active': true, // Boolean | 
  'carrierId': 56, // Number | 
  'direction': "direction_example", // String | 
  'rateTableId': 56, // Number | 
  'trunkId': 56, // Number | 
  'trunkName': "trunkName_example", // String | 
  'type': "type_example", // String | 
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
apiInstance.trunkUnclaimedListGet(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **page** | **Number**|  | [optional] 
 **perPage** | **Number**|  | [optional] 
 **orderBy** | **String**|  | [optional] 
 **orderDir** | **String**|  | [optional] 
 **active** | **Boolean**|  | [optional] 
 **carrierId** | **Number**|  | [optional] 
 **direction** | **String**|  | [optional] 
 **rateTableId** | **Number**|  | [optional] 
 **trunkId** | **Number**|  | [optional] 
 **trunkName** | **String**|  | [optional] 
 **type** | **String**|  | [optional] 
 **updateAtGt** | **String**|  | [optional] 
 **updateAtLt** | **String**|  | [optional] 

### Return type

[**InlineResponse200182**](InlineResponse200182.md)

### Authorization

[auth_token](../README.md#auth_token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


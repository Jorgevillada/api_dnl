# DnlApi.RouteApi

All URIs are relative to *https://198.100.149.164:8000/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**routeAllDelete**](RouteApi.md#routeAllDelete) | **DELETE** /route/all | 
[**routeBlockAllDelete**](RouteApi.md#routeBlockAllDelete) | **DELETE** /route/block/all | 
[**routeBlockListGet**](RouteApi.md#routeBlockListGet) | **GET** /route/block/list | 
[**routeBlockPost**](RouteApi.md#routeBlockPost) | **POST** /route/block | 
[**routeBlockResBlockIdDelete**](RouteApi.md#routeBlockResBlockIdDelete) | **DELETE** /route/block/{res_block_id} | 
[**routeBlockResBlockIdGet**](RouteApi.md#routeBlockResBlockIdGet) | **GET** /route/block/{res_block_id} | 
[**routeBlockResBlockIdPatch**](RouteApi.md#routeBlockResBlockIdPatch) | **PATCH** /route/block/{res_block_id} | 
[**routeDigitMapAllDelete**](RouteApi.md#routeDigitMapAllDelete) | **DELETE** /route/digit_map/all | 
[**routeDigitMapItemAllDelete**](RouteApi.md#routeDigitMapItemAllDelete) | **DELETE** /route/digit_map/item/all | 
[**routeDigitMapItemRefIdDelete**](RouteApi.md#routeDigitMapItemRefIdDelete) | **DELETE** /route/digit_map/item/{ref_id} | 
[**routeDigitMapItemRefIdGet**](RouteApi.md#routeDigitMapItemRefIdGet) | **GET** /route/digit_map/item/{ref_id} | 
[**routeDigitMapItemRefIdPatch**](RouteApi.md#routeDigitMapItemRefIdPatch) | **PATCH** /route/digit_map/item/{ref_id} | 
[**routeDigitMapListGet**](RouteApi.md#routeDigitMapListGet) | **GET** /route/digit_map/list | 
[**routeDigitMapPost**](RouteApi.md#routeDigitMapPost) | **POST** /route/digit_map | 
[**routeDigitMapTranslationIdDelete**](RouteApi.md#routeDigitMapTranslationIdDelete) | **DELETE** /route/digit_map/{translation_id} | 
[**routeDigitMapTranslationIdGet**](RouteApi.md#routeDigitMapTranslationIdGet) | **GET** /route/digit_map/{translation_id} | 
[**routeDigitMapTranslationIdItemListGet**](RouteApi.md#routeDigitMapTranslationIdItemListGet) | **GET** /route/digit_map/{translation_id}/item/list | 
[**routeDigitMapTranslationIdItemPost**](RouteApi.md#routeDigitMapTranslationIdItemPost) | **POST** /route/digit_map/{translation_id}/item | 
[**routeDigitMapTranslationIdPatch**](RouteApi.md#routeDigitMapTranslationIdPatch) | **PATCH** /route/digit_map/{translation_id} | 
[**routeDynamicAllDelete**](RouteApi.md#routeDynamicAllDelete) | **DELETE** /route/dynamic/all | 
[**routeDynamicDynamicRouteIdAddTrunkPost**](RouteApi.md#routeDynamicDynamicRouteIdAddTrunkPost) | **POST** /route/dynamic/{dynamic_route_id}/add_trunk | 
[**routeDynamicDynamicRouteIdAddTrunksPost**](RouteApi.md#routeDynamicDynamicRouteIdAddTrunksPost) | **POST** /route/dynamic/{dynamic_route_id}/add_trunks | 
[**routeDynamicDynamicRouteIdDelete**](RouteApi.md#routeDynamicDynamicRouteIdDelete) | **DELETE** /route/dynamic/{dynamic_route_id} | 
[**routeDynamicDynamicRouteIdGet**](RouteApi.md#routeDynamicDynamicRouteIdGet) | **GET** /route/dynamic/{dynamic_route_id} | 
[**routeDynamicDynamicRouteIdOverrideCreatePost**](RouteApi.md#routeDynamicDynamicRouteIdOverrideCreatePost) | **POST** /route/dynamic/{dynamic_route_id}/override/create | 
[**routeDynamicDynamicRouteIdOverrideListGet**](RouteApi.md#routeDynamicDynamicRouteIdOverrideListGet) | **GET** /route/dynamic/{dynamic_route_id}/override/list | 
[**routeDynamicDynamicRouteIdPatch**](RouteApi.md#routeDynamicDynamicRouteIdPatch) | **PATCH** /route/dynamic/{dynamic_route_id} | 
[**routeDynamicDynamicRouteIdPriCreatePost**](RouteApi.md#routeDynamicDynamicRouteIdPriCreatePost) | **POST** /route/dynamic/{dynamic_route_id}/pri/create | 
[**routeDynamicDynamicRouteIdPriListGet**](RouteApi.md#routeDynamicDynamicRouteIdPriListGet) | **GET** /route/dynamic/{dynamic_route_id}/pri/list | 
[**routeDynamicDynamicRouteIdQosCreatePost**](RouteApi.md#routeDynamicDynamicRouteIdQosCreatePost) | **POST** /route/dynamic/{dynamic_route_id}/qos/create | 
[**routeDynamicDynamicRouteIdQosListGet**](RouteApi.md#routeDynamicDynamicRouteIdQosListGet) | **GET** /route/dynamic/{dynamic_route_id}/qos/list | 
[**routeDynamicDynamicRouteIdRemoveTrunksPatch**](RouteApi.md#routeDynamicDynamicRouteIdRemoveTrunksPatch) | **PATCH** /route/dynamic/{dynamic_route_id}/remove_trunks | 
[**routeDynamicListGet**](RouteApi.md#routeDynamicListGet) | **GET** /route/dynamic/list | 
[**routeDynamicOverrideIdDelete**](RouteApi.md#routeDynamicOverrideIdDelete) | **DELETE** /route/dynamic/override/{id} | 
[**routeDynamicOverrideIdGet**](RouteApi.md#routeDynamicOverrideIdGet) | **GET** /route/dynamic/override/{id} | 
[**routeDynamicOverrideIdPatch**](RouteApi.md#routeDynamicOverrideIdPatch) | **PATCH** /route/dynamic/override/{id} | 
[**routeDynamicPost**](RouteApi.md#routeDynamicPost) | **POST** /route/dynamic | 
[**routeDynamicPriIdDelete**](RouteApi.md#routeDynamicPriIdDelete) | **DELETE** /route/dynamic/pri/{id} | 
[**routeDynamicPriIdGet**](RouteApi.md#routeDynamicPriIdGet) | **GET** /route/dynamic/pri/{id} | 
[**routeDynamicPriIdPatch**](RouteApi.md#routeDynamicPriIdPatch) | **PATCH** /route/dynamic/pri/{id} | 
[**routeDynamicQosIdDelete**](RouteApi.md#routeDynamicQosIdDelete) | **DELETE** /route/dynamic/qos/{id} | 
[**routeDynamicQosIdGet**](RouteApi.md#routeDynamicQosIdGet) | **GET** /route/dynamic/qos/{id} | 
[**routeDynamicQosIdPatch**](RouteApi.md#routeDynamicQosIdPatch) | **PATCH** /route/dynamic/qos/{id} | 
[**routeListGet**](RouteApi.md#routeListGet) | **GET** /route/list | 
[**routePlanAllDelete**](RouteApi.md#routePlanAllDelete) | **DELETE** /route/plan/all | 
[**routePlanListGet**](RouteApi.md#routePlanListGet) | **GET** /route/plan/list | 
[**routePlanPost**](RouteApi.md#routePlanPost) | **POST** /route/plan | 
[**routePlanRoutePlanIdAddRoutePost**](RouteApi.md#routePlanRoutePlanIdAddRoutePost) | **POST** /route/plan/{route_plan_id}/add_route | 
[**routePlanRoutePlanIdDelete**](RouteApi.md#routePlanRoutePlanIdDelete) | **DELETE** /route/plan/{route_plan_id} | 
[**routePlanRoutePlanIdGet**](RouteApi.md#routePlanRoutePlanIdGet) | **GET** /route/plan/{route_plan_id} | 
[**routePlanRoutePlanIdListRoutesGet**](RouteApi.md#routePlanRoutePlanIdListRoutesGet) | **GET** /route/plan/{route_plan_id}/list_routes | 
[**routePlanRoutePlanIdPatch**](RouteApi.md#routePlanRoutePlanIdPatch) | **PATCH** /route/plan/{route_plan_id} | 
[**routeRouteIdDelete**](RouteApi.md#routeRouteIdDelete) | **DELETE** /route/{route_id} | 
[**routeRouteIdGet**](RouteApi.md#routeRouteIdGet) | **GET** /route/{route_id} | 
[**routeRouteIdPatch**](RouteApi.md#routeRouteIdPatch) | **PATCH** /route/{route_id} | 
[**routeStaticAllDelete**](RouteApi.md#routeStaticAllDelete) | **DELETE** /route/static/all | 
[**routeStaticCreatePost**](RouteApi.md#routeStaticCreatePost) | **POST** /route/static/create | 
[**routeStaticItemAllDelete**](RouteApi.md#routeStaticItemAllDelete) | **DELETE** /route/static/item/all | 
[**routeStaticItemItemIdDelete**](RouteApi.md#routeStaticItemItemIdDelete) | **DELETE** /route/static/item/{item_id} | 
[**routeStaticItemItemIdGet**](RouteApi.md#routeStaticItemItemIdGet) | **GET** /route/static/item/{item_id} | 
[**routeStaticItemItemIdPatch**](RouteApi.md#routeStaticItemItemIdPatch) | **PATCH** /route/static/item/{item_id} | 
[**routeStaticListGet**](RouteApi.md#routeStaticListGet) | **GET** /route/static/list | 
[**routeStaticStaticRouteIdDelete**](RouteApi.md#routeStaticStaticRouteIdDelete) | **DELETE** /route/static/{static_route_id} | 
[**routeStaticStaticRouteIdGet**](RouteApi.md#routeStaticStaticRouteIdGet) | **GET** /route/static/{static_route_id} | 
[**routeStaticStaticRouteIdItemCreatePost**](RouteApi.md#routeStaticStaticRouteIdItemCreatePost) | **POST** /route/static/{static_route_id}/item/create | 
[**routeStaticStaticRouteIdItemListGet**](RouteApi.md#routeStaticStaticRouteIdItemListGet) | **GET** /route/static/{static_route_id}/item/list | 
[**routeStaticStaticRouteIdPatch**](RouteApi.md#routeStaticStaticRouteIdPatch) | **PATCH** /route/static/{static_route_id} | 


<a name="routeAllDelete"></a>
# **routeAllDelete**
> InlineResponse2002 routeAllDelete(opts)



Deletes multiple found route

### Example
```javascript
var DnlApi = require('dnl_api');
var defaultClient = DnlApi.ApiClient.instance;

// Configure API key authorization: auth_token
var auth_token = defaultClient.authentications['auth_token'];
auth_token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//auth_token.apiKeyPrefix = 'Token';

var apiInstance = new DnlApi.RouteApi();

var opts = { 
  'aNIPrefix': "aNIPrefix_example", // String | 
  'aNIPrefixGt': "aNIPrefixGt_example", // String | 
  'aNIPrefixLt': "aNIPrefixLt_example", // String | 
  'dNISPrefix': "dNISPrefix_example", // String | 
  'dNISPrefixGt': "dNISPrefixGt_example", // String | 
  'dNISPrefixLt': "dNISPrefixLt_example", // String | 
  'dynamicRouteId': 56, // Number | 
  'dynamicRouteName': "dynamicRouteName_example", // String | 
  'interStaticRouteId': 56, // Number | 
  'intraStaticRouteId': 56, // Number | 
  'intraStaticRouteIdIsnull': true, // Boolean | 
  'routeIdIn': "routeIdIn_example", // String | 
  'routePlanName': "routePlanName_example", // String | 
  'routeTypeFlg': "routeTypeFlg_example", // String | 
  'staticRouteId': 56, // Number | 
  'staticRouteName': "staticRouteName_example", // String | 
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
apiInstance.routeAllDelete(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **aNIPrefix** | **String**|  | [optional] 
 **aNIPrefixGt** | **String**|  | [optional] 
 **aNIPrefixLt** | **String**|  | [optional] 
 **dNISPrefix** | **String**|  | [optional] 
 **dNISPrefixGt** | **String**|  | [optional] 
 **dNISPrefixLt** | **String**|  | [optional] 
 **dynamicRouteId** | **Number**|  | [optional] 
 **dynamicRouteName** | **String**|  | [optional] 
 **interStaticRouteId** | **Number**|  | [optional] 
 **intraStaticRouteId** | **Number**|  | [optional] 
 **intraStaticRouteIdIsnull** | **Boolean**|  | [optional] 
 **routeIdIn** | **String**|  | [optional] 
 **routePlanName** | **String**|  | [optional] 
 **routeTypeFlg** | **String**|  | [optional] 
 **staticRouteId** | **Number**|  | [optional] 
 **staticRouteName** | **String**|  | [optional] 
 **updateAtGt** | **String**|  | [optional] 
 **updateAtLt** | **String**|  | [optional] 

### Return type

[**InlineResponse2002**](InlineResponse2002.md)

### Authorization

[auth_token](../README.md#auth_token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="routeBlockAllDelete"></a>
# **routeBlockAllDelete**
> InlineResponse2002 routeBlockAllDelete(opts)



Deletes multiple found resourceblock

### Example
```javascript
var DnlApi = require('dnl_api');
var defaultClient = DnlApi.ApiClient.instance;

// Configure API key authorization: auth_token
var auth_token = defaultClient.authentications['auth_token'];
auth_token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//auth_token.apiKeyPrefix = 'Token';

var apiInstance = new DnlApi.RouteApi();

var opts = { 
  'aNIMax': 56, // Number | 
  'aNIMin': 56, // Number | 
  'aNIPrefix': "aNIPrefix_example", // String | 
  'dNISMax': 56, // Number | 
  'dNISMin': 56, // Number | 
  'dNISPrefix': "dNISPrefix_example", // String | 
  'blockBy': "blockBy_example", // String | 
  'createTimeGt': "createTimeGt_example", // String | 
  'createTimeLt': "createTimeLt_example", // String | 
  'egressClientId': 56, // Number | 
  'egressClientName': "egressClientName_example", // String | 
  'egressGroupId': 56, // Number | 
  'egressGroupName': "egressGroupName_example", // String | 
  'egressTrunkId': 56, // Number | 
  'egressTrunkName': "egressTrunkName_example", // String | 
  'ingressClientId': 56, // Number | 
  'ingressClientName': "ingressClientName_example", // String | 
  'ingressGroupId': 56, // Number | 
  'ingressGroupName': "ingressGroupName_example", // String | 
  'ingressTrunkId': 56, // Number | 
  'ingressTrunkName': "ingressTrunkName_example", // String | 
  'resBlockIdIn': "resBlockIdIn_example", // String | 
  'timeProfileName': "timeProfileName_example", // String | 
  'updateBy': "updateBy_example" // String | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.routeBlockAllDelete(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **aNIMax** | **Number**|  | [optional] 
 **aNIMin** | **Number**|  | [optional] 
 **aNIPrefix** | **String**|  | [optional] 
 **dNISMax** | **Number**|  | [optional] 
 **dNISMin** | **Number**|  | [optional] 
 **dNISPrefix** | **String**|  | [optional] 
 **blockBy** | **String**|  | [optional] 
 **createTimeGt** | **String**|  | [optional] 
 **createTimeLt** | **String**|  | [optional] 
 **egressClientId** | **Number**|  | [optional] 
 **egressClientName** | **String**|  | [optional] 
 **egressGroupId** | **Number**|  | [optional] 
 **egressGroupName** | **String**|  | [optional] 
 **egressTrunkId** | **Number**|  | [optional] 
 **egressTrunkName** | **String**|  | [optional] 
 **ingressClientId** | **Number**|  | [optional] 
 **ingressClientName** | **String**|  | [optional] 
 **ingressGroupId** | **Number**|  | [optional] 
 **ingressGroupName** | **String**|  | [optional] 
 **ingressTrunkId** | **Number**|  | [optional] 
 **ingressTrunkName** | **String**|  | [optional] 
 **resBlockIdIn** | **String**|  | [optional] 
 **timeProfileName** | **String**|  | [optional] 
 **updateBy** | **String**|  | [optional] 

### Return type

[**InlineResponse2002**](InlineResponse2002.md)

### Authorization

[auth_token](../README.md#auth_token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="routeBlockListGet"></a>
# **routeBlockListGet**
> InlineResponse200171 routeBlockListGet(opts)



Gets resourceblocks

### Example
```javascript
var DnlApi = require('dnl_api');
var defaultClient = DnlApi.ApiClient.instance;

// Configure API key authorization: auth_token
var auth_token = defaultClient.authentications['auth_token'];
auth_token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//auth_token.apiKeyPrefix = 'Token';

var apiInstance = new DnlApi.RouteApi();

var opts = { 
  'page': 56, // Number | 
  'perPage': 56, // Number | 
  'orderBy': "orderBy_example", // String | 
  'orderDir': "orderDir_example", // String | 
  'aNIMax': 56, // Number | 
  'aNIMin': 56, // Number | 
  'aNIPrefix': "aNIPrefix_example", // String | 
  'dNISMax': 56, // Number | 
  'dNISMin': 56, // Number | 
  'dNISPrefix': "dNISPrefix_example", // String | 
  'blockBy': "blockBy_example", // String | 
  'egressClientId': 56, // Number | 
  'egressClientName': "egressClientName_example", // String | 
  'egressGroupId': 56, // Number | 
  'egressGroupName': "egressGroupName_example", // String | 
  'egressTrunkId': 56, // Number | 
  'egressTrunkName': "egressTrunkName_example", // String | 
  'ingressClientId': 56, // Number | 
  'ingressClientName': "ingressClientName_example", // String | 
  'ingressGroupId': 56, // Number | 
  'ingressGroupName': "ingressGroupName_example", // String | 
  'ingressTrunkId': 56, // Number | 
  'ingressTrunkName': "ingressTrunkName_example", // String | 
  'timeProfileName': "timeProfileName_example", // String | 
  'updateBy': "updateBy_example", // String | 
  'createTimeGt': "createTimeGt_example", // String | 
  'createTimeLt': "createTimeLt_example", // String | 
  'resBlockIdIn': "resBlockIdIn_example" // String | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.routeBlockListGet(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **page** | **Number**|  | [optional] 
 **perPage** | **Number**|  | [optional] 
 **orderBy** | **String**|  | [optional] 
 **orderDir** | **String**|  | [optional] 
 **aNIMax** | **Number**|  | [optional] 
 **aNIMin** | **Number**|  | [optional] 
 **aNIPrefix** | **String**|  | [optional] 
 **dNISMax** | **Number**|  | [optional] 
 **dNISMin** | **Number**|  | [optional] 
 **dNISPrefix** | **String**|  | [optional] 
 **blockBy** | **String**|  | [optional] 
 **egressClientId** | **Number**|  | [optional] 
 **egressClientName** | **String**|  | [optional] 
 **egressGroupId** | **Number**|  | [optional] 
 **egressGroupName** | **String**|  | [optional] 
 **egressTrunkId** | **Number**|  | [optional] 
 **egressTrunkName** | **String**|  | [optional] 
 **ingressClientId** | **Number**|  | [optional] 
 **ingressClientName** | **String**|  | [optional] 
 **ingressGroupId** | **Number**|  | [optional] 
 **ingressGroupName** | **String**|  | [optional] 
 **ingressTrunkId** | **Number**|  | [optional] 
 **ingressTrunkName** | **String**|  | [optional] 
 **timeProfileName** | **String**|  | [optional] 
 **updateBy** | **String**|  | [optional] 
 **createTimeGt** | **String**|  | [optional] 
 **createTimeLt** | **String**|  | [optional] 
 **resBlockIdIn** | **String**|  | [optional] 

### Return type

[**InlineResponse200171**](InlineResponse200171.md)

### Authorization

[auth_token](../README.md#auth_token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="routeBlockPost"></a>
# **routeBlockPost**
> ObjectCreated routeBlockPost(opts)



Creates new resourceblock

### Example
```javascript
var DnlApi = require('dnl_api');
var defaultClient = DnlApi.ApiClient.instance;

// Configure API key authorization: auth_token
var auth_token = defaultClient.authentications['auth_token'];
auth_token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//auth_token.apiKeyPrefix = 'Token';

var apiInstance = new DnlApi.RouteApi();

var opts = { 
  'body': new DnlApi.ResourceBlock() // ResourceBlock | ResourceBlock to create
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.routeBlockPost(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**ResourceBlock**](ResourceBlock.md)| ResourceBlock to create | [optional] 

### Return type

[**ObjectCreated**](ObjectCreated.md)

### Authorization

[auth_token](../README.md#auth_token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="routeBlockResBlockIdDelete"></a>
# **routeBlockResBlockIdDelete**
> Success routeBlockResBlockIdDelete(resBlockId)



Deletes resourceblock

### Example
```javascript
var DnlApi = require('dnl_api');
var defaultClient = DnlApi.ApiClient.instance;

// Configure API key authorization: auth_token
var auth_token = defaultClient.authentications['auth_token'];
auth_token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//auth_token.apiKeyPrefix = 'Token';

var apiInstance = new DnlApi.RouteApi();

var resBlockId = 789; // Number | ResourceBlock id to get info about


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.routeBlockResBlockIdDelete(resBlockId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resBlockId** | **Number**| ResourceBlock id to get info about | 

### Return type

[**Success**](Success.md)

### Authorization

[auth_token](../README.md#auth_token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="routeBlockResBlockIdGet"></a>
# **routeBlockResBlockIdGet**
> InlineResponse200170 routeBlockResBlockIdGet(resBlockId)



Gets resourceblock

### Example
```javascript
var DnlApi = require('dnl_api');
var defaultClient = DnlApi.ApiClient.instance;

// Configure API key authorization: auth_token
var auth_token = defaultClient.authentications['auth_token'];
auth_token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//auth_token.apiKeyPrefix = 'Token';

var apiInstance = new DnlApi.RouteApi();

var resBlockId = 789; // Number | ResourceBlock id to get info about


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.routeBlockResBlockIdGet(resBlockId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resBlockId** | **Number**| ResourceBlock id to get info about | 

### Return type

[**InlineResponse200170**](InlineResponse200170.md)

### Authorization

[auth_token](../README.md#auth_token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="routeBlockResBlockIdPatch"></a>
# **routeBlockResBlockIdPatch**
> InlineResponse200170 routeBlockResBlockIdPatch(resBlockId, opts)



Modifies resourceblock

### Example
```javascript
var DnlApi = require('dnl_api');
var defaultClient = DnlApi.ApiClient.instance;

// Configure API key authorization: auth_token
var auth_token = defaultClient.authentications['auth_token'];
auth_token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//auth_token.apiKeyPrefix = 'Token';

var apiInstance = new DnlApi.RouteApi();

var resBlockId = 789; // Number | ResourceBlock id to get info about

var opts = { 
  'body': new DnlApi.ResourceBlock() // ResourceBlock | ResourceBlock to modify
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.routeBlockResBlockIdPatch(resBlockId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resBlockId** | **Number**| ResourceBlock id to get info about | 
 **body** | [**ResourceBlock**](ResourceBlock.md)| ResourceBlock to modify | [optional] 

### Return type

[**InlineResponse200170**](InlineResponse200170.md)

### Authorization

[auth_token](../README.md#auth_token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="routeDigitMapAllDelete"></a>
# **routeDigitMapAllDelete**
> InlineResponse2002 routeDigitMapAllDelete(opts)



Deletes multiple found digittranslation

### Example
```javascript
var DnlApi = require('dnl_api');
var defaultClient = DnlApi.ApiClient.instance;

// Configure API key authorization: auth_token
var auth_token = defaultClient.authentications['auth_token'];
auth_token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//auth_token.apiKeyPrefix = 'Token';

var apiInstance = new DnlApi.RouteApi();

var opts = { 
  'digitMapCount': 56, // Number | 
  'digitMapName': "digitMapName_example", // String | 
  'translationId': 56, // Number | 
  'translationIdIn': "translationIdIn_example", // String | 
  'updateAtGte': "updateAtGte_example", // String | 
  'updateAtLt': "updateAtLt_example" // String | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.routeDigitMapAllDelete(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **digitMapCount** | **Number**|  | [optional] 
 **digitMapName** | **String**|  | [optional] 
 **translationId** | **Number**|  | [optional] 
 **translationIdIn** | **String**|  | [optional] 
 **updateAtGte** | **String**|  | [optional] 
 **updateAtLt** | **String**|  | [optional] 

### Return type

[**InlineResponse2002**](InlineResponse2002.md)

### Authorization

[auth_token](../README.md#auth_token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="routeDigitMapItemAllDelete"></a>
# **routeDigitMapItemAllDelete**
> InlineResponse2002 routeDigitMapItemAllDelete(opts)



Deletes multiple found translationitem

### Example
```javascript
var DnlApi = require('dnl_api');
var defaultClient = DnlApi.ApiClient.instance;

// Configure API key authorization: auth_token
var auth_token = defaultClient.authentications['auth_token'];
auth_token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//auth_token.apiKeyPrefix = 'Token';

var apiInstance = new DnlApi.RouteApi();

var opts = { 
  'aNIPrefix': "aNIPrefix_example", // String | 
  'aNIReplaceTo': "aNIReplaceTo_example", // String | 
  'dNISPrefix': "dNISPrefix_example", // String | 
  'dNISReplaceTo': "dNISReplaceTo_example", // String | 
  'digitMapName': "digitMapName_example" // String | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.routeDigitMapItemAllDelete(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **aNIPrefix** | **String**|  | [optional] 
 **aNIReplaceTo** | **String**|  | [optional] 
 **dNISPrefix** | **String**|  | [optional] 
 **dNISReplaceTo** | **String**|  | [optional] 
 **digitMapName** | **String**|  | [optional] 

### Return type

[**InlineResponse2002**](InlineResponse2002.md)

### Authorization

[auth_token](../README.md#auth_token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="routeDigitMapItemRefIdDelete"></a>
# **routeDigitMapItemRefIdDelete**
> Success routeDigitMapItemRefIdDelete(refId)



Deletes translationitem

### Example
```javascript
var DnlApi = require('dnl_api');
var defaultClient = DnlApi.ApiClient.instance;

// Configure API key authorization: auth_token
var auth_token = defaultClient.authentications['auth_token'];
auth_token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//auth_token.apiKeyPrefix = 'Token';

var apiInstance = new DnlApi.RouteApi();

var refId = 789; // Number | TranslationItem id to get info about


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.routeDigitMapItemRefIdDelete(refId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **refId** | **Number**| TranslationItem id to get info about | 

### Return type

[**Success**](Success.md)

### Authorization

[auth_token](../README.md#auth_token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="routeDigitMapItemRefIdGet"></a>
# **routeDigitMapItemRefIdGet**
> InlineResponse200174 routeDigitMapItemRefIdGet(refId)



Gets translationitem

### Example
```javascript
var DnlApi = require('dnl_api');
var defaultClient = DnlApi.ApiClient.instance;

// Configure API key authorization: auth_token
var auth_token = defaultClient.authentications['auth_token'];
auth_token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//auth_token.apiKeyPrefix = 'Token';

var apiInstance = new DnlApi.RouteApi();

var refId = 789; // Number | TranslationItem id to get info about


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.routeDigitMapItemRefIdGet(refId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **refId** | **Number**| TranslationItem id to get info about | 

### Return type

[**InlineResponse200174**](InlineResponse200174.md)

### Authorization

[auth_token](../README.md#auth_token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="routeDigitMapItemRefIdPatch"></a>
# **routeDigitMapItemRefIdPatch**
> InlineResponse200174 routeDigitMapItemRefIdPatch(refId, opts)



Modifies translationitem

### Example
```javascript
var DnlApi = require('dnl_api');
var defaultClient = DnlApi.ApiClient.instance;

// Configure API key authorization: auth_token
var auth_token = defaultClient.authentications['auth_token'];
auth_token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//auth_token.apiKeyPrefix = 'Token';

var apiInstance = new DnlApi.RouteApi();

var refId = 789; // Number | TranslationItem id to get info about

var opts = { 
  'body': new DnlApi.TranslationItem() // TranslationItem | TranslationItem to modify
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.routeDigitMapItemRefIdPatch(refId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **refId** | **Number**| TranslationItem id to get info about | 
 **body** | [**TranslationItem**](TranslationItem.md)| TranslationItem to modify | [optional] 

### Return type

[**InlineResponse200174**](InlineResponse200174.md)

### Authorization

[auth_token](../README.md#auth_token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="routeDigitMapListGet"></a>
# **routeDigitMapListGet**
> InlineResponse200173 routeDigitMapListGet(opts)



Gets digittranslations

### Example
```javascript
var DnlApi = require('dnl_api');
var defaultClient = DnlApi.ApiClient.instance;

// Configure API key authorization: auth_token
var auth_token = defaultClient.authentications['auth_token'];
auth_token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//auth_token.apiKeyPrefix = 'Token';

var apiInstance = new DnlApi.RouteApi();

var opts = { 
  'page': 56, // Number | 
  'perPage': 56, // Number | 
  'orderBy': "orderBy_example", // String | 
  'orderDir': "orderDir_example", // String | 
  'digitMapCount': 56, // Number | 
  'digitMapName': "digitMapName_example", // String | 
  'translationId': 56, // Number | 
  'translationIdIn': "translationIdIn_example", // String | 
  'updateAtGte': "updateAtGte_example", // String | 
  'updateAtLt': "updateAtLt_example" // String | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.routeDigitMapListGet(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **page** | **Number**|  | [optional] 
 **perPage** | **Number**|  | [optional] 
 **orderBy** | **String**|  | [optional] 
 **orderDir** | **String**|  | [optional] 
 **digitMapCount** | **Number**|  | [optional] 
 **digitMapName** | **String**|  | [optional] 
 **translationId** | **Number**|  | [optional] 
 **translationIdIn** | **String**|  | [optional] 
 **updateAtGte** | **String**|  | [optional] 
 **updateAtLt** | **String**|  | [optional] 

### Return type

[**InlineResponse200173**](InlineResponse200173.md)

### Authorization

[auth_token](../README.md#auth_token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="routeDigitMapPost"></a>
# **routeDigitMapPost**
> ObjectCreated routeDigitMapPost(opts)



Creates new digittranslation

### Example
```javascript
var DnlApi = require('dnl_api');
var defaultClient = DnlApi.ApiClient.instance;

// Configure API key authorization: auth_token
var auth_token = defaultClient.authentications['auth_token'];
auth_token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//auth_token.apiKeyPrefix = 'Token';

var apiInstance = new DnlApi.RouteApi();

var opts = { 
  'body': new DnlApi.DigitTranslation() // DigitTranslation | DigitTranslation to create
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.routeDigitMapPost(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**DigitTranslation**](DigitTranslation.md)| DigitTranslation to create | [optional] 

### Return type

[**ObjectCreated**](ObjectCreated.md)

### Authorization

[auth_token](../README.md#auth_token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="routeDigitMapTranslationIdDelete"></a>
# **routeDigitMapTranslationIdDelete**
> Success routeDigitMapTranslationIdDelete(translationId)



Deletes digittranslation

### Example
```javascript
var DnlApi = require('dnl_api');
var defaultClient = DnlApi.ApiClient.instance;

// Configure API key authorization: auth_token
var auth_token = defaultClient.authentications['auth_token'];
auth_token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//auth_token.apiKeyPrefix = 'Token';

var apiInstance = new DnlApi.RouteApi();

var translationId = 789; // Number | DigitTranslation id to get info about


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.routeDigitMapTranslationIdDelete(translationId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **translationId** | **Number**| DigitTranslation id to get info about | 

### Return type

[**Success**](Success.md)

### Authorization

[auth_token](../README.md#auth_token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="routeDigitMapTranslationIdGet"></a>
# **routeDigitMapTranslationIdGet**
> InlineResponse200172 routeDigitMapTranslationIdGet(translationId)



Gets digittranslation

### Example
```javascript
var DnlApi = require('dnl_api');
var defaultClient = DnlApi.ApiClient.instance;

// Configure API key authorization: auth_token
var auth_token = defaultClient.authentications['auth_token'];
auth_token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//auth_token.apiKeyPrefix = 'Token';

var apiInstance = new DnlApi.RouteApi();

var translationId = 789; // Number | DigitTranslation id to get info about


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.routeDigitMapTranslationIdGet(translationId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **translationId** | **Number**| DigitTranslation id to get info about | 

### Return type

[**InlineResponse200172**](InlineResponse200172.md)

### Authorization

[auth_token](../README.md#auth_token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="routeDigitMapTranslationIdItemListGet"></a>
# **routeDigitMapTranslationIdItemListGet**
> InlineResponse200175 routeDigitMapTranslationIdItemListGet(translationId, opts)



Gets translationitems

### Example
```javascript
var DnlApi = require('dnl_api');
var defaultClient = DnlApi.ApiClient.instance;

// Configure API key authorization: auth_token
var auth_token = defaultClient.authentications['auth_token'];
auth_token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//auth_token.apiKeyPrefix = 'Token';

var apiInstance = new DnlApi.RouteApi();

var translationId = 789; // Number | Parent digit map

var opts = { 
  'page': 56, // Number | 
  'perPage': 56, // Number | 
  'orderBy': "orderBy_example", // String | 
  'orderDir': "orderDir_example", // String | 
  'aNIPrefix': "aNIPrefix_example", // String | 
  'aNIReplaceTo': "aNIReplaceTo_example", // String | 
  'dNISPrefix': "dNISPrefix_example", // String | 
  'dNISReplaceTo': "dNISReplaceTo_example", // String | 
  'digitMapName': "digitMapName_example" // String | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.routeDigitMapTranslationIdItemListGet(translationId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **translationId** | **Number**| Parent digit map | 
 **page** | **Number**|  | [optional] 
 **perPage** | **Number**|  | [optional] 
 **orderBy** | **String**|  | [optional] 
 **orderDir** | **String**|  | [optional] 
 **aNIPrefix** | **String**|  | [optional] 
 **aNIReplaceTo** | **String**|  | [optional] 
 **dNISPrefix** | **String**|  | [optional] 
 **dNISReplaceTo** | **String**|  | [optional] 
 **digitMapName** | **String**|  | [optional] 

### Return type

[**InlineResponse200175**](InlineResponse200175.md)

### Authorization

[auth_token](../README.md#auth_token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="routeDigitMapTranslationIdItemPost"></a>
# **routeDigitMapTranslationIdItemPost**
> ObjectCreated routeDigitMapTranslationIdItemPost(translationId, opts)



Creates new translationitem

### Example
```javascript
var DnlApi = require('dnl_api');
var defaultClient = DnlApi.ApiClient.instance;

// Configure API key authorization: auth_token
var auth_token = defaultClient.authentications['auth_token'];
auth_token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//auth_token.apiKeyPrefix = 'Token';

var apiInstance = new DnlApi.RouteApi();

var translationId = 789; // Number | Parent digit map

var opts = { 
  'body': new DnlApi.TranslationItem() // TranslationItem | TranslationItem to create
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.routeDigitMapTranslationIdItemPost(translationId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **translationId** | **Number**| Parent digit map | 
 **body** | [**TranslationItem**](TranslationItem.md)| TranslationItem to create | [optional] 

### Return type

[**ObjectCreated**](ObjectCreated.md)

### Authorization

[auth_token](../README.md#auth_token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="routeDigitMapTranslationIdPatch"></a>
# **routeDigitMapTranslationIdPatch**
> InlineResponse200172 routeDigitMapTranslationIdPatch(translationId, opts)



Modifies digittranslation

### Example
```javascript
var DnlApi = require('dnl_api');
var defaultClient = DnlApi.ApiClient.instance;

// Configure API key authorization: auth_token
var auth_token = defaultClient.authentications['auth_token'];
auth_token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//auth_token.apiKeyPrefix = 'Token';

var apiInstance = new DnlApi.RouteApi();

var translationId = 789; // Number | DigitTranslation id to get info about

var opts = { 
  'body': new DnlApi.DigitTranslation() // DigitTranslation | DigitTranslation to modify
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.routeDigitMapTranslationIdPatch(translationId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **translationId** | **Number**| DigitTranslation id to get info about | 
 **body** | [**DigitTranslation**](DigitTranslation.md)| DigitTranslation to modify | [optional] 

### Return type

[**InlineResponse200172**](InlineResponse200172.md)

### Authorization

[auth_token](../README.md#auth_token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="routeDynamicAllDelete"></a>
# **routeDynamicAllDelete**
> InlineResponse2002 routeDynamicAllDelete(opts)



Deletes multiple found dynamicroute

### Example
```javascript
var DnlApi = require('dnl_api');
var defaultClient = DnlApi.ApiClient.instance;

// Configure API key authorization: auth_token
var auth_token = defaultClient.authentications['auth_token'];
auth_token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//auth_token.apiKeyPrefix = 'Token';

var apiInstance = new DnlApi.RouteApi();

var opts = { 
  'egressTrunkId': 56, // Number | 
  'modifiedBy': "modifiedBy_example", // String | 
  'name': "name_example", // String | 
  'qosCycle': "qosCycle_example", // String | 
  'routeRuleName': "routeRuleName_example", // String | 
  'timeProfileId': 56, // Number | 
  'timeProfileName': "timeProfileName_example", // String | 
  'usageCount': 56 // Number | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.routeDynamicAllDelete(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **egressTrunkId** | **Number**|  | [optional] 
 **modifiedBy** | **String**|  | [optional] 
 **name** | **String**|  | [optional] 
 **qosCycle** | **String**|  | [optional] 
 **routeRuleName** | **String**|  | [optional] 
 **timeProfileId** | **Number**|  | [optional] 
 **timeProfileName** | **String**|  | [optional] 
 **usageCount** | **Number**|  | [optional] 

### Return type

[**InlineResponse2002**](InlineResponse2002.md)

### Authorization

[auth_token](../README.md#auth_token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="routeDynamicDynamicRouteIdAddTrunkPost"></a>
# **routeDynamicDynamicRouteIdAddTrunkPost**
> ObjectCreated routeDynamicDynamicRouteIdAddTrunkPost(dynamicRouteId, opts)



Creates new dynamicrouteitem

### Example
```javascript
var DnlApi = require('dnl_api');
var defaultClient = DnlApi.ApiClient.instance;

// Configure API key authorization: auth_token
var auth_token = defaultClient.authentications['auth_token'];
auth_token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//auth_token.apiKeyPrefix = 'Token';

var apiInstance = new DnlApi.RouteApi();

var dynamicRouteId = 789; // Number | Parent DynamicRoute

var opts = { 
  'body': new DnlApi.DynamicRouteItem() // DynamicRouteItem | DynamicRouteItem to create
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.routeDynamicDynamicRouteIdAddTrunkPost(dynamicRouteId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **dynamicRouteId** | **Number**| Parent DynamicRoute | 
 **body** | [**DynamicRouteItem**](DynamicRouteItem.md)| DynamicRouteItem to create | [optional] 

### Return type

[**ObjectCreated**](ObjectCreated.md)

### Authorization

[auth_token](../README.md#auth_token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="routeDynamicDynamicRouteIdAddTrunksPost"></a>
# **routeDynamicDynamicRouteIdAddTrunksPost**
> ObjectCreated routeDynamicDynamicRouteIdAddTrunksPost(dynamicRouteId, opts)



Creates new dynamicrouteitem

### Example
```javascript
var DnlApi = require('dnl_api');
var defaultClient = DnlApi.ApiClient.instance;

// Configure API key authorization: auth_token
var auth_token = defaultClient.authentications['auth_token'];
auth_token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//auth_token.apiKeyPrefix = 'Token';

var apiInstance = new DnlApi.RouteApi();

var dynamicRouteId = 789; // Number | Parent DynamicRoute

var opts = { 
  'body': new DnlApi.DynamicRouteItemMultiple() // DynamicRouteItemMultiple | DynamicRouteItem to create
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.routeDynamicDynamicRouteIdAddTrunksPost(dynamicRouteId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **dynamicRouteId** | **Number**| Parent DynamicRoute | 
 **body** | [**DynamicRouteItemMultiple**](DynamicRouteItemMultiple.md)| DynamicRouteItem to create | [optional] 

### Return type

[**ObjectCreated**](ObjectCreated.md)

### Authorization

[auth_token](../README.md#auth_token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="routeDynamicDynamicRouteIdDelete"></a>
# **routeDynamicDynamicRouteIdDelete**
> Success routeDynamicDynamicRouteIdDelete(dynamicRouteId)



Deletes dynamicroute

### Example
```javascript
var DnlApi = require('dnl_api');
var defaultClient = DnlApi.ApiClient.instance;

// Configure API key authorization: auth_token
var auth_token = defaultClient.authentications['auth_token'];
auth_token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//auth_token.apiKeyPrefix = 'Token';

var apiInstance = new DnlApi.RouteApi();

var dynamicRouteId = 789; // Number | DynamicRoute id to get info about


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.routeDynamicDynamicRouteIdDelete(dynamicRouteId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **dynamicRouteId** | **Number**| DynamicRoute id to get info about | 

### Return type

[**Success**](Success.md)

### Authorization

[auth_token](../README.md#auth_token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="routeDynamicDynamicRouteIdGet"></a>
# **routeDynamicDynamicRouteIdGet**
> InlineResponse200162 routeDynamicDynamicRouteIdGet(dynamicRouteId)



Gets dynamicroute

### Example
```javascript
var DnlApi = require('dnl_api');
var defaultClient = DnlApi.ApiClient.instance;

// Configure API key authorization: auth_token
var auth_token = defaultClient.authentications['auth_token'];
auth_token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//auth_token.apiKeyPrefix = 'Token';

var apiInstance = new DnlApi.RouteApi();

var dynamicRouteId = 789; // Number | DynamicRoute id to get info about


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.routeDynamicDynamicRouteIdGet(dynamicRouteId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **dynamicRouteId** | **Number**| DynamicRoute id to get info about | 

### Return type

[**InlineResponse200162**](InlineResponse200162.md)

### Authorization

[auth_token](../README.md#auth_token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="routeDynamicDynamicRouteIdOverrideCreatePost"></a>
# **routeDynamicDynamicRouteIdOverrideCreatePost**
> ObjectCreated routeDynamicDynamicRouteIdOverrideCreatePost(dynamicRouteId, opts)



Creates new dynamicrouteover

### Example
```javascript
var DnlApi = require('dnl_api');
var defaultClient = DnlApi.ApiClient.instance;

// Configure API key authorization: auth_token
var auth_token = defaultClient.authentications['auth_token'];
auth_token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//auth_token.apiKeyPrefix = 'Token';

var apiInstance = new DnlApi.RouteApi();

var dynamicRouteId = 789; // Number | Parent DynamicRoute

var opts = { 
  'body': new DnlApi.DynamicRouteOver() // DynamicRouteOver | DynamicRouteOver to create
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.routeDynamicDynamicRouteIdOverrideCreatePost(dynamicRouteId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **dynamicRouteId** | **Number**| Parent DynamicRoute | 
 **body** | [**DynamicRouteOver**](DynamicRouteOver.md)| DynamicRouteOver to create | [optional] 

### Return type

[**ObjectCreated**](ObjectCreated.md)

### Authorization

[auth_token](../README.md#auth_token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="routeDynamicDynamicRouteIdOverrideListGet"></a>
# **routeDynamicDynamicRouteIdOverrideListGet**
> InlineResponse200169 routeDynamicDynamicRouteIdOverrideListGet(dynamicRouteId, opts)



Gets dynamicrouteover list

### Example
```javascript
var DnlApi = require('dnl_api');
var defaultClient = DnlApi.ApiClient.instance;

// Configure API key authorization: auth_token
var auth_token = defaultClient.authentications['auth_token'];
auth_token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//auth_token.apiKeyPrefix = 'Token';

var apiInstance = new DnlApi.RouteApi();

var dynamicRouteId = 789; // Number | Parent DynamicRoute

var opts = { 
  'page': 56, // Number | 
  'perPage': 56, // Number | 
  'orderBy': "orderBy_example", // String | 
  'orderDir': "orderDir_example", // String | 
  'digits': "digits_example", // String | 
  'id': 56, // Number | 
  'percentage': 56, // Number | 
  'resourceId': 56, // Number | 
  'resourceName': "resourceName_example", // String | 
  'percentageGt': 56, // Number | 
  'percentageLt': 56 // Number | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.routeDynamicDynamicRouteIdOverrideListGet(dynamicRouteId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **dynamicRouteId** | **Number**| Parent DynamicRoute | 
 **page** | **Number**|  | [optional] 
 **perPage** | **Number**|  | [optional] 
 **orderBy** | **String**|  | [optional] 
 **orderDir** | **String**|  | [optional] 
 **digits** | **String**|  | [optional] 
 **id** | **Number**|  | [optional] 
 **percentage** | **Number**|  | [optional] 
 **resourceId** | **Number**|  | [optional] 
 **resourceName** | **String**|  | [optional] 
 **percentageGt** | **Number**|  | [optional] 
 **percentageLt** | **Number**|  | [optional] 

### Return type

[**InlineResponse200169**](InlineResponse200169.md)

### Authorization

[auth_token](../README.md#auth_token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="routeDynamicDynamicRouteIdPatch"></a>
# **routeDynamicDynamicRouteIdPatch**
> InlineResponse200162 routeDynamicDynamicRouteIdPatch(dynamicRouteId, opts)



Modifies dynamicroute

### Example
```javascript
var DnlApi = require('dnl_api');
var defaultClient = DnlApi.ApiClient.instance;

// Configure API key authorization: auth_token
var auth_token = defaultClient.authentications['auth_token'];
auth_token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//auth_token.apiKeyPrefix = 'Token';

var apiInstance = new DnlApi.RouteApi();

var dynamicRouteId = 789; // Number | DynamicRoute id to get info about

var opts = { 
  'body': new DnlApi.DynamicRoute() // DynamicRoute | DynamicRoute to modify
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.routeDynamicDynamicRouteIdPatch(dynamicRouteId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **dynamicRouteId** | **Number**| DynamicRoute id to get info about | 
 **body** | [**DynamicRoute**](DynamicRoute.md)| DynamicRoute to modify | [optional] 

### Return type

[**InlineResponse200162**](InlineResponse200162.md)

### Authorization

[auth_token](../README.md#auth_token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="routeDynamicDynamicRouteIdPriCreatePost"></a>
# **routeDynamicDynamicRouteIdPriCreatePost**
> ObjectCreated routeDynamicDynamicRouteIdPriCreatePost(dynamicRouteId, opts)



Creates new dynamicroutepri

### Example
```javascript
var DnlApi = require('dnl_api');
var defaultClient = DnlApi.ApiClient.instance;

// Configure API key authorization: auth_token
var auth_token = defaultClient.authentications['auth_token'];
auth_token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//auth_token.apiKeyPrefix = 'Token';

var apiInstance = new DnlApi.RouteApi();

var dynamicRouteId = 789; // Number | Parent DynamicRoute

var opts = { 
  'body': new DnlApi.DynamicRoutePri() // DynamicRoutePri | DynamicRoutePri to create
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.routeDynamicDynamicRouteIdPriCreatePost(dynamicRouteId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **dynamicRouteId** | **Number**| Parent DynamicRoute | 
 **body** | [**DynamicRoutePri**](DynamicRoutePri.md)| DynamicRoutePri to create | [optional] 

### Return type

[**ObjectCreated**](ObjectCreated.md)

### Authorization

[auth_token](../README.md#auth_token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="routeDynamicDynamicRouteIdPriListGet"></a>
# **routeDynamicDynamicRouteIdPriListGet**
> InlineResponse200167 routeDynamicDynamicRouteIdPriListGet(dynamicRouteId, opts)



Gets dynamicroutepri list

### Example
```javascript
var DnlApi = require('dnl_api');
var defaultClient = DnlApi.ApiClient.instance;

// Configure API key authorization: auth_token
var auth_token = defaultClient.authentications['auth_token'];
auth_token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//auth_token.apiKeyPrefix = 'Token';

var apiInstance = new DnlApi.RouteApi();

var dynamicRouteId = 789; // Number | Parent DynamicRoute

var opts = { 
  'page': 56, // Number | 
  'perPage': 56, // Number | 
  'orderBy': "orderBy_example", // String | 
  'orderDir': "orderDir_example", // String | 
  'digits': "digits_example", // String | 
  'id': 56, // Number | 
  'resourceId': 56, // Number | 
  'resourcePriGt': 56, // Number | 
  'resourcePriLt': 56 // Number | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.routeDynamicDynamicRouteIdPriListGet(dynamicRouteId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **dynamicRouteId** | **Number**| Parent DynamicRoute | 
 **page** | **Number**|  | [optional] 
 **perPage** | **Number**|  | [optional] 
 **orderBy** | **String**|  | [optional] 
 **orderDir** | **String**|  | [optional] 
 **digits** | **String**|  | [optional] 
 **id** | **Number**|  | [optional] 
 **resourceId** | **Number**|  | [optional] 
 **resourcePriGt** | **Number**|  | [optional] 
 **resourcePriLt** | **Number**|  | [optional] 

### Return type

[**InlineResponse200167**](InlineResponse200167.md)

### Authorization

[auth_token](../README.md#auth_token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="routeDynamicDynamicRouteIdQosCreatePost"></a>
# **routeDynamicDynamicRouteIdQosCreatePost**
> ObjectCreated routeDynamicDynamicRouteIdQosCreatePost(dynamicRouteId, opts)



Creates new dynamicrouteqos

### Example
```javascript
var DnlApi = require('dnl_api');
var defaultClient = DnlApi.ApiClient.instance;

// Configure API key authorization: auth_token
var auth_token = defaultClient.authentications['auth_token'];
auth_token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//auth_token.apiKeyPrefix = 'Token';

var apiInstance = new DnlApi.RouteApi();

var dynamicRouteId = 789; // Number | Parent DynamicRoute

var opts = { 
  'body': new DnlApi.DynamicRouteQos() // DynamicRouteQos | DynamicRouteQos to create
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.routeDynamicDynamicRouteIdQosCreatePost(dynamicRouteId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **dynamicRouteId** | **Number**| Parent DynamicRoute | 
 **body** | [**DynamicRouteQos**](DynamicRouteQos.md)| DynamicRouteQos to create | [optional] 

### Return type

[**ObjectCreated**](ObjectCreated.md)

### Authorization

[auth_token](../README.md#auth_token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="routeDynamicDynamicRouteIdQosListGet"></a>
# **routeDynamicDynamicRouteIdQosListGet**
> InlineResponse200165 routeDynamicDynamicRouteIdQosListGet(dynamicRouteId, opts)



Gets dynamicrouteqos list

### Example
```javascript
var DnlApi = require('dnl_api');
var defaultClient = DnlApi.ApiClient.instance;

// Configure API key authorization: auth_token
var auth_token = defaultClient.authentications['auth_token'];
auth_token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//auth_token.apiKeyPrefix = 'Token';

var apiInstance = new DnlApi.RouteApi();

var dynamicRouteId = 789; // Number | Parent DynamicRoute

var opts = { 
  'page': 56, // Number | 
  'perPage': 56, // Number | 
  'orderBy': "orderBy_example", // String | 
  'orderDir': "orderDir_example", // String | 
  'digits': "digits_example", // String | 
  'id': 56, // Number | 
  'limitPriceGt': "limitPriceGt_example", // String | 
  'limitPriceLt': "limitPriceLt_example", // String | 
  'maxAcdGt': "maxAcdGt_example", // String | 
  'maxAcdLt': "maxAcdLt_example", // String | 
  'maxAsrGt': "maxAsrGt_example", // String | 
  'maxAsrLt': "maxAsrLt_example", // String | 
  'minAcdGt': "minAcdGt_example", // String | 
  'minAcdLt': "minAcdLt_example", // String | 
  'minAlocGt': "minAlocGt_example", // String | 
  'minAlocLt': "minAlocLt_example", // String | 
  'minAsrGt': "minAsrGt_example", // String | 
  'minAsrLt': "minAsrLt_example", // String | 
  'minPddGt': 56, // Number | 
  'minPddLt': 56 // Number | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.routeDynamicDynamicRouteIdQosListGet(dynamicRouteId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **dynamicRouteId** | **Number**| Parent DynamicRoute | 
 **page** | **Number**|  | [optional] 
 **perPage** | **Number**|  | [optional] 
 **orderBy** | **String**|  | [optional] 
 **orderDir** | **String**|  | [optional] 
 **digits** | **String**|  | [optional] 
 **id** | **Number**|  | [optional] 
 **limitPriceGt** | **String**|  | [optional] 
 **limitPriceLt** | **String**|  | [optional] 
 **maxAcdGt** | **String**|  | [optional] 
 **maxAcdLt** | **String**|  | [optional] 
 **maxAsrGt** | **String**|  | [optional] 
 **maxAsrLt** | **String**|  | [optional] 
 **minAcdGt** | **String**|  | [optional] 
 **minAcdLt** | **String**|  | [optional] 
 **minAlocGt** | **String**|  | [optional] 
 **minAlocLt** | **String**|  | [optional] 
 **minAsrGt** | **String**|  | [optional] 
 **minAsrLt** | **String**|  | [optional] 
 **minPddGt** | **Number**|  | [optional] 
 **minPddLt** | **Number**|  | [optional] 

### Return type

[**InlineResponse200165**](InlineResponse200165.md)

### Authorization

[auth_token](../README.md#auth_token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="routeDynamicDynamicRouteIdRemoveTrunksPatch"></a>
# **routeDynamicDynamicRouteIdRemoveTrunksPatch**
> Success routeDynamicDynamicRouteIdRemoveTrunksPatch(dynamicRouteId, opts)





### Example
```javascript
var DnlApi = require('dnl_api');
var defaultClient = DnlApi.ApiClient.instance;

// Configure API key authorization: auth_token
var auth_token = defaultClient.authentications['auth_token'];
auth_token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//auth_token.apiKeyPrefix = 'Token';

var apiInstance = new DnlApi.RouteApi();

var dynamicRouteId = 789; // Number | Parent DynamicRoute

var opts = { 
  'body': new DnlApi.DynamicRouteItemMultiple() // DynamicRouteItemMultiple | Trunks to remove
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.routeDynamicDynamicRouteIdRemoveTrunksPatch(dynamicRouteId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **dynamicRouteId** | **Number**| Parent DynamicRoute | 
 **body** | [**DynamicRouteItemMultiple**](DynamicRouteItemMultiple.md)| Trunks to remove | [optional] 

### Return type

[**Success**](Success.md)

### Authorization

[auth_token](../README.md#auth_token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="routeDynamicListGet"></a>
# **routeDynamicListGet**
> InlineResponse200163 routeDynamicListGet(opts)



Gets dynamicroutes

### Example
```javascript
var DnlApi = require('dnl_api');
var defaultClient = DnlApi.ApiClient.instance;

// Configure API key authorization: auth_token
var auth_token = defaultClient.authentications['auth_token'];
auth_token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//auth_token.apiKeyPrefix = 'Token';

var apiInstance = new DnlApi.RouteApi();

var opts = { 
  'page': 56, // Number | 
  'perPage': 56, // Number | 
  'orderBy': "orderBy_example", // String | 
  'orderDir': "orderDir_example", // String | 
  'egressTrunkId': 56, // Number | 
  'modifiedBy': "modifiedBy_example", // String | 
  'name': "name_example", // String | 
  'qosCycle': "qosCycle_example", // String | 
  'routeRuleName': "routeRuleName_example", // String | 
  'timeProfileId': 56, // Number | 
  'timeProfileName': "timeProfileName_example", // String | 
  'usageCount': 56 // Number | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.routeDynamicListGet(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **page** | **Number**|  | [optional] 
 **perPage** | **Number**|  | [optional] 
 **orderBy** | **String**|  | [optional] 
 **orderDir** | **String**|  | [optional] 
 **egressTrunkId** | **Number**|  | [optional] 
 **modifiedBy** | **String**|  | [optional] 
 **name** | **String**|  | [optional] 
 **qosCycle** | **String**|  | [optional] 
 **routeRuleName** | **String**|  | [optional] 
 **timeProfileId** | **Number**|  | [optional] 
 **timeProfileName** | **String**|  | [optional] 
 **usageCount** | **Number**|  | [optional] 

### Return type

[**InlineResponse200163**](InlineResponse200163.md)

### Authorization

[auth_token](../README.md#auth_token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="routeDynamicOverrideIdDelete"></a>
# **routeDynamicOverrideIdDelete**
> Success routeDynamicOverrideIdDelete(id)



Deletes dynamicrouteover

### Example
```javascript
var DnlApi = require('dnl_api');
var defaultClient = DnlApi.ApiClient.instance;

// Configure API key authorization: auth_token
var auth_token = defaultClient.authentications['auth_token'];
auth_token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//auth_token.apiKeyPrefix = 'Token';

var apiInstance = new DnlApi.RouteApi();

var id = 789; // Number | DynamicRouteOver id to get info about


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.routeDynamicOverrideIdDelete(id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| DynamicRouteOver id to get info about | 

### Return type

[**Success**](Success.md)

### Authorization

[auth_token](../README.md#auth_token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="routeDynamicOverrideIdGet"></a>
# **routeDynamicOverrideIdGet**
> InlineResponse200168 routeDynamicOverrideIdGet(id)



Gets dynamicrouteover

### Example
```javascript
var DnlApi = require('dnl_api');
var defaultClient = DnlApi.ApiClient.instance;

// Configure API key authorization: auth_token
var auth_token = defaultClient.authentications['auth_token'];
auth_token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//auth_token.apiKeyPrefix = 'Token';

var apiInstance = new DnlApi.RouteApi();

var id = 789; // Number | DynamicRouteOver id to get info about


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.routeDynamicOverrideIdGet(id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| DynamicRouteOver id to get info about | 

### Return type

[**InlineResponse200168**](InlineResponse200168.md)

### Authorization

[auth_token](../README.md#auth_token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="routeDynamicOverrideIdPatch"></a>
# **routeDynamicOverrideIdPatch**
> InlineResponse200168 routeDynamicOverrideIdPatch(id, opts)



Modifies dynamicrouteover

### Example
```javascript
var DnlApi = require('dnl_api');
var defaultClient = DnlApi.ApiClient.instance;

// Configure API key authorization: auth_token
var auth_token = defaultClient.authentications['auth_token'];
auth_token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//auth_token.apiKeyPrefix = 'Token';

var apiInstance = new DnlApi.RouteApi();

var id = 789; // Number | DynamicRouteOver id to get info about

var opts = { 
  'body': new DnlApi.DynamicRouteOver() // DynamicRouteOver | DynamicRouteOver to modify
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.routeDynamicOverrideIdPatch(id, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| DynamicRouteOver id to get info about | 
 **body** | [**DynamicRouteOver**](DynamicRouteOver.md)| DynamicRouteOver to modify | [optional] 

### Return type

[**InlineResponse200168**](InlineResponse200168.md)

### Authorization

[auth_token](../README.md#auth_token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="routeDynamicPost"></a>
# **routeDynamicPost**
> ObjectCreated routeDynamicPost(opts)



Creates new dynamicroute

### Example
```javascript
var DnlApi = require('dnl_api');
var defaultClient = DnlApi.ApiClient.instance;

// Configure API key authorization: auth_token
var auth_token = defaultClient.authentications['auth_token'];
auth_token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//auth_token.apiKeyPrefix = 'Token';

var apiInstance = new DnlApi.RouteApi();

var opts = { 
  'body': new DnlApi.DynamicRoute() // DynamicRoute | DynamicRoute to create
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.routeDynamicPost(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**DynamicRoute**](DynamicRoute.md)| DynamicRoute to create | [optional] 

### Return type

[**ObjectCreated**](ObjectCreated.md)

### Authorization

[auth_token](../README.md#auth_token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="routeDynamicPriIdDelete"></a>
# **routeDynamicPriIdDelete**
> Success routeDynamicPriIdDelete(id)



Deletes dynamicroutepri

### Example
```javascript
var DnlApi = require('dnl_api');
var defaultClient = DnlApi.ApiClient.instance;

// Configure API key authorization: auth_token
var auth_token = defaultClient.authentications['auth_token'];
auth_token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//auth_token.apiKeyPrefix = 'Token';

var apiInstance = new DnlApi.RouteApi();

var id = 789; // Number | DynamicRoutePri id to get info about


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.routeDynamicPriIdDelete(id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| DynamicRoutePri id to get info about | 

### Return type

[**Success**](Success.md)

### Authorization

[auth_token](../README.md#auth_token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="routeDynamicPriIdGet"></a>
# **routeDynamicPriIdGet**
> InlineResponse200166 routeDynamicPriIdGet(id)



Gets dynamicroutepri

### Example
```javascript
var DnlApi = require('dnl_api');
var defaultClient = DnlApi.ApiClient.instance;

// Configure API key authorization: auth_token
var auth_token = defaultClient.authentications['auth_token'];
auth_token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//auth_token.apiKeyPrefix = 'Token';

var apiInstance = new DnlApi.RouteApi();

var id = 789; // Number | DynamicRoutePri id to get info about


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.routeDynamicPriIdGet(id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| DynamicRoutePri id to get info about | 

### Return type

[**InlineResponse200166**](InlineResponse200166.md)

### Authorization

[auth_token](../README.md#auth_token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="routeDynamicPriIdPatch"></a>
# **routeDynamicPriIdPatch**
> InlineResponse200166 routeDynamicPriIdPatch(id, opts)



Modifies dynamicroutepri

### Example
```javascript
var DnlApi = require('dnl_api');
var defaultClient = DnlApi.ApiClient.instance;

// Configure API key authorization: auth_token
var auth_token = defaultClient.authentications['auth_token'];
auth_token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//auth_token.apiKeyPrefix = 'Token';

var apiInstance = new DnlApi.RouteApi();

var id = 789; // Number | DynamicRoutePri id to get info about

var opts = { 
  'body': new DnlApi.DynamicRoutePri() // DynamicRoutePri | DynamicRoutePri to modify
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.routeDynamicPriIdPatch(id, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| DynamicRoutePri id to get info about | 
 **body** | [**DynamicRoutePri**](DynamicRoutePri.md)| DynamicRoutePri to modify | [optional] 

### Return type

[**InlineResponse200166**](InlineResponse200166.md)

### Authorization

[auth_token](../README.md#auth_token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="routeDynamicQosIdDelete"></a>
# **routeDynamicQosIdDelete**
> Success routeDynamicQosIdDelete(id)



Deletes dynamicrouteqos

### Example
```javascript
var DnlApi = require('dnl_api');
var defaultClient = DnlApi.ApiClient.instance;

// Configure API key authorization: auth_token
var auth_token = defaultClient.authentications['auth_token'];
auth_token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//auth_token.apiKeyPrefix = 'Token';

var apiInstance = new DnlApi.RouteApi();

var id = 789; // Number | DynamicRouteQos id to get info about


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.routeDynamicQosIdDelete(id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| DynamicRouteQos id to get info about | 

### Return type

[**Success**](Success.md)

### Authorization

[auth_token](../README.md#auth_token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="routeDynamicQosIdGet"></a>
# **routeDynamicQosIdGet**
> InlineResponse200164 routeDynamicQosIdGet(id)



Gets dynamicrouteqos

### Example
```javascript
var DnlApi = require('dnl_api');
var defaultClient = DnlApi.ApiClient.instance;

// Configure API key authorization: auth_token
var auth_token = defaultClient.authentications['auth_token'];
auth_token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//auth_token.apiKeyPrefix = 'Token';

var apiInstance = new DnlApi.RouteApi();

var id = 789; // Number | DynamicRouteQos id to get info about


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.routeDynamicQosIdGet(id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| DynamicRouteQos id to get info about | 

### Return type

[**InlineResponse200164**](InlineResponse200164.md)

### Authorization

[auth_token](../README.md#auth_token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="routeDynamicQosIdPatch"></a>
# **routeDynamicQosIdPatch**
> InlineResponse200164 routeDynamicQosIdPatch(id, opts)



Modifies dynamicrouteqos

### Example
```javascript
var DnlApi = require('dnl_api');
var defaultClient = DnlApi.ApiClient.instance;

// Configure API key authorization: auth_token
var auth_token = defaultClient.authentications['auth_token'];
auth_token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//auth_token.apiKeyPrefix = 'Token';

var apiInstance = new DnlApi.RouteApi();

var id = 789; // Number | DynamicRouteQos id to get info about

var opts = { 
  'body': new DnlApi.DynamicRouteQos() // DynamicRouteQos | DynamicRouteQos to modify
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.routeDynamicQosIdPatch(id, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| DynamicRouteQos id to get info about | 
 **body** | [**DynamicRouteQos**](DynamicRouteQos.md)| DynamicRouteQos to modify | [optional] 

### Return type

[**InlineResponse200164**](InlineResponse200164.md)

### Authorization

[auth_token](../README.md#auth_token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="routeListGet"></a>
# **routeListGet**
> InlineResponse200161 routeListGet(opts)



Gets routes

### Example
```javascript
var DnlApi = require('dnl_api');
var defaultClient = DnlApi.ApiClient.instance;

// Configure API key authorization: auth_token
var auth_token = defaultClient.authentications['auth_token'];
auth_token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//auth_token.apiKeyPrefix = 'Token';

var apiInstance = new DnlApi.RouteApi();

var opts = { 
  'page': 56, // Number | 
  'perPage': 56, // Number | 
  'orderBy': "orderBy_example", // String | 
  'orderDir': "orderDir_example", // String | 
  'aNIPrefix': "aNIPrefix_example", // String | 
  'dNISPrefix': "dNISPrefix_example", // String | 
  'dynamicRouteId': 56, // Number | 
  'dynamicRouteName': "dynamicRouteName_example", // String | 
  'interStaticRouteId': 56, // Number | 
  'intraStaticRouteId': 56, // Number | 
  'routePlanName': "routePlanName_example", // String | 
  'routeTypeFlg': "routeTypeFlg_example", // String | 
  'staticRouteId': 56, // Number | 
  'staticRouteName': "staticRouteName_example", // String | 
  'aNIPrefixGt': "aNIPrefixGt_example", // String | 
  'aNIPrefixLt': "aNIPrefixLt_example", // String | 
  'dNISPrefixGt': "dNISPrefixGt_example", // String | 
  'dNISPrefixLt': "dNISPrefixLt_example", // String | 
  'intraStaticRouteIdIsnull': true, // Boolean | 
  'routeIdIn': "routeIdIn_example", // String | 
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
apiInstance.routeListGet(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **page** | **Number**|  | [optional] 
 **perPage** | **Number**|  | [optional] 
 **orderBy** | **String**|  | [optional] 
 **orderDir** | **String**|  | [optional] 
 **aNIPrefix** | **String**|  | [optional] 
 **dNISPrefix** | **String**|  | [optional] 
 **dynamicRouteId** | **Number**|  | [optional] 
 **dynamicRouteName** | **String**|  | [optional] 
 **interStaticRouteId** | **Number**|  | [optional] 
 **intraStaticRouteId** | **Number**|  | [optional] 
 **routePlanName** | **String**|  | [optional] 
 **routeTypeFlg** | **String**|  | [optional] 
 **staticRouteId** | **Number**|  | [optional] 
 **staticRouteName** | **String**|  | [optional] 
 **aNIPrefixGt** | **String**|  | [optional] 
 **aNIPrefixLt** | **String**|  | [optional] 
 **dNISPrefixGt** | **String**|  | [optional] 
 **dNISPrefixLt** | **String**|  | [optional] 
 **intraStaticRouteIdIsnull** | **Boolean**|  | [optional] 
 **routeIdIn** | **String**|  | [optional] 
 **updateAtGt** | **String**|  | [optional] 
 **updateAtLt** | **String**|  | [optional] 

### Return type

[**InlineResponse200161**](InlineResponse200161.md)

### Authorization

[auth_token](../README.md#auth_token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="routePlanAllDelete"></a>
# **routePlanAllDelete**
> InlineResponse2002 routePlanAllDelete(opts)



Deletes multiple found routestrategy

### Example
```javascript
var DnlApi = require('dnl_api');
var defaultClient = DnlApi.ApiClient.instance;

// Configure API key authorization: auth_token
var auth_token = defaultClient.authentications['auth_token'];
auth_token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//auth_token.apiKeyPrefix = 'Token';

var apiInstance = new DnlApi.RouteApi();

var opts = { 
  'isVirtual': true, // Boolean | 
  'name': "name_example", // String | 
  'routePlanId': 56, // Number | 
  'routePlanIdIn': "routePlanIdIn_example", // String | 
  'updateAtGt': "updateAtGt_example", // String | 
  'updateAtLt': "updateAtLt_example", // String | 
  'updateBy': "updateBy_example", // String | 
  'usageCount': 56 // Number | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.routePlanAllDelete(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **isVirtual** | **Boolean**|  | [optional] 
 **name** | **String**|  | [optional] 
 **routePlanId** | **Number**|  | [optional] 
 **routePlanIdIn** | **String**|  | [optional] 
 **updateAtGt** | **String**|  | [optional] 
 **updateAtLt** | **String**|  | [optional] 
 **updateBy** | **String**|  | [optional] 
 **usageCount** | **Number**|  | [optional] 

### Return type

[**InlineResponse2002**](InlineResponse2002.md)

### Authorization

[auth_token](../README.md#auth_token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="routePlanListGet"></a>
# **routePlanListGet**
> InlineResponse200155 routePlanListGet(opts)



Gets routestrategys

### Example
```javascript
var DnlApi = require('dnl_api');
var defaultClient = DnlApi.ApiClient.instance;

// Configure API key authorization: auth_token
var auth_token = defaultClient.authentications['auth_token'];
auth_token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//auth_token.apiKeyPrefix = 'Token';

var apiInstance = new DnlApi.RouteApi();

var opts = { 
  'page': 56, // Number | 
  'perPage': 56, // Number | 
  'orderBy': "orderBy_example", // String | 
  'orderDir': "orderDir_example", // String | 
  'isVirtual': true, // Boolean | 
  'name': "name_example", // String | 
  'routePlanId': 56, // Number | 
  'updateBy': "updateBy_example", // String | 
  'usageCount': 56, // Number | 
  'routePlanIdIn': "routePlanIdIn_example", // String | 
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
apiInstance.routePlanListGet(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **page** | **Number**|  | [optional] 
 **perPage** | **Number**|  | [optional] 
 **orderBy** | **String**|  | [optional] 
 **orderDir** | **String**|  | [optional] 
 **isVirtual** | **Boolean**|  | [optional] 
 **name** | **String**|  | [optional] 
 **routePlanId** | **Number**|  | [optional] 
 **updateBy** | **String**|  | [optional] 
 **usageCount** | **Number**|  | [optional] 
 **routePlanIdIn** | **String**|  | [optional] 
 **updateAtGt** | **String**|  | [optional] 
 **updateAtLt** | **String**|  | [optional] 

### Return type

[**InlineResponse200155**](InlineResponse200155.md)

### Authorization

[auth_token](../README.md#auth_token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="routePlanPost"></a>
# **routePlanPost**
> ObjectCreated routePlanPost(opts)



Creates new routestrategy

### Example
```javascript
var DnlApi = require('dnl_api');
var defaultClient = DnlApi.ApiClient.instance;

// Configure API key authorization: auth_token
var auth_token = defaultClient.authentications['auth_token'];
auth_token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//auth_token.apiKeyPrefix = 'Token';

var apiInstance = new DnlApi.RouteApi();

var opts = { 
  'body': new DnlApi.RouteStrategy() // RouteStrategy | RouteStrategy to create
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.routePlanPost(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**RouteStrategy**](RouteStrategy.md)| RouteStrategy to create | [optional] 

### Return type

[**ObjectCreated**](ObjectCreated.md)

### Authorization

[auth_token](../README.md#auth_token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="routePlanRoutePlanIdAddRoutePost"></a>
# **routePlanRoutePlanIdAddRoutePost**
> ObjectCreated routePlanRoutePlanIdAddRoutePost(routePlanId, opts)



Creates new route

### Example
```javascript
var DnlApi = require('dnl_api');
var defaultClient = DnlApi.ApiClient.instance;

// Configure API key authorization: auth_token
var auth_token = defaultClient.authentications['auth_token'];
auth_token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//auth_token.apiKeyPrefix = 'Token';

var apiInstance = new DnlApi.RouteApi();

var routePlanId = 789; // Number | Parent route plan id

var opts = { 
  'body': new DnlApi.Route() // Route | Route to create
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.routePlanRoutePlanIdAddRoutePost(routePlanId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **routePlanId** | **Number**| Parent route plan id | 
 **body** | [**Route**](Route.md)| Route to create | [optional] 

### Return type

[**ObjectCreated**](ObjectCreated.md)

### Authorization

[auth_token](../README.md#auth_token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="routePlanRoutePlanIdDelete"></a>
# **routePlanRoutePlanIdDelete**
> Success routePlanRoutePlanIdDelete(routePlanId)



Deletes routestrategy

### Example
```javascript
var DnlApi = require('dnl_api');
var defaultClient = DnlApi.ApiClient.instance;

// Configure API key authorization: auth_token
var auth_token = defaultClient.authentications['auth_token'];
auth_token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//auth_token.apiKeyPrefix = 'Token';

var apiInstance = new DnlApi.RouteApi();

var routePlanId = 789; // Number | RouteStrategy id to get info about


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.routePlanRoutePlanIdDelete(routePlanId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **routePlanId** | **Number**| RouteStrategy id to get info about | 

### Return type

[**Success**](Success.md)

### Authorization

[auth_token](../README.md#auth_token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="routePlanRoutePlanIdGet"></a>
# **routePlanRoutePlanIdGet**
> InlineResponse200154 routePlanRoutePlanIdGet(routePlanId)



Gets routestrategy

### Example
```javascript
var DnlApi = require('dnl_api');
var defaultClient = DnlApi.ApiClient.instance;

// Configure API key authorization: auth_token
var auth_token = defaultClient.authentications['auth_token'];
auth_token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//auth_token.apiKeyPrefix = 'Token';

var apiInstance = new DnlApi.RouteApi();

var routePlanId = 789; // Number | RouteStrategy id to get info about


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.routePlanRoutePlanIdGet(routePlanId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **routePlanId** | **Number**| RouteStrategy id to get info about | 

### Return type

[**InlineResponse200154**](InlineResponse200154.md)

### Authorization

[auth_token](../README.md#auth_token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="routePlanRoutePlanIdListRoutesGet"></a>
# **routePlanRoutePlanIdListRoutesGet**
> InlineResponse200161 routePlanRoutePlanIdListRoutesGet(routePlanId, opts)



Gets routes

### Example
```javascript
var DnlApi = require('dnl_api');
var defaultClient = DnlApi.ApiClient.instance;

// Configure API key authorization: auth_token
var auth_token = defaultClient.authentications['auth_token'];
auth_token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//auth_token.apiKeyPrefix = 'Token';

var apiInstance = new DnlApi.RouteApi();

var routePlanId = 789; // Number | Parent route plan id

var opts = { 
  'page': 56, // Number | 
  'perPage': 56, // Number | 
  'orderBy': "orderBy_example", // String | 
  'orderDir': "orderDir_example", // String | 
  'aNIPrefix': "aNIPrefix_example", // String | 
  'dNISPrefix': "dNISPrefix_example", // String | 
  'dynamicRouteId': 56, // Number | 
  'dynamicRouteName': "dynamicRouteName_example", // String | 
  'interStaticRouteId': 56, // Number | 
  'intraStaticRouteId': 56, // Number | 
  'routePlanName': "routePlanName_example", // String | 
  'routeTypeFlg': "routeTypeFlg_example", // String | 
  'staticRouteId': 56, // Number | 
  'staticRouteName': "staticRouteName_example", // String | 
  'aNIPrefixGt': "aNIPrefixGt_example", // String | 
  'aNIPrefixLt': "aNIPrefixLt_example", // String | 
  'dNISPrefixGt': "dNISPrefixGt_example", // String | 
  'dNISPrefixLt': "dNISPrefixLt_example", // String | 
  'intraStaticRouteIdIsnull': true, // Boolean | 
  'routeIdIn': "routeIdIn_example", // String | 
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
apiInstance.routePlanRoutePlanIdListRoutesGet(routePlanId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **routePlanId** | **Number**| Parent route plan id | 
 **page** | **Number**|  | [optional] 
 **perPage** | **Number**|  | [optional] 
 **orderBy** | **String**|  | [optional] 
 **orderDir** | **String**|  | [optional] 
 **aNIPrefix** | **String**|  | [optional] 
 **dNISPrefix** | **String**|  | [optional] 
 **dynamicRouteId** | **Number**|  | [optional] 
 **dynamicRouteName** | **String**|  | [optional] 
 **interStaticRouteId** | **Number**|  | [optional] 
 **intraStaticRouteId** | **Number**|  | [optional] 
 **routePlanName** | **String**|  | [optional] 
 **routeTypeFlg** | **String**|  | [optional] 
 **staticRouteId** | **Number**|  | [optional] 
 **staticRouteName** | **String**|  | [optional] 
 **aNIPrefixGt** | **String**|  | [optional] 
 **aNIPrefixLt** | **String**|  | [optional] 
 **dNISPrefixGt** | **String**|  | [optional] 
 **dNISPrefixLt** | **String**|  | [optional] 
 **intraStaticRouteIdIsnull** | **Boolean**|  | [optional] 
 **routeIdIn** | **String**|  | [optional] 
 **updateAtGt** | **String**|  | [optional] 
 **updateAtLt** | **String**|  | [optional] 

### Return type

[**InlineResponse200161**](InlineResponse200161.md)

### Authorization

[auth_token](../README.md#auth_token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="routePlanRoutePlanIdPatch"></a>
# **routePlanRoutePlanIdPatch**
> InlineResponse200154 routePlanRoutePlanIdPatch(routePlanId, opts)



Modifies routestrategy

### Example
```javascript
var DnlApi = require('dnl_api');
var defaultClient = DnlApi.ApiClient.instance;

// Configure API key authorization: auth_token
var auth_token = defaultClient.authentications['auth_token'];
auth_token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//auth_token.apiKeyPrefix = 'Token';

var apiInstance = new DnlApi.RouteApi();

var routePlanId = 789; // Number | RouteStrategy id to get info about

var opts = { 
  'body': new DnlApi.RouteStrategy() // RouteStrategy | RouteStrategy to modify
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.routePlanRoutePlanIdPatch(routePlanId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **routePlanId** | **Number**| RouteStrategy id to get info about | 
 **body** | [**RouteStrategy**](RouteStrategy.md)| RouteStrategy to modify | [optional] 

### Return type

[**InlineResponse200154**](InlineResponse200154.md)

### Authorization

[auth_token](../README.md#auth_token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="routeRouteIdDelete"></a>
# **routeRouteIdDelete**
> Success routeRouteIdDelete(routeId)



Deletes route

### Example
```javascript
var DnlApi = require('dnl_api');
var defaultClient = DnlApi.ApiClient.instance;

// Configure API key authorization: auth_token
var auth_token = defaultClient.authentications['auth_token'];
auth_token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//auth_token.apiKeyPrefix = 'Token';

var apiInstance = new DnlApi.RouteApi();

var routeId = 789; // Number | Route id to get info about


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.routeRouteIdDelete(routeId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **routeId** | **Number**| Route id to get info about | 

### Return type

[**Success**](Success.md)

### Authorization

[auth_token](../README.md#auth_token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="routeRouteIdGet"></a>
# **routeRouteIdGet**
> InlineResponse200160 routeRouteIdGet(routeId)



Gets route

### Example
```javascript
var DnlApi = require('dnl_api');
var defaultClient = DnlApi.ApiClient.instance;

// Configure API key authorization: auth_token
var auth_token = defaultClient.authentications['auth_token'];
auth_token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//auth_token.apiKeyPrefix = 'Token';

var apiInstance = new DnlApi.RouteApi();

var routeId = 789; // Number | Route id to get info about


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.routeRouteIdGet(routeId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **routeId** | **Number**| Route id to get info about | 

### Return type

[**InlineResponse200160**](InlineResponse200160.md)

### Authorization

[auth_token](../README.md#auth_token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="routeRouteIdPatch"></a>
# **routeRouteIdPatch**
> InlineResponse200160 routeRouteIdPatch(routeId, opts)



Modifies route

### Example
```javascript
var DnlApi = require('dnl_api');
var defaultClient = DnlApi.ApiClient.instance;

// Configure API key authorization: auth_token
var auth_token = defaultClient.authentications['auth_token'];
auth_token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//auth_token.apiKeyPrefix = 'Token';

var apiInstance = new DnlApi.RouteApi();

var routeId = 789; // Number | Route id to get info about

var opts = { 
  'body': new DnlApi.Route() // Route | Route to modify
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.routeRouteIdPatch(routeId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **routeId** | **Number**| Route id to get info about | 
 **body** | [**Route**](Route.md)| Route to modify | [optional] 

### Return type

[**InlineResponse200160**](InlineResponse200160.md)

### Authorization

[auth_token](../README.md#auth_token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="routeStaticAllDelete"></a>
# **routeStaticAllDelete**
> InlineResponse2002 routeStaticAllDelete(opts)



Deletes multiple found staticroute

### Example
```javascript
var DnlApi = require('dnl_api');
var defaultClient = DnlApi.ApiClient.instance;

// Configure API key authorization: auth_token
var auth_token = defaultClient.authentications['auth_token'];
auth_token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//auth_token.apiKeyPrefix = 'Token';

var apiInstance = new DnlApi.RouteApi();

var opts = { 
  'codeDeckName': "codeDeckName_example", // String | 
  'definedBy': "definedBy_example", // String | 
  'name': "name_example", // String | 
  'routedBy': "routedBy_example", // String | 
  'staticRouteId': 56, // Number | 
  'staticRouteIdIn': "staticRouteIdIn_example", // String | 
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
apiInstance.routeStaticAllDelete(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **codeDeckName** | **String**|  | [optional] 
 **definedBy** | **String**|  | [optional] 
 **name** | **String**|  | [optional] 
 **routedBy** | **String**|  | [optional] 
 **staticRouteId** | **Number**|  | [optional] 
 **staticRouteIdIn** | **String**|  | [optional] 
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

<a name="routeStaticCreatePost"></a>
# **routeStaticCreatePost**
> ObjectCreated routeStaticCreatePost(opts)



Creates new static route

### Example
```javascript
var DnlApi = require('dnl_api');
var defaultClient = DnlApi.ApiClient.instance;

// Configure API key authorization: auth_token
var auth_token = defaultClient.authentications['auth_token'];
auth_token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//auth_token.apiKeyPrefix = 'Token';

var apiInstance = new DnlApi.RouteApi();

var opts = { 
  'body': new DnlApi.Product() // Product | Static Route to create
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.routeStaticCreatePost(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**Product**](Product.md)| Static Route to create | [optional] 

### Return type

[**ObjectCreated**](ObjectCreated.md)

### Authorization

[auth_token](../README.md#auth_token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="routeStaticItemAllDelete"></a>
# **routeStaticItemAllDelete**
> InlineResponse2002 routeStaticItemAllDelete(opts)



Deletes multiple found productitems

### Example
```javascript
var DnlApi = require('dnl_api');
var defaultClient = DnlApi.ApiClient.instance;

// Configure API key authorization: auth_token
var auth_token = defaultClient.authentications['auth_token'];
auth_token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//auth_token.apiKeyPrefix = 'Token';

var apiInstance = new DnlApi.RouteApi();

var opts = { 
  'alias': "alias_example", // String | 
  'codeName': "codeName_example", // String | 
  'did': "did_example", // String | 
  'hasTrunkId': 56, // Number | 
  'itemId': 56, // Number | 
  'itemIdIn': "itemIdIn_example", // String | 
  'staticRouteId': 56, // Number | 
  'strategy': "strategy_example", // String | 
  'timeProfileName': "timeProfileName_example", // String | 
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
apiInstance.routeStaticItemAllDelete(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **alias** | **String**|  | [optional] 
 **codeName** | **String**|  | [optional] 
 **did** | **String**|  | [optional] 
 **hasTrunkId** | **Number**|  | [optional] 
 **itemId** | **Number**|  | [optional] 
 **itemIdIn** | **String**|  | [optional] 
 **staticRouteId** | **Number**|  | [optional] 
 **strategy** | **String**|  | [optional] 
 **timeProfileName** | **String**|  | [optional] 
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

<a name="routeStaticItemItemIdDelete"></a>
# **routeStaticItemItemIdDelete**
> Success routeStaticItemItemIdDelete(itemId)



Deletes staticrouteitem

### Example
```javascript
var DnlApi = require('dnl_api');
var defaultClient = DnlApi.ApiClient.instance;

// Configure API key authorization: auth_token
var auth_token = defaultClient.authentications['auth_token'];
auth_token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//auth_token.apiKeyPrefix = 'Token';

var apiInstance = new DnlApi.RouteApi();

var itemId = 789; // Number | StaticRouteItem id to get info about


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.routeStaticItemItemIdDelete(itemId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **itemId** | **Number**| StaticRouteItem id to get info about | 

### Return type

[**Success**](Success.md)

### Authorization

[auth_token](../README.md#auth_token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="routeStaticItemItemIdGet"></a>
# **routeStaticItemItemIdGet**
> InlineResponse200158 routeStaticItemItemIdGet(itemId)



Gets staticrouteitem

### Example
```javascript
var DnlApi = require('dnl_api');
var defaultClient = DnlApi.ApiClient.instance;

// Configure API key authorization: auth_token
var auth_token = defaultClient.authentications['auth_token'];
auth_token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//auth_token.apiKeyPrefix = 'Token';

var apiInstance = new DnlApi.RouteApi();

var itemId = 789; // Number | StaticRouteItem id to get info about


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.routeStaticItemItemIdGet(itemId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **itemId** | **Number**| StaticRouteItem id to get info about | 

### Return type

[**InlineResponse200158**](InlineResponse200158.md)

### Authorization

[auth_token](../README.md#auth_token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="routeStaticItemItemIdPatch"></a>
# **routeStaticItemItemIdPatch**
> InlineResponse200158 routeStaticItemItemIdPatch(itemId, opts)



Modifies staticrouteitem

### Example
```javascript
var DnlApi = require('dnl_api');
var defaultClient = DnlApi.ApiClient.instance;

// Configure API key authorization: auth_token
var auth_token = defaultClient.authentications['auth_token'];
auth_token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//auth_token.apiKeyPrefix = 'Token';

var apiInstance = new DnlApi.RouteApi();

var itemId = 789; // Number | StaticRouteItem id to get info about

var opts = { 
  'body': new DnlApi.ProductItemsModify() // ProductItemsModify | StaticRouteItem to modify
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.routeStaticItemItemIdPatch(itemId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **itemId** | **Number**| StaticRouteItem id to get info about | 
 **body** | [**ProductItemsModify**](ProductItemsModify.md)| StaticRouteItem to modify | [optional] 

### Return type

[**InlineResponse200158**](InlineResponse200158.md)

### Authorization

[auth_token](../README.md#auth_token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="routeStaticListGet"></a>
# **routeStaticListGet**
> InlineResponse200157 routeStaticListGet(opts)



Gets static routes

### Example
```javascript
var DnlApi = require('dnl_api');
var defaultClient = DnlApi.ApiClient.instance;

// Configure API key authorization: auth_token
var auth_token = defaultClient.authentications['auth_token'];
auth_token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//auth_token.apiKeyPrefix = 'Token';

var apiInstance = new DnlApi.RouteApi();

var opts = { 
  'page': 56, // Number | 
  'perPage': 56, // Number | 
  'orderBy': "orderBy_example", // String | 
  'orderDir': "orderDir_example", // String | 
  'codeDeckName': "codeDeckName_example", // String | 
  'definedBy': "definedBy_example", // String | 
  'name': "name_example", // String | 
  'routedBy': "routedBy_example", // String | 
  'staticRouteId': 56, // Number | 
  'updateBy': "updateBy_example", // String | 
  'staticRouteIdIn': "staticRouteIdIn_example", // String | 
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
apiInstance.routeStaticListGet(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **page** | **Number**|  | [optional] 
 **perPage** | **Number**|  | [optional] 
 **orderBy** | **String**|  | [optional] 
 **orderDir** | **String**|  | [optional] 
 **codeDeckName** | **String**|  | [optional] 
 **definedBy** | **String**|  | [optional] 
 **name** | **String**|  | [optional] 
 **routedBy** | **String**|  | [optional] 
 **staticRouteId** | **Number**|  | [optional] 
 **updateBy** | **String**|  | [optional] 
 **staticRouteIdIn** | **String**|  | [optional] 
 **updateAtGt** | **String**|  | [optional] 
 **updateAtLt** | **String**|  | [optional] 

### Return type

[**InlineResponse200157**](InlineResponse200157.md)

### Authorization

[auth_token](../README.md#auth_token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="routeStaticStaticRouteIdDelete"></a>
# **routeStaticStaticRouteIdDelete**
> Success routeStaticStaticRouteIdDelete(staticRouteId)



Deletes static route

### Example
```javascript
var DnlApi = require('dnl_api');
var defaultClient = DnlApi.ApiClient.instance;

// Configure API key authorization: auth_token
var auth_token = defaultClient.authentications['auth_token'];
auth_token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//auth_token.apiKeyPrefix = 'Token';

var apiInstance = new DnlApi.RouteApi();

var staticRouteId = 789; // Number | Static Route id to get info about


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.routeStaticStaticRouteIdDelete(staticRouteId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **staticRouteId** | **Number**| Static Route id to get info about | 

### Return type

[**Success**](Success.md)

### Authorization

[auth_token](../README.md#auth_token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="routeStaticStaticRouteIdGet"></a>
# **routeStaticStaticRouteIdGet**
> InlineResponse200156 routeStaticStaticRouteIdGet(staticRouteId)



Gets static route

### Example
```javascript
var DnlApi = require('dnl_api');
var defaultClient = DnlApi.ApiClient.instance;

// Configure API key authorization: auth_token
var auth_token = defaultClient.authentications['auth_token'];
auth_token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//auth_token.apiKeyPrefix = 'Token';

var apiInstance = new DnlApi.RouteApi();

var staticRouteId = 789; // Number | Static Route id to get info about


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.routeStaticStaticRouteIdGet(staticRouteId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **staticRouteId** | **Number**| Static Route id to get info about | 

### Return type

[**InlineResponse200156**](InlineResponse200156.md)

### Authorization

[auth_token](../README.md#auth_token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="routeStaticStaticRouteIdItemCreatePost"></a>
# **routeStaticStaticRouteIdItemCreatePost**
> ObjectCreated routeStaticStaticRouteIdItemCreatePost(staticRouteId, opts)



Creates new staticrouteitem

### Example
```javascript
var DnlApi = require('dnl_api');
var defaultClient = DnlApi.ApiClient.instance;

// Configure API key authorization: auth_token
var auth_token = defaultClient.authentications['auth_token'];
auth_token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//auth_token.apiKeyPrefix = 'Token';

var apiInstance = new DnlApi.RouteApi();

var staticRouteId = 789; // Number | Parent id

var opts = { 
  'body': new DnlApi.ProductItems() // ProductItems | StaticRouteItem to create
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.routeStaticStaticRouteIdItemCreatePost(staticRouteId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **staticRouteId** | **Number**| Parent id | 
 **body** | [**ProductItems**](ProductItems.md)| StaticRouteItem to create | [optional] 

### Return type

[**ObjectCreated**](ObjectCreated.md)

### Authorization

[auth_token](../README.md#auth_token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="routeStaticStaticRouteIdItemListGet"></a>
# **routeStaticStaticRouteIdItemListGet**
> InlineResponse200159 routeStaticStaticRouteIdItemListGet(staticRouteId, opts)



Gets staticrouteitem

### Example
```javascript
var DnlApi = require('dnl_api');
var defaultClient = DnlApi.ApiClient.instance;

// Configure API key authorization: auth_token
var auth_token = defaultClient.authentications['auth_token'];
auth_token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//auth_token.apiKeyPrefix = 'Token';

var apiInstance = new DnlApi.RouteApi();

var staticRouteId = 789; // Number | Parent id

var opts = { 
  'page': 56, // Number | 
  'perPage': 56, // Number | 
  'orderBy': "orderBy_example", // String | 
  'orderDir': "orderDir_example", // String | 
  'alias': "alias_example", // String | 
  'codeName': "codeName_example", // String | 
  'did': "did_example", // String | 
  'hasTrunkId': 56, // Number | 
  'itemId': 56, // Number | 
  'staticRouteId2': 56, // Number | 
  'strategy': "strategy_example", // String | 
  'timeProfileName': "timeProfileName_example", // String | 
  'updateBy': "updateBy_example", // String | 
  'itemIdIn': "itemIdIn_example", // String | 
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
apiInstance.routeStaticStaticRouteIdItemListGet(staticRouteId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **staticRouteId** | **Number**| Parent id | 
 **page** | **Number**|  | [optional] 
 **perPage** | **Number**|  | [optional] 
 **orderBy** | **String**|  | [optional] 
 **orderDir** | **String**|  | [optional] 
 **alias** | **String**|  | [optional] 
 **codeName** | **String**|  | [optional] 
 **did** | **String**|  | [optional] 
 **hasTrunkId** | **Number**|  | [optional] 
 **itemId** | **Number**|  | [optional] 
 **staticRouteId2** | **Number**|  | [optional] 
 **strategy** | **String**|  | [optional] 
 **timeProfileName** | **String**|  | [optional] 
 **updateBy** | **String**|  | [optional] 
 **itemIdIn** | **String**|  | [optional] 
 **updateAtGt** | **String**|  | [optional] 
 **updateAtLt** | **String**|  | [optional] 

### Return type

[**InlineResponse200159**](InlineResponse200159.md)

### Authorization

[auth_token](../README.md#auth_token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="routeStaticStaticRouteIdPatch"></a>
# **routeStaticStaticRouteIdPatch**
> InlineResponse200156 routeStaticStaticRouteIdPatch(staticRouteId, opts)



Modifies static route

### Example
```javascript
var DnlApi = require('dnl_api');
var defaultClient = DnlApi.ApiClient.instance;

// Configure API key authorization: auth_token
var auth_token = defaultClient.authentications['auth_token'];
auth_token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//auth_token.apiKeyPrefix = 'Token';

var apiInstance = new DnlApi.RouteApi();

var staticRouteId = 789; // Number | Static Route id to get info about

var opts = { 
  'body': new DnlApi.ProductModify() // ProductModify | Static Route to modify
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.routeStaticStaticRouteIdPatch(staticRouteId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **staticRouteId** | **Number**| Static Route id to get info about | 
 **body** | [**ProductModify**](ProductModify.md)| Static Route to modify | [optional] 

### Return type

[**InlineResponse200156**](InlineResponse200156.md)

### Authorization

[auth_token](../README.md#auth_token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


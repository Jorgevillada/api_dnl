# DnlApi.AuthApi

All URIs are relative to *https://198.100.149.164:8000/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**authAsAgentPost**](AuthApi.md#authAsAgentPost) | **POST** /auth/as_agent | 
[**authAsClientPost**](AuthApi.md#authAsClientPost) | **POST** /auth/as_client | 
[**authCheckPasswordPost**](AuthApi.md#authCheckPasswordPost) | **POST** /auth/check-password | 
[**authCheckTokenPost**](AuthApi.md#authCheckTokenPost) | **POST** /auth/check-token | 
[**authPost**](AuthApi.md#authPost) | **POST** /auth | 
[**authResetEmailPost**](AuthApi.md#authResetEmailPost) | **POST** /auth/reset_email | 
[**authResetTokenGet**](AuthApi.md#authResetTokenGet) | **GET** /auth/reset/{token} | 
[**registrationAllDelete**](AuthApi.md#registrationAllDelete) | **DELETE** /registration/all | 
[**registrationCreatePost**](AuthApi.md#registrationCreatePost) | **POST** /registration/create | 
[**registrationIdApprovePatch**](AuthApi.md#registrationIdApprovePatch) | **PATCH** /registration/{id}/approve | 
[**registrationIdDelete**](AuthApi.md#registrationIdDelete) | **DELETE** /registration/{id} | 
[**registrationIdGet**](AuthApi.md#registrationIdGet) | **GET** /registration/{id} | 
[**registrationIdPatch**](AuthApi.md#registrationIdPatch) | **PATCH** /registration/{id} | 
[**registrationListGet**](AuthApi.md#registrationListGet) | **GET** /registration/list | 
[**userAllDelete**](AuthApi.md#userAllDelete) | **DELETE** /user/all | 
[**userAllPatch**](AuthApi.md#userAllPatch) | **PATCH** /user/all | 
[**userCreatePost**](AuthApi.md#userCreatePost) | **POST** /user/create | 
[**userGet**](AuthApi.md#userGet) | **GET** /user | 
[**userListGet**](AuthApi.md#userListGet) | **GET** /user/list | 
[**userUserIdDelete**](AuthApi.md#userUserIdDelete) | **DELETE** /user/{user_id} | 
[**userUserIdGet**](AuthApi.md#userUserIdGet) | **GET** /user/{user_id} | 
[**userUserIdPatch**](AuthApi.md#userUserIdPatch) | **PATCH** /user/{user_id} | 


<a name="authAsAgentPost"></a>
# **authAsAgentPost**
> AuthToken authAsAgentPost(opts)



Authenticate as agent

### Example
```javascript
var DnlApi = require('dnl_api');
var defaultClient = DnlApi.ApiClient.instance;

// Configure API key authorization: auth_token
var auth_token = defaultClient.authentications['auth_token'];
auth_token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//auth_token.apiKeyPrefix = 'Token';

var apiInstance = new DnlApi.AuthApi();

var opts = { 
  'body': new DnlApi.AuthAsAgent() // AuthAsAgent | Agent reference id
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.authAsAgentPost(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**AuthAsAgent**](AuthAsAgent.md)| Agent reference id | [optional] 

### Return type

[**AuthToken**](AuthToken.md)

### Authorization

[auth_token](../README.md#auth_token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="authAsClientPost"></a>
# **authAsClientPost**
> AuthToken authAsClientPost(opts)



Authenticate as client

### Example
```javascript
var DnlApi = require('dnl_api');
var defaultClient = DnlApi.ApiClient.instance;

// Configure API key authorization: auth_token
var auth_token = defaultClient.authentications['auth_token'];
auth_token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//auth_token.apiKeyPrefix = 'Token';

var apiInstance = new DnlApi.AuthApi();

var opts = { 
  'body': new DnlApi.AuthAsClient() // AuthAsClient | Client reference id
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.authAsClientPost(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**AuthAsClient**](AuthAsClient.md)| Client reference id | [optional] 

### Return type

[**AuthToken**](AuthToken.md)

### Authorization

[auth_token](../README.md#auth_token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="authCheckPasswordPost"></a>
# **authCheckPasswordPost**
> Success authCheckPasswordPost(opts)



Checks current user password

### Example
```javascript
var DnlApi = require('dnl_api');
var defaultClient = DnlApi.ApiClient.instance;

// Configure API key authorization: auth_token
var auth_token = defaultClient.authentications['auth_token'];
auth_token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//auth_token.apiKeyPrefix = 'Token';

var apiInstance = new DnlApi.AuthApi();

var opts = { 
  'body': new DnlApi.PasswordCheck() // PasswordCheck | User password
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.authCheckPasswordPost(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**PasswordCheck**](PasswordCheck.md)| User password | [optional] 

### Return type

[**Success**](Success.md)

### Authorization

[auth_token](../README.md#auth_token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="authCheckTokenPost"></a>
# **authCheckTokenPost**
> AuthToken authCheckTokenPost()



Checks and refreshes token

### Example
```javascript
var DnlApi = require('dnl_api');
var defaultClient = DnlApi.ApiClient.instance;

// Configure API key authorization: auth_token
var auth_token = defaultClient.authentications['auth_token'];
auth_token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//auth_token.apiKeyPrefix = 'Token';

var apiInstance = new DnlApi.AuthApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.authCheckTokenPost(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**AuthToken**](AuthToken.md)

### Authorization

[auth_token](../README.md#auth_token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="authPost"></a>
# **authPost**
> AuthToken authPost(opts)



Authenticates user

### Example
```javascript
var DnlApi = require('dnl_api');
var defaultClient = DnlApi.ApiClient.instance;

// Configure OAuth2 access token for authorization: api_auth
var api_auth = defaultClient.authentications['api_auth'];
api_auth.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new DnlApi.AuthApi();

var opts = { 
  'body': new DnlApi.Credentials() // Credentials | User credentials
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.authPost(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**Credentials**](Credentials.md)| User credentials | [optional] 

### Return type

[**AuthToken**](AuthToken.md)

### Authorization

[api_auth](../README.md#api_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="authResetEmailPost"></a>
# **authResetEmailPost**
> Success authResetEmailPost(opts)





### Example
```javascript
var DnlApi = require('dnl_api');
var defaultClient = DnlApi.ApiClient.instance;

// Configure API key authorization: auth_token
var auth_token = defaultClient.authentications['auth_token'];
auth_token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//auth_token.apiKeyPrefix = 'Token';

var apiInstance = new DnlApi.AuthApi();

var opts = { 
  'body': new DnlApi.UserResetPasswordLetter() // UserResetPasswordLetter | Email to check
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.authResetEmailPost(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**UserResetPasswordLetter**](UserResetPasswordLetter.md)| Email to check | [optional] 

### Return type

[**Success**](Success.md)

### Authorization

[auth_token](../README.md#auth_token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="authResetTokenGet"></a>
# **authResetTokenGet**
> Success authResetTokenGet(token)





### Example
```javascript
var DnlApi = require('dnl_api');
var defaultClient = DnlApi.ApiClient.instance;

// Configure API key authorization: auth_token
var auth_token = defaultClient.authentications['auth_token'];
auth_token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//auth_token.apiKeyPrefix = 'Token';

var apiInstance = new DnlApi.AuthApi();

var token = "token_example"; // String | Token from email


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.authResetTokenGet(token, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **token** | **String**| Token from email | 

### Return type

[**Success**](Success.md)

### Authorization

[auth_token](../README.md#auth_token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="registrationAllDelete"></a>
# **registrationAllDelete**
> InlineResponse2002 registrationAllDelete(opts)



Deletes multiple found signup

### Example
```javascript
var DnlApi = require('dnl_api');
var defaultClient = DnlApi.ApiClient.instance;

// Configure API key authorization: auth_token
var auth_token = defaultClient.authentications['auth_token'];
auth_token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//auth_token.apiKeyPrefix = 'Token';

var apiInstance = new DnlApi.AuthApi();

var opts = { 
  'city': "city_example", // String | 
  'clientName': "clientName_example", // String | 
  'company': "company_example", // String | 
  'idIn': "idIn_example", // String | 
  'mainEmail': "mainEmail_example", // String | 
  'modifiedOnGt': "modifiedOnGt_example", // String | 
  'modifiedOnLt': "modifiedOnLt_example", // String | 
  'phone': "phone_example", // String | 
  'referral': "referral_example", // String | 
  'signedUpOnGt': "signedUpOnGt_example", // String | 
  'signedUpOnLt': "signedUpOnLt_example", // String | 
  'status': "status_example", // String | 
  'username': "username_example" // String | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.registrationAllDelete(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **city** | **String**|  | [optional] 
 **clientName** | **String**|  | [optional] 
 **company** | **String**|  | [optional] 
 **idIn** | **String**|  | [optional] 
 **mainEmail** | **String**|  | [optional] 
 **modifiedOnGt** | **String**|  | [optional] 
 **modifiedOnLt** | **String**|  | [optional] 
 **phone** | **String**|  | [optional] 
 **referral** | **String**|  | [optional] 
 **signedUpOnGt** | **String**|  | [optional] 
 **signedUpOnLt** | **String**|  | [optional] 
 **status** | **String**|  | [optional] 
 **username** | **String**|  | [optional] 

### Return type

[**InlineResponse2002**](InlineResponse2002.md)

### Authorization

[auth_token](../README.md#auth_token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="registrationCreatePost"></a>
# **registrationCreatePost**
> ObjectCreated registrationCreatePost(opts)



Creates new signup

### Example
```javascript
var DnlApi = require('dnl_api');
var defaultClient = DnlApi.ApiClient.instance;

// Configure OAuth2 access token for authorization: api_auth
var api_auth = defaultClient.authentications['api_auth'];
api_auth.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new DnlApi.AuthApi();

var opts = { 
  'body': new DnlApi.Signup() // Signup | Signup to create
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.registrationCreatePost(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**Signup**](Signup.md)| Signup to create | [optional] 

### Return type

[**ObjectCreated**](ObjectCreated.md)

### Authorization

[api_auth](../README.md#api_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="registrationIdApprovePatch"></a>
# **registrationIdApprovePatch**
> InlineResponse2004 registrationIdApprovePatch(id, opts)



Modifies signup approval

### Example
```javascript
var DnlApi = require('dnl_api');
var defaultClient = DnlApi.ApiClient.instance;

// Configure API key authorization: auth_token
var auth_token = defaultClient.authentications['auth_token'];
auth_token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//auth_token.apiKeyPrefix = 'Token';

var apiInstance = new DnlApi.AuthApi();

var id = 789; // Number | Signup approval id to get info about

var opts = { 
  'body': new DnlApi.SignupApprove() // SignupApprove | Signup approval to modify
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.registrationIdApprovePatch(id, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| Signup approval id to get info about | 
 **body** | [**SignupApprove**](SignupApprove.md)| Signup approval to modify | [optional] 

### Return type

[**InlineResponse2004**](InlineResponse2004.md)

### Authorization

[auth_token](../README.md#auth_token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="registrationIdDelete"></a>
# **registrationIdDelete**
> Success registrationIdDelete(id)



Deletes signup

### Example
```javascript
var DnlApi = require('dnl_api');
var defaultClient = DnlApi.ApiClient.instance;

// Configure API key authorization: auth_token
var auth_token = defaultClient.authentications['auth_token'];
auth_token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//auth_token.apiKeyPrefix = 'Token';

var apiInstance = new DnlApi.AuthApi();

var id = 789; // Number | Signup id to get info about


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.registrationIdDelete(id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| Signup id to get info about | 

### Return type

[**Success**](Success.md)

### Authorization

[auth_token](../README.md#auth_token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="registrationIdGet"></a>
# **registrationIdGet**
> InlineResponse2004 registrationIdGet(id)



Gets signup

### Example
```javascript
var DnlApi = require('dnl_api');
var defaultClient = DnlApi.ApiClient.instance;

// Configure API key authorization: auth_token
var auth_token = defaultClient.authentications['auth_token'];
auth_token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//auth_token.apiKeyPrefix = 'Token';

var apiInstance = new DnlApi.AuthApi();

var id = 789; // Number | Signup id to get info about


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.registrationIdGet(id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| Signup id to get info about | 

### Return type

[**InlineResponse2004**](InlineResponse2004.md)

### Authorization

[auth_token](../README.md#auth_token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="registrationIdPatch"></a>
# **registrationIdPatch**
> InlineResponse2004 registrationIdPatch(id, opts)



Modifies signup

### Example
```javascript
var DnlApi = require('dnl_api');
var defaultClient = DnlApi.ApiClient.instance;

// Configure API key authorization: auth_token
var auth_token = defaultClient.authentications['auth_token'];
auth_token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//auth_token.apiKeyPrefix = 'Token';

var apiInstance = new DnlApi.AuthApi();

var id = 789; // Number | Signup id to get info about

var opts = { 
  'body': new DnlApi.SignupModify() // SignupModify | Signup to modify
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.registrationIdPatch(id, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| Signup id to get info about | 
 **body** | [**SignupModify**](SignupModify.md)| Signup to modify | [optional] 

### Return type

[**InlineResponse2004**](InlineResponse2004.md)

### Authorization

[auth_token](../README.md#auth_token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="registrationListGet"></a>
# **registrationListGet**
> InlineResponse2005 registrationListGet(opts)



Gets signups

### Example
```javascript
var DnlApi = require('dnl_api');
var defaultClient = DnlApi.ApiClient.instance;

// Configure API key authorization: auth_token
var auth_token = defaultClient.authentications['auth_token'];
auth_token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//auth_token.apiKeyPrefix = 'Token';

var apiInstance = new DnlApi.AuthApi();

var opts = { 
  'page': 56, // Number | 
  'perPage': 56, // Number | 
  'orderBy': "orderBy_example", // String | 
  'orderDir': "orderDir_example", // String | 
  'city': "city_example", // String | 
  'clientName': "clientName_example", // String | 
  'company': "company_example", // String | 
  'mainEmail': "mainEmail_example", // String | 
  'phone': "phone_example", // String | 
  'referral': "referral_example", // String | 
  'status': "status_example", // String | 
  'username': "username_example", // String | 
  'idIn': "idIn_example", // String | 
  'modifiedOnGt': "modifiedOnGt_example", // String | 
  'modifiedOnLt': "modifiedOnLt_example", // String | 
  'signedUpOnGt': "signedUpOnGt_example", // String | 
  'signedUpOnLt': "signedUpOnLt_example" // String | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.registrationListGet(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **page** | **Number**|  | [optional] 
 **perPage** | **Number**|  | [optional] 
 **orderBy** | **String**|  | [optional] 
 **orderDir** | **String**|  | [optional] 
 **city** | **String**|  | [optional] 
 **clientName** | **String**|  | [optional] 
 **company** | **String**|  | [optional] 
 **mainEmail** | **String**|  | [optional] 
 **phone** | **String**|  | [optional] 
 **referral** | **String**|  | [optional] 
 **status** | **String**|  | [optional] 
 **username** | **String**|  | [optional] 
 **idIn** | **String**|  | [optional] 
 **modifiedOnGt** | **String**|  | [optional] 
 **modifiedOnLt** | **String**|  | [optional] 
 **signedUpOnGt** | **String**|  | [optional] 
 **signedUpOnLt** | **String**|  | [optional] 

### Return type

[**InlineResponse2005**](InlineResponse2005.md)

### Authorization

[auth_token](../README.md#auth_token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="userAllDelete"></a>
# **userAllDelete**
> InlineResponse2002 userAllDelete(opts)



Deletes multiple found user

### Example
```javascript
var DnlApi = require('dnl_api');
var defaultClient = DnlApi.ApiClient.instance;

// Configure API key authorization: auth_token
var auth_token = defaultClient.authentications['auth_token'];
auth_token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//auth_token.apiKeyPrefix = 'Token';

var apiInstance = new DnlApi.AuthApi();

var opts = { 
  'active': true, // Boolean | 
  'createTimeGt': "createTimeGt_example", // String | 
  'createTimeLt': "createTimeLt_example", // String | 
  'email': "email_example", // String | 
  'isOnline': 56, // Number | 
  'lastLoginTimeGt': "lastLoginTimeGt_example", // String | 
  'lastLoginTimeLt': "lastLoginTimeLt_example", // String | 
  'loginIp': "loginIp_example", // String | 
  'name': "name_example", // String | 
  'roleId': 56, // Number | 
  'userId': 56, // Number | 
  'userIdIn': "userIdIn_example", // String | 
  'userType': "userType_example" // String | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.userAllDelete(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **active** | **Boolean**|  | [optional] 
 **createTimeGt** | **String**|  | [optional] 
 **createTimeLt** | **String**|  | [optional] 
 **email** | **String**|  | [optional] 
 **isOnline** | **Number**|  | [optional] 
 **lastLoginTimeGt** | **String**|  | [optional] 
 **lastLoginTimeLt** | **String**|  | [optional] 
 **loginIp** | **String**|  | [optional] 
 **name** | **String**|  | [optional] 
 **roleId** | **Number**|  | [optional] 
 **userId** | **Number**|  | [optional] 
 **userIdIn** | **String**|  | [optional] 
 **userType** | **String**|  | [optional] 

### Return type

[**InlineResponse2002**](InlineResponse2002.md)

### Authorization

[auth_token](../README.md#auth_token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="userAllPatch"></a>
# **userAllPatch**
> InlineResponse2002 userAllPatch(opts)



Modifies multiple found user

### Example
```javascript
var DnlApi = require('dnl_api');
var defaultClient = DnlApi.ApiClient.instance;

// Configure API key authorization: auth_token
var auth_token = defaultClient.authentications['auth_token'];
auth_token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//auth_token.apiKeyPrefix = 'Token';

var apiInstance = new DnlApi.AuthApi();

var opts = { 
  'body': new DnlApi.UserActivate(), // UserActivate | User to modify
  'active': true, // Boolean | 
  'createTimeGt': "createTimeGt_example", // String | 
  'createTimeLt': "createTimeLt_example", // String | 
  'email': "email_example", // String | 
  'isOnline': 56, // Number | 
  'lastLoginTimeGt': "lastLoginTimeGt_example", // String | 
  'lastLoginTimeLt': "lastLoginTimeLt_example", // String | 
  'loginIp': "loginIp_example", // String | 
  'name': "name_example", // String | 
  'roleId': 56, // Number | 
  'userId': 56, // Number | 
  'userIdIn': "userIdIn_example", // String | 
  'userType': "userType_example" // String | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.userAllPatch(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**UserActivate**](UserActivate.md)| User to modify | [optional] 
 **active** | **Boolean**|  | [optional] 
 **createTimeGt** | **String**|  | [optional] 
 **createTimeLt** | **String**|  | [optional] 
 **email** | **String**|  | [optional] 
 **isOnline** | **Number**|  | [optional] 
 **lastLoginTimeGt** | **String**|  | [optional] 
 **lastLoginTimeLt** | **String**|  | [optional] 
 **loginIp** | **String**|  | [optional] 
 **name** | **String**|  | [optional] 
 **roleId** | **Number**|  | [optional] 
 **userId** | **Number**|  | [optional] 
 **userIdIn** | **String**|  | [optional] 
 **userType** | **String**|  | [optional] 

### Return type

[**InlineResponse2002**](InlineResponse2002.md)

### Authorization

[auth_token](../README.md#auth_token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="userCreatePost"></a>
# **userCreatePost**
> ObjectCreated userCreatePost(opts)



Creates new user

### Example
```javascript
var DnlApi = require('dnl_api');
var defaultClient = DnlApi.ApiClient.instance;

// Configure API key authorization: auth_token
var auth_token = defaultClient.authentications['auth_token'];
auth_token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//auth_token.apiKeyPrefix = 'Token';

var apiInstance = new DnlApi.AuthApi();

var opts = { 
  'body': new DnlApi.User() // User | User to create
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.userCreatePost(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**User**](User.md)| User to create | [optional] 

### Return type

[**ObjectCreated**](ObjectCreated.md)

### Authorization

[auth_token](../README.md#auth_token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="userGet"></a>
# **userGet**
> InlineResponse200 userGet()



Gets userinfo

### Example
```javascript
var DnlApi = require('dnl_api');
var defaultClient = DnlApi.ApiClient.instance;

// Configure API key authorization: auth_token
var auth_token = defaultClient.authentications['auth_token'];
auth_token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//auth_token.apiKeyPrefix = 'Token';

var apiInstance = new DnlApi.AuthApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.userGet(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**InlineResponse200**](InlineResponse200.md)

### Authorization

[auth_token](../README.md#auth_token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="userListGet"></a>
# **userListGet**
> InlineResponse2003 userListGet(opts)



Gets users

### Example
```javascript
var DnlApi = require('dnl_api');
var defaultClient = DnlApi.ApiClient.instance;

// Configure API key authorization: auth_token
var auth_token = defaultClient.authentications['auth_token'];
auth_token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//auth_token.apiKeyPrefix = 'Token';

var apiInstance = new DnlApi.AuthApi();

var opts = { 
  'page': 56, // Number | 
  'perPage': 56, // Number | 
  'orderBy': "orderBy_example", // String | 
  'orderDir': "orderDir_example", // String | 
  'active': true, // Boolean | 
  'isOnline': 56, // Number | 
  'name': "name_example", // String | 
  'roleId': 56, // Number | 
  'userType': "userType_example", // String | 
  'createTimeGt': "createTimeGt_example", // String | 
  'createTimeLt': "createTimeLt_example", // String | 
  'lastLoginTimeGt': "lastLoginTimeGt_example", // String | 
  'lastLoginTimeIsnull': true, // Boolean | 
  'lastLoginTimeLt': "lastLoginTimeLt_example", // String | 
  'userIdIn': "userIdIn_example" // String | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.userListGet(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **page** | **Number**|  | [optional] 
 **perPage** | **Number**|  | [optional] 
 **orderBy** | **String**|  | [optional] 
 **orderDir** | **String**|  | [optional] 
 **active** | **Boolean**|  | [optional] 
 **isOnline** | **Number**|  | [optional] 
 **name** | **String**|  | [optional] 
 **roleId** | **Number**|  | [optional] 
 **userType** | **String**|  | [optional] 
 **createTimeGt** | **String**|  | [optional] 
 **createTimeLt** | **String**|  | [optional] 
 **lastLoginTimeGt** | **String**|  | [optional] 
 **lastLoginTimeIsnull** | **Boolean**|  | [optional] 
 **lastLoginTimeLt** | **String**|  | [optional] 
 **userIdIn** | **String**|  | [optional] 

### Return type

[**InlineResponse2003**](InlineResponse2003.md)

### Authorization

[auth_token](../README.md#auth_token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="userUserIdDelete"></a>
# **userUserIdDelete**
> Success userUserIdDelete(userId)



Deletes user

### Example
```javascript
var DnlApi = require('dnl_api');
var defaultClient = DnlApi.ApiClient.instance;

// Configure API key authorization: auth_token
var auth_token = defaultClient.authentications['auth_token'];
auth_token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//auth_token.apiKeyPrefix = 'Token';

var apiInstance = new DnlApi.AuthApi();

var userId = 789; // Number | User id to get info about


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.userUserIdDelete(userId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | **Number**| User id to get info about | 

### Return type

[**Success**](Success.md)

### Authorization

[auth_token](../README.md#auth_token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="userUserIdGet"></a>
# **userUserIdGet**
> InlineResponse2001 userUserIdGet(userId)



Gets user

### Example
```javascript
var DnlApi = require('dnl_api');
var defaultClient = DnlApi.ApiClient.instance;

// Configure API key authorization: auth_token
var auth_token = defaultClient.authentications['auth_token'];
auth_token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//auth_token.apiKeyPrefix = 'Token';

var apiInstance = new DnlApi.AuthApi();

var userId = 789; // Number | User id to get info about


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.userUserIdGet(userId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | **Number**| User id to get info about | 

### Return type

[**InlineResponse2001**](InlineResponse2001.md)

### Authorization

[auth_token](../README.md#auth_token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="userUserIdPatch"></a>
# **userUserIdPatch**
> InlineResponse2001 userUserIdPatch(userId, opts)



Modifies user

### Example
```javascript
var DnlApi = require('dnl_api');
var defaultClient = DnlApi.ApiClient.instance;

// Configure API key authorization: auth_token
var auth_token = defaultClient.authentications['auth_token'];
auth_token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//auth_token.apiKeyPrefix = 'Token';

var apiInstance = new DnlApi.AuthApi();

var userId = 789; // Number | User id to get info about

var opts = { 
  'body': new DnlApi.User() // User | User to modify
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.userUserIdPatch(userId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | **Number**| User id to get info about | 
 **body** | [**User**](User.md)| User to modify | [optional] 

### Return type

[**InlineResponse2001**](InlineResponse2001.md)

### Authorization

[auth_token](../README.md#auth_token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


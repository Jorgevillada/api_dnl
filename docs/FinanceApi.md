# DnlApi.FinanceApi

All URIs are relative to *https://198.100.149.164:8000/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**carrierClientIdActualBalanceGet**](FinanceApi.md#carrierClientIdActualBalanceGet) | **GET** /carrier/{client_id}/actual_balance | 
[**carrierClientIdBalanceGet**](FinanceApi.md#carrierClientIdBalanceGet) | **GET** /carrier/{client_id}/balance | 
[**carrierClientIdGatewayPaymentPost**](FinanceApi.md#carrierClientIdGatewayPaymentPost) | **POST** /carrier/{client_id}/gateway_payment | 
[**carrierClientIdGatewayPaymentsGet**](FinanceApi.md#carrierClientIdGatewayPaymentsGet) | **GET** /carrier/{client_id}/gateway_payments | 
[**carrierClientIdInvoiceListGet**](FinanceApi.md#carrierClientIdInvoiceListGet) | **GET** /carrier/{client_id}/invoice/list | 
[**carrierClientIdInvoicePost**](FinanceApi.md#carrierClientIdInvoicePost) | **POST** /carrier/{client_id}/invoice | 
[**carrierClientIdManualInvoicePost**](FinanceApi.md#carrierClientIdManualInvoicePost) | **POST** /carrier/{client_id}/manual_invoice | 
[**carrierClientIdMutualBalanceGet**](FinanceApi.md#carrierClientIdMutualBalanceGet) | **GET** /carrier/{client_id}/mutual_balance | 
[**carrierClientIdPaymentListGet**](FinanceApi.md#carrierClientIdPaymentListGet) | **GET** /carrier/{client_id}/payment/list | 
[**carrierClientIdPaymentPost**](FinanceApi.md#carrierClientIdPaymentPost) | **POST** /carrier/{client_id}/payment | 
[**carrierClientIdRegenerateBalancePost**](FinanceApi.md#carrierClientIdRegenerateBalancePost) | **POST** /carrier/{client_id}/regenerate_balance | 
[**carrierClientIdTransactionsListGet**](FinanceApi.md#carrierClientIdTransactionsListGet) | **GET** /carrier/{client_id}/transactions/list | 
[**financeAllPaymentListGet**](FinanceApi.md#financeAllPaymentListGet) | **GET** /finance/all_payment/list | 
[**financeAutoInvoiceListGet**](FinanceApi.md#financeAutoInvoiceListGet) | **GET** /finance/auto_invoice/list | 
[**financeGatewayPaymentsGet**](FinanceApi.md#financeGatewayPaymentsGet) | **GET** /finance/gateway_payments | 
[**financeInvoiceAllDelete**](FinanceApi.md#financeInvoiceAllDelete) | **DELETE** /finance/invoice/all | 
[**financeInvoiceFileInvoiceIdGet**](FinanceApi.md#financeInvoiceFileInvoiceIdGet) | **GET** /finance/invoice/file/{invoice_id} | 
[**financeInvoiceInvoiceIdDelete**](FinanceApi.md#financeInvoiceInvoiceIdDelete) | **DELETE** /finance/invoice/{invoice_id} | 
[**financeInvoiceInvoiceIdGet**](FinanceApi.md#financeInvoiceInvoiceIdGet) | **GET** /finance/invoice/{invoice_id} | 
[**financeInvoiceInvoiceIdPatch**](FinanceApi.md#financeInvoiceInvoiceIdPatch) | **PATCH** /finance/invoice/{invoice_id} | 
[**financeInvoiceListGet**](FinanceApi.md#financeInvoiceListGet) | **GET** /finance/invoice/list | 
[**financeInvoiceLogIdSendPatch**](FinanceApi.md#financeInvoiceLogIdSendPatch) | **PATCH** /finance/invoice_log/{id}/send | 
[**financeInvoicePost**](FinanceApi.md#financeInvoicePost) | **POST** /finance/invoice | 
[**financePaymentClientPaymentIdDelete**](FinanceApi.md#financePaymentClientPaymentIdDelete) | **DELETE** /finance/payment/{client_payment_id} | 
[**financePaymentClientPaymentIdEditAndSendNotePost**](FinanceApi.md#financePaymentClientPaymentIdEditAndSendNotePost) | **POST** /finance/payment/{client_payment_id}/edit_and_send_note | 
[**financePaymentClientPaymentIdGet**](FinanceApi.md#financePaymentClientPaymentIdGet) | **GET** /finance/payment/{client_payment_id} | 
[**financePaymentClientPaymentIdPatch**](FinanceApi.md#financePaymentClientPaymentIdPatch) | **PATCH** /finance/payment/{client_payment_id} | 
[**financeReceivedPaymentListGet**](FinanceApi.md#financeReceivedPaymentListGet) | **GET** /finance/received_payment/list | 
[**financeSentPaymentClientPaymentIdDelete**](FinanceApi.md#financeSentPaymentClientPaymentIdDelete) | **DELETE** /finance/sent_payment/{client_payment_id} | 
[**financeSentPaymentClientPaymentIdGet**](FinanceApi.md#financeSentPaymentClientPaymentIdGet) | **GET** /finance/sent_payment/{client_payment_id} | 
[**financeSentPaymentClientPaymentIdPatch**](FinanceApi.md#financeSentPaymentClientPaymentIdPatch) | **PATCH** /finance/sent_payment/{client_payment_id} | 
[**financeSentPaymentListGet**](FinanceApi.md#financeSentPaymentListGet) | **GET** /finance/sent_payment/list | 
[**financeSentPaymentPost**](FinanceApi.md#financeSentPaymentPost) | **POST** /finance/sent_payment | 


<a name="carrierClientIdActualBalanceGet"></a>
# **carrierClientIdActualBalanceGet**
> InlineResponse20095 carrierClientIdActualBalanceGet(clientId, opts)



Gets actualbalancehistory

### Example
```javascript
var DnlApi = require('dnl_api');
var defaultClient = DnlApi.ApiClient.instance;

// Configure API key authorization: auth_token
var auth_token = defaultClient.authentications['auth_token'];
auth_token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//auth_token.apiKeyPrefix = 'Token';

var apiInstance = new DnlApi.FinanceApi();

var clientId = 789; // Number | Parent carrier

var opts = { 
  'page': 56, // Number | 
  'perPage': 56, // Number | 
  'orderBy': "orderBy_example", // String | 
  'orderDir': "orderDir_example", // String | 
  '_date': "_date_example", // String | 
  'dateGte': "dateGte_example", // String | 
  'dateLte': "dateLte_example" // String | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.carrierClientIdActualBalanceGet(clientId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **clientId** | **Number**| Parent carrier | 
 **page** | **Number**|  | [optional] 
 **perPage** | **Number**|  | [optional] 
 **orderBy** | **String**|  | [optional] 
 **orderDir** | **String**|  | [optional] 
 **_date** | **String**|  | [optional] 
 **dateGte** | **String**|  | [optional] 
 **dateLte** | **String**|  | [optional] 

### Return type

[**InlineResponse20095**](InlineResponse20095.md)

### Authorization

[auth_token](../README.md#auth_token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="carrierClientIdBalanceGet"></a>
# **carrierClientIdBalanceGet**
> InlineResponse20093 carrierClientIdBalanceGet(clientId)



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

var apiInstance = new DnlApi.FinanceApi();

var clientId = 789; // Number | Carrier id to get info about


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.carrierClientIdBalanceGet(clientId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **clientId** | **Number**| Carrier id to get info about | 

### Return type

[**InlineResponse20093**](InlineResponse20093.md)

### Authorization

[auth_token](../README.md#auth_token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="carrierClientIdGatewayPaymentPost"></a>
# **carrierClientIdGatewayPaymentPost**
> ObjectCreated carrierClientIdGatewayPaymentPost(clientId, opts)



Creates new paymentgatewayhistoryrecord

### Example
```javascript
var DnlApi = require('dnl_api');
var defaultClient = DnlApi.ApiClient.instance;

// Configure API key authorization: auth_token
var auth_token = defaultClient.authentications['auth_token'];
auth_token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//auth_token.apiKeyPrefix = 'Token';

var apiInstance = new DnlApi.FinanceApi();

var clientId = 789; // Number | Parent carrier

var opts = { 
  'body': new DnlApi.PaymentGatewayHistory() // PaymentGatewayHistory | PaymentGatewayHistoryRecord to create
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.carrierClientIdGatewayPaymentPost(clientId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **clientId** | **Number**| Parent carrier | 
 **body** | [**PaymentGatewayHistory**](PaymentGatewayHistory.md)| PaymentGatewayHistoryRecord to create | [optional] 

### Return type

[**ObjectCreated**](ObjectCreated.md)

### Authorization

[auth_token](../README.md#auth_token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="carrierClientIdGatewayPaymentsGet"></a>
# **carrierClientIdGatewayPaymentsGet**
> InlineResponse20097 carrierClientIdGatewayPaymentsGet(clientId, opts)



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

var apiInstance = new DnlApi.FinanceApi();

var clientId = 789; // Number | Parent carrier

var opts = { 
  'page': 56, // Number | 
  'perPage': 56, // Number | 
  'orderBy': "orderBy_example", // String | 
  'orderDir': "orderDir_example", // String | 
  'clientId2': 56, // Number | 
  'paypalId': "paypalId_example", // String | 
  'paypalTransactionId': "paypalTransactionId_example", // String | 
  'status': "status_example", // String | 
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
apiInstance.carrierClientIdGatewayPaymentsGet(clientId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **clientId** | **Number**| Parent carrier | 
 **page** | **Number**|  | [optional] 
 **perPage** | **Number**|  | [optional] 
 **orderBy** | **String**|  | [optional] 
 **orderDir** | **String**|  | [optional] 
 **clientId2** | **Number**|  | [optional] 
 **paypalId** | **String**|  | [optional] 
 **paypalTransactionId** | **String**|  | [optional] 
 **status** | **String**|  | [optional] 
 **type** | **String**|  | [optional] 
 **paidOnGt** | **String**|  | [optional] 
 **paidOnLt** | **String**|  | [optional] 

### Return type

[**InlineResponse20097**](InlineResponse20097.md)

### Authorization

[auth_token](../README.md#auth_token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="carrierClientIdInvoiceListGet"></a>
# **carrierClientIdInvoiceListGet**
> InlineResponse20091 carrierClientIdInvoiceListGet(clientId, opts)



Gets invoices

### Example
```javascript
var DnlApi = require('dnl_api');
var defaultClient = DnlApi.ApiClient.instance;

// Configure API key authorization: auth_token
var auth_token = defaultClient.authentications['auth_token'];
auth_token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//auth_token.apiKeyPrefix = 'Token';

var apiInstance = new DnlApi.FinanceApi();

var clientId = 789; // Number | Parent carrier

var opts = { 
  'page': 56, // Number | 
  'perPage': 56, // Number | 
  'orderBy': "orderBy_example", // String | 
  'orderDir': "orderDir_example", // String | 
  'clientId2': 56, // Number | 
  'clientName': "clientName_example", // String | 
  'createType': "createType_example", // String | 
  'invoiceNumber': "invoiceNumber_example", // String | 
  'paid': true, // Boolean | 
  'state': "state_example", // String | 
  'status': 56, // Number | 
  'dueDateGt': "dueDateGt_example", // String | 
  'dueDateLt': "dueDateLt_example", // String | 
  'invoiceDateGt': "invoiceDateGt_example", // String | 
  'invoiceDateLt': "invoiceDateLt_example", // String | 
  'invoiceIdIn': "invoiceIdIn_example" // String | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.carrierClientIdInvoiceListGet(clientId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **clientId** | **Number**| Parent carrier | 
 **page** | **Number**|  | [optional] 
 **perPage** | **Number**|  | [optional] 
 **orderBy** | **String**|  | [optional] 
 **orderDir** | **String**|  | [optional] 
 **clientId2** | **Number**|  | [optional] 
 **clientName** | **String**|  | [optional] 
 **createType** | **String**|  | [optional] 
 **invoiceNumber** | **String**|  | [optional] 
 **paid** | **Boolean**|  | [optional] 
 **state** | **String**|  | [optional] 
 **status** | **Number**|  | [optional] 
 **dueDateGt** | **String**|  | [optional] 
 **dueDateLt** | **String**|  | [optional] 
 **invoiceDateGt** | **String**|  | [optional] 
 **invoiceDateLt** | **String**|  | [optional] 
 **invoiceIdIn** | **String**|  | [optional] 

### Return type

[**InlineResponse20091**](InlineResponse20091.md)

### Authorization

[auth_token](../README.md#auth_token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="carrierClientIdInvoicePost"></a>
# **carrierClientIdInvoicePost**
> ObjectCreated carrierClientIdInvoicePost(clientId, opts)



Creates new invoice

### Example
```javascript
var DnlApi = require('dnl_api');
var defaultClient = DnlApi.ApiClient.instance;

// Configure API key authorization: auth_token
var auth_token = defaultClient.authentications['auth_token'];
auth_token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//auth_token.apiKeyPrefix = 'Token';

var apiInstance = new DnlApi.FinanceApi();

var clientId = 789; // Number | Parent carrier

var opts = { 
  'body': new DnlApi.InvoiceGeneration() // InvoiceGeneration | Invoice to create
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.carrierClientIdInvoicePost(clientId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **clientId** | **Number**| Parent carrier | 
 **body** | [**InvoiceGeneration**](InvoiceGeneration.md)| Invoice to create | [optional] 

### Return type

[**ObjectCreated**](ObjectCreated.md)

### Authorization

[auth_token](../README.md#auth_token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="carrierClientIdManualInvoicePost"></a>
# **carrierClientIdManualInvoicePost**
> ObjectCreated carrierClientIdManualInvoicePost(pdfFile, startDate, endDate, clientId)



Creates new invoice

### Example
```javascript
var DnlApi = require('dnl_api');
var defaultClient = DnlApi.ApiClient.instance;

// Configure API key authorization: auth_token
var auth_token = defaultClient.authentications['auth_token'];
auth_token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//auth_token.apiKeyPrefix = 'Token';

var apiInstance = new DnlApi.FinanceApi();

var pdfFile = "/path/to/file.txt"; // File | Invoice File to upload

var startDate = "startDate_example"; // String | Invoice start date

var endDate = "endDate_example"; // String | Invoice end date

var clientId = 789; // Number | Parent carrier


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.carrierClientIdManualInvoicePost(pdfFile, startDate, endDate, clientId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **pdfFile** | **File**| Invoice File to upload | 
 **startDate** | **String**| Invoice start date | 
 **endDate** | **String**| Invoice end date | 
 **clientId** | **Number**| Parent carrier | 

### Return type

[**ObjectCreated**](ObjectCreated.md)

### Authorization

[auth_token](../README.md#auth_token)

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/json

<a name="carrierClientIdMutualBalanceGet"></a>
# **carrierClientIdMutualBalanceGet**
> InlineResponse20094 carrierClientIdMutualBalanceGet(clientId, opts)



Gets balancehistory

### Example
```javascript
var DnlApi = require('dnl_api');
var defaultClient = DnlApi.ApiClient.instance;

// Configure API key authorization: auth_token
var auth_token = defaultClient.authentications['auth_token'];
auth_token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//auth_token.apiKeyPrefix = 'Token';

var apiInstance = new DnlApi.FinanceApi();

var clientId = 789; // Number | Parent carrier

var opts = { 
  'page': 56, // Number | 
  'perPage': 56, // Number | 
  'orderBy': "orderBy_example", // String | 
  'orderDir': "orderDir_example", // String | 
  '_date': "_date_example", // String | 
  'dateGte': "dateGte_example", // String | 
  'dateLte': "dateLte_example" // String | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.carrierClientIdMutualBalanceGet(clientId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **clientId** | **Number**| Parent carrier | 
 **page** | **Number**|  | [optional] 
 **perPage** | **Number**|  | [optional] 
 **orderBy** | **String**|  | [optional] 
 **orderDir** | **String**|  | [optional] 
 **_date** | **String**|  | [optional] 
 **dateGte** | **String**|  | [optional] 
 **dateLte** | **String**|  | [optional] 

### Return type

[**InlineResponse20094**](InlineResponse20094.md)

### Authorization

[auth_token](../README.md#auth_token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="carrierClientIdPaymentListGet"></a>
# **carrierClientIdPaymentListGet**
> InlineResponse20088 carrierClientIdPaymentListGet(clientId, opts)



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

var apiInstance = new DnlApi.FinanceApi();

var clientId = 789; // Number | Parent carrier

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
apiInstance.carrierClientIdPaymentListGet(clientId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **clientId** | **Number**| Parent carrier | 
 **page** | **Number**|  | [optional] 
 **perPage** | **Number**|  | [optional] 
 **orderBy** | **String**|  | [optional] 
 **orderDir** | **String**|  | [optional] 
 **amountGt** | **String**|  | [optional] 
 **amountLt** | **String**|  | [optional] 
 **paidOnGt** | **String**|  | [optional] 
 **paidOnLt** | **String**|  | [optional] 

### Return type

[**InlineResponse20088**](InlineResponse20088.md)

### Authorization

[auth_token](../README.md#auth_token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="carrierClientIdPaymentPost"></a>
# **carrierClientIdPaymentPost**
> ObjectCreated carrierClientIdPaymentPost(clientId, opts)



Creates new clientpayment

### Example
```javascript
var DnlApi = require('dnl_api');
var defaultClient = DnlApi.ApiClient.instance;

// Configure API key authorization: auth_token
var auth_token = defaultClient.authentications['auth_token'];
auth_token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//auth_token.apiKeyPrefix = 'Token';

var apiInstance = new DnlApi.FinanceApi();

var clientId = 789; // Number | Parent carrier

var opts = { 
  'body': new DnlApi.ClientPayment() // ClientPayment | ClientPayment to create
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.carrierClientIdPaymentPost(clientId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **clientId** | **Number**| Parent carrier | 
 **body** | [**ClientPayment**](ClientPayment.md)| ClientPayment to create | [optional] 

### Return type

[**ObjectCreated**](ObjectCreated.md)

### Authorization

[auth_token](../README.md#auth_token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="carrierClientIdRegenerateBalancePost"></a>
# **carrierClientIdRegenerateBalancePost**
> ObjectCreated carrierClientIdRegenerateBalancePost(clientId, opts)



Creates new balancedailyresettask

### Example
```javascript
var DnlApi = require('dnl_api');
var defaultClient = DnlApi.ApiClient.instance;

// Configure API key authorization: auth_token
var auth_token = defaultClient.authentications['auth_token'];
auth_token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//auth_token.apiKeyPrefix = 'Token';

var apiInstance = new DnlApi.FinanceApi();

var clientId = 789; // Number | Parent carrier id

var opts = { 
  'body': new DnlApi.BalanceDailyResetTask() // BalanceDailyResetTask | BalanceDailyResetTask to create
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.carrierClientIdRegenerateBalancePost(clientId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **clientId** | **Number**| Parent carrier id | 
 **body** | [**BalanceDailyResetTask**](BalanceDailyResetTask.md)| BalanceDailyResetTask to create | [optional] 

### Return type

[**ObjectCreated**](ObjectCreated.md)

### Authorization

[auth_token](../README.md#auth_token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="carrierClientIdTransactionsListGet"></a>
# **carrierClientIdTransactionsListGet**
> InlineResponse20096 carrierClientIdTransactionsListGet(clientId, opts)



Gets client transactions

### Example
```javascript
var DnlApi = require('dnl_api');
var defaultClient = DnlApi.ApiClient.instance;

// Configure API key authorization: auth_token
var auth_token = defaultClient.authentications['auth_token'];
auth_token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//auth_token.apiKeyPrefix = 'Token';

var apiInstance = new DnlApi.FinanceApi();

var clientId = 789; // Number | Parent carrier

var opts = { 
  'page': 56, // Number | 
  'perPage': 56, // Number | 
  'orderBy': "orderBy_example", // String | 
  'orderDir': "orderDir_example", // String | 
  'amount': "amount_example", // String | 
  'transactionType': "transactionType_example", // String | 
  'dateGt': "dateGt_example", // String | 
  'dateLt': "dateLt_example" // String | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.carrierClientIdTransactionsListGet(clientId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **clientId** | **Number**| Parent carrier | 
 **page** | **Number**|  | [optional] 
 **perPage** | **Number**|  | [optional] 
 **orderBy** | **String**|  | [optional] 
 **orderDir** | **String**|  | [optional] 
 **amount** | **String**|  | [optional] 
 **transactionType** | **String**|  | [optional] 
 **dateGt** | **String**|  | [optional] 
 **dateLt** | **String**|  | [optional] 

### Return type

[**InlineResponse20096**](InlineResponse20096.md)

### Authorization

[auth_token](../README.md#auth_token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="financeAllPaymentListGet"></a>
# **financeAllPaymentListGet**
> InlineResponse200100 financeAllPaymentListGet(opts)



Gets all payments

### Example
```javascript
var DnlApi = require('dnl_api');
var defaultClient = DnlApi.ApiClient.instance;

// Configure API key authorization: auth_token
var auth_token = defaultClient.authentications['auth_token'];
auth_token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//auth_token.apiKeyPrefix = 'Token';

var apiInstance = new DnlApi.FinanceApi();

var opts = { 
  'page': 56, // Number | 
  'perPage': 56, // Number | 
  'orderBy': "orderBy_example", // String | 
  'orderDir': "orderDir_example", // String | 
  'clientId': 56, // Number | 
  'clientPaymentId': 56, // Number | 
  'paymentType': "paymentType_example", // String | 
  'updateBy': "updateBy_example", // String | 
  'amountGt': 3.4, // Number | 
  'amountLt': 3.4, // Number | 
  'paymentTimeGt': "paymentTimeGt_example", // String | 
  'paymentTimeLt': "paymentTimeLt_example", // String | 
  'receivingTimeGt': "receivingTimeGt_example", // String | 
  'receivingTimeLt': "receivingTimeLt_example" // String | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.financeAllPaymentListGet(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **page** | **Number**|  | [optional] 
 **perPage** | **Number**|  | [optional] 
 **orderBy** | **String**|  | [optional] 
 **orderDir** | **String**|  | [optional] 
 **clientId** | **Number**|  | [optional] 
 **clientPaymentId** | **Number**|  | [optional] 
 **paymentType** | **String**|  | [optional] 
 **updateBy** | **String**|  | [optional] 
 **amountGt** | **Number**|  | [optional] 
 **amountLt** | **Number**|  | [optional] 
 **paymentTimeGt** | **String**|  | [optional] 
 **paymentTimeLt** | **String**|  | [optional] 
 **receivingTimeGt** | **String**|  | [optional] 
 **receivingTimeLt** | **String**|  | [optional] 

### Return type

[**InlineResponse200100**](InlineResponse200100.md)

### Authorization

[auth_token](../README.md#auth_token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="financeAutoInvoiceListGet"></a>
# **financeAutoInvoiceListGet**
> InlineResponse20092 financeAutoInvoiceListGet(opts)



Gets auto invoice carriers

### Example
```javascript
var DnlApi = require('dnl_api');
var defaultClient = DnlApi.ApiClient.instance;

// Configure API key authorization: auth_token
var auth_token = defaultClient.authentications['auth_token'];
auth_token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//auth_token.apiKeyPrefix = 'Token';

var apiInstance = new DnlApi.FinanceApi();

var opts = { 
  'page': 56, // Number | 
  'perPage': 56, // Number | 
  'orderBy': "orderBy_example", // String | 
  'orderDir': "orderDir_example", // String | 
  'name': "name_example", // String | 
  'paymentTermId': 56 // Number | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.financeAutoInvoiceListGet(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **page** | **Number**|  | [optional] 
 **perPage** | **Number**|  | [optional] 
 **orderBy** | **String**|  | [optional] 
 **orderDir** | **String**|  | [optional] 
 **name** | **String**|  | [optional] 
 **paymentTermId** | **Number**|  | [optional] 

### Return type

[**InlineResponse20092**](InlineResponse20092.md)

### Authorization

[auth_token](../README.md#auth_token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="financeGatewayPaymentsGet"></a>
# **financeGatewayPaymentsGet**
> InlineResponse20098 financeGatewayPaymentsGet(opts)



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

var apiInstance = new DnlApi.FinanceApi();

var opts = { 
  'page': 56, // Number | 
  'perPage': 56, // Number | 
  'orderBy': "orderBy_example", // String | 
  'orderDir': "orderDir_example", // String | 
  'cardnumber': "cardnumber_example", // String | 
  'clientId': 56, // Number | 
  'paypalId': "paypalId_example", // String | 
  'paypalTransactionId': "paypalTransactionId_example", // String | 
  'status': "status_example", // String | 
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
apiInstance.financeGatewayPaymentsGet(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **page** | **Number**|  | [optional] 
 **perPage** | **Number**|  | [optional] 
 **orderBy** | **String**|  | [optional] 
 **orderDir** | **String**|  | [optional] 
 **cardnumber** | **String**|  | [optional] 
 **clientId** | **Number**|  | [optional] 
 **paypalId** | **String**|  | [optional] 
 **paypalTransactionId** | **String**|  | [optional] 
 **status** | **String**|  | [optional] 
 **type** | **String**|  | [optional] 
 **paidOnGt** | **String**|  | [optional] 
 **paidOnLt** | **String**|  | [optional] 

### Return type

[**InlineResponse20098**](InlineResponse20098.md)

### Authorization

[auth_token](../README.md#auth_token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="financeInvoiceAllDelete"></a>
# **financeInvoiceAllDelete**
> InlineResponse2002 financeInvoiceAllDelete(opts)



Deletes multiple found invoice

### Example
```javascript
var DnlApi = require('dnl_api');
var defaultClient = DnlApi.ApiClient.instance;

// Configure API key authorization: auth_token
var auth_token = defaultClient.authentications['auth_token'];
auth_token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//auth_token.apiKeyPrefix = 'Token';

var apiInstance = new DnlApi.FinanceApi();

var opts = { 
  'clientId': 56, // Number | 
  'clientName': "clientName_example", // String | 
  'createType': "createType_example", // String | 
  'dueDateGt': "dueDateGt_example", // String | 
  'dueDateLt': "dueDateLt_example", // String | 
  'invoiceDateGt': "invoiceDateGt_example", // String | 
  'invoiceDateLt': "invoiceDateLt_example", // String | 
  'invoiceIdIn': "invoiceIdIn_example", // String | 
  'invoiceNumber': "invoiceNumber_example", // String | 
  'paid': true, // Boolean | 
  'state': "state_example", // String | 
  'status': 56 // Number | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.financeInvoiceAllDelete(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **clientId** | **Number**|  | [optional] 
 **clientName** | **String**|  | [optional] 
 **createType** | **String**|  | [optional] 
 **dueDateGt** | **String**|  | [optional] 
 **dueDateLt** | **String**|  | [optional] 
 **invoiceDateGt** | **String**|  | [optional] 
 **invoiceDateLt** | **String**|  | [optional] 
 **invoiceIdIn** | **String**|  | [optional] 
 **invoiceNumber** | **String**|  | [optional] 
 **paid** | **Boolean**|  | [optional] 
 **state** | **String**|  | [optional] 
 **status** | **Number**|  | [optional] 

### Return type

[**InlineResponse2002**](InlineResponse2002.md)

### Authorization

[auth_token](../README.md#auth_token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="financeInvoiceFileInvoiceIdGet"></a>
# **financeInvoiceFileInvoiceIdGet**
> InlineResponse20090 financeInvoiceFileInvoiceIdGet(invoiceId)



Gets invoice pdf file

### Example
```javascript
var DnlApi = require('dnl_api');
var defaultClient = DnlApi.ApiClient.instance;

// Configure API key authorization: auth_token
var auth_token = defaultClient.authentications['auth_token'];
auth_token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//auth_token.apiKeyPrefix = 'Token';

var apiInstance = new DnlApi.FinanceApi();

var invoiceId = 789; // Number | Invoice pdf file id to get info about


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.financeInvoiceFileInvoiceIdGet(invoiceId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **invoiceId** | **Number**| Invoice pdf file id to get info about | 

### Return type

[**InlineResponse20090**](InlineResponse20090.md)

### Authorization

[auth_token](../README.md#auth_token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/pdf

<a name="financeInvoiceInvoiceIdDelete"></a>
# **financeInvoiceInvoiceIdDelete**
> Success financeInvoiceInvoiceIdDelete(invoiceId)



Deletes invoice

### Example
```javascript
var DnlApi = require('dnl_api');
var defaultClient = DnlApi.ApiClient.instance;

// Configure API key authorization: auth_token
var auth_token = defaultClient.authentications['auth_token'];
auth_token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//auth_token.apiKeyPrefix = 'Token';

var apiInstance = new DnlApi.FinanceApi();

var invoiceId = 789; // Number | Invoice id to get info about


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.financeInvoiceInvoiceIdDelete(invoiceId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **invoiceId** | **Number**| Invoice id to get info about | 

### Return type

[**Success**](Success.md)

### Authorization

[auth_token](../README.md#auth_token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="financeInvoiceInvoiceIdGet"></a>
# **financeInvoiceInvoiceIdGet**
> InlineResponse20089 financeInvoiceInvoiceIdGet(invoiceId)



Gets invoice

### Example
```javascript
var DnlApi = require('dnl_api');
var defaultClient = DnlApi.ApiClient.instance;

// Configure API key authorization: auth_token
var auth_token = defaultClient.authentications['auth_token'];
auth_token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//auth_token.apiKeyPrefix = 'Token';

var apiInstance = new DnlApi.FinanceApi();

var invoiceId = 789; // Number | Invoice id to get info about


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.financeInvoiceInvoiceIdGet(invoiceId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **invoiceId** | **Number**| Invoice id to get info about | 

### Return type

[**InlineResponse20089**](InlineResponse20089.md)

### Authorization

[auth_token](../README.md#auth_token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="financeInvoiceInvoiceIdPatch"></a>
# **financeInvoiceInvoiceIdPatch**
> InlineResponse20089 financeInvoiceInvoiceIdPatch(invoiceId, opts)



Modifies invoice

### Example
```javascript
var DnlApi = require('dnl_api');
var defaultClient = DnlApi.ApiClient.instance;

// Configure API key authorization: auth_token
var auth_token = defaultClient.authentications['auth_token'];
auth_token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//auth_token.apiKeyPrefix = 'Token';

var apiInstance = new DnlApi.FinanceApi();

var invoiceId = 789; // Number | Invoice id to get info about

var opts = { 
  'body': new DnlApi.Invoice() // Invoice | Invoice to modify
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.financeInvoiceInvoiceIdPatch(invoiceId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **invoiceId** | **Number**| Invoice id to get info about | 
 **body** | [**Invoice**](Invoice.md)| Invoice to modify | [optional] 

### Return type

[**InlineResponse20089**](InlineResponse20089.md)

### Authorization

[auth_token](../README.md#auth_token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="financeInvoiceListGet"></a>
# **financeInvoiceListGet**
> InlineResponse20091 financeInvoiceListGet(opts)



Gets invoices

### Example
```javascript
var DnlApi = require('dnl_api');
var defaultClient = DnlApi.ApiClient.instance;

// Configure API key authorization: auth_token
var auth_token = defaultClient.authentications['auth_token'];
auth_token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//auth_token.apiKeyPrefix = 'Token';

var apiInstance = new DnlApi.FinanceApi();

var opts = { 
  'page': 56, // Number | 
  'perPage': 56, // Number | 
  'orderBy': "orderBy_example", // String | 
  'orderDir': "orderDir_example", // String | 
  'clientId': 56, // Number | 
  'clientName': "clientName_example", // String | 
  'createType': "createType_example", // String | 
  'invoiceNumber': "invoiceNumber_example", // String | 
  'paid': true, // Boolean | 
  'state': "state_example", // String | 
  'status': 56, // Number | 
  'dueDateGt': "dueDateGt_example", // String | 
  'dueDateLt': "dueDateLt_example", // String | 
  'invoiceDateGt': "invoiceDateGt_example", // String | 
  'invoiceDateLt': "invoiceDateLt_example", // String | 
  'invoiceIdIn': "invoiceIdIn_example" // String | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.financeInvoiceListGet(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **page** | **Number**|  | [optional] 
 **perPage** | **Number**|  | [optional] 
 **orderBy** | **String**|  | [optional] 
 **orderDir** | **String**|  | [optional] 
 **clientId** | **Number**|  | [optional] 
 **clientName** | **String**|  | [optional] 
 **createType** | **String**|  | [optional] 
 **invoiceNumber** | **String**|  | [optional] 
 **paid** | **Boolean**|  | [optional] 
 **state** | **String**|  | [optional] 
 **status** | **Number**|  | [optional] 
 **dueDateGt** | **String**|  | [optional] 
 **dueDateLt** | **String**|  | [optional] 
 **invoiceDateGt** | **String**|  | [optional] 
 **invoiceDateLt** | **String**|  | [optional] 
 **invoiceIdIn** | **String**|  | [optional] 

### Return type

[**InlineResponse20091**](InlineResponse20091.md)

### Authorization

[auth_token](../README.md#auth_token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="financeInvoiceLogIdSendPatch"></a>
# **financeInvoiceLogIdSendPatch**
> Success financeInvoiceLogIdSendPatch(id)





### Example
```javascript
var DnlApi = require('dnl_api');
var defaultClient = DnlApi.ApiClient.instance;

// Configure API key authorization: auth_token
var auth_token = defaultClient.authentications['auth_token'];
auth_token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//auth_token.apiKeyPrefix = 'Token';

var apiInstance = new DnlApi.FinanceApi();

var id = 789; // Number | mark as sent


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.financeInvoiceLogIdSendPatch(id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| mark as sent | 

### Return type

[**Success**](Success.md)

### Authorization

[auth_token](../README.md#auth_token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="financeInvoicePost"></a>
# **financeInvoicePost**
> ObjectCreatedMultiple financeInvoicePost(opts)



Creates new invoice

### Example
```javascript
var DnlApi = require('dnl_api');
var defaultClient = DnlApi.ApiClient.instance;

// Configure API key authorization: auth_token
var auth_token = defaultClient.authentications['auth_token'];
auth_token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//auth_token.apiKeyPrefix = 'Token';

var apiInstance = new DnlApi.FinanceApi();

var opts = { 
  'body': new DnlApi.InvoiceGenerationMany() // InvoiceGenerationMany | Invoice to create
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.financeInvoicePost(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**InvoiceGenerationMany**](InvoiceGenerationMany.md)| Invoice to create | [optional] 

### Return type

[**ObjectCreatedMultiple**](ObjectCreatedMultiple.md)

### Authorization

[auth_token](../README.md#auth_token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="financePaymentClientPaymentIdDelete"></a>
# **financePaymentClientPaymentIdDelete**
> Success financePaymentClientPaymentIdDelete(clientPaymentId)



Deletes clientpayment

### Example
```javascript
var DnlApi = require('dnl_api');
var defaultClient = DnlApi.ApiClient.instance;

// Configure API key authorization: auth_token
var auth_token = defaultClient.authentications['auth_token'];
auth_token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//auth_token.apiKeyPrefix = 'Token';

var apiInstance = new DnlApi.FinanceApi();

var clientPaymentId = 789; // Number | ClientPayment id to get info about


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.financePaymentClientPaymentIdDelete(clientPaymentId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **clientPaymentId** | **Number**| ClientPayment id to get info about | 

### Return type

[**Success**](Success.md)

### Authorization

[auth_token](../README.md#auth_token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="financePaymentClientPaymentIdEditAndSendNotePost"></a>
# **financePaymentClientPaymentIdEditAndSendNotePost**
> Success financePaymentClientPaymentIdEditAndSendNotePost(clientPaymentId, opts)





### Example
```javascript
var DnlApi = require('dnl_api');
var defaultClient = DnlApi.ApiClient.instance;

// Configure API key authorization: auth_token
var auth_token = defaultClient.authentications['auth_token'];
auth_token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//auth_token.apiKeyPrefix = 'Token';

var apiInstance = new DnlApi.FinanceApi();

var clientPaymentId = 789; // Number | Payment id

var opts = { 
  'body': new DnlApi.ClientPaymentNote() // ClientPaymentNote | Note to payment
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.financePaymentClientPaymentIdEditAndSendNotePost(clientPaymentId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **clientPaymentId** | **Number**| Payment id | 
 **body** | [**ClientPaymentNote**](ClientPaymentNote.md)| Note to payment | [optional] 

### Return type

[**Success**](Success.md)

### Authorization

[auth_token](../README.md#auth_token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="financePaymentClientPaymentIdGet"></a>
# **financePaymentClientPaymentIdGet**
> InlineResponse20087 financePaymentClientPaymentIdGet(clientPaymentId)



Gets clientpayment

### Example
```javascript
var DnlApi = require('dnl_api');
var defaultClient = DnlApi.ApiClient.instance;

// Configure API key authorization: auth_token
var auth_token = defaultClient.authentications['auth_token'];
auth_token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//auth_token.apiKeyPrefix = 'Token';

var apiInstance = new DnlApi.FinanceApi();

var clientPaymentId = 789; // Number | ClientPayment id to get info about


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.financePaymentClientPaymentIdGet(clientPaymentId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **clientPaymentId** | **Number**| ClientPayment id to get info about | 

### Return type

[**InlineResponse20087**](InlineResponse20087.md)

### Authorization

[auth_token](../README.md#auth_token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="financePaymentClientPaymentIdPatch"></a>
# **financePaymentClientPaymentIdPatch**
> InlineResponse20087 financePaymentClientPaymentIdPatch(clientPaymentId, opts)



Modifies clientpayment

### Example
```javascript
var DnlApi = require('dnl_api');
var defaultClient = DnlApi.ApiClient.instance;

// Configure API key authorization: auth_token
var auth_token = defaultClient.authentications['auth_token'];
auth_token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//auth_token.apiKeyPrefix = 'Token';

var apiInstance = new DnlApi.FinanceApi();

var clientPaymentId = 789; // Number | ClientPayment id to get info about

var opts = { 
  'body': new DnlApi.ClientPayment() // ClientPayment | ClientPayment to modify
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.financePaymentClientPaymentIdPatch(clientPaymentId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **clientPaymentId** | **Number**| ClientPayment id to get info about | 
 **body** | [**ClientPayment**](ClientPayment.md)| ClientPayment to modify | [optional] 

### Return type

[**InlineResponse20087**](InlineResponse20087.md)

### Authorization

[auth_token](../README.md#auth_token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="financeReceivedPaymentListGet"></a>
# **financeReceivedPaymentListGet**
> InlineResponse200100 financeReceivedPaymentListGet(opts)



Gets received payments

### Example
```javascript
var DnlApi = require('dnl_api');
var defaultClient = DnlApi.ApiClient.instance;

// Configure API key authorization: auth_token
var auth_token = defaultClient.authentications['auth_token'];
auth_token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//auth_token.apiKeyPrefix = 'Token';

var apiInstance = new DnlApi.FinanceApi();

var opts = { 
  'page': 56, // Number | 
  'perPage': 56, // Number | 
  'orderBy': "orderBy_example", // String | 
  'orderDir': "orderDir_example", // String | 
  'clientId': 56, // Number | 
  'clientPaymentId': 56, // Number | 
  'paymentType': "paymentType_example", // String | 
  'updateBy': "updateBy_example", // String | 
  'amountGt': 3.4, // Number | 
  'amountLt': 3.4, // Number | 
  'paymentTimeGt': "paymentTimeGt_example", // String | 
  'paymentTimeLt': "paymentTimeLt_example", // String | 
  'receivingTimeGt': "receivingTimeGt_example", // String | 
  'receivingTimeLt': "receivingTimeLt_example" // String | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.financeReceivedPaymentListGet(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **page** | **Number**|  | [optional] 
 **perPage** | **Number**|  | [optional] 
 **orderBy** | **String**|  | [optional] 
 **orderDir** | **String**|  | [optional] 
 **clientId** | **Number**|  | [optional] 
 **clientPaymentId** | **Number**|  | [optional] 
 **paymentType** | **String**|  | [optional] 
 **updateBy** | **String**|  | [optional] 
 **amountGt** | **Number**|  | [optional] 
 **amountLt** | **Number**|  | [optional] 
 **paymentTimeGt** | **String**|  | [optional] 
 **paymentTimeLt** | **String**|  | [optional] 
 **receivingTimeGt** | **String**|  | [optional] 
 **receivingTimeLt** | **String**|  | [optional] 

### Return type

[**InlineResponse200100**](InlineResponse200100.md)

### Authorization

[auth_token](../README.md#auth_token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="financeSentPaymentClientPaymentIdDelete"></a>
# **financeSentPaymentClientPaymentIdDelete**
> Success financeSentPaymentClientPaymentIdDelete(clientPaymentId)



Deletes clientpayment

### Example
```javascript
var DnlApi = require('dnl_api');
var defaultClient = DnlApi.ApiClient.instance;

// Configure API key authorization: auth_token
var auth_token = defaultClient.authentications['auth_token'];
auth_token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//auth_token.apiKeyPrefix = 'Token';

var apiInstance = new DnlApi.FinanceApi();

var clientPaymentId = 789; // Number | ClientPayment id to get info about


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.financeSentPaymentClientPaymentIdDelete(clientPaymentId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **clientPaymentId** | **Number**| ClientPayment id to get info about | 

### Return type

[**Success**](Success.md)

### Authorization

[auth_token](../README.md#auth_token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="financeSentPaymentClientPaymentIdGet"></a>
# **financeSentPaymentClientPaymentIdGet**
> InlineResponse20099 financeSentPaymentClientPaymentIdGet(clientPaymentId)



Gets clientpayment

### Example
```javascript
var DnlApi = require('dnl_api');
var defaultClient = DnlApi.ApiClient.instance;

// Configure API key authorization: auth_token
var auth_token = defaultClient.authentications['auth_token'];
auth_token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//auth_token.apiKeyPrefix = 'Token';

var apiInstance = new DnlApi.FinanceApi();

var clientPaymentId = 789; // Number | ClientPayment id to get info about


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.financeSentPaymentClientPaymentIdGet(clientPaymentId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **clientPaymentId** | **Number**| ClientPayment id to get info about | 

### Return type

[**InlineResponse20099**](InlineResponse20099.md)

### Authorization

[auth_token](../README.md#auth_token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="financeSentPaymentClientPaymentIdPatch"></a>
# **financeSentPaymentClientPaymentIdPatch**
> InlineResponse20099 financeSentPaymentClientPaymentIdPatch(clientPaymentId, opts)



Modifies clientpayment

### Example
```javascript
var DnlApi = require('dnl_api');
var defaultClient = DnlApi.ApiClient.instance;

// Configure API key authorization: auth_token
var auth_token = defaultClient.authentications['auth_token'];
auth_token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//auth_token.apiKeyPrefix = 'Token';

var apiInstance = new DnlApi.FinanceApi();

var clientPaymentId = 789; // Number | ClientPayment id to get info about

var opts = { 
  'body': new DnlApi.ClientPaymentSent() // ClientPaymentSent | ClientPayment to modify
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.financeSentPaymentClientPaymentIdPatch(clientPaymentId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **clientPaymentId** | **Number**| ClientPayment id to get info about | 
 **body** | [**ClientPaymentSent**](ClientPaymentSent.md)| ClientPayment to modify | [optional] 

### Return type

[**InlineResponse20099**](InlineResponse20099.md)

### Authorization

[auth_token](../README.md#auth_token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="financeSentPaymentListGet"></a>
# **financeSentPaymentListGet**
> InlineResponse200100 financeSentPaymentListGet(opts)



Gets sent payments

### Example
```javascript
var DnlApi = require('dnl_api');
var defaultClient = DnlApi.ApiClient.instance;

// Configure API key authorization: auth_token
var auth_token = defaultClient.authentications['auth_token'];
auth_token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//auth_token.apiKeyPrefix = 'Token';

var apiInstance = new DnlApi.FinanceApi();

var opts = { 
  'page': 56, // Number | 
  'perPage': 56, // Number | 
  'orderBy': "orderBy_example", // String | 
  'orderDir': "orderDir_example", // String | 
  'clientId': 56, // Number | 
  'clientPaymentId': 56, // Number | 
  'paymentType': "paymentType_example", // String | 
  'updateBy': "updateBy_example", // String | 
  'amountGt': 3.4, // Number | 
  'amountLt': 3.4, // Number | 
  'paymentTimeGt': "paymentTimeGt_example", // String | 
  'paymentTimeLt': "paymentTimeLt_example", // String | 
  'receivingTimeGt': "receivingTimeGt_example", // String | 
  'receivingTimeLt': "receivingTimeLt_example" // String | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.financeSentPaymentListGet(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **page** | **Number**|  | [optional] 
 **perPage** | **Number**|  | [optional] 
 **orderBy** | **String**|  | [optional] 
 **orderDir** | **String**|  | [optional] 
 **clientId** | **Number**|  | [optional] 
 **clientPaymentId** | **Number**|  | [optional] 
 **paymentType** | **String**|  | [optional] 
 **updateBy** | **String**|  | [optional] 
 **amountGt** | **Number**|  | [optional] 
 **amountLt** | **Number**|  | [optional] 
 **paymentTimeGt** | **String**|  | [optional] 
 **paymentTimeLt** | **String**|  | [optional] 
 **receivingTimeGt** | **String**|  | [optional] 
 **receivingTimeLt** | **String**|  | [optional] 

### Return type

[**InlineResponse200100**](InlineResponse200100.md)

### Authorization

[auth_token](../README.md#auth_token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="financeSentPaymentPost"></a>
# **financeSentPaymentPost**
> ObjectCreated financeSentPaymentPost(opts)



Creates new clientpayment

### Example
```javascript
var DnlApi = require('dnl_api');
var defaultClient = DnlApi.ApiClient.instance;

// Configure API key authorization: auth_token
var auth_token = defaultClient.authentications['auth_token'];
auth_token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//auth_token.apiKeyPrefix = 'Token';

var apiInstance = new DnlApi.FinanceApi();

var opts = { 
  'body': new DnlApi.ClientPaymentSent() // ClientPaymentSent | ClientPayment to create
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.financeSentPaymentPost(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**ClientPaymentSent**](ClientPaymentSent.md)| ClientPayment to create | [optional] 

### Return type

[**ObjectCreated**](ObjectCreated.md)

### Authorization

[auth_token](../README.md#auth_token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


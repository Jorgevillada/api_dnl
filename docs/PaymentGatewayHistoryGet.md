# DnlApi.PaymentGatewayHistoryGet

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**clientId** | **Number** |  | [optional] 
**id** | **Number** |  | [optional] 
**paypalFee** | **Number** |  | [optional] 
**cardnumber** | **String** |  | [optional] 
**error** | **String** |  | [optional] 
**paypalId** | **String** |  | [optional] 
**paidOn** | **Date** |  | [optional] 
**type** | **String** |  | [optional] [default to &#39;undefined&#39;]
**actualReceived** | **Number** |  | [optional] 
**clientName** | **String** |  | [optional] 
**cardexpyear** | **String** |  | [optional] 
**returnCode** | **String** |  | [optional] 
**cardexpmonth** | **String** |  | [optional] 
**stripId** | **String** |  | [optional] 
**stripTransactionId** | **String** |  | [optional] 
**paypalTransactionId** | **String** |  | [optional] 
**status** | **String** |  | [optional] [default to &#39;initial&#39;]
**enteredOn** | **Date** |  | [optional] 
**amount** | **Number** |  | [optional] 
**response** | **String** |  | [optional] 


<a name="TypeEnum"></a>
## Enum: TypeEnum


* `yourpay` (value: `"yourpay"`)

* `paypal` (value: `"paypal"`)

* `undefined` (value: `"undefined"`)




<a name="StatusEnum"></a>
## Enum: StatusEnum


* `success` (value: `"success"`)

* `initial` (value: `"initial"`)

* `error` (value: `"error"`)





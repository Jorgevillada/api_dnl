# DnlApi.PaymentGatewayHistory

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**returnCode** | **String** |  | [optional] 
**stripId** | **String** |  | [optional] 
**paypalId** | **String** |  | [optional] 
**paypalFee** | **Number** |  | [optional] 
**status** | **String** |  | [optional] [default to &#39;initial&#39;]
**cardexpyear** | **String** |  | [optional] 
**type** | **String** |  | [optional] [default to &#39;undefined&#39;]
**paypalTransactionId** | **String** |  | [optional] 
**clientId** | **Number** |  | [optional] 
**clientNameamount** | **String** |  | [optional] 
**actualReceived** | **Number** |  | [optional] 
**paidOn** | **Date** |  | [optional] 
**error** | **String** |  | [optional] 
**stripTransactionId** | **String** |  | [optional] 
**cardnumber** | **String** |  | [optional] 
**response** | **String** |  | [optional] 
**enteredOn** | **Date** |  | [optional] 
**cardexpmonth** | **String** |  | [optional] 


<a name="StatusEnum"></a>
## Enum: StatusEnum


* `initial` (value: `"initial"`)

* `error` (value: `"error"`)

* `success` (value: `"success"`)




<a name="TypeEnum"></a>
## Enum: TypeEnum


* `undefined` (value: `"undefined"`)

* `paypal` (value: `"paypal"`)

* `yourpay` (value: `"yourpay"`)





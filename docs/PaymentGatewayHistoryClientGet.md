# DnlApi.PaymentGatewayHistoryClientGet

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**amount** | **Number** |  | [optional] 
**stripId** | **String** |  | [optional] 
**paypalId** | **String** |  | [optional] 
**paypalFee** | **Number** |  | [optional] 
**status** | **String** |  | [optional] [default to &#39;initial&#39;]
**paidOn** | **Date** |  | [optional] 
**type** | **String** |  | [optional] [default to &#39;undefined&#39;]
**clientId** | **Number** |  | [optional] 
**paypalTransactionId** | **String** |  | [optional] 
**returnCode** | **String** |  | [optional] 
**actualReceived** | **Number** |  | [optional] 
**error** | **String** |  | [optional] 
**id** | **Number** |  | [optional] 
**stripTransactionId** | **String** |  | [optional] 
**clientName** | **String** |  | [optional] 
**response** | **String** |  | [optional] 
**enteredOn** | **Date** |  | [optional] 


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





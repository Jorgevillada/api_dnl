# DnlApi.AuthorizationLogGet

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**loginIp** | **String** |  | [optional] 
**username** | **String** |  | [optional] 
**failedReason** | **String** |  | [optional] [default to &#39;success&#39;]
**status** | **String** |  | [optional] [default to &#39;pass&#39;]
**enteredPassword** | **String** |  | [optional] 
**loginTime** | **Date** |  | [optional] 


<a name="FailedReasonEnum"></a>
## Enum: FailedReasonEnum


* `fail` (value: `"fail"`)

* `success` (value: `"success"`)

* `forbidden` (value: `"forbidden"`)




<a name="StatusEnum"></a>
## Enum: StatusEnum


* `pass` (value: `"pass"`)

* `key` (value: `"key"`)





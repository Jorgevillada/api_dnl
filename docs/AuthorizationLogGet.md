# DnlApi.AuthorizationLogGet

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**failedReason** | **String** |  | [optional] [default to &#39;success&#39;]
**status** | **String** |  | [optional] [default to &#39;pass&#39;]
**loginIp** | **String** |  | [optional] 
**username** | **String** |  | [optional] 
**enteredPassword** | **String** |  | [optional] 
**loginTime** | **Date** |  | [optional] 


<a name="FailedReasonEnum"></a>
## Enum: FailedReasonEnum


* `success` (value: `"success"`)

* `fail` (value: `"fail"`)

* `forbidden` (value: `"forbidden"`)




<a name="StatusEnum"></a>
## Enum: StatusEnum


* `pass` (value: `"pass"`)

* `key` (value: `"key"`)





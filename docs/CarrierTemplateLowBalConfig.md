# DnlApi.CarrierTemplateLowBalConfig

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**dailySendTime** | **Number** |  | [optional] 
**duplicateDays** | **Number** |  | [optional] 
**disableTrunksDays** | **Number** |  | [optional] 
**isNotify** | **Boolean** |  | [optional] 
**sendTimeType** | **String** |  | [optional] [default to &#39;daily&#39;]
**sendTo** | **Number** |  | [optional] 
**percentageNotifyBalance** | **Number** |  | [optional] 
**duplicateSendDays** | **Number** |  | [optional] 
**valueType** | **String** |  | [optional] [default to &#39;Actual Balance&#39;]
**actualNotifyBalance** | **Number** |  | [optional] 


<a name="SendTimeTypeEnum"></a>
## Enum: SendTimeTypeEnum


* `hourly` (value: `"hourly"`)

* `daily` (value: `"daily"`)




<a name="ValueTypeEnum"></a>
## Enum: ValueTypeEnum


* `Percentage` (value: `"Percentage"`)

* `Actual Balance` (value: `"Actual Balance"`)





# DnlApi.CarrierTemplateLowBalConfig

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**percentageNotifyBalance** | **Number** |  | [optional] 
**actualNotifyBalance** | **Number** |  | [optional] 
**sendTo** | **Number** |  | [optional] 
**duplicateSendDays** | **Number** |  | [optional] 
**duplicateDays** | **Number** |  | [optional] 
**sendTimeType** | **String** |  | [optional] [default to &#39;daily&#39;]
**disableTrunksDays** | **Number** |  | [optional] 
**isNotify** | **Boolean** |  | [optional] 
**dailySendTime** | **Number** |  | [optional] 
**valueType** | **String** |  | [optional] [default to &#39;Actual Balance&#39;]


<a name="SendTimeTypeEnum"></a>
## Enum: SendTimeTypeEnum


* `daily` (value: `"daily"`)

* `hourly` (value: `"hourly"`)




<a name="ValueTypeEnum"></a>
## Enum: ValueTypeEnum


* `Actual Balance` (value: `"Actual Balance"`)

* `Percentage` (value: `"Percentage"`)





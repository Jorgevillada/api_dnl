# DnlApi.RateUploadTask

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**allRateEndDate** | **Date** |  | [optional] 
**useOcnLataCode** | **String** |  | [optional] [default to &#39;No&#39;]
**rateTableCodeDeckId** | **Number** |  | [optional] 
**rateDateFormat** | **String** |  | [optional] 
**rateTableId** | **Number** |  | [optional] 
**codeNameMatch** | **Boolean** |  | [optional] 
**info** | [**RateUploadTaskInfo**](RateUploadTaskInfo.md) |  | 
**codeDeckFlag** | **String** |  | [optional] [default to &#39;use rate code&#39;]
**method** | **String** |  | [optional] [default to &#39;ignore&#39;]
**rateEndDate** | **String** |  | [optional] 


<a name="UseOcnLataCodeEnum"></a>
## Enum: UseOcnLataCodeEnum


* `No` (value: `"No"`)

* `Yes` (value: `"Yes"`)




<a name="RateDateFormatEnum"></a>
## Enum: RateDateFormatEnum


* `mm/dd/yyyy` (value: `"mm/dd/yyyy"`)

* `yyyy-mm-dd` (value: `"yyyy-mm-dd"`)

* `dd-mm-yyyy` (value: `"dd-mm-yyyy"`)

* `dd/mm/yyyy` (value: `"dd/mm/yyyy"`)

* `yyyy/mm/dd` (value: `"yyyy/mm/dd"`)




<a name="CodeDeckFlagEnum"></a>
## Enum: CodeDeckFlagEnum


* `rate code` (value: `"use rate code"`)

* `system global code deck` (value: `"use system global code deck"`)




<a name="MethodEnum"></a>
## Enum: MethodEnum


* `ignore` (value: `"ignore"`)

* `delete` (value: `"delete"`)

* `update` (value: `"update"`)





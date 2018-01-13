# DnlApi.RateSend

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**rateTableId** | **Number** |  | [optional] 
**emailTemplateId** | **Number** |  | [optional] 
**downloadMethod** | **String** |  | [optional] [default to &#39;link&#39;]
**zip** | **Boolean** |  | [optional] 
**trunks** | **[Number]** |  | [optional] 
**emailDirect** | [**SendRateDirect**](SendRateDirect.md) |  | [optional] 
**downloadDeadline** | **Date** |  | [optional] 
**sendSpecifyEmail** | **String** |  | [optional] 
**sendType** | **String** |  | [optional] [default to &#39;Send to carriers using this rate table&#39;]
**isDisable** | **Boolean** |  | [optional] 
**effectiveDate** | **Date** |  | [optional] 
**format** | **String** |  | [optional] [default to &#39;csv&#39;]
**isEmailAlert** | **Boolean** |  | [optional] 


<a name="DownloadMethodEnum"></a>
## Enum: DownloadMethodEnum


* `link` (value: `"link"`)

* `attachment` (value: `"attachment"`)




<a name="SendTypeEnum"></a>
## Enum: SendTypeEnum


* `Send to carriers using this rate table` (value: `"Send to carriers using this rate table"`)

* `Specify my own recipients` (value: `"Specify my own recipients"`)




<a name="FormatEnum"></a>
## Enum: FormatEnum


* `csv` (value: `"csv"`)

* `json` (value: `"json"`)

* `xls` (value: `"xls"`)





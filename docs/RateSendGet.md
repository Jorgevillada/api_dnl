# DnlApi.RateSendGet

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**rateTableId** | **Number** |  | [optional] 
**createTime** | **Date** |  | [optional] 
**file** | **String** |  | [optional] 
**totalRecords** | **Number** |  | [optional] 
**emailTemplateId** | **Number** |  | [optional] 
**status** | **String** |  | [optional] [default to &#39;waiting&#39;]
**completedRecords** | **Number** |  | [optional] 
**downloadMethod** | **String** |  | [optional] [default to &#39;link&#39;]
**zip** | **Boolean** |  | [optional] 
**emailDirect** | [**SendRateDirectGet**](SendRateDirectGet.md) |  | [optional] 
**downloadDeadline** | **Date** |  | [optional] 
**error** | **String** |  | [optional] 
**jobId** | **Number** |  | [optional] 
**sendSpecifyEmail** | **String** |  | [optional] 
**sendType** | **String** |  | [optional] [default to &#39;Send to carriers using this rate table&#39;]
**format** | **String** |  | [optional] [default to &#39;csv&#39;]
**isDisable** | **Boolean** |  | [optional] 
**effectiveDate** | **Date** |  | [optional] 
**trunks** | **[Number]** |  | [optional] 
**isEmailAlert** | **Boolean** |  | [optional] 


<a name="StatusEnum"></a>
## Enum: StatusEnum


* `waiting` (value: `"waiting"`)

* `generated` (value: `"generated"`)

* `sent` (value: `"sent"`)

* `sent failed` (value: `"sent failed"`)

* `sent success` (value: `"sent success"`)




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





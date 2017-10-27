# DnlApi.RateSendGet

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**isEmailAlert** | **Boolean** |  | [optional] 
**jobId** | **Number** |  | [optional] 
**completedRecords** | **Number** |  | [optional] 
**rateTableId** | **Number** |  | [optional] 
**status** | **String** |  | [optional] [default to &#39;waiting&#39;]
**file** | **String** |  | [optional] 
**createTime** | **Date** |  | [optional] 
**isDisable** | **Boolean** |  | [optional] 
**error** | **String** |  | [optional] 
**trunks** | **[Number]** |  | [optional] 
**effectiveDate** | **Date** |  | [optional] 
**downloadDeadline** | **Date** |  | [optional] 
**totalRecords** | **Number** |  | [optional] 
**format** | **String** |  | [optional] [default to &#39;csv&#39;]


<a name="StatusEnum"></a>
## Enum: StatusEnum


* `generated` (value: `"generated"`)

* `waiting` (value: `"waiting"`)

* `sent success` (value: `"sent success"`)

* `sent` (value: `"sent"`)

* `sent failed` (value: `"sent failed"`)




<a name="FormatEnum"></a>
## Enum: FormatEnum


* `xls` (value: `"xls"`)

* `json` (value: `"json"`)

* `csv` (value: `"csv"`)





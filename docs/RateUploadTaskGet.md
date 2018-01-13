# DnlApi.RateUploadTaskGet

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**rateTableId** | **Number** |  | [optional] 
**rateTableName** | **String** |  | [optional] 
**progress** | **String** |  | [optional] 
**startDateTime** | **Date** |  | [optional] 
**endDateTime** | **Date** |  | [optional] 
**method** | **String** |  | [optional] [default to &#39;ignore&#39;]
**status** | **String** |  | [optional] [default to &#39;initial&#39;]
**id** | **Number** |  | [optional] 
**operatorUser** | **String** |  | [optional] 
**expenseDetail** | **String** |  | [optional] 
**uploadDateTime** | **Date** |  | [optional] 
**uploadOrigFile** | **String** |  | [optional] 


<a name="MethodEnum"></a>
## Enum: MethodEnum


* `ignore` (value: `"ignore"`)

* `delete` (value: `"delete"`)

* `update` (value: `"update"`)




<a name="StatusEnum"></a>
## Enum: StatusEnum


* `initial` (value: `"initial"`)

* `download rate` (value: `"download rate"`)

* `process rate` (value: `"process rate"`)

* `commit rate to db` (value: `"commit rate to db"`)

* `finished` (value: `"finished"`)

* `error` (value: `"error"`)

* `uploaded` (value: `"uploaded"`)

* `preprocess` (value: `"preprocess"`)

* `busy` (value: `"busy"`)





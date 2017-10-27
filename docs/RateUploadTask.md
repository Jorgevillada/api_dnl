# DnlApi.RateUploadTask

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**operatorUser** | **String** |  | [optional] 
**rateTableName** | **String** |  | [optional] 
**progress** | **String** |  | [optional] 
**rateTableId** | **Number** |  | [optional] 
**status** | **String** |  | [optional] [default to &#39;initial&#39;]
**method** | **String** |  | [optional] [default to &#39;ignore&#39;]
**id** | **Number** |  | [optional] 
**uploadDateTime** | **Date** |  | [optional] 
**endDateTime** | **Date** |  | [optional] 
**expenseDetail** | **String** |  | [optional] 
**startDateTime** | **Date** |  | [optional] 
**uploadOrigFile** | **String** |  | [optional] 


<a name="StatusEnum"></a>
## Enum: StatusEnum


* `finished` (value: `"finished"`)

* `download rate` (value: `"download rate"`)

* `process rate` (value: `"process rate"`)

* `commit rate to db` (value: `"commit rate to db"`)

* `error` (value: `"error"`)

* `initial` (value: `"initial"`)




<a name="MethodEnum"></a>
## Enum: MethodEnum


* `ignore` (value: `"ignore"`)

* `delete` (value: `"delete"`)

* `update` (value: `"update"`)





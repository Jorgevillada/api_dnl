# DnlApi.RerateCdrTaskGet

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**errCode** | **Number** |  | [optional] 
**downloadFile** | **String** |  | [optional] 
**toDate** | **Date** |  | [optional] 
**progress** | **String** |  | [optional] 
**id** | **Number** |  | [optional] 
**status** | **String** |  | [optional] [default to &#39;initial&#39;]
**updateUsJurisdiction** | **String** |  | [optional] [default to &#39;no&#39;]
**fromDate** | **Date** |  | [optional] 
**egressTrunks** | [**[RerateCdrTaskTrunks]**](RerateCdrTaskTrunks.md) |  | [optional] 
**gmt** | **Number** |  | [optional] 
**ingressTrunks** | [**[RerateCdrTaskTrunks]**](RerateCdrTaskTrunks.md) |  | [optional] 


<a name="StatusEnum"></a>
## Enum: StatusEnum


* `initial` (value: `"initial"`)

* `download cdr` (value: `"download cdr"`)

* `load rate` (value: `"load rate"`)

* `rerate cdr` (value: `"rerate cdr"`)

* `finished` (value: `"finished"`)

* `error` (value: `"error"`)




<a name="UpdateUsJurisdictionEnum"></a>
## Enum: UpdateUsJurisdictionEnum


* `no` (value: `"no"`)

* `yes` (value: `"yes"`)





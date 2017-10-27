# DnlApi.RerateCdrTaskGet

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**updateUsJurisdiction** | **String** |  | [optional] [default to &#39;no&#39;]
**egressTrunks** | [**[RerateCdrTaskTrunks]**](RerateCdrTaskTrunks.md) |  | [optional] 
**errCode** | **Number** |  | [optional] 
**progress** | **String** |  | [optional] 
**id** | **Number** |  | [optional] 
**downloadFile** | **String** |  | [optional] 
**fromDate** | **Date** |  | [optional] 
**toDate** | **Date** |  | [optional] 
**status** | **String** |  | [optional] [default to &#39;initial&#39;]
**ingressTrunks** | [**[RerateCdrTaskTrunks]**](RerateCdrTaskTrunks.md) |  | [optional] 
**gmt** | **Number** |  | [optional] 


<a name="UpdateUsJurisdictionEnum"></a>
## Enum: UpdateUsJurisdictionEnum


* `yes` (value: `"yes"`)

* `no` (value: `"no"`)




<a name="StatusEnum"></a>
## Enum: StatusEnum


* `finished` (value: `"finished"`)

* `load rate` (value: `"load rate"`)

* `download cdr` (value: `"download cdr"`)

* `error` (value: `"error"`)

* `initial` (value: `"initial"`)

* `rerate cdr` (value: `"rerate cdr"`)





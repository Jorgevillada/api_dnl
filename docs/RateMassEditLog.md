# DnlApi.RateMassEditLog

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**clientId** | **Number** |  | [optional] 
**actionTime** | **Date** |  | [optional] 
**downFilePath** | **String** |  | [optional] 
**id** | **Number** |  | [optional] 
**rateTableId** | **Number** |  | [optional] 
**actionType** | **String** |  | [optional] [default to &#39;delete found rates&#39;]
**actionRateRows** | **Number** |  | [optional] 
**clientName** | **String** |  | [optional] 
**rateTableName** | **String** |  | [optional] 


<a name="ActionTypeEnum"></a>
## Enum: ActionTypeEnum


* `insert as new rates` (value: `"insert as new rates"`)

* `update current rates` (value: `"update current rates"`)

* `update all rates` (value: `"update all rates"`)

* `delete found rates` (value: `"delete found rates"`)





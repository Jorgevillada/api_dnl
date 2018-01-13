# DnlApi.RateMassEdit

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**endDate** | [**RMEOpDate**](RMEOpDate.md) |  | 
**interval** | [**RMEOpInt**](RMEOpInt.md) |  | 
**effectiveDate** | [**RMEOpDate**](RMEOpDate.md) |  | 
**minTime** | [**RMEOpInt**](RMEOpInt.md) |  | 
**actionType** | **String** |  | 
**timeProfileId** | [**RMEOpProfile**](RMEOpProfile.md) |  | 
**rateIdList** | **[Number]** |  | [optional] 
**rate** | [**RMEOpDecimal**](RMEOpDecimal.md) |  | 
**setupFee** | [**RMEOpDecimal**](RMEOpDecimal.md) |  | 


<a name="ActionTypeEnum"></a>
## Enum: ActionTypeEnum


* `delete found rates` (value: `"delete found rates"`)

* `insert as new rates` (value: `"insert as new rates"`)

* `update current rates` (value: `"update current rates"`)

* `update all rates` (value: `"update all rates"`)





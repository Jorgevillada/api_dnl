# DnlApi.AgentGet

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**usageCount** | **Number** |  | [optional] 
**updateBy** | **String** |  | [optional] 
**commission** | **Number** |  | [optional] 
**frequencyType** | **String** |  | [default to &#39;daily&#39;]
**user** | [**UserMin**](UserMin.md) |  | [optional] 
**carriers** | [**[AgentClientGet]**](AgentClientGet.md) |  | [optional] 
**createOn** | **Date** |  | [optional] 
**editPermission** | **Boolean** |  | [optional] 
**methodType** | **String** |  | [default to &#39;By Profit&#39;]
**status** | **Boolean** |  | [optional] 
**agentId** | **Number** |  | [optional] 
**email** | **String** |  | [optional] 
**userId** | **Number** |  | [optional] 
**agentName** | **String** |  | 
**updateOn** | **Date** |  | [optional] 


<a name="FrequencyTypeEnum"></a>
## Enum: FrequencyTypeEnum


* `daily` (value: `"daily"`)

* `weekly` (value: `"weekly"`)

* `monthly` (value: `"monthly"`)




<a name="MethodTypeEnum"></a>
## Enum: MethodTypeEnum


* `Profit` (value: `"By Profit"`)

* `Revenue` (value: `"By Revenue"`)





# DnlApi.AgentGet

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**email** | **String** |  | [optional] 
**agentId** | **Number** |  | [optional] 
**updateOn** | **Date** |  | [optional] 
**commission** | **Number** |  | [optional] 
**user** | [**UserMin**](UserMin.md) |  | [optional] 
**editPermission** | **Boolean** |  | [optional] 
**methodType** | **String** |  | [default to &#39;By Profit&#39;]
**userId** | **Number** |  | [optional] 
**createOn** | **Date** |  | [optional] 
**carriers** | [**[AgentClientGet]**](AgentClientGet.md) |  | [optional] 
**agentName** | **String** |  | 
**updateBy** | **String** |  | [optional] 
**frequencyType** | **String** |  | [default to &#39;daily&#39;]
**status** | **Boolean** |  | [optional] 


<a name="MethodTypeEnum"></a>
## Enum: MethodTypeEnum


* `Profit` (value: `"By Profit"`)

* `Revenue` (value: `"By Revenue"`)




<a name="FrequencyTypeEnum"></a>
## Enum: FrequencyTypeEnum


* `monthly` (value: `"monthly"`)

* `weekly` (value: `"weekly"`)

* `daily` (value: `"daily"`)





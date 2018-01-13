# DnlApi.DynamicRouteGet

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**usageCount** | **Number** |  | [optional] 
**lastModified** | **String** |  | [optional] 
**modifiedBy** | **String** |  | [optional] 
**routeRuleName** | **String** |  | [optional] [default to &#39;LCR&#39;]
**timeProfileId** | **Number** |  | [optional] 
**timeProfileName** | **String** |  | [optional] 
**dynamicRouteId** | **Number** |  | [optional] 
**qosCycle** | **String** |  | [optional] [default to &#39;not set&#39;]
**name** | **String** |  | [optional] 
**egressTrunks** | [**[DynamicRouteItemGetTrunk]**](DynamicRouteItemGetTrunk.md) |  | [optional] 


<a name="RouteRuleNameEnum"></a>
## Enum: RouteRuleNameEnum


* `By LCR` (value: `"By LCR"`)

* `By ASR` (value: `"By ASR"`)

* `By ACD` (value: `"By ACD"`)

* `by maximum ASR` (value: `"by maximum ASR"`)

* `by maximum ACD` (value: `"by maximum ACD"`)

* `LCR` (value: `"LCR"`)




<a name="QosCycleEnum"></a>
## Enum: QosCycleEnum


* `not set` (value: `"not set"`)

* `15 minutes` (value: `"15 minutes"`)

* `30 minutes` (value: `"30 minutes"`)

* `1 hours` (value: `"1 hours"`)

* `1 days` (value: `"1 days"`)





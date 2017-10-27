# DnlApi.DynamicRoute

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **String** |  | [optional] 
**routeRuleName** | **String** |  | [optional] [default to &#39;LCR&#39;]
**egressTrunks** | [**[DynamicRouteItem]**](DynamicRouteItem.md) |  | [optional] 
**qosCycle** | **String** |  | [optional] [default to &#39;15 minutes&#39;]
**timeProfileId** | **Number** |  | [optional] 


<a name="RouteRuleNameEnum"></a>
## Enum: RouteRuleNameEnum


* `by maximum ACD` (value: `"by maximum ACD"`)

* `By ASR` (value: `"By ASR"`)

* `By ACD` (value: `"By ACD"`)

* `by maximum ASR` (value: `"by maximum ASR"`)

* `at the lowest cost` (value: `"at the lowest cost"`)

* `LCR` (value: `"LCR"`)




<a name="QosCycleEnum"></a>
## Enum: QosCycleEnum


* `1 days` (value: `"1 days"`)

* `30 minutes` (value: `"30 minutes"`)

* `1 hours` (value: `"1 hours"`)

* `15 minutes` (value: `"15 minutes"`)





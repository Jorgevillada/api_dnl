# DnlApi.DynamicRoute

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**timeProfileId** | **Number** |  | [optional] 
**routeRuleName** | **String** |  | [optional] [default to &#39;LCR&#39;]
**name** | **String** |  | [optional] 
**egressTrunks** | [**[DynamicRouteItem]**](DynamicRouteItem.md) |  | [optional] 
**qosCycle** | **String** |  | [optional] [default to &#39;not set&#39;]


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





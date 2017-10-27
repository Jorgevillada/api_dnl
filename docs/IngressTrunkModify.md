# DnlApi.IngressTrunkModify

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **String** |  | [optional] 
**maxDuration** | **Number** |  | [optional] 
**cpsLimit** | **Number** |  | [optional] 
**callLimit** | **Number** |  | [optional] 
**ip** | [**[ResourceIp]**](ResourceIp.md) |  | [optional] 
**minDuration** | **Number** |  | [optional] 
**hostRoutingStrategy** | **String** |  | [optional] [default to &#39;top-down&#39;]
**prefixes** | [**[ResourcePrefixModify]**](ResourcePrefixModify.md) |  | [optional] 
**mediaTimeout** | **Number** |  | [optional] 
**t38** | **Boolean** |  | [optional] 
**ignoreEarlyMedia** | **Boolean** |  | [optional] 
**prefix** | **String** |  | [optional] 
**authType** | **String** |  | [optional] [default to &#39;All&#39;]
**isActive** | **Boolean** |  | [optional] 
**bypassMedia** | **String** |  | [optional] [default to &#39;Proxy Media + Transcoding&#39;]
**rateTableId** | **Number** |  | [optional] 
**ignoreEarlyNoSdp** | **Boolean** |  | [optional] 
**minProfitType** | **String** |  | [optional] [default to &#39;percentage&#39;]
**minProfitValue** | **Number** |  | [optional] 
**ringTimeout** | **Number** |  | [optional] 
**routePlanId** | **Number** |  | [optional] 
**enfourceCid** | **Boolean** |  | [optional] 
**enableGlobal404Blocking** | **Boolean** |  | [optional] 


<a name="HostRoutingStrategyEnum"></a>
## Enum: HostRoutingStrategyEnum


* `top-down` (value: `"top-down"`)

* `round-robin` (value: `"round-robin"`)




<a name="AuthTypeEnum"></a>
## Enum: AuthTypeEnum


* `Register to Egress Trunk` (value: `"Register to Egress Trunk"`)

* `All` (value: `"All"`)

* `Authorized by Host Only` (value: `"Authorized by Host Only"`)

* `Accept Egress Registration` (value: `"Accept Egress Registration"`)




<a name="BypassMediaEnum"></a>
## Enum: BypassMediaEnum


* `Proxy Media + Transcoding` (value: `"Proxy Media + Transcoding"`)

* `Proxy Media` (value: `"Proxy Media"`)

* `Bypass Media` (value: `"Bypass Media"`)




<a name="MinProfitTypeEnum"></a>
## Enum: MinProfitTypeEnum


* `value` (value: `"value"`)

* `percentage` (value: `"percentage"`)





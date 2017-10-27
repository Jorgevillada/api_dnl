# DnlApi.EgressTrunkGet

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **String** |  | [optional] 
**maxDuration** | **Number** |  | [optional] 
**cpsLimit** | **Number** |  | [optional] 
**callLimit** | **Number** |  | [optional] 
**passLrn** | **Number** |  | [optional] 
**routePlanId** | **Number** |  | [optional] 
**resourceTemplateId** | **Number** |  | [optional] 
**egress** | **Boolean** |  | [optional] 
**minDuration** | **Number** |  | [optional] 
**createTime** | **Date** |  | [optional] 
**hostRoutingStrategy** | **String** |  | [optional] [default to &#39;top-down&#39;]
**carrierId** | **String** |  | [optional] 
**usageCount** | **Number** |  | [optional] 
**updateBy** | **String** |  | [optional] 
**mediaTimeout** | **Number** |  | [optional] 
**pdd** | **Number** |  | [optional] 
**aniCapLimit** | **Number** |  | [optional] 
**trunkName** | **String** |  | [optional] 
**prefix** | **String** |  | [optional] 
**t38** | **Boolean** |  | [optional] 
**isActive** | **Boolean** |  | [optional] 
**aniCpsLimit** | **Number** |  | [optional] 
**minProfitType** | **String** |  | [optional] [default to &#39;percentage&#39;]
**dnisCpsLimit** | **Number** |  | [optional] 
**rateTableId** | **Number** |  | [optional] 
**resourceId** | **Number** |  | [optional] 
**ringTimeout** | **Number** |  | [optional] 
**trunkId** | **Number** |  | [optional] 
**updateAt** | **Date** |  | [optional] 
**minProfitValue** | **Number** |  | [optional] 
**codes** | [**[ResourceTranslationRefGet]**](ResourceTranslationRefGet.md) |  | [optional] 
**ip** | [**[ResourceIp]**](ResourceIp.md) |  | [optional] 
**rpidIdType** | **String** |  | [optional] [default to &#39;None&#39;]
**bypassMedia** | **String** |  | [optional] [default to &#39;Proxy Media + Transcoding&#39;]
**carrier** | **String** |  | [optional] 
**enfourceCid** | **Boolean** |  | [optional] 
**codecs** | [**[ResourceCodecsRefGet]**](ResourceCodecsRefGet.md) |  | [optional] 
**routePlanName** | **String** |  | [optional] 
**dnisCapLimit** | **Number** |  | [optional] 


<a name="HostRoutingStrategyEnum"></a>
## Enum: HostRoutingStrategyEnum


* `top-down` (value: `"top-down"`)

* `round-robin` (value: `"round-robin"`)




<a name="MinProfitTypeEnum"></a>
## Enum: MinProfitTypeEnum


* `value` (value: `"value"`)

* `percentage` (value: `"percentage"`)




<a name="RpidIdTypeEnum"></a>
## Enum: RpidIdTypeEnum


* `Subscriber` (value: `"Subscriber"`)

* `User` (value: `"User"`)

* `Proxy` (value: `"Proxy"`)

* `None` (value: `"None"`)

* `Term` (value: `"Term"`)




<a name="BypassMediaEnum"></a>
## Enum: BypassMediaEnum


* `Proxy Media + Transcoding` (value: `"Proxy Media + Transcoding"`)

* `Proxy Media` (value: `"Proxy Media"`)

* `Bypass Media` (value: `"Bypass Media"`)





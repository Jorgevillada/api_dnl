# DnlApi.EgressTrunk

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **String** |  | [optional] 
**passLrn** | **Number** |  | [optional] 
**cpsLimit** | **Number** |  | [optional] 
**callLimit** | **Number** |  | [optional] 
**routePlanId** | **Number** |  | [optional] 
**minDuration** | **Number** |  | [optional] 
**hostRoutingStrategy** | **String** |  | [optional] [default to &#39;top-down&#39;]
**dnisCpsLimit** | **Number** |  | [optional] 
**ip** | [**[ResourceIp]**](ResourceIp.md) |  | [optional] 
**mediaTimeout** | **Number** |  | [optional] 
**pdd** | **Number** |  | [optional] 
**aniCapLimit** | **Number** |  | [optional] 
**prefix** | **String** |  | [optional] 
**t38** | **Boolean** |  | [optional] 
**isActive** | **Boolean** |  | [optional] 
**aniCpsLimit** | **Number** |  | [optional] 
**codes** | **[String]** |  | [optional] 
**ringTimeout** | **Number** |  | [optional] 
**rateTableId** | **Number** |  | [optional] 
**minProfitType** | **String** |  | [optional] [default to &#39;percentage&#39;]
**authorizationType** | **String** |  | [optional] [default to &#39;All&#39;]
**minProfitValue** | **Number** |  | [optional] 
**bypassMedia** | **String** |  | [optional] [default to &#39;Bypass Media&#39;]
**rpidIdType** | **String** |  | [optional] [default to &#39;None&#39;]
**enfourceCid** | **Boolean** |  | [optional] 
**codecs** | **[String]** |  | [optional] 
**maxDuration** | **Number** |  | [optional] 
**mediaType** | **String** |  | [optional] [default to &#39;Proxy Media + Transcoding&#39;]
**dnisCapLimit** | **Number** |  | [optional] 


<a name="HostRoutingStrategyEnum"></a>
## Enum: HostRoutingStrategyEnum


* `top-down` (value: `"top-down"`)

* `round-robin` (value: `"round-robin"`)




<a name="MinProfitTypeEnum"></a>
## Enum: MinProfitTypeEnum


* `value` (value: `"value"`)

* `percentage` (value: `"percentage"`)




<a name="AuthorizationTypeEnum"></a>
## Enum: AuthorizationTypeEnum


* `Register to Egress Trunk` (value: `"Register to Egress Trunk"`)

* `All` (value: `"All"`)

* `Authorized by Host Only` (value: `"Authorized by Host Only"`)

* `Accept Egress Registration` (value: `"Accept Egress Registration"`)




<a name="BypassMediaEnum"></a>
## Enum: BypassMediaEnum


* `Proxy Media + Transcoding` (value: `"Proxy Media + Transcoding"`)

* `Proxy Media` (value: `"Proxy Media"`)

* `Bypass Media` (value: `"Bypass Media"`)




<a name="RpidIdTypeEnum"></a>
## Enum: RpidIdTypeEnum


* `Subscriber` (value: `"Subscriber"`)

* `User` (value: `"User"`)

* `Proxy` (value: `"Proxy"`)

* `None` (value: `"None"`)

* `Term` (value: `"Term"`)




<a name="MediaTypeEnum"></a>
## Enum: MediaTypeEnum


* `Proxy Media + Transcoding` (value: `"Proxy Media + Transcoding"`)

* `Proxy Media` (value: `"Proxy Media"`)

* `Bypass Media` (value: `"Bypass Media"`)





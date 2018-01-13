# DnlApi.IngressTrunk

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**aniCapLimit** | **Number** |  | [optional] 
**rateDecimal** | **Number** |  | [optional] [default to 6]
**codes** | [**[ResourceTranslationRefGet]**](ResourceTranslationRefGet.md) |  | [optional] 
**enfourceCid** | **Boolean** |  | [optional] 
**isActive** | **Boolean** |  | [optional] 
**authType** | **String** |  | [optional] [default to &#39;Authorized by Host Only&#39;]
**prefix** | **String** |  | [optional] 
**maxDuration** | **Number** |  | [optional] 
**rpidPrivacy** | **String** |  | [optional] [default to &#39;None&#39;]
**ip** | [**[ResourceIp]**](ResourceIp.md) |  | [optional] 
**aniCpsLimit** | **Number** |  | [optional] 
**transactionFeeId** | **Number** |  | [optional] 
**authorizationType** | **String** |  | [optional] [default to &#39;Authorized by Host Only&#39;]
**hostRoutingStrategy** | **String** |  | [optional] [default to &#39;top-down&#39;]
**oli** | **Boolean** |  | [optional] 
**codecs** | [**[ResourceCodecsRefGet]**](ResourceCodecsRefGet.md) |  | [optional] 
**priv** | **Boolean** |  | [optional] 
**prefixes** | [**[ResourcePrefixModify]**](ResourcePrefixModify.md) |  | [optional] 
**paid** | **Boolean** |  | [optional] 
**cliType** | **String** |  | [optional] [default to &#39;white&#39;]
**rpidParty** | **String** |  | [optional] [default to &#39;None&#39;]
**name** | **String** |  | [optional] 
**regUser** | [**[ResourceIpRegUser]**](ResourceIpRegUser.md) |  | [optional] 
**regGateway** | [**[ResourceIpRegGateway]**](ResourceIpRegGateway.md) |  | [optional] 
**passLrn** | **Number** |  | [optional] 
**accountId** | **String** |  | [optional] 
**usOther** | **String** |  | [optional] [default to &#39;other&#39;]
**pci** | **Boolean** |  | [optional] 
**minProfitType** | **String** |  | [optional] [default to &#39;percentage&#39;]
**serviceType** | **String** |  | [optional] [default to &#39;Self Service&#39;]
**dnisCapLimit** | **Number** |  | [optional] 
**ignoreEarlyMedia** | **Boolean** |  | [optional] 
**trunkType2** | **String** |  | [optional] [default to &#39;Termination Traffic&#39;]
**amountPerPort** | **Number** |  | [optional] 
**displayName** | **Boolean** |  | [optional] 
**ringTimeout** | **Number** |  | [optional] 
**cpsLimit** | **Number** |  | [optional] 
**pdd** | **Number** |  | [optional] 
**billingMethod** | **String** |  | [optional] [default to &#39;by minutes&#39;]
**enableGlobal404Blocking** | **Boolean** |  | [optional] 
**mediaTimeout** | **Number** |  | [optional] 
**rateRounding** | **String** |  | [optional] [default to &#39;Up&#39;]
**routePlanId** | **Number** |  | [optional] 
**rateTableId** | **Number** |  | [optional] 
**minProfitValue** | **Number** |  | [optional] 
**jurisdictionUseDnis** | **String** |  | [optional] [default to &#39;LRN&#39;]
**mediaType** | **String** |  | [optional] [default to &#39;Proxy Media + Transcoding&#39;]
**rpidIdType** | **String** |  | [optional] [default to &#39;None&#39;]
**callLimit** | **Number** |  | [optional] 
**passThrough** | **String** |  | [optional] [default to &#39;transparent&#39;]
**bypassMedia** | **String** |  | [optional] [default to &#39;Bypass Media&#39;]
**trunkName** | **String** |  | [optional] 
**dnisCpsLimit** | **Number** |  | [optional] 
**rpid** | **String** |  | [optional] [default to &#39;Never&#39;]
**ignoreEarlyNoSdp** | **Boolean** |  | [optional] 
**productId** | **Number** |  | [optional] 
**div** | **Boolean** |  | [optional] 
**t38** | **Boolean** |  | [optional] 
**minDuration** | **Number** |  | [optional] 
**rpidScreen** | **String** |  | [optional] [default to &#39;None&#39;]


<a name="AuthTypeEnum"></a>
## Enum: AuthTypeEnum


* `Authorized by Host Only` (value: `"Authorized by Host Only"`)

* `Authorized by SIP Registration` (value: `"Authorized by SIP Registration"`)

* `Register to gateway` (value: `"Register to gateway"`)




<a name="RpidPrivacyEnum"></a>
## Enum: RpidPrivacyEnum


* `None` (value: `"None"`)

* `Full` (value: `"Full"`)

* `Name` (value: `"Name"`)

* `Url` (value: `"Url"`)

* `OFF` (value: `"OFF"`)

* `Ipaddr` (value: `"Ipaddr"`)

* `Proxy` (value: `"Proxy"`)




<a name="AuthorizationTypeEnum"></a>
## Enum: AuthorizationTypeEnum


* `Authorized by Host Only` (value: `"Authorized by Host Only"`)

* `Authorized by SIP Registration` (value: `"Authorized by SIP Registration"`)

* `Register to gateway` (value: `"Register to gateway"`)




<a name="HostRoutingStrategyEnum"></a>
## Enum: HostRoutingStrategyEnum


* `top-down` (value: `"top-down"`)

* `round-robin` (value: `"round-robin"`)




<a name="CliTypeEnum"></a>
## Enum: CliTypeEnum


* `white` (value: `"white"`)

* `white non cli` (value: `"white non cli"`)

* `gray` (value: `"gray"`)




<a name="RpidPartyEnum"></a>
## Enum: RpidPartyEnum


* `None` (value: `"None"`)

* `Calling` (value: `"Calling"`)

* `Called` (value: `"Called"`)

* `Proxy` (value: `"Proxy"`)




<a name="UsOtherEnum"></a>
## Enum: UsOtherEnum


* `other` (value: `"other"`)

* `intra` (value: `"intra"`)

* `inter` (value: `"inter"`)

* `highest` (value: `"highest"`)




<a name="MinProfitTypeEnum"></a>
## Enum: MinProfitTypeEnum


* `percentage` (value: `"percentage"`)

* `value` (value: `"value"`)




<a name="ServiceTypeEnum"></a>
## Enum: ServiceTypeEnum


* `Self Service` (value: `"Self Service"`)

* `Standand Deck` (value: `"Standand Deck"`)




<a name="TrunkType2Enum"></a>
## Enum: TrunkType2Enum


* `Termination Traffic` (value: `"Termination Traffic"`)

* `DID Traffic` (value: `"DID Traffic"`)




<a name="BillingMethodEnum"></a>
## Enum: BillingMethodEnum


* `minutes` (value: `"by minutes"`)

* `port` (value: `"by port"`)




<a name="RateRoundingEnum"></a>
## Enum: RateRoundingEnum


* `Up` (value: `"Up"`)

* `Down` (value: `"Down"`)




<a name="JurisdictionUseDnisEnum"></a>
## Enum: JurisdictionUseDnisEnum


* `LRN` (value: `"LRN"`)

* `DNIS` (value: `"DNIS"`)




<a name="MediaTypeEnum"></a>
## Enum: MediaTypeEnum


* `Proxy Media + Transcoding` (value: `"Proxy Media + Transcoding"`)

* `Proxy Media` (value: `"Proxy Media"`)

* `Bypass Media` (value: `"Bypass Media"`)




<a name="RpidIdTypeEnum"></a>
## Enum: RpidIdTypeEnum


* `None` (value: `"None"`)

* `Subscriber` (value: `"Subscriber"`)

* `User` (value: `"User"`)

* `Term` (value: `"Term"`)

* `Proxy` (value: `"Proxy"`)




<a name="PassThroughEnum"></a>
## Enum: PassThroughEnum


* `transparent` (value: `"transparent"`)

* `not pass through the ban` (value: `"not pass through the ban"`)




<a name="BypassMediaEnum"></a>
## Enum: BypassMediaEnum


* `Proxy Media + Transcoding` (value: `"Proxy Media + Transcoding"`)

* `Proxy Media` (value: `"Proxy Media"`)

* `Bypass Media` (value: `"Bypass Media"`)




<a name="RpidEnum"></a>
## Enum: RpidEnum


* `Never` (value: `"Never"`)

* `Pass Through` (value: `"Pass Through"`)

* `Always` (value: `"Always"`)




<a name="RpidScreenEnum"></a>
## Enum: RpidScreenEnum


* `None` (value: `"None"`)

* `No` (value: `"No"`)

* `Yes` (value: `"Yes"`)

* `Proxy` (value: `"Proxy"`)





# DnlApi.EgressTrunkTemplateGet

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ignoreEarlyNosdp** | **Number** |  | [optional] 
**billingRule** | **Number** |  | [optional] 
**intlRoute** | **String** |  | [optional] [default to &#39;other&#39;]
**maxDuration** | **Number** |  | [optional] 
**profitType** | **String** |  | [optional] [default to &#39;percentage&#39;]
**createOn** | **Date** |  | [optional] 
**usedBy** | **Number** |  | [optional] 
**priv** | **Number** |  | [optional] 
**ip** | [**[TrunkTemplateIp]**](TrunkTemplateIp.md) |  | [optional] 
**billingMethod** | **Number** |  | [optional] 
**lnpDipping** | **Boolean** |  | [optional] 
**oli** | **Number** |  | [optional] 
**canadaOther** | **String** |  | [optional] [default to &#39;other&#39;]
**profitMargin** | **Number** |  | [optional] 
**paid** | **Number** |  | [optional] 
**randomTableId** | **Number** |  | [optional] 
**minDuration** | **Number** |  | [optional] 
**rpidParty** | **String** |  | [optional] [default to &#39;None&#39;]
**name** | **String** |  | [optional] 
**rpidPrivacy** | **String** |  | [optional] [default to &#39;None&#39;]
**waitRingtime180** | **Number** |  | [optional] 
**resourceTemplateId** | **Number** |  | [optional] 
**usOther** | **String** |  | [optional] [default to &#39;other&#39;]
**trunkType2** | **String** |  | [optional] [default to &#39;Termination Traffic&#39;]
**createBy** | **String** |  | [optional] 
**resStrategy** | **String** |  | [optional] [default to &#39;top-down&#39;]
**info** | **Number** |  | [optional] 
**pci** | **Number** |  | [optional] 
**direction** | **String** |  | [optional] [default to &#39;ingress&#39;]
**ignoreRing** | **Boolean** |  | [optional] 
**reInvite** | **Number** |  | [optional] 
**inband** | **Number** |  | [optional] 
**rateProfile** | **Number** |  | [optional] 
**codecsStr** | **String** |  | [optional] 
**amountPerPort** | **Number** |  | [optional] 
**trunkType** | **String** |  | [optional] [default to &#39;class4&#39;]
**displayName** | **Number** |  | [optional] 
**ringTimeout** | **Number** |  | [optional] 
**resource** | **[String]** |  | [optional] 
**mediaTimeout** | **Number** |  | [optional] 
**rateRounding** | **String** |  | [optional] [default to &#39;Up&#39;]
**rateTableId** | **Number** |  | [optional] 
**rateDecimal** | **Number** |  | [optional] 
**mediaType** | **String** |  | [optional] [default to &#39;Proxy Media + Transcoding&#39;]
**rpidIdType** | **String** |  | [optional] [default to &#39;None&#39;]
**rfc2833** | **Number** |  | [optional] 
**canadaRoute** | **String** |  | [optional] [default to &#39;other&#39;]
**ignoreEarlyMedia** | **Boolean** |  | [optional] 
**usRoute** | **String** |  | [optional] [default to &#39;other&#39;]
**lnpDippingRate** | **Number** |  | [optional] 
**updateOn** | **Date** |  | [optional] 
**reInviteInterval** | **Number** |  | [optional] 
**div** | **Number** |  | [optional] 
**billBy** | **Number** |  | [optional] 
**rpidScreen** | **String** |  | [optional] [default to &#39;None&#39;]


<a name="IntlRouteEnum"></a>
## Enum: IntlRouteEnum


* `other` (value: `"other"`)

* `intra` (value: `"intra"`)

* `inter` (value: `"inter"`)

* `highest` (value: `"highest"`)




<a name="ProfitTypeEnum"></a>
## Enum: ProfitTypeEnum


* `percentage` (value: `"percentage"`)

* `value` (value: `"value"`)




<a name="CanadaOtherEnum"></a>
## Enum: CanadaOtherEnum


* `other` (value: `"other"`)

* `intra` (value: `"intra"`)

* `inter` (value: `"inter"`)

* `highest` (value: `"highest"`)




<a name="RpidPartyEnum"></a>
## Enum: RpidPartyEnum


* `None` (value: `"None"`)

* `Calling` (value: `"Calling"`)

* `Called` (value: `"Called"`)

* `Proxy` (value: `"Proxy"`)




<a name="RpidPrivacyEnum"></a>
## Enum: RpidPrivacyEnum


* `None` (value: `"None"`)

* `Full` (value: `"Full"`)

* `Name` (value: `"Name"`)

* `Url` (value: `"Url"`)

* `OFF` (value: `"OFF"`)

* `Ipaddr` (value: `"Ipaddr"`)

* `Proxy` (value: `"Proxy"`)




<a name="UsOtherEnum"></a>
## Enum: UsOtherEnum


* `other` (value: `"other"`)

* `intra` (value: `"intra"`)

* `inter` (value: `"inter"`)

* `highest` (value: `"highest"`)




<a name="TrunkType2Enum"></a>
## Enum: TrunkType2Enum


* `Termination Traffic` (value: `"Termination Traffic"`)

* `DID Traffic` (value: `"DID Traffic"`)




<a name="ResStrategyEnum"></a>
## Enum: ResStrategyEnum


* `top-down` (value: `"top-down"`)

* `round-robin` (value: `"round-robin"`)




<a name="DirectionEnum"></a>
## Enum: DirectionEnum


* `ingress` (value: `"ingress"`)

* `egress` (value: `"egress"`)




<a name="TrunkTypeEnum"></a>
## Enum: TrunkTypeEnum


* `class4` (value: `"class4"`)

* `exchange` (value: `"exchange"`)

* `product_default` (value: `"product_default"`)

* `product_agent` (value: `"product_agent"`)




<a name="RateRoundingEnum"></a>
## Enum: RateRoundingEnum


* `Up` (value: `"Up"`)

* `Down` (value: `"Down"`)




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




<a name="CanadaRouteEnum"></a>
## Enum: CanadaRouteEnum


* `other` (value: `"other"`)

* `intra` (value: `"intra"`)

* `inter` (value: `"inter"`)

* `highest` (value: `"highest"`)




<a name="UsRouteEnum"></a>
## Enum: UsRouteEnum


* `other` (value: `"other"`)

* `intra` (value: `"intra"`)

* `inter` (value: `"inter"`)

* `highest` (value: `"highest"`)




<a name="RpidScreenEnum"></a>
## Enum: RpidScreenEnum


* `None` (value: `"None"`)

* `No` (value: `"No"`)

* `Yes` (value: `"Yes"`)

* `Proxy` (value: `"Proxy"`)





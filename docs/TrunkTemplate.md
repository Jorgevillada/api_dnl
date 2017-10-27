# DnlApi.TrunkTemplate

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **String** |  | [optional] 
**displayName** | **Number** |  | [optional] 
**ignoreEarlyMedia** | **Boolean** |  | [optional] 
**usOther** | **Number** |  | [optional] 
**rfc2833** | **Number** |  | [optional] 
**div** | **Number** |  | [optional] 
**reInviteInterval** | **Number** |  | [optional] 
**rpidPrivacy** | **String** |  | [optional] [default to &#39;None&#39;]
**mediaTimeout** | **Number** |  | [optional] 
**intlRoute** | **Number** |  | [optional] 
**canadaOther** | **Number** |  | [optional] 
**canadaRoute** | **Number** |  | [optional] 
**oli** | **Number** |  | [optional] 
**inband** | **Number** |  | [optional] 
**profitMargin** | **Number** |  | 
**rateProfile** | **Number** |  | [optional] 
**billingMethod** | **Number** |  | [optional] 
**rateTableId** | **Number** |  | [optional] 
**ringTimeout** | **Number** |  | 
**waitRingtime180** | **Number** |  | [optional] 
**pci** | **Number** |  | [optional] 
**rpidParty** | **String** |  | [optional] [default to &#39;None&#39;]
**lnpDippingRate** | **Number** |  | [optional] 
**usRoute** | **Number** |  | [optional] 
**codecsStr** | **String** |  | [optional] 
**info** | **Number** |  | [optional] 
**rpidScreen** | **String** |  | [optional] [default to &#39;None&#39;]
**maxDuration** | **Number** |  | [optional] 
**billBy** | **Number** |  | [optional] 
**priv** | **Number** |  | [optional] 
**trunkType** | **String** |  | [optional] [default to &#39;Ingress&#39;]
**ip** | [**[TrunkTemplateIp]**](TrunkTemplateIp.md) |  | [optional] 
**profitType** | **String** |  | [optional] [default to &#39;percentage&#39;]
**minDuration** | **Number** |  | [optional] 
**trunkType2** | **Number** |  | 
**ignoreEarlyNosdp** | **Number** |  | [optional] 
**resource** | **[String]** |  | [optional] 
**paid** | **Number** |  | [optional] 
**rateDecimal** | **Number** |  | [optional] 
**ignoreRing** | **Boolean** |  | [optional] 
**amountPerPort** | **Number** |  | [optional] 
**lnpDipping** | **Boolean** |  | [optional] 
**billingRule** | **Number** |  | [optional] 
**rpidIdType** | **String** |  | [optional] [default to &#39;None&#39;]
**resStrategy** | **String** |  | [optional] [default to &#39;top-down&#39;]
**rateRounding** | **Number** |  | [optional] 
**reInvite** | **Number** |  | [optional] 
**mediaType** | **String** |  | [optional] [default to &#39;Proxy Media + Transcoding&#39;]
**randomTableId** | **Number** |  | [optional] 


<a name="RpidPrivacyEnum"></a>
## Enum: RpidPrivacyEnum


* `Ipaddr` (value: `"Ipaddr"`)

* `OFF` (value: `"OFF"`)

* `Name` (value: `"Name"`)

* `Full` (value: `"Full"`)

* `Url` (value: `"Url"`)

* `Proxy` (value: `"Proxy"`)

* `None` (value: `"None"`)




<a name="RpidPartyEnum"></a>
## Enum: RpidPartyEnum


* `Proxy` (value: `"Proxy"`)

* `Called` (value: `"Called"`)

* `Calling` (value: `"Calling"`)

* `None` (value: `"None"`)




<a name="RpidScreenEnum"></a>
## Enum: RpidScreenEnum


* `Yes` (value: `"Yes"`)

* `No` (value: `"No"`)

* `Proxy` (value: `"Proxy"`)

* `None` (value: `"None"`)




<a name="TrunkTypeEnum"></a>
## Enum: TrunkTypeEnum


* `Egress` (value: `"Egress"`)

* `Ingress` (value: `"Ingress"`)




<a name="ProfitTypeEnum"></a>
## Enum: ProfitTypeEnum


* `value` (value: `"value"`)

* `percentage` (value: `"percentage"`)




<a name="RpidIdTypeEnum"></a>
## Enum: RpidIdTypeEnum


* `Subscriber` (value: `"Subscriber"`)

* `User` (value: `"User"`)

* `Proxy` (value: `"Proxy"`)

* `None` (value: `"None"`)

* `Term` (value: `"Term"`)




<a name="ResStrategyEnum"></a>
## Enum: ResStrategyEnum


* `top-down` (value: `"top-down"`)

* `round-robin` (value: `"round-robin"`)




<a name="MediaTypeEnum"></a>
## Enum: MediaTypeEnum


* `Proxy Media + Transcoding` (value: `"Proxy Media + Transcoding"`)

* `Proxy Media` (value: `"Proxy Media"`)

* `Bypass Media` (value: `"Bypass Media"`)





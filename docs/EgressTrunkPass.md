# DnlApi.EgressTrunkPass

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**displayName** | **Boolean** |  | [optional] 
**jurisdictionUseDnis** | **String** |  | [optional] [default to &#39;LRN&#39;]
**rpidParty** | **String** |  | [optional] [default to &#39;None&#39;]
**paid** | **Boolean** |  | [optional] 
**cliType** | **String** |  | [optional] [default to &#39;white&#39;]
**rpidIdType** | **String** |  | [optional] [default to &#39;None&#39;]
**rpidPrivacy** | **String** |  | [optional] [default to &#39;None&#39;]
**passThrough** | **String** |  | [optional] [default to &#39;transparent&#39;]
**rateRounding** | **String** |  | [optional] [default to &#39;Up&#39;]
**rateDecimal** | **Number** |  | [optional] [default to 6]
**priv** | **Boolean** |  | [optional] 
**rpid** | **String** |  | [optional] [default to &#39;Never&#39;]
**div** | **Boolean** |  | [optional] 
**pci** | **Boolean** |  | [optional] 
**oli** | **Boolean** |  | [optional] 
**rpidScreen** | **String** |  | [optional] [default to &#39;None&#39;]


<a name="JurisdictionUseDnisEnum"></a>
## Enum: JurisdictionUseDnisEnum


* `LRN` (value: `"LRN"`)

* `DNIS` (value: `"DNIS"`)




<a name="RpidPartyEnum"></a>
## Enum: RpidPartyEnum


* `None` (value: `"None"`)

* `Calling` (value: `"Calling"`)

* `Called` (value: `"Called"`)

* `Proxy` (value: `"Proxy"`)




<a name="CliTypeEnum"></a>
## Enum: CliTypeEnum


* `white` (value: `"white"`)

* `white non cli` (value: `"white non cli"`)

* `gray` (value: `"gray"`)




<a name="RpidIdTypeEnum"></a>
## Enum: RpidIdTypeEnum


* `None` (value: `"None"`)

* `Subscriber` (value: `"Subscriber"`)

* `User` (value: `"User"`)

* `Term` (value: `"Term"`)

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




<a name="PassThroughEnum"></a>
## Enum: PassThroughEnum


* `transparent` (value: `"transparent"`)

* `not pass through the ban` (value: `"not pass through the ban"`)




<a name="RateRoundingEnum"></a>
## Enum: RateRoundingEnum


* `Up` (value: `"Up"`)

* `Down` (value: `"Down"`)




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





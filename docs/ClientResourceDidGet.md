# DnlApi.ClientResourceDidGet

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ip** | [**[ResourceIpDidGet]**](ResourceIpDidGet.md) |  | [optional] 
**resourceId** | **Number** |  | [optional] 
**mediaType** | **String** |  | [optional] [default to &#39;Proxy Media + Transcoding&#39;]
**billingByPort** | **String** |  | [optional] [default to &#39;by minutes&#39;]


<a name="MediaTypeEnum"></a>
## Enum: MediaTypeEnum


* `Proxy Media + Transcoding` (value: `"Proxy Media + Transcoding"`)

* `Proxy Media` (value: `"Proxy Media"`)

* `Bypass Media` (value: `"Bypass Media"`)




<a name="BillingByPortEnum"></a>
## Enum: BillingByPortEnum


* `minutes` (value: `"by minutes"`)

* `port` (value: `"by port"`)





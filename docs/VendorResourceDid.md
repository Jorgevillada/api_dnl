# DnlApi.VendorResourceDid

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**egressDids** | [**[VendorDidBillingRel]**](VendorDidBillingRel.md) |  | 
**billingByPort** | **String** |  | [optional] [default to &#39;by minutes&#39;]
**ip** | [**[ResourceIp]**](ResourceIp.md) |  | [optional] 
**mediaType** | **String** |  | [optional] [default to &#39;Proxy Media + Transcoding&#39;]
**t38** | **Boolean** |  | [optional] 


<a name="BillingByPortEnum"></a>
## Enum: BillingByPortEnum


* `minutes` (value: `"by minutes"`)

* `port` (value: `"by port"`)




<a name="MediaTypeEnum"></a>
## Enum: MediaTypeEnum


* `Proxy Media + Transcoding` (value: `"Proxy Media + Transcoding"`)

* `Proxy Media` (value: `"Proxy Media"`)

* `Bypass Media` (value: `"Bypass Media"`)





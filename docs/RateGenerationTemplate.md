# DnlApi.RateGenerationTemplate

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**details** | [**[RateGenerationTemplateDetail]**](RateGenerationTemplateDetail.md) |  | [optional] 
**margins** | [**[RateGenerationTemplateMargin]**](RateGenerationTemplateMargin.md) |  | [optional] 
**marginDefaultType** | **String** |  | [optional] [default to &#39;Percentage&#39;]
**rateTableType** | **String** |  | [optional] [default to &#39;A-Z&#39;]
**includeLocalRate** | **Boolean** |  | [optional] 
**defaultInterval** | **Number** |  | [optional] 
**marginDefaultValue** | **String** |  | [optional] 
**name** | **String** |  | [optional] 
**effectiveDays** | **Number** |  | [optional] 
**codeDeckId** | **Number** |  | [optional] 
**defaultMinTime** | **Number** |  | [optional] 
**lcrDigit** | **Number** |  | [optional] 
**includeBlockedRoute** | **Boolean** |  | [optional] 
**decimalPlaces** | **Number** |  | [optional] 
**egressTrunks** | **[Number]** |  | [optional] 
**defaultRate** | **Number** |  | [optional] 


<a name="MarginDefaultTypeEnum"></a>
## Enum: MarginDefaultTypeEnum


* `Percentage` (value: `"Percentage"`)

* `Value` (value: `"Value"`)




<a name="RateTableTypeEnum"></a>
## Enum: RateTableTypeEnum


* `A-Z` (value: `"A-Z"`)

* `US Jurisdictional` (value: `"US Jurisdictional"`)

* `US Non Jurisdictional` (value: `"US Non Jurisdictional"`)

* `OCN-LATA` (value: `"OCN-LATA"`)





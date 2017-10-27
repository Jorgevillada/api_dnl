# DnlApi.RateGenerationTemplate

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **String** |  | [optional] 
**lcrDigit** | **Number** |  | [optional] 
**includeLocalRate** | **Boolean** |  | [optional] 
**details** | [**[RateGenerationTemplateDetail]**](RateGenerationTemplateDetail.md) |  | [optional] 
**egressStr** | **String** |  | [optional] 
**rateTableType** | **String** |  | [optional] [default to &#39;A-Z&#39;]
**codeDeckId** | **Number** |  | [optional] 
**effectiveDays** | **Number** |  | [optional] 
**marginDefaultType** | **String** |  | [optional] [default to &#39;Percentage&#39;]
**defaultRate** | **Number** |  | [optional] 
**includeBlockedRoute** | **Boolean** |  | [optional] 
**defaultMinTime** | **Number** |  | [optional] 
**lastGenerated** | **Date** |  | [optional] 
**margins** | [**[RateGenerationTemplateMargin]**](RateGenerationTemplateMargin.md) |  | [optional] 
**marginDefaultValue** | **String** |  | [optional] 
**defaultInterval** | **Number** |  | [optional] 
**decimalPlaces** | **Number** |  | [optional] 


<a name="RateTableTypeEnum"></a>
## Enum: RateTableTypeEnum


* `OCN-LATA` (value: `"OCN-LATA"`)

* `US Non Jurisdictional` (value: `"US Non Jurisdictional"`)

* `US Jurisdictional` (value: `"US Jurisdictional"`)

* `A-Z` (value: `"A-Z"`)




<a name="MarginDefaultTypeEnum"></a>
## Enum: MarginDefaultTypeEnum


* `Percentage` (value: `"Percentage"`)

* `Value` (value: `"Value"`)





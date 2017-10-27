# DnlApi.RateGenerationTemplateGet

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **String** |  | [optional] 
**lcrDigit** | **Number** |  | [optional] 
**effectiveDays** | **Number** |  | [optional] 
**decimalPlaces** | **Number** |  | [optional] 
**egressStr** | **String** |  | [optional] 
**codeDeckId** | **Number** |  | [optional] 
**rateTableType** | **String** |  | [optional] [default to &#39;A-Z&#39;]
**includeLocalRate** | **Boolean** |  | [optional] 
**marginDefaultType** | **String** |  | [optional] [default to &#39;Percentage&#39;]
**createBy** | **String** |  | [optional] 
**marginDefaultValue** | **String** |  | [optional] 
**defaultRate** | **Number** |  | [optional] 
**defaultMinTime** | **Number** |  | [optional] 
**createOn** | **Date** |  | [optional] 
**id** | **Number** |  | [optional] 
**lastGenerated** | **Date** |  | [optional] 
**margins** | [**[RateGenerationTemplateMargin]**](RateGenerationTemplateMargin.md) |  | [optional] 
**includeBlockedRoute** | **Boolean** |  | [optional] 
**defaultInterval** | **Number** |  | [optional] 
**details** | [**[RateGenerationTemplateDetail]**](RateGenerationTemplateDetail.md) |  | [optional] 


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





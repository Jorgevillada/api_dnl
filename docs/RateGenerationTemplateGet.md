# DnlApi.RateGenerationTemplateGet

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**details** | [**[RateGenerationTemplateDetail]**](RateGenerationTemplateDetail.md) |  | [optional] 
**createOn** | **Date** |  | [optional] 
**margins** | [**[RateGenerationTemplateMargin]**](RateGenerationTemplateMargin.md) |  | [optional] 
**marginDefaultType** | **String** |  | [optional] [default to &#39;Percentage&#39;]
**rateTableType** | **String** |  | [optional] [default to &#39;A-Z&#39;]
**decimalPlaces** | **Number** |  | [optional] 
**defaultRate** | **Number** |  | [optional] 
**marginDefaultValue** | **String** |  | [optional] 
**name** | **String** |  | [optional] 
**effectiveDays** | **Number** |  | [optional] 
**lastGenerated** | **Date** |  | [optional] 
**defaultInterval** | **Number** |  | [optional] 
**id** | **Number** |  | [optional] 
**codeDeckId** | **Number** |  | [optional] 
**createBy** | **String** |  | [optional] 
**defaultMinTime** | **Number** |  | [optional] 
**lcrDigit** | **Number** |  | [optional] 
**includeBlockedRoute** | **Boolean** |  | [optional] 
**includeLocalRate** | **Boolean** |  | [optional] 
**egressTrunks** | **[Number]** |  | [optional] 


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





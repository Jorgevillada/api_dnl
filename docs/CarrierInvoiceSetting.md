# DnlApi.CarrierInvoiceSetting

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**showAccountSummary** | **Boolean** |  | [optional] 
**isBreakdownByRateTable** | **Boolean** |  | [optional] 
**showTrunkSummary** | **Boolean** |  | [optional] 
**includeTax** | **Boolean** |  | [optional] 
**showCodeSummary** | **Boolean** |  | [optional] 
**includeDetail** | **Boolean** |  | [optional] 
**showCallsDate** | **Boolean** |  | [optional] 
**paymentTerm** | **String** |  | [optional] 
**showDailyUsage** | **Boolean** |  | [optional] 
**nonZeroInvoiceOnly** | **Boolean** |  | [optional] 
**cdrFormat** | **String** |  | [optional] [default to &#39;Excel&#39;]
**usageFields** | **[String]** |  | [optional] 
**showJurisdictionDetail** | **Boolean** |  | [optional] 
**showPaymentSummary** | **Boolean** |  | [optional] 
**sendInvoiceAsLink** | **Boolean** |  | [optional] 
**rateValue** | **String** |  | [optional] [default to &#39;null&#39;]
**timeZone** | **String** |  | [optional] 
**autoSendInvoice** | **Boolean** |  | [optional] 
**inlcudeCdrInEmail** | **Boolean** |  | [optional] 
**includeShortCallCharge** | **Boolean** |  | [optional] 
**decimal** | **Number** |  | [optional] [default to 5]
**showCountrySummary** | **Boolean** |  | [optional] 
**ingressPrefix** | **Boolean** |  | [optional] 
**format** | **String** |  | [optional] [default to &#39;PDF&#39;]
**showCodeNameSummary** | **Boolean** |  | [optional] 


<a name="CdrFormatEnum"></a>
## Enum: CdrFormatEnum


* `Excel` (value: `"Excel"`)

* `CSV` (value: `"CSV"`)

* `zip` (value: `"zip"`)

* `tar.gz` (value: `"tar.gz"`)




<a name="RateValueEnum"></a>
## Enum: RateValueEnum


* `null` (value: `"null"`)

* `Actual Value` (value: `"Actual Value"`)

* `Average Value` (value: `"Average Value"`)

* `undefined` (value: `"undefined"`)




<a name="FormatEnum"></a>
## Enum: FormatEnum


* `PDF` (value: `"PDF"`)

* `Excel` (value: `"Excel"`)

* `HTML` (value: `"HTML"`)





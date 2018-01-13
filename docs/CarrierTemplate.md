# DnlApi.CarrierTemplate

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**templateName** | **String** |  | [optional] 
**profitType** | **String** |  | [optional] [default to &#39;percentage&#39;]
**sccCharge** | **Number** |  | [optional] 
**notifyClientBalanceType** | **Number** |  | [optional] 
**mode** | **String** |  | [optional] [default to &#39;prepay&#39;]
**paymentReceivedNotice** | **Boolean** |  | [optional] 
**testCredit** | **Number** |  | [optional] 
**autoSummaryNotZero** | **Number** |  | [optional] 
**currency** | **String** |  | [optional] 
**isDailyBalanceNotification** | **Boolean** |  | [optional] 
**lowBalanceConfig** | [**CarrierTemplateLowBalConfig**](CarrierTemplateLowBalConfig.md) |  | [optional] 
**creditLimit** | **Number** |  | [optional] 
**sccBelow** | **Number** |  | [optional] 
**tax** | **Number** |  | [optional] 
**unlimitedCredit** | **Boolean** |  | [optional] 
**showAccountSummary** | **Boolean** |  | [optional] 
**autoSendInvoice** | **Boolean** |  | [optional] 
**isAutoBalance** | **Boolean** |  | [optional] 
**isShortDurationCallSurchargeDetail** | **Boolean** |  | [optional] 
**profitMargin** | **Number** |  | [optional] 
**isShowDailyUsage** | **Boolean** |  | [optional] 
**inlcudeCdrInEmail** | **Boolean** |  | [optional] 
**sendInvoiceAsLink** | **Boolean** |  | [optional] 
**timeZone** | **String** |  | [optional] 
**dailyCdrGenerationZone** | **String** |  | [optional] 
**autoDailyBalanceRecipient** | **String** |  | [optional] [default to &#39;Partner Billing Contact&#39;]
**nonZeroInvoiceOnly** | **Boolean** |  | [optional] 
**isBreakdownByRateTable** | **Boolean** |  | [optional] 
**showCountrySummary** | **Boolean** |  | [optional] 
**autoSummaryPeriod** | **Number** |  | [optional] 
**format** | **String** |  | [optional] [default to &#39;PDF&#39;]
**isShowCountry** | **Boolean** |  | [optional] 
**sccType** | **String** |  | [optional] [default to &#39;meeting the short duration defined neighboring&#39;]
**autoSummaryHour** | **Number** |  | [optional] 
**showTrunkSummary** | **Boolean** |  | [optional] 
**isSendTrunkUpdate** | **Boolean** |  | [optional] 
**cpsLimit** | **Number** |  | [optional] 
**showCodeSummary** | **Boolean** |  | [optional] 
**decimal** | **Number** |  | [optional] 
**autoSendZone** | **String** |  | [optional] 
**usageDetailFields** | **String** |  | [optional] 
**autoSummaryGroupBy** | **String** |  | [optional] [default to &#39;By Country&#39;]
**showDailyUsage** | **Boolean** |  | [optional] 
**isShowTotalTrunk** | **Boolean** |  | [optional] 
**showJurisdictionDetail** | **Boolean** |  | [optional] 
**cdrFormat** | **String** |  | [optional] [default to &#39;Excel&#39;]
**paymentTerm** | **String** |  | [optional] 
**showPaymentSummary** | **Boolean** |  | [optional] 
**isAutoSummary** | **Boolean** |  | [optional] 
**rateValue** | **String** |  | [optional] [default to &#39;null&#39;]
**sccPercent** | **Number** |  | [optional] 
**showDetailByTrunk** | **Boolean** |  | [optional] 
**isShowCodeName** | **Boolean** |  | [optional] 
**includeTax** | **Boolean** |  | [optional] 
**includeShortCallCharge** | **Boolean** |  | [optional] 
**callLimit** | **Number** |  | [optional] 
**invoiceZone** | **String** |  | [optional] 
**dailyCdrGeneration** | **Boolean** |  | [optional] 
**showCodeNameSummary** | **Boolean** |  | [optional] 


<a name="ProfitTypeEnum"></a>
## Enum: ProfitTypeEnum


* `percentage` (value: `"percentage"`)

* `value` (value: `"value"`)




<a name="ModeEnum"></a>
## Enum: ModeEnum


* `prepay` (value: `"prepay"`)

* `postpay` (value: `"postpay"`)




<a name="AutoDailyBalanceRecipientEnum"></a>
## Enum: AutoDailyBalanceRecipientEnum


* `Partner Billing Contact` (value: `"Partner Billing Contact"`)

* `Owner Billing Contact` (value: `"Owner Billing Contact"`)

* `Both` (value: `"Both"`)




<a name="FormatEnum"></a>
## Enum: FormatEnum


* `PDF` (value: `"PDF"`)

* `Excel` (value: `"Excel"`)

* `HTML` (value: `"HTML"`)




<a name="SccTypeEnum"></a>
## Enum: SccTypeEnum


* `meeting the short duration defined neighboring` (value: `"meeting the short duration defined neighboring"`)

* `that exceed the defined percentage` (value: `"that exceed the defined percentage"`)




<a name="AutoSummaryGroupByEnum"></a>
## Enum: AutoSummaryGroupByEnum


* `Country` (value: `"By Country"`)

* `Code Name` (value: `"By Code Name"`)

* `Code` (value: `"By Code"`)




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





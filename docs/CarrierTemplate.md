# DnlApi.CarrierTemplate

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**showCodeNameSummary** | **Boolean** |  | [optional] 
**includeTax** | **Boolean** |  | [optional] 
**sendInvoiceAsLink** | **Boolean** |  | [optional] 
**notifyClientBalanceType** | **Number** |  | [optional] 
**isShowCodeName** | **Boolean** |  | [optional] 
**mode** | **String** |  | [optional] [default to &#39;prepay&#39;]
**dailyCdrGeneration** | **Boolean** |  | [optional] 
**lowBalanceConfig** | [**CarrierTemplateLowBalConfig**](CarrierTemplateLowBalConfig.md) |  | [optional] 
**autoSummaryGroupBy** | **String** |  | [optional] [default to &#39;By Country&#39;]
**autoSendZone** | **String** |  | [optional] 
**showCountrySummary** | **Boolean** |  | [optional] 
**isShowTotalTrunk** | **Boolean** |  | [optional] 
**showPaymentSummary** | **Boolean** |  | [optional] 
**templateName** | **String** |  | [optional] 
**profitMargin** | **Number** |  | 
**timeZone** | **String** |  | [optional] 
**isShowCountry** | **Boolean** |  | [optional] 
**showCodeSummary** | **Boolean** |  | [optional] 
**autoSummaryNotZero** | **Number** |  | [optional] 
**dailyCdrGenerationZone** | **String** |  | [optional] 
**autoSummaryHour** | **Number** |  | [optional] 
**showAccountSummary** | **Boolean** |  | [optional] 
**paymentTerm** | **String** |  | [optional] 
**format** | **String** |  | [optional] [default to &#39;PDF&#39;]
**creditLimit** | **Number** |  | [optional] 
**autoSummaryPeriod** | **Number** |  | [optional] 
**isUnlimited** | **Boolean** |  | [optional] 
**isDailyBalanceNotification** | **Boolean** |  | [optional] 
**isShortDurationCallSurchargeDetail** | **Boolean** |  | [optional] 
**testCredit** | **Number** |  | [optional] 
**callLimit** | **Number** |  | [optional] 
**isSendTrunkUpdate** | **Boolean** |  | [optional] 
**profitType** | **String** |  | [optional] [default to &#39;percentage&#39;]
**invoiceZone** | **String** |  | [optional] 
**showDetailByTrunk** | **Boolean** |  | [optional] 
**usageDetailFields** | **String** |  | [optional] 
**cdrFormat** | **String** |  | [optional] [default to &#39;Excel&#39;]
**autoSendInvoice** | **Boolean** |  | [optional] 
**rateValue** | **String** |  | [optional] [default to &#39;Actual Value&#39;]
**nonZeroInvoiceOnly** | **Boolean** |  | [optional] 
**includeShortCallCharge** | **Boolean** |  | [optional] 
**sccCharge** | **Number** |  | [optional] 
**showTrunkSummary** | **Boolean** |  | [optional] 
**isAutoSummary** | **Boolean** |  | [optional] 
**isBreakdownByRateTable** | **Boolean** |  | [optional] 
**showJurisdictionDetail** | **Boolean** |  | [optional] 
**sccBelow** | **Number** |  | [optional] 
**cpsLimit** | **Number** |  | [optional] 
**sccPercent** | **Number** |  | [optional] 
**decimal** | **Number** |  | [optional] 
**showDailyUsage** | **Boolean** |  | [optional] 
**sccType** | **String** |  | [optional] [default to &#39;meeting the short duration defined neighboring&#39;]
**attachCdrsList** | **Boolean** |  | [optional] 
**isShowDailyUsage** | **Boolean** |  | [optional] 
**autoDailyBalanceRecipient** | **String** |  | [optional] [default to &#39;Partner Billing Contact&#39;]
**currency** | **String** |  | [optional] 
**inlcudeCdrInEmail** | **Boolean** |  | [optional] 
**paymentReceivedNotice** | **Boolean** |  | [optional] 
**isAutoBalance** | **Boolean** |  | [optional] 


<a name="ModeEnum"></a>
## Enum: ModeEnum


* `postpay` (value: `"postpay"`)

* `prepay` (value: `"prepay"`)




<a name="AutoSummaryGroupByEnum"></a>
## Enum: AutoSummaryGroupByEnum


* `Country` (value: `"By Country"`)

* `Code Name` (value: `"By Code Name"`)

* `Code` (value: `"By Code"`)




<a name="FormatEnum"></a>
## Enum: FormatEnum


* `PDF` (value: `"PDF"`)

* `Excel` (value: `"Excel"`)

* `HTML` (value: `"HTML"`)




<a name="ProfitTypeEnum"></a>
## Enum: ProfitTypeEnum


* `value` (value: `"value"`)

* `percentage` (value: `"percentage"`)




<a name="CdrFormatEnum"></a>
## Enum: CdrFormatEnum


* `Excel` (value: `"Excel"`)

* `tar.gz` (value: `"tar.gz"`)

* `CSV` (value: `"CSV"`)

* `zip` (value: `"zip"`)




<a name="RateValueEnum"></a>
## Enum: RateValueEnum


* `Average Value` (value: `"Average Value"`)

* `Actual Value` (value: `"Actual Value"`)




<a name="SccTypeEnum"></a>
## Enum: SccTypeEnum


* `meeting the short duration defined neighboring` (value: `"meeting the short duration defined neighboring"`)

* `that exceed the defined percentage` (value: `"that exceed the defined percentage"`)




<a name="AutoDailyBalanceRecipientEnum"></a>
## Enum: AutoDailyBalanceRecipientEnum


* `Owner Billing Contact` (value: `"Owner Billing Contact"`)

* `Both` (value: `"Both"`)

* `Partner Billing Contact` (value: `"Partner Billing Contact"`)





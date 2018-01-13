# DnlApi.CarrierLong

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**lowBalanceNotice** | **Boolean** |  | [optional] 
**profitType** | **String** |  | [optional] [default to &#39;percentage&#39;]
**billingEmail** | **String** |  | [optional] 
**sccCharge** | **Number** |  | [optional] 
**notifyClientBalanceType** | **Number** |  | [optional] 
**paymentReceivedNotice** | **Boolean** |  | [optional] 
**testCredit** | **Number** |  | [optional] 
**autoSummaryNotZero** | **Boolean** |  | [optional] 
**isPrepay** | **Boolean** |  | [optional] 
**attachCdrsList** | **Boolean** |  | [optional] 
**dailyCdrGenerationZone** | **String** |  | [optional] 
**showDetailByTrunk** | **Boolean** |  | [optional] 
**lowBalanceConfig** | [**CarrierLowBalanceConfig**](CarrierLowBalanceConfig.md) |  | [optional] 
**creditLimit** | **Number** |  | [optional] 
**sccBelow** | **Number** |  | [optional] 
**isShowDailyUsage** | **Boolean** |  | [optional] 
**rateDeliveryEmail** | **String** |  | [optional] 
**isPanelTrunks** | **Boolean** |  | [optional] 
**unlimitedCredit** | **Boolean** |  | [optional] [default to false]
**isPanelPaymenthistory** | **Boolean** |  | [optional] 
**showAccountSummary** | **Boolean** |  | [optional] 
**password** | **String** |  | [optional] 
**usageFields** | **[String]** |  | [optional] 
**profitMargin** | **Number** |  | [optional] 
**login** | **String** |  | [optional] 
**showJurisdictionDetail** | **Boolean** |  | [optional] 
**inlcudeCdrInEmail** | **Boolean** |  | [optional] 
**isPanelCdrslist** | **Boolean** |  | [optional] 
**sendInvoiceAsLink** | **Boolean** |  | [optional] 
**timeZone** | **String** |  | [optional] 
**rateEmail** | **String** |  | [optional] 
**accountDetail** | **String** |  | [optional] 
**email** | **String** |  | [optional] 
**isBreakdownByRateTable** | **Boolean** |  | [optional] 
**cpsLimit** | **Number** |  | [optional] 
**isPanelRatetable** | **Boolean** |  | [optional] 
**showCountrySummary** | **Boolean** |  | [optional] 
**isPanelProducts** | **Boolean** |  | [optional] 
**address** | **String** |  | [optional] 
**format** | **String** |  | [optional] [default to &#39;PDF&#39;]
**includeShortCallCharge** | **Boolean** |  | [optional] 
**isPanelInvoices** | **Boolean** |  | [optional] 
**showCodeSummary** | **Boolean** |  | [optional] 
**sccType** | **Number** |  | [optional] 
**autoSummaryHour** | **Number** |  | [optional] 
**isPanelOnlinepayment** | **Boolean** |  | [optional] 
**showTrunkSummary** | **Boolean** |  | [optional] 
**isPanelSippacket** | **Boolean** |  | [optional] 
**tax** | **Number** |  | [optional] 
**isSendTrunkUpdate** | **Boolean** |  | [optional] 
**currency** | **Number** |  | [optional] [default to 1]
**nocEmail** | **String** |  | [optional] 
**status** | **Boolean** |  | [optional] 
**companyName** | **String** |  | [optional] 
**isPanelBalance** | **Boolean** |  | [optional] 
**paymentTerm** | **String** |  | [optional] 
**autoSummaryGroupBy** | **String** |  | [optional] [default to &#39;By Country&#39;]
**lowBalanceNotificationTimeType** | **Number** |  | [optional] 
**nonZeroInvoiceOnly** | **Boolean** |  | [optional] 
**isPanelAccountsummary** | **Boolean** |  | [optional] 
**enoughBalance** | **Boolean** |  | [optional] [default to false]
**cdrFormat** | **String** |  | [optional] [default to &#39;Excel&#39;]
**zeroBalanceNotice** | **Boolean** |  | [optional] 
**showDailyUsage** | **Boolean** |  | [optional] 
**showPaymentSummary** | **Boolean** |  | [optional] 
**autoSummaryPeriod** | **Number** |  | [optional] 
**isAutoSummary** | **Boolean** |  | [optional] 
**rateValue** | **String** |  | [optional] [default to &#39;null&#39;]
**autoSendInvoice** | **Boolean** |  | [optional] 
**isDailyBalanceNotification** | **Boolean** |  | [optional] 
**includeTax** | **Boolean** |  | [optional] 
**sccPercent** | **Number** |  | [optional] 
**isPanelSummaryreport** | **Boolean** |  | [optional] 
**carrierName** | **String** |  | [optional] 
**callLimit** | **Number** |  | [optional] [default to 0]
**decimal** | **Number** |  | [optional] 
**isPanelaccess** | **Boolean** |  | [optional] 
**phone** | **Number** |  | [optional] 
**dailyCdrGeneration** | **Boolean** |  | [optional] 
**showCodeNameSummary** | **Boolean** |  | [optional] 


<a name="ProfitTypeEnum"></a>
## Enum: ProfitTypeEnum


* `percentage` (value: `"percentage"`)

* `value` (value: `"value"`)




<a name="FormatEnum"></a>
## Enum: FormatEnum


* `PDF` (value: `"PDF"`)

* `Excel` (value: `"Excel"`)

* `HTML` (value: `"HTML"`)




<a name="SccTypeEnum"></a>
## Enum: SccTypeEnum


* `0` (value: `0`)

* `1` (value: `1`)




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





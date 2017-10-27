# DnlApi.CarrierLong

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**carrierName** | **String** |  | [optional] 
**showCodeNameSummary** | **Boolean** |  | [optional] 
**address** | **String** |  | [optional] 
**isPanelInvoices** | **Boolean** |  | [optional] 
**includeTax** | **Boolean** |  | [optional] 
**phone** | **Number** |  | [optional] 
**sendInvoiceAsLink** | **Boolean** |  | [optional] 
**notifyClientBalanceType** | **Number** |  | [optional] 
**companyName** | **String** |  | [optional] 
**dailyCdrGeneration** | **Boolean** |  | [optional] 
**zeroBalanceNotice** | **Boolean** |  | [optional] 
**lowBalanceConfig** | [**CarrierLowBalanceConfig**](CarrierLowBalanceConfig.md) |  | [optional] 
**autoSummaryGroupBy** | **String** |  | [optional] [default to &#39;By Country&#39;]
**showCountrySummary** | **Boolean** |  | [optional] 
**isPanelPaymenthistory** | **Boolean** |  | [optional] 
**showPaymentSummary** | **Boolean** |  | [optional] 
**autoSummaryPeriod** | **Number** |  | [optional] 
**cdrFormat** | **String** |  | [optional] [default to &#39;Excel&#39;]
**profitMargin** | **Number** |  | [optional] 
**sccPercent** | **Number** |  | [optional] 
**timeZone** | **String** |  | [optional] 
**isPanelSummaryreport** | **Boolean** |  | [optional] 
**isPanelaccess** | **Boolean** |  | [optional] 
**attachCdrsList** | **Boolean** |  | [optional] 
**isPrepay** | **Boolean** |  | [optional] 
**lowBalanceNotice** | **Boolean** |  | [optional] 
**tax** | **Number** |  | [optional] 
**autoSummaryNotZero** | **Boolean** |  | [optional] 
**email** | **String** |  | [optional] 
**dailyCdrGenerationZone** | **String** |  | [optional] 
**accountDetail** | **String** |  | [optional] 
**rateDeliveryEmail** | **String** |  | [optional] 
**paymentTerm** | **String** |  | [optional] 
**isAutoSummary** | **Boolean** |  | [optional] 
**status** | **Boolean** |  | [optional] 
**creditLimit** | **Number** |  | [optional] 
**isUnlimited** | **Boolean** |  | [optional] 
**isDailyBalanceNotification** | **Boolean** |  | [optional] 
**billingEmail** | **String** |  | [optional] 
**testCredit** | **Number** |  | [optional] 
**callLimit** | **Number** |  | [optional] 
**isSendTrunkUpdate** | **Boolean** |  | [optional] 
**profitType** | **String** |  | [optional] [default to &#39;percentage&#39;]
**autoSummaryHour** | **Number** |  | [optional] 
**isPanelAccountsummary** | **Boolean** |  | [optional] 
**isPanelRatetable** | **Boolean** |  | [optional] 
**showDetailByTrunk** | **Boolean** |  | [optional] 
**autoSendInvoice** | **Boolean** |  | [optional] 
**showAccountSummary** | **Boolean** |  | [optional] 
**nonZeroInvoiceOnly** | **Boolean** |  | [optional] 
**lowBalanceNotificationTimeType** | **Number** |  | [optional] 
**isPanelCdrslist** | **Boolean** |  | [optional] 
**format** | **String** |  | [optional] [default to &#39;PDF&#39;]
**includeShortCallCharge** | **Boolean** |  | [optional] 
**rateEmail** | **String** |  | [optional] 
**sccCharge** | **Number** |  | [optional] 
**showTrunkSummary** | **Boolean** |  | [optional] 
**isPanelOnlinepayment** | **Boolean** |  | [optional] 
**isBreakdownByRateTable** | **Boolean** |  | [optional] 
**showJurisdictionDetail** | **Boolean** |  | [optional] 
**isPanelBalance** | **Boolean** |  | [optional] 
**sccBelow** | **Number** |  | [optional] 
**nocEmail** | **String** |  | [optional] 
**cpsLimit** | **Number** |  | [optional] 
**rateValue** | **String** |  | [optional] [default to &#39;Actual Value&#39;]
**decimal** | **Number** |  | [optional] 
**isPanelSippacket** | **Boolean** |  | [optional] 
**password** | **String** |  | [optional] 
**showDailyUsage** | **Boolean** |  | [optional] 
**sccType** | **Number** |  | [optional] 
**showCodeSummary** | **Boolean** |  | [optional] 
**isShowDailyUsage** | **Boolean** |  | [optional] 
**isPanelTrunks** | **Boolean** |  | [optional] 
**currency** | **Number** |  | [optional] [default to 1]
**isPanelProducts** | **Boolean** |  | [optional] 
**login** | **String** |  | [optional] 
**inlcudeCdrInEmail** | **Boolean** |  | [optional] 
**paymentReceivedNotice** | **Boolean** |  | [optional] 


<a name="AutoSummaryGroupByEnum"></a>
## Enum: AutoSummaryGroupByEnum


* `Country` (value: `"By Country"`)

* `Code Name` (value: `"By Code Name"`)

* `Code` (value: `"By Code"`)




<a name="CdrFormatEnum"></a>
## Enum: CdrFormatEnum


* `Excel` (value: `"Excel"`)

* `tar.gz` (value: `"tar.gz"`)

* `CSV` (value: `"CSV"`)

* `zip` (value: `"zip"`)




<a name="ProfitTypeEnum"></a>
## Enum: ProfitTypeEnum


* `value` (value: `"value"`)

* `percentage` (value: `"percentage"`)




<a name="FormatEnum"></a>
## Enum: FormatEnum


* `PDF` (value: `"PDF"`)

* `Excel` (value: `"Excel"`)

* `HTML` (value: `"HTML"`)




<a name="RateValueEnum"></a>
## Enum: RateValueEnum


* `Average Value` (value: `"Average Value"`)

* `Actual Value` (value: `"Actual Value"`)





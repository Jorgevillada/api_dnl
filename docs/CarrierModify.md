# DnlApi.CarrierModify

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**dailyUsageGroupBy** | **String** |  | [optional] [default to &#39;By Country&#39;]
**dailyUsageOnNonZero** | **Boolean** |  | [optional] 
**dailyUsageSummary** | **Boolean** |  | [optional] 
**profitType** | **String** |  | [optional] [default to &#39;percentage&#39;]
**shortCallPercent** | **Number** |  | [optional] 
**billingEmail** | **String** |  | [optional] 
**paymentTermId** | **Number** |  | [optional] 
**dailyCdrDelivery** | **Boolean** |  | [optional] 
**paymentReceivedNotice** | **Boolean** |  | [optional] 
**shortCallDuration** | **Number** |  | [optional] 
**isPrepay** | **Boolean** |  | [optional] 
**cpsLimit** | **Number** |  | [optional] 
**lowBalanceAlert** | **Boolean** |  | [optional] 
**nocEmail** | **String** |  | [optional] 
**creditLimit** | **Number** |  | [optional] 
**reportFrequency** | **Number** |  | [optional] 
**profitMargin** | **Number** |  | [optional] 
**unlimitedCredit** | **Boolean** |  | [optional] [default to false]
**currencyName** | **String** |  | [optional] 
**enoughBalance** | **Boolean** |  | [optional] [default to false]
**company** | **String** |  | [optional] 
**password** | **String** |  | [optional] 
**dailyBalanceSummary** | **Boolean** |  | [optional] 
**shortCallCharge** | **Number** |  | [optional] 
**login** | **String** |  | [optional] 
**autoInvoiceType** | **String** |  | [optional] [default to &#39;buy&#39;]
**name** | **String** |  | [optional] 
**isActive** | **Boolean** |  | [optional] 
**rateEmail** | **String** |  | [optional] 
**groupId** | **Number** |  | [optional] 
**financeEmailCc** | **String** |  | [optional] 
**accountDetail** | **String** |  | [optional] [default to &#39;&#39;]
**shortCallChargeExceedOnly** | **Number** |  | [optional] 
**callLimit** | **Number** |  | [optional] 
**oneTimeReportTime** | **Number** |  | [optional] 
**address** | **String** |  | [optional] 
**trunkUpdateAlert** | **Boolean** |  | [optional] 
**mainEmail** | **String** |  | [optional] 
**phone** | **String** |  | [optional] 


<a name="DailyUsageGroupByEnum"></a>
## Enum: DailyUsageGroupByEnum


* `Country` (value: `"By Country"`)

* `Code Name` (value: `"By Code Name"`)

* `Code` (value: `"By Code"`)




<a name="ProfitTypeEnum"></a>
## Enum: ProfitTypeEnum


* `percentage` (value: `"percentage"`)

* `value` (value: `"value"`)




<a name="AutoInvoiceTypeEnum"></a>
## Enum: AutoInvoiceTypeEnum


* `buy` (value: `"buy"`)

* `sell` (value: `"sell"`)

* `both` (value: `"both"`)





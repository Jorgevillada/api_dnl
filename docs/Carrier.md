# DnlApi.Carrier

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **String** |  | [optional] 
**isUnlimited** | **Boolean** |  | [optional] 
**cpsLimit** | **Number** |  | [optional] 
**company** | **String** |  | [optional] 
**testCredit** | **Number** |  | [optional] 
**phone** | **String** |  | [optional] 
**profitType** | **String** |  | [optional] [default to &#39;percentage&#39;]
**reportFrequency** | **Number** |  | [optional] 
**shortCallChargeExceedOnly** | **Number** |  | [optional] 
**dailyUsageSummary** | **Boolean** |  | [optional] 
**dailyUsageGroupBy** | **String** |  | [optional] [default to &#39;By Country&#39;]
**billingEmail** | **String** |  | [optional] 
**shortCallDuration** | **Number** |  | [optional] 
**oneTimeReportTime** | **Number** |  | [optional] 
**nocEmail** | **String** |  | [optional] 
**isActive** | **Boolean** |  | [optional] 
**rateEmail** | **String** |  | [optional] 
**callLimit** | **Number** |  | [optional] 
**dailyBalanceSummary** | **Boolean** |  | [optional] 
**trunkUpdateAlert** | **Boolean** |  | [optional] 
**shortCallPercent** | **Number** |  | [optional] 
**isPrepay** | **Boolean** |  | [optional] 
**shortCallCharge** | **Number** |  | [optional] 
**dailyCdrDelivery** | **Boolean** |  | [optional] 
**lowBalanceAlert** | **Boolean** |  | [optional] 
**mainEmail** | **String** |  | [optional] 
**accountDetail** | **String** |  | [optional] 
**currencyName** | **String** |  | [optional] 
**autoInvoiceType** | **String** |  | [optional] [default to &#39;buy&#39;]
**dailyUsageOnNonZero** | **Boolean** |  | [optional] 
**creditLimit** | **Number** |  | [optional] 
**address** | **String** |  | [optional] 


<a name="ProfitTypeEnum"></a>
## Enum: ProfitTypeEnum


* `value` (value: `"value"`)

* `percentage` (value: `"percentage"`)




<a name="DailyUsageGroupByEnum"></a>
## Enum: DailyUsageGroupByEnum


* `Country` (value: `"By Country"`)

* `Code Name` (value: `"By Code Name"`)

* `Code` (value: `"By Code"`)




<a name="AutoInvoiceTypeEnum"></a>
## Enum: AutoInvoiceTypeEnum


* `both` (value: `"both"`)

* `buy` (value: `"buy"`)

* `sell` (value: `"sell"`)





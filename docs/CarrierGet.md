# DnlApi.CarrierGet

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **String** |  | [optional] 
**clientId** | **Number** |  | [optional] 
**isUnlimited** | **Boolean** |  | [optional] 
**cpsLimit** | **Number** |  | [optional] 
**company** | **String** |  | [optional] 
**testCredit** | **Number** |  | [optional] 
**phone** | **String** |  | [optional] 
**profitType** | **String** |  | [optional] [default to &#39;percentage&#39;]
**egressCount** | **Number** |  | [optional] 
**reportFrequency** | **Number** |  | [optional] 
**carrierTemplateId** | **Number** |  | [optional] 
**dailyUsageSummary** | **Boolean** |  | [optional] 
**updateBy** | **String** |  | [optional] 
**dailyUsageGroupBy** | **String** |  | [optional] [default to &#39;By Country&#39;]
**ingressCount** | **Number** |  | [optional] 
**billingEmail** | **String** |  | [optional] 
**shortCallDuration** | **Number** |  | [optional] 
**shortCallChargeExceedOnly** | **Number** |  | [optional] 
**oneTimeReportTime** | **Number** |  | [optional] 
**actualBalance** | **Number** |  | [optional] 
**nocEmail** | **String** |  | [optional] 
**creditLimit** | **Number** |  | [optional] 
**mutualBalance** | **Number** |  | [optional] 
**rateEmail** | **String** |  | [optional] 
**ingressCountSql** | **Number** |  | [optional] 
**dailyUsageOnNonZero** | **Boolean** |  | [optional] 
**trunkUpdateAlert** | **Boolean** |  | [optional] 
**shortCallPercent** | **Number** |  | [optional] 
**updateAt** | **Date** |  | [optional] 
**isPrepay** | **Boolean** |  | [optional] 
**shortCallCharge** | **Number** |  | [optional] 
**isActive** | **Boolean** |  | [optional] 
**currencyName** | **String** |  | [optional] 
**mainEmail** | **String** |  | [optional] 
**accountDetail** | **String** |  | [optional] 
**callLimit** | **Number** |  | [optional] 
**lowBalanceAlert** | **Boolean** |  | [optional] 
**autoInvoiceType** | **String** |  | [optional] [default to &#39;buy&#39;]
**dailyBalanceSummary** | **Boolean** |  | [optional] 
**dailyCdrDelivery** | **Boolean** |  | [optional] 
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





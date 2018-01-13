# DnlApi.CarrierGet

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**egressCount** | **Number** |  | [optional] 
**dailyUsageSummary** | **Boolean** |  | [optional] 
**profitType** | **String** |  | [optional] [default to &#39;percentage&#39;]
**billingEmail** | **String** |  | [optional] 
**paymentTermId** | **Number** |  | [optional] 
**mode** | **String** |  | [optional] [default to &#39;prepay&#39;]
**paymentReceivedNotice** | **Boolean** |  | [optional] 
**testCredit** | **Number** |  | [optional] 
**isPrepay** | **Boolean** |  | [optional] 
**mutualBalance** | **Number** |  | [optional] 
**creditLimit** | **Number** |  | [optional] 
**rateEmail** | **String** |  | [optional] 
**carrierTemplateId** | **Number** |  | [optional] 
**company** | **String** |  | [optional] 
**password** | **String** |  | [optional] 
**usageFields** | **[String]** |  | [optional] 
**shortCallPercent** | **Number** |  | [optional] 
**autoInvoiceType** | **String** |  | [optional] [default to &#39;buy&#39;]
**clientId** | **Number** |  | [optional] 
**name** | **String** |  | [optional] 
**ingressCount** | **Number** |  | [optional] 
**unlimitedCredit** | **Boolean** |  | [optional] 
**accountDetail** | **String** |  | [optional] [default to &#39;&#39;]
**shortCallChargeExceedOnly** | **Number** |  | [optional] 
**dailyCdrDelivery** | **Boolean** |  | [optional] 
**oneTimeReportTime** | **Number** |  | [optional] 
**dailyUsageOnNonZero** | **Boolean** |  | [optional] 
**address** | **String** |  | [optional] 
**groupId** | **Number** |  | [optional] 
**dailyUsageGroupBy** | **String** |  | [optional] [default to &#39;By Country&#39;]
**dailyBalanceSummary** | **Boolean** |  | [optional] 
**lowBalanceAlert** | **Boolean** |  | [optional] 
**profitMargin** | **Number** |  | [optional] 
**isActive** | **Boolean** |  | [optional] 
**updateBy** | **String** |  | [optional] 
**shortCallDuration** | **Number** |  | [optional] 
**cpsLimit** | **Number** |  | [optional] 
**nocEmail** | **String** |  | [optional] 
**reportFrequency** | **Number** |  | [optional] 
**updateAt** | **Date** |  | [optional] 
**enoughBalance** | **Boolean** |  | [optional] [default to false]
**currencyName** | **String** |  | [optional] 
**shortCallCharge** | **Number** |  | [optional] 
**login** | **String** |  | [optional] 
**actualBalance** | **Number** |  | [optional] 
**financeEmailCc** | **String** |  | [optional] 
**callLimit** | **Number** |  | [optional] 
**trunkUpdateAlert** | **Boolean** |  | [optional] 
**mainEmail** | **String** |  | [optional] 
**phone** | **String** |  | [optional] 


<a name="ProfitTypeEnum"></a>
## Enum: ProfitTypeEnum


* `percentage` (value: `"percentage"`)

* `value` (value: `"value"`)




<a name="ModeEnum"></a>
## Enum: ModeEnum


* `prepay` (value: `"prepay"`)

* `postpay` (value: `"postpay"`)




<a name="AutoInvoiceTypeEnum"></a>
## Enum: AutoInvoiceTypeEnum


* `buy` (value: `"buy"`)

* `sell` (value: `"sell"`)

* `both` (value: `"both"`)




<a name="DailyUsageGroupByEnum"></a>
## Enum: DailyUsageGroupByEnum


* `Country` (value: `"By Country"`)

* `Code Name` (value: `"By Code Name"`)

* `Code` (value: `"By Code"`)





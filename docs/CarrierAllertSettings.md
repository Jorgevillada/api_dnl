# DnlApi.CarrierAllertSettings

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**enableDailyUsageAlert** | **Boolean** |  | [optional] 
**dailyUsageOnNonZero** | **Boolean** |  | [optional] 
**usageFields** | **[String]** |  | [optional] 
**dailyUsageGroupBy** | **String** |  | [optional] [default to &#39;By Country&#39;]
**isShowDailyUsage** | **Boolean** |  | [optional] 
**autoSummaryHour** | **Number** |  | [optional] [default to 0]
**enableDailyBalanceAlert** | **Boolean** |  | [optional] 
**enableZeroBalanceAlert** | **Boolean** |  | [optional] 
**autoDailyBalanceRecipient** | **String** |  | [optional] [default to &#39;Partner Billing Contact&#39;]
**enablePaymentReceivedAlert** | **Boolean** |  | [optional] 
**enableTrunkUpdateAlert** | **Boolean** |  | [optional] 
**autoSendZone** | **String** |  | [optional] 
**enableDailyCdrAlert** | **Boolean** |  | [optional] 
**enableLowBalanceAlert** | **Boolean** |  | [optional] 


<a name="DailyUsageGroupByEnum"></a>
## Enum: DailyUsageGroupByEnum


* `Country` (value: `"By Country"`)

* `Code Name` (value: `"By Code Name"`)

* `Code` (value: `"By Code"`)




<a name="AutoDailyBalanceRecipientEnum"></a>
## Enum: AutoDailyBalanceRecipientEnum


* `Partner Billing Contact` (value: `"Partner Billing Contact"`)

* `Owner Billing Contact` (value: `"Owner Billing Contact"`)

* `Both` (value: `"Both"`)





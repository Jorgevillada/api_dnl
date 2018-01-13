# DnlApi.SystemParameterPaymentSetting

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ccEmail** | **String** |  | [optional] 
**paymentReceivedConfirmation** | **Boolean** |  | [optional] 
**autoCarrierNotification** | **Boolean** |  | [optional] 
**stripeSecretKey** | **String** |  | [optional] 
**paypalFee** | **Number** |  | [optional] 
**stripeFee** | **Number** |  | [optional] 
**paypalAccount** | **String** |  | [optional] 
**chargeType** | **String** |  | [optional] [default to &#39;credit total amount&#39;]
**emails** | **String** |  | [optional] 
**enableEmailNotification** | **Boolean** |  | [optional] 
**stripePublisherKey** | **String** |  | [optional] 


<a name="ChargeTypeEnum"></a>
## Enum: ChargeTypeEnum


* `credit total amount` (value: `"credit total amount"`)

* `create actual received amount` (value: `"create actual received amount"`)





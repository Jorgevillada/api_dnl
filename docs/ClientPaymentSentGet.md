# DnlApi.ClientPaymentSentGet

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**amount** | **Number** |  | [optional] 
**clientId** | **Number** |  | [optional] 
**paymentTime** | **Date** |  | [optional] 
**receivingTime** | **Date** |  | [optional] 
**clientName** | **String** |  | [optional] 
**clientPaymentId** | **Number** |  | [optional] 
**updateBy** | **String** |  | [optional] 
**note** | **String** |  | [optional] 
**paymentType** | **String** |  | [optional] [default to &#39;n/a&#39;]


<a name="PaymentTypeEnum"></a>
## Enum: PaymentTypeEnum


* `n/a` (value: `"n/a"`)

* `undefined` (value: `"undefined"`)

* `invoice payment sent` (value: `"invoice payment sent"`)

* `invoice payment received` (value: `"invoice payment received"`)

* `prepay payment received` (value: `"prepay payment received"`)

* `payment sent` (value: `"payment sent"`)

* `credit note received` (value: `"credit note received"`)

* `credit note sent` (value: `"credit note sent"`)

* `reset` (value: `"reset"`)

* `offset` (value: `"offset"`)

* `debit received` (value: `"debit received"`)

* `debit sent` (value: `"debit sent"`)

* `mutual reset` (value: `"mutual reset"`)

* `actual reset` (value: `"actual reset"`)

* `prepayment` (value: `"prepayment"`)





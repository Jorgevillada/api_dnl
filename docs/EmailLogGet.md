# DnlApi.EmailLogGet

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**subject** | **String** |  | [optional] 
**content** | **String** |  | [optional] 
**clientId** | **Number** |  | [optional] 
**sentFrom** | **String** |  | [optional] 
**sentTo** | **String** |  | [optional] 
**status** | **String** |  | [optional] [default to &#39;success&#39;]
**type** | **String** |  | [optional] [default to &#39;undefined&#39;]
**clientName** | **String** |  | [optional] 
**_date** | **Date** |  | [optional] 


<a name="StatusEnum"></a>
## Enum: StatusEnum


* `success` (value: `"success"`)

* `fail` (value: `"fail"`)




<a name="TypeEnum"></a>
## Enum: TypeEnum


* `undefined` (value: `"undefined"`)

* `lowbalance` (value: `"lowbalance"`)

* `auto_summary` (value: `"auto_summary"`)

* `auto_delivery` (value: `"auto_delivery"`)

* `route_update_alert_email` (value: `"route_update_alert_email"`)

* `download_cdr` (value: `"download_cdr"`)

* `exchange_auto_summary` (value: `"exchange_auto_summary"`)

* `invoice` (value: `"invoice"`)

* `payment` (value: `"payment"`)

* `auto_balance` (value: `"auto_balance"`)

* `carrier_invoice` (value: `"carrier_invoice"`)

* `auto_cdr` (value: `"auto_cdr"`)

* `no_route_available_alert_email` (value: `"no_route_available_alert_email"`)

* `target_match_alert_email` (value: `"target_match_alert_email"`)

* `rate_watch_alert_email` (value: `"rate_watch_alert_email"`)

* `noc_email` (value: `"noc_email"`)

* `rate_update_alert_email` (value: `"rate_update_alert_email"`)

* `low_balance_alert_email` (value: `"low_balance_alert_email"`)

* `new_invoice_posted_mail_alert_email` (value: `"new_invoice_posted_mail_alert_email"`)

* `payment_sent` (value: `"payment_sent"`)

* `trouble_ticket` (value: `"trouble_ticket"`)

* `payment_received` (value: `"payment_received"`)

* `send_cdr` (value: `"send_cdr"`)

* `select_route_up_email` (value: `"select_route_up_email"`)

* `alert_email` (value: `"alert_email"`)

* `finance_alert` (value: `"finance_alert"`)

* `buy_qos_alert` (value: `"buy_qos_alert"`)

* `sell_qos_alert` (value: `"sell_qos_alert"`)

* `rate_mail_success` (value: `"rate_mail_success"`)

* `rate_mail_fail` (value: `"rate_mail_fail"`)

* `daily_payment` (value: `"daily_payment"`)

* `rate` (value: `"rate"`)

* `dialer_detection` (value: `"dialer_detection"`)

* `retrieve_password` (value: `"retrieve_password"`)

* `registration` (value: `"registration"`)

* `trunk_change` (value: `"trunk_change"`)

* `fraud_detection` (value: `"fraud_detection"`)

* `welcom` (value: `"welcom"`)

* `download_rate_notice` (value: `"download_rate_notice"`)

* `no_download_rate` (value: `"no_download_rate"`)

* `carrier_email` (value: `"carrier_email"`)

* `vendor_invoice_dispute` (value: `"vendor_invoice_dispute"`)

* `trunk_interop` (value: `"trunk_interop"`)

* `regletter` (value: `"regletter"`)

* `paymresvd` (value: `"paymresvd"`)

* `zerobalance` (value: `"zerobalance"`)

* `did_order_letter` (value: `"did_order_letter"`)

* `pending_trunk` (value: `"pending_trunk"`)





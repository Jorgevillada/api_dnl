# DnlApi.OrigInvoice

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**clientId** | **Number** |  | [optional] 
**state** | **String** |  | [optional] [default to &#39;normal&#39;]
**totalAmount** | **Number** |  | [optional] 
**invoiceEnd** | **Date** |  | [optional] 
**invoiceNumber** | **String** |  | [optional] 
**invoiceId** | **Number** |  | [optional] 
**invoiceStart** | **Date** |  | [optional] 
**invoiceTime** | **Date** |  | [optional] 
**clientName** | **String** |  | [optional] 
**createType** | **String** |  | [optional] [default to &#39;sent(out--buy)&#39;]
**pdfPath** | **String** |  | [optional] 


<a name="StateEnum"></a>
## Enum: StateEnum


* `send` (value: `"send"`)

* `verify` (value: `"verify"`)

* `normal` (value: `"normal"`)




<a name="CreateTypeEnum"></a>
## Enum: CreateTypeEnum


* `sent(all)` (value: `"sent(all)"`)

* `received(in--sell)` (value: `"received(in--sell)"`)

* `incoming` (value: `"incoming"`)

* `sent(out--buy)` (value: `"sent(out--buy)"`)





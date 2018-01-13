# DnlApi.OrigInvoiceGet

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**createType** | **String** |  | [optional] [default to &#39;sent(out--buy)&#39;]
**clientId** | **Number** |  | [optional] 
**state** | **String** |  | [optional] [default to &#39;normal&#39;]
**invoiceId** | **Number** |  | [optional] 
**invoiceNumber** | **String** |  | [optional] 
**pdfPath** | **String** |  | [optional] 
**invoiceTime** | **Date** |  | [optional] 
**clientName** | **String** |  | [optional] 
**invoiceStart** | **Date** |  | [optional] 
**invoiceEnd** | **Date** |  | [optional] 
**totalAmount** | **Number** |  | [optional] 


<a name="CreateTypeEnum"></a>
## Enum: CreateTypeEnum


* `sent(out--buy)` (value: `"sent(out--buy)"`)

* `received(in--sell)` (value: `"received(in--sell)"`)

* `sent(all)` (value: `"sent(all)"`)

* `incoming` (value: `"incoming"`)




<a name="StateEnum"></a>
## Enum: StateEnum


* `normal` (value: `"normal"`)

* `void` (value: `"void"`)

* `verify` (value: `"verify"`)

* `send` (value: `"send"`)





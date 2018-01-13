# DnlApi.InvoiceGet

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**createType** | **String** |  | [optional] [default to &#39;auto&#39;]
**amount** | **Number** |  | [optional] 
**invoiceId** | **Number** |  | [optional] 
**invoiceNumber** | **String** |  | [optional] 
**paid** | **Boolean** |  | [optional] 
**invoiceDate** | **Date** |  | [optional] 
**dueDate** | **Date** |  | [optional] 
**clientId** | **Number** |  | [optional] 
**url** | **String** |  | [optional] 
**invoicePeriodTo** | **Date** |  | [optional] 
**status** | **Number** |  | [optional] 
**state** | **String** |  | [optional] [default to &#39;void&#39;]
**invoicePeriodFrom** | **Date** |  | [optional] 
**clientName** | **String** |  | [optional] 


<a name="CreateTypeEnum"></a>
## Enum: CreateTypeEnum


* `auto` (value: `"auto"`)

* `manual` (value: `"manual"`)




<a name="StateEnum"></a>
## Enum: StateEnum


* `void` (value: `"void"`)

* `normal` (value: `"normal"`)

* `verify` (value: `"verify"`)

* `send` (value: `"send"`)





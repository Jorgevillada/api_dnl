# DnlApi.ResourceDirection

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**action** | **String** |  | [optional] [default to &#39;plus prefix&#39;]
**direction** | **String** |  | [optional] [default to &#39;ALL&#39;]
**timeProfileId** | **Number** |  | [optional] 
**numberLength** | **Number** |  | [optional] 
**dnis** | **String** |  | [optional] 
**type** | **String** |  | [optional] [default to &#39;modify the caller&#39;]
**numberType** | **String** |  | [optional] [default to &#39;all&#39;]
**digits** | **String** |  | [optional] 


<a name="ActionEnum"></a>
## Enum: ActionEnum


* `minus suffix` (value: `"minus suffix"`)

* `plus prefix` (value: `"plus prefix"`)

* `minus prefix` (value: `"minus prefix"`)

* `plus suffix` (value: `"plus suffix"`)




<a name="DirectionEnum"></a>
## Enum: DirectionEnum


* `ALL` (value: `"ALL"`)

* `egress` (value: `"egress"`)

* `ingress` (value: `"ingress"`)




<a name="TypeEnum"></a>
## Enum: TypeEnum


* `caller` (value: `"modify the caller"`)

* `called ` (value: `"modify the called "`)




<a name="NumberTypeEnum"></a>
## Enum: NumberTypeEnum


* `greater than` (value: `"greater than"`)

* `equal to` (value: `"equal to"`)

* `all` (value: `"all"`)

* `less than` (value: `"less than"`)





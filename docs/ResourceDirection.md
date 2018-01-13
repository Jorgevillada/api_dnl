# DnlApi.ResourceDirection

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**dnis** | **String** |  | [optional] 
**numberLength** | **Number** |  | [optional] 
**numberType** | **String** |  | [optional] [default to &#39;all&#39;]
**direction** | **String** |  | [optional] [default to &#39;ALL&#39;]
**timeProfileId** | **Number** |  | [optional] 
**type** | **String** |  | [optional] [default to &#39;modify the caller&#39;]
**digits** | **String** |  | [optional] 
**action** | **String** |  | [optional] [default to &#39;plus prefix&#39;]


<a name="NumberTypeEnum"></a>
## Enum: NumberTypeEnum


* `all` (value: `"all"`)

* `greater than` (value: `"greater than"`)

* `equal to` (value: `"equal to"`)

* `less than` (value: `"less than"`)




<a name="DirectionEnum"></a>
## Enum: DirectionEnum


* `ALL` (value: `"ALL"`)

* `ingress` (value: `"ingress"`)

* `egress` (value: `"egress"`)




<a name="TypeEnum"></a>
## Enum: TypeEnum


* `caller` (value: `"modify the caller"`)

* `called` (value: `"modify the called"`)




<a name="ActionEnum"></a>
## Enum: ActionEnum


* `plus prefix` (value: `"plus prefix"`)

* `plus suffix` (value: `"plus suffix"`)

* `minus prefix` (value: `"minus prefix"`)

* `minus suffix` (value: `"minus suffix"`)





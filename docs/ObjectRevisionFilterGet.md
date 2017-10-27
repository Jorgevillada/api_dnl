# DnlApi.ObjectRevisionFilterGet

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**action** | **String** |  | [optional] 
**id** | **Number** |  | [optional] 
**revisionNumber** | **Number** |  | 
**changes** | [**[ObjectRevisionRecordGet]**](ObjectRevisionRecordGet.md) |  | [optional] 
**revisionTime** | **Date** |  | [optional] 
**entityName** | **String** |  | 
**entityPk** | **String** |  | 
**userId** | **Number** |  | 
**restoredFromRevisionId** | **Number** |  | [optional] 


<a name="ActionEnum"></a>
## Enum: ActionEnum


* `create` (value: `"create"`)

* `delete` (value: `"delete"`)

* `restore` (value: `"restore"`)

* `update` (value: `"update"`)





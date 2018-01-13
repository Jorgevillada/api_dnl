# DnlApi.FtpCdrLogGet

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**status** | **String** |  | [optional] [default to &#39;initial&#39;]
**result** | [**[FtpCdrLogDetailGet]**](FtpCdrLogDetailGet.md) |  | [optional] 
**ftpIp** | **String** |  | [optional] 
**cdrEndTime** | **Date** |  | [optional] 
**pid** | **Number** |  | [optional] 
**ftpEndTime** | **Date** |  | [optional] 
**cdrStartTime** | **Date** |  | [optional] 
**ftpDir** | **String** |  | [optional] 
**clientAlias** | **String** |  | [optional] 
**id** | **Number** |  | [optional] 
**ftpStartTime** | **Date** |  | [optional] 


<a name="StatusEnum"></a>
## Enum: StatusEnum


* `initial` (value: `"initial"`)

* `in process` (value: `"in process"`)

* `finished` (value: `"finished"`)

* `error` (value: `"error"`)

* `ftp finished` (value: `"ftp finished"`)

* `ftp error` (value: `"ftp error"`)





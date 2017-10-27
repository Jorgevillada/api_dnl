# DnlApi.FtpCdrLogGet

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**clientAlias** | **String** |  | [optional] 
**cdrEndTime** | **Date** |  | [optional] 
**result** | [**[FtpCdrLogDetailGet]**](FtpCdrLogDetailGet.md) |  | [optional] 
**ftpIp** | **String** |  | [optional] 
**id** | **Number** |  | [optional] 
**ftpEndTime** | **Date** |  | [optional] 
**ftpStartTime** | **Date** |  | [optional] 
**ftpDir** | **String** |  | [optional] 
**status** | **String** |  | [optional] [default to &#39;initial&#39;]
**pid** | **Number** |  | [optional] 
**cdrStartTime** | **Date** |  | [optional] 


<a name="StatusEnum"></a>
## Enum: StatusEnum


* `finished` (value: `"finished"`)

* `in process` (value: `"in process"`)

* `ftp finished` (value: `"ftp finished"`)

* `error` (value: `"error"`)

* `ftp error` (value: `"ftp error"`)

* `initial` (value: `"initial"`)





# DnlApi.FtpConf

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **String** |  | [optional] 
**compression** | **String** |  | [optional] [default to &#39;gz&#39;]
**egressTrunks** | **[Number]** |  | [optional] 
**active** | **Boolean** |  | [optional] 
**frequency** | **String** |  | [optional] [default to &#39;daily&#39;]
**includeAllEgress** | **Boolean** |  | [optional] 
**ftpUsername** | **String** |  | [optional] 
**ftpDirectory** | **String** |  | [optional] 
**includeFields** | **[String]** |  | [optional] 
**maxLinePerFile** | **Number** |  | [optional] 
**origReturnCode** | **[Number]** |  | [optional] 
**ingressTrunks** | **[Number]** |  | [optional] 
**ftpServerIp** | **String** |  | [optional] 
**nonZero** | **Boolean** |  | [optional] 
**ftpServerPort** | **String** |  | [optional] 
**time** | **String** |  | [optional] 
**fileBreakdown** | **String** |  | [optional] [default to &#39;as one big file&#39;]
**ftpPassword** | **String** |  | [optional] 
**includeAllIngress** | **Boolean** |  | [optional] 
**termReturnCode** | **[Number]** |  | [optional] 
**includeHeader** | **Boolean** |  | [optional] 


<a name="CompressionEnum"></a>
## Enum: CompressionEnum


* `gz` (value: `"gz"`)

* `tar.bz2` (value: `"tar.bz2"`)

* `tar.gz` (value: `"tar.gz"`)




<a name="FrequencyEnum"></a>
## Enum: FrequencyEnum


* `hourly` (value: `"hourly"`)

* `minutely` (value: `"minutely"`)

* `weekly` (value: `"weekly"`)

* `daily` (value: `"daily"`)




<a name="FileBreakdownEnum"></a>
## Enum: FileBreakdownEnum


* `one big file` (value: `"as one big file"`)

* `daily file` (value: `"as daily file"`)

* `hourly file` (value: `"as hourly file"`)





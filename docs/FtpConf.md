# DnlApi.FtpConf

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**compression** | **String** |  | [optional] [default to &#39;gz&#39;]
**includeFields** | **[String]** |  | [optional] 
**ingressTrunks** | **[Number]** |  | [optional] 
**frequency** | **String** |  | [optional] [default to &#39;daily&#39;]
**includeHeader** | **Boolean** |  | [optional] 
**origReturnCode** | **[Number]** |  | [optional] 
**ftpServerPort** | **String** |  | [optional] 
**includeAllEgress** | **Boolean** |  | [optional] 
**includeAllIngress** | **Boolean** |  | [optional] 
**ftpDirectory** | **String** |  | [optional] 
**maxLinePerFile** | **Number** |  | [optional] 
**name** | **String** |  | [optional] 
**nonZero** | **Boolean** |  | [optional] 
**termReturnCode** | **[Number]** |  | [optional] 
**ftpPassword** | **String** |  | [optional] 
**fileBreakdown** | **String** |  | [optional] [default to &#39;as one big file&#39;]
**active** | **Boolean** |  | [optional] 
**ftpUsername** | **String** |  | [optional] 
**time** | **String** |  | [optional] 
**ftpServerIp** | **String** |  | [optional] 
**egressTrunks** | **[Number]** |  | [optional] 


<a name="CompressionEnum"></a>
## Enum: CompressionEnum


* `gz` (value: `"gz"`)

* `tar.gz` (value: `"tar.gz"`)

* `tar.bz2` (value: `"tar.bz2"`)

* `zip` (value: `"zip"`)




<a name="FrequencyEnum"></a>
## Enum: FrequencyEnum


* `daily` (value: `"daily"`)

* `hourly` (value: `"hourly"`)

* `minutely` (value: `"minutely"`)

* `weekly` (value: `"weekly"`)




<a name="FileBreakdownEnum"></a>
## Enum: FileBreakdownEnum


* `one big file` (value: `"as one big file"`)

* `hourly file` (value: `"as hourly file"`)

* `daily file` (value: `"as daily file"`)





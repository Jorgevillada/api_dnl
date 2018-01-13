# DnlApi.RateUploadTemplateModify

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**effectiveDateFormat** | **String** |  | [optional] 
**appendPrefix** | **Boolean** |  | [optional] 
**endDateAllGmt** | **String** |  | [optional] [default to &#39;(+ 0)&#39;]
**newCodeDays** | **Number** |  | [optional] 
**minTimeDefault** | **Number** |  | [optional] 
**endDateGmt** | **String** |  | [optional] [default to &#39;(+ 0)&#39;]
**rateIncreaseDays** | **Number** |  | [optional] 
**name** | **String** |  | [optional] 
**headers** | **[String]** |  | [optional] 
**intervalDefault** | **Number** |  | [optional] 
**sendErrorEmailTo** | **String** |  | [optional] [default to &#39;none&#39;]
**endDate** | **Date** |  | [optional] 
**rejectRate** | **String** |  | [optional] [default to &#39;no&#39;]
**endDateAll** | **Date** |  | [optional] 
**dupMethod** | **String** |  | [optional] [default to &#39;End-Date All Records&#39;]
**codeNameMatch** | **String** |  | [optional] [default to &#39;Re-populate Country and Code Name with Selected Code Deck&#39;]
**withHeader** | **Boolean** |  | [optional] 
**checkEffective** | **Boolean** |  | [optional] [default to false]
**hasCodeDeck** | **Boolean** |  | [optional] 
**effectiveDateDefault** | **Date** |  | [optional] 
**appendPrefixValue** | **String** |  | [optional] 


<a name="EffectiveDateFormatEnum"></a>
## Enum: EffectiveDateFormatEnum


* `mm/dd/yyyy` (value: `"mm/dd/yyyy"`)

* `yyyy-mm-dd` (value: `"yyyy-mm-dd"`)

* `dd-mm-yyyy` (value: `"dd-mm-yyyy"`)

* `dd/mm/yyyy` (value: `"dd/mm/yyyy"`)

* `yyyy/mm/dd` (value: `"yyyy/mm/dd"`)




<a name="[HeadersEnum]"></a>
## Enum: [HeadersEnum]


* `rate_id` (value: `"rate_id"`)

* `rate_table_id` (value: `"rate_table_id"`)

* `code` (value: `"code"`)

* `rate` (value: `"rate"`)

* `setup_fee` (value: `"setup_fee"`)

* `effective_date` (value: `"effective_date"`)

* `end_date` (value: `"end_date"`)

* `min_time` (value: `"min_time"`)

* `grace_time` (value: `"grace_time"`)

* `interval` (value: `"interval"`)

* `time_profile_id` (value: `"time_profile_id"`)

* `seconds` (value: `"seconds"`)

* `code_name` (value: `"code_name"`)

* `basic_percentages` (value: `"basic_percentages"`)

* `gift_percentages` (value: `"gift_percentages"`)

* `rate_type` (value: `"rate_type"`)

* `intra_rate` (value: `"intra_rate"`)

* `inter_rate` (value: `"inter_rate"`)

* `local_rate` (value: `"local_rate"`)

* `country` (value: `"country"`)

* `zone` (value: `"zone"`)

* `ocn` (value: `"ocn"`)

* `lata` (value: `"lata"`)

* `create_time` (value: `"create_time"`)

* `did_type` (value: `"did_type"`)




<a name="SendErrorEmailToEnum"></a>
## Enum: SendErrorEmailToEnum


* `none` (value: `"none"`)

* `Carrier Rate Contact` (value: `"Carrier Rate Contact"`)

* `Switch Rate Contact` (value: `"Switch Rate Contact"`)




<a name="RejectRateEnum"></a>
## Enum: RejectRateEnum


* `no` (value: `"no"`)

* `yes` (value: `"yes"`)




<a name="DupMethodEnum"></a>
## Enum: DupMethodEnum


* `End-Date All Records` (value: `"End-Date All Records"`)

* `Delete Existing Records` (value: `"Delete Existing Records"`)

* `End-Date Existing Records` (value: `"End-Date Existing Records"`)




<a name="CodeNameMatchEnum"></a>
## Enum: CodeNameMatchEnum


* `Deck` (value: `"Re-populate Country and Code Name with Selected Code Deck"`)

* `Deck if not available` (value: `"Re-populate Country and Code Name with Selected Code Deck if not available"`)





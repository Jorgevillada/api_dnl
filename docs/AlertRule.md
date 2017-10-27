# DnlApi.AlertRule

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **String** |  | [optional] 
**monitorIngress** | **Boolean** |  | [optional] 
**acdOperator** | **String** |  | [optional] [default to &#39;1&#39;]
**profitabilityOperator** | **String** |  | [optional] [default to &#39;1&#39;]
**autoUnblock** | **Boolean** |  | [optional] 
**acdValue** | **Number** |  | [optional] 
**block** | **Boolean** |  | [optional] 
**excludeCodes** | **[Number]** |  | [optional] 
**subject** | **String** |  | [optional] 
**schedule** | **String** |  | [optional] [default to &#39;never&#39;]
**activate** | **Boolean** |  | [optional] 
**asrValue** | **Number** |  | [optional] 
**autoUnblockAfter** | **Number** |  | [optional] 
**runOn** | **Number** |  | [optional] 
**pddValue** | **Number** |  | [optional] 
**runEvery** | **Number** |  | [optional] 
**revenueOperator** | **String** |  | [optional] [default to &#39;1&#39;]
**sendTo** | **String** |  | [optional] [default to &#39;Own NOC Email&#39;]
**minAttempt** | **Number** |  | [optional] 
**htmlContent** | **String** |  | [optional] 
**fromMailId** | **Number** |  | [optional] 
**profitabilityValue** | **Number** |  | [optional] 
**allTrunks** | **Boolean** |  | [optional] 
**sendEmail** | **Boolean** |  | [optional] 
**samplePeriod** | **Number** |  | [optional] 
**runDayOfWeek** | **Number** |  | [optional] 
**revenueValue** | **Number** |  | [optional] 
**asrOperator** | **String** |  | [optional] [default to &#39;1&#39;]
**pddOperator** | **String** |  | [optional] [default to &#39;1&#39;]
**trunks** | **[Number]** |  | [optional] 
**scope** | **String** |  | [optional] [default to &#39;Disable Entire Trunk&#39;]


<a name="AcdOperatorEnum"></a>
## Enum: AcdOperatorEnum


* `EQUAL` (value: `"="`)

* `1` (value: `"1"`)

* `LESS_THAN` (value: `"<"`)

* `GREATER_THAN` (value: `">"`)




<a name="ProfitabilityOperatorEnum"></a>
## Enum: ProfitabilityOperatorEnum


* `EQUAL` (value: `"="`)

* `1` (value: `"1"`)

* `LESS_THAN` (value: `"<"`)

* `GREATER_THAN` (value: `">"`)




<a name="ScheduleEnum"></a>
## Enum: ScheduleEnum


* `Daily` (value: `"Daily"`)

* `Weekly` (value: `"Weekly"`)

* `never` (value: `"never"`)

* `Every Specific Minutes` (value: `"Every Specific Minutes"`)




<a name="RevenueOperatorEnum"></a>
## Enum: RevenueOperatorEnum


* `EQUAL` (value: `"="`)

* `1` (value: `"1"`)

* `LESS_THAN` (value: `"<"`)

* `GREATER_THAN` (value: `">"`)




<a name="SendToEnum"></a>
## Enum: SendToEnum


* `Both` (value: `"Both"`)

* `Partner NOC Email` (value: `"Partner NOC Email"`)

* `Own NOC Email` (value: `"Own NOC Email"`)




<a name="AsrOperatorEnum"></a>
## Enum: AsrOperatorEnum


* `EQUAL` (value: `"="`)

* `1` (value: `"1"`)

* `LESS_THAN` (value: `"<"`)

* `GREATER_THAN` (value: `">"`)




<a name="PddOperatorEnum"></a>
## Enum: PddOperatorEnum


* `EQUAL` (value: `"="`)

* `1` (value: `"1"`)

* `LESS_THAN` (value: `"<"`)

* `GREATER_THAN` (value: `">"`)




<a name="ScopeEnum"></a>
## Enum: ScopeEnum


* `Specific Code` (value: `"Disable Specific Code"`)

* `Specific Code Name` (value: `"Disable Specific Code Name"`)

* `Entire Trunk` (value: `"Disable Entire Trunk"`)





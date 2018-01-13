# DnlApi.AlertRule

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**excludeCodes** | **[Number]** |  | [optional] 
**schedule** | **String** |  | [optional] [default to &#39;never&#39;]
**htmlContent** | **String** |  | [optional] 
**subject** | **String** |  | [optional] 
**samplePeriod** | **Number** |  | [optional] 
**sendEmail** | **Boolean** |  | [optional] 
**asrOperator** | **String** |  | [optional] [default to &#39;1&#39;]
**runEvery** | **Number** |  | [optional] 
**activate** | **Boolean** |  | [optional] 
**monitorBy** | **String** |  | [optional] [default to &#39;Trunk&#39;]
**minAttempt** | **Number** |  | [optional] 
**asrValue** | **Number** |  | [optional] 
**fromMailId** | **Number** |  | [optional] 
**autoUnblock** | **Boolean** |  | [optional] 
**acdValue** | **Number** |  | [optional] 
**monitorIngress** | **Boolean** |  | [optional] 
**profitabilityValue** | **Number** |  | [optional] 
**trunks** | **[Number]** |  | [optional] 
**scope** | **String** |  | [optional] [default to &#39;Disable Entire Trunk&#39;]
**sendTo** | **String** |  | [optional] [default to &#39;Own NOC Email&#39;]
**pddOperator** | **String** |  | [optional] [default to &#39;1&#39;]
**name** | **String** |  | [optional] 
**pddValue** | **Number** |  | [optional] 
**profitabilityOperator** | **String** |  | [optional] [default to &#39;1&#39;]
**runOn** | **Number** |  | [optional] 
**revenueOperator** | **String** |  | [optional] [default to &#39;1&#39;]
**allTrunks** | **Boolean** |  | [optional] 
**runDayOfWeek** | **Number** |  | [optional] 
**revenueValue** | **Number** |  | [optional] 
**autoUnblockAfter** | **Number** |  | [optional] 
**acdOperator** | **String** |  | [optional] [default to &#39;1&#39;]
**block** | **Boolean** |  | [optional] 


<a name="ScheduleEnum"></a>
## Enum: ScheduleEnum


* `never` (value: `"never"`)

* `Every Specific Minutes` (value: `"Every Specific Minutes"`)

* `Daily` (value: `"Daily"`)

* `Weekly` (value: `"Weekly"`)




<a name="AsrOperatorEnum"></a>
## Enum: AsrOperatorEnum


* `1` (value: `"1"`)

* `GREATER_THAN` (value: `">"`)

* `LESS_THAN` (value: `"<"`)

* `EQUAL` (value: `"="`)




<a name="MonitorByEnum"></a>
## Enum: MonitorByEnum


* `Trunk` (value: `"Trunk"`)

* `Trunk And DNIS` (value: `"Trunk And DNIS"`)

* `Trunk And ANI` (value: `"Trunk And ANI"`)

* `DNIS` (value: `"DNIS"`)

* `ANI` (value: `"ANI"`)

* `Trunk And Destination` (value: `"Trunk And Destination"`)

* `Trunk And Country` (value: `"Trunk And Country"`)

* `Trunk And Code` (value: `"Trunk And Code"`)




<a name="ScopeEnum"></a>
## Enum: ScopeEnum


* `Entire Trunk` (value: `"Disable Entire Trunk"`)

* `Specific Code` (value: `"Disable Specific Code"`)

* `Specific Code Name` (value: `"Disable Specific Code Name"`)




<a name="SendToEnum"></a>
## Enum: SendToEnum


* `Own NOC Email` (value: `"Own NOC Email"`)

* `Partner NOC Email` (value: `"Partner NOC Email"`)

* `Both` (value: `"Both"`)




<a name="PddOperatorEnum"></a>
## Enum: PddOperatorEnum


* `1` (value: `"1"`)

* `GREATER_THAN` (value: `">"`)

* `LESS_THAN` (value: `"<"`)

* `EQUAL` (value: `"="`)




<a name="ProfitabilityOperatorEnum"></a>
## Enum: ProfitabilityOperatorEnum


* `1` (value: `"1"`)

* `GREATER_THAN` (value: `">"`)

* `LESS_THAN` (value: `"<"`)

* `EQUAL` (value: `"="`)




<a name="RevenueOperatorEnum"></a>
## Enum: RevenueOperatorEnum


* `1` (value: `"1"`)

* `GREATER_THAN` (value: `">"`)

* `LESS_THAN` (value: `"<"`)

* `EQUAL` (value: `"="`)




<a name="AcdOperatorEnum"></a>
## Enum: AcdOperatorEnum


* `1` (value: `"1"`)

* `GREATER_THAN` (value: `">"`)

* `LESS_THAN` (value: `"<"`)

* `EQUAL` (value: `"="`)





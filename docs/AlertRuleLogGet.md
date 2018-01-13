# DnlApi.AlertRuleLogGet

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**subject** | **String** |  | [optional] 
**limitRevenue** | **String** |  | [optional] 
**createOn** | **Date** |  | [optional] 
**asrOperator** | **String** |  | [optional] [default to &#39;1&#39;]
**limitAcd** | **String** |  | [optional] 
**monitorBy** | **String** |  | [optional] 
**id** | **Number** |  | [optional] 
**asrValue** | **Number** |  | [optional] 
**fromMailId** | **Number** |  | [optional] 
**alertRulesId** | **Number** |  | [optional] 
**profitabilityOperator** | **String** |  | [optional] [default to &#39;1&#39;]
**monitorIngress** | **Boolean** |  | [optional] 
**trunks** | **[Number]** |  | [optional] 
**scope** | **String** |  | [optional] 
**sendTo** | **String** |  | [optional] 
**pddOperator** | **String** |  | [optional] [default to &#39;1&#39;]
**name** | **String** |  | [optional] 
**acdValue** | **Number** |  | [optional] 
**runOn** | **Number** |  | [optional] 
**finishTime** | **Date** |  | [optional] 
**runDayOfWeek** | **Number** |  | [optional] 
**sendEmail** | **Boolean** |  | [optional] 
**autoUnblock** | **Boolean** |  | [optional] 
**profitabilityValue** | **Number** |  | [optional] 
**block** | **Boolean** |  | [optional] 
**samplePeriod** | **Number** |  | [optional] 
**excludeCodes** | **[Number]** |  | [optional] 
**schedule** | **String** |  | [optional] 
**htmlContent** | **String** |  | [optional] 
**detail** | **[String]** |  | [optional] 
**limitAsr** | **String** |  | [optional] 
**limitAbrValue** | **Number** |  | [optional] 
**limitPddValue** | **Number** |  | [optional] 
**trunkType** | **String** |  | [optional] 
**runEvery** | **Number** |  | [optional] 
**status** | **String** |  | [optional] [default to &#39;normal&#39;]
**revenueValue** | **Number** |  | [optional] 
**limitAsrValue** | **Number** |  | [optional] 
**time** | **String** |  | [optional] 
**limitRevenueValue** | **Number** |  | [optional] 
**acdOperator** | **String** |  | [optional] [default to &#39;1&#39;]
**limitProfitabilityValue** | **Number** |  | [optional] 
**limitProfitability** | **String** |  | [optional] 
**limitAcdValue** | **Number** |  | [optional] 
**pddValue** | **Number** |  | [optional] 
**limitPdd** | **String** |  | [optional] 
**activate** | **Boolean** |  | [optional] 
**limitAbr** | **String** |  | [optional] 
**revenueOperator** | **String** |  | [optional] [default to &#39;1&#39;]
**allTrunks** | **Boolean** |  | [optional] 
**minAttempt** | **Number** |  | [optional] 
**autoUnblockAfter** | **Number** |  | [optional] 


<a name="AsrOperatorEnum"></a>
## Enum: AsrOperatorEnum


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




<a name="PddOperatorEnum"></a>
## Enum: PddOperatorEnum


* `1` (value: `"1"`)

* `GREATER_THAN` (value: `">"`)

* `LESS_THAN` (value: `"<"`)

* `EQUAL` (value: `"="`)




<a name="StatusEnum"></a>
## Enum: StatusEnum


* `normal` (value: `"normal"`)

* `over limit` (value: `"over limit"`)




<a name="AcdOperatorEnum"></a>
## Enum: AcdOperatorEnum


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





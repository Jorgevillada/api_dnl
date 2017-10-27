# DnlApi.AlertRuleLogGet

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **String** |  | [optional] 
**monitorIngress** | **Boolean** |  | [optional] 
**finishTime** | **Date** |  | [optional] 
**acdOperator** | **String** |  | [optional] [default to &#39;1&#39;]
**limitRevenue** | **String** |  | [optional] 
**acdValue** | **Number** |  | [optional] 
**time** | **String** |  | [optional] 
**subject** | **String** |  | [optional] 
**autoUnblockAfter** | **Number** |  | [optional] 
**asrValue** | **Number** |  | [optional] 
**limitAbr** | **String** |  | [optional] 
**runOn** | **Number** |  | [optional] 
**limitAcd** | **String** |  | [optional] 
**runEvery** | **Number** |  | [optional] 
**sendEmail** | **Boolean** |  | [optional] 
**sendTo** | **String** |  | [optional] 
**limitAsrValue** | **Number** |  | [optional] 
**autoUnblock** | **Boolean** |  | [optional] 
**fromMailId** | **Number** |  | [optional] 
**allTrunks** | **Boolean** |  | [optional] 
**revenueOperator** | **String** |  | [optional] [default to &#39;1&#39;]
**limitAsr** | **String** |  | [optional] 
**limitAbrValue** | **Number** |  | [optional] 
**asrOperator** | **String** |  | [optional] [default to &#39;1&#39;]
**trunks** | **[Number]** |  | [optional] 
**status** | **String** |  | [optional] [default to &#39;initial&#39;]
**excludeCodes** | **[Number]** |  | [optional] 
**profitabilityOperator** | **String** |  | [optional] [default to &#39;1&#39;]
**limitPddValue** | **Number** |  | [optional] 
**limitProfitabilityValue** | **Number** |  | [optional] 
**alertRulesId** | **Number** |  | [optional] 
**block** | **Boolean** |  | [optional] 
**createOn** | **Date** |  | [optional] 
**pddOperator** | **String** |  | [optional] [default to &#39;1&#39;]
**schedule** | **String** |  | [optional] 
**pddValue** | **Number** |  | [optional] 
**revenueValue** | **Number** |  | [optional] 
**activate** | **Boolean** |  | [optional] 
**limitRevenueValue** | **Number** |  | [optional] 
**htmlContent** | **String** |  | [optional] 
**profitabilityValue** | **Number** |  | [optional] 
**limitPdd** | **String** |  | [optional] 
**samplePeriod** | **Number** |  | [optional] 
**runDayOfWeek** | **Number** |  | [optional] 
**id** | **Number** |  | [optional] 
**limitProfitability** | **String** |  | [optional] 
**scope** | **String** |  | [optional] 
**limitAcdValue** | **Number** |  | [optional] 
**minAttempt** | **Number** |  | [optional] 


<a name="AcdOperatorEnum"></a>
## Enum: AcdOperatorEnum


* `EQUAL` (value: `"="`)

* `1` (value: `"1"`)

* `LESS_THAN` (value: `"<"`)

* `GREATER_THAN` (value: `">"`)




<a name="RevenueOperatorEnum"></a>
## Enum: RevenueOperatorEnum


* `EQUAL` (value: `"="`)

* `1` (value: `"1"`)

* `LESS_THAN` (value: `"<"`)

* `GREATER_THAN` (value: `">"`)




<a name="AsrOperatorEnum"></a>
## Enum: AsrOperatorEnum


* `EQUAL` (value: `"="`)

* `1` (value: `"1"`)

* `LESS_THAN` (value: `"<"`)

* `GREATER_THAN` (value: `">"`)




<a name="StatusEnum"></a>
## Enum: StatusEnum


* `success` (value: `"success"`)

* `initial` (value: `"initial"`)




<a name="ProfitabilityOperatorEnum"></a>
## Enum: ProfitabilityOperatorEnum


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





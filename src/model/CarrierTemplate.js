/**
 * DNL API
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: 1.2.10
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.2.3
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/CarrierTemplateLowBalConfig'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./CarrierTemplateLowBalConfig'));
  } else {
    // Browser globals (root is window)
    if (!root.DnlApi) {
      root.DnlApi = {};
    }
    root.DnlApi.CarrierTemplate = factory(root.DnlApi.ApiClient, root.DnlApi.CarrierTemplateLowBalConfig);
  }
}(this, function(ApiClient, CarrierTemplateLowBalConfig) {
  'use strict';




  /**
   * The CarrierTemplate model module.
   * @module model/CarrierTemplate
   * @version 1.2.10
   */

  /**
   * Constructs a new <code>CarrierTemplate</code>.
   * @alias module:model/CarrierTemplate
   * @class
   * @param profitMargin {Number} 
   */
  var exports = function(profitMargin) {
    var _this = this;















    _this['profit_margin'] = profitMargin;












































  };

  /**
   * Constructs a <code>CarrierTemplate</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/CarrierTemplate} obj Optional instance to populate.
   * @return {module:model/CarrierTemplate} The populated <code>CarrierTemplate</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('show_code_name_summary')) {
        obj['show_code_name_summary'] = ApiClient.convertToType(data['show_code_name_summary'], 'Boolean');
      }
      if (data.hasOwnProperty('include_tax')) {
        obj['include_tax'] = ApiClient.convertToType(data['include_tax'], 'Boolean');
      }
      if (data.hasOwnProperty('send_invoice_as_link')) {
        obj['send_invoice_as_link'] = ApiClient.convertToType(data['send_invoice_as_link'], 'Boolean');
      }
      if (data.hasOwnProperty('notify_client_balance_type')) {
        obj['notify_client_balance_type'] = ApiClient.convertToType(data['notify_client_balance_type'], 'Number');
      }
      if (data.hasOwnProperty('is_show_code_name')) {
        obj['is_show_code_name'] = ApiClient.convertToType(data['is_show_code_name'], 'Boolean');
      }
      if (data.hasOwnProperty('mode')) {
        obj['mode'] = ApiClient.convertToType(data['mode'], 'String');
      }
      if (data.hasOwnProperty('daily_cdr_generation')) {
        obj['daily_cdr_generation'] = ApiClient.convertToType(data['daily_cdr_generation'], 'Boolean');
      }
      if (data.hasOwnProperty('low_balance_config')) {
        obj['low_balance_config'] = CarrierTemplateLowBalConfig.constructFromObject(data['low_balance_config']);
      }
      if (data.hasOwnProperty('auto_summary_group_by')) {
        obj['auto_summary_group_by'] = ApiClient.convertToType(data['auto_summary_group_by'], 'String');
      }
      if (data.hasOwnProperty('auto_send_zone')) {
        obj['auto_send_zone'] = ApiClient.convertToType(data['auto_send_zone'], 'String');
      }
      if (data.hasOwnProperty('show_country_summary')) {
        obj['show_country_summary'] = ApiClient.convertToType(data['show_country_summary'], 'Boolean');
      }
      if (data.hasOwnProperty('is_show_total_trunk')) {
        obj['is_show_total_trunk'] = ApiClient.convertToType(data['is_show_total_trunk'], 'Boolean');
      }
      if (data.hasOwnProperty('show_payment_summary')) {
        obj['show_payment_summary'] = ApiClient.convertToType(data['show_payment_summary'], 'Boolean');
      }
      if (data.hasOwnProperty('template_name')) {
        obj['template_name'] = ApiClient.convertToType(data['template_name'], 'String');
      }
      if (data.hasOwnProperty('profit_margin')) {
        obj['profit_margin'] = ApiClient.convertToType(data['profit_margin'], 'Number');
      }
      if (data.hasOwnProperty('time_zone')) {
        obj['time_zone'] = ApiClient.convertToType(data['time_zone'], 'String');
      }
      if (data.hasOwnProperty('is_show_country')) {
        obj['is_show_country'] = ApiClient.convertToType(data['is_show_country'], 'Boolean');
      }
      if (data.hasOwnProperty('show_code_summary')) {
        obj['show_code_summary'] = ApiClient.convertToType(data['show_code_summary'], 'Boolean');
      }
      if (data.hasOwnProperty('auto_summary_not_zero')) {
        obj['auto_summary_not_zero'] = ApiClient.convertToType(data['auto_summary_not_zero'], 'Number');
      }
      if (data.hasOwnProperty('daily_cdr_generation_zone')) {
        obj['daily_cdr_generation_zone'] = ApiClient.convertToType(data['daily_cdr_generation_zone'], 'String');
      }
      if (data.hasOwnProperty('auto_summary_hour')) {
        obj['auto_summary_hour'] = ApiClient.convertToType(data['auto_summary_hour'], 'Number');
      }
      if (data.hasOwnProperty('show_account_summary')) {
        obj['show_account_summary'] = ApiClient.convertToType(data['show_account_summary'], 'Boolean');
      }
      if (data.hasOwnProperty('payment_term')) {
        obj['payment_term'] = ApiClient.convertToType(data['payment_term'], 'String');
      }
      if (data.hasOwnProperty('format')) {
        obj['format'] = ApiClient.convertToType(data['format'], 'String');
      }
      if (data.hasOwnProperty('credit_limit')) {
        obj['credit_limit'] = ApiClient.convertToType(data['credit_limit'], 'Number');
      }
      if (data.hasOwnProperty('auto_summary_period')) {
        obj['auto_summary_period'] = ApiClient.convertToType(data['auto_summary_period'], 'Number');
      }
      if (data.hasOwnProperty('is_unlimited')) {
        obj['is_unlimited'] = ApiClient.convertToType(data['is_unlimited'], 'Boolean');
      }
      if (data.hasOwnProperty('is_daily_balance_notification')) {
        obj['is_daily_balance_notification'] = ApiClient.convertToType(data['is_daily_balance_notification'], 'Boolean');
      }
      if (data.hasOwnProperty('is_short_duration_call_surcharge_detail')) {
        obj['is_short_duration_call_surcharge_detail'] = ApiClient.convertToType(data['is_short_duration_call_surcharge_detail'], 'Boolean');
      }
      if (data.hasOwnProperty('test_credit')) {
        obj['test_credit'] = ApiClient.convertToType(data['test_credit'], 'Number');
      }
      if (data.hasOwnProperty('call_limit')) {
        obj['call_limit'] = ApiClient.convertToType(data['call_limit'], 'Number');
      }
      if (data.hasOwnProperty('is_send_trunk_update')) {
        obj['is_send_trunk_update'] = ApiClient.convertToType(data['is_send_trunk_update'], 'Boolean');
      }
      if (data.hasOwnProperty('profit_type')) {
        obj['profit_type'] = ApiClient.convertToType(data['profit_type'], 'String');
      }
      if (data.hasOwnProperty('invoice_zone')) {
        obj['invoice_zone'] = ApiClient.convertToType(data['invoice_zone'], 'String');
      }
      if (data.hasOwnProperty('show_detail_by_trunk')) {
        obj['show_detail_by_trunk'] = ApiClient.convertToType(data['show_detail_by_trunk'], 'Boolean');
      }
      if (data.hasOwnProperty('usage_detail_fields')) {
        obj['usage_detail_fields'] = ApiClient.convertToType(data['usage_detail_fields'], 'String');
      }
      if (data.hasOwnProperty('cdr_format')) {
        obj['cdr_format'] = ApiClient.convertToType(data['cdr_format'], 'String');
      }
      if (data.hasOwnProperty('auto_send_invoice')) {
        obj['auto_send_invoice'] = ApiClient.convertToType(data['auto_send_invoice'], 'Boolean');
      }
      if (data.hasOwnProperty('rate_value')) {
        obj['rate_value'] = ApiClient.convertToType(data['rate_value'], 'String');
      }
      if (data.hasOwnProperty('non_zero_invoice_only')) {
        obj['non_zero_invoice_only'] = ApiClient.convertToType(data['non_zero_invoice_only'], 'Boolean');
      }
      if (data.hasOwnProperty('include_short_call_charge')) {
        obj['include_short_call_charge'] = ApiClient.convertToType(data['include_short_call_charge'], 'Boolean');
      }
      if (data.hasOwnProperty('scc_charge')) {
        obj['scc_charge'] = ApiClient.convertToType(data['scc_charge'], 'Number');
      }
      if (data.hasOwnProperty('show_trunk_summary')) {
        obj['show_trunk_summary'] = ApiClient.convertToType(data['show_trunk_summary'], 'Boolean');
      }
      if (data.hasOwnProperty('is_auto_summary')) {
        obj['is_auto_summary'] = ApiClient.convertToType(data['is_auto_summary'], 'Boolean');
      }
      if (data.hasOwnProperty('is_breakdown_by_rate_table')) {
        obj['is_breakdown_by_rate_table'] = ApiClient.convertToType(data['is_breakdown_by_rate_table'], 'Boolean');
      }
      if (data.hasOwnProperty('show_jurisdiction_detail')) {
        obj['show_jurisdiction_detail'] = ApiClient.convertToType(data['show_jurisdiction_detail'], 'Boolean');
      }
      if (data.hasOwnProperty('scc_below')) {
        obj['scc_below'] = ApiClient.convertToType(data['scc_below'], 'Number');
      }
      if (data.hasOwnProperty('cps_limit')) {
        obj['cps_limit'] = ApiClient.convertToType(data['cps_limit'], 'Number');
      }
      if (data.hasOwnProperty('scc_percent')) {
        obj['scc_percent'] = ApiClient.convertToType(data['scc_percent'], 'Number');
      }
      if (data.hasOwnProperty('decimal')) {
        obj['decimal'] = ApiClient.convertToType(data['decimal'], 'Number');
      }
      if (data.hasOwnProperty('show_daily_usage')) {
        obj['show_daily_usage'] = ApiClient.convertToType(data['show_daily_usage'], 'Boolean');
      }
      if (data.hasOwnProperty('scc_type')) {
        obj['scc_type'] = ApiClient.convertToType(data['scc_type'], 'String');
      }
      if (data.hasOwnProperty('attach_cdrs_list')) {
        obj['attach_cdrs_list'] = ApiClient.convertToType(data['attach_cdrs_list'], 'Boolean');
      }
      if (data.hasOwnProperty('is_show_daily_usage')) {
        obj['is_show_daily_usage'] = ApiClient.convertToType(data['is_show_daily_usage'], 'Boolean');
      }
      if (data.hasOwnProperty('auto_daily_balance_recipient')) {
        obj['auto_daily_balance_recipient'] = ApiClient.convertToType(data['auto_daily_balance_recipient'], 'String');
      }
      if (data.hasOwnProperty('currency')) {
        obj['currency'] = ApiClient.convertToType(data['currency'], 'String');
      }
      if (data.hasOwnProperty('inlcude_cdr_in_email')) {
        obj['inlcude_cdr_in_email'] = ApiClient.convertToType(data['inlcude_cdr_in_email'], 'Boolean');
      }
      if (data.hasOwnProperty('payment_received_notice')) {
        obj['payment_received_notice'] = ApiClient.convertToType(data['payment_received_notice'], 'Boolean');
      }
      if (data.hasOwnProperty('is_auto_balance')) {
        obj['is_auto_balance'] = ApiClient.convertToType(data['is_auto_balance'], 'Boolean');
      }
    }
    return obj;
  }

  /**
   * @member {Boolean} show_code_name_summary
   */
  exports.prototype['show_code_name_summary'] = undefined;
  /**
   * @member {Boolean} include_tax
   */
  exports.prototype['include_tax'] = undefined;
  /**
   * @member {Boolean} send_invoice_as_link
   */
  exports.prototype['send_invoice_as_link'] = undefined;
  /**
   * @member {Number} notify_client_balance_type
   */
  exports.prototype['notify_client_balance_type'] = undefined;
  /**
   * @member {Boolean} is_show_code_name
   */
  exports.prototype['is_show_code_name'] = undefined;
  /**
   * @member {module:model/CarrierTemplate.ModeEnum} mode
   * @default 'prepay'
   */
  exports.prototype['mode'] = 'prepay';
  /**
   * @member {Boolean} daily_cdr_generation
   */
  exports.prototype['daily_cdr_generation'] = undefined;
  /**
   * @member {module:model/CarrierTemplateLowBalConfig} low_balance_config
   */
  exports.prototype['low_balance_config'] = undefined;
  /**
   * @member {module:model/CarrierTemplate.AutoSummaryGroupByEnum} auto_summary_group_by
   * @default 'By Country'
   */
  exports.prototype['auto_summary_group_by'] = 'By Country';
  /**
   * @member {String} auto_send_zone
   */
  exports.prototype['auto_send_zone'] = undefined;
  /**
   * @member {Boolean} show_country_summary
   */
  exports.prototype['show_country_summary'] = undefined;
  /**
   * @member {Boolean} is_show_total_trunk
   */
  exports.prototype['is_show_total_trunk'] = undefined;
  /**
   * @member {Boolean} show_payment_summary
   */
  exports.prototype['show_payment_summary'] = undefined;
  /**
   * @member {String} template_name
   */
  exports.prototype['template_name'] = undefined;
  /**
   * @member {Number} profit_margin
   */
  exports.prototype['profit_margin'] = undefined;
  /**
   * @member {String} time_zone
   */
  exports.prototype['time_zone'] = undefined;
  /**
   * @member {Boolean} is_show_country
   */
  exports.prototype['is_show_country'] = undefined;
  /**
   * @member {Boolean} show_code_summary
   */
  exports.prototype['show_code_summary'] = undefined;
  /**
   * @member {Number} auto_summary_not_zero
   */
  exports.prototype['auto_summary_not_zero'] = undefined;
  /**
   * @member {String} daily_cdr_generation_zone
   */
  exports.prototype['daily_cdr_generation_zone'] = undefined;
  /**
   * @member {Number} auto_summary_hour
   */
  exports.prototype['auto_summary_hour'] = undefined;
  /**
   * @member {Boolean} show_account_summary
   */
  exports.prototype['show_account_summary'] = undefined;
  /**
   * @member {String} payment_term
   */
  exports.prototype['payment_term'] = undefined;
  /**
   * @member {module:model/CarrierTemplate.FormatEnum} format
   * @default 'PDF'
   */
  exports.prototype['format'] = 'PDF';
  /**
   * @member {Number} credit_limit
   */
  exports.prototype['credit_limit'] = undefined;
  /**
   * @member {Number} auto_summary_period
   */
  exports.prototype['auto_summary_period'] = undefined;
  /**
   * @member {Boolean} is_unlimited
   */
  exports.prototype['is_unlimited'] = undefined;
  /**
   * @member {Boolean} is_daily_balance_notification
   */
  exports.prototype['is_daily_balance_notification'] = undefined;
  /**
   * @member {Boolean} is_short_duration_call_surcharge_detail
   */
  exports.prototype['is_short_duration_call_surcharge_detail'] = undefined;
  /**
   * @member {Number} test_credit
   */
  exports.prototype['test_credit'] = undefined;
  /**
   * @member {Number} call_limit
   */
  exports.prototype['call_limit'] = undefined;
  /**
   * @member {Boolean} is_send_trunk_update
   */
  exports.prototype['is_send_trunk_update'] = undefined;
  /**
   * @member {module:model/CarrierTemplate.ProfitTypeEnum} profit_type
   * @default 'percentage'
   */
  exports.prototype['profit_type'] = 'percentage';
  /**
   * @member {String} invoice_zone
   */
  exports.prototype['invoice_zone'] = undefined;
  /**
   * @member {Boolean} show_detail_by_trunk
   */
  exports.prototype['show_detail_by_trunk'] = undefined;
  /**
   * @member {String} usage_detail_fields
   */
  exports.prototype['usage_detail_fields'] = undefined;
  /**
   * @member {module:model/CarrierTemplate.CdrFormatEnum} cdr_format
   * @default 'Excel'
   */
  exports.prototype['cdr_format'] = 'Excel';
  /**
   * @member {Boolean} auto_send_invoice
   */
  exports.prototype['auto_send_invoice'] = undefined;
  /**
   * @member {module:model/CarrierTemplate.RateValueEnum} rate_value
   * @default 'Actual Value'
   */
  exports.prototype['rate_value'] = 'Actual Value';
  /**
   * @member {Boolean} non_zero_invoice_only
   */
  exports.prototype['non_zero_invoice_only'] = undefined;
  /**
   * @member {Boolean} include_short_call_charge
   */
  exports.prototype['include_short_call_charge'] = undefined;
  /**
   * @member {Number} scc_charge
   */
  exports.prototype['scc_charge'] = undefined;
  /**
   * @member {Boolean} show_trunk_summary
   */
  exports.prototype['show_trunk_summary'] = undefined;
  /**
   * @member {Boolean} is_auto_summary
   */
  exports.prototype['is_auto_summary'] = undefined;
  /**
   * @member {Boolean} is_breakdown_by_rate_table
   */
  exports.prototype['is_breakdown_by_rate_table'] = undefined;
  /**
   * @member {Boolean} show_jurisdiction_detail
   */
  exports.prototype['show_jurisdiction_detail'] = undefined;
  /**
   * @member {Number} scc_below
   */
  exports.prototype['scc_below'] = undefined;
  /**
   * @member {Number} cps_limit
   */
  exports.prototype['cps_limit'] = undefined;
  /**
   * @member {Number} scc_percent
   */
  exports.prototype['scc_percent'] = undefined;
  /**
   * @member {Number} decimal
   */
  exports.prototype['decimal'] = undefined;
  /**
   * @member {Boolean} show_daily_usage
   */
  exports.prototype['show_daily_usage'] = undefined;
  /**
   * @member {module:model/CarrierTemplate.SccTypeEnum} scc_type
   * @default 'meeting the short duration defined neighboring'
   */
  exports.prototype['scc_type'] = 'meeting the short duration defined neighboring';
  /**
   * @member {Boolean} attach_cdrs_list
   */
  exports.prototype['attach_cdrs_list'] = undefined;
  /**
   * @member {Boolean} is_show_daily_usage
   */
  exports.prototype['is_show_daily_usage'] = undefined;
  /**
   * @member {module:model/CarrierTemplate.AutoDailyBalanceRecipientEnum} auto_daily_balance_recipient
   * @default 'Partner Billing Contact'
   */
  exports.prototype['auto_daily_balance_recipient'] = 'Partner Billing Contact';
  /**
   * @member {String} currency
   */
  exports.prototype['currency'] = undefined;
  /**
   * @member {Boolean} inlcude_cdr_in_email
   */
  exports.prototype['inlcude_cdr_in_email'] = undefined;
  /**
   * @member {Boolean} payment_received_notice
   */
  exports.prototype['payment_received_notice'] = undefined;
  /**
   * @member {Boolean} is_auto_balance
   */
  exports.prototype['is_auto_balance'] = undefined;


  /**
   * Allowed values for the <code>mode</code> property.
   * @enum {String}
   * @readonly
   */
  exports.ModeEnum = {
    /**
     * value: "postpay"
     * @const
     */
    "postpay": "postpay",
    /**
     * value: "prepay"
     * @const
     */
    "prepay": "prepay"  };

  /**
   * Allowed values for the <code>auto_summary_group_by</code> property.
   * @enum {String}
   * @readonly
   */
  exports.AutoSummaryGroupByEnum = {
    /**
     * value: "By Country"
     * @const
     */
    "Country": "By Country",
    /**
     * value: "By Code Name"
     * @const
     */
    "Code Name": "By Code Name",
    /**
     * value: "By Code"
     * @const
     */
    "Code": "By Code"  };

  /**
   * Allowed values for the <code>format</code> property.
   * @enum {String}
   * @readonly
   */
  exports.FormatEnum = {
    /**
     * value: "PDF"
     * @const
     */
    "PDF": "PDF",
    /**
     * value: "Excel"
     * @const
     */
    "Excel": "Excel",
    /**
     * value: "HTML"
     * @const
     */
    "HTML": "HTML"  };

  /**
   * Allowed values for the <code>profit_type</code> property.
   * @enum {String}
   * @readonly
   */
  exports.ProfitTypeEnum = {
    /**
     * value: "value"
     * @const
     */
    "value": "value",
    /**
     * value: "percentage"
     * @const
     */
    "percentage": "percentage"  };

  /**
   * Allowed values for the <code>cdr_format</code> property.
   * @enum {String}
   * @readonly
   */
  exports.CdrFormatEnum = {
    /**
     * value: "Excel"
     * @const
     */
    "Excel": "Excel",
    /**
     * value: "tar.gz"
     * @const
     */
    "tar.gz": "tar.gz",
    /**
     * value: "CSV"
     * @const
     */
    "CSV": "CSV",
    /**
     * value: "zip"
     * @const
     */
    "zip": "zip"  };

  /**
   * Allowed values for the <code>rate_value</code> property.
   * @enum {String}
   * @readonly
   */
  exports.RateValueEnum = {
    /**
     * value: "Average Value"
     * @const
     */
    "Average Value": "Average Value",
    /**
     * value: "Actual Value"
     * @const
     */
    "Actual Value": "Actual Value"  };

  /**
   * Allowed values for the <code>scc_type</code> property.
   * @enum {String}
   * @readonly
   */
  exports.SccTypeEnum = {
    /**
     * value: "meeting the short duration defined neighboring"
     * @const
     */
    "meeting the short duration defined neighboring": "meeting the short duration defined neighboring",
    /**
     * value: "that exceed the defined percentage"
     * @const
     */
    "that exceed the defined percentage": "that exceed the defined percentage"  };

  /**
   * Allowed values for the <code>auto_daily_balance_recipient</code> property.
   * @enum {String}
   * @readonly
   */
  exports.AutoDailyBalanceRecipientEnum = {
    /**
     * value: "Owner Billing Contact"
     * @const
     */
    "Owner Billing Contact": "Owner Billing Contact",
    /**
     * value: "Both"
     * @const
     */
    "Both": "Both",
    /**
     * value: "Partner Billing Contact"
     * @const
     */
    "Partner Billing Contact": "Partner Billing Contact"  };


  return exports;
}));



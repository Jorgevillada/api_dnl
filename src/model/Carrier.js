/**
 * DNL API
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: 1.2.62
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
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.DnlApi) {
      root.DnlApi = {};
    }
    root.DnlApi.Carrier = factory(root.DnlApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The Carrier model module.
   * @module model/Carrier
   * @version 1.2.62
   */

  /**
   * Constructs a new <code>Carrier</code>.
   * @alias module:model/Carrier
   * @class
   */
  var exports = function() {
    var _this = this;









































  };

  /**
   * Constructs a <code>Carrier</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Carrier} obj Optional instance to populate.
   * @return {module:model/Carrier} The populated <code>Carrier</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('daily_usage_group_by')) {
        obj['daily_usage_group_by'] = ApiClient.convertToType(data['daily_usage_group_by'], 'String');
      }
      if (data.hasOwnProperty('daily_usage_on_non_zero')) {
        obj['daily_usage_on_non_zero'] = ApiClient.convertToType(data['daily_usage_on_non_zero'], 'Boolean');
      }
      if (data.hasOwnProperty('daily_usage_summary')) {
        obj['daily_usage_summary'] = ApiClient.convertToType(data['daily_usage_summary'], 'Boolean');
      }
      if (data.hasOwnProperty('profit_type')) {
        obj['profit_type'] = ApiClient.convertToType(data['profit_type'], 'String');
      }
      if (data.hasOwnProperty('short_call_percent')) {
        obj['short_call_percent'] = ApiClient.convertToType(data['short_call_percent'], 'Number');
      }
      if (data.hasOwnProperty('billing_email')) {
        obj['billing_email'] = ApiClient.convertToType(data['billing_email'], 'String');
      }
      if (data.hasOwnProperty('payment_term_id')) {
        obj['payment_term_id'] = ApiClient.convertToType(data['payment_term_id'], 'Number');
      }
      if (data.hasOwnProperty('daily_cdr_delivery')) {
        obj['daily_cdr_delivery'] = ApiClient.convertToType(data['daily_cdr_delivery'], 'Boolean');
      }
      if (data.hasOwnProperty('payment_received_notice')) {
        obj['payment_received_notice'] = ApiClient.convertToType(data['payment_received_notice'], 'Boolean');
      }
      if (data.hasOwnProperty('test_credit')) {
        obj['test_credit'] = ApiClient.convertToType(data['test_credit'], 'Number');
      }
      if (data.hasOwnProperty('short_call_duration')) {
        obj['short_call_duration'] = ApiClient.convertToType(data['short_call_duration'], 'Number');
      }
      if (data.hasOwnProperty('is_prepay')) {
        obj['is_prepay'] = ApiClient.convertToType(data['is_prepay'], 'Boolean');
      }
      if (data.hasOwnProperty('cps_limit')) {
        obj['cps_limit'] = ApiClient.convertToType(data['cps_limit'], 'Number');
      }
      if (data.hasOwnProperty('low_balance_alert')) {
        obj['low_balance_alert'] = ApiClient.convertToType(data['low_balance_alert'], 'Boolean');
      }
      if (data.hasOwnProperty('noc_email')) {
        obj['noc_email'] = ApiClient.convertToType(data['noc_email'], 'String');
      }
      if (data.hasOwnProperty('credit_limit')) {
        obj['credit_limit'] = ApiClient.convertToType(data['credit_limit'], 'Number');
      }
      if (data.hasOwnProperty('report_frequency')) {
        obj['report_frequency'] = ApiClient.convertToType(data['report_frequency'], 'Number');
      }
      if (data.hasOwnProperty('profit_margin')) {
        obj['profit_margin'] = ApiClient.convertToType(data['profit_margin'], 'Number');
      }
      if (data.hasOwnProperty('unlimited_credit')) {
        obj['unlimited_credit'] = ApiClient.convertToType(data['unlimited_credit'], 'Boolean');
      }
      if (data.hasOwnProperty('currency_name')) {
        obj['currency_name'] = ApiClient.convertToType(data['currency_name'], 'String');
      }
      if (data.hasOwnProperty('enough_balance')) {
        obj['enough_balance'] = ApiClient.convertToType(data['enough_balance'], 'Boolean');
      }
      if (data.hasOwnProperty('company')) {
        obj['company'] = ApiClient.convertToType(data['company'], 'String');
      }
      if (data.hasOwnProperty('password')) {
        obj['password'] = ApiClient.convertToType(data['password'], 'String');
      }
      if (data.hasOwnProperty('daily_balance_summary')) {
        obj['daily_balance_summary'] = ApiClient.convertToType(data['daily_balance_summary'], 'Boolean');
      }
      if (data.hasOwnProperty('short_call_charge')) {
        obj['short_call_charge'] = ApiClient.convertToType(data['short_call_charge'], 'Number');
      }
      if (data.hasOwnProperty('login')) {
        obj['login'] = ApiClient.convertToType(data['login'], 'String');
      }
      if (data.hasOwnProperty('auto_invoice_type')) {
        obj['auto_invoice_type'] = ApiClient.convertToType(data['auto_invoice_type'], 'String');
      }
      if (data.hasOwnProperty('name')) {
        obj['name'] = ApiClient.convertToType(data['name'], 'String');
      }
      if (data.hasOwnProperty('is_active')) {
        obj['is_active'] = ApiClient.convertToType(data['is_active'], 'Boolean');
      }
      if (data.hasOwnProperty('rate_email')) {
        obj['rate_email'] = ApiClient.convertToType(data['rate_email'], 'String');
      }
      if (data.hasOwnProperty('finance_email_cc')) {
        obj['finance_email_cc'] = ApiClient.convertToType(data['finance_email_cc'], 'String');
      }
      if (data.hasOwnProperty('account_detail')) {
        obj['account_detail'] = ApiClient.convertToType(data['account_detail'], 'String');
      }
      if (data.hasOwnProperty('short_call_charge_exceed_only')) {
        obj['short_call_charge_exceed_only'] = ApiClient.convertToType(data['short_call_charge_exceed_only'], 'Number');
      }
      if (data.hasOwnProperty('call_limit')) {
        obj['call_limit'] = ApiClient.convertToType(data['call_limit'], 'Number');
      }
      if (data.hasOwnProperty('one_time_report_time')) {
        obj['one_time_report_time'] = ApiClient.convertToType(data['one_time_report_time'], 'Number');
      }
      if (data.hasOwnProperty('main_email')) {
        obj['main_email'] = ApiClient.convertToType(data['main_email'], 'String');
      }
      if (data.hasOwnProperty('address')) {
        obj['address'] = ApiClient.convertToType(data['address'], 'String');
      }
      if (data.hasOwnProperty('trunk_update_alert')) {
        obj['trunk_update_alert'] = ApiClient.convertToType(data['trunk_update_alert'], 'Boolean');
      }
      if (data.hasOwnProperty('group_id')) {
        obj['group_id'] = ApiClient.convertToType(data['group_id'], 'Number');
      }
      if (data.hasOwnProperty('phone')) {
        obj['phone'] = ApiClient.convertToType(data['phone'], 'String');
      }
    }
    return obj;
  }

  /**
   * @member {module:model/Carrier.DailyUsageGroupByEnum} daily_usage_group_by
   * @default 'By Country'
   */
  exports.prototype['daily_usage_group_by'] = 'By Country';
  /**
   * @member {Boolean} daily_usage_on_non_zero
   */
  exports.prototype['daily_usage_on_non_zero'] = undefined;
  /**
   * @member {Boolean} daily_usage_summary
   */
  exports.prototype['daily_usage_summary'] = undefined;
  /**
   * @member {module:model/Carrier.ProfitTypeEnum} profit_type
   * @default 'percentage'
   */
  exports.prototype['profit_type'] = 'percentage';
  /**
   * @member {Number} short_call_percent
   */
  exports.prototype['short_call_percent'] = undefined;
  /**
   * @member {String} billing_email
   */
  exports.prototype['billing_email'] = undefined;
  /**
   * @member {Number} payment_term_id
   */
  exports.prototype['payment_term_id'] = undefined;
  /**
   * @member {Boolean} daily_cdr_delivery
   */
  exports.prototype['daily_cdr_delivery'] = undefined;
  /**
   * @member {Boolean} payment_received_notice
   */
  exports.prototype['payment_received_notice'] = undefined;
  /**
   * @member {Number} test_credit
   */
  exports.prototype['test_credit'] = undefined;
  /**
   * @member {Number} short_call_duration
   */
  exports.prototype['short_call_duration'] = undefined;
  /**
   * @member {Boolean} is_prepay
   */
  exports.prototype['is_prepay'] = undefined;
  /**
   * @member {Number} cps_limit
   */
  exports.prototype['cps_limit'] = undefined;
  /**
   * @member {Boolean} low_balance_alert
   */
  exports.prototype['low_balance_alert'] = undefined;
  /**
   * @member {String} noc_email
   */
  exports.prototype['noc_email'] = undefined;
  /**
   * @member {Number} credit_limit
   */
  exports.prototype['credit_limit'] = undefined;
  /**
   * @member {Number} report_frequency
   */
  exports.prototype['report_frequency'] = undefined;
  /**
   * @member {Number} profit_margin
   */
  exports.prototype['profit_margin'] = undefined;
  /**
   * @member {Boolean} unlimited_credit
   * @default false
   */
  exports.prototype['unlimited_credit'] = false;
  /**
   * @member {String} currency_name
   */
  exports.prototype['currency_name'] = undefined;
  /**
   * @member {Boolean} enough_balance
   * @default false
   */
  exports.prototype['enough_balance'] = false;
  /**
   * @member {String} company
   */
  exports.prototype['company'] = undefined;
  /**
   * @member {String} password
   */
  exports.prototype['password'] = undefined;
  /**
   * @member {Boolean} daily_balance_summary
   */
  exports.prototype['daily_balance_summary'] = undefined;
  /**
   * @member {Number} short_call_charge
   */
  exports.prototype['short_call_charge'] = undefined;
  /**
   * @member {String} login
   */
  exports.prototype['login'] = undefined;
  /**
   * @member {module:model/Carrier.AutoInvoiceTypeEnum} auto_invoice_type
   * @default 'buy'
   */
  exports.prototype['auto_invoice_type'] = 'buy';
  /**
   * @member {String} name
   */
  exports.prototype['name'] = undefined;
  /**
   * @member {Boolean} is_active
   */
  exports.prototype['is_active'] = undefined;
  /**
   * @member {String} rate_email
   */
  exports.prototype['rate_email'] = undefined;
  /**
   * @member {String} finance_email_cc
   */
  exports.prototype['finance_email_cc'] = undefined;
  /**
   * @member {String} account_detail
   * @default ''
   */
  exports.prototype['account_detail'] = '';
  /**
   * @member {Number} short_call_charge_exceed_only
   */
  exports.prototype['short_call_charge_exceed_only'] = undefined;
  /**
   * @member {Number} call_limit
   */
  exports.prototype['call_limit'] = undefined;
  /**
   * @member {Number} one_time_report_time
   */
  exports.prototype['one_time_report_time'] = undefined;
  /**
   * @member {String} main_email
   */
  exports.prototype['main_email'] = undefined;
  /**
   * @member {String} address
   */
  exports.prototype['address'] = undefined;
  /**
   * @member {Boolean} trunk_update_alert
   */
  exports.prototype['trunk_update_alert'] = undefined;
  /**
   * @member {Number} group_id
   */
  exports.prototype['group_id'] = undefined;
  /**
   * @member {String} phone
   */
  exports.prototype['phone'] = undefined;


  /**
   * Allowed values for the <code>daily_usage_group_by</code> property.
   * @enum {String}
   * @readonly
   */
  exports.DailyUsageGroupByEnum = {
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
   * Allowed values for the <code>profit_type</code> property.
   * @enum {String}
   * @readonly
   */
  exports.ProfitTypeEnum = {
    /**
     * value: "percentage"
     * @const
     */
    "percentage": "percentage",
    /**
     * value: "value"
     * @const
     */
    "value": "value"  };

  /**
   * Allowed values for the <code>auto_invoice_type</code> property.
   * @enum {String}
   * @readonly
   */
  exports.AutoInvoiceTypeEnum = {
    /**
     * value: "buy"
     * @const
     */
    "buy": "buy",
    /**
     * value: "sell"
     * @const
     */
    "sell": "sell",
    /**
     * value: "both"
     * @const
     */
    "both": "both"  };


  return exports;
}));



/**
 * DNL API
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: 1.2.62
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.3.0
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/CarrierLowBalanceConfig'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./CarrierLowBalanceConfig'));
  } else {
    // Browser globals (root is window)
    if (!root.DnlApi) {
      root.DnlApi = {};
    }
    root.DnlApi.CarrierLong = factory(root.DnlApi.ApiClient, root.DnlApi.CarrierLowBalanceConfig);
  }
}(this, function(ApiClient, CarrierLowBalanceConfig) {
  'use strict';




  /**
   * The CarrierLong model module.
   * @module model/CarrierLong
   * @version 1.2.62
   */

  /**
   * Constructs a new <code>CarrierLong</code>.
   * @alias module:model/CarrierLong
   * @class
   */
  var exports = function() {
    var _this = this;

















































































  };

  /**
   * Constructs a <code>CarrierLong</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/CarrierLong} obj Optional instance to populate.
   * @return {module:model/CarrierLong} The populated <code>CarrierLong</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('low_balance_notice')) {
        obj['low_balance_notice'] = ApiClient.convertToType(data['low_balance_notice'], 'Boolean');
      }
      if (data.hasOwnProperty('profit_type')) {
        obj['profit_type'] = ApiClient.convertToType(data['profit_type'], 'String');
      }
      if (data.hasOwnProperty('billing_email')) {
        obj['billing_email'] = ApiClient.convertToType(data['billing_email'], 'String');
      }
      if (data.hasOwnProperty('scc_charge')) {
        obj['scc_charge'] = ApiClient.convertToType(data['scc_charge'], 'Number');
      }
      if (data.hasOwnProperty('notify_client_balance_type')) {
        obj['notify_client_balance_type'] = ApiClient.convertToType(data['notify_client_balance_type'], 'Number');
      }
      if (data.hasOwnProperty('payment_received_notice')) {
        obj['payment_received_notice'] = ApiClient.convertToType(data['payment_received_notice'], 'Boolean');
      }
      if (data.hasOwnProperty('test_credit')) {
        obj['test_credit'] = ApiClient.convertToType(data['test_credit'], 'Number');
      }
      if (data.hasOwnProperty('auto_summary_not_zero')) {
        obj['auto_summary_not_zero'] = ApiClient.convertToType(data['auto_summary_not_zero'], 'Boolean');
      }
      if (data.hasOwnProperty('is_prepay')) {
        obj['is_prepay'] = ApiClient.convertToType(data['is_prepay'], 'Boolean');
      }
      if (data.hasOwnProperty('attach_cdrs_list')) {
        obj['attach_cdrs_list'] = ApiClient.convertToType(data['attach_cdrs_list'], 'Boolean');
      }
      if (data.hasOwnProperty('daily_cdr_generation_zone')) {
        obj['daily_cdr_generation_zone'] = ApiClient.convertToType(data['daily_cdr_generation_zone'], 'String');
      }
      if (data.hasOwnProperty('show_detail_by_trunk')) {
        obj['show_detail_by_trunk'] = ApiClient.convertToType(data['show_detail_by_trunk'], 'Boolean');
      }
      if (data.hasOwnProperty('low_balance_config')) {
        obj['low_balance_config'] = CarrierLowBalanceConfig.constructFromObject(data['low_balance_config']);
      }
      if (data.hasOwnProperty('credit_limit')) {
        obj['credit_limit'] = ApiClient.convertToType(data['credit_limit'], 'Number');
      }
      if (data.hasOwnProperty('scc_below')) {
        obj['scc_below'] = ApiClient.convertToType(data['scc_below'], 'Number');
      }
      if (data.hasOwnProperty('is_show_daily_usage')) {
        obj['is_show_daily_usage'] = ApiClient.convertToType(data['is_show_daily_usage'], 'Boolean');
      }
      if (data.hasOwnProperty('rate_delivery_email')) {
        obj['rate_delivery_email'] = ApiClient.convertToType(data['rate_delivery_email'], 'String');
      }
      if (data.hasOwnProperty('is_panel_trunks')) {
        obj['is_panel_trunks'] = ApiClient.convertToType(data['is_panel_trunks'], 'Boolean');
      }
      if (data.hasOwnProperty('unlimited_credit')) {
        obj['unlimited_credit'] = ApiClient.convertToType(data['unlimited_credit'], 'Boolean');
      }
      if (data.hasOwnProperty('is_panel_paymenthistory')) {
        obj['is_panel_paymenthistory'] = ApiClient.convertToType(data['is_panel_paymenthistory'], 'Boolean');
      }
      if (data.hasOwnProperty('show_account_summary')) {
        obj['show_account_summary'] = ApiClient.convertToType(data['show_account_summary'], 'Boolean');
      }
      if (data.hasOwnProperty('password')) {
        obj['password'] = ApiClient.convertToType(data['password'], 'String');
      }
      if (data.hasOwnProperty('usage_fields')) {
        obj['usage_fields'] = ApiClient.convertToType(data['usage_fields'], ['String']);
      }
      if (data.hasOwnProperty('profit_margin')) {
        obj['profit_margin'] = ApiClient.convertToType(data['profit_margin'], 'Number');
      }
      if (data.hasOwnProperty('login')) {
        obj['login'] = ApiClient.convertToType(data['login'], 'String');
      }
      if (data.hasOwnProperty('show_jurisdiction_detail')) {
        obj['show_jurisdiction_detail'] = ApiClient.convertToType(data['show_jurisdiction_detail'], 'Boolean');
      }
      if (data.hasOwnProperty('inlcude_cdr_in_email')) {
        obj['inlcude_cdr_in_email'] = ApiClient.convertToType(data['inlcude_cdr_in_email'], 'Boolean');
      }
      if (data.hasOwnProperty('is_panel_cdrslist')) {
        obj['is_panel_cdrslist'] = ApiClient.convertToType(data['is_panel_cdrslist'], 'Boolean');
      }
      if (data.hasOwnProperty('send_invoice_as_link')) {
        obj['send_invoice_as_link'] = ApiClient.convertToType(data['send_invoice_as_link'], 'Boolean');
      }
      if (data.hasOwnProperty('time_zone')) {
        obj['time_zone'] = ApiClient.convertToType(data['time_zone'], 'String');
      }
      if (data.hasOwnProperty('rate_email')) {
        obj['rate_email'] = ApiClient.convertToType(data['rate_email'], 'String');
      }
      if (data.hasOwnProperty('account_detail')) {
        obj['account_detail'] = ApiClient.convertToType(data['account_detail'], 'String');
      }
      if (data.hasOwnProperty('email')) {
        obj['email'] = ApiClient.convertToType(data['email'], 'String');
      }
      if (data.hasOwnProperty('is_breakdown_by_rate_table')) {
        obj['is_breakdown_by_rate_table'] = ApiClient.convertToType(data['is_breakdown_by_rate_table'], 'Boolean');
      }
      if (data.hasOwnProperty('cps_limit')) {
        obj['cps_limit'] = ApiClient.convertToType(data['cps_limit'], 'Number');
      }
      if (data.hasOwnProperty('is_panel_ratetable')) {
        obj['is_panel_ratetable'] = ApiClient.convertToType(data['is_panel_ratetable'], 'Boolean');
      }
      if (data.hasOwnProperty('show_country_summary')) {
        obj['show_country_summary'] = ApiClient.convertToType(data['show_country_summary'], 'Boolean');
      }
      if (data.hasOwnProperty('is_panel_products')) {
        obj['is_panel_products'] = ApiClient.convertToType(data['is_panel_products'], 'Boolean');
      }
      if (data.hasOwnProperty('address')) {
        obj['address'] = ApiClient.convertToType(data['address'], 'String');
      }
      if (data.hasOwnProperty('format')) {
        obj['format'] = ApiClient.convertToType(data['format'], 'String');
      }
      if (data.hasOwnProperty('include_short_call_charge')) {
        obj['include_short_call_charge'] = ApiClient.convertToType(data['include_short_call_charge'], 'Boolean');
      }
      if (data.hasOwnProperty('is_panel_invoices')) {
        obj['is_panel_invoices'] = ApiClient.convertToType(data['is_panel_invoices'], 'Boolean');
      }
      if (data.hasOwnProperty('show_code_summary')) {
        obj['show_code_summary'] = ApiClient.convertToType(data['show_code_summary'], 'Boolean');
      }
      if (data.hasOwnProperty('scc_type')) {
        obj['scc_type'] = ApiClient.convertToType(data['scc_type'], 'Number');
      }
      if (data.hasOwnProperty('auto_summary_hour')) {
        obj['auto_summary_hour'] = ApiClient.convertToType(data['auto_summary_hour'], 'Number');
      }
      if (data.hasOwnProperty('is_panel_onlinepayment')) {
        obj['is_panel_onlinepayment'] = ApiClient.convertToType(data['is_panel_onlinepayment'], 'Boolean');
      }
      if (data.hasOwnProperty('show_trunk_summary')) {
        obj['show_trunk_summary'] = ApiClient.convertToType(data['show_trunk_summary'], 'Boolean');
      }
      if (data.hasOwnProperty('is_panel_sippacket')) {
        obj['is_panel_sippacket'] = ApiClient.convertToType(data['is_panel_sippacket'], 'Boolean');
      }
      if (data.hasOwnProperty('tax')) {
        obj['tax'] = ApiClient.convertToType(data['tax'], 'Number');
      }
      if (data.hasOwnProperty('is_send_trunk_update')) {
        obj['is_send_trunk_update'] = ApiClient.convertToType(data['is_send_trunk_update'], 'Boolean');
      }
      if (data.hasOwnProperty('currency')) {
        obj['currency'] = ApiClient.convertToType(data['currency'], 'Number');
      }
      if (data.hasOwnProperty('noc_email')) {
        obj['noc_email'] = ApiClient.convertToType(data['noc_email'], 'String');
      }
      if (data.hasOwnProperty('status')) {
        obj['status'] = ApiClient.convertToType(data['status'], 'Boolean');
      }
      if (data.hasOwnProperty('company_name')) {
        obj['company_name'] = ApiClient.convertToType(data['company_name'], 'String');
      }
      if (data.hasOwnProperty('is_panel_balance')) {
        obj['is_panel_balance'] = ApiClient.convertToType(data['is_panel_balance'], 'Boolean');
      }
      if (data.hasOwnProperty('payment_term')) {
        obj['payment_term'] = ApiClient.convertToType(data['payment_term'], 'String');
      }
      if (data.hasOwnProperty('auto_summary_group_by')) {
        obj['auto_summary_group_by'] = ApiClient.convertToType(data['auto_summary_group_by'], 'String');
      }
      if (data.hasOwnProperty('low_balance_notification_time_type')) {
        obj['low_balance_notification_time_type'] = ApiClient.convertToType(data['low_balance_notification_time_type'], 'Number');
      }
      if (data.hasOwnProperty('non_zero_invoice_only')) {
        obj['non_zero_invoice_only'] = ApiClient.convertToType(data['non_zero_invoice_only'], 'Boolean');
      }
      if (data.hasOwnProperty('is_panel_accountsummary')) {
        obj['is_panel_accountsummary'] = ApiClient.convertToType(data['is_panel_accountsummary'], 'Boolean');
      }
      if (data.hasOwnProperty('enough_balance')) {
        obj['enough_balance'] = ApiClient.convertToType(data['enough_balance'], 'Boolean');
      }
      if (data.hasOwnProperty('cdr_format')) {
        obj['cdr_format'] = ApiClient.convertToType(data['cdr_format'], 'String');
      }
      if (data.hasOwnProperty('zero_balance_notice')) {
        obj['zero_balance_notice'] = ApiClient.convertToType(data['zero_balance_notice'], 'Boolean');
      }
      if (data.hasOwnProperty('show_daily_usage')) {
        obj['show_daily_usage'] = ApiClient.convertToType(data['show_daily_usage'], 'Boolean');
      }
      if (data.hasOwnProperty('show_payment_summary')) {
        obj['show_payment_summary'] = ApiClient.convertToType(data['show_payment_summary'], 'Boolean');
      }
      if (data.hasOwnProperty('auto_summary_period')) {
        obj['auto_summary_period'] = ApiClient.convertToType(data['auto_summary_period'], 'Number');
      }
      if (data.hasOwnProperty('is_auto_summary')) {
        obj['is_auto_summary'] = ApiClient.convertToType(data['is_auto_summary'], 'Boolean');
      }
      if (data.hasOwnProperty('rate_value')) {
        obj['rate_value'] = ApiClient.convertToType(data['rate_value'], 'String');
      }
      if (data.hasOwnProperty('auto_send_invoice')) {
        obj['auto_send_invoice'] = ApiClient.convertToType(data['auto_send_invoice'], 'Boolean');
      }
      if (data.hasOwnProperty('is_daily_balance_notification')) {
        obj['is_daily_balance_notification'] = ApiClient.convertToType(data['is_daily_balance_notification'], 'Boolean');
      }
      if (data.hasOwnProperty('include_tax')) {
        obj['include_tax'] = ApiClient.convertToType(data['include_tax'], 'Boolean');
      }
      if (data.hasOwnProperty('scc_percent')) {
        obj['scc_percent'] = ApiClient.convertToType(data['scc_percent'], 'Number');
      }
      if (data.hasOwnProperty('is_panel_summaryreport')) {
        obj['is_panel_summaryreport'] = ApiClient.convertToType(data['is_panel_summaryreport'], 'Boolean');
      }
      if (data.hasOwnProperty('carrier_name')) {
        obj['carrier_name'] = ApiClient.convertToType(data['carrier_name'], 'String');
      }
      if (data.hasOwnProperty('call_limit')) {
        obj['call_limit'] = ApiClient.convertToType(data['call_limit'], 'Number');
      }
      if (data.hasOwnProperty('decimal')) {
        obj['decimal'] = ApiClient.convertToType(data['decimal'], 'Number');
      }
      if (data.hasOwnProperty('is_panelaccess')) {
        obj['is_panelaccess'] = ApiClient.convertToType(data['is_panelaccess'], 'Boolean');
      }
      if (data.hasOwnProperty('phone')) {
        obj['phone'] = ApiClient.convertToType(data['phone'], 'Number');
      }
      if (data.hasOwnProperty('daily_cdr_generation')) {
        obj['daily_cdr_generation'] = ApiClient.convertToType(data['daily_cdr_generation'], 'Boolean');
      }
      if (data.hasOwnProperty('show_code_name_summary')) {
        obj['show_code_name_summary'] = ApiClient.convertToType(data['show_code_name_summary'], 'Boolean');
      }
    }
    return obj;
  }

  /**
   * @member {Boolean} low_balance_notice
   */
  exports.prototype['low_balance_notice'] = undefined;
  /**
   * @member {module:model/CarrierLong.ProfitTypeEnum} profit_type
   * @default 'percentage'
   */
  exports.prototype['profit_type'] = 'percentage';
  /**
   * @member {String} billing_email
   */
  exports.prototype['billing_email'] = undefined;
  /**
   * @member {Number} scc_charge
   */
  exports.prototype['scc_charge'] = undefined;
  /**
   * @member {Number} notify_client_balance_type
   */
  exports.prototype['notify_client_balance_type'] = undefined;
  /**
   * @member {Boolean} payment_received_notice
   */
  exports.prototype['payment_received_notice'] = undefined;
  /**
   * @member {Number} test_credit
   */
  exports.prototype['test_credit'] = undefined;
  /**
   * @member {Boolean} auto_summary_not_zero
   */
  exports.prototype['auto_summary_not_zero'] = undefined;
  /**
   * @member {Boolean} is_prepay
   */
  exports.prototype['is_prepay'] = undefined;
  /**
   * @member {Boolean} attach_cdrs_list
   */
  exports.prototype['attach_cdrs_list'] = undefined;
  /**
   * @member {String} daily_cdr_generation_zone
   */
  exports.prototype['daily_cdr_generation_zone'] = undefined;
  /**
   * @member {Boolean} show_detail_by_trunk
   */
  exports.prototype['show_detail_by_trunk'] = undefined;
  /**
   * @member {module:model/CarrierLowBalanceConfig} low_balance_config
   */
  exports.prototype['low_balance_config'] = undefined;
  /**
   * @member {Number} credit_limit
   */
  exports.prototype['credit_limit'] = undefined;
  /**
   * @member {Number} scc_below
   */
  exports.prototype['scc_below'] = undefined;
  /**
   * @member {Boolean} is_show_daily_usage
   */
  exports.prototype['is_show_daily_usage'] = undefined;
  /**
   * @member {String} rate_delivery_email
   */
  exports.prototype['rate_delivery_email'] = undefined;
  /**
   * @member {Boolean} is_panel_trunks
   */
  exports.prototype['is_panel_trunks'] = undefined;
  /**
   * @member {Boolean} unlimited_credit
   * @default false
   */
  exports.prototype['unlimited_credit'] = false;
  /**
   * @member {Boolean} is_panel_paymenthistory
   */
  exports.prototype['is_panel_paymenthistory'] = undefined;
  /**
   * @member {Boolean} show_account_summary
   */
  exports.prototype['show_account_summary'] = undefined;
  /**
   * @member {String} password
   */
  exports.prototype['password'] = undefined;
  /**
   * @member {Array.<String>} usage_fields
   */
  exports.prototype['usage_fields'] = undefined;
  /**
   * @member {Number} profit_margin
   */
  exports.prototype['profit_margin'] = undefined;
  /**
   * @member {String} login
   */
  exports.prototype['login'] = undefined;
  /**
   * @member {Boolean} show_jurisdiction_detail
   */
  exports.prototype['show_jurisdiction_detail'] = undefined;
  /**
   * @member {Boolean} inlcude_cdr_in_email
   */
  exports.prototype['inlcude_cdr_in_email'] = undefined;
  /**
   * @member {Boolean} is_panel_cdrslist
   */
  exports.prototype['is_panel_cdrslist'] = undefined;
  /**
   * @member {Boolean} send_invoice_as_link
   */
  exports.prototype['send_invoice_as_link'] = undefined;
  /**
   * @member {String} time_zone
   */
  exports.prototype['time_zone'] = undefined;
  /**
   * @member {String} rate_email
   */
  exports.prototype['rate_email'] = undefined;
  /**
   * @member {String} account_detail
   */
  exports.prototype['account_detail'] = undefined;
  /**
   * @member {String} email
   */
  exports.prototype['email'] = undefined;
  /**
   * @member {Boolean} is_breakdown_by_rate_table
   */
  exports.prototype['is_breakdown_by_rate_table'] = undefined;
  /**
   * @member {Number} cps_limit
   */
  exports.prototype['cps_limit'] = undefined;
  /**
   * @member {Boolean} is_panel_ratetable
   */
  exports.prototype['is_panel_ratetable'] = undefined;
  /**
   * @member {Boolean} show_country_summary
   */
  exports.prototype['show_country_summary'] = undefined;
  /**
   * @member {Boolean} is_panel_products
   */
  exports.prototype['is_panel_products'] = undefined;
  /**
   * @member {String} address
   */
  exports.prototype['address'] = undefined;
  /**
   * @member {module:model/CarrierLong.FormatEnum} format
   * @default 'PDF'
   */
  exports.prototype['format'] = 'PDF';
  /**
   * @member {Boolean} include_short_call_charge
   */
  exports.prototype['include_short_call_charge'] = undefined;
  /**
   * @member {Boolean} is_panel_invoices
   */
  exports.prototype['is_panel_invoices'] = undefined;
  /**
   * @member {Boolean} show_code_summary
   */
  exports.prototype['show_code_summary'] = undefined;
  /**
   * @member {module:model/CarrierLong.SccTypeEnum} scc_type
   */
  exports.prototype['scc_type'] = undefined;
  /**
   * @member {Number} auto_summary_hour
   */
  exports.prototype['auto_summary_hour'] = undefined;
  /**
   * @member {Boolean} is_panel_onlinepayment
   */
  exports.prototype['is_panel_onlinepayment'] = undefined;
  /**
   * @member {Boolean} show_trunk_summary
   */
  exports.prototype['show_trunk_summary'] = undefined;
  /**
   * @member {Boolean} is_panel_sippacket
   */
  exports.prototype['is_panel_sippacket'] = undefined;
  /**
   * @member {Number} tax
   */
  exports.prototype['tax'] = undefined;
  /**
   * @member {Boolean} is_send_trunk_update
   */
  exports.prototype['is_send_trunk_update'] = undefined;
  /**
   * @member {Number} currency
   * @default 1
   */
  exports.prototype['currency'] = 1;
  /**
   * @member {String} noc_email
   */
  exports.prototype['noc_email'] = undefined;
  /**
   * @member {Boolean} status
   */
  exports.prototype['status'] = undefined;
  /**
   * @member {String} company_name
   */
  exports.prototype['company_name'] = undefined;
  /**
   * @member {Boolean} is_panel_balance
   */
  exports.prototype['is_panel_balance'] = undefined;
  /**
   * @member {String} payment_term
   */
  exports.prototype['payment_term'] = undefined;
  /**
   * @member {module:model/CarrierLong.AutoSummaryGroupByEnum} auto_summary_group_by
   * @default 'By Country'
   */
  exports.prototype['auto_summary_group_by'] = 'By Country';
  /**
   * @member {Number} low_balance_notification_time_type
   */
  exports.prototype['low_balance_notification_time_type'] = undefined;
  /**
   * @member {Boolean} non_zero_invoice_only
   */
  exports.prototype['non_zero_invoice_only'] = undefined;
  /**
   * @member {Boolean} is_panel_accountsummary
   */
  exports.prototype['is_panel_accountsummary'] = undefined;
  /**
   * @member {Boolean} enough_balance
   * @default false
   */
  exports.prototype['enough_balance'] = false;
  /**
   * @member {module:model/CarrierLong.CdrFormatEnum} cdr_format
   * @default 'Excel'
   */
  exports.prototype['cdr_format'] = 'Excel';
  /**
   * @member {Boolean} zero_balance_notice
   */
  exports.prototype['zero_balance_notice'] = undefined;
  /**
   * @member {Boolean} show_daily_usage
   */
  exports.prototype['show_daily_usage'] = undefined;
  /**
   * @member {Boolean} show_payment_summary
   */
  exports.prototype['show_payment_summary'] = undefined;
  /**
   * @member {Number} auto_summary_period
   */
  exports.prototype['auto_summary_period'] = undefined;
  /**
   * @member {Boolean} is_auto_summary
   */
  exports.prototype['is_auto_summary'] = undefined;
  /**
   * @member {module:model/CarrierLong.RateValueEnum} rate_value
   * @default 'null'
   */
  exports.prototype['rate_value'] = 'null';
  /**
   * @member {Boolean} auto_send_invoice
   */
  exports.prototype['auto_send_invoice'] = undefined;
  /**
   * @member {Boolean} is_daily_balance_notification
   */
  exports.prototype['is_daily_balance_notification'] = undefined;
  /**
   * @member {Boolean} include_tax
   */
  exports.prototype['include_tax'] = undefined;
  /**
   * @member {Number} scc_percent
   */
  exports.prototype['scc_percent'] = undefined;
  /**
   * @member {Boolean} is_panel_summaryreport
   */
  exports.prototype['is_panel_summaryreport'] = undefined;
  /**
   * @member {String} carrier_name
   */
  exports.prototype['carrier_name'] = undefined;
  /**
   * @member {Number} call_limit
   * @default 0
   */
  exports.prototype['call_limit'] = 0;
  /**
   * @member {Number} decimal
   */
  exports.prototype['decimal'] = undefined;
  /**
   * @member {Boolean} is_panelaccess
   */
  exports.prototype['is_panelaccess'] = undefined;
  /**
   * @member {Number} phone
   */
  exports.prototype['phone'] = undefined;
  /**
   * @member {Boolean} daily_cdr_generation
   */
  exports.prototype['daily_cdr_generation'] = undefined;
  /**
   * @member {Boolean} show_code_name_summary
   */
  exports.prototype['show_code_name_summary'] = undefined;


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
   * Allowed values for the <code>scc_type</code> property.
   * @enum {Number}
   * @readonly
   */
  exports.SccTypeEnum = {
    /**
     * value: 0
     * @const
     */
    "0": 0,
    /**
     * value: 1
     * @const
     */
    "1": 1  };

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
     * value: "CSV"
     * @const
     */
    "CSV": "CSV",
    /**
     * value: "zip"
     * @const
     */
    "zip": "zip",
    /**
     * value: "tar.gz"
     * @const
     */
    "tar.gz": "tar.gz"  };

  /**
   * Allowed values for the <code>rate_value</code> property.
   * @enum {String}
   * @readonly
   */
  exports.RateValueEnum = {
    /**
     * value: "null"
     * @const
     */
    "null": "null",
    /**
     * value: "Actual Value"
     * @const
     */
    "Actual Value": "Actual Value",
    /**
     * value: "Average Value"
     * @const
     */
    "Average Value": "Average Value",
    /**
     * value: "undefined"
     * @const
     */
    "undefined": "undefined"  };


  return exports;
}));



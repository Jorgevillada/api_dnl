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
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.DnlApi) {
      root.DnlApi = {};
    }
    root.DnlApi.CarrierInvoiceSetting = factory(root.DnlApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The CarrierInvoiceSetting model module.
   * @module model/CarrierInvoiceSetting
   * @version 1.2.62
   */

  /**
   * Constructs a new <code>CarrierInvoiceSetting</code>.
   * @alias module:model/CarrierInvoiceSetting
   * @class
   */
  var exports = function() {
    var _this = this;


























  };

  /**
   * Constructs a <code>CarrierInvoiceSetting</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/CarrierInvoiceSetting} obj Optional instance to populate.
   * @return {module:model/CarrierInvoiceSetting} The populated <code>CarrierInvoiceSetting</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('show_account_summary')) {
        obj['show_account_summary'] = ApiClient.convertToType(data['show_account_summary'], 'Boolean');
      }
      if (data.hasOwnProperty('is_breakdown_by_rate_table')) {
        obj['is_breakdown_by_rate_table'] = ApiClient.convertToType(data['is_breakdown_by_rate_table'], 'Boolean');
      }
      if (data.hasOwnProperty('show_trunk_summary')) {
        obj['show_trunk_summary'] = ApiClient.convertToType(data['show_trunk_summary'], 'Boolean');
      }
      if (data.hasOwnProperty('include_tax')) {
        obj['include_tax'] = ApiClient.convertToType(data['include_tax'], 'Boolean');
      }
      if (data.hasOwnProperty('show_code_summary')) {
        obj['show_code_summary'] = ApiClient.convertToType(data['show_code_summary'], 'Boolean');
      }
      if (data.hasOwnProperty('include_detail')) {
        obj['include_detail'] = ApiClient.convertToType(data['include_detail'], 'Boolean');
      }
      if (data.hasOwnProperty('show_calls_date')) {
        obj['show_calls_date'] = ApiClient.convertToType(data['show_calls_date'], 'Boolean');
      }
      if (data.hasOwnProperty('payment_term')) {
        obj['payment_term'] = ApiClient.convertToType(data['payment_term'], 'String');
      }
      if (data.hasOwnProperty('show_daily_usage')) {
        obj['show_daily_usage'] = ApiClient.convertToType(data['show_daily_usage'], 'Boolean');
      }
      if (data.hasOwnProperty('non_zero_invoice_only')) {
        obj['non_zero_invoice_only'] = ApiClient.convertToType(data['non_zero_invoice_only'], 'Boolean');
      }
      if (data.hasOwnProperty('cdr_format')) {
        obj['cdr_format'] = ApiClient.convertToType(data['cdr_format'], 'String');
      }
      if (data.hasOwnProperty('usage_fields')) {
        obj['usage_fields'] = ApiClient.convertToType(data['usage_fields'], ['String']);
      }
      if (data.hasOwnProperty('show_jurisdiction_detail')) {
        obj['show_jurisdiction_detail'] = ApiClient.convertToType(data['show_jurisdiction_detail'], 'Boolean');
      }
      if (data.hasOwnProperty('show_payment_summary')) {
        obj['show_payment_summary'] = ApiClient.convertToType(data['show_payment_summary'], 'Boolean');
      }
      if (data.hasOwnProperty('send_invoice_as_link')) {
        obj['send_invoice_as_link'] = ApiClient.convertToType(data['send_invoice_as_link'], 'Boolean');
      }
      if (data.hasOwnProperty('rate_value')) {
        obj['rate_value'] = ApiClient.convertToType(data['rate_value'], 'String');
      }
      if (data.hasOwnProperty('time_zone')) {
        obj['time_zone'] = ApiClient.convertToType(data['time_zone'], 'String');
      }
      if (data.hasOwnProperty('auto_send_invoice')) {
        obj['auto_send_invoice'] = ApiClient.convertToType(data['auto_send_invoice'], 'Boolean');
      }
      if (data.hasOwnProperty('inlcude_cdr_in_email')) {
        obj['inlcude_cdr_in_email'] = ApiClient.convertToType(data['inlcude_cdr_in_email'], 'Boolean');
      }
      if (data.hasOwnProperty('include_short_call_charge')) {
        obj['include_short_call_charge'] = ApiClient.convertToType(data['include_short_call_charge'], 'Boolean');
      }
      if (data.hasOwnProperty('decimal')) {
        obj['decimal'] = ApiClient.convertToType(data['decimal'], 'Number');
      }
      if (data.hasOwnProperty('show_country_summary')) {
        obj['show_country_summary'] = ApiClient.convertToType(data['show_country_summary'], 'Boolean');
      }
      if (data.hasOwnProperty('ingress_prefix')) {
        obj['ingress_prefix'] = ApiClient.convertToType(data['ingress_prefix'], 'Boolean');
      }
      if (data.hasOwnProperty('format')) {
        obj['format'] = ApiClient.convertToType(data['format'], 'String');
      }
      if (data.hasOwnProperty('show_code_name_summary')) {
        obj['show_code_name_summary'] = ApiClient.convertToType(data['show_code_name_summary'], 'Boolean');
      }
    }
    return obj;
  }

  /**
   * @member {Boolean} show_account_summary
   */
  exports.prototype['show_account_summary'] = undefined;
  /**
   * @member {Boolean} is_breakdown_by_rate_table
   */
  exports.prototype['is_breakdown_by_rate_table'] = undefined;
  /**
   * @member {Boolean} show_trunk_summary
   */
  exports.prototype['show_trunk_summary'] = undefined;
  /**
   * @member {Boolean} include_tax
   */
  exports.prototype['include_tax'] = undefined;
  /**
   * @member {Boolean} show_code_summary
   */
  exports.prototype['show_code_summary'] = undefined;
  /**
   * @member {Boolean} include_detail
   */
  exports.prototype['include_detail'] = undefined;
  /**
   * @member {Boolean} show_calls_date
   */
  exports.prototype['show_calls_date'] = undefined;
  /**
   * @member {String} payment_term
   */
  exports.prototype['payment_term'] = undefined;
  /**
   * @member {Boolean} show_daily_usage
   */
  exports.prototype['show_daily_usage'] = undefined;
  /**
   * @member {Boolean} non_zero_invoice_only
   */
  exports.prototype['non_zero_invoice_only'] = undefined;
  /**
   * @member {module:model/CarrierInvoiceSetting.CdrFormatEnum} cdr_format
   * @default 'Excel'
   */
  exports.prototype['cdr_format'] = 'Excel';
  /**
   * @member {Array.<String>} usage_fields
   */
  exports.prototype['usage_fields'] = undefined;
  /**
   * @member {Boolean} show_jurisdiction_detail
   */
  exports.prototype['show_jurisdiction_detail'] = undefined;
  /**
   * @member {Boolean} show_payment_summary
   */
  exports.prototype['show_payment_summary'] = undefined;
  /**
   * @member {Boolean} send_invoice_as_link
   */
  exports.prototype['send_invoice_as_link'] = undefined;
  /**
   * @member {module:model/CarrierInvoiceSetting.RateValueEnum} rate_value
   * @default 'null'
   */
  exports.prototype['rate_value'] = 'null';
  /**
   * @member {String} time_zone
   */
  exports.prototype['time_zone'] = undefined;
  /**
   * @member {Boolean} auto_send_invoice
   */
  exports.prototype['auto_send_invoice'] = undefined;
  /**
   * @member {Boolean} inlcude_cdr_in_email
   */
  exports.prototype['inlcude_cdr_in_email'] = undefined;
  /**
   * @member {Boolean} include_short_call_charge
   */
  exports.prototype['include_short_call_charge'] = undefined;
  /**
   * @member {Number} decimal
   * @default 5
   */
  exports.prototype['decimal'] = 5;
  /**
   * @member {Boolean} show_country_summary
   */
  exports.prototype['show_country_summary'] = undefined;
  /**
   * @member {Boolean} ingress_prefix
   */
  exports.prototype['ingress_prefix'] = undefined;
  /**
   * @member {module:model/CarrierInvoiceSetting.FormatEnum} format
   * @default 'PDF'
   */
  exports.prototype['format'] = 'PDF';
  /**
   * @member {Boolean} show_code_name_summary
   */
  exports.prototype['show_code_name_summary'] = undefined;


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


  return exports;
}));



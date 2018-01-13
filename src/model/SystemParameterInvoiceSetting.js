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
    root.DnlApi.SystemParameterInvoiceSetting = factory(root.DnlApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The SystemParameterInvoiceSetting model module.
   * @module model/SystemParameterInvoiceSetting
   * @version 1.2.62
   */

  /**
   * Constructs a new <code>SystemParameterInvoiceSetting</code>.
   * @alias module:model/SystemParameterInvoiceSetting
   * @class
   */
  var exports = function() {
    var _this = this;













  };

  /**
   * Constructs a <code>SystemParameterInvoiceSetting</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/SystemParameterInvoiceSetting} obj Optional instance to populate.
   * @return {module:model/SystemParameterInvoiceSetting} The populated <code>SystemParameterInvoiceSetting</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('cdr_fields')) {
        obj['cdr_fields'] = ApiClient.convertToType(data['cdr_fields'], 'String');
      }
      if (data.hasOwnProperty('billing_info_position')) {
        obj['billing_info_position'] = ApiClient.convertToType(data['billing_info_position'], 'String');
      }
      if (data.hasOwnProperty('logo_url')) {
        obj['logo_url'] = ApiClient.convertToType(data['logo_url'], 'String');
      }
      if (data.hasOwnProperty('company_info_position')) {
        obj['company_info_position'] = ApiClient.convertToType(data['company_info_position'], 'String');
      }
      if (data.hasOwnProperty('send_rate_as')) {
        obj['send_rate_as'] = ApiClient.convertToType(data['send_rate_as'], 'String');
      }
      if (data.hasOwnProperty('invoice_send_mode')) {
        obj['invoice_send_mode'] = ApiClient.convertToType(data['invoice_send_mode'], 'String');
      }
      if (data.hasOwnProperty('company_info')) {
        obj['company_info'] = ApiClient.convertToType(data['company_info'], 'String');
      }
      if (data.hasOwnProperty('invoice_number_format')) {
        obj['invoice_number_format'] = ApiClient.convertToType(data['invoice_number_format'], 'String');
      }
      if (data.hasOwnProperty('billing_info')) {
        obj['billing_info'] = ApiClient.convertToType(data['billing_info'], 'String');
      }
      if (data.hasOwnProperty('invoices_logo_id')) {
        obj['invoices_logo_id'] = ApiClient.convertToType(data['invoices_logo_id'], 'Number');
      }
      if (data.hasOwnProperty('allow_invoice_overlap')) {
        obj['allow_invoice_overlap'] = ApiClient.convertToType(data['allow_invoice_overlap'], 'Boolean');
      }
      if (data.hasOwnProperty('decimal')) {
        obj['decimal'] = ApiClient.convertToType(data['decimal'], 'Number');
      }
    }
    return obj;
  }

  /**
   * @member {String} cdr_fields
   */
  exports.prototype['cdr_fields'] = undefined;
  /**
   * @member {module:model/SystemParameterInvoiceSetting.BillingInfoPositionEnum} billing_info_position
   * @default 'top'
   */
  exports.prototype['billing_info_position'] = 'top';
  /**
   * @member {String} logo_url
   */
  exports.prototype['logo_url'] = undefined;
  /**
   * @member {module:model/SystemParameterInvoiceSetting.CompanyInfoPositionEnum} company_info_position
   * @default 'top'
   */
  exports.prototype['company_info_position'] = 'top';
  /**
   * @member {String} send_rate_as
   */
  exports.prototype['send_rate_as'] = undefined;
  /**
   * @member {module:model/SystemParameterInvoiceSetting.InvoiceSendModeEnum} invoice_send_mode
   * @default 'link'
   */
  exports.prototype['invoice_send_mode'] = 'link';
  /**
   * @member {String} company_info
   */
  exports.prototype['company_info'] = undefined;
  /**
   * @member {String} invoice_number_format
   */
  exports.prototype['invoice_number_format'] = undefined;
  /**
   * @member {String} billing_info
   */
  exports.prototype['billing_info'] = undefined;
  /**
   * @member {Number} invoices_logo_id
   */
  exports.prototype['invoices_logo_id'] = undefined;
  /**
   * @member {Boolean} allow_invoice_overlap
   */
  exports.prototype['allow_invoice_overlap'] = undefined;
  /**
   * @member {Number} decimal
   */
  exports.prototype['decimal'] = undefined;


  /**
   * Allowed values for the <code>billing_info_position</code> property.
   * @enum {String}
   * @readonly
   */
  exports.BillingInfoPositionEnum = {
    /**
     * value: "top"
     * @const
     */
    "top": "top",
    /**
     * value: "bottom"
     * @const
     */
    "bottom": "bottom"  };

  /**
   * Allowed values for the <code>company_info_position</code> property.
   * @enum {String}
   * @readonly
   */
  exports.CompanyInfoPositionEnum = {
    /**
     * value: "top"
     * @const
     */
    "top": "top",
    /**
     * value: "bottom"
     * @const
     */
    "bottom": "bottom"  };

  /**
   * Allowed values for the <code>invoice_send_mode</code> property.
   * @enum {String}
   * @readonly
   */
  exports.InvoiceSendModeEnum = {
    /**
     * value: "link"
     * @const
     */
    "link": "link",
    /**
     * value: "attachment"
     * @const
     */
    "attachment": "attachment"  };


  return exports;
}));



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
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.DnlApi) {
      root.DnlApi = {};
    }
    root.DnlApi.SystemParameterPaymentSetting = factory(root.DnlApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The SystemParameterPaymentSetting model module.
   * @module model/SystemParameterPaymentSetting
   * @version 1.2.10
   */

  /**
   * Constructs a new <code>SystemParameterPaymentSetting</code>.
   * @alias module:model/SystemParameterPaymentSetting
   * @class
   */
  var exports = function() {
    var _this = this;












  };

  /**
   * Constructs a <code>SystemParameterPaymentSetting</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/SystemParameterPaymentSetting} obj Optional instance to populate.
   * @return {module:model/SystemParameterPaymentSetting} The populated <code>SystemParameterPaymentSetting</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('auto_carrier_notification')) {
        obj['auto_carrier_notification'] = ApiClient.convertToType(data['auto_carrier_notification'], 'Boolean');
      }
      if (data.hasOwnProperty('paypal_fee')) {
        obj['paypal_fee'] = ApiClient.convertToType(data['paypal_fee'], 'Number');
      }
      if (data.hasOwnProperty('charge_type')) {
        obj['charge_type'] = ApiClient.convertToType(data['charge_type'], 'String');
      }
      if (data.hasOwnProperty('paypal_account')) {
        obj['paypal_account'] = ApiClient.convertToType(data['paypal_account'], 'String');
      }
      if (data.hasOwnProperty('cc_email')) {
        obj['cc_email'] = ApiClient.convertToType(data['cc_email'], 'String');
      }
      if (data.hasOwnProperty('stripe_fee')) {
        obj['stripe_fee'] = ApiClient.convertToType(data['stripe_fee'], 'Number');
      }
      if (data.hasOwnProperty('enable_email_notification')) {
        obj['enable_email_notification'] = ApiClient.convertToType(data['enable_email_notification'], 'Boolean');
      }
      if (data.hasOwnProperty('payment_received_confirmation')) {
        obj['payment_received_confirmation'] = ApiClient.convertToType(data['payment_received_confirmation'], 'Boolean');
      }
      if (data.hasOwnProperty('stripe_publisher_key')) {
        obj['stripe_publisher_key'] = ApiClient.convertToType(data['stripe_publisher_key'], 'String');
      }
      if (data.hasOwnProperty('emails')) {
        obj['emails'] = ApiClient.convertToType(data['emails'], 'String');
      }
      if (data.hasOwnProperty('stripe_secret_key')) {
        obj['stripe_secret_key'] = ApiClient.convertToType(data['stripe_secret_key'], 'String');
      }
    }
    return obj;
  }

  /**
   * @member {Boolean} auto_carrier_notification
   */
  exports.prototype['auto_carrier_notification'] = undefined;
  /**
   * @member {Number} paypal_fee
   */
  exports.prototype['paypal_fee'] = undefined;
  /**
   * @member {module:model/SystemParameterPaymentSetting.ChargeTypeEnum} charge_type
   * @default 'credit total amount'
   */
  exports.prototype['charge_type'] = 'credit total amount';
  /**
   * @member {String} paypal_account
   */
  exports.prototype['paypal_account'] = undefined;
  /**
   * @member {String} cc_email
   */
  exports.prototype['cc_email'] = undefined;
  /**
   * @member {Number} stripe_fee
   */
  exports.prototype['stripe_fee'] = undefined;
  /**
   * @member {Boolean} enable_email_notification
   */
  exports.prototype['enable_email_notification'] = undefined;
  /**
   * @member {Boolean} payment_received_confirmation
   */
  exports.prototype['payment_received_confirmation'] = undefined;
  /**
   * @member {String} stripe_publisher_key
   */
  exports.prototype['stripe_publisher_key'] = undefined;
  /**
   * @member {String} emails
   */
  exports.prototype['emails'] = undefined;
  /**
   * @member {String} stripe_secret_key
   */
  exports.prototype['stripe_secret_key'] = undefined;


  /**
   * Allowed values for the <code>charge_type</code> property.
   * @enum {String}
   * @readonly
   */
  exports.ChargeTypeEnum = {
    /**
     * value: "create actual received amount"
     * @const
     */
    "create actual received amount": "create actual received amount",
    /**
     * value: "credit total amount"
     * @const
     */
    "credit total amount": "credit total amount"  };


  return exports;
}));


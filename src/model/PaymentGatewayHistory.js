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
    root.DnlApi.PaymentGatewayHistory = factory(root.DnlApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The PaymentGatewayHistory model module.
   * @module model/PaymentGatewayHistory
   * @version 1.2.62
   */

  /**
   * Constructs a new <code>PaymentGatewayHistory</code>.
   * @alias module:model/PaymentGatewayHistory
   * @class
   */
  var exports = function() {
    var _this = this;



















  };

  /**
   * Constructs a <code>PaymentGatewayHistory</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/PaymentGatewayHistory} obj Optional instance to populate.
   * @return {module:model/PaymentGatewayHistory} The populated <code>PaymentGatewayHistory</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('return_code')) {
        obj['return_code'] = ApiClient.convertToType(data['return_code'], 'String');
      }
      if (data.hasOwnProperty('strip_id')) {
        obj['strip_id'] = ApiClient.convertToType(data['strip_id'], 'String');
      }
      if (data.hasOwnProperty('paypal_id')) {
        obj['paypal_id'] = ApiClient.convertToType(data['paypal_id'], 'String');
      }
      if (data.hasOwnProperty('paypal_fee')) {
        obj['paypal_fee'] = ApiClient.convertToType(data['paypal_fee'], 'Number');
      }
      if (data.hasOwnProperty('status')) {
        obj['status'] = ApiClient.convertToType(data['status'], 'String');
      }
      if (data.hasOwnProperty('cardexpyear')) {
        obj['cardexpyear'] = ApiClient.convertToType(data['cardexpyear'], 'String');
      }
      if (data.hasOwnProperty('type')) {
        obj['type'] = ApiClient.convertToType(data['type'], 'String');
      }
      if (data.hasOwnProperty('paypal_transaction_id')) {
        obj['paypal_transaction_id'] = ApiClient.convertToType(data['paypal_transaction_id'], 'String');
      }
      if (data.hasOwnProperty('client_id')) {
        obj['client_id'] = ApiClient.convertToType(data['client_id'], 'Number');
      }
      if (data.hasOwnProperty('client_nameamount')) {
        obj['client_nameamount'] = ApiClient.convertToType(data['client_nameamount'], 'String');
      }
      if (data.hasOwnProperty('actual_received')) {
        obj['actual_received'] = ApiClient.convertToType(data['actual_received'], 'Number');
      }
      if (data.hasOwnProperty('paid_on')) {
        obj['paid_on'] = ApiClient.convertToType(data['paid_on'], 'Date');
      }
      if (data.hasOwnProperty('error')) {
        obj['error'] = ApiClient.convertToType(data['error'], 'String');
      }
      if (data.hasOwnProperty('strip_transaction_id')) {
        obj['strip_transaction_id'] = ApiClient.convertToType(data['strip_transaction_id'], 'String');
      }
      if (data.hasOwnProperty('cardnumber')) {
        obj['cardnumber'] = ApiClient.convertToType(data['cardnumber'], 'String');
      }
      if (data.hasOwnProperty('response')) {
        obj['response'] = ApiClient.convertToType(data['response'], 'String');
      }
      if (data.hasOwnProperty('entered_on')) {
        obj['entered_on'] = ApiClient.convertToType(data['entered_on'], 'Date');
      }
      if (data.hasOwnProperty('cardexpmonth')) {
        obj['cardexpmonth'] = ApiClient.convertToType(data['cardexpmonth'], 'String');
      }
    }
    return obj;
  }

  /**
   * @member {String} return_code
   */
  exports.prototype['return_code'] = undefined;
  /**
   * @member {String} strip_id
   */
  exports.prototype['strip_id'] = undefined;
  /**
   * @member {String} paypal_id
   */
  exports.prototype['paypal_id'] = undefined;
  /**
   * @member {Number} paypal_fee
   */
  exports.prototype['paypal_fee'] = undefined;
  /**
   * @member {module:model/PaymentGatewayHistory.StatusEnum} status
   * @default 'initial'
   */
  exports.prototype['status'] = 'initial';
  /**
   * @member {String} cardexpyear
   */
  exports.prototype['cardexpyear'] = undefined;
  /**
   * @member {module:model/PaymentGatewayHistory.TypeEnum} type
   * @default 'undefined'
   */
  exports.prototype['type'] = 'undefined';
  /**
   * @member {String} paypal_transaction_id
   */
  exports.prototype['paypal_transaction_id'] = undefined;
  /**
   * @member {Number} client_id
   */
  exports.prototype['client_id'] = undefined;
  /**
   * @member {String} client_nameamount
   */
  exports.prototype['client_nameamount'] = undefined;
  /**
   * @member {Number} actual_received
   */
  exports.prototype['actual_received'] = undefined;
  /**
   * @member {Date} paid_on
   */
  exports.prototype['paid_on'] = undefined;
  /**
   * @member {String} error
   */
  exports.prototype['error'] = undefined;
  /**
   * @member {String} strip_transaction_id
   */
  exports.prototype['strip_transaction_id'] = undefined;
  /**
   * @member {String} cardnumber
   */
  exports.prototype['cardnumber'] = undefined;
  /**
   * @member {String} response
   */
  exports.prototype['response'] = undefined;
  /**
   * @member {Date} entered_on
   */
  exports.prototype['entered_on'] = undefined;
  /**
   * @member {String} cardexpmonth
   */
  exports.prototype['cardexpmonth'] = undefined;


  /**
   * Allowed values for the <code>status</code> property.
   * @enum {String}
   * @readonly
   */
  exports.StatusEnum = {
    /**
     * value: "initial"
     * @const
     */
    "initial": "initial",
    /**
     * value: "error"
     * @const
     */
    "error": "error",
    /**
     * value: "success"
     * @const
     */
    "success": "success"  };

  /**
   * Allowed values for the <code>type</code> property.
   * @enum {String}
   * @readonly
   */
  exports.TypeEnum = {
    /**
     * value: "undefined"
     * @const
     */
    "undefined": "undefined",
    /**
     * value: "paypal"
     * @const
     */
    "paypal": "paypal",
    /**
     * value: "yourpay"
     * @const
     */
    "yourpay": "yourpay"  };


  return exports;
}));



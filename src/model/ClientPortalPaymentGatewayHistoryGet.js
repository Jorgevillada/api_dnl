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
    root.DnlApi.ClientPortalPaymentGatewayHistoryGet = factory(root.DnlApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The ClientPortalPaymentGatewayHistoryGet model module.
   * @module model/ClientPortalPaymentGatewayHistoryGet
   * @version 1.2.10
   */

  /**
   * Constructs a new <code>ClientPortalPaymentGatewayHistoryGet</code>.
   * @alias module:model/ClientPortalPaymentGatewayHistoryGet
   * @class
   */
  var exports = function() {
    var _this = this;





















  };

  /**
   * Constructs a <code>ClientPortalPaymentGatewayHistoryGet</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ClientPortalPaymentGatewayHistoryGet} obj Optional instance to populate.
   * @return {module:model/ClientPortalPaymentGatewayHistoryGet} The populated <code>ClientPortalPaymentGatewayHistoryGet</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('client_id')) {
        obj['client_id'] = ApiClient.convertToType(data['client_id'], 'Number');
      }
      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'Number');
      }
      if (data.hasOwnProperty('paypal_fee')) {
        obj['paypal_fee'] = ApiClient.convertToType(data['paypal_fee'], 'Number');
      }
      if (data.hasOwnProperty('cardnumber')) {
        obj['cardnumber'] = ApiClient.convertToType(data['cardnumber'], 'String');
      }
      if (data.hasOwnProperty('error')) {
        obj['error'] = ApiClient.convertToType(data['error'], 'String');
      }
      if (data.hasOwnProperty('paypal_id')) {
        obj['paypal_id'] = ApiClient.convertToType(data['paypal_id'], 'String');
      }
      if (data.hasOwnProperty('paid_on')) {
        obj['paid_on'] = ApiClient.convertToType(data['paid_on'], 'Date');
      }
      if (data.hasOwnProperty('type')) {
        obj['type'] = ApiClient.convertToType(data['type'], 'String');
      }
      if (data.hasOwnProperty('actual_received')) {
        obj['actual_received'] = ApiClient.convertToType(data['actual_received'], 'Number');
      }
      if (data.hasOwnProperty('client_name')) {
        obj['client_name'] = ApiClient.convertToType(data['client_name'], 'String');
      }
      if (data.hasOwnProperty('cardexpyear')) {
        obj['cardexpyear'] = ApiClient.convertToType(data['cardexpyear'], 'String');
      }
      if (data.hasOwnProperty('return_code')) {
        obj['return_code'] = ApiClient.convertToType(data['return_code'], 'String');
      }
      if (data.hasOwnProperty('cardexpmonth')) {
        obj['cardexpmonth'] = ApiClient.convertToType(data['cardexpmonth'], 'String');
      }
      if (data.hasOwnProperty('strip_id')) {
        obj['strip_id'] = ApiClient.convertToType(data['strip_id'], 'String');
      }
      if (data.hasOwnProperty('strip_transaction_id')) {
        obj['strip_transaction_id'] = ApiClient.convertToType(data['strip_transaction_id'], 'String');
      }
      if (data.hasOwnProperty('paypal_transaction_id')) {
        obj['paypal_transaction_id'] = ApiClient.convertToType(data['paypal_transaction_id'], 'String');
      }
      if (data.hasOwnProperty('status')) {
        obj['status'] = ApiClient.convertToType(data['status'], 'String');
      }
      if (data.hasOwnProperty('entered_on')) {
        obj['entered_on'] = ApiClient.convertToType(data['entered_on'], 'Date');
      }
      if (data.hasOwnProperty('amount')) {
        obj['amount'] = ApiClient.convertToType(data['amount'], 'Number');
      }
      if (data.hasOwnProperty('response')) {
        obj['response'] = ApiClient.convertToType(data['response'], 'String');
      }
    }
    return obj;
  }

  /**
   * @member {Number} client_id
   */
  exports.prototype['client_id'] = undefined;
  /**
   * @member {Number} id
   */
  exports.prototype['id'] = undefined;
  /**
   * @member {Number} paypal_fee
   */
  exports.prototype['paypal_fee'] = undefined;
  /**
   * @member {String} cardnumber
   */
  exports.prototype['cardnumber'] = undefined;
  /**
   * @member {String} error
   */
  exports.prototype['error'] = undefined;
  /**
   * @member {String} paypal_id
   */
  exports.prototype['paypal_id'] = undefined;
  /**
   * @member {Date} paid_on
   */
  exports.prototype['paid_on'] = undefined;
  /**
   * @member {module:model/ClientPortalPaymentGatewayHistoryGet.TypeEnum} type
   * @default 'undefined'
   */
  exports.prototype['type'] = 'undefined';
  /**
   * @member {Number} actual_received
   */
  exports.prototype['actual_received'] = undefined;
  /**
   * @member {String} client_name
   */
  exports.prototype['client_name'] = undefined;
  /**
   * @member {String} cardexpyear
   */
  exports.prototype['cardexpyear'] = undefined;
  /**
   * @member {String} return_code
   */
  exports.prototype['return_code'] = undefined;
  /**
   * @member {String} cardexpmonth
   */
  exports.prototype['cardexpmonth'] = undefined;
  /**
   * @member {String} strip_id
   */
  exports.prototype['strip_id'] = undefined;
  /**
   * @member {String} strip_transaction_id
   */
  exports.prototype['strip_transaction_id'] = undefined;
  /**
   * @member {String} paypal_transaction_id
   */
  exports.prototype['paypal_transaction_id'] = undefined;
  /**
   * @member {module:model/ClientPortalPaymentGatewayHistoryGet.StatusEnum} status
   * @default 'initial'
   */
  exports.prototype['status'] = 'initial';
  /**
   * @member {Date} entered_on
   */
  exports.prototype['entered_on'] = undefined;
  /**
   * @member {Number} amount
   */
  exports.prototype['amount'] = undefined;
  /**
   * @member {String} response
   */
  exports.prototype['response'] = undefined;


  /**
   * Allowed values for the <code>type</code> property.
   * @enum {String}
   * @readonly
   */
  exports.TypeEnum = {
    /**
     * value: "yourpay"
     * @const
     */
    "yourpay": "yourpay",
    /**
     * value: "paypal"
     * @const
     */
    "paypal": "paypal",
    /**
     * value: "undefined"
     * @const
     */
    "undefined": "undefined"  };

  /**
   * Allowed values for the <code>status</code> property.
   * @enum {String}
   * @readonly
   */
  exports.StatusEnum = {
    /**
     * value: "success"
     * @const
     */
    "success": "success",
    /**
     * value: "initial"
     * @const
     */
    "initial": "initial",
    /**
     * value: "error"
     * @const
     */
    "error": "error"  };


  return exports;
}));



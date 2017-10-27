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
    root.DnlApi.ClientPaymentGet = factory(root.DnlApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The ClientPaymentGet model module.
   * @module model/ClientPaymentGet
   * @version 1.2.10
   */

  /**
   * Constructs a new <code>ClientPaymentGet</code>.
   * @alias module:model/ClientPaymentGet
   * @class
   */
  var exports = function() {
    var _this = this;










  };

  /**
   * Constructs a <code>ClientPaymentGet</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ClientPaymentGet} obj Optional instance to populate.
   * @return {module:model/ClientPaymentGet} The populated <code>ClientPaymentGet</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('carrier_name')) {
        obj['carrier_name'] = ApiClient.convertToType(data['carrier_name'], 'String');
      }
      if (data.hasOwnProperty('client_id')) {
        obj['client_id'] = ApiClient.convertToType(data['client_id'], 'Number');
      }
      if (data.hasOwnProperty('update_by')) {
        obj['update_by'] = ApiClient.convertToType(data['update_by'], 'String');
      }
      if (data.hasOwnProperty('payment_type_name')) {
        obj['payment_type_name'] = ApiClient.convertToType(data['payment_type_name'], 'String');
      }
      if (data.hasOwnProperty('payment_time')) {
        obj['payment_time'] = ApiClient.convertToType(data['payment_time'], 'Date');
      }
      if (data.hasOwnProperty('client_payment_id')) {
        obj['client_payment_id'] = ApiClient.convertToType(data['client_payment_id'], 'Number');
      }
      if (data.hasOwnProperty('paid_on')) {
        obj['paid_on'] = ApiClient.convertToType(data['paid_on'], 'Date');
      }
      if (data.hasOwnProperty('note')) {
        obj['note'] = ApiClient.convertToType(data['note'], 'String');
      }
      if (data.hasOwnProperty('amount')) {
        obj['amount'] = ApiClient.convertToType(data['amount'], 'Number');
      }
    }
    return obj;
  }

  /**
   * @member {String} carrier_name
   */
  exports.prototype['carrier_name'] = undefined;
  /**
   * @member {Number} client_id
   */
  exports.prototype['client_id'] = undefined;
  /**
   * @member {String} update_by
   */
  exports.prototype['update_by'] = undefined;
  /**
   * @member {module:model/ClientPaymentGet.PaymentTypeNameEnum} payment_type_name
   * @default 'n/a'
   */
  exports.prototype['payment_type_name'] = 'n/a';
  /**
   * @member {Date} payment_time
   */
  exports.prototype['payment_time'] = undefined;
  /**
   * @member {Number} client_payment_id
   */
  exports.prototype['client_payment_id'] = undefined;
  /**
   * @member {Date} paid_on
   */
  exports.prototype['paid_on'] = undefined;
  /**
   * @member {String} note
   */
  exports.prototype['note'] = undefined;
  /**
   * @member {Number} amount
   * @default 0.0
   */
  exports.prototype['amount'] = 0.0;


  /**
   * Allowed values for the <code>payment_type_name</code> property.
   * @enum {String}
   * @readonly
   */
  exports.PaymentTypeNameEnum = {
    /**
     * value: "invoice payment sent"
     * @const
     */
    "invoice payment sent": "invoice payment sent",
    /**
     * value: "debit received"
     * @const
     */
    "debit received": "debit received",
    /**
     * value: "prepayment"
     * @const
     */
    "prepayment": "prepayment",
    /**
     * value: "undefined"
     * @const
     */
    "undefined": "undefined",
    /**
     * value: "offset"
     * @const
     */
    "offset": "offset",
    /**
     * value: "payment sent"
     * @const
     */
    "payment sent": "payment sent",
    /**
     * value: "credit note received"
     * @const
     */
    "credit note received": "credit note received",
    /**
     * value: "debit sent"
     * @const
     */
    "debit sent": "debit sent",
    /**
     * value: "actual reset"
     * @const
     */
    "actual reset": "actual reset",
    /**
     * value: "n/a"
     * @const
     */
    "n/a": "n/a",
    /**
     * value: "credit note sent"
     * @const
     */
    "credit note sent": "credit note sent",
    /**
     * value: "mutual reset"
     * @const
     */
    "mutual reset": "mutual reset",
    /**
     * value: "reset"
     * @const
     */
    "reset": "reset",
    /**
     * value: "prepay payment received"
     * @const
     */
    "prepay payment received": "prepay payment received",
    /**
     * value: "invoice payment received"
     * @const
     */
    "invoice payment received": "invoice payment received"  };


  return exports;
}));



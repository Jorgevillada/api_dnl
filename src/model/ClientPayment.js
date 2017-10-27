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
    root.DnlApi.ClientPayment = factory(root.DnlApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The ClientPayment model module.
   * @module model/ClientPayment
   * @version 1.2.10
   */

  /**
   * Constructs a new <code>ClientPayment</code>.
   * @alias module:model/ClientPayment
   * @class
   */
  var exports = function() {
    var _this = this;





  };

  /**
   * Constructs a <code>ClientPayment</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ClientPayment} obj Optional instance to populate.
   * @return {module:model/ClientPayment} The populated <code>ClientPayment</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('paid_on')) {
        obj['paid_on'] = ApiClient.convertToType(data['paid_on'], 'Date');
      }
      if (data.hasOwnProperty('payment_type')) {
        obj['payment_type'] = ApiClient.convertToType(data['payment_type'], 'String');
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
   * @member {Date} paid_on
   */
  exports.prototype['paid_on'] = undefined;
  /**
   * @member {module:model/ClientPayment.PaymentTypeEnum} payment_type
   * @default 'n/a'
   */
  exports.prototype['payment_type'] = 'n/a';
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
   * Allowed values for the <code>payment_type</code> property.
   * @enum {String}
   * @readonly
   */
  exports.PaymentTypeEnum = {
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


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
    root.DnlApi.BalanceHistoryGet = factory(root.DnlApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The BalanceHistoryGet model module.
   * @module model/BalanceHistoryGet
   * @version 1.2.10
   */

  /**
   * Constructs a new <code>BalanceHistoryGet</code>.
   * @alias module:model/BalanceHistoryGet
   * @class
   */
  var exports = function() {
    var _this = this;









  };

  /**
   * Constructs a <code>BalanceHistoryGet</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/BalanceHistoryGet} obj Optional instance to populate.
   * @return {module:model/BalanceHistoryGet} The populated <code>BalanceHistoryGet</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('mutual_balance')) {
        obj['mutual_balance'] = ApiClient.convertToType(data['mutual_balance'], 'Number');
      }
      if (data.hasOwnProperty('credit_received')) {
        obj['credit_received'] = ApiClient.convertToType(data['credit_received'], 'Number');
      }
      if (data.hasOwnProperty('payment_received')) {
        obj['payment_received'] = ApiClient.convertToType(data['payment_received'], 'Number');
      }
      if (data.hasOwnProperty('date')) {
        obj['date'] = ApiClient.convertToType(data['date'], 'String');
      }
      if (data.hasOwnProperty('credit_sent')) {
        obj['credit_sent'] = ApiClient.convertToType(data['credit_sent'], 'Number');
      }
      if (data.hasOwnProperty('invoice_received')) {
        obj['invoice_received'] = ApiClient.convertToType(data['invoice_received'], 'Number');
      }
      if (data.hasOwnProperty('invoice_sent')) {
        obj['invoice_sent'] = ApiClient.convertToType(data['invoice_sent'], 'Number');
      }
      if (data.hasOwnProperty('payment_sent')) {
        obj['payment_sent'] = ApiClient.convertToType(data['payment_sent'], 'Number');
      }
    }
    return obj;
  }

  /**
   * @member {Number} mutual_balance
   */
  exports.prototype['mutual_balance'] = undefined;
  /**
   * @member {Number} credit_received
   */
  exports.prototype['credit_received'] = undefined;
  /**
   * @member {Number} payment_received
   */
  exports.prototype['payment_received'] = undefined;
  /**
   * @member {String} date
   */
  exports.prototype['date'] = undefined;
  /**
   * @member {Number} credit_sent
   */
  exports.prototype['credit_sent'] = undefined;
  /**
   * @member {Number} invoice_received
   */
  exports.prototype['invoice_received'] = undefined;
  /**
   * @member {Number} invoice_sent
   */
  exports.prototype['invoice_sent'] = undefined;
  /**
   * @member {Number} payment_sent
   */
  exports.prototype['payment_sent'] = undefined;



  return exports;
}));



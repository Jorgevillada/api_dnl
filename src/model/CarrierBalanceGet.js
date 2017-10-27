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
    root.DnlApi.CarrierBalanceGet = factory(root.DnlApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The CarrierBalanceGet model module.
   * @module model/CarrierBalanceGet
   * @version 1.2.10
   */

  /**
   * Constructs a new <code>CarrierBalanceGet</code>.
   * @alias module:model/CarrierBalanceGet
   * @class
   */
  var exports = function() {
    var _this = this;



  };

  /**
   * Constructs a <code>CarrierBalanceGet</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/CarrierBalanceGet} obj Optional instance to populate.
   * @return {module:model/CarrierBalanceGet} The populated <code>CarrierBalanceGet</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('mutual_balance')) {
        obj['mutual_balance'] = ApiClient.convertToType(data['mutual_balance'], 'Number');
      }
      if (data.hasOwnProperty('actual_balance')) {
        obj['actual_balance'] = ApiClient.convertToType(data['actual_balance'], 'Number');
      }
    }
    return obj;
  }

  /**
   * @member {Number} mutual_balance
   */
  exports.prototype['mutual_balance'] = undefined;
  /**
   * @member {Number} actual_balance
   */
  exports.prototype['actual_balance'] = undefined;



  return exports;
}));



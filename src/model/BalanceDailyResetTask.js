/**
 * DNL API
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: 1.2.62
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
    root.DnlApi.BalanceDailyResetTask = factory(root.DnlApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The BalanceDailyResetTask model module.
   * @module model/BalanceDailyResetTask
   * @version 1.2.62
   */

  /**
   * Constructs a new <code>BalanceDailyResetTask</code>.
   * @alias module:model/BalanceDailyResetTask
   * @class
   */
  var exports = function() {
    var _this = this;





  };

  /**
   * Constructs a <code>BalanceDailyResetTask</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/BalanceDailyResetTask} obj Optional instance to populate.
   * @return {module:model/BalanceDailyResetTask} The populated <code>BalanceDailyResetTask</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('reset_mutual_balance')) {
        obj['reset_mutual_balance'] = ApiClient.convertToType(data['reset_mutual_balance'], 'Boolean');
      }
      if (data.hasOwnProperty('start_time')) {
        obj['start_time'] = ApiClient.convertToType(data['start_time'], 'Date');
      }
      if (data.hasOwnProperty('reset_actual_balance')) {
        obj['reset_actual_balance'] = ApiClient.convertToType(data['reset_actual_balance'], 'Boolean');
      }
      if (data.hasOwnProperty('new_balance')) {
        obj['new_balance'] = ApiClient.convertToType(data['new_balance'], 'Number');
      }
    }
    return obj;
  }

  /**
   * @member {Boolean} reset_mutual_balance
   */
  exports.prototype['reset_mutual_balance'] = undefined;
  /**
   * @member {Date} start_time
   */
  exports.prototype['start_time'] = undefined;
  /**
   * @member {Boolean} reset_actual_balance
   */
  exports.prototype['reset_actual_balance'] = undefined;
  /**
   * @member {Number} new_balance
   */
  exports.prototype['new_balance'] = undefined;



  return exports;
}));



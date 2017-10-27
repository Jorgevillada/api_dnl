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
    root.DnlApi.BalanceDailyResetTaskGet = factory(root.DnlApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The BalanceDailyResetTaskGet model module.
   * @module model/BalanceDailyResetTaskGet
   * @version 1.2.10
   */

  /**
   * Constructs a new <code>BalanceDailyResetTaskGet</code>.
   * @alias module:model/BalanceDailyResetTaskGet
   * @class
   */
  var exports = function() {
    var _this = this;








  };

  /**
   * Constructs a <code>BalanceDailyResetTaskGet</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/BalanceDailyResetTaskGet} obj Optional instance to populate.
   * @return {module:model/BalanceDailyResetTaskGet} The populated <code>BalanceDailyResetTaskGet</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('start_time')) {
        obj['start_time'] = ApiClient.convertToType(data['start_time'], 'Date');
      }
      if (data.hasOwnProperty('client_id')) {
        obj['client_id'] = ApiClient.convertToType(data['client_id'], 'Number');
      }
      if (data.hasOwnProperty('reset_mutual_balance')) {
        obj['reset_mutual_balance'] = ApiClient.convertToType(data['reset_mutual_balance'], 'Boolean');
      }
      if (data.hasOwnProperty('new_balance')) {
        obj['new_balance'] = ApiClient.convertToType(data['new_balance'], 'String');
      }
      if (data.hasOwnProperty('reset_actual_balance')) {
        obj['reset_actual_balance'] = ApiClient.convertToType(data['reset_actual_balance'], 'Boolean');
      }
      if (data.hasOwnProperty('status')) {
        obj['status'] = ApiClient.convertToType(data['status'], 'String');
      }
      if (data.hasOwnProperty('finished_time')) {
        obj['finished_time'] = ApiClient.convertToType(data['finished_time'], 'Date');
      }
    }
    return obj;
  }

  /**
   * @member {Date} start_time
   */
  exports.prototype['start_time'] = undefined;
  /**
   * @member {Number} client_id
   */
  exports.prototype['client_id'] = undefined;
  /**
   * @member {Boolean} reset_mutual_balance
   */
  exports.prototype['reset_mutual_balance'] = undefined;
  /**
   * @member {String} new_balance
   */
  exports.prototype['new_balance'] = undefined;
  /**
   * @member {Boolean} reset_actual_balance
   */
  exports.prototype['reset_actual_balance'] = undefined;
  /**
   * @member {module:model/BalanceDailyResetTaskGet.StatusEnum} status
   * @default 'initial'
   */
  exports.prototype['status'] = 'initial';
  /**
   * @member {Date} finished_time
   */
  exports.prototype['finished_time'] = undefined;


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
     * value: "finished"
     * @const
     */
    "finished": "finished",
    /**
     * value: "in process"
     * @const
     */
    "in process": "in process"  };


  return exports;
}));


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
    root.DnlApi.CarrierLowBalanceConfig = factory(root.DnlApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The CarrierLowBalanceConfig model module.
   * @module model/CarrierLowBalanceConfig
   * @version 1.2.10
   */

  /**
   * Constructs a new <code>CarrierLowBalanceConfig</code>.
   * @alias module:model/CarrierLowBalanceConfig
   * @class
   */
  var exports = function() {
    var _this = this;











  };

  /**
   * Constructs a <code>CarrierLowBalanceConfig</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/CarrierLowBalanceConfig} obj Optional instance to populate.
   * @return {module:model/CarrierLowBalanceConfig} The populated <code>CarrierLowBalanceConfig</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('daily_send_time')) {
        obj['daily_send_time'] = ApiClient.convertToType(data['daily_send_time'], 'Number');
      }
      if (data.hasOwnProperty('duplicate_days')) {
        obj['duplicate_days'] = ApiClient.convertToType(data['duplicate_days'], 'Number');
      }
      if (data.hasOwnProperty('disable_trunks_days')) {
        obj['disable_trunks_days'] = ApiClient.convertToType(data['disable_trunks_days'], 'Number');
      }
      if (data.hasOwnProperty('is_notify')) {
        obj['is_notify'] = ApiClient.convertToType(data['is_notify'], 'Boolean');
      }
      if (data.hasOwnProperty('send_time_type')) {
        obj['send_time_type'] = ApiClient.convertToType(data['send_time_type'], 'String');
      }
      if (data.hasOwnProperty('send_to')) {
        obj['send_to'] = ApiClient.convertToType(data['send_to'], 'Number');
      }
      if (data.hasOwnProperty('percentage_notify_balance')) {
        obj['percentage_notify_balance'] = ApiClient.convertToType(data['percentage_notify_balance'], 'Number');
      }
      if (data.hasOwnProperty('duplicate_send_days')) {
        obj['duplicate_send_days'] = ApiClient.convertToType(data['duplicate_send_days'], 'Number');
      }
      if (data.hasOwnProperty('value_type')) {
        obj['value_type'] = ApiClient.convertToType(data['value_type'], 'String');
      }
      if (data.hasOwnProperty('actual_notify_balance')) {
        obj['actual_notify_balance'] = ApiClient.convertToType(data['actual_notify_balance'], 'Number');
      }
    }
    return obj;
  }

  /**
   * @member {Number} daily_send_time
   */
  exports.prototype['daily_send_time'] = undefined;
  /**
   * @member {Number} duplicate_days
   */
  exports.prototype['duplicate_days'] = undefined;
  /**
   * @member {Number} disable_trunks_days
   */
  exports.prototype['disable_trunks_days'] = undefined;
  /**
   * @member {Boolean} is_notify
   */
  exports.prototype['is_notify'] = undefined;
  /**
   * @member {module:model/CarrierLowBalanceConfig.SendTimeTypeEnum} send_time_type
   * @default 'daily'
   */
  exports.prototype['send_time_type'] = 'daily';
  /**
   * @member {Number} send_to
   */
  exports.prototype['send_to'] = undefined;
  /**
   * @member {Number} percentage_notify_balance
   */
  exports.prototype['percentage_notify_balance'] = undefined;
  /**
   * @member {Number} duplicate_send_days
   */
  exports.prototype['duplicate_send_days'] = undefined;
  /**
   * @member {module:model/CarrierLowBalanceConfig.ValueTypeEnum} value_type
   * @default 'Actual Balance'
   */
  exports.prototype['value_type'] = 'Actual Balance';
  /**
   * @member {Number} actual_notify_balance
   */
  exports.prototype['actual_notify_balance'] = undefined;


  /**
   * Allowed values for the <code>send_time_type</code> property.
   * @enum {String}
   * @readonly
   */
  exports.SendTimeTypeEnum = {
    /**
     * value: "hourly"
     * @const
     */
    "hourly": "hourly",
    /**
     * value: "daily"
     * @const
     */
    "daily": "daily"  };

  /**
   * Allowed values for the <code>value_type</code> property.
   * @enum {String}
   * @readonly
   */
  exports.ValueTypeEnum = {
    /**
     * value: "Percentage"
     * @const
     */
    "Percentage": "Percentage",
    /**
     * value: "Actual Balance"
     * @const
     */
    "Actual Balance": "Actual Balance"  };


  return exports;
}));



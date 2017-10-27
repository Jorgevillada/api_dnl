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
    root.DnlApi.CarrierAlerts = factory(root.DnlApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The CarrierAlerts model module.
   * @module model/CarrierAlerts
   * @version 1.2.10
   */

  /**
   * Constructs a new <code>CarrierAlerts</code>.
   * @alias module:model/CarrierAlerts
   * @class
   */
  var exports = function() {
    var _this = this;

















  };

  /**
   * Constructs a <code>CarrierAlerts</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/CarrierAlerts} obj Optional instance to populate.
   * @return {module:model/CarrierAlerts} The populated <code>CarrierAlerts</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('auto_summary_period')) {
        obj['auto_summary_period'] = ApiClient.convertToType(data['auto_summary_period'], 'Number');
      }
      if (data.hasOwnProperty('low_balance_notice')) {
        obj['low_balance_notice'] = ApiClient.convertToType(data['low_balance_notice'], 'Boolean');
      }
      if (data.hasOwnProperty('low_balance_notification_time_cycle')) {
        obj['low_balance_notification_time_cycle'] = ApiClient.convertToType(data['low_balance_notification_time_cycle'], 'Number');
      }
      if (data.hasOwnProperty('is_daily_balance_notification')) {
        obj['is_daily_balance_notification'] = ApiClient.convertToType(data['is_daily_balance_notification'], 'Boolean');
      }
      if (data.hasOwnProperty('is_send_trunk_update')) {
        obj['is_send_trunk_update'] = ApiClient.convertToType(data['is_send_trunk_update'], 'Boolean');
      }
      if (data.hasOwnProperty('notify_client_balance_type')) {
        obj['notify_client_balance_type'] = ApiClient.convertToType(data['notify_client_balance_type'], 'Number');
      }
      if (data.hasOwnProperty('is_show_daily_usage')) {
        obj['is_show_daily_usage'] = ApiClient.convertToType(data['is_show_daily_usage'], 'Boolean');
      }
      if (data.hasOwnProperty('daily_cdr_generation')) {
        obj['daily_cdr_generation'] = ApiClient.convertToType(data['daily_cdr_generation'], 'Boolean');
      }
      if (data.hasOwnProperty('zero_balance_notice')) {
        obj['zero_balance_notice'] = ApiClient.convertToType(data['zero_balance_notice'], 'Boolean');
      }
      if (data.hasOwnProperty('attach_cdrs_list')) {
        obj['attach_cdrs_list'] = ApiClient.convertToType(data['attach_cdrs_list'], 'Boolean');
      }
      if (data.hasOwnProperty('auto_summary_not_zero')) {
        obj['auto_summary_not_zero'] = ApiClient.convertToType(data['auto_summary_not_zero'], 'Boolean');
      }
      if (data.hasOwnProperty('auto_summary_group_by')) {
        obj['auto_summary_group_by'] = ApiClient.convertToType(data['auto_summary_group_by'], 'String');
      }
      if (data.hasOwnProperty('daily_cdr_generation_zone')) {
        obj['daily_cdr_generation_zone'] = ApiClient.convertToType(data['daily_cdr_generation_zone'], 'String');
      }
      if (data.hasOwnProperty('auto_summary_hour')) {
        obj['auto_summary_hour'] = ApiClient.convertToType(data['auto_summary_hour'], 'Number');
      }
      if (data.hasOwnProperty('low_balance_notification_time_type')) {
        obj['low_balance_notification_time_type'] = ApiClient.convertToType(data['low_balance_notification_time_type'], 'Number');
      }
      if (data.hasOwnProperty('is_auto_summary')) {
        obj['is_auto_summary'] = ApiClient.convertToType(data['is_auto_summary'], 'Boolean');
      }
    }
    return obj;
  }

  /**
   * @member {Number} auto_summary_period
   * @default 24
   */
  exports.prototype['auto_summary_period'] = 24;
  /**
   * @member {Boolean} low_balance_notice
   */
  exports.prototype['low_balance_notice'] = undefined;
  /**
   * @member {Number} low_balance_notification_time_cycle
   */
  exports.prototype['low_balance_notification_time_cycle'] = undefined;
  /**
   * @member {Boolean} is_daily_balance_notification
   */
  exports.prototype['is_daily_balance_notification'] = undefined;
  /**
   * @member {Boolean} is_send_trunk_update
   */
  exports.prototype['is_send_trunk_update'] = undefined;
  /**
   * @member {Number} notify_client_balance_type
   */
  exports.prototype['notify_client_balance_type'] = undefined;
  /**
   * @member {Boolean} is_show_daily_usage
   */
  exports.prototype['is_show_daily_usage'] = undefined;
  /**
   * @member {Boolean} daily_cdr_generation
   */
  exports.prototype['daily_cdr_generation'] = undefined;
  /**
   * @member {Boolean} zero_balance_notice
   */
  exports.prototype['zero_balance_notice'] = undefined;
  /**
   * @member {Boolean} attach_cdrs_list
   */
  exports.prototype['attach_cdrs_list'] = undefined;
  /**
   * @member {Boolean} auto_summary_not_zero
   */
  exports.prototype['auto_summary_not_zero'] = undefined;
  /**
   * @member {module:model/CarrierAlerts.AutoSummaryGroupByEnum} auto_summary_group_by
   * @default 'By Country'
   */
  exports.prototype['auto_summary_group_by'] = 'By Country';
  /**
   * @member {String} daily_cdr_generation_zone
   */
  exports.prototype['daily_cdr_generation_zone'] = undefined;
  /**
   * @member {Number} auto_summary_hour
   */
  exports.prototype['auto_summary_hour'] = undefined;
  /**
   * @member {Number} low_balance_notification_time_type
   */
  exports.prototype['low_balance_notification_time_type'] = undefined;
  /**
   * @member {Boolean} is_auto_summary
   */
  exports.prototype['is_auto_summary'] = undefined;


  /**
   * Allowed values for the <code>auto_summary_group_by</code> property.
   * @enum {String}
   * @readonly
   */
  exports.AutoSummaryGroupByEnum = {
    /**
     * value: "By Country"
     * @const
     */
    "Country": "By Country",
    /**
     * value: "By Code Name"
     * @const
     */
    "Code Name": "By Code Name",
    /**
     * value: "By Code"
     * @const
     */
    "Code": "By Code"  };


  return exports;
}));


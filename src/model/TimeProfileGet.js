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
    root.DnlApi.TimeProfileGet = factory(root.DnlApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The TimeProfileGet model module.
   * @module model/TimeProfileGet
   * @version 1.2.10
   */

  /**
   * Constructs a new <code>TimeProfileGet</code>.
   * @alias module:model/TimeProfileGet
   * @class
   */
  var exports = function() {
    var _this = this;








  };

  /**
   * Constructs a <code>TimeProfileGet</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/TimeProfileGet} obj Optional instance to populate.
   * @return {module:model/TimeProfileGet} The populated <code>TimeProfileGet</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('name')) {
        obj['name'] = ApiClient.convertToType(data['name'], 'String');
      }
      if (data.hasOwnProperty('start_time')) {
        obj['start_time'] = ApiClient.convertToType(data['start_time'], 'String');
      }
      if (data.hasOwnProperty('end_time')) {
        obj['end_time'] = ApiClient.convertToType(data['end_time'], 'String');
      }
      if (data.hasOwnProperty('time_profile_id')) {
        obj['time_profile_id'] = ApiClient.convertToType(data['time_profile_id'], 'Number');
      }
      if (data.hasOwnProperty('start_day_of_week')) {
        obj['start_day_of_week'] = ApiClient.convertToType(data['start_day_of_week'], 'Number');
      }
      if (data.hasOwnProperty('end_day_of_week')) {
        obj['end_day_of_week'] = ApiClient.convertToType(data['end_day_of_week'], 'Number');
      }
      if (data.hasOwnProperty('type_name')) {
        obj['type_name'] = ApiClient.convertToType(data['type_name'], 'String');
      }
    }
    return obj;
  }

  /**
   * @member {String} name
   */
  exports.prototype['name'] = undefined;
  /**
   * @member {String} start_time
   */
  exports.prototype['start_time'] = undefined;
  /**
   * @member {String} end_time
   */
  exports.prototype['end_time'] = undefined;
  /**
   * @member {Number} time_profile_id
   */
  exports.prototype['time_profile_id'] = undefined;
  /**
   * @member {Number} start_day_of_week
   */
  exports.prototype['start_day_of_week'] = undefined;
  /**
   * @member {Number} end_day_of_week
   */
  exports.prototype['end_day_of_week'] = undefined;
  /**
   * @member {module:model/TimeProfileGet.TypeNameEnum} type_name
   * @default 'all time'
   */
  exports.prototype['type_name'] = 'all time';


  /**
   * Allowed values for the <code>type_name</code> property.
   * @enum {String}
   * @readonly
   */
  exports.TypeNameEnum = {
    /**
     * value: "weekly"
     * @const
     */
    "weekly": "weekly",
    /**
     * value: "daily"
     * @const
     */
    "daily": "daily",
    /**
     * value: "all time"
     * @const
     */
    "all time": "all time"  };


  return exports;
}));



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
    root.DnlApi.LicenseModificationLog = factory(root.DnlApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The LicenseModificationLog model module.
   * @module model/LicenseModificationLog
   * @version 1.2.10
   */

  /**
   * Constructs a new <code>LicenseModificationLog</code>.
   * @alias module:model/LicenseModificationLog
   * @class
   */
  var exports = function() {
    var _this = this;








  };

  /**
   * Constructs a <code>LicenseModificationLog</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/LicenseModificationLog} obj Optional instance to populate.
   * @return {module:model/LicenseModificationLog} The populated <code>LicenseModificationLog</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('modify_on')) {
        obj['modify_on'] = ApiClient.convertToType(data['modify_on'], 'Date');
      }
      if (data.hasOwnProperty('new_value')) {
        obj['new_value'] = ApiClient.convertToType(data['new_value'], 'Number');
      }
      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'Number');
      }
      if (data.hasOwnProperty('old_value')) {
        obj['old_value'] = ApiClient.convertToType(data['old_value'], 'Number');
      }
      if (data.hasOwnProperty('switch_name')) {
        obj['switch_name'] = ApiClient.convertToType(data['switch_name'], 'String');
      }
      if (data.hasOwnProperty('modify_by')) {
        obj['modify_by'] = ApiClient.convertToType(data['modify_by'], 'String');
      }
      if (data.hasOwnProperty('type')) {
        obj['type'] = ApiClient.convertToType(data['type'], 'String');
      }
    }
    return obj;
  }

  /**
   * @member {Date} modify_on
   */
  exports.prototype['modify_on'] = undefined;
  /**
   * @member {Number} new_value
   */
  exports.prototype['new_value'] = undefined;
  /**
   * @member {Number} id
   */
  exports.prototype['id'] = undefined;
  /**
   * @member {Number} old_value
   */
  exports.prototype['old_value'] = undefined;
  /**
   * @member {String} switch_name
   */
  exports.prototype['switch_name'] = undefined;
  /**
   * @member {String} modify_by
   */
  exports.prototype['modify_by'] = undefined;
  /**
   * @member {module:model/LicenseModificationLog.TypeEnum} type
   * @default 'Self-Defined Cap Limit'
   */
  exports.prototype['type'] = 'Self-Defined Cap Limit';


  /**
   * Allowed values for the <code>type</code> property.
   * @enum {String}
   * @readonly
   */
  exports.TypeEnum = {
    /**
     * value: "Initialize(CPS Limit)"
     * @const
     */
    "Initialize(CPS Limit)": "Initialize(CPS Limit)",
    /**
     * value: "Initialize(Cap Limit)"
     * @const
     */
    "Initialize(Cap Limit)": "Initialize(Cap Limit)",
    /**
     * value: "Self-Defined Cap Limit"
     * @const
     */
    "Self-Defined Cap Limit": "Self-Defined Cap Limit",
    /**
     * value: "Self-Defined CPS Limit"
     * @const
     */
    "Self-Defined CPS Limit": "Self-Defined CPS Limit"  };


  return exports;
}));



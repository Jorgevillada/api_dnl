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
    root.DnlApi.ModifLog = factory(root.DnlApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The ModifLog model module.
   * @module model/ModifLog
   * @version 1.2.10
   */

  /**
   * Constructs a new <code>ModifLog</code>.
   * @alias module:model/ModifLog
   * @class
   */
  var exports = function() {
    var _this = this;









  };

  /**
   * Constructs a <code>ModifLog</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ModifLog} obj Optional instance to populate.
   * @return {module:model/ModifLog} The populated <code>ModifLog</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('name')) {
        obj['name'] = ApiClient.convertToType(data['name'], 'String');
      }
      if (data.hasOwnProperty('rollback')) {
        obj['rollback'] = ApiClient.convertToType(data['rollback'], 'String');
      }
      if (data.hasOwnProperty('rollback_extra_info')) {
        obj['rollback_extra_info'] = ApiClient.convertToType(data['rollback_extra_info'], 'String');
      }
      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'Number');
      }
      if (data.hasOwnProperty('module')) {
        obj['module'] = ApiClient.convertToType(data['module'], 'String');
      }
      if (data.hasOwnProperty('detail')) {
        obj['detail'] = ApiClient.convertToType(data['detail'], 'String');
      }
      if (data.hasOwnProperty('type')) {
        obj['type'] = ApiClient.convertToType(data['type'], 'String');
      }
      if (data.hasOwnProperty('time')) {
        obj['time'] = ApiClient.convertToType(data['time'], 'Date');
      }
    }
    return obj;
  }

  /**
   * @member {String} name
   */
  exports.prototype['name'] = undefined;
  /**
   * @member {String} rollback
   */
  exports.prototype['rollback'] = undefined;
  /**
   * @member {String} rollback_extra_info
   */
  exports.prototype['rollback_extra_info'] = undefined;
  /**
   * @member {Number} id
   */
  exports.prototype['id'] = undefined;
  /**
   * @member {String} module
   */
  exports.prototype['module'] = undefined;
  /**
   * @member {String} detail
   */
  exports.prototype['detail'] = undefined;
  /**
   * @member {module:model/ModifLog.TypeEnum} type
   * @default 'Creation'
   */
  exports.prototype['type'] = 'Creation';
  /**
   * @member {Date} time
   */
  exports.prototype['time'] = undefined;


  /**
   * Allowed values for the <code>type</code> property.
   * @enum {String}
   * @readonly
   */
  exports.TypeEnum = {
    /**
     * value: "Modification"
     * @const
     */
    "Modification": "Modification",
    /**
     * value: "Deletion"
     * @const
     */
    "Deletion": "Deletion",
    /**
     * value: "Creation"
     * @const
     */
    "Creation": "Creation"  };


  return exports;
}));


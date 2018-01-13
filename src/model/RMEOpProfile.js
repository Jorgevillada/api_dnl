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
    root.DnlApi.RMEOpProfile = factory(root.DnlApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The RMEOpProfile model module.
   * @module model/RMEOpProfile
   * @version 1.2.62
   */

  /**
   * Constructs a new <code>RMEOpProfile</code>.
   * @alias module:model/RMEOpProfile
   * @class
   * @param operation {module:model/RMEOpProfile.OperationEnum} 
   */
  var exports = function(operation) {
    var _this = this;


    _this['operation'] = operation;
  };

  /**
   * Constructs a <code>RMEOpProfile</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/RMEOpProfile} obj Optional instance to populate.
   * @return {module:model/RMEOpProfile} The populated <code>RMEOpProfile</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('value')) {
        obj['value'] = ApiClient.convertToType(data['value'], 'Number');
      }
      if (data.hasOwnProperty('operation')) {
        obj['operation'] = ApiClient.convertToType(data['operation'], 'String');
      }
    }
    return obj;
  }

  /**
   * @member {Number} value
   */
  exports.prototype['value'] = undefined;
  /**
   * @member {module:model/RMEOpProfile.OperationEnum} operation
   */
  exports.prototype['operation'] = undefined;


  /**
   * Allowed values for the <code>operation</code> property.
   * @enum {String}
   * @readonly
   */
  exports.OperationEnum = {
    /**
     * value: "No Change"
     * @const
     */
    "No Change": "No Change",
    /**
     * value: "set to"
     * @const
     */
    "set to": "set to"  };


  return exports;
}));



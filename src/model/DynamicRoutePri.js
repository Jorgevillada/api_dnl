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
    root.DnlApi.DynamicRoutePri = factory(root.DnlApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The DynamicRoutePri model module.
   * @module model/DynamicRoutePri
   * @version 1.2.10
   */

  /**
   * Constructs a new <code>DynamicRoutePri</code>.
   * @alias module:model/DynamicRoutePri
   * @class
   */
  var exports = function() {
    var _this = this;




  };

  /**
   * Constructs a <code>DynamicRoutePri</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/DynamicRoutePri} obj Optional instance to populate.
   * @return {module:model/DynamicRoutePri} The populated <code>DynamicRoutePri</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('resource_id')) {
        obj['resource_id'] = ApiClient.convertToType(data['resource_id'], 'Number');
      }
      if (data.hasOwnProperty('resource_pri')) {
        obj['resource_pri'] = ApiClient.convertToType(data['resource_pri'], 'Number');
      }
      if (data.hasOwnProperty('digits')) {
        obj['digits'] = ApiClient.convertToType(data['digits'], 'String');
      }
    }
    return obj;
  }

  /**
   * @member {Number} resource_id
   */
  exports.prototype['resource_id'] = undefined;
  /**
   * @member {Number} resource_pri
   */
  exports.prototype['resource_pri'] = undefined;
  /**
   * @member {String} digits
   */
  exports.prototype['digits'] = undefined;



  return exports;
}));



/**
 * DNL API
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: 1.2.62
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.3.0
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
    root.DnlApi.ResourceCodecsRef = factory(root.DnlApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The ResourceCodecsRef model module.
   * @module model/ResourceCodecsRef
   * @version 1.2.62
   */

  /**
   * Constructs a new <code>ResourceCodecsRef</code>.
   * @alias module:model/ResourceCodecsRef
   * @class
   * @param resourceId {Number} 
   */
  var exports = function(resourceId) {
    var _this = this;


    _this['resource_id'] = resourceId;
  };

  /**
   * Constructs a <code>ResourceCodecsRef</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ResourceCodecsRef} obj Optional instance to populate.
   * @return {module:model/ResourceCodecsRef} The populated <code>ResourceCodecsRef</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('codec')) {
        obj['codec'] = ApiClient.convertToType(data['codec'], 'String');
      }
      if (data.hasOwnProperty('resource_id')) {
        obj['resource_id'] = ApiClient.convertToType(data['resource_id'], 'Number');
      }
    }
    return obj;
  }

  /**
   * @member {String} codec
   */
  exports.prototype['codec'] = undefined;
  /**
   * @member {Number} resource_id
   */
  exports.prototype['resource_id'] = undefined;



  return exports;
}));



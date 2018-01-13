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
    root.DnlApi.ObjectCreatedWithErrors = factory(root.DnlApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The ObjectCreatedWithErrors model module.
   * @module model/ObjectCreatedWithErrors
   * @version 1.2.62
   */

  /**
   * Constructs a new <code>ObjectCreatedWithErrors</code>.
   * @alias module:model/ObjectCreatedWithErrors
   * @class
   */
  var exports = function() {
    var _this = this;




  };

  /**
   * Constructs a <code>ObjectCreatedWithErrors</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ObjectCreatedWithErrors} obj Optional instance to populate.
   * @return {module:model/ObjectCreatedWithErrors} The populated <code>ObjectCreatedWithErrors</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('errors')) {
        obj['errors'] = ApiClient.convertToType(data['errors'], 'Number');
      }
      if (data.hasOwnProperty('object_id')) {
        obj['object_id'] = ApiClient.convertToType(data['object_id'], 'Number');
      }
      if (data.hasOwnProperty('success')) {
        obj['success'] = ApiClient.convertToType(data['success'], 'Boolean');
      }
    }
    return obj;
  }

  /**
   * @member {Number} errors
   */
  exports.prototype['errors'] = undefined;
  /**
   * @member {Number} object_id
   */
  exports.prototype['object_id'] = undefined;
  /**
   * @member {Boolean} success
   * @default true
   */
  exports.prototype['success'] = true;



  return exports;
}));



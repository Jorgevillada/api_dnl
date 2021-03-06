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
    root.DnlApi.ObjectCreatedCompositeOrStrPk = factory(root.DnlApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The ObjectCreatedCompositeOrStrPk model module.
   * @module model/ObjectCreatedCompositeOrStrPk
   * @version 1.2.62
   */

  /**
   * Constructs a new <code>ObjectCreatedCompositeOrStrPk</code>.
   * @alias module:model/ObjectCreatedCompositeOrStrPk
   * @class
   */
  var exports = function() {
    var _this = this;



  };

  /**
   * Constructs a <code>ObjectCreatedCompositeOrStrPk</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ObjectCreatedCompositeOrStrPk} obj Optional instance to populate.
   * @return {module:model/ObjectCreatedCompositeOrStrPk} The populated <code>ObjectCreatedCompositeOrStrPk</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('object_pk')) {
        obj['object_pk'] = ApiClient.convertToType(data['object_pk'], 'String');
      }
      if (data.hasOwnProperty('success')) {
        obj['success'] = ApiClient.convertToType(data['success'], 'Boolean');
      }
    }
    return obj;
  }

  /**
   * @member {String} object_pk
   */
  exports.prototype['object_pk'] = undefined;
  /**
   * @member {Boolean} success
   * @default true
   */
  exports.prototype['success'] = true;



  return exports;
}));



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
    root.DnlApi.ImportCreate = factory(root.DnlApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The ImportCreate model module.
   * @module model/ImportCreate
   * @version 1.2.62
   */

  /**
   * Constructs a new <code>ImportCreate</code>.
   * @alias module:model/ImportCreate
   * @class
   */
  var exports = function() {
    var _this = this;



  };

  /**
   * Constructs a <code>ImportCreate</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ImportCreate} obj Optional instance to populate.
   * @return {module:model/ImportCreate} The populated <code>ImportCreate</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('entity')) {
        obj['entity'] = ApiClient.convertToType(data['entity'], 'String');
      }
      if (data.hasOwnProperty('query')) {
        obj['query'] = ApiClient.convertToType(data['query'], Object);
      }
    }
    return obj;
  }

  /**
   * @member {String} entity
   */
  exports.prototype['entity'] = undefined;
  /**
   * @member {Object} query
   */
  exports.prototype['query'] = undefined;



  return exports;
}));



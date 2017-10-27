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
    define(['ApiClient', 'model/ExportQuery'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./ExportQuery'));
  } else {
    // Browser globals (root is window)
    if (!root.DnlApi) {
      root.DnlApi = {};
    }
    root.DnlApi.ExportCreate = factory(root.DnlApi.ApiClient, root.DnlApi.ExportQuery);
  }
}(this, function(ApiClient, ExportQuery) {
  'use strict';




  /**
   * The ExportCreate model module.
   * @module model/ExportCreate
   * @version 1.2.10
   */

  /**
   * Constructs a new <code>ExportCreate</code>.
   * @alias module:model/ExportCreate
   * @class
   */
  var exports = function() {
    var _this = this;



  };

  /**
   * Constructs a <code>ExportCreate</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ExportCreate} obj Optional instance to populate.
   * @return {module:model/ExportCreate} The populated <code>ExportCreate</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('entity')) {
        obj['entity'] = ApiClient.convertToType(data['entity'], 'String');
      }
      if (data.hasOwnProperty('query')) {
        obj['query'] = ExportQuery.constructFromObject(data['query']);
      }
    }
    return obj;
  }

  /**
   * @member {String} entity
   */
  exports.prototype['entity'] = undefined;
  /**
   * @member {module:model/ExportQuery} query
   */
  exports.prototype['query'] = undefined;



  return exports;
}));


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
    define(['ApiClient', 'model/Filter'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Filter'));
  } else {
    // Browser globals (root is window)
    if (!root.DnlApi) {
      root.DnlApi = {};
    }
    root.DnlApi.ExportQuery = factory(root.DnlApi.ApiClient, root.DnlApi.Filter);
  }
}(this, function(ApiClient, Filter) {
  'use strict';




  /**
   * The ExportQuery model module.
   * @module model/ExportQuery
   * @version 1.2.10
   */

  /**
   * Constructs a new <code>ExportQuery</code>.
   * @alias module:model/ExportQuery
   * @class
   */
  var exports = function() {
    var _this = this;




  };

  /**
   * Constructs a <code>ExportQuery</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ExportQuery} obj Optional instance to populate.
   * @return {module:model/ExportQuery} The populated <code>ExportQuery</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('where')) {
        obj['where'] = ApiClient.convertToType(data['where'], [Filter]);
      }
      if (data.hasOwnProperty('select')) {
        obj['select'] = ApiClient.convertToType(data['select'], ['String']);
      }
      if (data.hasOwnProperty('format')) {
        obj['format'] = ApiClient.convertToType(data['format'], 'String');
      }
    }
    return obj;
  }

  /**
   * @member {Array.<module:model/Filter>} where
   */
  exports.prototype['where'] = undefined;
  /**
   * @member {Array.<String>} select
   */
  exports.prototype['select'] = undefined;
  /**
   * @member {module:model/ExportQuery.FormatEnum} format
   */
  exports.prototype['format'] = undefined;


  /**
   * Allowed values for the <code>format</code> property.
   * @enum {String}
   * @readonly
   */
  exports.FormatEnum = {
    /**
     * value: "xml"
     * @const
     */
    "xml": "xml",
    /**
     * value: "json"
     * @const
     */
    "json": "json",
    /**
     * value: "csv"
     * @const
     */
    "csv": "csv"  };


  return exports;
}));


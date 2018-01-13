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
    root.DnlApi.PgStatActivity = factory(root.DnlApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The PgStatActivity model module.
   * @module model/PgStatActivity
   * @version 1.2.62
   */

  /**
   * Constructs a new <code>PgStatActivity</code>.
   * @alias module:model/PgStatActivity
   * @class
   */
  var exports = function() {
    var _this = this;





  };

  /**
   * Constructs a <code>PgStatActivity</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/PgStatActivity} obj Optional instance to populate.
   * @return {module:model/PgStatActivity} The populated <code>PgStatActivity</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('query_start')) {
        obj['query_start'] = ApiClient.convertToType(data['query_start'], 'Date');
      }
      if (data.hasOwnProperty('query_text')) {
        obj['query_text'] = ApiClient.convertToType(data['query_text'], 'String');
      }
      if (data.hasOwnProperty('pid')) {
        obj['pid'] = ApiClient.convertToType(data['pid'], 'Number');
      }
      if (data.hasOwnProperty('usename')) {
        obj['usename'] = ApiClient.convertToType(data['usename'], 'String');
      }
    }
    return obj;
  }

  /**
   * @member {Date} query_start
   */
  exports.prototype['query_start'] = undefined;
  /**
   * @member {String} query_text
   */
  exports.prototype['query_text'] = undefined;
  /**
   * @member {Number} pid
   */
  exports.prototype['pid'] = undefined;
  /**
   * @member {String} usename
   */
  exports.prototype['usename'] = undefined;



  return exports;
}));



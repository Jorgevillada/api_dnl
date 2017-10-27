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
    define(['ApiClient', 'model/ResourceGet'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./ResourceGet'));
  } else {
    // Browser globals (root is window)
    if (!root.DnlApi) {
      root.DnlApi = {};
    }
    root.DnlApi.RateDownloadLog = factory(root.DnlApi.ApiClient, root.DnlApi.ResourceGet);
  }
}(this, function(ApiClient, ResourceGet) {
  'use strict';




  /**
   * The RateDownloadLog model module.
   * @module model/RateDownloadLog
   * @version 1.2.10
   */

  /**
   * Constructs a new <code>RateDownloadLog</code>.
   * @alias module:model/RateDownloadLog
   * @class
   */
  var exports = function() {
    var _this = this;







  };

  /**
   * Constructs a <code>RateDownloadLog</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/RateDownloadLog} obj Optional instance to populate.
   * @return {module:model/RateDownloadLog} The populated <code>RateDownloadLog</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('file_path')) {
        obj['file_path'] = ApiClient.convertToType(data['file_path'], 'String');
      }
      if (data.hasOwnProperty('download_time')) {
        obj['download_time'] = ApiClient.convertToType(data['download_time'], 'Date');
      }
      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'Number');
      }
      if (data.hasOwnProperty('resource_id')) {
        obj['resource_id'] = ApiClient.convertToType(data['resource_id'], 'Number');
      }
      if (data.hasOwnProperty('log_detail_id')) {
        obj['log_detail_id'] = ApiClient.convertToType(data['log_detail_id'], 'String');
      }
      if (data.hasOwnProperty('resource')) {
        obj['resource'] = ResourceGet.constructFromObject(data['resource']);
      }
    }
    return obj;
  }

  /**
   * @member {String} file_path
   */
  exports.prototype['file_path'] = undefined;
  /**
   * @member {Date} download_time
   */
  exports.prototype['download_time'] = undefined;
  /**
   * @member {Number} id
   */
  exports.prototype['id'] = undefined;
  /**
   * @member {Number} resource_id
   */
  exports.prototype['resource_id'] = undefined;
  /**
   * @member {String} log_detail_id
   */
  exports.prototype['log_detail_id'] = undefined;
  /**
   * @member {module:model/ResourceGet} resource
   */
  exports.prototype['resource'] = undefined;



  return exports;
}));


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
    root.DnlApi.RerateCdrDownloadLog = factory(root.DnlApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The RerateCdrDownloadLog model module.
   * @module model/RerateCdrDownloadLog
   * @version 1.2.10
   */

  /**
   * Constructs a new <code>RerateCdrDownloadLog</code>.
   * @alias module:model/RerateCdrDownloadLog
   * @class
   */
  var exports = function() {
    var _this = this;







  };

  /**
   * Constructs a <code>RerateCdrDownloadLog</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/RerateCdrDownloadLog} obj Optional instance to populate.
   * @return {module:model/RerateCdrDownloadLog} The populated <code>RerateCdrDownloadLog</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('create_on')) {
        obj['create_on'] = ApiClient.convertToType(data['create_on'], 'Date');
      }
      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'Number');
      }
      if (data.hasOwnProperty('download_file')) {
        obj['download_file'] = ApiClient.convertToType(data['download_file'], 'String');
      }
      if (data.hasOwnProperty('create_by')) {
        obj['create_by'] = ApiClient.convertToType(data['create_by'], 'String');
      }
      if (data.hasOwnProperty('status')) {
        obj['status'] = ApiClient.convertToType(data['status'], 'String');
      }
      if (data.hasOwnProperty('finished_time')) {
        obj['finished_time'] = ApiClient.convertToType(data['finished_time'], 'Date');
      }
    }
    return obj;
  }

  /**
   * @member {Date} create_on
   */
  exports.prototype['create_on'] = undefined;
  /**
   * @member {Number} id
   */
  exports.prototype['id'] = undefined;
  /**
   * @member {String} download_file
   */
  exports.prototype['download_file'] = undefined;
  /**
   * @member {String} create_by
   */
  exports.prototype['create_by'] = undefined;
  /**
   * @member {module:model/RerateCdrDownloadLog.StatusEnum} status
   * @default 'waiting'
   */
  exports.prototype['status'] = 'waiting';
  /**
   * @member {Date} finished_time
   */
  exports.prototype['finished_time'] = undefined;


  /**
   * Allowed values for the <code>status</code> property.
   * @enum {String}
   * @readonly
   */
  exports.StatusEnum = {
    /**
     * value: "waiting"
     * @const
     */
    "waiting": "waiting",
    /**
     * value: "done"
     * @const
     */
    "done": "done",
    /**
     * value: "progress"
     * @const
     */
    "progress": "progress",
    /**
     * value: "error"
     * @const
     */
    "error": "error"  };


  return exports;
}));


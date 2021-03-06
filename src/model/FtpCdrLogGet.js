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
    define(['ApiClient', 'model/FtpCdrLogDetailGet'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./FtpCdrLogDetailGet'));
  } else {
    // Browser globals (root is window)
    if (!root.DnlApi) {
      root.DnlApi = {};
    }
    root.DnlApi.FtpCdrLogGet = factory(root.DnlApi.ApiClient, root.DnlApi.FtpCdrLogDetailGet);
  }
}(this, function(ApiClient, FtpCdrLogDetailGet) {
  'use strict';




  /**
   * The FtpCdrLogGet model module.
   * @module model/FtpCdrLogGet
   * @version 1.2.62
   */

  /**
   * Constructs a new <code>FtpCdrLogGet</code>.
   * @alias module:model/FtpCdrLogGet
   * @class
   */
  var exports = function() {
    var _this = this;












  };

  /**
   * Constructs a <code>FtpCdrLogGet</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/FtpCdrLogGet} obj Optional instance to populate.
   * @return {module:model/FtpCdrLogGet} The populated <code>FtpCdrLogGet</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('status')) {
        obj['status'] = ApiClient.convertToType(data['status'], 'String');
      }
      if (data.hasOwnProperty('result')) {
        obj['result'] = ApiClient.convertToType(data['result'], [FtpCdrLogDetailGet]);
      }
      if (data.hasOwnProperty('ftp_ip')) {
        obj['ftp_ip'] = ApiClient.convertToType(data['ftp_ip'], 'String');
      }
      if (data.hasOwnProperty('cdr_end_time')) {
        obj['cdr_end_time'] = ApiClient.convertToType(data['cdr_end_time'], 'Date');
      }
      if (data.hasOwnProperty('pid')) {
        obj['pid'] = ApiClient.convertToType(data['pid'], 'Number');
      }
      if (data.hasOwnProperty('ftp_end_time')) {
        obj['ftp_end_time'] = ApiClient.convertToType(data['ftp_end_time'], 'Date');
      }
      if (data.hasOwnProperty('cdr_start_time')) {
        obj['cdr_start_time'] = ApiClient.convertToType(data['cdr_start_time'], 'Date');
      }
      if (data.hasOwnProperty('ftp_dir')) {
        obj['ftp_dir'] = ApiClient.convertToType(data['ftp_dir'], 'String');
      }
      if (data.hasOwnProperty('client_alias')) {
        obj['client_alias'] = ApiClient.convertToType(data['client_alias'], 'String');
      }
      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'Number');
      }
      if (data.hasOwnProperty('ftp_start_time')) {
        obj['ftp_start_time'] = ApiClient.convertToType(data['ftp_start_time'], 'Date');
      }
    }
    return obj;
  }

  /**
   * @member {module:model/FtpCdrLogGet.StatusEnum} status
   * @default 'initial'
   */
  exports.prototype['status'] = 'initial';
  /**
   * @member {Array.<module:model/FtpCdrLogDetailGet>} result
   */
  exports.prototype['result'] = undefined;
  /**
   * @member {String} ftp_ip
   */
  exports.prototype['ftp_ip'] = undefined;
  /**
   * @member {Date} cdr_end_time
   */
  exports.prototype['cdr_end_time'] = undefined;
  /**
   * @member {Number} pid
   */
  exports.prototype['pid'] = undefined;
  /**
   * @member {Date} ftp_end_time
   */
  exports.prototype['ftp_end_time'] = undefined;
  /**
   * @member {Date} cdr_start_time
   */
  exports.prototype['cdr_start_time'] = undefined;
  /**
   * @member {String} ftp_dir
   */
  exports.prototype['ftp_dir'] = undefined;
  /**
   * @member {String} client_alias
   */
  exports.prototype['client_alias'] = undefined;
  /**
   * @member {Number} id
   */
  exports.prototype['id'] = undefined;
  /**
   * @member {Date} ftp_start_time
   */
  exports.prototype['ftp_start_time'] = undefined;


  /**
   * Allowed values for the <code>status</code> property.
   * @enum {String}
   * @readonly
   */
  exports.StatusEnum = {
    /**
     * value: "initial"
     * @const
     */
    "initial": "initial",
    /**
     * value: "in process"
     * @const
     */
    "in process": "in process",
    /**
     * value: "finished"
     * @const
     */
    "finished": "finished",
    /**
     * value: "error"
     * @const
     */
    "error": "error",
    /**
     * value: "ftp finished"
     * @const
     */
    "ftp finished": "ftp finished",
    /**
     * value: "ftp error"
     * @const
     */
    "ftp error": "ftp error"  };


  return exports;
}));



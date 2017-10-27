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
    root.DnlApi.RateSendGet = factory(root.DnlApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The RateSendGet model module.
   * @module model/RateSendGet
   * @version 1.2.10
   */

  /**
   * Constructs a new <code>RateSendGet</code>.
   * @alias module:model/RateSendGet
   * @class
   */
  var exports = function() {
    var _this = this;















  };

  /**
   * Constructs a <code>RateSendGet</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/RateSendGet} obj Optional instance to populate.
   * @return {module:model/RateSendGet} The populated <code>RateSendGet</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('is_email_alert')) {
        obj['is_email_alert'] = ApiClient.convertToType(data['is_email_alert'], 'Boolean');
      }
      if (data.hasOwnProperty('job_id')) {
        obj['job_id'] = ApiClient.convertToType(data['job_id'], 'Number');
      }
      if (data.hasOwnProperty('completed_records')) {
        obj['completed_records'] = ApiClient.convertToType(data['completed_records'], 'Number');
      }
      if (data.hasOwnProperty('rate_table_id')) {
        obj['rate_table_id'] = ApiClient.convertToType(data['rate_table_id'], 'Number');
      }
      if (data.hasOwnProperty('status')) {
        obj['status'] = ApiClient.convertToType(data['status'], 'String');
      }
      if (data.hasOwnProperty('file')) {
        obj['file'] = ApiClient.convertToType(data['file'], 'String');
      }
      if (data.hasOwnProperty('create_time')) {
        obj['create_time'] = ApiClient.convertToType(data['create_time'], 'Date');
      }
      if (data.hasOwnProperty('is_disable')) {
        obj['is_disable'] = ApiClient.convertToType(data['is_disable'], 'Boolean');
      }
      if (data.hasOwnProperty('error')) {
        obj['error'] = ApiClient.convertToType(data['error'], 'String');
      }
      if (data.hasOwnProperty('trunks')) {
        obj['trunks'] = ApiClient.convertToType(data['trunks'], ['Number']);
      }
      if (data.hasOwnProperty('effective_date')) {
        obj['effective_date'] = ApiClient.convertToType(data['effective_date'], 'Date');
      }
      if (data.hasOwnProperty('download_deadline')) {
        obj['download_deadline'] = ApiClient.convertToType(data['download_deadline'], 'Date');
      }
      if (data.hasOwnProperty('total_records')) {
        obj['total_records'] = ApiClient.convertToType(data['total_records'], 'Number');
      }
      if (data.hasOwnProperty('format')) {
        obj['format'] = ApiClient.convertToType(data['format'], 'String');
      }
    }
    return obj;
  }

  /**
   * @member {Boolean} is_email_alert
   */
  exports.prototype['is_email_alert'] = undefined;
  /**
   * @member {Number} job_id
   */
  exports.prototype['job_id'] = undefined;
  /**
   * @member {Number} completed_records
   */
  exports.prototype['completed_records'] = undefined;
  /**
   * @member {Number} rate_table_id
   */
  exports.prototype['rate_table_id'] = undefined;
  /**
   * @member {module:model/RateSendGet.StatusEnum} status
   * @default 'waiting'
   */
  exports.prototype['status'] = 'waiting';
  /**
   * @member {String} file
   */
  exports.prototype['file'] = undefined;
  /**
   * @member {Date} create_time
   */
  exports.prototype['create_time'] = undefined;
  /**
   * @member {Boolean} is_disable
   */
  exports.prototype['is_disable'] = undefined;
  /**
   * @member {String} error
   */
  exports.prototype['error'] = undefined;
  /**
   * @member {Array.<Number>} trunks
   */
  exports.prototype['trunks'] = undefined;
  /**
   * @member {Date} effective_date
   */
  exports.prototype['effective_date'] = undefined;
  /**
   * @member {Date} download_deadline
   */
  exports.prototype['download_deadline'] = undefined;
  /**
   * @member {Number} total_records
   */
  exports.prototype['total_records'] = undefined;
  /**
   * @member {module:model/RateSendGet.FormatEnum} format
   * @default 'csv'
   */
  exports.prototype['format'] = 'csv';


  /**
   * Allowed values for the <code>status</code> property.
   * @enum {String}
   * @readonly
   */
  exports.StatusEnum = {
    /**
     * value: "generated"
     * @const
     */
    "generated": "generated",
    /**
     * value: "waiting"
     * @const
     */
    "waiting": "waiting",
    /**
     * value: "sent success"
     * @const
     */
    "sent success": "sent success",
    /**
     * value: "sent"
     * @const
     */
    "sent": "sent",
    /**
     * value: "sent failed"
     * @const
     */
    "sent failed": "sent failed"  };

  /**
   * Allowed values for the <code>format</code> property.
   * @enum {String}
   * @readonly
   */
  exports.FormatEnum = {
    /**
     * value: "xls"
     * @const
     */
    "xls": "xls",
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


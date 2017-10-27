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
    root.DnlApi.ScheduledReportLog = factory(root.DnlApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The ScheduledReportLog model module.
   * @module model/ScheduledReportLog
   * @version 1.2.10
   */

  /**
   * Constructs a new <code>ScheduledReportLog</code>.
   * @alias module:model/ScheduledReportLog
   * @class
   */
  var exports = function() {
    var _this = this;






  };

  /**
   * Constructs a <code>ScheduledReportLog</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ScheduledReportLog} obj Optional instance to populate.
   * @return {module:model/ScheduledReportLog} The populated <code>ScheduledReportLog</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('email_to')) {
        obj['email_to'] = ApiClient.convertToType(data['email_to'], 'String');
      }
      if (data.hasOwnProperty('execute_time')) {
        obj['execute_time'] = ApiClient.convertToType(data['execute_time'], 'Date');
      }
      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'Number');
      }
      if (data.hasOwnProperty('attachment_path')) {
        obj['attachment_path'] = ApiClient.convertToType(data['attachment_path'], 'String');
      }
      if (data.hasOwnProperty('report_name')) {
        obj['report_name'] = ApiClient.convertToType(data['report_name'], 'String');
      }
    }
    return obj;
  }

  /**
   * @member {String} email_to
   */
  exports.prototype['email_to'] = undefined;
  /**
   * @member {Date} execute_time
   */
  exports.prototype['execute_time'] = undefined;
  /**
   * @member {Number} id
   */
  exports.prototype['id'] = undefined;
  /**
   * @member {String} attachment_path
   */
  exports.prototype['attachment_path'] = undefined;
  /**
   * @member {String} report_name
   */
  exports.prototype['report_name'] = undefined;



  return exports;
}));


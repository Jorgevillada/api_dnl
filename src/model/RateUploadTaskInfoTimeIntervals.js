/**
 * DNL API
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: 1.2.62
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
    root.DnlApi.RateUploadTaskInfoTimeIntervals = factory(root.DnlApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The RateUploadTaskInfoTimeIntervals model module.
   * @module model/RateUploadTaskInfoTimeIntervals
   * @version 1.2.62
   */

  /**
   * Constructs a new <code>RateUploadTaskInfoTimeIntervals</code>.
   * @alias module:model/RateUploadTaskInfoTimeIntervals
   * @class
   */
  var exports = function() {
    var _this = this;




  };

  /**
   * Constructs a <code>RateUploadTaskInfoTimeIntervals</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/RateUploadTaskInfoTimeIntervals} obj Optional instance to populate.
   * @return {module:model/RateUploadTaskInfoTimeIntervals} The populated <code>RateUploadTaskInfoTimeIntervals</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('min_time')) {
        obj['min_time'] = ApiClient.convertToType(data['min_time'], 'Number');
      }
      if (data.hasOwnProperty('code')) {
        obj['code'] = ApiClient.convertToType(data['code'], 'String');
      }
      if (data.hasOwnProperty('interval')) {
        obj['interval'] = ApiClient.convertToType(data['interval'], 'Number');
      }
    }
    return obj;
  }

  /**
   * @member {Number} min_time
   */
  exports.prototype['min_time'] = undefined;
  /**
   * @member {String} code
   * @default 'null'
   */
  exports.prototype['code'] = 'null';
  /**
   * @member {Number} interval
   */
  exports.prototype['interval'] = undefined;



  return exports;
}));



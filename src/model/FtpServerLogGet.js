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
    root.DnlApi.FtpServerLogGet = factory(root.DnlApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The FtpServerLogGet model module.
   * @module model/FtpServerLogGet
   * @version 1.2.10
   */

  /**
   * Constructs a new <code>FtpServerLogGet</code>.
   * @alias module:model/FtpServerLogGet
   * @class
   */
  var exports = function() {
    var _this = this;





  };

  /**
   * Constructs a <code>FtpServerLogGet</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/FtpServerLogGet} obj Optional instance to populate.
   * @return {module:model/FtpServerLogGet} The populated <code>FtpServerLogGet</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('cmd')) {
        obj['cmd'] = ApiClient.convertToType(data['cmd'], 'String');
      }
      if (data.hasOwnProperty('responce')) {
        obj['responce'] = ApiClient.convertToType(data['responce'], 'String');
      }
      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'Number');
      }
      if (data.hasOwnProperty('time')) {
        obj['time'] = ApiClient.convertToType(data['time'], 'Date');
      }
    }
    return obj;
  }

  /**
   * @member {String} cmd
   */
  exports.prototype['cmd'] = undefined;
  /**
   * @member {String} responce
   */
  exports.prototype['responce'] = undefined;
  /**
   * @member {Number} id
   */
  exports.prototype['id'] = undefined;
  /**
   * @member {Date} time
   */
  exports.prototype['time'] = undefined;



  return exports;
}));



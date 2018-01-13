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
    root.DnlApi.QosTotal = factory(root.DnlApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The QosTotal model module.
   * @module model/QosTotal
   * @version 1.2.62
   */

  /**
   * Constructs a new <code>QosTotal</code>.
   * @alias module:model/QosTotal
   * @class
   */
  var exports = function() {
    var _this = this;











  };

  /**
   * Constructs a <code>QosTotal</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/QosTotal} obj Optional instance to populate.
   * @return {module:model/QosTotal} The populated <code>QosTotal</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('report_time')) {
        obj['report_time'] = ApiClient.convertToType(data['report_time'], 'Date');
      }
      if (data.hasOwnProperty('ingress_cps')) {
        obj['ingress_cps'] = ApiClient.convertToType(data['ingress_cps'], 'Number');
      }
      if (data.hasOwnProperty('server_port')) {
        obj['server_port'] = ApiClient.convertToType(data['server_port'], 'Number');
      }
      if (data.hasOwnProperty('channels')) {
        obj['channels'] = ApiClient.convertToType(data['channels'], 'Number');
      }
      if (data.hasOwnProperty('egress_cps')) {
        obj['egress_cps'] = ApiClient.convertToType(data['egress_cps'], 'Number');
      }
      if (data.hasOwnProperty('cps')) {
        obj['cps'] = ApiClient.convertToType(data['cps'], 'Number');
      }
      if (data.hasOwnProperty('egress_channels')) {
        obj['egress_channels'] = ApiClient.convertToType(data['egress_channels'], 'Number');
      }
      if (data.hasOwnProperty('call')) {
        obj['call'] = ApiClient.convertToType(data['call'], 'Number');
      }
      if (data.hasOwnProperty('server_ip')) {
        obj['server_ip'] = ApiClient.convertToType(data['server_ip'], 'String');
      }
      if (data.hasOwnProperty('ingress_channels')) {
        obj['ingress_channels'] = ApiClient.convertToType(data['ingress_channels'], 'Number');
      }
    }
    return obj;
  }

  /**
   * @member {Date} report_time
   */
  exports.prototype['report_time'] = undefined;
  /**
   * @member {Number} ingress_cps
   */
  exports.prototype['ingress_cps'] = undefined;
  /**
   * @member {Number} server_port
   */
  exports.prototype['server_port'] = undefined;
  /**
   * @member {Number} channels
   */
  exports.prototype['channels'] = undefined;
  /**
   * @member {Number} egress_cps
   */
  exports.prototype['egress_cps'] = undefined;
  /**
   * @member {Number} cps
   */
  exports.prototype['cps'] = undefined;
  /**
   * @member {Number} egress_channels
   */
  exports.prototype['egress_channels'] = undefined;
  /**
   * @member {Number} call
   */
  exports.prototype['call'] = undefined;
  /**
   * @member {String} server_ip
   */
  exports.prototype['server_ip'] = undefined;
  /**
   * @member {Number} ingress_channels
   */
  exports.prototype['ingress_channels'] = undefined;



  return exports;
}));



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
    root.DnlApi.ClientCdrSimulateCall = factory(root.DnlApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The ClientCdrSimulateCall model module.
   * @module model/ClientCdrSimulateCall
   * @version 1.2.62
   */

  /**
   * Constructs a new <code>ClientCdrSimulateCall</code>.
   * @alias module:model/ClientCdrSimulateCall
   * @class
   */
  var exports = function() {
    var _this = this;







  };

  /**
   * Constructs a <code>ClientCdrSimulateCall</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ClientCdrSimulateCall} obj Optional instance to populate.
   * @return {module:model/ClientCdrSimulateCall} The populated <code>ClientCdrSimulateCall</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('server')) {
        obj['server'] = ApiClient.convertToType(data['server'], 'String');
      }
      if (data.hasOwnProperty('dnis')) {
        obj['dnis'] = ApiClient.convertToType(data['dnis'], 'String');
      }
      if (data.hasOwnProperty('call_time')) {
        obj['call_time'] = ApiClient.convertToType(data['call_time'], 'Date');
      }
      if (data.hasOwnProperty('ingress_trunk')) {
        obj['ingress_trunk'] = ApiClient.convertToType(data['ingress_trunk'], 'Number');
      }
      if (data.hasOwnProperty('ingress_host')) {
        obj['ingress_host'] = ApiClient.convertToType(data['ingress_host'], 'String');
      }
      if (data.hasOwnProperty('ani')) {
        obj['ani'] = ApiClient.convertToType(data['ani'], 'String');
      }
    }
    return obj;
  }

  /**
   * @member {String} server
   */
  exports.prototype['server'] = undefined;
  /**
   * @member {String} dnis
   */
  exports.prototype['dnis'] = undefined;
  /**
   * @member {Date} call_time
   */
  exports.prototype['call_time'] = undefined;
  /**
   * @member {Number} ingress_trunk
   */
  exports.prototype['ingress_trunk'] = undefined;
  /**
   * @member {String} ingress_host
   */
  exports.prototype['ingress_host'] = undefined;
  /**
   * @member {String} ani
   */
  exports.prototype['ani'] = undefined;



  return exports;
}));



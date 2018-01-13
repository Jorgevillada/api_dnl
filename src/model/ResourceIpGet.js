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
    root.DnlApi.ResourceIpGet = factory(root.DnlApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The ResourceIpGet model module.
   * @module model/ResourceIpGet
   * @version 1.2.62
   */

  /**
   * Constructs a new <code>ResourceIpGet</code>.
   * @alias module:model/ResourceIpGet
   * @class
   */
  var exports = function() {
    var _this = this;





  };

  /**
   * Constructs a <code>ResourceIpGet</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ResourceIpGet} obj Optional instance to populate.
   * @return {module:model/ResourceIpGet} The populated <code>ResourceIpGet</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('fqdn')) {
        obj['fqdn'] = ApiClient.convertToType(data['fqdn'], 'String');
      }
      if (data.hasOwnProperty('sip_rpid')) {
        obj['sip_rpid'] = ApiClient.convertToType(data['sip_rpid'], 'String');
      }
      if (data.hasOwnProperty('port')) {
        obj['port'] = ApiClient.convertToType(data['port'], 'Number');
      }
      if (data.hasOwnProperty('ip')) {
        obj['ip'] = ApiClient.convertToType(data['ip'], 'String');
      }
    }
    return obj;
  }

  /**
   * @member {String} fqdn
   */
  exports.prototype['fqdn'] = undefined;
  /**
   * @member {String} sip_rpid
   */
  exports.prototype['sip_rpid'] = undefined;
  /**
   * @member {Number} port
   */
  exports.prototype['port'] = undefined;
  /**
   * @member {String} ip
   */
  exports.prototype['ip'] = undefined;



  return exports;
}));



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
    root.DnlApi.ResourceIpDidGet = factory(root.DnlApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The ResourceIpDidGet model module.
   * @module model/ResourceIpDidGet
   * @version 1.2.10
   */

  /**
   * Constructs a new <code>ResourceIpDidGet</code>.
   * @alias module:model/ResourceIpDidGet
   * @class
   */
  var exports = function() {
    var _this = this;




  };

  /**
   * Constructs a <code>ResourceIpDidGet</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ResourceIpDidGet} obj Optional instance to populate.
   * @return {module:model/ResourceIpDidGet} The populated <code>ResourceIpDidGet</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('ip')) {
        obj['ip'] = ApiClient.convertToType(data['ip'], 'String');
      }
      if (data.hasOwnProperty('port')) {
        obj['port'] = ApiClient.convertToType(data['port'], 'Number');
      }
      if (data.hasOwnProperty('resource_ip_id')) {
        obj['resource_ip_id'] = ApiClient.convertToType(data['resource_ip_id'], 'Number');
      }
    }
    return obj;
  }

  /**
   * @member {String} ip
   */
  exports.prototype['ip'] = undefined;
  /**
   * @member {Number} port
   */
  exports.prototype['port'] = undefined;
  /**
   * @member {Number} resource_ip_id
   */
  exports.prototype['resource_ip_id'] = undefined;



  return exports;
}));



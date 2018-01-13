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
    define(['ApiClient', 'model/ResourceIp'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./ResourceIp'));
  } else {
    // Browser globals (root is window)
    if (!root.DnlApi) {
      root.DnlApi = {};
    }
    root.DnlApi.ClientResourceDid = factory(root.DnlApi.ApiClient, root.DnlApi.ResourceIp);
  }
}(this, function(ApiClient, ResourceIp) {
  'use strict';




  /**
   * The ClientResourceDid model module.
   * @module model/ClientResourceDid
   * @version 1.2.62
   */

  /**
   * Constructs a new <code>ClientResourceDid</code>.
   * @alias module:model/ClientResourceDid
   * @class
   */
  var exports = function() {
    var _this = this;




  };

  /**
   * Constructs a <code>ClientResourceDid</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ClientResourceDid} obj Optional instance to populate.
   * @return {module:model/ClientResourceDid} The populated <code>ClientResourceDid</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('billing_by_port')) {
        obj['billing_by_port'] = ApiClient.convertToType(data['billing_by_port'], 'String');
      }
      if (data.hasOwnProperty('media_type')) {
        obj['media_type'] = ApiClient.convertToType(data['media_type'], 'String');
      }
      if (data.hasOwnProperty('ip')) {
        obj['ip'] = ApiClient.convertToType(data['ip'], [ResourceIp]);
      }
    }
    return obj;
  }

  /**
   * @member {module:model/ClientResourceDid.BillingByPortEnum} billing_by_port
   * @default 'by minutes'
   */
  exports.prototype['billing_by_port'] = 'by minutes';
  /**
   * @member {module:model/ClientResourceDid.MediaTypeEnum} media_type
   * @default 'Proxy Media + Transcoding'
   */
  exports.prototype['media_type'] = 'Proxy Media + Transcoding';
  /**
   * @member {Array.<module:model/ResourceIp>} ip
   */
  exports.prototype['ip'] = undefined;


  /**
   * Allowed values for the <code>billing_by_port</code> property.
   * @enum {String}
   * @readonly
   */
  exports.BillingByPortEnum = {
    /**
     * value: "by minutes"
     * @const
     */
    "minutes": "by minutes",
    /**
     * value: "by port"
     * @const
     */
    "port": "by port"  };

  /**
   * Allowed values for the <code>media_type</code> property.
   * @enum {String}
   * @readonly
   */
  exports.MediaTypeEnum = {
    /**
     * value: "Proxy Media + Transcoding"
     * @const
     */
    "Proxy Media + Transcoding": "Proxy Media + Transcoding",
    /**
     * value: "Proxy Media"
     * @const
     */
    "Proxy Media": "Proxy Media",
    /**
     * value: "Bypass Media"
     * @const
     */
    "Bypass Media": "Bypass Media"  };


  return exports;
}));



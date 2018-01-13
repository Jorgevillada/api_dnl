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
    define(['ApiClient', 'model/ResourceIpGet'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./ResourceIpGet'));
  } else {
    // Browser globals (root is window)
    if (!root.DnlApi) {
      root.DnlApi = {};
    }
    root.DnlApi.ClientPortalEgressTrunk = factory(root.DnlApi.ApiClient, root.DnlApi.ResourceIpGet);
  }
}(this, function(ApiClient, ResourceIpGet) {
  'use strict';




  /**
   * The ClientPortalEgressTrunk model module.
   * @module model/ClientPortalEgressTrunk
   * @version 1.2.62
   */

  /**
   * Constructs a new <code>ClientPortalEgressTrunk</code>.
   * @alias module:model/ClientPortalEgressTrunk
   * @class
   */
  var exports = function() {
    var _this = this;






  };

  /**
   * Constructs a <code>ClientPortalEgressTrunk</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ClientPortalEgressTrunk} obj Optional instance to populate.
   * @return {module:model/ClientPortalEgressTrunk} The populated <code>ClientPortalEgressTrunk</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('egress_name')) {
        obj['egress_name'] = ApiClient.convertToType(data['egress_name'], 'String');
      }
      if (data.hasOwnProperty('cps_limit')) {
        obj['cps_limit'] = ApiClient.convertToType(data['cps_limit'], 'Number');
      }
      if (data.hasOwnProperty('rate_table_name')) {
        obj['rate_table_name'] = ApiClient.convertToType(data['rate_table_name'], 'String');
      }
      if (data.hasOwnProperty('host')) {
        obj['host'] = ApiClient.convertToType(data['host'], [ResourceIpGet]);
      }
      if (data.hasOwnProperty('call_limit')) {
        obj['call_limit'] = ApiClient.convertToType(data['call_limit'], 'Number');
      }
    }
    return obj;
  }

  /**
   * @member {String} egress_name
   */
  exports.prototype['egress_name'] = undefined;
  /**
   * @member {Number} cps_limit
   */
  exports.prototype['cps_limit'] = undefined;
  /**
   * @member {String} rate_table_name
   */
  exports.prototype['rate_table_name'] = undefined;
  /**
   * @member {Array.<module:model/ResourceIpGet>} host
   */
  exports.prototype['host'] = undefined;
  /**
   * @member {Number} call_limit
   */
  exports.prototype['call_limit'] = undefined;



  return exports;
}));



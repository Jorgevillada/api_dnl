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
    root.DnlApi.IngressTrunkRateSummaryGet = factory(root.DnlApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The IngressTrunkRateSummaryGet model module.
   * @module model/IngressTrunkRateSummaryGet
   * @version 1.2.10
   */

  /**
   * Constructs a new <code>IngressTrunkRateSummaryGet</code>.
   * @alias module:model/IngressTrunkRateSummaryGet
   * @class
   */
  var exports = function() {
    var _this = this;







  };

  /**
   * Constructs a <code>IngressTrunkRateSummaryGet</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/IngressTrunkRateSummaryGet} obj Optional instance to populate.
   * @return {module:model/IngressTrunkRateSummaryGet} The populated <code>IngressTrunkRateSummaryGet</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('carrier_id')) {
        obj['carrier_id'] = ApiClient.convertToType(data['carrier_id'], 'Number');
      }
      if (data.hasOwnProperty('rate_email')) {
        obj['rate_email'] = ApiClient.convertToType(data['rate_email'], 'String');
      }
      if (data.hasOwnProperty('trunk_id')) {
        obj['trunk_id'] = ApiClient.convertToType(data['trunk_id'], 'Number');
      }
      if (data.hasOwnProperty('carrier')) {
        obj['carrier'] = ApiClient.convertToType(data['carrier'], 'String');
      }
      if (data.hasOwnProperty('ingress_trunk_name')) {
        obj['ingress_trunk_name'] = ApiClient.convertToType(data['ingress_trunk_name'], 'String');
      }
      if (data.hasOwnProperty('prefix')) {
        obj['prefix'] = ApiClient.convertToType(data['prefix'], 'String');
      }
    }
    return obj;
  }

  /**
   * @member {Number} carrier_id
   */
  exports.prototype['carrier_id'] = undefined;
  /**
   * @member {String} rate_email
   */
  exports.prototype['rate_email'] = undefined;
  /**
   * @member {Number} trunk_id
   */
  exports.prototype['trunk_id'] = undefined;
  /**
   * @member {String} carrier
   */
  exports.prototype['carrier'] = undefined;
  /**
   * @member {String} ingress_trunk_name
   */
  exports.prototype['ingress_trunk_name'] = undefined;
  /**
   * @member {String} prefix
   */
  exports.prototype['prefix'] = undefined;



  return exports;
}));



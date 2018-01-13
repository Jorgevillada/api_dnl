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
    define(['ApiClient', 'model/ResourceIp'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./ResourceIp'));
  } else {
    // Browser globals (root is window)
    if (!root.DnlApi) {
      root.DnlApi = {};
    }
    root.DnlApi.ResourceWithIpsGet = factory(root.DnlApi.ApiClient, root.DnlApi.ResourceIp);
  }
}(this, function(ApiClient, ResourceIp) {
  'use strict';




  /**
   * The ResourceWithIpsGet model module.
   * @module model/ResourceWithIpsGet
   * @version 1.2.62
   */

  /**
   * Constructs a new <code>ResourceWithIpsGet</code>.
   * @alias module:model/ResourceWithIpsGet
   * @class
   */
  var exports = function() {
    var _this = this;





  };

  /**
   * Constructs a <code>ResourceWithIpsGet</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ResourceWithIpsGet} obj Optional instance to populate.
   * @return {module:model/ResourceWithIpsGet} The populated <code>ResourceWithIpsGet</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('rate_table_id')) {
        obj['rate_table_id'] = ApiClient.convertToType(data['rate_table_id'], 'String');
      }
      if (data.hasOwnProperty('ip')) {
        obj['ip'] = ApiClient.convertToType(data['ip'], [ResourceIp]);
      }
      if (data.hasOwnProperty('route_strategy_id')) {
        obj['route_strategy_id'] = ApiClient.convertToType(data['route_strategy_id'], 'String');
      }
      if (data.hasOwnProperty('trunk_id')) {
        obj['trunk_id'] = ApiClient.convertToType(data['trunk_id'], 'Number');
      }
    }
    return obj;
  }

  /**
   * @member {String} rate_table_id
   */
  exports.prototype['rate_table_id'] = undefined;
  /**
   * @member {Array.<module:model/ResourceIp>} ip
   */
  exports.prototype['ip'] = undefined;
  /**
   * @member {String} route_strategy_id
   */
  exports.prototype['route_strategy_id'] = undefined;
  /**
   * @member {Number} trunk_id
   */
  exports.prototype['trunk_id'] = undefined;



  return exports;
}));



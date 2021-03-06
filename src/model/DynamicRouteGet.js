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
    define(['ApiClient', 'model/DynamicRouteItemGetTrunk'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./DynamicRouteItemGetTrunk'));
  } else {
    // Browser globals (root is window)
    if (!root.DnlApi) {
      root.DnlApi = {};
    }
    root.DnlApi.DynamicRouteGet = factory(root.DnlApi.ApiClient, root.DnlApi.DynamicRouteItemGetTrunk);
  }
}(this, function(ApiClient, DynamicRouteItemGetTrunk) {
  'use strict';




  /**
   * The DynamicRouteGet model module.
   * @module model/DynamicRouteGet
   * @version 1.2.62
   */

  /**
   * Constructs a new <code>DynamicRouteGet</code>.
   * @alias module:model/DynamicRouteGet
   * @class
   */
  var exports = function() {
    var _this = this;











  };

  /**
   * Constructs a <code>DynamicRouteGet</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/DynamicRouteGet} obj Optional instance to populate.
   * @return {module:model/DynamicRouteGet} The populated <code>DynamicRouteGet</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('usage_count')) {
        obj['usage_count'] = ApiClient.convertToType(data['usage_count'], 'Number');
      }
      if (data.hasOwnProperty('last_modified')) {
        obj['last_modified'] = ApiClient.convertToType(data['last_modified'], 'String');
      }
      if (data.hasOwnProperty('modified_by')) {
        obj['modified_by'] = ApiClient.convertToType(data['modified_by'], 'String');
      }
      if (data.hasOwnProperty('route_rule_name')) {
        obj['route_rule_name'] = ApiClient.convertToType(data['route_rule_name'], 'String');
      }
      if (data.hasOwnProperty('time_profile_id')) {
        obj['time_profile_id'] = ApiClient.convertToType(data['time_profile_id'], 'Number');
      }
      if (data.hasOwnProperty('time_profile_name')) {
        obj['time_profile_name'] = ApiClient.convertToType(data['time_profile_name'], 'String');
      }
      if (data.hasOwnProperty('dynamic_route_id')) {
        obj['dynamic_route_id'] = ApiClient.convertToType(data['dynamic_route_id'], 'Number');
      }
      if (data.hasOwnProperty('qos_cycle')) {
        obj['qos_cycle'] = ApiClient.convertToType(data['qos_cycle'], 'String');
      }
      if (data.hasOwnProperty('name')) {
        obj['name'] = ApiClient.convertToType(data['name'], 'String');
      }
      if (data.hasOwnProperty('egress_trunks')) {
        obj['egress_trunks'] = ApiClient.convertToType(data['egress_trunks'], [DynamicRouteItemGetTrunk]);
      }
    }
    return obj;
  }

  /**
   * @member {Number} usage_count
   */
  exports.prototype['usage_count'] = undefined;
  /**
   * @member {String} last_modified
   */
  exports.prototype['last_modified'] = undefined;
  /**
   * @member {String} modified_by
   */
  exports.prototype['modified_by'] = undefined;
  /**
   * @member {module:model/DynamicRouteGet.RouteRuleNameEnum} route_rule_name
   * @default 'LCR'
   */
  exports.prototype['route_rule_name'] = 'LCR';
  /**
   * @member {Number} time_profile_id
   */
  exports.prototype['time_profile_id'] = undefined;
  /**
   * @member {String} time_profile_name
   */
  exports.prototype['time_profile_name'] = undefined;
  /**
   * @member {Number} dynamic_route_id
   */
  exports.prototype['dynamic_route_id'] = undefined;
  /**
   * @member {module:model/DynamicRouteGet.QosCycleEnum} qos_cycle
   * @default 'not set'
   */
  exports.prototype['qos_cycle'] = 'not set';
  /**
   * @member {String} name
   */
  exports.prototype['name'] = undefined;
  /**
   * @member {Array.<module:model/DynamicRouteItemGetTrunk>} egress_trunks
   */
  exports.prototype['egress_trunks'] = undefined;


  /**
   * Allowed values for the <code>route_rule_name</code> property.
   * @enum {String}
   * @readonly
   */
  exports.RouteRuleNameEnum = {
    /**
     * value: "By LCR"
     * @const
     */
    "By LCR": "By LCR",
    /**
     * value: "By ASR"
     * @const
     */
    "By ASR": "By ASR",
    /**
     * value: "By ACD"
     * @const
     */
    "By ACD": "By ACD",
    /**
     * value: "by maximum ASR"
     * @const
     */
    "by maximum ASR": "by maximum ASR",
    /**
     * value: "by maximum ACD"
     * @const
     */
    "by maximum ACD": "by maximum ACD",
    /**
     * value: "LCR"
     * @const
     */
    "LCR": "LCR"  };

  /**
   * Allowed values for the <code>qos_cycle</code> property.
   * @enum {String}
   * @readonly
   */
  exports.QosCycleEnum = {
    /**
     * value: "not set"
     * @const
     */
    "not set": "not set",
    /**
     * value: "15 minutes"
     * @const
     */
    "15 minutes": "15 minutes",
    /**
     * value: "30 minutes"
     * @const
     */
    "30 minutes": "30 minutes",
    /**
     * value: "1 hours"
     * @const
     */
    "1 hours": "1 hours",
    /**
     * value: "1 days"
     * @const
     */
    "1 days": "1 days"  };


  return exports;
}));



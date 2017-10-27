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
    define(['ApiClient', 'model/DynamicRouteItem'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./DynamicRouteItem'));
  } else {
    // Browser globals (root is window)
    if (!root.DnlApi) {
      root.DnlApi = {};
    }
    root.DnlApi.DynamicRoute = factory(root.DnlApi.ApiClient, root.DnlApi.DynamicRouteItem);
  }
}(this, function(ApiClient, DynamicRouteItem) {
  'use strict';




  /**
   * The DynamicRoute model module.
   * @module model/DynamicRoute
   * @version 1.2.10
   */

  /**
   * Constructs a new <code>DynamicRoute</code>.
   * @alias module:model/DynamicRoute
   * @class
   */
  var exports = function() {
    var _this = this;






  };

  /**
   * Constructs a <code>DynamicRoute</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/DynamicRoute} obj Optional instance to populate.
   * @return {module:model/DynamicRoute} The populated <code>DynamicRoute</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('name')) {
        obj['name'] = ApiClient.convertToType(data['name'], 'String');
      }
      if (data.hasOwnProperty('route_rule_name')) {
        obj['route_rule_name'] = ApiClient.convertToType(data['route_rule_name'], 'String');
      }
      if (data.hasOwnProperty('egress_trunks')) {
        obj['egress_trunks'] = ApiClient.convertToType(data['egress_trunks'], [DynamicRouteItem]);
      }
      if (data.hasOwnProperty('qos_cycle')) {
        obj['qos_cycle'] = ApiClient.convertToType(data['qos_cycle'], 'String');
      }
      if (data.hasOwnProperty('time_profile_id')) {
        obj['time_profile_id'] = ApiClient.convertToType(data['time_profile_id'], 'Number');
      }
    }
    return obj;
  }

  /**
   * @member {String} name
   */
  exports.prototype['name'] = undefined;
  /**
   * @member {module:model/DynamicRoute.RouteRuleNameEnum} route_rule_name
   * @default 'LCR'
   */
  exports.prototype['route_rule_name'] = 'LCR';
  /**
   * @member {Array.<module:model/DynamicRouteItem>} egress_trunks
   */
  exports.prototype['egress_trunks'] = undefined;
  /**
   * @member {module:model/DynamicRoute.QosCycleEnum} qos_cycle
   * @default '15 minutes'
   */
  exports.prototype['qos_cycle'] = '15 minutes';
  /**
   * @member {Number} time_profile_id
   */
  exports.prototype['time_profile_id'] = undefined;


  /**
   * Allowed values for the <code>route_rule_name</code> property.
   * @enum {String}
   * @readonly
   */
  exports.RouteRuleNameEnum = {
    /**
     * value: "by maximum ACD"
     * @const
     */
    "by maximum ACD": "by maximum ACD",
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
     * value: "at the lowest cost"
     * @const
     */
    "at the lowest cost": "at the lowest cost",
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
     * value: "1 days"
     * @const
     */
    "1 days": "1 days",
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
     * value: "15 minutes"
     * @const
     */
    "15 minutes": "15 minutes"  };


  return exports;
}));


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
    define(['ApiClient', 'model/ResourceCodecsRefGet', 'model/ResourceIp', 'model/ResourceTranslationRefGet'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./ResourceCodecsRefGet'), require('./ResourceIp'), require('./ResourceTranslationRefGet'));
  } else {
    // Browser globals (root is window)
    if (!root.DnlApi) {
      root.DnlApi = {};
    }
    root.DnlApi.EgressTrunkGet = factory(root.DnlApi.ApiClient, root.DnlApi.ResourceCodecsRefGet, root.DnlApi.ResourceIp, root.DnlApi.ResourceTranslationRefGet);
  }
}(this, function(ApiClient, ResourceCodecsRefGet, ResourceIp, ResourceTranslationRefGet) {
  'use strict';




  /**
   * The EgressTrunkGet model module.
   * @module model/EgressTrunkGet
   * @version 1.2.10
   */

  /**
   * Constructs a new <code>EgressTrunkGet</code>.
   * @alias module:model/EgressTrunkGet
   * @class
   */
  var exports = function() {
    var _this = this;








































  };

  /**
   * Constructs a <code>EgressTrunkGet</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/EgressTrunkGet} obj Optional instance to populate.
   * @return {module:model/EgressTrunkGet} The populated <code>EgressTrunkGet</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('name')) {
        obj['name'] = ApiClient.convertToType(data['name'], 'String');
      }
      if (data.hasOwnProperty('max_duration')) {
        obj['max_duration'] = ApiClient.convertToType(data['max_duration'], 'Number');
      }
      if (data.hasOwnProperty('cps_limit')) {
        obj['cps_limit'] = ApiClient.convertToType(data['cps_limit'], 'Number');
      }
      if (data.hasOwnProperty('call_limit')) {
        obj['call_limit'] = ApiClient.convertToType(data['call_limit'], 'Number');
      }
      if (data.hasOwnProperty('pass_lrn')) {
        obj['pass_lrn'] = ApiClient.convertToType(data['pass_lrn'], 'Number');
      }
      if (data.hasOwnProperty('route_plan_id')) {
        obj['route_plan_id'] = ApiClient.convertToType(data['route_plan_id'], 'Number');
      }
      if (data.hasOwnProperty('resource_template_id')) {
        obj['resource_template_id'] = ApiClient.convertToType(data['resource_template_id'], 'Number');
      }
      if (data.hasOwnProperty('egress')) {
        obj['egress'] = ApiClient.convertToType(data['egress'], 'Boolean');
      }
      if (data.hasOwnProperty('min_duration')) {
        obj['min_duration'] = ApiClient.convertToType(data['min_duration'], 'Number');
      }
      if (data.hasOwnProperty('create_time')) {
        obj['create_time'] = ApiClient.convertToType(data['create_time'], 'Date');
      }
      if (data.hasOwnProperty('host_routing_strategy')) {
        obj['host_routing_strategy'] = ApiClient.convertToType(data['host_routing_strategy'], 'String');
      }
      if (data.hasOwnProperty('carrier_id')) {
        obj['carrier_id'] = ApiClient.convertToType(data['carrier_id'], 'String');
      }
      if (data.hasOwnProperty('usage_count')) {
        obj['usage_count'] = ApiClient.convertToType(data['usage_count'], 'Number');
      }
      if (data.hasOwnProperty('update_by')) {
        obj['update_by'] = ApiClient.convertToType(data['update_by'], 'String');
      }
      if (data.hasOwnProperty('media_timeout')) {
        obj['media_timeout'] = ApiClient.convertToType(data['media_timeout'], 'Number');
      }
      if (data.hasOwnProperty('pdd')) {
        obj['pdd'] = ApiClient.convertToType(data['pdd'], 'Number');
      }
      if (data.hasOwnProperty('ani_cap_limit')) {
        obj['ani_cap_limit'] = ApiClient.convertToType(data['ani_cap_limit'], 'Number');
      }
      if (data.hasOwnProperty('trunk_name')) {
        obj['trunk_name'] = ApiClient.convertToType(data['trunk_name'], 'String');
      }
      if (data.hasOwnProperty('prefix')) {
        obj['prefix'] = ApiClient.convertToType(data['prefix'], 'String');
      }
      if (data.hasOwnProperty('t38')) {
        obj['t38'] = ApiClient.convertToType(data['t38'], 'Boolean');
      }
      if (data.hasOwnProperty('is_active')) {
        obj['is_active'] = ApiClient.convertToType(data['is_active'], 'Boolean');
      }
      if (data.hasOwnProperty('ani_cps_limit')) {
        obj['ani_cps_limit'] = ApiClient.convertToType(data['ani_cps_limit'], 'Number');
      }
      if (data.hasOwnProperty('min_profit_type')) {
        obj['min_profit_type'] = ApiClient.convertToType(data['min_profit_type'], 'String');
      }
      if (data.hasOwnProperty('dnis_cps_limit')) {
        obj['dnis_cps_limit'] = ApiClient.convertToType(data['dnis_cps_limit'], 'Number');
      }
      if (data.hasOwnProperty('rate_table_id')) {
        obj['rate_table_id'] = ApiClient.convertToType(data['rate_table_id'], 'Number');
      }
      if (data.hasOwnProperty('resource_id')) {
        obj['resource_id'] = ApiClient.convertToType(data['resource_id'], 'Number');
      }
      if (data.hasOwnProperty('ring_timeout')) {
        obj['ring_timeout'] = ApiClient.convertToType(data['ring_timeout'], 'Number');
      }
      if (data.hasOwnProperty('trunk_id')) {
        obj['trunk_id'] = ApiClient.convertToType(data['trunk_id'], 'Number');
      }
      if (data.hasOwnProperty('update_at')) {
        obj['update_at'] = ApiClient.convertToType(data['update_at'], 'Date');
      }
      if (data.hasOwnProperty('min_profit_value')) {
        obj['min_profit_value'] = ApiClient.convertToType(data['min_profit_value'], 'Number');
      }
      if (data.hasOwnProperty('codes')) {
        obj['codes'] = ApiClient.convertToType(data['codes'], [ResourceTranslationRefGet]);
      }
      if (data.hasOwnProperty('ip')) {
        obj['ip'] = ApiClient.convertToType(data['ip'], [ResourceIp]);
      }
      if (data.hasOwnProperty('rpid_id_type')) {
        obj['rpid_id_type'] = ApiClient.convertToType(data['rpid_id_type'], 'String');
      }
      if (data.hasOwnProperty('bypass_media')) {
        obj['bypass_media'] = ApiClient.convertToType(data['bypass_media'], 'String');
      }
      if (data.hasOwnProperty('carrier')) {
        obj['carrier'] = ApiClient.convertToType(data['carrier'], 'String');
      }
      if (data.hasOwnProperty('enfource_cid')) {
        obj['enfource_cid'] = ApiClient.convertToType(data['enfource_cid'], 'Boolean');
      }
      if (data.hasOwnProperty('codecs')) {
        obj['codecs'] = ApiClient.convertToType(data['codecs'], [ResourceCodecsRefGet]);
      }
      if (data.hasOwnProperty('route_plan_name')) {
        obj['route_plan_name'] = ApiClient.convertToType(data['route_plan_name'], 'String');
      }
      if (data.hasOwnProperty('dnis_cap_limit')) {
        obj['dnis_cap_limit'] = ApiClient.convertToType(data['dnis_cap_limit'], 'Number');
      }
    }
    return obj;
  }

  /**
   * @member {String} name
   */
  exports.prototype['name'] = undefined;
  /**
   * @member {Number} max_duration
   */
  exports.prototype['max_duration'] = undefined;
  /**
   * @member {Number} cps_limit
   */
  exports.prototype['cps_limit'] = undefined;
  /**
   * @member {Number} call_limit
   */
  exports.prototype['call_limit'] = undefined;
  /**
   * @member {Number} pass_lrn
   */
  exports.prototype['pass_lrn'] = undefined;
  /**
   * @member {Number} route_plan_id
   */
  exports.prototype['route_plan_id'] = undefined;
  /**
   * @member {Number} resource_template_id
   */
  exports.prototype['resource_template_id'] = undefined;
  /**
   * @member {Boolean} egress
   */
  exports.prototype['egress'] = undefined;
  /**
   * @member {Number} min_duration
   */
  exports.prototype['min_duration'] = undefined;
  /**
   * @member {Date} create_time
   */
  exports.prototype['create_time'] = undefined;
  /**
   * @member {module:model/EgressTrunkGet.HostRoutingStrategyEnum} host_routing_strategy
   * @default 'top-down'
   */
  exports.prototype['host_routing_strategy'] = 'top-down';
  /**
   * @member {String} carrier_id
   */
  exports.prototype['carrier_id'] = undefined;
  /**
   * @member {Number} usage_count
   */
  exports.prototype['usage_count'] = undefined;
  /**
   * @member {String} update_by
   */
  exports.prototype['update_by'] = undefined;
  /**
   * @member {Number} media_timeout
   */
  exports.prototype['media_timeout'] = undefined;
  /**
   * @member {Number} pdd
   */
  exports.prototype['pdd'] = undefined;
  /**
   * @member {Number} ani_cap_limit
   */
  exports.prototype['ani_cap_limit'] = undefined;
  /**
   * @member {String} trunk_name
   */
  exports.prototype['trunk_name'] = undefined;
  /**
   * @member {String} prefix
   */
  exports.prototype['prefix'] = undefined;
  /**
   * @member {Boolean} t38
   */
  exports.prototype['t38'] = undefined;
  /**
   * @member {Boolean} is_active
   */
  exports.prototype['is_active'] = undefined;
  /**
   * @member {Number} ani_cps_limit
   */
  exports.prototype['ani_cps_limit'] = undefined;
  /**
   * @member {module:model/EgressTrunkGet.MinProfitTypeEnum} min_profit_type
   * @default 'percentage'
   */
  exports.prototype['min_profit_type'] = 'percentage';
  /**
   * @member {Number} dnis_cps_limit
   */
  exports.prototype['dnis_cps_limit'] = undefined;
  /**
   * @member {Number} rate_table_id
   */
  exports.prototype['rate_table_id'] = undefined;
  /**
   * @member {Number} resource_id
   */
  exports.prototype['resource_id'] = undefined;
  /**
   * @member {Number} ring_timeout
   */
  exports.prototype['ring_timeout'] = undefined;
  /**
   * @member {Number} trunk_id
   */
  exports.prototype['trunk_id'] = undefined;
  /**
   * @member {Date} update_at
   */
  exports.prototype['update_at'] = undefined;
  /**
   * @member {Number} min_profit_value
   */
  exports.prototype['min_profit_value'] = undefined;
  /**
   * @member {Array.<module:model/ResourceTranslationRefGet>} codes
   */
  exports.prototype['codes'] = undefined;
  /**
   * @member {Array.<module:model/ResourceIp>} ip
   */
  exports.prototype['ip'] = undefined;
  /**
   * @member {module:model/EgressTrunkGet.RpidIdTypeEnum} rpid_id_type
   * @default 'None'
   */
  exports.prototype['rpid_id_type'] = 'None';
  /**
   * @member {module:model/EgressTrunkGet.BypassMediaEnum} bypass_media
   * @default 'Proxy Media + Transcoding'
   */
  exports.prototype['bypass_media'] = 'Proxy Media + Transcoding';
  /**
   * @member {String} carrier
   */
  exports.prototype['carrier'] = undefined;
  /**
   * @member {Boolean} enfource_cid
   */
  exports.prototype['enfource_cid'] = undefined;
  /**
   * @member {Array.<module:model/ResourceCodecsRefGet>} codecs
   */
  exports.prototype['codecs'] = undefined;
  /**
   * @member {String} route_plan_name
   */
  exports.prototype['route_plan_name'] = undefined;
  /**
   * @member {Number} dnis_cap_limit
   */
  exports.prototype['dnis_cap_limit'] = undefined;


  /**
   * Allowed values for the <code>host_routing_strategy</code> property.
   * @enum {String}
   * @readonly
   */
  exports.HostRoutingStrategyEnum = {
    /**
     * value: "top-down"
     * @const
     */
    "top-down": "top-down",
    /**
     * value: "round-robin"
     * @const
     */
    "round-robin": "round-robin"  };

  /**
   * Allowed values for the <code>min_profit_type</code> property.
   * @enum {String}
   * @readonly
   */
  exports.MinProfitTypeEnum = {
    /**
     * value: "value"
     * @const
     */
    "value": "value",
    /**
     * value: "percentage"
     * @const
     */
    "percentage": "percentage"  };

  /**
   * Allowed values for the <code>rpid_id_type</code> property.
   * @enum {String}
   * @readonly
   */
  exports.RpidIdTypeEnum = {
    /**
     * value: "Subscriber"
     * @const
     */
    "Subscriber": "Subscriber",
    /**
     * value: "User"
     * @const
     */
    "User": "User",
    /**
     * value: "Proxy"
     * @const
     */
    "Proxy": "Proxy",
    /**
     * value: "None"
     * @const
     */
    "None": "None",
    /**
     * value: "Term"
     * @const
     */
    "Term": "Term"  };

  /**
   * Allowed values for the <code>bypass_media</code> property.
   * @enum {String}
   * @readonly
   */
  exports.BypassMediaEnum = {
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


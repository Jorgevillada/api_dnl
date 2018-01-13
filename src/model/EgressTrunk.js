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
    define(['ApiClient', 'model/ResourceIp', 'model/ResourceIpRegGateway', 'model/ResourceIpRegUser', 'model/ResourcePrefixModify'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./ResourceIp'), require('./ResourceIpRegGateway'), require('./ResourceIpRegUser'), require('./ResourcePrefixModify'));
  } else {
    // Browser globals (root is window)
    if (!root.DnlApi) {
      root.DnlApi = {};
    }
    root.DnlApi.EgressTrunk = factory(root.DnlApi.ApiClient, root.DnlApi.ResourceIp, root.DnlApi.ResourceIpRegGateway, root.DnlApi.ResourceIpRegUser, root.DnlApi.ResourcePrefixModify);
  }
}(this, function(ApiClient, ResourceIp, ResourceIpRegGateway, ResourceIpRegUser, ResourcePrefixModify) {
  'use strict';




  /**
   * The EgressTrunk model module.
   * @module model/EgressTrunk
   * @version 1.2.62
   */

  /**
   * Constructs a new <code>EgressTrunk</code>.
   * @alias module:model/EgressTrunk
   * @class
   */
  var exports = function() {
    var _this = this;





























































  };

  /**
   * Constructs a <code>EgressTrunk</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/EgressTrunk} obj Optional instance to populate.
   * @return {module:model/EgressTrunk} The populated <code>EgressTrunk</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('ani_cap_limit')) {
        obj['ani_cap_limit'] = ApiClient.convertToType(data['ani_cap_limit'], 'Number');
      }
      if (data.hasOwnProperty('rate_decimal')) {
        obj['rate_decimal'] = ApiClient.convertToType(data['rate_decimal'], 'Number');
      }
      if (data.hasOwnProperty('codes')) {
        obj['codes'] = ApiClient.convertToType(data['codes'], ['String']);
      }
      if (data.hasOwnProperty('enfource_cid')) {
        obj['enfource_cid'] = ApiClient.convertToType(data['enfource_cid'], 'Boolean');
      }
      if (data.hasOwnProperty('is_active')) {
        obj['is_active'] = ApiClient.convertToType(data['is_active'], 'Boolean');
      }
      if (data.hasOwnProperty('auth_type')) {
        obj['auth_type'] = ApiClient.convertToType(data['auth_type'], 'String');
      }
      if (data.hasOwnProperty('prefix')) {
        obj['prefix'] = ApiClient.convertToType(data['prefix'], 'String');
      }
      if (data.hasOwnProperty('max_duration')) {
        obj['max_duration'] = ApiClient.convertToType(data['max_duration'], 'Number');
      }
      if (data.hasOwnProperty('rpid_privacy')) {
        obj['rpid_privacy'] = ApiClient.convertToType(data['rpid_privacy'], 'String');
      }
      if (data.hasOwnProperty('ip')) {
        obj['ip'] = ApiClient.convertToType(data['ip'], [ResourceIp]);
      }
      if (data.hasOwnProperty('ani_cps_limit')) {
        obj['ani_cps_limit'] = ApiClient.convertToType(data['ani_cps_limit'], 'Number');
      }
      if (data.hasOwnProperty('transaction_fee_id')) {
        obj['transaction_fee_id'] = ApiClient.convertToType(data['transaction_fee_id'], 'Number');
      }
      if (data.hasOwnProperty('authorization_type')) {
        obj['authorization_type'] = ApiClient.convertToType(data['authorization_type'], 'String');
      }
      if (data.hasOwnProperty('host_routing_strategy')) {
        obj['host_routing_strategy'] = ApiClient.convertToType(data['host_routing_strategy'], 'String');
      }
      if (data.hasOwnProperty('oli')) {
        obj['oli'] = ApiClient.convertToType(data['oli'], 'Boolean');
      }
      if (data.hasOwnProperty('codecs')) {
        obj['codecs'] = ApiClient.convertToType(data['codecs'], ['String']);
      }
      if (data.hasOwnProperty('priv')) {
        obj['priv'] = ApiClient.convertToType(data['priv'], 'Boolean');
      }
      if (data.hasOwnProperty('prefixes')) {
        obj['prefixes'] = ApiClient.convertToType(data['prefixes'], [ResourcePrefixModify]);
      }
      if (data.hasOwnProperty('paid')) {
        obj['paid'] = ApiClient.convertToType(data['paid'], 'Boolean');
      }
      if (data.hasOwnProperty('cli_type')) {
        obj['cli_type'] = ApiClient.convertToType(data['cli_type'], 'String');
      }
      if (data.hasOwnProperty('rpid_party')) {
        obj['rpid_party'] = ApiClient.convertToType(data['rpid_party'], 'String');
      }
      if (data.hasOwnProperty('name')) {
        obj['name'] = ApiClient.convertToType(data['name'], 'String');
      }
      if (data.hasOwnProperty('reg_user')) {
        obj['reg_user'] = ApiClient.convertToType(data['reg_user'], [ResourceIpRegUser]);
      }
      if (data.hasOwnProperty('reg_gateway')) {
        obj['reg_gateway'] = ApiClient.convertToType(data['reg_gateway'], [ResourceIpRegGateway]);
      }
      if (data.hasOwnProperty('pass_lrn')) {
        obj['pass_lrn'] = ApiClient.convertToType(data['pass_lrn'], 'Number');
      }
      if (data.hasOwnProperty('account_id')) {
        obj['account_id'] = ApiClient.convertToType(data['account_id'], 'String');
      }
      if (data.hasOwnProperty('us_other')) {
        obj['us_other'] = ApiClient.convertToType(data['us_other'], 'String');
      }
      if (data.hasOwnProperty('pci')) {
        obj['pci'] = ApiClient.convertToType(data['pci'], 'Boolean');
      }
      if (data.hasOwnProperty('min_profit_type')) {
        obj['min_profit_type'] = ApiClient.convertToType(data['min_profit_type'], 'String');
      }
      if (data.hasOwnProperty('service_type')) {
        obj['service_type'] = ApiClient.convertToType(data['service_type'], 'String');
      }
      if (data.hasOwnProperty('dnis_cap_limit')) {
        obj['dnis_cap_limit'] = ApiClient.convertToType(data['dnis_cap_limit'], 'Number');
      }
      if (data.hasOwnProperty('ignore_early_media')) {
        obj['ignore_early_media'] = ApiClient.convertToType(data['ignore_early_media'], 'Boolean');
      }
      if (data.hasOwnProperty('trunk_type2')) {
        obj['trunk_type2'] = ApiClient.convertToType(data['trunk_type2'], 'String');
      }
      if (data.hasOwnProperty('amount_per_port')) {
        obj['amount_per_port'] = ApiClient.convertToType(data['amount_per_port'], 'Number');
      }
      if (data.hasOwnProperty('display_name')) {
        obj['display_name'] = ApiClient.convertToType(data['display_name'], 'Boolean');
      }
      if (data.hasOwnProperty('ring_timeout')) {
        obj['ring_timeout'] = ApiClient.convertToType(data['ring_timeout'], 'Number');
      }
      if (data.hasOwnProperty('cps_limit')) {
        obj['cps_limit'] = ApiClient.convertToType(data['cps_limit'], 'Number');
      }
      if (data.hasOwnProperty('pdd')) {
        obj['pdd'] = ApiClient.convertToType(data['pdd'], 'Number');
      }
      if (data.hasOwnProperty('billing_method')) {
        obj['billing_method'] = ApiClient.convertToType(data['billing_method'], 'String');
      }
      if (data.hasOwnProperty('enable_global_404_blocking')) {
        obj['enable_global_404_blocking'] = ApiClient.convertToType(data['enable_global_404_blocking'], 'Boolean');
      }
      if (data.hasOwnProperty('media_timeout')) {
        obj['media_timeout'] = ApiClient.convertToType(data['media_timeout'], 'Number');
      }
      if (data.hasOwnProperty('rate_rounding')) {
        obj['rate_rounding'] = ApiClient.convertToType(data['rate_rounding'], 'String');
      }
      if (data.hasOwnProperty('route_plan_id')) {
        obj['route_plan_id'] = ApiClient.convertToType(data['route_plan_id'], 'Number');
      }
      if (data.hasOwnProperty('rate_table_id')) {
        obj['rate_table_id'] = ApiClient.convertToType(data['rate_table_id'], 'Number');
      }
      if (data.hasOwnProperty('min_profit_value')) {
        obj['min_profit_value'] = ApiClient.convertToType(data['min_profit_value'], 'Number');
      }
      if (data.hasOwnProperty('jurisdiction_use_dnis')) {
        obj['jurisdiction_use_dnis'] = ApiClient.convertToType(data['jurisdiction_use_dnis'], 'String');
      }
      if (data.hasOwnProperty('media_type')) {
        obj['media_type'] = ApiClient.convertToType(data['media_type'], 'String');
      }
      if (data.hasOwnProperty('rpid_id_type')) {
        obj['rpid_id_type'] = ApiClient.convertToType(data['rpid_id_type'], 'String');
      }
      if (data.hasOwnProperty('call_limit')) {
        obj['call_limit'] = ApiClient.convertToType(data['call_limit'], 'Number');
      }
      if (data.hasOwnProperty('pass_through')) {
        obj['pass_through'] = ApiClient.convertToType(data['pass_through'], 'String');
      }
      if (data.hasOwnProperty('bypass_media')) {
        obj['bypass_media'] = ApiClient.convertToType(data['bypass_media'], 'String');
      }
      if (data.hasOwnProperty('trunk_name')) {
        obj['trunk_name'] = ApiClient.convertToType(data['trunk_name'], 'String');
      }
      if (data.hasOwnProperty('dnis_cps_limit')) {
        obj['dnis_cps_limit'] = ApiClient.convertToType(data['dnis_cps_limit'], 'Number');
      }
      if (data.hasOwnProperty('rpid')) {
        obj['rpid'] = ApiClient.convertToType(data['rpid'], 'String');
      }
      if (data.hasOwnProperty('ignore_early_no_sdp')) {
        obj['ignore_early_no_sdp'] = ApiClient.convertToType(data['ignore_early_no_sdp'], 'Boolean');
      }
      if (data.hasOwnProperty('product_id')) {
        obj['product_id'] = ApiClient.convertToType(data['product_id'], 'Number');
      }
      if (data.hasOwnProperty('div')) {
        obj['div'] = ApiClient.convertToType(data['div'], 'Boolean');
      }
      if (data.hasOwnProperty('t38')) {
        obj['t38'] = ApiClient.convertToType(data['t38'], 'Boolean');
      }
      if (data.hasOwnProperty('min_duration')) {
        obj['min_duration'] = ApiClient.convertToType(data['min_duration'], 'Number');
      }
      if (data.hasOwnProperty('rpid_screen')) {
        obj['rpid_screen'] = ApiClient.convertToType(data['rpid_screen'], 'String');
      }
    }
    return obj;
  }

  /**
   * @member {Number} ani_cap_limit
   */
  exports.prototype['ani_cap_limit'] = undefined;
  /**
   * @member {Number} rate_decimal
   * @default 6
   */
  exports.prototype['rate_decimal'] = 6;
  /**
   * @member {Array.<String>} codes
   */
  exports.prototype['codes'] = undefined;
  /**
   * @member {Boolean} enfource_cid
   */
  exports.prototype['enfource_cid'] = undefined;
  /**
   * @member {Boolean} is_active
   */
  exports.prototype['is_active'] = undefined;
  /**
   * @member {module:model/EgressTrunk.AuthTypeEnum} auth_type
   * @default 'Authorized by Host Only'
   */
  exports.prototype['auth_type'] = 'Authorized by Host Only';
  /**
   * @member {String} prefix
   */
  exports.prototype['prefix'] = undefined;
  /**
   * @member {Number} max_duration
   */
  exports.prototype['max_duration'] = undefined;
  /**
   * @member {module:model/EgressTrunk.RpidPrivacyEnum} rpid_privacy
   * @default 'None'
   */
  exports.prototype['rpid_privacy'] = 'None';
  /**
   * @member {Array.<module:model/ResourceIp>} ip
   */
  exports.prototype['ip'] = undefined;
  /**
   * @member {Number} ani_cps_limit
   */
  exports.prototype['ani_cps_limit'] = undefined;
  /**
   * @member {Number} transaction_fee_id
   */
  exports.prototype['transaction_fee_id'] = undefined;
  /**
   * @member {module:model/EgressTrunk.AuthorizationTypeEnum} authorization_type
   * @default 'Authorized by Host Only'
   */
  exports.prototype['authorization_type'] = 'Authorized by Host Only';
  /**
   * @member {module:model/EgressTrunk.HostRoutingStrategyEnum} host_routing_strategy
   * @default 'top-down'
   */
  exports.prototype['host_routing_strategy'] = 'top-down';
  /**
   * @member {Boolean} oli
   */
  exports.prototype['oli'] = undefined;
  /**
   * @member {Array.<String>} codecs
   */
  exports.prototype['codecs'] = undefined;
  /**
   * @member {Boolean} priv
   */
  exports.prototype['priv'] = undefined;
  /**
   * @member {Array.<module:model/ResourcePrefixModify>} prefixes
   */
  exports.prototype['prefixes'] = undefined;
  /**
   * @member {Boolean} paid
   */
  exports.prototype['paid'] = undefined;
  /**
   * @member {module:model/EgressTrunk.CliTypeEnum} cli_type
   * @default 'white'
   */
  exports.prototype['cli_type'] = 'white';
  /**
   * @member {module:model/EgressTrunk.RpidPartyEnum} rpid_party
   * @default 'None'
   */
  exports.prototype['rpid_party'] = 'None';
  /**
   * @member {String} name
   */
  exports.prototype['name'] = undefined;
  /**
   * @member {Array.<module:model/ResourceIpRegUser>} reg_user
   */
  exports.prototype['reg_user'] = undefined;
  /**
   * @member {Array.<module:model/ResourceIpRegGateway>} reg_gateway
   */
  exports.prototype['reg_gateway'] = undefined;
  /**
   * @member {Number} pass_lrn
   */
  exports.prototype['pass_lrn'] = undefined;
  /**
   * @member {String} account_id
   */
  exports.prototype['account_id'] = undefined;
  /**
   * @member {module:model/EgressTrunk.UsOtherEnum} us_other
   * @default 'other'
   */
  exports.prototype['us_other'] = 'other';
  /**
   * @member {Boolean} pci
   */
  exports.prototype['pci'] = undefined;
  /**
   * @member {module:model/EgressTrunk.MinProfitTypeEnum} min_profit_type
   * @default 'percentage'
   */
  exports.prototype['min_profit_type'] = 'percentage';
  /**
   * @member {module:model/EgressTrunk.ServiceTypeEnum} service_type
   * @default 'Self Service'
   */
  exports.prototype['service_type'] = 'Self Service';
  /**
   * @member {Number} dnis_cap_limit
   */
  exports.prototype['dnis_cap_limit'] = undefined;
  /**
   * @member {Boolean} ignore_early_media
   */
  exports.prototype['ignore_early_media'] = undefined;
  /**
   * @member {module:model/EgressTrunk.TrunkType2Enum} trunk_type2
   * @default 'Termination Traffic'
   */
  exports.prototype['trunk_type2'] = 'Termination Traffic';
  /**
   * @member {Number} amount_per_port
   */
  exports.prototype['amount_per_port'] = undefined;
  /**
   * @member {Boolean} display_name
   */
  exports.prototype['display_name'] = undefined;
  /**
   * @member {Number} ring_timeout
   */
  exports.prototype['ring_timeout'] = undefined;
  /**
   * @member {Number} cps_limit
   */
  exports.prototype['cps_limit'] = undefined;
  /**
   * @member {Number} pdd
   */
  exports.prototype['pdd'] = undefined;
  /**
   * @member {module:model/EgressTrunk.BillingMethodEnum} billing_method
   * @default 'by minutes'
   */
  exports.prototype['billing_method'] = 'by minutes';
  /**
   * @member {Boolean} enable_global_404_blocking
   */
  exports.prototype['enable_global_404_blocking'] = undefined;
  /**
   * @member {Number} media_timeout
   */
  exports.prototype['media_timeout'] = undefined;
  /**
   * @member {module:model/EgressTrunk.RateRoundingEnum} rate_rounding
   * @default 'Up'
   */
  exports.prototype['rate_rounding'] = 'Up';
  /**
   * @member {Number} route_plan_id
   */
  exports.prototype['route_plan_id'] = undefined;
  /**
   * @member {Number} rate_table_id
   */
  exports.prototype['rate_table_id'] = undefined;
  /**
   * @member {Number} min_profit_value
   */
  exports.prototype['min_profit_value'] = undefined;
  /**
   * @member {module:model/EgressTrunk.JurisdictionUseDnisEnum} jurisdiction_use_dnis
   * @default 'LRN'
   */
  exports.prototype['jurisdiction_use_dnis'] = 'LRN';
  /**
   * @member {module:model/EgressTrunk.MediaTypeEnum} media_type
   * @default 'Proxy Media + Transcoding'
   */
  exports.prototype['media_type'] = 'Proxy Media + Transcoding';
  /**
   * @member {module:model/EgressTrunk.RpidIdTypeEnum} rpid_id_type
   * @default 'None'
   */
  exports.prototype['rpid_id_type'] = 'None';
  /**
   * @member {Number} call_limit
   */
  exports.prototype['call_limit'] = undefined;
  /**
   * @member {module:model/EgressTrunk.PassThroughEnum} pass_through
   * @default 'transparent'
   */
  exports.prototype['pass_through'] = 'transparent';
  /**
   * @member {module:model/EgressTrunk.BypassMediaEnum} bypass_media
   * @default 'Bypass Media'
   */
  exports.prototype['bypass_media'] = 'Bypass Media';
  /**
   * @member {String} trunk_name
   */
  exports.prototype['trunk_name'] = undefined;
  /**
   * @member {Number} dnis_cps_limit
   */
  exports.prototype['dnis_cps_limit'] = undefined;
  /**
   * @member {module:model/EgressTrunk.RpidEnum} rpid
   * @default 'Never'
   */
  exports.prototype['rpid'] = 'Never';
  /**
   * @member {Boolean} ignore_early_no_sdp
   */
  exports.prototype['ignore_early_no_sdp'] = undefined;
  /**
   * @member {Number} product_id
   */
  exports.prototype['product_id'] = undefined;
  /**
   * @member {Boolean} div
   */
  exports.prototype['div'] = undefined;
  /**
   * @member {Boolean} t38
   */
  exports.prototype['t38'] = undefined;
  /**
   * @member {Number} min_duration
   */
  exports.prototype['min_duration'] = undefined;
  /**
   * @member {module:model/EgressTrunk.RpidScreenEnum} rpid_screen
   * @default 'None'
   */
  exports.prototype['rpid_screen'] = 'None';


  /**
   * Allowed values for the <code>auth_type</code> property.
   * @enum {String}
   * @readonly
   */
  exports.AuthTypeEnum = {
    /**
     * value: "Authorized by Host Only"
     * @const
     */
    "Authorized by Host Only": "Authorized by Host Only",
    /**
     * value: "Authorized by SIP Registration"
     * @const
     */
    "Authorized by SIP Registration": "Authorized by SIP Registration",
    /**
     * value: "Register to gateway"
     * @const
     */
    "Register to gateway": "Register to gateway"  };

  /**
   * Allowed values for the <code>rpid_privacy</code> property.
   * @enum {String}
   * @readonly
   */
  exports.RpidPrivacyEnum = {
    /**
     * value: "None"
     * @const
     */
    "None": "None",
    /**
     * value: "Full"
     * @const
     */
    "Full": "Full",
    /**
     * value: "Name"
     * @const
     */
    "Name": "Name",
    /**
     * value: "Url"
     * @const
     */
    "Url": "Url",
    /**
     * value: "OFF"
     * @const
     */
    "OFF": "OFF",
    /**
     * value: "Ipaddr"
     * @const
     */
    "Ipaddr": "Ipaddr",
    /**
     * value: "Proxy"
     * @const
     */
    "Proxy": "Proxy"  };

  /**
   * Allowed values for the <code>authorization_type</code> property.
   * @enum {String}
   * @readonly
   */
  exports.AuthorizationTypeEnum = {
    /**
     * value: "Authorized by Host Only"
     * @const
     */
    "Authorized by Host Only": "Authorized by Host Only",
    /**
     * value: "Authorized by SIP Registration"
     * @const
     */
    "Authorized by SIP Registration": "Authorized by SIP Registration",
    /**
     * value: "Register to gateway"
     * @const
     */
    "Register to gateway": "Register to gateway"  };

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
   * Allowed values for the <code>cli_type</code> property.
   * @enum {String}
   * @readonly
   */
  exports.CliTypeEnum = {
    /**
     * value: "white"
     * @const
     */
    "white": "white",
    /**
     * value: "white non cli"
     * @const
     */
    "white non cli": "white non cli",
    /**
     * value: "gray"
     * @const
     */
    "gray": "gray"  };

  /**
   * Allowed values for the <code>rpid_party</code> property.
   * @enum {String}
   * @readonly
   */
  exports.RpidPartyEnum = {
    /**
     * value: "None"
     * @const
     */
    "None": "None",
    /**
     * value: "Calling"
     * @const
     */
    "Calling": "Calling",
    /**
     * value: "Called"
     * @const
     */
    "Called": "Called",
    /**
     * value: "Proxy"
     * @const
     */
    "Proxy": "Proxy"  };

  /**
   * Allowed values for the <code>us_other</code> property.
   * @enum {String}
   * @readonly
   */
  exports.UsOtherEnum = {
    /**
     * value: "other"
     * @const
     */
    "other": "other",
    /**
     * value: "intra"
     * @const
     */
    "intra": "intra",
    /**
     * value: "inter"
     * @const
     */
    "inter": "inter",
    /**
     * value: "highest"
     * @const
     */
    "highest": "highest"  };

  /**
   * Allowed values for the <code>min_profit_type</code> property.
   * @enum {String}
   * @readonly
   */
  exports.MinProfitTypeEnum = {
    /**
     * value: "percentage"
     * @const
     */
    "percentage": "percentage",
    /**
     * value: "value"
     * @const
     */
    "value": "value"  };

  /**
   * Allowed values for the <code>service_type</code> property.
   * @enum {String}
   * @readonly
   */
  exports.ServiceTypeEnum = {
    /**
     * value: "Self Service"
     * @const
     */
    "Self Service": "Self Service",
    /**
     * value: "Standand Deck"
     * @const
     */
    "Standand Deck": "Standand Deck"  };

  /**
   * Allowed values for the <code>trunk_type2</code> property.
   * @enum {String}
   * @readonly
   */
  exports.TrunkType2Enum = {
    /**
     * value: "Termination Traffic"
     * @const
     */
    "Termination Traffic": "Termination Traffic",
    /**
     * value: "DID Traffic"
     * @const
     */
    "DID Traffic": "DID Traffic"  };

  /**
   * Allowed values for the <code>billing_method</code> property.
   * @enum {String}
   * @readonly
   */
  exports.BillingMethodEnum = {
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
   * Allowed values for the <code>rate_rounding</code> property.
   * @enum {String}
   * @readonly
   */
  exports.RateRoundingEnum = {
    /**
     * value: "Up"
     * @const
     */
    "Up": "Up",
    /**
     * value: "Down"
     * @const
     */
    "Down": "Down"  };

  /**
   * Allowed values for the <code>jurisdiction_use_dnis</code> property.
   * @enum {String}
   * @readonly
   */
  exports.JurisdictionUseDnisEnum = {
    /**
     * value: "LRN"
     * @const
     */
    "LRN": "LRN",
    /**
     * value: "DNIS"
     * @const
     */
    "DNIS": "DNIS"  };

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

  /**
   * Allowed values for the <code>rpid_id_type</code> property.
   * @enum {String}
   * @readonly
   */
  exports.RpidIdTypeEnum = {
    /**
     * value: "None"
     * @const
     */
    "None": "None",
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
     * value: "Term"
     * @const
     */
    "Term": "Term",
    /**
     * value: "Proxy"
     * @const
     */
    "Proxy": "Proxy"  };

  /**
   * Allowed values for the <code>pass_through</code> property.
   * @enum {String}
   * @readonly
   */
  exports.PassThroughEnum = {
    /**
     * value: "transparent"
     * @const
     */
    "transparent": "transparent",
    /**
     * value: "not pass through the ban"
     * @const
     */
    "not pass through the ban": "not pass through the ban"  };

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

  /**
   * Allowed values for the <code>rpid</code> property.
   * @enum {String}
   * @readonly
   */
  exports.RpidEnum = {
    /**
     * value: "Never"
     * @const
     */
    "Never": "Never",
    /**
     * value: "Pass Through"
     * @const
     */
    "Pass Through": "Pass Through",
    /**
     * value: "Always"
     * @const
     */
    "Always": "Always"  };

  /**
   * Allowed values for the <code>rpid_screen</code> property.
   * @enum {String}
   * @readonly
   */
  exports.RpidScreenEnum = {
    /**
     * value: "None"
     * @const
     */
    "None": "None",
    /**
     * value: "No"
     * @const
     */
    "No": "No",
    /**
     * value: "Yes"
     * @const
     */
    "Yes": "Yes",
    /**
     * value: "Proxy"
     * @const
     */
    "Proxy": "Proxy"  };


  return exports;
}));



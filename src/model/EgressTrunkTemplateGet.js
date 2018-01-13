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
    define(['ApiClient', 'model/TrunkTemplateIp'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./TrunkTemplateIp'));
  } else {
    // Browser globals (root is window)
    if (!root.DnlApi) {
      root.DnlApi = {};
    }
    root.DnlApi.EgressTrunkTemplateGet = factory(root.DnlApi.ApiClient, root.DnlApi.TrunkTemplateIp);
  }
}(this, function(ApiClient, TrunkTemplateIp) {
  'use strict';




  /**
   * The EgressTrunkTemplateGet model module.
   * @module model/EgressTrunkTemplateGet
   * @version 1.2.62
   */

  /**
   * Constructs a new <code>EgressTrunkTemplateGet</code>.
   * @alias module:model/EgressTrunkTemplateGet
   * @class
   */
  var exports = function() {
    var _this = this;
























































  };

  /**
   * Constructs a <code>EgressTrunkTemplateGet</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/EgressTrunkTemplateGet} obj Optional instance to populate.
   * @return {module:model/EgressTrunkTemplateGet} The populated <code>EgressTrunkTemplateGet</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('ignore_early_nosdp')) {
        obj['ignore_early_nosdp'] = ApiClient.convertToType(data['ignore_early_nosdp'], 'Number');
      }
      if (data.hasOwnProperty('billing_rule')) {
        obj['billing_rule'] = ApiClient.convertToType(data['billing_rule'], 'Number');
      }
      if (data.hasOwnProperty('intl_route')) {
        obj['intl_route'] = ApiClient.convertToType(data['intl_route'], 'String');
      }
      if (data.hasOwnProperty('max_duration')) {
        obj['max_duration'] = ApiClient.convertToType(data['max_duration'], 'Number');
      }
      if (data.hasOwnProperty('profit_type')) {
        obj['profit_type'] = ApiClient.convertToType(data['profit_type'], 'String');
      }
      if (data.hasOwnProperty('create_on')) {
        obj['create_on'] = ApiClient.convertToType(data['create_on'], 'Date');
      }
      if (data.hasOwnProperty('used_by')) {
        obj['used_by'] = ApiClient.convertToType(data['used_by'], 'Number');
      }
      if (data.hasOwnProperty('priv')) {
        obj['priv'] = ApiClient.convertToType(data['priv'], 'Number');
      }
      if (data.hasOwnProperty('ip')) {
        obj['ip'] = ApiClient.convertToType(data['ip'], [TrunkTemplateIp]);
      }
      if (data.hasOwnProperty('billing_method')) {
        obj['billing_method'] = ApiClient.convertToType(data['billing_method'], 'Number');
      }
      if (data.hasOwnProperty('lnp_dipping')) {
        obj['lnp_dipping'] = ApiClient.convertToType(data['lnp_dipping'], 'Boolean');
      }
      if (data.hasOwnProperty('oli')) {
        obj['oli'] = ApiClient.convertToType(data['oli'], 'Number');
      }
      if (data.hasOwnProperty('canada_other')) {
        obj['canada_other'] = ApiClient.convertToType(data['canada_other'], 'String');
      }
      if (data.hasOwnProperty('profit_margin')) {
        obj['profit_margin'] = ApiClient.convertToType(data['profit_margin'], 'Number');
      }
      if (data.hasOwnProperty('paid')) {
        obj['paid'] = ApiClient.convertToType(data['paid'], 'Number');
      }
      if (data.hasOwnProperty('random_table_id')) {
        obj['random_table_id'] = ApiClient.convertToType(data['random_table_id'], 'Number');
      }
      if (data.hasOwnProperty('min_duration')) {
        obj['min_duration'] = ApiClient.convertToType(data['min_duration'], 'Number');
      }
      if (data.hasOwnProperty('rpid_party')) {
        obj['rpid_party'] = ApiClient.convertToType(data['rpid_party'], 'String');
      }
      if (data.hasOwnProperty('name')) {
        obj['name'] = ApiClient.convertToType(data['name'], 'String');
      }
      if (data.hasOwnProperty('rpid_privacy')) {
        obj['rpid_privacy'] = ApiClient.convertToType(data['rpid_privacy'], 'String');
      }
      if (data.hasOwnProperty('wait_ringtime180')) {
        obj['wait_ringtime180'] = ApiClient.convertToType(data['wait_ringtime180'], 'Number');
      }
      if (data.hasOwnProperty('resource_template_id')) {
        obj['resource_template_id'] = ApiClient.convertToType(data['resource_template_id'], 'Number');
      }
      if (data.hasOwnProperty('us_other')) {
        obj['us_other'] = ApiClient.convertToType(data['us_other'], 'String');
      }
      if (data.hasOwnProperty('trunk_type2')) {
        obj['trunk_type2'] = ApiClient.convertToType(data['trunk_type2'], 'String');
      }
      if (data.hasOwnProperty('create_by')) {
        obj['create_by'] = ApiClient.convertToType(data['create_by'], 'String');
      }
      if (data.hasOwnProperty('res_strategy')) {
        obj['res_strategy'] = ApiClient.convertToType(data['res_strategy'], 'String');
      }
      if (data.hasOwnProperty('info')) {
        obj['info'] = ApiClient.convertToType(data['info'], 'Number');
      }
      if (data.hasOwnProperty('pci')) {
        obj['pci'] = ApiClient.convertToType(data['pci'], 'Number');
      }
      if (data.hasOwnProperty('direction')) {
        obj['direction'] = ApiClient.convertToType(data['direction'], 'String');
      }
      if (data.hasOwnProperty('ignore_ring')) {
        obj['ignore_ring'] = ApiClient.convertToType(data['ignore_ring'], 'Boolean');
      }
      if (data.hasOwnProperty('re_invite')) {
        obj['re_invite'] = ApiClient.convertToType(data['re_invite'], 'Number');
      }
      if (data.hasOwnProperty('inband')) {
        obj['inband'] = ApiClient.convertToType(data['inband'], 'Number');
      }
      if (data.hasOwnProperty('rate_profile')) {
        obj['rate_profile'] = ApiClient.convertToType(data['rate_profile'], 'Number');
      }
      if (data.hasOwnProperty('codecs_str')) {
        obj['codecs_str'] = ApiClient.convertToType(data['codecs_str'], 'String');
      }
      if (data.hasOwnProperty('amount_per_port')) {
        obj['amount_per_port'] = ApiClient.convertToType(data['amount_per_port'], 'Number');
      }
      if (data.hasOwnProperty('trunk_type')) {
        obj['trunk_type'] = ApiClient.convertToType(data['trunk_type'], 'String');
      }
      if (data.hasOwnProperty('display_name')) {
        obj['display_name'] = ApiClient.convertToType(data['display_name'], 'Number');
      }
      if (data.hasOwnProperty('ring_timeout')) {
        obj['ring_timeout'] = ApiClient.convertToType(data['ring_timeout'], 'Number');
      }
      if (data.hasOwnProperty('resource')) {
        obj['resource'] = ApiClient.convertToType(data['resource'], ['String']);
      }
      if (data.hasOwnProperty('media_timeout')) {
        obj['media_timeout'] = ApiClient.convertToType(data['media_timeout'], 'Number');
      }
      if (data.hasOwnProperty('rate_rounding')) {
        obj['rate_rounding'] = ApiClient.convertToType(data['rate_rounding'], 'String');
      }
      if (data.hasOwnProperty('rate_table_id')) {
        obj['rate_table_id'] = ApiClient.convertToType(data['rate_table_id'], 'Number');
      }
      if (data.hasOwnProperty('rate_decimal')) {
        obj['rate_decimal'] = ApiClient.convertToType(data['rate_decimal'], 'Number');
      }
      if (data.hasOwnProperty('media_type')) {
        obj['media_type'] = ApiClient.convertToType(data['media_type'], 'String');
      }
      if (data.hasOwnProperty('rpid_id_type')) {
        obj['rpid_id_type'] = ApiClient.convertToType(data['rpid_id_type'], 'String');
      }
      if (data.hasOwnProperty('rfc2833')) {
        obj['rfc2833'] = ApiClient.convertToType(data['rfc2833'], 'Number');
      }
      if (data.hasOwnProperty('canada_route')) {
        obj['canada_route'] = ApiClient.convertToType(data['canada_route'], 'String');
      }
      if (data.hasOwnProperty('ignore_early_media')) {
        obj['ignore_early_media'] = ApiClient.convertToType(data['ignore_early_media'], 'Boolean');
      }
      if (data.hasOwnProperty('us_route')) {
        obj['us_route'] = ApiClient.convertToType(data['us_route'], 'String');
      }
      if (data.hasOwnProperty('lnp_dipping_rate')) {
        obj['lnp_dipping_rate'] = ApiClient.convertToType(data['lnp_dipping_rate'], 'Number');
      }
      if (data.hasOwnProperty('update_on')) {
        obj['update_on'] = ApiClient.convertToType(data['update_on'], 'Date');
      }
      if (data.hasOwnProperty('re_invite_interval')) {
        obj['re_invite_interval'] = ApiClient.convertToType(data['re_invite_interval'], 'Number');
      }
      if (data.hasOwnProperty('div')) {
        obj['div'] = ApiClient.convertToType(data['div'], 'Number');
      }
      if (data.hasOwnProperty('bill_by')) {
        obj['bill_by'] = ApiClient.convertToType(data['bill_by'], 'Number');
      }
      if (data.hasOwnProperty('rpid_screen')) {
        obj['rpid_screen'] = ApiClient.convertToType(data['rpid_screen'], 'String');
      }
    }
    return obj;
  }

  /**
   * @member {Number} ignore_early_nosdp
   */
  exports.prototype['ignore_early_nosdp'] = undefined;
  /**
   * @member {Number} billing_rule
   */
  exports.prototype['billing_rule'] = undefined;
  /**
   * @member {module:model/EgressTrunkTemplateGet.IntlRouteEnum} intl_route
   * @default 'other'
   */
  exports.prototype['intl_route'] = 'other';
  /**
   * @member {Number} max_duration
   */
  exports.prototype['max_duration'] = undefined;
  /**
   * @member {module:model/EgressTrunkTemplateGet.ProfitTypeEnum} profit_type
   * @default 'percentage'
   */
  exports.prototype['profit_type'] = 'percentage';
  /**
   * @member {Date} create_on
   */
  exports.prototype['create_on'] = undefined;
  /**
   * @member {Number} used_by
   */
  exports.prototype['used_by'] = undefined;
  /**
   * @member {Number} priv
   */
  exports.prototype['priv'] = undefined;
  /**
   * @member {Array.<module:model/TrunkTemplateIp>} ip
   */
  exports.prototype['ip'] = undefined;
  /**
   * @member {Number} billing_method
   */
  exports.prototype['billing_method'] = undefined;
  /**
   * @member {Boolean} lnp_dipping
   */
  exports.prototype['lnp_dipping'] = undefined;
  /**
   * @member {Number} oli
   */
  exports.prototype['oli'] = undefined;
  /**
   * @member {module:model/EgressTrunkTemplateGet.CanadaOtherEnum} canada_other
   * @default 'other'
   */
  exports.prototype['canada_other'] = 'other';
  /**
   * @member {Number} profit_margin
   */
  exports.prototype['profit_margin'] = undefined;
  /**
   * @member {Number} paid
   */
  exports.prototype['paid'] = undefined;
  /**
   * @member {Number} random_table_id
   */
  exports.prototype['random_table_id'] = undefined;
  /**
   * @member {Number} min_duration
   */
  exports.prototype['min_duration'] = undefined;
  /**
   * @member {module:model/EgressTrunkTemplateGet.RpidPartyEnum} rpid_party
   * @default 'None'
   */
  exports.prototype['rpid_party'] = 'None';
  /**
   * @member {String} name
   */
  exports.prototype['name'] = undefined;
  /**
   * @member {module:model/EgressTrunkTemplateGet.RpidPrivacyEnum} rpid_privacy
   * @default 'None'
   */
  exports.prototype['rpid_privacy'] = 'None';
  /**
   * @member {Number} wait_ringtime180
   */
  exports.prototype['wait_ringtime180'] = undefined;
  /**
   * @member {Number} resource_template_id
   */
  exports.prototype['resource_template_id'] = undefined;
  /**
   * @member {module:model/EgressTrunkTemplateGet.UsOtherEnum} us_other
   * @default 'other'
   */
  exports.prototype['us_other'] = 'other';
  /**
   * @member {module:model/EgressTrunkTemplateGet.TrunkType2Enum} trunk_type2
   * @default 'Termination Traffic'
   */
  exports.prototype['trunk_type2'] = 'Termination Traffic';
  /**
   * @member {String} create_by
   */
  exports.prototype['create_by'] = undefined;
  /**
   * @member {module:model/EgressTrunkTemplateGet.ResStrategyEnum} res_strategy
   * @default 'top-down'
   */
  exports.prototype['res_strategy'] = 'top-down';
  /**
   * @member {Number} info
   */
  exports.prototype['info'] = undefined;
  /**
   * @member {Number} pci
   */
  exports.prototype['pci'] = undefined;
  /**
   * @member {module:model/EgressTrunkTemplateGet.DirectionEnum} direction
   * @default 'ingress'
   */
  exports.prototype['direction'] = 'ingress';
  /**
   * @member {Boolean} ignore_ring
   */
  exports.prototype['ignore_ring'] = undefined;
  /**
   * @member {Number} re_invite
   */
  exports.prototype['re_invite'] = undefined;
  /**
   * @member {Number} inband
   */
  exports.prototype['inband'] = undefined;
  /**
   * @member {Number} rate_profile
   */
  exports.prototype['rate_profile'] = undefined;
  /**
   * @member {String} codecs_str
   */
  exports.prototype['codecs_str'] = undefined;
  /**
   * @member {Number} amount_per_port
   */
  exports.prototype['amount_per_port'] = undefined;
  /**
   * @member {module:model/EgressTrunkTemplateGet.TrunkTypeEnum} trunk_type
   * @default 'class4'
   */
  exports.prototype['trunk_type'] = 'class4';
  /**
   * @member {Number} display_name
   */
  exports.prototype['display_name'] = undefined;
  /**
   * @member {Number} ring_timeout
   */
  exports.prototype['ring_timeout'] = undefined;
  /**
   * @member {Array.<String>} resource
   */
  exports.prototype['resource'] = undefined;
  /**
   * @member {Number} media_timeout
   */
  exports.prototype['media_timeout'] = undefined;
  /**
   * @member {module:model/EgressTrunkTemplateGet.RateRoundingEnum} rate_rounding
   * @default 'Up'
   */
  exports.prototype['rate_rounding'] = 'Up';
  /**
   * @member {Number} rate_table_id
   */
  exports.prototype['rate_table_id'] = undefined;
  /**
   * @member {Number} rate_decimal
   */
  exports.prototype['rate_decimal'] = undefined;
  /**
   * @member {module:model/EgressTrunkTemplateGet.MediaTypeEnum} media_type
   * @default 'Proxy Media + Transcoding'
   */
  exports.prototype['media_type'] = 'Proxy Media + Transcoding';
  /**
   * @member {module:model/EgressTrunkTemplateGet.RpidIdTypeEnum} rpid_id_type
   * @default 'None'
   */
  exports.prototype['rpid_id_type'] = 'None';
  /**
   * @member {Number} rfc2833
   */
  exports.prototype['rfc2833'] = undefined;
  /**
   * @member {module:model/EgressTrunkTemplateGet.CanadaRouteEnum} canada_route
   * @default 'other'
   */
  exports.prototype['canada_route'] = 'other';
  /**
   * @member {Boolean} ignore_early_media
   */
  exports.prototype['ignore_early_media'] = undefined;
  /**
   * @member {module:model/EgressTrunkTemplateGet.UsRouteEnum} us_route
   * @default 'other'
   */
  exports.prototype['us_route'] = 'other';
  /**
   * @member {Number} lnp_dipping_rate
   */
  exports.prototype['lnp_dipping_rate'] = undefined;
  /**
   * @member {Date} update_on
   */
  exports.prototype['update_on'] = undefined;
  /**
   * @member {Number} re_invite_interval
   */
  exports.prototype['re_invite_interval'] = undefined;
  /**
   * @member {Number} div
   */
  exports.prototype['div'] = undefined;
  /**
   * @member {Number} bill_by
   */
  exports.prototype['bill_by'] = undefined;
  /**
   * @member {module:model/EgressTrunkTemplateGet.RpidScreenEnum} rpid_screen
   * @default 'None'
   */
  exports.prototype['rpid_screen'] = 'None';


  /**
   * Allowed values for the <code>intl_route</code> property.
   * @enum {String}
   * @readonly
   */
  exports.IntlRouteEnum = {
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
   * Allowed values for the <code>profit_type</code> property.
   * @enum {String}
   * @readonly
   */
  exports.ProfitTypeEnum = {
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
   * Allowed values for the <code>canada_other</code> property.
   * @enum {String}
   * @readonly
   */
  exports.CanadaOtherEnum = {
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
   * Allowed values for the <code>res_strategy</code> property.
   * @enum {String}
   * @readonly
   */
  exports.ResStrategyEnum = {
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
   * Allowed values for the <code>direction</code> property.
   * @enum {String}
   * @readonly
   */
  exports.DirectionEnum = {
    /**
     * value: "ingress"
     * @const
     */
    "ingress": "ingress",
    /**
     * value: "egress"
     * @const
     */
    "egress": "egress"  };

  /**
   * Allowed values for the <code>trunk_type</code> property.
   * @enum {String}
   * @readonly
   */
  exports.TrunkTypeEnum = {
    /**
     * value: "class4"
     * @const
     */
    "class4": "class4",
    /**
     * value: "exchange"
     * @const
     */
    "exchange": "exchange",
    /**
     * value: "product_default"
     * @const
     */
    "product_default": "product_default",
    /**
     * value: "product_agent"
     * @const
     */
    "product_agent": "product_agent"  };

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
   * Allowed values for the <code>canada_route</code> property.
   * @enum {String}
   * @readonly
   */
  exports.CanadaRouteEnum = {
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
   * Allowed values for the <code>us_route</code> property.
   * @enum {String}
   * @readonly
   */
  exports.UsRouteEnum = {
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



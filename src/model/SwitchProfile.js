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
    root.DnlApi.SwitchProfile = factory(root.DnlApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The SwitchProfile model module.
   * @module model/SwitchProfile
   * @version 1.2.10
   */

  /**
   * Constructs a new <code>SwitchProfile</code>.
   * @alias module:model/SwitchProfile
   * @class
   */
  var exports = function() {
    var _this = this;




































  };

  /**
   * Constructs a <code>SwitchProfile</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/SwitchProfile} obj Optional instance to populate.
   * @return {module:model/SwitchProfile} The populated <code>SwitchProfile</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('sip_trace')) {
        obj['sip_trace'] = ApiClient.convertToType(data['sip_trace'], 'Boolean');
      }
      if (data.hasOwnProperty('report_port')) {
        obj['report_port'] = ApiClient.convertToType(data['report_port'], 'Number');
      }
      if (data.hasOwnProperty('support_x_header')) {
        obj['support_x_header'] = ApiClient.convertToType(data['support_x_header'], 'Number');
      }
      if (data.hasOwnProperty('auth_register')) {
        obj['auth_register'] = ApiClient.convertToType(data['auth_register'], 'Number');
      }
      if (data.hasOwnProperty('active_call_port')) {
        obj['active_call_port'] = ApiClient.convertToType(data['active_call_port'], 'Number');
      }
      if (data.hasOwnProperty('lan_ip')) {
        obj['lan_ip'] = ApiClient.convertToType(data['lan_ip'], 'String');
      }
      if (data.hasOwnProperty('pcap_token')) {
        obj['pcap_token'] = ApiClient.convertToType(data['pcap_token'], 'String');
      }
      if (data.hasOwnProperty('profile_name')) {
        obj['profile_name'] = ApiClient.convertToType(data['profile_name'], 'String');
      }
      if (data.hasOwnProperty('sip_ip')) {
        obj['sip_ip'] = ApiClient.convertToType(data['sip_ip'], 'String');
      }
      if (data.hasOwnProperty('support_oli')) {
        obj['support_oli'] = ApiClient.convertToType(data['support_oli'], 'Number');
      }
      if (data.hasOwnProperty('support_rpid')) {
        obj['support_rpid'] = ApiClient.convertToType(data['support_rpid'], 'Number');
      }
      if (data.hasOwnProperty('support_priv')) {
        obj['support_priv'] = ApiClient.convertToType(data['support_priv'], 'Number');
      }
      if (data.hasOwnProperty('sip_capture_port')) {
        obj['sip_capture_port'] = ApiClient.convertToType(data['sip_capture_port'], 'Number');
      }
      if (data.hasOwnProperty('sip_capture_ip')) {
        obj['sip_capture_ip'] = ApiClient.convertToType(data['sip_capture_ip'], 'String');
      }
      if (data.hasOwnProperty('profile_status')) {
        obj['profile_status'] = ApiClient.convertToType(data['profile_status'], 'Number');
      }
      if (data.hasOwnProperty('cps')) {
        obj['cps'] = ApiClient.convertToType(data['cps'], 'Number');
      }
      if (data.hasOwnProperty('sip_port')) {
        obj['sip_port'] = ApiClient.convertToType(data['sip_port'], 'Number');
      }
      if (data.hasOwnProperty('paid_replace_ip')) {
        obj['paid_replace_ip'] = ApiClient.convertToType(data['paid_replace_ip'], 'Number');
      }
      if (data.hasOwnProperty('support_paid')) {
        obj['support_paid'] = ApiClient.convertToType(data['support_paid'], 'Number');
      }
      if (data.hasOwnProperty('sip_capture_path')) {
        obj['sip_capture_path'] = ApiClient.convertToType(data['sip_capture_path'], 'String');
      }
      if (data.hasOwnProperty('cap')) {
        obj['cap'] = ApiClient.convertToType(data['cap'], 'Number');
      }
      if (data.hasOwnProperty('status')) {
        obj['status'] = ApiClient.convertToType(data['status'], 'String');
      }
      if (data.hasOwnProperty('proxy_port')) {
        obj['proxy_port'] = ApiClient.convertToType(data['proxy_port'], 'Number');
      }
      if (data.hasOwnProperty('support_pci')) {
        obj['support_pci'] = ApiClient.convertToType(data['support_pci'], 'Number');
      }
      if (data.hasOwnProperty('sip_debug')) {
        obj['sip_debug'] = ApiClient.convertToType(data['sip_debug'], 'Number');
      }
      if (data.hasOwnProperty('support_div')) {
        obj['support_div'] = ApiClient.convertToType(data['support_div'], 'Number');
      }
      if (data.hasOwnProperty('lan_port')) {
        obj['lan_port'] = ApiClient.convertToType(data['lan_port'], 'Number');
      }
      if (data.hasOwnProperty('switch_id')) {
        obj['switch_id'] = ApiClient.convertToType(data['switch_id'], 'String');
      }
      if (data.hasOwnProperty('active_call_ip')) {
        obj['active_call_ip'] = ApiClient.convertToType(data['active_call_ip'], 'String');
      }
      if (data.hasOwnProperty('proxy_ip')) {
        obj['proxy_ip'] = ApiClient.convertToType(data['proxy_ip'], 'String');
      }
      if (data.hasOwnProperty('support_x_lrn')) {
        obj['support_x_lrn'] = ApiClient.convertToType(data['support_x_lrn'], 'Number');
      }
      if (data.hasOwnProperty('report_ip')) {
        obj['report_ip'] = ApiClient.convertToType(data['report_ip'], 'String');
      }
      if (data.hasOwnProperty('switch_name')) {
        obj['switch_name'] = ApiClient.convertToType(data['switch_name'], 'String');
      }
      if (data.hasOwnProperty('default_register')) {
        obj['default_register'] = ApiClient.convertToType(data['default_register'], 'Number');
      }
      if (data.hasOwnProperty('host_name')) {
        obj['host_name'] = ApiClient.convertToType(data['host_name'], 'String');
      }
    }
    return obj;
  }

  /**
   * @member {Boolean} sip_trace
   */
  exports.prototype['sip_trace'] = undefined;
  /**
   * @member {Number} report_port
   */
  exports.prototype['report_port'] = undefined;
  /**
   * @member {Number} support_x_header
   */
  exports.prototype['support_x_header'] = undefined;
  /**
   * @member {Number} auth_register
   */
  exports.prototype['auth_register'] = undefined;
  /**
   * @member {Number} active_call_port
   */
  exports.prototype['active_call_port'] = undefined;
  /**
   * @member {String} lan_ip
   */
  exports.prototype['lan_ip'] = undefined;
  /**
   * @member {String} pcap_token
   */
  exports.prototype['pcap_token'] = undefined;
  /**
   * @member {String} profile_name
   */
  exports.prototype['profile_name'] = undefined;
  /**
   * @member {String} sip_ip
   */
  exports.prototype['sip_ip'] = undefined;
  /**
   * @member {Number} support_oli
   */
  exports.prototype['support_oli'] = undefined;
  /**
   * @member {Number} support_rpid
   */
  exports.prototype['support_rpid'] = undefined;
  /**
   * @member {Number} support_priv
   */
  exports.prototype['support_priv'] = undefined;
  /**
   * @member {Number} sip_capture_port
   */
  exports.prototype['sip_capture_port'] = undefined;
  /**
   * @member {String} sip_capture_ip
   */
  exports.prototype['sip_capture_ip'] = undefined;
  /**
   * @member {Number} profile_status
   */
  exports.prototype['profile_status'] = undefined;
  /**
   * @member {Number} cps
   */
  exports.prototype['cps'] = undefined;
  /**
   * @member {Number} sip_port
   */
  exports.prototype['sip_port'] = undefined;
  /**
   * @member {Number} paid_replace_ip
   */
  exports.prototype['paid_replace_ip'] = undefined;
  /**
   * @member {Number} support_paid
   */
  exports.prototype['support_paid'] = undefined;
  /**
   * @member {String} sip_capture_path
   */
  exports.prototype['sip_capture_path'] = undefined;
  /**
   * @member {Number} cap
   */
  exports.prototype['cap'] = undefined;
  /**
   * @member {module:model/SwitchProfile.StatusEnum} status
   * @default 'disabled'
   */
  exports.prototype['status'] = 'disabled';
  /**
   * @member {Number} proxy_port
   */
  exports.prototype['proxy_port'] = undefined;
  /**
   * @member {Number} support_pci
   */
  exports.prototype['support_pci'] = undefined;
  /**
   * @member {Number} sip_debug
   */
  exports.prototype['sip_debug'] = undefined;
  /**
   * @member {Number} support_div
   */
  exports.prototype['support_div'] = undefined;
  /**
   * @member {Number} lan_port
   */
  exports.prototype['lan_port'] = undefined;
  /**
   * @member {String} switch_id
   */
  exports.prototype['switch_id'] = undefined;
  /**
   * @member {String} active_call_ip
   */
  exports.prototype['active_call_ip'] = undefined;
  /**
   * @member {String} proxy_ip
   */
  exports.prototype['proxy_ip'] = undefined;
  /**
   * @member {Number} support_x_lrn
   */
  exports.prototype['support_x_lrn'] = undefined;
  /**
   * @member {String} report_ip
   */
  exports.prototype['report_ip'] = undefined;
  /**
   * @member {String} switch_name
   */
  exports.prototype['switch_name'] = undefined;
  /**
   * @member {Number} default_register
   */
  exports.prototype['default_register'] = undefined;
  /**
   * @member {String} host_name
   */
  exports.prototype['host_name'] = undefined;


  /**
   * Allowed values for the <code>status</code> property.
   * @enum {String}
   * @readonly
   */
  exports.StatusEnum = {
    /**
     * value: "connected"
     * @const
     */
    "connected": "connected",
    /**
     * value: "disabled"
     * @const
     */
    "disabled": "disabled"  };


  return exports;
}));



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
    root.DnlApi.SwitchProfileSipHostGet = factory(root.DnlApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The SwitchProfileSipHostGet model module.
   * @module model/SwitchProfileSipHostGet
   * @version 1.2.10
   */

  /**
   * Constructs a new <code>SwitchProfileSipHostGet</code>.
   * @alias module:model/SwitchProfileSipHostGet
   * @class
   */
  var exports = function() {
    var _this = this;


















  };

  /**
   * Constructs a <code>SwitchProfileSipHostGet</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/SwitchProfileSipHostGet} obj Optional instance to populate.
   * @return {module:model/SwitchProfileSipHostGet} The populated <code>SwitchProfileSipHostGet</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('cps')) {
        obj['cps'] = ApiClient.convertToType(data['cps'], 'Number');
      }
      if (data.hasOwnProperty('cap')) {
        obj['cap'] = ApiClient.convertToType(data['cap'], 'Number');
      }
      if (data.hasOwnProperty('priv')) {
        obj['priv'] = ApiClient.convertToType(data['priv'], 'Number');
      }
      if (data.hasOwnProperty('rpid')) {
        obj['rpid'] = ApiClient.convertToType(data['rpid'], 'Number');
      }
      if (data.hasOwnProperty('x_header')) {
        obj['x_header'] = ApiClient.convertToType(data['x_header'], 'Number');
      }
      if (data.hasOwnProperty('x_lrn')) {
        obj['x_lrn'] = ApiClient.convertToType(data['x_lrn'], 'Number');
      }
      if (data.hasOwnProperty('sip_ip')) {
        obj['sip_ip'] = ApiClient.convertToType(data['sip_ip'], 'String');
      }
      if (data.hasOwnProperty('switch_id')) {
        obj['switch_id'] = ApiClient.convertToType(data['switch_id'], 'Number');
      }
      if (data.hasOwnProperty('pci')) {
        obj['pci'] = ApiClient.convertToType(data['pci'], 'Number');
      }
      if (data.hasOwnProperty('div')) {
        obj['div'] = ApiClient.convertToType(data['div'], 'Number');
      }
      if (data.hasOwnProperty('paid')) {
        obj['paid'] = ApiClient.convertToType(data['paid'], 'Number');
      }
      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'Number');
      }
      if (data.hasOwnProperty('sip_port')) {
        obj['sip_port'] = ApiClient.convertToType(data['sip_port'], 'Number');
      }
      if (data.hasOwnProperty('support_register')) {
        obj['support_register'] = ApiClient.convertToType(data['support_register'], 'Number');
      }
      if (data.hasOwnProperty('status')) {
        obj['status'] = ApiClient.convertToType(data['status'], 'String');
      }
      if (data.hasOwnProperty('oli')) {
        obj['oli'] = ApiClient.convertToType(data['oli'], 'Number');
      }
      if (data.hasOwnProperty('host_name')) {
        obj['host_name'] = ApiClient.convertToType(data['host_name'], 'String');
      }
    }
    return obj;
  }

  /**
   * @member {Number} cps
   */
  exports.prototype['cps'] = undefined;
  /**
   * @member {Number} cap
   */
  exports.prototype['cap'] = undefined;
  /**
   * @member {Number} priv
   */
  exports.prototype['priv'] = undefined;
  /**
   * @member {Number} rpid
   */
  exports.prototype['rpid'] = undefined;
  /**
   * @member {Number} x_header
   */
  exports.prototype['x_header'] = undefined;
  /**
   * @member {Number} x_lrn
   */
  exports.prototype['x_lrn'] = undefined;
  /**
   * @member {String} sip_ip
   */
  exports.prototype['sip_ip'] = undefined;
  /**
   * @member {Number} switch_id
   */
  exports.prototype['switch_id'] = undefined;
  /**
   * @member {Number} pci
   */
  exports.prototype['pci'] = undefined;
  /**
   * @member {Number} div
   */
  exports.prototype['div'] = undefined;
  /**
   * @member {Number} paid
   */
  exports.prototype['paid'] = undefined;
  /**
   * @member {Number} id
   */
  exports.prototype['id'] = undefined;
  /**
   * @member {Number} sip_port
   */
  exports.prototype['sip_port'] = undefined;
  /**
   * @member {Number} support_register
   */
  exports.prototype['support_register'] = undefined;
  /**
   * @member {module:model/SwitchProfileSipHostGet.StatusEnum} status
   * @default 'disabled'
   */
  exports.prototype['status'] = 'disabled';
  /**
   * @member {Number} oli
   */
  exports.prototype['oli'] = undefined;
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



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
    define(['ApiClient', 'model/SwitchProfileSipHostGet'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./SwitchProfileSipHostGet'));
  } else {
    // Browser globals (root is window)
    if (!root.DnlApi) {
      root.DnlApi = {};
    }
    root.DnlApi.VoipGatewayGet = factory(root.DnlApi.ApiClient, root.DnlApi.SwitchProfileSipHostGet);
  }
}(this, function(ApiClient, SwitchProfileSipHostGet) {
  'use strict';




  /**
   * The VoipGatewayGet model module.
   * @module model/VoipGatewayGet
   * @version 1.2.10
   */

  /**
   * Constructs a new <code>VoipGatewayGet</code>.
   * @alias module:model/VoipGatewayGet
   * @class
   */
  var exports = function() {
    var _this = this;








  };

  /**
   * Constructs a <code>VoipGatewayGet</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/VoipGatewayGet} obj Optional instance to populate.
   * @return {module:model/VoipGatewayGet} The populated <code>VoipGatewayGet</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('name')) {
        obj['name'] = ApiClient.convertToType(data['name'], 'String');
      }
      if (data.hasOwnProperty('lan_port')) {
        obj['lan_port'] = ApiClient.convertToType(data['lan_port'], 'Number');
      }
      if (data.hasOwnProperty('lan_ip')) {
        obj['lan_ip'] = ApiClient.convertToType(data['lan_ip'], 'String');
      }
      if (data.hasOwnProperty('sip_host')) {
        obj['sip_host'] = ApiClient.convertToType(data['sip_host'], [SwitchProfileSipHostGet]);
      }
      if (data.hasOwnProperty('connected')) {
        obj['connected'] = ApiClient.convertToType(data['connected'], 'Boolean');
      }
      if (data.hasOwnProperty('paid_replace_ip')) {
        obj['paid_replace_ip'] = ApiClient.convertToType(data['paid_replace_ip'], 'Number');
      }
      if (data.hasOwnProperty('switch_id')) {
        obj['switch_id'] = ApiClient.convertToType(data['switch_id'], 'Number');
      }
    }
    return obj;
  }

  /**
   * @member {String} name
   */
  exports.prototype['name'] = undefined;
  /**
   * @member {Number} lan_port
   */
  exports.prototype['lan_port'] = undefined;
  /**
   * @member {String} lan_ip
   */
  exports.prototype['lan_ip'] = undefined;
  /**
   * @member {Array.<module:model/SwitchProfileSipHostGet>} sip_host
   */
  exports.prototype['sip_host'] = undefined;
  /**
   * @member {Boolean} connected
   */
  exports.prototype['connected'] = undefined;
  /**
   * @member {Number} paid_replace_ip
   */
  exports.prototype['paid_replace_ip'] = undefined;
  /**
   * @member {Number} switch_id
   */
  exports.prototype['switch_id'] = undefined;



  return exports;
}));



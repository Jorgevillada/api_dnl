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
    define(['ApiClient', 'model/AgentClientGet'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./AgentClientGet'));
  } else {
    // Browser globals (root is window)
    if (!root.DnlApi) {
      root.DnlApi = {};
    }
    root.DnlApi.AgentCarriersGet = factory(root.DnlApi.ApiClient, root.DnlApi.AgentClientGet);
  }
}(this, function(ApiClient, AgentClientGet) {
  'use strict';




  /**
   * The AgentCarriersGet model module.
   * @module model/AgentCarriersGet
   * @version 1.2.62
   */

  /**
   * Constructs a new <code>AgentCarriersGet</code>.
   * @alias module:model/AgentCarriersGet
   * @class
   */
  var exports = function() {
    var _this = this;



  };

  /**
   * Constructs a <code>AgentCarriersGet</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/AgentCarriersGet} obj Optional instance to populate.
   * @return {module:model/AgentCarriersGet} The populated <code>AgentCarriersGet</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('agent_id')) {
        obj['agent_id'] = ApiClient.convertToType(data['agent_id'], 'Number');
      }
      if (data.hasOwnProperty('carriers')) {
        obj['carriers'] = ApiClient.convertToType(data['carriers'], [AgentClientGet]);
      }
    }
    return obj;
  }

  /**
   * @member {Number} agent_id
   */
  exports.prototype['agent_id'] = undefined;
  /**
   * @member {Array.<module:model/AgentClientGet>} carriers
   */
  exports.prototype['carriers'] = undefined;



  return exports;
}));



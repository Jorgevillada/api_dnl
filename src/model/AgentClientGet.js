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
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.DnlApi) {
      root.DnlApi = {};
    }
    root.DnlApi.AgentClientGet = factory(root.DnlApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The AgentClientGet model module.
   * @module model/AgentClientGet
   * @version 1.2.62
   */

  /**
   * Constructs a new <code>AgentClientGet</code>.
   * @alias module:model/AgentClientGet
   * @class
   */
  var exports = function() {
    var _this = this;











  };

  /**
   * Constructs a <code>AgentClientGet</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/AgentClientGet} obj Optional instance to populate.
   * @return {module:model/AgentClientGet} The populated <code>AgentClientGet</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('status')) {
        obj['status'] = ApiClient.convertToType(data['status'], 'String');
      }
      if (data.hasOwnProperty('commission')) {
        obj['commission'] = ApiClient.convertToType(data['commission'], 'Number');
      }
      if (data.hasOwnProperty('agent_id')) {
        obj['agent_id'] = ApiClient.convertToType(data['agent_id'], 'Number');
      }
      if (data.hasOwnProperty('method_type')) {
        obj['method_type'] = ApiClient.convertToType(data['method_type'], 'String');
      }
      if (data.hasOwnProperty('registered_on')) {
        obj['registered_on'] = ApiClient.convertToType(data['registered_on'], 'Date');
      }
      if (data.hasOwnProperty('assigned_on')) {
        obj['assigned_on'] = ApiClient.convertToType(data['assigned_on'], 'Date');
      }
      if (data.hasOwnProperty('client_name')) {
        obj['client_name'] = ApiClient.convertToType(data['client_name'], 'String');
      }
      if (data.hasOwnProperty('client_id')) {
        obj['client_id'] = ApiClient.convertToType(data['client_id'], 'Number');
      }
      if (data.hasOwnProperty('assigned_by')) {
        obj['assigned_by'] = ApiClient.convertToType(data['assigned_by'], 'String');
      }
      if (data.hasOwnProperty('agent_name')) {
        obj['agent_name'] = ApiClient.convertToType(data['agent_name'], 'String');
      }
    }
    return obj;
  }

  /**
   * @member {String} status
   */
  exports.prototype['status'] = undefined;
  /**
   * @member {Number} commission
   */
  exports.prototype['commission'] = undefined;
  /**
   * @member {Number} agent_id
   */
  exports.prototype['agent_id'] = undefined;
  /**
   * @member {module:model/AgentClientGet.MethodTypeEnum} method_type
   * @default 'By Profit'
   */
  exports.prototype['method_type'] = 'By Profit';
  /**
   * @member {Date} registered_on
   */
  exports.prototype['registered_on'] = undefined;
  /**
   * @member {Date} assigned_on
   */
  exports.prototype['assigned_on'] = undefined;
  /**
   * @member {String} client_name
   */
  exports.prototype['client_name'] = undefined;
  /**
   * @member {Number} client_id
   */
  exports.prototype['client_id'] = undefined;
  /**
   * @member {String} assigned_by
   */
  exports.prototype['assigned_by'] = undefined;
  /**
   * @member {String} agent_name
   */
  exports.prototype['agent_name'] = undefined;


  /**
   * Allowed values for the <code>method_type</code> property.
   * @enum {String}
   * @readonly
   */
  exports.MethodTypeEnum = {
    /**
     * value: "By Profit"
     * @const
     */
    "Profit": "By Profit",
    /**
     * value: "By Revenue"
     * @const
     */
    "Revenue": "By Revenue"  };


  return exports;
}));



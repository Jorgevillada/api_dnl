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
    define(['ApiClient', 'model/UserMin'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./UserMin'));
  } else {
    // Browser globals (root is window)
    if (!root.DnlApi) {
      root.DnlApi = {};
    }
    root.DnlApi.Agent = factory(root.DnlApi.ApiClient, root.DnlApi.UserMin);
  }
}(this, function(ApiClient, UserMin) {
  'use strict';




  /**
   * The Agent model module.
   * @module model/Agent
   * @version 1.2.62
   */

  /**
   * Constructs a new <code>Agent</code>.
   * @alias module:model/Agent
   * @class
   * @param commission {Number} 
   * @param frequencyType {module:model/Agent.FrequencyTypeEnum} 
   * @param methodType {module:model/Agent.MethodTypeEnum} 
   * @param agentName {String} 
   */
  var exports = function(commission, frequencyType, methodType, agentName) {
    var _this = this;


    _this['commission'] = commission;

    _this['frequency_type'] = frequencyType;
    _this['method_type'] = methodType;


    _this['agent_name'] = agentName;
  };

  /**
   * Constructs a <code>Agent</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Agent} obj Optional instance to populate.
   * @return {module:model/Agent} The populated <code>Agent</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('status')) {
        obj['status'] = ApiClient.convertToType(data['status'], 'Boolean');
      }
      if (data.hasOwnProperty('commission')) {
        obj['commission'] = ApiClient.convertToType(data['commission'], 'Number');
      }
      if (data.hasOwnProperty('user')) {
        obj['user'] = UserMin.constructFromObject(data['user']);
      }
      if (data.hasOwnProperty('frequency_type')) {
        obj['frequency_type'] = ApiClient.convertToType(data['frequency_type'], 'String');
      }
      if (data.hasOwnProperty('method_type')) {
        obj['method_type'] = ApiClient.convertToType(data['method_type'], 'String');
      }
      if (data.hasOwnProperty('email')) {
        obj['email'] = ApiClient.convertToType(data['email'], 'String');
      }
      if (data.hasOwnProperty('edit_permission')) {
        obj['edit_permission'] = ApiClient.convertToType(data['edit_permission'], 'Boolean');
      }
      if (data.hasOwnProperty('agent_name')) {
        obj['agent_name'] = ApiClient.convertToType(data['agent_name'], 'String');
      }
    }
    return obj;
  }

  /**
   * @member {Boolean} status
   */
  exports.prototype['status'] = undefined;
  /**
   * @member {Number} commission
   */
  exports.prototype['commission'] = undefined;
  /**
   * @member {module:model/UserMin} user
   */
  exports.prototype['user'] = undefined;
  /**
   * @member {module:model/Agent.FrequencyTypeEnum} frequency_type
   * @default 'daily'
   */
  exports.prototype['frequency_type'] = 'daily';
  /**
   * @member {module:model/Agent.MethodTypeEnum} method_type
   * @default 'By Profit'
   */
  exports.prototype['method_type'] = 'By Profit';
  /**
   * @member {String} email
   */
  exports.prototype['email'] = undefined;
  /**
   * @member {Boolean} edit_permission
   */
  exports.prototype['edit_permission'] = undefined;
  /**
   * @member {String} agent_name
   */
  exports.prototype['agent_name'] = undefined;


  /**
   * Allowed values for the <code>frequency_type</code> property.
   * @enum {String}
   * @readonly
   */
  exports.FrequencyTypeEnum = {
    /**
     * value: "daily"
     * @const
     */
    "daily": "daily",
    /**
     * value: "weekly"
     * @const
     */
    "weekly": "weekly",
    /**
     * value: "monthly"
     * @const
     */
    "monthly": "monthly"  };

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



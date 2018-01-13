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
    define(['ApiClient', 'model/AgentClientGet', 'model/UserMin'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./AgentClientGet'), require('./UserMin'));
  } else {
    // Browser globals (root is window)
    if (!root.DnlApi) {
      root.DnlApi = {};
    }
    root.DnlApi.AgentGet = factory(root.DnlApi.ApiClient, root.DnlApi.AgentClientGet, root.DnlApi.UserMin);
  }
}(this, function(ApiClient, AgentClientGet, UserMin) {
  'use strict';




  /**
   * The AgentGet model module.
   * @module model/AgentGet
   * @version 1.2.62
   */

  /**
   * Constructs a new <code>AgentGet</code>.
   * @alias module:model/AgentGet
   * @class
   * @param frequencyType {module:model/AgentGet.FrequencyTypeEnum} 
   * @param methodType {module:model/AgentGet.MethodTypeEnum} 
   * @param agentName {String} 
   */
  var exports = function(frequencyType, methodType, agentName) {
    var _this = this;




    _this['frequency_type'] = frequencyType;




    _this['method_type'] = methodType;




    _this['agent_name'] = agentName;

  };

  /**
   * Constructs a <code>AgentGet</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/AgentGet} obj Optional instance to populate.
   * @return {module:model/AgentGet} The populated <code>AgentGet</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('usage_count')) {
        obj['usage_count'] = ApiClient.convertToType(data['usage_count'], 'Number');
      }
      if (data.hasOwnProperty('update_by')) {
        obj['update_by'] = ApiClient.convertToType(data['update_by'], 'String');
      }
      if (data.hasOwnProperty('commission')) {
        obj['commission'] = ApiClient.convertToType(data['commission'], 'Number');
      }
      if (data.hasOwnProperty('frequency_type')) {
        obj['frequency_type'] = ApiClient.convertToType(data['frequency_type'], 'String');
      }
      if (data.hasOwnProperty('user')) {
        obj['user'] = UserMin.constructFromObject(data['user']);
      }
      if (data.hasOwnProperty('carriers')) {
        obj['carriers'] = ApiClient.convertToType(data['carriers'], [AgentClientGet]);
      }
      if (data.hasOwnProperty('create_on')) {
        obj['create_on'] = ApiClient.convertToType(data['create_on'], 'Date');
      }
      if (data.hasOwnProperty('edit_permission')) {
        obj['edit_permission'] = ApiClient.convertToType(data['edit_permission'], 'Boolean');
      }
      if (data.hasOwnProperty('method_type')) {
        obj['method_type'] = ApiClient.convertToType(data['method_type'], 'String');
      }
      if (data.hasOwnProperty('status')) {
        obj['status'] = ApiClient.convertToType(data['status'], 'Boolean');
      }
      if (data.hasOwnProperty('agent_id')) {
        obj['agent_id'] = ApiClient.convertToType(data['agent_id'], 'Number');
      }
      if (data.hasOwnProperty('email')) {
        obj['email'] = ApiClient.convertToType(data['email'], 'String');
      }
      if (data.hasOwnProperty('user_id')) {
        obj['user_id'] = ApiClient.convertToType(data['user_id'], 'Number');
      }
      if (data.hasOwnProperty('agent_name')) {
        obj['agent_name'] = ApiClient.convertToType(data['agent_name'], 'String');
      }
      if (data.hasOwnProperty('update_on')) {
        obj['update_on'] = ApiClient.convertToType(data['update_on'], 'Date');
      }
    }
    return obj;
  }

  /**
   * @member {Number} usage_count
   */
  exports.prototype['usage_count'] = undefined;
  /**
   * @member {String} update_by
   */
  exports.prototype['update_by'] = undefined;
  /**
   * @member {Number} commission
   */
  exports.prototype['commission'] = undefined;
  /**
   * @member {module:model/AgentGet.FrequencyTypeEnum} frequency_type
   * @default 'daily'
   */
  exports.prototype['frequency_type'] = 'daily';
  /**
   * @member {module:model/UserMin} user
   */
  exports.prototype['user'] = undefined;
  /**
   * @member {Array.<module:model/AgentClientGet>} carriers
   */
  exports.prototype['carriers'] = undefined;
  /**
   * @member {Date} create_on
   */
  exports.prototype['create_on'] = undefined;
  /**
   * @member {Boolean} edit_permission
   */
  exports.prototype['edit_permission'] = undefined;
  /**
   * @member {module:model/AgentGet.MethodTypeEnum} method_type
   * @default 'By Profit'
   */
  exports.prototype['method_type'] = 'By Profit';
  /**
   * @member {Boolean} status
   */
  exports.prototype['status'] = undefined;
  /**
   * @member {Number} agent_id
   */
  exports.prototype['agent_id'] = undefined;
  /**
   * @member {String} email
   */
  exports.prototype['email'] = undefined;
  /**
   * @member {Number} user_id
   */
  exports.prototype['user_id'] = undefined;
  /**
   * @member {String} agent_name
   */
  exports.prototype['agent_name'] = undefined;
  /**
   * @member {Date} update_on
   */
  exports.prototype['update_on'] = undefined;


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



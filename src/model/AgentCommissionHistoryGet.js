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
    define(['ApiClient', 'model/AgentCommissionHistoryDetailGet'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./AgentCommissionHistoryDetailGet'));
  } else {
    // Browser globals (root is window)
    if (!root.DnlApi) {
      root.DnlApi = {};
    }
    root.DnlApi.AgentCommissionHistoryGet = factory(root.DnlApi.ApiClient, root.DnlApi.AgentCommissionHistoryDetailGet);
  }
}(this, function(ApiClient, AgentCommissionHistoryDetailGet) {
  'use strict';




  /**
   * The AgentCommissionHistoryGet model module.
   * @module model/AgentCommissionHistoryGet
   * @version 1.2.62
   */

  /**
   * Constructs a new <code>AgentCommissionHistoryGet</code>.
   * @alias module:model/AgentCommissionHistoryGet
   * @class
   */
  var exports = function() {
    var _this = this;











  };

  /**
   * Constructs a <code>AgentCommissionHistoryGet</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/AgentCommissionHistoryGet} obj Optional instance to populate.
   * @return {module:model/AgentCommissionHistoryGet} The populated <code>AgentCommissionHistoryGet</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('details')) {
        obj['details'] = ApiClient.convertToType(data['details'], [AgentCommissionHistoryDetailGet]);
      }
      if (data.hasOwnProperty('amount')) {
        obj['amount'] = ApiClient.convertToType(data['amount'], 'String');
      }
      if (data.hasOwnProperty('start_time')) {
        obj['start_time'] = ApiClient.convertToType(data['start_time'], 'Date');
      }
      if (data.hasOwnProperty('agent_id')) {
        obj['agent_id'] = ApiClient.convertToType(data['agent_id'], 'String');
      }
      if (data.hasOwnProperty('end_time')) {
        obj['end_time'] = ApiClient.convertToType(data['end_time'], 'Date');
      }
      if (data.hasOwnProperty('total_date')) {
        obj['total_date'] = ApiClient.convertToType(data['total_date'], 'Number');
      }
      if (data.hasOwnProperty('agent_name')) {
        obj['agent_name'] = ApiClient.convertToType(data['agent_name'], 'String');
      }
      if (data.hasOwnProperty('create_date')) {
        obj['create_date'] = ApiClient.convertToType(data['create_date'], 'Date');
      }
      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'String');
      }
      if (data.hasOwnProperty('finished')) {
        obj['finished'] = ApiClient.convertToType(data['finished'], 'Boolean');
      }
    }
    return obj;
  }

  /**
   * @member {Array.<module:model/AgentCommissionHistoryDetailGet>} details
   */
  exports.prototype['details'] = undefined;
  /**
   * @member {String} amount
   */
  exports.prototype['amount'] = undefined;
  /**
   * @member {Date} start_time
   */
  exports.prototype['start_time'] = undefined;
  /**
   * @member {String} agent_id
   */
  exports.prototype['agent_id'] = undefined;
  /**
   * @member {Date} end_time
   */
  exports.prototype['end_time'] = undefined;
  /**
   * @member {Number} total_date
   */
  exports.prototype['total_date'] = undefined;
  /**
   * @member {String} agent_name
   */
  exports.prototype['agent_name'] = undefined;
  /**
   * @member {Date} create_date
   */
  exports.prototype['create_date'] = undefined;
  /**
   * @member {String} id
   */
  exports.prototype['id'] = undefined;
  /**
   * @member {Boolean} finished
   */
  exports.prototype['finished'] = undefined;



  return exports;
}));



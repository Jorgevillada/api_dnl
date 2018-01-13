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
    root.DnlApi.AgentCommissionHistoryDetailGet = factory(root.DnlApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The AgentCommissionHistoryDetailGet model module.
   * @module model/AgentCommissionHistoryDetailGet
   * @version 1.2.62
   */

  /**
   * Constructs a new <code>AgentCommissionHistoryDetailGet</code>.
   * @alias module:model/AgentCommissionHistoryDetailGet
   * @class
   */
  var exports = function() {
    var _this = this;









  };

  /**
   * Constructs a <code>AgentCommissionHistoryDetailGet</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/AgentCommissionHistoryDetailGet} obj Optional instance to populate.
   * @return {module:model/AgentCommissionHistoryDetailGet} The populated <code>AgentCommissionHistoryDetailGet</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'Number');
      }
      if (data.hasOwnProperty('client_cost')) {
        obj['client_cost'] = ApiClient.convertToType(data['client_cost'], 'String');
      }
      if (data.hasOwnProperty('start_time')) {
        obj['start_time'] = ApiClient.convertToType(data['start_time'], 'Date');
      }
      if (data.hasOwnProperty('end_time')) {
        obj['end_time'] = ApiClient.convertToType(data['end_time'], 'Date');
      }
      if (data.hasOwnProperty('total_date')) {
        obj['total_date'] = ApiClient.convertToType(data['total_date'], 'Number');
      }
      if (data.hasOwnProperty('client_name')) {
        obj['client_name'] = ApiClient.convertToType(data['client_name'], 'String');
      }
      if (data.hasOwnProperty('client_id')) {
        obj['client_id'] = ApiClient.convertToType(data['client_id'], 'Number');
      }
      if (data.hasOwnProperty('commission')) {
        obj['commission'] = ApiClient.convertToType(data['commission'], 'String');
      }
    }
    return obj;
  }

  /**
   * @member {Number} id
   */
  exports.prototype['id'] = undefined;
  /**
   * @member {String} client_cost
   */
  exports.prototype['client_cost'] = undefined;
  /**
   * @member {Date} start_time
   */
  exports.prototype['start_time'] = undefined;
  /**
   * @member {Date} end_time
   */
  exports.prototype['end_time'] = undefined;
  /**
   * @member {Number} total_date
   */
  exports.prototype['total_date'] = undefined;
  /**
   * @member {String} client_name
   */
  exports.prototype['client_name'] = undefined;
  /**
   * @member {Number} client_id
   */
  exports.prototype['client_id'] = undefined;
  /**
   * @member {String} commission
   */
  exports.prototype['commission'] = undefined;



  return exports;
}));



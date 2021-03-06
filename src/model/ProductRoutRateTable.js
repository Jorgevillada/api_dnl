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
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.DnlApi) {
      root.DnlApi = {};
    }
    root.DnlApi.ProductRoutRateTable = factory(root.DnlApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The ProductRoutRateTable model module.
   * @module model/ProductRoutRateTable
   * @version 1.2.62
   */

  /**
   * Constructs a new <code>ProductRoutRateTable</code>.
   * @alias module:model/ProductRoutRateTable
   * @class
   */
  var exports = function() {
    var _this = this;











  };

  /**
   * Constructs a <code>ProductRoutRateTable</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ProductRoutRateTable} obj Optional instance to populate.
   * @return {module:model/ProductRoutRateTable} The populated <code>ProductRoutRateTable</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('route_plan_id')) {
        obj['route_plan_id'] = ApiClient.convertToType(data['route_plan_id'], 'Number');
      }
      if (data.hasOwnProperty('rate_table_id')) {
        obj['rate_table_id'] = ApiClient.convertToType(data['rate_table_id'], 'Number');
      }
      if (data.hasOwnProperty('description')) {
        obj['description'] = ApiClient.convertToType(data['description'], 'String');
      }
      if (data.hasOwnProperty('clients')) {
        obj['clients'] = ApiClient.convertToType(data['clients'], ['Number']);
      }
      if (data.hasOwnProperty('agents')) {
        obj['agents'] = ApiClient.convertToType(data['agents'], ['Number']);
      }
      if (data.hasOwnProperty('type')) {
        obj['type'] = ApiClient.convertToType(data['type'], 'String');
      }
      if (data.hasOwnProperty('allowed_clients')) {
        obj['allowed_clients'] = ApiClient.convertToType(data['allowed_clients'], ['Number']);
      }
      if (data.hasOwnProperty('tech_prefix')) {
        obj['tech_prefix'] = ApiClient.convertToType(data['tech_prefix'], 'String');
      }
      if (data.hasOwnProperty('name')) {
        obj['name'] = ApiClient.convertToType(data['name'], 'String');
      }
      if (data.hasOwnProperty('agent_id')) {
        obj['agent_id'] = ApiClient.convertToType(data['agent_id'], 'Number');
      }
    }
    return obj;
  }

  /**
   * @member {Number} route_plan_id
   */
  exports.prototype['route_plan_id'] = undefined;
  /**
   * @member {Number} rate_table_id
   */
  exports.prototype['rate_table_id'] = undefined;
  /**
   * @member {String} description
   */
  exports.prototype['description'] = undefined;
  /**
   * @member {Array.<Number>} clients
   */
  exports.prototype['clients'] = undefined;
  /**
   * @member {Array.<Number>} agents
   */
  exports.prototype['agents'] = undefined;
  /**
   * @member {module:model/ProductRoutRateTable.TypeEnum} type
   * @default 'public'
   */
  exports.prototype['type'] = 'public';
  /**
   * @member {Array.<Number>} allowed_clients
   */
  exports.prototype['allowed_clients'] = undefined;
  /**
   * @member {String} tech_prefix
   */
  exports.prototype['tech_prefix'] = undefined;
  /**
   * @member {String} name
   */
  exports.prototype['name'] = undefined;
  /**
   * @member {Number} agent_id
   */
  exports.prototype['agent_id'] = undefined;


  /**
   * Allowed values for the <code>type</code> property.
   * @enum {String}
   * @readonly
   */
  exports.TypeEnum = {
    /**
     * value: "public"
     * @const
     */
    "public": "public",
    /**
     * value: "private"
     * @const
     */
    "private": "private"  };


  return exports;
}));



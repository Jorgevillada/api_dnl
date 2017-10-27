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
    root.DnlApi.ResourcePrefix = factory(root.DnlApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The ResourcePrefix model module.
   * @module model/ResourcePrefix
   * @version 1.2.10
   */

  /**
   * Constructs a new <code>ResourcePrefix</code>.
   * @alias module:model/ResourcePrefix
   * @class
   * @param techPrefix {String} 
   */
  var exports = function(techPrefix) {
    var _this = this;


    _this['tech_prefix'] = techPrefix;






  };

  /**
   * Constructs a <code>ResourcePrefix</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ResourcePrefix} obj Optional instance to populate.
   * @return {module:model/ResourcePrefix} The populated <code>ResourcePrefix</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('trunk_id')) {
        obj['trunk_id'] = ApiClient.convertToType(data['trunk_id'], 'Number');
      }
      if (data.hasOwnProperty('tech_prefix')) {
        obj['tech_prefix'] = ApiClient.convertToType(data['tech_prefix'], 'String');
      }
      if (data.hasOwnProperty('routing_plan_id')) {
        obj['routing_plan_id'] = ApiClient.convertToType(data['routing_plan_id'], 'Number');
      }
      if (data.hasOwnProperty('rate_table_id')) {
        obj['rate_table_id'] = ApiClient.convertToType(data['rate_table_id'], 'Number');
      }
      if (data.hasOwnProperty('code_cps')) {
        obj['code_cps'] = ApiClient.convertToType(data['code_cps'], 'Number');
      }
      if (data.hasOwnProperty('code')) {
        obj['code'] = ApiClient.convertToType(data['code'], 'String');
      }
      if (data.hasOwnProperty('product_id')) {
        obj['product_id'] = ApiClient.convertToType(data['product_id'], 'Number');
      }
      if (data.hasOwnProperty('code_cap')) {
        obj['code_cap'] = ApiClient.convertToType(data['code_cap'], 'Number');
      }
    }
    return obj;
  }

  /**
   * @member {Number} trunk_id
   */
  exports.prototype['trunk_id'] = undefined;
  /**
   * @member {String} tech_prefix
   */
  exports.prototype['tech_prefix'] = undefined;
  /**
   * @member {Number} routing_plan_id
   */
  exports.prototype['routing_plan_id'] = undefined;
  /**
   * @member {Number} rate_table_id
   */
  exports.prototype['rate_table_id'] = undefined;
  /**
   * @member {Number} code_cps
   */
  exports.prototype['code_cps'] = undefined;
  /**
   * @member {String} code
   */
  exports.prototype['code'] = undefined;
  /**
   * @member {Number} product_id
   */
  exports.prototype['product_id'] = undefined;
  /**
   * @member {Number} code_cap
   */
  exports.prototype['code_cap'] = undefined;



  return exports;
}));



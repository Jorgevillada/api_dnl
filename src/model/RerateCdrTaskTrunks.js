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
    root.DnlApi.RerateCdrTaskTrunks = factory(root.DnlApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The RerateCdrTaskTrunks model module.
   * @module model/RerateCdrTaskTrunks
   * @version 1.2.10
   */

  /**
   * Constructs a new <code>RerateCdrTaskTrunks</code>.
   * @alias module:model/RerateCdrTaskTrunks
   * @class
   */
  var exports = function() {
    var _this = this;





  };

  /**
   * Constructs a <code>RerateCdrTaskTrunks</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/RerateCdrTaskTrunks} obj Optional instance to populate.
   * @return {module:model/RerateCdrTaskTrunks} The populated <code>RerateCdrTaskTrunks</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('trunk_id')) {
        obj['trunk_id'] = ApiClient.convertToType(data['trunk_id'], 'Number');
      }
      if (data.hasOwnProperty('rate_table_id')) {
        obj['rate_table_id'] = ApiClient.convertToType(data['rate_table_id'], 'Number');
      }
      if (data.hasOwnProperty('effective_date')) {
        obj['effective_date'] = ApiClient.convertToType(data['effective_date'], 'Date');
      }
      if (data.hasOwnProperty('update_rate')) {
        obj['update_rate'] = ApiClient.convertToType(data['update_rate'], 'Boolean');
      }
    }
    return obj;
  }

  /**
   * @member {Number} trunk_id
   */
  exports.prototype['trunk_id'] = undefined;
  /**
   * @member {Number} rate_table_id
   */
  exports.prototype['rate_table_id'] = undefined;
  /**
   * @member {Date} effective_date
   */
  exports.prototype['effective_date'] = undefined;
  /**
   * @member {Boolean} update_rate
   */
  exports.prototype['update_rate'] = undefined;



  return exports;
}));



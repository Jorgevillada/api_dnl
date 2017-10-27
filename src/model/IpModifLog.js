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
    root.DnlApi.IpModifLog = factory(root.DnlApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The IpModifLog model module.
   * @module model/IpModifLog
   * @version 1.2.10
   */

  /**
   * Constructs a new <code>IpModifLog</code>.
   * @alias module:model/IpModifLog
   * @class
   */
  var exports = function() {
    var _this = this;










  };

  /**
   * Constructs a <code>IpModifLog</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/IpModifLog} obj Optional instance to populate.
   * @return {module:model/IpModifLog} The populated <code>IpModifLog</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('carrier_name')) {
        obj['carrier_name'] = ApiClient.convertToType(data['carrier_name'], 'String');
      }
      if (data.hasOwnProperty('trunk_id')) {
        obj['trunk_id'] = ApiClient.convertToType(data['trunk_id'], 'String');
      }
      if (data.hasOwnProperty('update_by')) {
        obj['update_by'] = ApiClient.convertToType(data['update_by'], 'String');
      }
      if (data.hasOwnProperty('old')) {
        obj['old'] = ApiClient.convertToType(data['old'], 'String');
      }
      if (data.hasOwnProperty('modify')) {
        obj['modify'] = ApiClient.convertToType(data['modify'], 'Number');
      }
      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'Number');
      }
      if (data.hasOwnProperty('new')) {
        obj['new'] = ApiClient.convertToType(data['new'], 'String');
      }
      if (data.hasOwnProperty('detail')) {
        obj['detail'] = ApiClient.convertToType(data['detail'], 'String');
      }
      if (data.hasOwnProperty('update_at')) {
        obj['update_at'] = ApiClient.convertToType(data['update_at'], 'Date');
      }
    }
    return obj;
  }

  /**
   * @member {String} carrier_name
   */
  exports.prototype['carrier_name'] = undefined;
  /**
   * @member {String} trunk_id
   */
  exports.prototype['trunk_id'] = undefined;
  /**
   * @member {String} update_by
   */
  exports.prototype['update_by'] = undefined;
  /**
   * @member {String} old
   */
  exports.prototype['old'] = undefined;
  /**
   * @member {Number} modify
   */
  exports.prototype['modify'] = undefined;
  /**
   * @member {Number} id
   */
  exports.prototype['id'] = undefined;
  /**
   * @member {String} new
   */
  exports.prototype['new'] = undefined;
  /**
   * @member {String} detail
   */
  exports.prototype['detail'] = undefined;
  /**
   * @member {Date} update_at
   */
  exports.prototype['update_at'] = undefined;



  return exports;
}));



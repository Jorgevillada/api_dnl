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
    root.DnlApi.CarrierGroupGet = factory(root.DnlApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The CarrierGroupGet model module.
   * @module model/CarrierGroupGet
   * @version 1.2.10
   */

  /**
   * Constructs a new <code>CarrierGroupGet</code>.
   * @alias module:model/CarrierGroupGet
   * @class
   */
  var exports = function() {
    var _this = this;





  };

  /**
   * Constructs a <code>CarrierGroupGet</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/CarrierGroupGet} obj Optional instance to populate.
   * @return {module:model/CarrierGroupGet} The populated <code>CarrierGroupGet</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('group_name')) {
        obj['group_name'] = ApiClient.convertToType(data['group_name'], 'String');
      }
      if (data.hasOwnProperty('group_id')) {
        obj['group_id'] = ApiClient.convertToType(data['group_id'], 'Number');
      }
      if (data.hasOwnProperty('clients_count')) {
        obj['clients_count'] = ApiClient.convertToType(data['clients_count'], 'Number');
      }
      if (data.hasOwnProperty('clients')) {
        obj['clients'] = ApiClient.convertToType(data['clients'], ['Number']);
      }
    }
    return obj;
  }

  /**
   * @member {String} group_name
   */
  exports.prototype['group_name'] = undefined;
  /**
   * @member {Number} group_id
   */
  exports.prototype['group_id'] = undefined;
  /**
   * @member {Number} clients_count
   */
  exports.prototype['clients_count'] = undefined;
  /**
   * @member {Array.<Number>} clients
   */
  exports.prototype['clients'] = undefined;



  return exports;
}));



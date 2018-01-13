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
    root.DnlApi.CarrierGroup = factory(root.DnlApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The CarrierGroup model module.
   * @module model/CarrierGroup
   * @version 1.2.62
   */

  /**
   * Constructs a new <code>CarrierGroup</code>.
   * @alias module:model/CarrierGroup
   * @class
   */
  var exports = function() {
    var _this = this;



  };

  /**
   * Constructs a <code>CarrierGroup</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/CarrierGroup} obj Optional instance to populate.
   * @return {module:model/CarrierGroup} The populated <code>CarrierGroup</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('clients')) {
        obj['clients'] = ApiClient.convertToType(data['clients'], ['Number']);
      }
      if (data.hasOwnProperty('group_name')) {
        obj['group_name'] = ApiClient.convertToType(data['group_name'], 'String');
      }
    }
    return obj;
  }

  /**
   * @member {Array.<Number>} clients
   */
  exports.prototype['clients'] = undefined;
  /**
   * @member {String} group_name
   */
  exports.prototype['group_name'] = undefined;



  return exports;
}));



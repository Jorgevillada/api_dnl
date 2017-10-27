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
    root.DnlApi.JurisdictionPrefixGet = factory(root.DnlApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The JurisdictionPrefixGet model module.
   * @module model/JurisdictionPrefixGet
   * @version 1.2.10
   */

  /**
   * Constructs a new <code>JurisdictionPrefixGet</code>.
   * @alias module:model/JurisdictionPrefixGet
   * @class
   */
  var exports = function() {
    var _this = this;








  };

  /**
   * Constructs a <code>JurisdictionPrefixGet</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/JurisdictionPrefixGet} obj Optional instance to populate.
   * @return {module:model/JurisdictionPrefixGet} The populated <code>JurisdictionPrefixGet</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('state')) {
        obj['state'] = ApiClient.convertToType(data['state'], 'String');
      }
      if (data.hasOwnProperty('ocn')) {
        obj['ocn'] = ApiClient.convertToType(data['ocn'], 'String');
      }
      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'Number');
      }
      if (data.hasOwnProperty('lata')) {
        obj['lata'] = ApiClient.convertToType(data['lata'], 'String');
      }
      if (data.hasOwnProperty('effective_date')) {
        obj['effective_date'] = ApiClient.convertToType(data['effective_date'], 'Date');
      }
      if (data.hasOwnProperty('prefix')) {
        obj['prefix'] = ApiClient.convertToType(data['prefix'], 'String');
      }
      if (data.hasOwnProperty('country')) {
        obj['country'] = ApiClient.convertToType(data['country'], 'String');
      }
    }
    return obj;
  }

  /**
   * @member {String} state
   */
  exports.prototype['state'] = undefined;
  /**
   * @member {String} ocn
   */
  exports.prototype['ocn'] = undefined;
  /**
   * @member {Number} id
   */
  exports.prototype['id'] = undefined;
  /**
   * @member {String} lata
   */
  exports.prototype['lata'] = undefined;
  /**
   * @member {Date} effective_date
   */
  exports.prototype['effective_date'] = undefined;
  /**
   * @member {String} prefix
   */
  exports.prototype['prefix'] = undefined;
  /**
   * @member {String} country
   */
  exports.prototype['country'] = undefined;



  return exports;
}));



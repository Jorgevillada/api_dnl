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
    root.DnlApi.DigitTranslation = factory(root.DnlApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The DigitTranslation model module.
   * @module model/DigitTranslation
   * @version 1.2.62
   */

  /**
   * Constructs a new <code>DigitTranslation</code>.
   * @alias module:model/DigitTranslation
   * @class
   */
  var exports = function() {
    var _this = this;


  };

  /**
   * Constructs a <code>DigitTranslation</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/DigitTranslation} obj Optional instance to populate.
   * @return {module:model/DigitTranslation} The populated <code>DigitTranslation</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('digit_map_name')) {
        obj['digit_map_name'] = ApiClient.convertToType(data['digit_map_name'], 'String');
      }
    }
    return obj;
  }

  /**
   * @member {String} digit_map_name
   */
  exports.prototype['digit_map_name'] = undefined;



  return exports;
}));



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
    define(['ApiClient', 'model/Rate'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Rate'));
  } else {
    // Browser globals (root is window)
    if (!root.DnlApi) {
      root.DnlApi = {};
    }
    root.DnlApi.RateMany = factory(root.DnlApi.ApiClient, root.DnlApi.Rate);
  }
}(this, function(ApiClient, Rate) {
  'use strict';




  /**
   * The RateMany model module.
   * @module model/RateMany
   * @version 1.2.10
   */

  /**
   * Constructs a new <code>RateMany</code>.
   * @alias module:model/RateMany
   * @class
   */
  var exports = function() {
    var _this = this;


  };

  /**
   * Constructs a <code>RateMany</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/RateMany} obj Optional instance to populate.
   * @return {module:model/RateMany} The populated <code>RateMany</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('rates')) {
        obj['rates'] = ApiClient.convertToType(data['rates'], [Rate]);
      }
    }
    return obj;
  }

  /**
   * @member {Array.<module:model/Rate>} rates
   */
  exports.prototype['rates'] = undefined;



  return exports;
}));


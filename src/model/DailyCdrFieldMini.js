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
    root.DnlApi.DailyCdrFieldMini = factory(root.DnlApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The DailyCdrFieldMini model module.
   * @module model/DailyCdrFieldMini
   * @version 1.2.62
   */

  /**
   * Constructs a new <code>DailyCdrFieldMini</code>.
   * @alias module:model/DailyCdrFieldMini
   * @class
   */
  var exports = function() {
    var _this = this;





  };

  /**
   * Constructs a <code>DailyCdrFieldMini</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/DailyCdrFieldMini} obj Optional instance to populate.
   * @return {module:model/DailyCdrFieldMini} The populated <code>DailyCdrFieldMini</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('display_name')) {
        obj['display_name'] = ApiClient.convertToType(data['display_name'], 'String');
      }
      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'Number');
      }
      if (data.hasOwnProperty('vendor_cdr_delivery')) {
        obj['vendor_cdr_delivery'] = ApiClient.convertToType(data['vendor_cdr_delivery'], 'Boolean');
      }
      if (data.hasOwnProperty('client_cdr_delivery')) {
        obj['client_cdr_delivery'] = ApiClient.convertToType(data['client_cdr_delivery'], 'Boolean');
      }
    }
    return obj;
  }

  /**
   * @member {String} display_name
   */
  exports.prototype['display_name'] = undefined;
  /**
   * @member {Number} id
   */
  exports.prototype['id'] = undefined;
  /**
   * @member {Boolean} vendor_cdr_delivery
   */
  exports.prototype['vendor_cdr_delivery'] = undefined;
  /**
   * @member {Boolean} client_cdr_delivery
   */
  exports.prototype['client_cdr_delivery'] = undefined;



  return exports;
}));



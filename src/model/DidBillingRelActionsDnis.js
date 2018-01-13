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
    root.DnlApi.DidBillingRelActionsDnis = factory(root.DnlApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The DidBillingRelActionsDnis model module.
   * @module model/DidBillingRelActionsDnis
   * @version 1.2.62
   */

  /**
   * Constructs a new <code>DidBillingRelActionsDnis</code>.
   * @alias module:model/DidBillingRelActionsDnis
   * @class
   */
  var exports = function() {
    var _this = this;





  };

  /**
   * Constructs a <code>DidBillingRelActionsDnis</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/DidBillingRelActionsDnis} obj Optional instance to populate.
   * @return {module:model/DidBillingRelActionsDnis} The populated <code>DidBillingRelActionsDnis</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('num_digits')) {
        obj['num_digits'] = ApiClient.convertToType(data['num_digits'], 'Number');
      }
      if (data.hasOwnProperty('type')) {
        obj['type'] = ApiClient.convertToType(data['type'], 'String');
      }
      if (data.hasOwnProperty('digits')) {
        obj['digits'] = ApiClient.convertToType(data['digits'], 'String');
      }
      if (data.hasOwnProperty('new_number')) {
        obj['new_number'] = ApiClient.convertToType(data['new_number'], 'String');
      }
    }
    return obj;
  }

  /**
   * @member {Number} num_digits
   */
  exports.prototype['num_digits'] = undefined;
  /**
   * @member {module:model/DidBillingRelActionsDnis.TypeEnum} type
   */
  exports.prototype['type'] = undefined;
  /**
   * @member {String} digits
   */
  exports.prototype['digits'] = undefined;
  /**
   * @member {String} new_number
   */
  exports.prototype['new_number'] = undefined;


  /**
   * Allowed values for the <code>type</code> property.
   * @enum {String}
   * @readonly
   */
  exports.TypeEnum = {
    /**
     * value: "Add Prefix"
     * @const
     */
    "Add Prefix": "Add Prefix",
    /**
     * value: "Remove Prefix"
     * @const
     */
    "Remove Prefix": "Remove Prefix",
    /**
     * value: "Replace"
     * @const
     */
    "Replace": "Replace"  };


  return exports;
}));



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
    root.DnlApi.DidBillingRel = factory(root.DnlApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The DidBillingRel model module.
   * @module model/DidBillingRel
   * @version 1.2.62
   */

  /**
   * Constructs a new <code>DidBillingRel</code>.
   * @alias module:model/DidBillingRel
   * @class
   */
  var exports = function() {
    var _this = this;







  };

  /**
   * Constructs a <code>DidBillingRel</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/DidBillingRel} obj Optional instance to populate.
   * @return {module:model/DidBillingRel} The populated <code>DidBillingRel</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('did')) {
        obj['did'] = ApiClient.convertToType(data['did'], 'String');
      }
      if (data.hasOwnProperty('vendor_billing_rule_id')) {
        obj['vendor_billing_rule_id'] = ApiClient.convertToType(data['vendor_billing_rule_id'], 'Number');
      }
      if (data.hasOwnProperty('is_available')) {
        obj['is_available'] = ApiClient.convertToType(data['is_available'], 'Boolean');
      }
      if (data.hasOwnProperty('vendor_res_id')) {
        obj['vendor_res_id'] = ApiClient.convertToType(data['vendor_res_id'], 'Number');
      }
      if (data.hasOwnProperty('client_id')) {
        obj['client_id'] = ApiClient.convertToType(data['client_id'], 'Number');
      }
      if (data.hasOwnProperty('client_billing_rule_id')) {
        obj['client_billing_rule_id'] = ApiClient.convertToType(data['client_billing_rule_id'], 'Number');
      }
    }
    return obj;
  }

  /**
   * @member {String} did
   */
  exports.prototype['did'] = undefined;
  /**
   * @member {Number} vendor_billing_rule_id
   */
  exports.prototype['vendor_billing_rule_id'] = undefined;
  /**
   * @member {Boolean} is_available
   */
  exports.prototype['is_available'] = undefined;
  /**
   * @member {Number} vendor_res_id
   */
  exports.prototype['vendor_res_id'] = undefined;
  /**
   * @member {Number} client_id
   */
  exports.prototype['client_id'] = undefined;
  /**
   * @member {Number} client_billing_rule_id
   */
  exports.prototype['client_billing_rule_id'] = undefined;



  return exports;
}));



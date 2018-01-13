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
    define(['ApiClient', 'model/DidBillingPlanGet'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./DidBillingPlanGet'));
  } else {
    // Browser globals (root is window)
    if (!root.DnlApi) {
      root.DnlApi = {};
    }
    root.DnlApi.DidBillingRelAvailableGet = factory(root.DnlApi.ApiClient, root.DnlApi.DidBillingPlanGet);
  }
}(this, function(ApiClient, DidBillingPlanGet) {
  'use strict';




  /**
   * The DidBillingRelAvailableGet model module.
   * @module model/DidBillingRelAvailableGet
   * @version 1.2.62
   */

  /**
   * Constructs a new <code>DidBillingRelAvailableGet</code>.
   * @alias module:model/DidBillingRelAvailableGet
   * @class
   */
  var exports = function() {
    var _this = this;









  };

  /**
   * Constructs a <code>DidBillingRelAvailableGet</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/DidBillingRelAvailableGet} obj Optional instance to populate.
   * @return {module:model/DidBillingRelAvailableGet} The populated <code>DidBillingRelAvailableGet</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('did')) {
        obj['did'] = ApiClient.convertToType(data['did'], 'String');
      }
      if (data.hasOwnProperty('did_vendor_name')) {
        obj['did_vendor_name'] = ApiClient.convertToType(data['did_vendor_name'], 'String');
      }
      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'Number');
      }
      if (data.hasOwnProperty('vendor_billing_rule_id')) {
        obj['vendor_billing_rule_id'] = ApiClient.convertToType(data['vendor_billing_rule_id'], 'Number');
      }
      if (data.hasOwnProperty('vendor_billing_rule')) {
        obj['vendor_billing_rule'] = DidBillingPlanGet.constructFromObject(data['vendor_billing_rule']);
      }
      if (data.hasOwnProperty('is_available')) {
        obj['is_available'] = ApiClient.convertToType(data['is_available'], 'Boolean');
      }
      if (data.hasOwnProperty('actions')) {
        obj['actions'] = ApiClient.convertToType(data['actions'], Object);
      }
      if (data.hasOwnProperty('vendor_res_id')) {
        obj['vendor_res_id'] = ApiClient.convertToType(data['vendor_res_id'], 'Number');
      }
    }
    return obj;
  }

  /**
   * @member {String} did
   */
  exports.prototype['did'] = undefined;
  /**
   * @member {String} did_vendor_name
   */
  exports.prototype['did_vendor_name'] = undefined;
  /**
   * @member {Number} id
   */
  exports.prototype['id'] = undefined;
  /**
   * @member {Number} vendor_billing_rule_id
   */
  exports.prototype['vendor_billing_rule_id'] = undefined;
  /**
   * @member {module:model/DidBillingPlanGet} vendor_billing_rule
   */
  exports.prototype['vendor_billing_rule'] = undefined;
  /**
   * @member {Boolean} is_available
   */
  exports.prototype['is_available'] = undefined;
  /**
   * @member {Object} actions
   */
  exports.prototype['actions'] = undefined;
  /**
   * @member {Number} vendor_res_id
   */
  exports.prototype['vendor_res_id'] = undefined;



  return exports;
}));


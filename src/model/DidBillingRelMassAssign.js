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
    root.DnlApi.DidBillingRelMassAssign = factory(root.DnlApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The DidBillingRelMassAssign model module.
   * @module model/DidBillingRelMassAssign
   * @version 1.2.62
   */

  /**
   * Constructs a new <code>DidBillingRelMassAssign</code>.
   * @alias module:model/DidBillingRelMassAssign
   * @class
   * @param clientId {Number} 
   * @param clientBillingRuleId {Number} 
   */
  var exports = function(clientId, clientBillingRuleId) {
    var _this = this;

    _this['client_id'] = clientId;
    _this['client_billing_rule_id'] = clientBillingRuleId;
  };

  /**
   * Constructs a <code>DidBillingRelMassAssign</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/DidBillingRelMassAssign} obj Optional instance to populate.
   * @return {module:model/DidBillingRelMassAssign} The populated <code>DidBillingRelMassAssign</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

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
   * @member {Number} client_id
   */
  exports.prototype['client_id'] = undefined;
  /**
   * @member {Number} client_billing_rule_id
   */
  exports.prototype['client_billing_rule_id'] = undefined;



  return exports;
}));


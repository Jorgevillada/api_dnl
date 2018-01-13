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
    root.DnlApi.DidBillingPlanModify = factory(root.DnlApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The DidBillingPlanModify model module.
   * @module model/DidBillingPlanModify
   * @version 1.2.62
   */

  /**
   * Constructs a new <code>DidBillingPlanModify</code>.
   * @alias module:model/DidBillingPlanModify
   * @class
   */
  var exports = function() {
    var _this = this;








  };

  /**
   * Constructs a <code>DidBillingPlanModify</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/DidBillingPlanModify} obj Optional instance to populate.
   * @return {module:model/DidBillingPlanModify} The populated <code>DidBillingPlanModify</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('rate_table_id')) {
        obj['rate_table_id'] = ApiClient.convertToType(data['rate_table_id'], 'Number');
      }
      if (data.hasOwnProperty('monthly_fee')) {
        obj['monthly_fee'] = ApiClient.convertToType(data['monthly_fee'], 'Number');
      }
      if (data.hasOwnProperty('payphone_subcharge')) {
        obj['payphone_subcharge'] = ApiClient.convertToType(data['payphone_subcharge'], 'String');
      }
      if (data.hasOwnProperty('type')) {
        obj['type'] = ApiClient.convertToType(data['type'], 'String');
      }
      if (data.hasOwnProperty('rate_per_min')) {
        obj['rate_per_min'] = ApiClient.convertToType(data['rate_per_min'], 'Number');
      }
      if (data.hasOwnProperty('setup_fee')) {
        obj['setup_fee'] = ApiClient.convertToType(data['setup_fee'], 'Number');
      }
      if (data.hasOwnProperty('name')) {
        obj['name'] = ApiClient.convertToType(data['name'], 'String');
      }
    }
    return obj;
  }

  /**
   * @member {Number} rate_table_id
   */
  exports.prototype['rate_table_id'] = undefined;
  /**
   * @member {Number} monthly_fee
   */
  exports.prototype['monthly_fee'] = undefined;
  /**
   * @member {String} payphone_subcharge
   */
  exports.prototype['payphone_subcharge'] = undefined;
  /**
   * @member {module:model/DidBillingPlanModify.TypeEnum} type
   * @default 'fixed rate'
   */
  exports.prototype['type'] = 'fixed rate';
  /**
   * @member {Number} rate_per_min
   */
  exports.prototype['rate_per_min'] = undefined;
  /**
   * @member {Number} setup_fee
   */
  exports.prototype['setup_fee'] = undefined;
  /**
   * @member {String} name
   */
  exports.prototype['name'] = undefined;


  /**
   * Allowed values for the <code>type</code> property.
   * @enum {String}
   * @readonly
   */
  exports.TypeEnum = {
    /**
     * value: "fixed rate"
     * @const
     */
    "fixed rate": "fixed rate",
    /**
     * value: "variable rate"
     * @const
     */
    "variable rate": "variable rate"  };


  return exports;
}));



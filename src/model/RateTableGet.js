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
    root.DnlApi.RateTableGet = factory(root.DnlApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The RateTableGet model module.
   * @module model/RateTableGet
   * @version 1.2.62
   */

  /**
   * Constructs a new <code>RateTableGet</code>.
   * @alias module:model/RateTableGet
   * @class
   */
  var exports = function() {
    var _this = this;















  };

  /**
   * Constructs a <code>RateTableGet</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/RateTableGet} obj Optional instance to populate.
   * @return {module:model/RateTableGet} The populated <code>RateTableGet</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('egress_count')) {
        obj['egress_count'] = ApiClient.convertToType(data['egress_count'], 'Number');
      }
      if (data.hasOwnProperty('update_by')) {
        obj['update_by'] = ApiClient.convertToType(data['update_by'], 'String');
      }
      if (data.hasOwnProperty('rate_table_id')) {
        obj['rate_table_id'] = ApiClient.convertToType(data['rate_table_id'], 'Number');
      }
      if (data.hasOwnProperty('currency_name')) {
        obj['currency_name'] = ApiClient.convertToType(data['currency_name'], 'String');
      }
      if (data.hasOwnProperty('usage_count')) {
        obj['usage_count'] = ApiClient.convertToType(data['usage_count'], 'Number');
      }
      if (data.hasOwnProperty('rate_type_name')) {
        obj['rate_type_name'] = ApiClient.convertToType(data['rate_type_name'], 'String');
      }
      if (data.hasOwnProperty('currency_id')) {
        obj['currency_id'] = ApiClient.convertToType(data['currency_id'], 'Number');
      }
      if (data.hasOwnProperty('name')) {
        obj['name'] = ApiClient.convertToType(data['name'], 'String');
      }
      if (data.hasOwnProperty('ingress_count')) {
        obj['ingress_count'] = ApiClient.convertToType(data['ingress_count'], 'Number');
      }
      if (data.hasOwnProperty('code_deck_id')) {
        obj['code_deck_id'] = ApiClient.convertToType(data['code_deck_id'], 'Number');
      }
      if (data.hasOwnProperty('billing_method')) {
        obj['billing_method'] = ApiClient.convertToType(data['billing_method'], 'String');
      }
      if (data.hasOwnProperty('update_at')) {
        obj['update_at'] = ApiClient.convertToType(data['update_at'], 'Date');
      }
      if (data.hasOwnProperty('trunks')) {
        obj['trunks'] = ApiClient.convertToType(data['trunks'], ['Number']);
      }
      if (data.hasOwnProperty('code_deck_name')) {
        obj['code_deck_name'] = ApiClient.convertToType(data['code_deck_name'], 'String');
      }
    }
    return obj;
  }

  /**
   * @member {Number} egress_count
   */
  exports.prototype['egress_count'] = undefined;
  /**
   * @member {String} update_by
   */
  exports.prototype['update_by'] = undefined;
  /**
   * @member {Number} rate_table_id
   */
  exports.prototype['rate_table_id'] = undefined;
  /**
   * @member {String} currency_name
   */
  exports.prototype['currency_name'] = undefined;
  /**
   * @member {Number} usage_count
   */
  exports.prototype['usage_count'] = undefined;
  /**
   * @member {String} rate_type_name
   */
  exports.prototype['rate_type_name'] = undefined;
  /**
   * @member {Number} currency_id
   * @default 1
   */
  exports.prototype['currency_id'] = 1;
  /**
   * @member {String} name
   */
  exports.prototype['name'] = undefined;
  /**
   * @member {Number} ingress_count
   */
  exports.prototype['ingress_count'] = undefined;
  /**
   * @member {Number} code_deck_id
   */
  exports.prototype['code_deck_id'] = undefined;
  /**
   * @member {String} billing_method
   */
  exports.prototype['billing_method'] = undefined;
  /**
   * @member {Date} update_at
   */
  exports.prototype['update_at'] = undefined;
  /**
   * @member {Array.<Number>} trunks
   */
  exports.prototype['trunks'] = undefined;
  /**
   * @member {String} code_deck_name
   */
  exports.prototype['code_deck_name'] = undefined;



  return exports;
}));



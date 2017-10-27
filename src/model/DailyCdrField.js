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
    root.DnlApi.DailyCdrField = factory(root.DnlApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The DailyCdrField model module.
   * @module model/DailyCdrField
   * @version 1.2.10
   */

  /**
   * Constructs a new <code>DailyCdrField</code>.
   * @alias module:model/DailyCdrField
   * @class
   */
  var exports = function() {
    var _this = this;








  };

  /**
   * Constructs a <code>DailyCdrField</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/DailyCdrField} obj Optional instance to populate.
   * @return {module:model/DailyCdrField} The populated <code>DailyCdrField</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('client_viewable')) {
        obj['client_viewable'] = ApiClient.convertToType(data['client_viewable'], 'Boolean');
      }
      if (data.hasOwnProperty('client_cdr_delivery')) {
        obj['client_cdr_delivery'] = ApiClient.convertToType(data['client_cdr_delivery'], 'Boolean');
      }
      if (data.hasOwnProperty('display_name')) {
        obj['display_name'] = ApiClient.convertToType(data['display_name'], 'String');
      }
      if (data.hasOwnProperty('vendor_cdr_delivery')) {
        obj['vendor_cdr_delivery'] = ApiClient.convertToType(data['vendor_cdr_delivery'], 'Boolean');
      }
      if (data.hasOwnProperty('db_name')) {
        obj['db_name'] = ApiClient.convertToType(data['db_name'], 'String');
      }
      if (data.hasOwnProperty('vendor_viewable')) {
        obj['vendor_viewable'] = ApiClient.convertToType(data['vendor_viewable'], 'Boolean');
      }
      if (data.hasOwnProperty('admin_default')) {
        obj['admin_default'] = ApiClient.convertToType(data['admin_default'], 'Boolean');
      }
    }
    return obj;
  }

  /**
   * @member {Boolean} client_viewable
   */
  exports.prototype['client_viewable'] = undefined;
  /**
   * @member {Boolean} client_cdr_delivery
   */
  exports.prototype['client_cdr_delivery'] = undefined;
  /**
   * @member {String} display_name
   */
  exports.prototype['display_name'] = undefined;
  /**
   * @member {Boolean} vendor_cdr_delivery
   */
  exports.prototype['vendor_cdr_delivery'] = undefined;
  /**
   * @member {String} db_name
   */
  exports.prototype['db_name'] = undefined;
  /**
   * @member {Boolean} vendor_viewable
   */
  exports.prototype['vendor_viewable'] = undefined;
  /**
   * @member {Boolean} admin_default
   */
  exports.prototype['admin_default'] = undefined;



  return exports;
}));


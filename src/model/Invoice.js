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
    root.DnlApi.Invoice = factory(root.DnlApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The Invoice model module.
   * @module model/Invoice
   * @version 1.2.62
   */

  /**
   * Constructs a new <code>Invoice</code>.
   * @alias module:model/Invoice
   * @class
   * @param endDate {Date} 
   * @param startDate {Date} 
   */
  var exports = function(endDate, startDate) {
    var _this = this;

    _this['end_date'] = endDate;


    _this['start_date'] = startDate;

  };

  /**
   * Constructs a <code>Invoice</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Invoice} obj Optional instance to populate.
   * @return {module:model/Invoice} The populated <code>Invoice</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('end_date')) {
        obj['end_date'] = ApiClient.convertToType(data['end_date'], 'Date');
      }
      if (data.hasOwnProperty('gmt')) {
        obj['gmt'] = ApiClient.convertToType(data['gmt'], 'String');
      }
      if (data.hasOwnProperty('show_trunk_breakdown')) {
        obj['show_trunk_breakdown'] = ApiClient.convertToType(data['show_trunk_breakdown'], 'Boolean');
      }
      if (data.hasOwnProperty('start_date')) {
        obj['start_date'] = ApiClient.convertToType(data['start_date'], 'Date');
      }
      if (data.hasOwnProperty('show_cdr')) {
        obj['show_cdr'] = ApiClient.convertToType(data['show_cdr'], 'Boolean');
      }
    }
    return obj;
  }

  /**
   * @member {Date} end_date
   */
  exports.prototype['end_date'] = undefined;
  /**
   * @member {String} gmt
   * @default '+00'
   */
  exports.prototype['gmt'] = '+00';
  /**
   * @member {Boolean} show_trunk_breakdown
   */
  exports.prototype['show_trunk_breakdown'] = undefined;
  /**
   * @member {Date} start_date
   */
  exports.prototype['start_date'] = undefined;
  /**
   * @member {Boolean} show_cdr
   */
  exports.prototype['show_cdr'] = undefined;



  return exports;
}));



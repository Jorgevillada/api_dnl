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
    root.DnlApi.InvoiceGet = factory(root.DnlApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The InvoiceGet model module.
   * @module model/InvoiceGet
   * @version 1.2.62
   */

  /**
   * Constructs a new <code>InvoiceGet</code>.
   * @alias module:model/InvoiceGet
   * @class
   */
  var exports = function() {
    var _this = this;















  };

  /**
   * Constructs a <code>InvoiceGet</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/InvoiceGet} obj Optional instance to populate.
   * @return {module:model/InvoiceGet} The populated <code>InvoiceGet</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('create_type')) {
        obj['create_type'] = ApiClient.convertToType(data['create_type'], 'String');
      }
      if (data.hasOwnProperty('amount')) {
        obj['amount'] = ApiClient.convertToType(data['amount'], 'Number');
      }
      if (data.hasOwnProperty('invoice_id')) {
        obj['invoice_id'] = ApiClient.convertToType(data['invoice_id'], 'Number');
      }
      if (data.hasOwnProperty('invoice_number')) {
        obj['invoice_number'] = ApiClient.convertToType(data['invoice_number'], 'String');
      }
      if (data.hasOwnProperty('paid')) {
        obj['paid'] = ApiClient.convertToType(data['paid'], 'Boolean');
      }
      if (data.hasOwnProperty('invoice_date')) {
        obj['invoice_date'] = ApiClient.convertToType(data['invoice_date'], 'Date');
      }
      if (data.hasOwnProperty('due_date')) {
        obj['due_date'] = ApiClient.convertToType(data['due_date'], 'Date');
      }
      if (data.hasOwnProperty('client_id')) {
        obj['client_id'] = ApiClient.convertToType(data['client_id'], 'Number');
      }
      if (data.hasOwnProperty('url')) {
        obj['url'] = ApiClient.convertToType(data['url'], 'String');
      }
      if (data.hasOwnProperty('invoice_period_to')) {
        obj['invoice_period_to'] = ApiClient.convertToType(data['invoice_period_to'], 'Date');
      }
      if (data.hasOwnProperty('status')) {
        obj['status'] = ApiClient.convertToType(data['status'], 'Number');
      }
      if (data.hasOwnProperty('state')) {
        obj['state'] = ApiClient.convertToType(data['state'], 'String');
      }
      if (data.hasOwnProperty('invoice_period_from')) {
        obj['invoice_period_from'] = ApiClient.convertToType(data['invoice_period_from'], 'Date');
      }
      if (data.hasOwnProperty('client_name')) {
        obj['client_name'] = ApiClient.convertToType(data['client_name'], 'String');
      }
    }
    return obj;
  }

  /**
   * @member {module:model/InvoiceGet.CreateTypeEnum} create_type
   * @default 'auto'
   */
  exports.prototype['create_type'] = 'auto';
  /**
   * @member {Number} amount
   */
  exports.prototype['amount'] = undefined;
  /**
   * @member {Number} invoice_id
   */
  exports.prototype['invoice_id'] = undefined;
  /**
   * @member {String} invoice_number
   */
  exports.prototype['invoice_number'] = undefined;
  /**
   * @member {Boolean} paid
   */
  exports.prototype['paid'] = undefined;
  /**
   * @member {Date} invoice_date
   */
  exports.prototype['invoice_date'] = undefined;
  /**
   * @member {Date} due_date
   */
  exports.prototype['due_date'] = undefined;
  /**
   * @member {Number} client_id
   */
  exports.prototype['client_id'] = undefined;
  /**
   * @member {String} url
   */
  exports.prototype['url'] = undefined;
  /**
   * @member {Date} invoice_period_to
   */
  exports.prototype['invoice_period_to'] = undefined;
  /**
   * @member {Number} status
   */
  exports.prototype['status'] = undefined;
  /**
   * @member {module:model/InvoiceGet.StateEnum} state
   * @default 'void'
   */
  exports.prototype['state'] = 'void';
  /**
   * @member {Date} invoice_period_from
   */
  exports.prototype['invoice_period_from'] = undefined;
  /**
   * @member {String} client_name
   */
  exports.prototype['client_name'] = undefined;


  /**
   * Allowed values for the <code>create_type</code> property.
   * @enum {String}
   * @readonly
   */
  exports.CreateTypeEnum = {
    /**
     * value: "auto"
     * @const
     */
    "auto": "auto",
    /**
     * value: "manual"
     * @const
     */
    "manual": "manual"  };

  /**
   * Allowed values for the <code>state</code> property.
   * @enum {String}
   * @readonly
   */
  exports.StateEnum = {
    /**
     * value: "void"
     * @const
     */
    "void": "void",
    /**
     * value: "normal"
     * @const
     */
    "normal": "normal",
    /**
     * value: "verify"
     * @const
     */
    "verify": "verify",
    /**
     * value: "send"
     * @const
     */
    "send": "send"  };


  return exports;
}));



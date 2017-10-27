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
    define(['ApiClient', 'model/ClientResourceDidGet'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./ClientResourceDidGet'));
  } else {
    // Browser globals (root is window)
    if (!root.DnlApi) {
      root.DnlApi = {};
    }
    root.DnlApi.ClientDidGet = factory(root.DnlApi.ApiClient, root.DnlApi.ClientResourceDidGet);
  }
}(this, function(ApiClient, ClientResourceDidGet) {
  'use strict';




  /**
   * The ClientDidGet model module.
   * @module model/ClientDidGet
   * @version 1.2.10
   */

  /**
   * Constructs a new <code>ClientDidGet</code>.
   * @alias module:model/ClientDidGet
   * @class
   */
  var exports = function() {
    var _this = this;
































  };

  /**
   * Constructs a <code>ClientDidGet</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ClientDidGet} obj Optional instance to populate.
   * @return {module:model/ClientDidGet} The populated <code>ClientDidGet</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('name')) {
        obj['name'] = ApiClient.convertToType(data['name'], 'String');
      }
      if (data.hasOwnProperty('client_id')) {
        obj['client_id'] = ApiClient.convertToType(data['client_id'], 'Number');
      }
      if (data.hasOwnProperty('is_unlimited')) {
        obj['is_unlimited'] = ApiClient.convertToType(data['is_unlimited'], 'Boolean');
      }
      if (data.hasOwnProperty('is_panel_invoices')) {
        obj['is_panel_invoices'] = ApiClient.convertToType(data['is_panel_invoices'], 'Boolean');
      }
      if (data.hasOwnProperty('username')) {
        obj['username'] = ApiClient.convertToType(data['username'], 'String');
      }
      if (data.hasOwnProperty('call_limit')) {
        obj['call_limit'] = ApiClient.convertToType(data['call_limit'], 'Number');
      }
      if (data.hasOwnProperty('auto_invoicing')) {
        obj['auto_invoicing'] = ApiClient.convertToType(data['auto_invoicing'], 'Boolean');
      }
      if (data.hasOwnProperty('is_panel_accountsummary')) {
        obj['is_panel_accountsummary'] = ApiClient.convertToType(data['is_panel_accountsummary'], 'Boolean');
      }
      if (data.hasOwnProperty('is_panel_ratetable')) {
        obj['is_panel_ratetable'] = ApiClient.convertToType(data['is_panel_ratetable'], 'Boolean');
      }
      if (data.hasOwnProperty('update_by')) {
        obj['update_by'] = ApiClient.convertToType(data['update_by'], 'String');
      }
      if (data.hasOwnProperty('is_panel_mydid')) {
        obj['is_panel_mydid'] = ApiClient.convertToType(data['is_panel_mydid'], 'Boolean');
      }
      if (data.hasOwnProperty('is_panel_cdrslist')) {
        obj['is_panel_cdrslist'] = ApiClient.convertToType(data['is_panel_cdrslist'], 'Boolean');
      }
      if (data.hasOwnProperty('company')) {
        obj['company'] = ApiClient.convertToType(data['company'], 'String');
      }
      if (data.hasOwnProperty('billing_email')) {
        obj['billing_email'] = ApiClient.convertToType(data['billing_email'], 'String');
      }
      if (data.hasOwnProperty('is_panel_paymenthistory')) {
        obj['is_panel_paymenthistory'] = ApiClient.convertToType(data['is_panel_paymenthistory'], 'Boolean');
      }
      if (data.hasOwnProperty('rate_email')) {
        obj['rate_email'] = ApiClient.convertToType(data['rate_email'], 'String');
      }
      if (data.hasOwnProperty('billing_mode')) {
        obj['billing_mode'] = ApiClient.convertToType(data['billing_mode'], 'String');
      }
      if (data.hasOwnProperty('is_panel_didrequest')) {
        obj['is_panel_didrequest'] = ApiClient.convertToType(data['is_panel_didrequest'], 'Boolean');
      }
      if (data.hasOwnProperty('test_credit')) {
        obj['test_credit'] = ApiClient.convertToType(data['test_credit'], 'Number');
      }
      if (data.hasOwnProperty('balance')) {
        obj['balance'] = ApiClient.convertToType(data['balance'], 'Number');
      }
      if (data.hasOwnProperty('is_panel_balance')) {
        obj['is_panel_balance'] = ApiClient.convertToType(data['is_panel_balance'], 'Boolean');
      }
      if (data.hasOwnProperty('noc_email')) {
        obj['noc_email'] = ApiClient.convertToType(data['noc_email'], 'String');
      }
      if (data.hasOwnProperty('address')) {
        obj['address'] = ApiClient.convertToType(data['address'], 'String');
      }
      if (data.hasOwnProperty('update_at')) {
        obj['update_at'] = ApiClient.convertToType(data['update_at'], 'Date');
      }
      if (data.hasOwnProperty('is_panel_summaryreport')) {
        obj['is_panel_summaryreport'] = ApiClient.convertToType(data['is_panel_summaryreport'], 'Boolean');
      }
      if (data.hasOwnProperty('is_panel_trunks')) {
        obj['is_panel_trunks'] = ApiClient.convertToType(data['is_panel_trunks'], 'Boolean');
      }
      if (data.hasOwnProperty('allowed_credit')) {
        obj['allowed_credit'] = ApiClient.convertToType(data['allowed_credit'], 'Number');
      }
      if (data.hasOwnProperty('main_email')) {
        obj['main_email'] = ApiClient.convertToType(data['main_email'], 'String');
      }
      if (data.hasOwnProperty('is_panel_products')) {
        obj['is_panel_products'] = ApiClient.convertToType(data['is_panel_products'], 'Boolean');
      }
      if (data.hasOwnProperty('resource')) {
        obj['resource'] = ClientResourceDidGet.constructFromObject(data['resource']);
      }
      if (data.hasOwnProperty('active')) {
        obj['active'] = ApiClient.convertToType(data['active'], 'Boolean');
      }
    }
    return obj;
  }

  /**
   * @member {String} name
   */
  exports.prototype['name'] = undefined;
  /**
   * @member {Number} client_id
   */
  exports.prototype['client_id'] = undefined;
  /**
   * @member {Boolean} is_unlimited
   */
  exports.prototype['is_unlimited'] = undefined;
  /**
   * @member {Boolean} is_panel_invoices
   */
  exports.prototype['is_panel_invoices'] = undefined;
  /**
   * @member {String} username
   */
  exports.prototype['username'] = undefined;
  /**
   * @member {Number} call_limit
   */
  exports.prototype['call_limit'] = undefined;
  /**
   * @member {Boolean} auto_invoicing
   */
  exports.prototype['auto_invoicing'] = undefined;
  /**
   * @member {Boolean} is_panel_accountsummary
   */
  exports.prototype['is_panel_accountsummary'] = undefined;
  /**
   * @member {Boolean} is_panel_ratetable
   */
  exports.prototype['is_panel_ratetable'] = undefined;
  /**
   * @member {String} update_by
   */
  exports.prototype['update_by'] = undefined;
  /**
   * @member {Boolean} is_panel_mydid
   */
  exports.prototype['is_panel_mydid'] = undefined;
  /**
   * @member {Boolean} is_panel_cdrslist
   */
  exports.prototype['is_panel_cdrslist'] = undefined;
  /**
   * @member {String} company
   */
  exports.prototype['company'] = undefined;
  /**
   * @member {String} billing_email
   */
  exports.prototype['billing_email'] = undefined;
  /**
   * @member {Boolean} is_panel_paymenthistory
   */
  exports.prototype['is_panel_paymenthistory'] = undefined;
  /**
   * @member {String} rate_email
   */
  exports.prototype['rate_email'] = undefined;
  /**
   * @member {String} billing_mode
   */
  exports.prototype['billing_mode'] = undefined;
  /**
   * @member {Boolean} is_panel_didrequest
   */
  exports.prototype['is_panel_didrequest'] = undefined;
  /**
   * @member {Number} test_credit
   */
  exports.prototype['test_credit'] = undefined;
  /**
   * @member {Number} balance
   */
  exports.prototype['balance'] = undefined;
  /**
   * @member {Boolean} is_panel_balance
   */
  exports.prototype['is_panel_balance'] = undefined;
  /**
   * @member {String} noc_email
   */
  exports.prototype['noc_email'] = undefined;
  /**
   * @member {String} address
   */
  exports.prototype['address'] = undefined;
  /**
   * @member {Date} update_at
   */
  exports.prototype['update_at'] = undefined;
  /**
   * @member {Boolean} is_panel_summaryreport
   */
  exports.prototype['is_panel_summaryreport'] = undefined;
  /**
   * @member {Boolean} is_panel_trunks
   */
  exports.prototype['is_panel_trunks'] = undefined;
  /**
   * @member {Number} allowed_credit
   */
  exports.prototype['allowed_credit'] = undefined;
  /**
   * @member {String} main_email
   */
  exports.prototype['main_email'] = undefined;
  /**
   * @member {Boolean} is_panel_products
   */
  exports.prototype['is_panel_products'] = undefined;
  /**
   * @member {module:model/ClientResourceDidGet} resource
   */
  exports.prototype['resource'] = undefined;
  /**
   * @member {Boolean} active
   */
  exports.prototype['active'] = undefined;



  return exports;
}));


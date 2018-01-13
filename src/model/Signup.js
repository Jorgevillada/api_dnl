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
    define(['ApiClient', 'model/SignupIp'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./SignupIp'));
  } else {
    // Browser globals (root is window)
    if (!root.DnlApi) {
      root.DnlApi = {};
    }
    root.DnlApi.Signup = factory(root.DnlApi.ApiClient, root.DnlApi.SignupIp);
  }
}(this, function(ApiClient, SignupIp) {
  'use strict';




  /**
   * The Signup model module.
   * @module model/Signup
   * @version 1.2.62
   */

  /**
   * Constructs a new <code>Signup</code>.
   * @alias module:model/Signup
   * @class
   * @param mainEmail {String} 
   * @param username {String} 
   * @param clientName {String} 
   */
  var exports = function(mainEmail, username, clientName) {
    var _this = this;



    _this['main_email'] = mainEmail;














    _this['username'] = username;







    _this['client_name'] = clientName;




  };

  /**
   * Constructs a <code>Signup</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Signup} obj Optional instance to populate.
   * @return {module:model/Signup} The populated <code>Signup</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('ip_address')) {
        obj['ip_address'] = ApiClient.convertToType(data['ip_address'], [SignupIp]);
      }
      if (data.hasOwnProperty('billing_email')) {
        obj['billing_email'] = ApiClient.convertToType(data['billing_email'], 'String');
      }
      if (data.hasOwnProperty('main_email')) {
        obj['main_email'] = ApiClient.convertToType(data['main_email'], 'String');
      }
      if (data.hasOwnProperty('billing_country')) {
        obj['billing_country'] = ApiClient.convertToType(data['billing_country'], 'String');
      }
      if (data.hasOwnProperty('referral')) {
        obj['referral'] = ApiClient.convertToType(data['referral'], 'String');
      }
      if (data.hasOwnProperty('zip')) {
        obj['zip'] = ApiClient.convertToType(data['zip'], 'String');
      }
      if (data.hasOwnProperty('rate_send_from_email')) {
        obj['rate_send_from_email'] = ApiClient.convertToType(data['rate_send_from_email'], 'String');
      }
      if (data.hasOwnProperty('billing_address')) {
        obj['billing_address'] = ApiClient.convertToType(data['billing_address'], 'String');
      }
      if (data.hasOwnProperty('noc_email')) {
        obj['noc_email'] = ApiClient.convertToType(data['noc_email'], 'String');
      }
      if (data.hasOwnProperty('rate_send_to_email')) {
        obj['rate_send_to_email'] = ApiClient.convertToType(data['rate_send_to_email'], 'String');
      }
      if (data.hasOwnProperty('modified_on')) {
        obj['modified_on'] = ApiClient.convertToType(data['modified_on'], 'Date');
      }
      if (data.hasOwnProperty('billing_zip')) {
        obj['billing_zip'] = ApiClient.convertToType(data['billing_zip'], 'String');
      }
      if (data.hasOwnProperty('tax_id')) {
        obj['tax_id'] = ApiClient.convertToType(data['tax_id'], 'String');
      }
      if (data.hasOwnProperty('company')) {
        obj['company'] = ApiClient.convertToType(data['company'], 'String');
      }
      if (data.hasOwnProperty('password')) {
        obj['password'] = ApiClient.convertToType(data['password'], 'String');
      }
      if (data.hasOwnProperty('city')) {
        obj['city'] = ApiClient.convertToType(data['city'], 'String');
      }
      if (data.hasOwnProperty('country')) {
        obj['country'] = ApiClient.convertToType(data['country'], 'String');
      }
      if (data.hasOwnProperty('username')) {
        obj['username'] = ApiClient.convertToType(data['username'], 'String');
      }
      if (data.hasOwnProperty('company_detail')) {
        obj['company_detail'] = ApiClient.convertToType(data['company_detail'], 'String');
      }
      if (data.hasOwnProperty('state')) {
        obj['state'] = ApiClient.convertToType(data['state'], 'String');
      }
      if (data.hasOwnProperty('address')) {
        obj['address'] = ApiClient.convertToType(data['address'], 'String');
      }
      if (data.hasOwnProperty('billing_contact_name')) {
        obj['billing_contact_name'] = ApiClient.convertToType(data['billing_contact_name'], 'String');
      }
      if (data.hasOwnProperty('billing_state')) {
        obj['billing_state'] = ApiClient.convertToType(data['billing_state'], 'String');
      }
      if (data.hasOwnProperty('send_signup_notification')) {
        obj['send_signup_notification'] = ApiClient.convertToType(data['send_signup_notification'], 'Number');
      }
      if (data.hasOwnProperty('signed_up_on')) {
        obj['signed_up_on'] = ApiClient.convertToType(data['signed_up_on'], 'Date');
      }
      if (data.hasOwnProperty('client_name')) {
        obj['client_name'] = ApiClient.convertToType(data['client_name'], 'String');
      }
      if (data.hasOwnProperty('billing_city')) {
        obj['billing_city'] = ApiClient.convertToType(data['billing_city'], 'String');
      }
      if (data.hasOwnProperty('products')) {
        obj['products'] = ApiClient.convertToType(data['products'], ['Number']);
      }
      if (data.hasOwnProperty('billing_phone')) {
        obj['billing_phone'] = ApiClient.convertToType(data['billing_phone'], 'String');
      }
      if (data.hasOwnProperty('phone')) {
        obj['phone'] = ApiClient.convertToType(data['phone'], 'String');
      }
    }
    return obj;
  }

  /**
   * @member {Array.<module:model/SignupIp>} ip_address
   */
  exports.prototype['ip_address'] = undefined;
  /**
   * @member {String} billing_email
   */
  exports.prototype['billing_email'] = undefined;
  /**
   * @member {String} main_email
   */
  exports.prototype['main_email'] = undefined;
  /**
   * @member {String} billing_country
   */
  exports.prototype['billing_country'] = undefined;
  /**
   * @member {String} referral
   */
  exports.prototype['referral'] = undefined;
  /**
   * @member {String} zip
   */
  exports.prototype['zip'] = undefined;
  /**
   * @member {String} rate_send_from_email
   */
  exports.prototype['rate_send_from_email'] = undefined;
  /**
   * @member {String} billing_address
   */
  exports.prototype['billing_address'] = undefined;
  /**
   * @member {String} noc_email
   */
  exports.prototype['noc_email'] = undefined;
  /**
   * @member {String} rate_send_to_email
   */
  exports.prototype['rate_send_to_email'] = undefined;
  /**
   * @member {Date} modified_on
   */
  exports.prototype['modified_on'] = undefined;
  /**
   * @member {String} billing_zip
   */
  exports.prototype['billing_zip'] = undefined;
  /**
   * @member {String} tax_id
   */
  exports.prototype['tax_id'] = undefined;
  /**
   * @member {String} company
   */
  exports.prototype['company'] = undefined;
  /**
   * @member {String} password
   */
  exports.prototype['password'] = undefined;
  /**
   * @member {String} city
   */
  exports.prototype['city'] = undefined;
  /**
   * @member {String} country
   */
  exports.prototype['country'] = undefined;
  /**
   * @member {String} username
   */
  exports.prototype['username'] = undefined;
  /**
   * @member {String} company_detail
   */
  exports.prototype['company_detail'] = undefined;
  /**
   * @member {String} state
   */
  exports.prototype['state'] = undefined;
  /**
   * @member {String} address
   */
  exports.prototype['address'] = undefined;
  /**
   * @member {String} billing_contact_name
   */
  exports.prototype['billing_contact_name'] = undefined;
  /**
   * @member {String} billing_state
   */
  exports.prototype['billing_state'] = undefined;
  /**
   * @member {Number} send_signup_notification
   */
  exports.prototype['send_signup_notification'] = undefined;
  /**
   * @member {Date} signed_up_on
   */
  exports.prototype['signed_up_on'] = undefined;
  /**
   * @member {String} client_name
   */
  exports.prototype['client_name'] = undefined;
  /**
   * @member {String} billing_city
   */
  exports.prototype['billing_city'] = undefined;
  /**
   * @member {Array.<Number>} products
   */
  exports.prototype['products'] = undefined;
  /**
   * @member {String} billing_phone
   */
  exports.prototype['billing_phone'] = undefined;
  /**
   * @member {String} phone
   */
  exports.prototype['phone'] = undefined;



  return exports;
}));



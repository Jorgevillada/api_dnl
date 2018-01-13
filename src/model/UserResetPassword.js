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
    root.DnlApi.UserResetPassword = factory(root.DnlApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The UserResetPassword model module.
   * @module model/UserResetPassword
   * @version 1.2.62
   */

  /**
   * Constructs a new <code>UserResetPassword</code>.
   * @alias module:model/UserResetPassword
   * @class
   * @param password {String} 
   */
  var exports = function(password) {
    var _this = this;

    _this['password'] = password;

  };

  /**
   * Constructs a <code>UserResetPassword</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/UserResetPassword} obj Optional instance to populate.
   * @return {module:model/UserResetPassword} The populated <code>UserResetPassword</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('password')) {
        obj['password'] = ApiClient.convertToType(data['password'], 'String');
      }
      if (data.hasOwnProperty('token')) {
        obj['token'] = ApiClient.convertToType(data['token'], 'String');
      }
    }
    return obj;
  }

  /**
   * @member {String} password
   */
  exports.prototype['password'] = undefined;
  /**
   * @member {String} token
   */
  exports.prototype['token'] = undefined;



  return exports;
}));



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
    root.DnlApi.UserMin = factory(root.DnlApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The UserMin model module.
   * @module model/UserMin
   * @version 1.2.10
   */

  /**
   * Constructs a new <code>UserMin</code>.
   * @alias module:model/UserMin
   * @class
   * @param name {String} 
   * @param passwd {String} 
   */
  var exports = function(name, passwd) {
    var _this = this;

    _this['name'] = name;
    _this['passwd'] = passwd;

  };

  /**
   * Constructs a <code>UserMin</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/UserMin} obj Optional instance to populate.
   * @return {module:model/UserMin} The populated <code>UserMin</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('name')) {
        obj['name'] = ApiClient.convertToType(data['name'], 'String');
      }
      if (data.hasOwnProperty('passwd')) {
        obj['passwd'] = ApiClient.convertToType(data['passwd'], 'String');
      }
      if (data.hasOwnProperty('fullname')) {
        obj['fullname'] = ApiClient.convertToType(data['fullname'], 'String');
      }
    }
    return obj;
  }

  /**
   * @member {String} name
   */
  exports.prototype['name'] = undefined;
  /**
   * @member {String} passwd
   */
  exports.prototype['passwd'] = undefined;
  /**
   * @member {String} fullname
   */
  exports.prototype['fullname'] = undefined;



  return exports;
}));



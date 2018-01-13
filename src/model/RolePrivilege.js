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
    root.DnlApi.RolePrivilege = factory(root.DnlApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The RolePrivilege model module.
   * @module model/RolePrivilege
   * @version 1.2.62
   */

  /**
   * Constructs a new <code>RolePrivilege</code>.
   * @alias module:model/RolePrivilege
   * @class
   */
  var exports = function() {
    var _this = this;




  };

  /**
   * Constructs a <code>RolePrivilege</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/RolePrivilege} obj Optional instance to populate.
   * @return {module:model/RolePrivilege} The populated <code>RolePrivilege</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('writable')) {
        obj['writable'] = ApiClient.convertToType(data['writable'], 'Boolean');
      }
      if (data.hasOwnProperty('readable')) {
        obj['readable'] = ApiClient.convertToType(data['readable'], 'Boolean');
      }
      if (data.hasOwnProperty('executable')) {
        obj['executable'] = ApiClient.convertToType(data['executable'], 'Boolean');
      }
    }
    return obj;
  }

  /**
   * @member {Boolean} writable
   * @default true
   */
  exports.prototype['writable'] = true;
  /**
   * @member {Boolean} readable
   * @default true
   */
  exports.prototype['readable'] = true;
  /**
   * @member {Boolean} executable
   * @default true
   */
  exports.prototype['executable'] = true;



  return exports;
}));



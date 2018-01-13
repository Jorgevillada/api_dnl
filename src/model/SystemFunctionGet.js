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
    root.DnlApi.SystemFunctionGet = factory(root.DnlApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The SystemFunctionGet model module.
   * @module model/SystemFunctionGet
   * @version 1.2.62
   */

  /**
   * Constructs a new <code>SystemFunctionGet</code>.
   * @alias module:model/SystemFunctionGet
   * @class
   * @param developStatus {Number} 
   */
  var exports = function(developStatus) {
    var _this = this;








    _this['develop_status'] = developStatus;




  };

  /**
   * Constructs a <code>SystemFunctionGet</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/SystemFunctionGet} obj Optional instance to populate.
   * @return {module:model/SystemFunctionGet} The populated <code>SystemFunctionGet</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('func_type')) {
        obj['func_type'] = ApiClient.convertToType(data['func_type'], 'String');
      }
      if (data.hasOwnProperty('is_write')) {
        obj['is_write'] = ApiClient.convertToType(data['is_write'], 'Boolean');
      }
      if (data.hasOwnProperty('system_function_id')) {
        obj['system_function_id'] = ApiClient.convertToType(data['system_function_id'], 'Number');
      }
      if (data.hasOwnProperty('key_118n')) {
        obj['key_118n'] = ApiClient.convertToType(data['key_118n'], 'String');
      }
      if (data.hasOwnProperty('parent_id')) {
        obj['parent_id'] = ApiClient.convertToType(data['parent_id'], 'Number');
      }
      if (data.hasOwnProperty('is_exe')) {
        obj['is_exe'] = ApiClient.convertToType(data['is_exe'], 'Boolean');
      }
      if (data.hasOwnProperty('description')) {
        obj['description'] = ApiClient.convertToType(data['description'], 'String');
      }
      if (data.hasOwnProperty('develop_status')) {
        obj['develop_status'] = ApiClient.convertToType(data['develop_status'], 'Number');
      }
      if (data.hasOwnProperty('image_name')) {
        obj['image_name'] = ApiClient.convertToType(data['image_name'], 'String');
      }
      if (data.hasOwnProperty('func_url')) {
        obj['func_url'] = ApiClient.convertToType(data['func_url'], 'String');
      }
      if (data.hasOwnProperty('func_name')) {
        obj['func_name'] = ApiClient.convertToType(data['func_name'], 'String');
      }
      if (data.hasOwnProperty('is_read')) {
        obj['is_read'] = ApiClient.convertToType(data['is_read'], 'Boolean');
      }
    }
    return obj;
  }

  /**
   * @member {String} func_type
   */
  exports.prototype['func_type'] = undefined;
  /**
   * @member {Boolean} is_write
   */
  exports.prototype['is_write'] = undefined;
  /**
   * @member {Number} system_function_id
   */
  exports.prototype['system_function_id'] = undefined;
  /**
   * @member {String} key_118n
   */
  exports.prototype['key_118n'] = undefined;
  /**
   * @member {Number} parent_id
   */
  exports.prototype['parent_id'] = undefined;
  /**
   * @member {Boolean} is_exe
   */
  exports.prototype['is_exe'] = undefined;
  /**
   * @member {String} description
   */
  exports.prototype['description'] = undefined;
  /**
   * @member {Number} develop_status
   */
  exports.prototype['develop_status'] = undefined;
  /**
   * @member {String} image_name
   */
  exports.prototype['image_name'] = undefined;
  /**
   * @member {String} func_url
   */
  exports.prototype['func_url'] = undefined;
  /**
   * @member {String} func_name
   */
  exports.prototype['func_name'] = undefined;
  /**
   * @member {Boolean} is_read
   */
  exports.prototype['is_read'] = undefined;



  return exports;
}));



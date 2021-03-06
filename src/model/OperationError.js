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
    define(['ApiClient', 'model/UnauthenticatedErrorError'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./UnauthenticatedErrorError'));
  } else {
    // Browser globals (root is window)
    if (!root.DnlApi) {
      root.DnlApi = {};
    }
    root.DnlApi.OperationError = factory(root.DnlApi.ApiClient, root.DnlApi.UnauthenticatedErrorError);
  }
}(this, function(ApiClient, UnauthenticatedErrorError) {
  'use strict';




  /**
   * The OperationError model module.
   * @module model/OperationError
   * @version 1.2.62
   */

  /**
   * Constructs a new <code>OperationError</code>.
   * @alias module:model/OperationError
   * @class
   */
  var exports = function() {
    var _this = this;




  };

  /**
   * Constructs a <code>OperationError</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/OperationError} obj Optional instance to populate.
   * @return {module:model/OperationError} The populated <code>OperationError</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('error')) {
        obj['error'] = UnauthenticatedErrorError.constructFromObject(data['error']);
      }
      if (data.hasOwnProperty('success')) {
        obj['success'] = ApiClient.convertToType(data['success'], 'Boolean');
      }
      if (data.hasOwnProperty('error_type')) {
        obj['error_type'] = ApiClient.convertToType(data['error_type'], 'String');
      }
    }
    return obj;
  }

  /**
   * @member {module:model/UnauthenticatedErrorError} error
   */
  exports.prototype['error'] = undefined;
  /**
   * @member {Boolean} success
   * @default false
   */
  exports.prototype['success'] = false;
  /**
   * @member {String} error_type
   * @default 'operation_error'
   */
  exports.prototype['error_type'] = 'operation_error';



  return exports;
}));



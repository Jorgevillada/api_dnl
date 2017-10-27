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
    define(['ApiClient', 'model/GlobalRouteErrorGet'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./GlobalRouteErrorGet'));
  } else {
    // Browser globals (root is window)
    if (!root.DnlApi) {
      root.DnlApi = {};
    }
    root.DnlApi.GlobalRouteErrorManyGet = factory(root.DnlApi.ApiClient, root.DnlApi.GlobalRouteErrorGet);
  }
}(this, function(ApiClient, GlobalRouteErrorGet) {
  'use strict';




  /**
   * The GlobalRouteErrorManyGet model module.
   * @module model/GlobalRouteErrorManyGet
   * @version 1.2.10
   */

  /**
   * Constructs a new <code>GlobalRouteErrorManyGet</code>.
   * @alias module:model/GlobalRouteErrorManyGet
   * @class
   */
  var exports = function() {
    var _this = this;









  };

  /**
   * Constructs a <code>GlobalRouteErrorManyGet</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/GlobalRouteErrorManyGet} obj Optional instance to populate.
   * @return {module:model/GlobalRouteErrorManyGet} The populated <code>GlobalRouteErrorManyGet</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('to_sip_code')) {
        obj['to_sip_code'] = ApiClient.convertToType(data['to_sip_code'], 'Number');
      }
      if (data.hasOwnProperty('error_code')) {
        obj['error_code'] = ApiClient.convertToType(data['error_code'], 'Number');
      }
      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'Number');
      }
      if (data.hasOwnProperty('default_to_sip_code')) {
        obj['default_to_sip_code'] = ApiClient.convertToType(data['default_to_sip_code'], 'Number');
      }
      if (data.hasOwnProperty('default_to_sip_string')) {
        obj['default_to_sip_string'] = ApiClient.convertToType(data['default_to_sip_string'], 'String');
      }
      if (data.hasOwnProperty('to_sip_string')) {
        obj['to_sip_string'] = ApiClient.convertToType(data['to_sip_string'], 'String');
      }
      if (data.hasOwnProperty('error_description')) {
        obj['error_description'] = ApiClient.convertToType(data['error_description'], 'String');
      }
      if (data.hasOwnProperty('items')) {
        obj['items'] = GlobalRouteErrorGet.constructFromObject(data['items']);
      }
    }
    return obj;
  }

  /**
   * @member {Number} to_sip_code
   */
  exports.prototype['to_sip_code'] = undefined;
  /**
   * @member {Number} error_code
   */
  exports.prototype['error_code'] = undefined;
  /**
   * @member {Number} id
   */
  exports.prototype['id'] = undefined;
  /**
   * @member {Number} default_to_sip_code
   */
  exports.prototype['default_to_sip_code'] = undefined;
  /**
   * @member {String} default_to_sip_string
   */
  exports.prototype['default_to_sip_string'] = undefined;
  /**
   * @member {String} to_sip_string
   */
  exports.prototype['to_sip_string'] = undefined;
  /**
   * @member {String} error_description
   */
  exports.prototype['error_description'] = undefined;
  /**
   * @member {module:model/GlobalRouteErrorGet} items
   */
  exports.prototype['items'] = undefined;



  return exports;
}));


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
    root.DnlApi.ClientSimpleGet = factory(root.DnlApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The ClientSimpleGet model module.
   * @module model/ClientSimpleGet
   * @version 1.2.62
   */

  /**
   * Constructs a new <code>ClientSimpleGet</code>.
   * @alias module:model/ClientSimpleGet
   * @class
   */
  var exports = function() {
    var _this = this;







  };

  /**
   * Constructs a <code>ClientSimpleGet</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ClientSimpleGet} obj Optional instance to populate.
   * @return {module:model/ClientSimpleGet} The populated <code>ClientSimpleGet</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('status')) {
        obj['status'] = ApiClient.convertToType(data['status'], 'Boolean');
      }
      if (data.hasOwnProperty('client_id')) {
        obj['client_id'] = ApiClient.convertToType(data['client_id'], 'Number');
      }
      if (data.hasOwnProperty('email')) {
        obj['email'] = ApiClient.convertToType(data['email'], 'String');
      }
      if (data.hasOwnProperty('client_type')) {
        obj['client_type'] = ApiClient.convertToType(data['client_type'], 'String');
      }
      if (data.hasOwnProperty('mode')) {
        obj['mode'] = ApiClient.convertToType(data['mode'], 'Number');
      }
      if (data.hasOwnProperty('name')) {
        obj['name'] = ApiClient.convertToType(data['name'], 'String');
      }
    }
    return obj;
  }

  /**
   * @member {Boolean} status
   */
  exports.prototype['status'] = undefined;
  /**
   * @member {Number} client_id
   */
  exports.prototype['client_id'] = undefined;
  /**
   * @member {String} email
   */
  exports.prototype['email'] = undefined;
  /**
   * @member {module:model/ClientSimpleGet.ClientTypeEnum} client_type
   * @default 'vendor'
   */
  exports.prototype['client_type'] = 'vendor';
  /**
   * @member {Number} mode
   */
  exports.prototype['mode'] = undefined;
  /**
   * @member {String} name
   */
  exports.prototype['name'] = undefined;


  /**
   * Allowed values for the <code>client_type</code> property.
   * @enum {String}
   * @readonly
   */
  exports.ClientTypeEnum = {
    /**
     * value: "vendor"
     * @const
     */
    "vendor": "vendor",
    /**
     * value: "client"
     * @const
     */
    "client": "client"  };


  return exports;
}));



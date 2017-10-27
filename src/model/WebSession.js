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
    root.DnlApi.WebSession = factory(root.DnlApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The WebSession model module.
   * @module model/WebSession
   * @version 1.2.10
   */

  /**
   * Constructs a new <code>WebSession</code>.
   * @alias module:model/WebSession
   * @class
   */
  var exports = function() {
    var _this = this;








  };

  /**
   * Constructs a <code>WebSession</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/WebSession} obj Optional instance to populate.
   * @return {module:model/WebSession} The populated <code>WebSession</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('user_name')) {
        obj['user_name'] = ApiClient.convertToType(data['user_name'], 'String');
      }
      if (data.hasOwnProperty('user_id')) {
        obj['user_id'] = ApiClient.convertToType(data['user_id'], 'Number');
      }
      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'Number');
      }
      if (data.hasOwnProperty('agent')) {
        obj['agent'] = ApiClient.convertToType(data['agent'], 'String');
      }
      if (data.hasOwnProperty('host')) {
        obj['host'] = ApiClient.convertToType(data['host'], 'String');
      }
      if (data.hasOwnProperty('create_time')) {
        obj['create_time'] = ApiClient.convertToType(data['create_time'], 'Date');
      }
      if (data.hasOwnProperty('msg')) {
        obj['msg'] = ApiClient.convertToType(data['msg'], 'String');
      }
    }
    return obj;
  }

  /**
   * @member {String} user_name
   */
  exports.prototype['user_name'] = undefined;
  /**
   * @member {Number} user_id
   */
  exports.prototype['user_id'] = undefined;
  /**
   * @member {Number} id
   */
  exports.prototype['id'] = undefined;
  /**
   * @member {String} agent
   */
  exports.prototype['agent'] = undefined;
  /**
   * @member {String} host
   */
  exports.prototype['host'] = undefined;
  /**
   * @member {Date} create_time
   */
  exports.prototype['create_time'] = undefined;
  /**
   * @member {String} msg
   */
  exports.prototype['msg'] = undefined;



  return exports;
}));



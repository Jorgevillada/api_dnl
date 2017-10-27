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
    define(['ApiClient', 'model/ObjectsListPayload'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./ObjectsListPayload'));
  } else {
    // Browser globals (root is window)
    if (!root.DnlApi) {
      root.DnlApi = {};
    }
    root.DnlApi.ObjectsList = factory(root.DnlApi.ApiClient, root.DnlApi.ObjectsListPayload);
  }
}(this, function(ApiClient, ObjectsListPayload) {
  'use strict';




  /**
   * The ObjectsList model module.
   * @module model/ObjectsList
   * @version 1.2.10
   */

  /**
   * Constructs a new <code>ObjectsList</code>.
   * @alias module:model/ObjectsList
   * @class
   */
  var exports = function() {
    var _this = this;



  };

  /**
   * Constructs a <code>ObjectsList</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ObjectsList} obj Optional instance to populate.
   * @return {module:model/ObjectsList} The populated <code>ObjectsList</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('payload')) {
        obj['payload'] = ObjectsListPayload.constructFromObject(data['payload']);
      }
      if (data.hasOwnProperty('success')) {
        obj['success'] = ApiClient.convertToType(data['success'], 'Boolean');
      }
    }
    return obj;
  }

  /**
   * @member {module:model/ObjectsListPayload} payload
   */
  exports.prototype['payload'] = undefined;
  /**
   * @member {Boolean} success
   * @default true
   */
  exports.prototype['success'] = true;



  return exports;
}));



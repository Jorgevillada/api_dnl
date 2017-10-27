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
    define(['ApiClient', 'model/InlineResponse20086Payload'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./InlineResponse20086Payload'));
  } else {
    // Browser globals (root is window)
    if (!root.DnlApi) {
      root.DnlApi = {};
    }
    root.DnlApi.InlineResponse20086 = factory(root.DnlApi.ApiClient, root.DnlApi.InlineResponse20086Payload);
  }
}(this, function(ApiClient, InlineResponse20086Payload) {
  'use strict';




  /**
   * The InlineResponse20086 model module.
   * @module model/InlineResponse20086
   * @version 1.2.10
   */

  /**
   * Constructs a new <code>InlineResponse20086</code>.
   * @alias module:model/InlineResponse20086
   * @class
   */
  var exports = function() {
    var _this = this;



  };

  /**
   * Constructs a <code>InlineResponse20086</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/InlineResponse20086} obj Optional instance to populate.
   * @return {module:model/InlineResponse20086} The populated <code>InlineResponse20086</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('success')) {
        obj['success'] = ApiClient.convertToType(data['success'], 'Boolean');
      }
      if (data.hasOwnProperty('payload')) {
        obj['payload'] = InlineResponse20086Payload.constructFromObject(data['payload']);
      }
    }
    return obj;
  }

  /**
   * @member {Boolean} success
   * @default true
   */
  exports.prototype['success'] = true;
  /**
   * @member {module:model/InlineResponse20086Payload} payload
   */
  exports.prototype['payload'] = undefined;



  return exports;
}));



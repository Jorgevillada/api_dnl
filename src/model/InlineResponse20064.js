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
    define(['ApiClient', 'model/GlobalFailoverGet'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./GlobalFailoverGet'));
  } else {
    // Browser globals (root is window)
    if (!root.DnlApi) {
      root.DnlApi = {};
    }
    root.DnlApi.InlineResponse20064 = factory(root.DnlApi.ApiClient, root.DnlApi.GlobalFailoverGet);
  }
}(this, function(ApiClient, GlobalFailoverGet) {
  'use strict';




  /**
   * The InlineResponse20064 model module.
   * @module model/InlineResponse20064
   * @version 1.2.62
   */

  /**
   * Constructs a new <code>InlineResponse20064</code>.
   * @alias module:model/InlineResponse20064
   * @class
   */
  var exports = function() {
    var _this = this;



  };

  /**
   * Constructs a <code>InlineResponse20064</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/InlineResponse20064} obj Optional instance to populate.
   * @return {module:model/InlineResponse20064} The populated <code>InlineResponse20064</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('success')) {
        obj['success'] = ApiClient.convertToType(data['success'], 'Boolean');
      }
      if (data.hasOwnProperty('payload')) {
        obj['payload'] = GlobalFailoverGet.constructFromObject(data['payload']);
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
   * @member {module:model/GlobalFailoverGet} payload
   */
  exports.prototype['payload'] = undefined;



  return exports;
}));



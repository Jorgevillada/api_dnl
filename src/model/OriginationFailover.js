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
    root.DnlApi.OriginationFailover = factory(root.DnlApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The OriginationFailover model module.
   * @module model/OriginationFailover
   * @version 1.2.62
   */

  /**
   * Constructs a new <code>OriginationFailover</code>.
   * @alias module:model/OriginationFailover
   * @class
   */
  var exports = function() {
    var _this = this;




  };

  /**
   * Constructs a <code>OriginationFailover</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/OriginationFailover} obj Optional instance to populate.
   * @return {module:model/OriginationFailover} The populated <code>OriginationFailover</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('failover_method')) {
        obj['failover_method'] = ApiClient.convertToType(data['failover_method'], 'String');
      }
      if (data.hasOwnProperty('return_code')) {
        obj['return_code'] = ApiClient.convertToType(data['return_code'], 'Number');
      }
      if (data.hasOwnProperty('return_clause')) {
        obj['return_clause'] = ApiClient.convertToType(data['return_clause'], 'String');
      }
    }
    return obj;
  }

  /**
   * @member {module:model/OriginationFailover.FailoverMethodEnum} failover_method
   * @default 'Fail to Next Host'
   */
  exports.prototype['failover_method'] = 'Fail to Next Host';
  /**
   * @member {Number} return_code
   */
  exports.prototype['return_code'] = undefined;
  /**
   * @member {String} return_clause
   */
  exports.prototype['return_clause'] = undefined;


  /**
   * Allowed values for the <code>failover_method</code> property.
   * @enum {String}
   * @readonly
   */
  exports.FailoverMethodEnum = {
    /**
     * value: "Fail to Next Host"
     * @const
     */
    "Fail to Next Host": "Fail to Next Host",
    /**
     * value: "Fail to Next Trunk"
     * @const
     */
    "Fail to Next Trunk": "Fail to Next Trunk",
    /**
     * value: "Stop"
     * @const
     */
    "Stop": "Stop"  };


  return exports;
}));



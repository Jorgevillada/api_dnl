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
    root.DnlApi.GlobalFailover = factory(root.DnlApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The GlobalFailover model module.
   * @module model/GlobalFailover
   * @version 1.2.62
   */

  /**
   * Constructs a new <code>GlobalFailover</code>.
   * @alias module:model/GlobalFailover
   * @class
   */
  var exports = function() {
    var _this = this;





  };

  /**
   * Constructs a <code>GlobalFailover</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/GlobalFailover} obj Optional instance to populate.
   * @return {module:model/GlobalFailover} The populated <code>GlobalFailover</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('match_code')) {
        obj['match_code'] = ApiClient.convertToType(data['match_code'], 'Number');
      }
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
   * @member {Number} match_code
   */
  exports.prototype['match_code'] = undefined;
  /**
   * @member {module:model/GlobalFailover.FailoverMethodEnum} failover_method
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



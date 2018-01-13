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
    root.DnlApi.Filter = factory(root.DnlApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The Filter model module.
   * @module model/Filter
   * @version 1.2.62
   */

  /**
   * Constructs a new <code>Filter</code>.
   * @alias module:model/Filter
   * @class
   */
  var exports = function() {
    var _this = this;




  };

  /**
   * Constructs a <code>Filter</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Filter} obj Optional instance to populate.
   * @return {module:model/Filter} The populated <code>Filter</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('op')) {
        obj['op'] = ApiClient.convertToType(data['op'], 'String');
      }
      if (data.hasOwnProperty('field')) {
        obj['field'] = ApiClient.convertToType(data['field'], 'String');
      }
      if (data.hasOwnProperty('value')) {
        obj['value'] = ApiClient.convertToType(data['value'], 'String');
      }
    }
    return obj;
  }

  /**
   * @member {module:model/Filter.OpEnum} op
   */
  exports.prototype['op'] = undefined;
  /**
   * @member {String} field
   */
  exports.prototype['field'] = undefined;
  /**
   * @member {String} value
   */
  exports.prototype['value'] = undefined;


  /**
   * Allowed values for the <code>op</code> property.
   * @enum {String}
   * @readonly
   */
  exports.OpEnum = {
    /**
     * value: "="
     * @const
     */
    "EQUAL": "=",
    /**
     * value: "!="
     * @const
     */
    "NOT_EQUAL": "!=",
    /**
     * value: ">"
     * @const
     */
    "GREATER_THAN": ">",
    /**
     * value: "<"
     * @const
     */
    "LESS_THAN": "<",
    /**
     * value: ">="
     * @const
     */
    "GREATER_THAN_OR_EQUAL_TO": ">=",
    /**
     * value: "<="
     * @const
     */
    "LESS_THAN_OR_EQUAL_TO": "<=",
    /**
     * value: "like"
     * @const
     */
    "like": "like",
    /**
     * value: "@>"
     * @const
     */
    "@&gt;": "@>"  };


  return exports;
}));



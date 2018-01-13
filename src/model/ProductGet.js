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
    root.DnlApi.ProductGet = factory(root.DnlApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The ProductGet model module.
   * @module model/ProductGet
   * @version 1.2.62
   */

  /**
   * Constructs a new <code>ProductGet</code>.
   * @alias module:model/ProductGet
   * @class
   */
  var exports = function() {
    var _this = this;










  };

  /**
   * Constructs a <code>ProductGet</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ProductGet} obj Optional instance to populate.
   * @return {module:model/ProductGet} The populated <code>ProductGet</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('defined_by')) {
        obj['defined_by'] = ApiClient.convertToType(data['defined_by'], 'String');
      }
      if (data.hasOwnProperty('routed_by')) {
        obj['routed_by'] = ApiClient.convertToType(data['routed_by'], 'String');
      }
      if (data.hasOwnProperty('update_by')) {
        obj['update_by'] = ApiClient.convertToType(data['update_by'], 'String');
      }
      if (data.hasOwnProperty('code_deck_name')) {
        obj['code_deck_name'] = ApiClient.convertToType(data['code_deck_name'], 'String');
      }
      if (data.hasOwnProperty('prefix_count')) {
        obj['prefix_count'] = ApiClient.convertToType(data['prefix_count'], 'Number');
      }
      if (data.hasOwnProperty('update_at')) {
        obj['update_at'] = ApiClient.convertToType(data['update_at'], 'Date');
      }
      if (data.hasOwnProperty('static_route_id')) {
        obj['static_route_id'] = ApiClient.convertToType(data['static_route_id'], 'Number');
      }
      if (data.hasOwnProperty('route_count')) {
        obj['route_count'] = ApiClient.convertToType(data['route_count'], 'Number');
      }
      if (data.hasOwnProperty('name')) {
        obj['name'] = ApiClient.convertToType(data['name'], 'String');
      }
    }
    return obj;
  }

  /**
   * @member {module:model/ProductGet.DefinedByEnum} defined_by
   * @default 'Code'
   */
  exports.prototype['defined_by'] = 'Code';
  /**
   * @member {module:model/ProductGet.RoutedByEnum} routed_by
   * @default 'DNIS'
   */
  exports.prototype['routed_by'] = 'DNIS';
  /**
   * @member {String} update_by
   */
  exports.prototype['update_by'] = undefined;
  /**
   * @member {String} code_deck_name
   */
  exports.prototype['code_deck_name'] = undefined;
  /**
   * @member {Number} prefix_count
   */
  exports.prototype['prefix_count'] = undefined;
  /**
   * @member {Date} update_at
   */
  exports.prototype['update_at'] = undefined;
  /**
   * @member {Number} static_route_id
   */
  exports.prototype['static_route_id'] = undefined;
  /**
   * @member {Number} route_count
   */
  exports.prototype['route_count'] = undefined;
  /**
   * @member {String} name
   */
  exports.prototype['name'] = undefined;


  /**
   * Allowed values for the <code>defined_by</code> property.
   * @enum {String}
   * @readonly
   */
  exports.DefinedByEnum = {
    /**
     * value: "Code"
     * @const
     */
    "Code": "Code",
    /**
     * value: "Code Name"
     * @const
     */
    "Code Name": "Code Name",
    /**
     * value: "Country"
     * @const
     */
    "Country": "Country"  };

  /**
   * Allowed values for the <code>routed_by</code> property.
   * @enum {String}
   * @readonly
   */
  exports.RoutedByEnum = {
    /**
     * value: "DNIS"
     * @const
     */
    "DNIS": "DNIS",
    /**
     * value: "LRN"
     * @const
     */
    "LRN": "LRN",
    /**
     * value: "None"
     * @const
     */
    "None": "None"  };


  return exports;
}));



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
    root.DnlApi.Product = factory(root.DnlApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The Product model module.
   * @module model/Product
   * @version 1.2.62
   */

  /**
   * Constructs a new <code>Product</code>.
   * @alias module:model/Product
   * @class
   */
  var exports = function() {
    var _this = this;





  };

  /**
   * Constructs a <code>Product</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Product} obj Optional instance to populate.
   * @return {module:model/Product} The populated <code>Product</code> instance.
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
      if (data.hasOwnProperty('code_deck_id')) {
        obj['code_deck_id'] = ApiClient.convertToType(data['code_deck_id'], 'Number');
      }
      if (data.hasOwnProperty('name')) {
        obj['name'] = ApiClient.convertToType(data['name'], 'String');
      }
    }
    return obj;
  }

  /**
   * @member {module:model/Product.DefinedByEnum} defined_by
   * @default 'Code'
   */
  exports.prototype['defined_by'] = 'Code';
  /**
   * @member {module:model/Product.RoutedByEnum} routed_by
   * @default 'DNIS'
   */
  exports.prototype['routed_by'] = 'DNIS';
  /**
   * @member {Number} code_deck_id
   */
  exports.prototype['code_deck_id'] = undefined;
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



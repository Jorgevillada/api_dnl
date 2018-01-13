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
    root.DnlApi.TranslationItemGet = factory(root.DnlApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The TranslationItemGet model module.
   * @module model/TranslationItemGet
   * @version 1.2.62
   */

  /**
   * Constructs a new <code>TranslationItemGet</code>.
   * @alias module:model/TranslationItemGet
   * @class
   */
  var exports = function() {
    var _this = this;









  };

  /**
   * Constructs a <code>TranslationItemGet</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/TranslationItemGet} obj Optional instance to populate.
   * @return {module:model/TranslationItemGet} The populated <code>TranslationItemGet</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('ANI_replace_to')) {
        obj['ANI_replace_to'] = ApiClient.convertToType(data['ANI_replace_to'], 'String');
      }
      if (data.hasOwnProperty('ANI_action')) {
        obj['ANI_action'] = ApiClient.convertToType(data['ANI_action'], 'String');
      }
      if (data.hasOwnProperty('ref_id')) {
        obj['ref_id'] = ApiClient.convertToType(data['ref_id'], 'Number');
      }
      if (data.hasOwnProperty('DNIS_action')) {
        obj['DNIS_action'] = ApiClient.convertToType(data['DNIS_action'], 'String');
      }
      if (data.hasOwnProperty('DNIS_prefix')) {
        obj['DNIS_prefix'] = ApiClient.convertToType(data['DNIS_prefix'], 'String');
      }
      if (data.hasOwnProperty('digit_map_name')) {
        obj['digit_map_name'] = ApiClient.convertToType(data['digit_map_name'], 'String');
      }
      if (data.hasOwnProperty('ANI_prefix')) {
        obj['ANI_prefix'] = ApiClient.convertToType(data['ANI_prefix'], 'String');
      }
      if (data.hasOwnProperty('DNIS_replace_to')) {
        obj['DNIS_replace_to'] = ApiClient.convertToType(data['DNIS_replace_to'], 'String');
      }
    }
    return obj;
  }

  /**
   * @member {String} ANI_replace_to
   */
  exports.prototype['ANI_replace_to'] = undefined;
  /**
   * @member {module:model/TranslationItemGet.ANIActionEnum} ANI_action
   * @default 'ignore'
   */
  exports.prototype['ANI_action'] = 'ignore';
  /**
   * @member {Number} ref_id
   */
  exports.prototype['ref_id'] = undefined;
  /**
   * @member {module:model/TranslationItemGet.DNISActionEnum} DNIS_action
   * @default 'ignore'
   */
  exports.prototype['DNIS_action'] = 'ignore';
  /**
   * @member {String} DNIS_prefix
   */
  exports.prototype['DNIS_prefix'] = undefined;
  /**
   * @member {String} digit_map_name
   */
  exports.prototype['digit_map_name'] = undefined;
  /**
   * @member {String} ANI_prefix
   */
  exports.prototype['ANI_prefix'] = undefined;
  /**
   * @member {String} DNIS_replace_to
   */
  exports.prototype['DNIS_replace_to'] = undefined;


  /**
   * Allowed values for the <code>ANI_action</code> property.
   * @enum {String}
   * @readonly
   */
  exports.ANIActionEnum = {
    /**
     * value: "ignore"
     * @const
     */
    "ignore": "ignore",
    /**
     * value: "partial replacement"
     * @const
     */
    "partial replacement": "partial replacement",
    /**
     * value: "all replace"
     * @const
     */
    "all replace": "all replace"  };

  /**
   * Allowed values for the <code>DNIS_action</code> property.
   * @enum {String}
   * @readonly
   */
  exports.DNISActionEnum = {
    /**
     * value: "ignore"
     * @const
     */
    "ignore": "ignore",
    /**
     * value: "partial replacement"
     * @const
     */
    "partial replacement": "partial replacement",
    /**
     * value: "all replace"
     * @const
     */
    "all replace": "all replace"  };


  return exports;
}));



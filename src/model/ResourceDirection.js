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
    root.DnlApi.ResourceDirection = factory(root.DnlApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The ResourceDirection model module.
   * @module model/ResourceDirection
   * @version 1.2.62
   */

  /**
   * Constructs a new <code>ResourceDirection</code>.
   * @alias module:model/ResourceDirection
   * @class
   */
  var exports = function() {
    var _this = this;









  };

  /**
   * Constructs a <code>ResourceDirection</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ResourceDirection} obj Optional instance to populate.
   * @return {module:model/ResourceDirection} The populated <code>ResourceDirection</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('dnis')) {
        obj['dnis'] = ApiClient.convertToType(data['dnis'], 'String');
      }
      if (data.hasOwnProperty('number_length')) {
        obj['number_length'] = ApiClient.convertToType(data['number_length'], 'Number');
      }
      if (data.hasOwnProperty('number_type')) {
        obj['number_type'] = ApiClient.convertToType(data['number_type'], 'String');
      }
      if (data.hasOwnProperty('direction')) {
        obj['direction'] = ApiClient.convertToType(data['direction'], 'String');
      }
      if (data.hasOwnProperty('time_profile_id')) {
        obj['time_profile_id'] = ApiClient.convertToType(data['time_profile_id'], 'Number');
      }
      if (data.hasOwnProperty('type')) {
        obj['type'] = ApiClient.convertToType(data['type'], 'String');
      }
      if (data.hasOwnProperty('digits')) {
        obj['digits'] = ApiClient.convertToType(data['digits'], 'String');
      }
      if (data.hasOwnProperty('action')) {
        obj['action'] = ApiClient.convertToType(data['action'], 'String');
      }
    }
    return obj;
  }

  /**
   * @member {String} dnis
   */
  exports.prototype['dnis'] = undefined;
  /**
   * @member {Number} number_length
   */
  exports.prototype['number_length'] = undefined;
  /**
   * @member {module:model/ResourceDirection.NumberTypeEnum} number_type
   * @default 'all'
   */
  exports.prototype['number_type'] = 'all';
  /**
   * @member {module:model/ResourceDirection.DirectionEnum} direction
   * @default 'ALL'
   */
  exports.prototype['direction'] = 'ALL';
  /**
   * @member {Number} time_profile_id
   */
  exports.prototype['time_profile_id'] = undefined;
  /**
   * @member {module:model/ResourceDirection.TypeEnum} type
   * @default 'modify the caller'
   */
  exports.prototype['type'] = 'modify the caller';
  /**
   * @member {String} digits
   */
  exports.prototype['digits'] = undefined;
  /**
   * @member {module:model/ResourceDirection.ActionEnum} action
   * @default 'plus prefix'
   */
  exports.prototype['action'] = 'plus prefix';


  /**
   * Allowed values for the <code>number_type</code> property.
   * @enum {String}
   * @readonly
   */
  exports.NumberTypeEnum = {
    /**
     * value: "all"
     * @const
     */
    "all": "all",
    /**
     * value: "greater than"
     * @const
     */
    "greater than": "greater than",
    /**
     * value: "equal to"
     * @const
     */
    "equal to": "equal to",
    /**
     * value: "less than"
     * @const
     */
    "less than": "less than"  };

  /**
   * Allowed values for the <code>direction</code> property.
   * @enum {String}
   * @readonly
   */
  exports.DirectionEnum = {
    /**
     * value: "ALL"
     * @const
     */
    "ALL": "ALL",
    /**
     * value: "ingress"
     * @const
     */
    "ingress": "ingress",
    /**
     * value: "egress"
     * @const
     */
    "egress": "egress"  };

  /**
   * Allowed values for the <code>type</code> property.
   * @enum {String}
   * @readonly
   */
  exports.TypeEnum = {
    /**
     * value: "modify the caller"
     * @const
     */
    "caller": "modify the caller",
    /**
     * value: "modify the called"
     * @const
     */
    "called": "modify the called"  };

  /**
   * Allowed values for the <code>action</code> property.
   * @enum {String}
   * @readonly
   */
  exports.ActionEnum = {
    /**
     * value: "plus prefix"
     * @const
     */
    "plus prefix": "plus prefix",
    /**
     * value: "plus suffix"
     * @const
     */
    "plus suffix": "plus suffix",
    /**
     * value: "minus prefix"
     * @const
     */
    "minus prefix": "minus prefix",
    /**
     * value: "minus suffix"
     * @const
     */
    "minus suffix": "minus suffix"  };


  return exports;
}));



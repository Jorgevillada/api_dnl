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
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.DnlApi) {
      root.DnlApi = {};
    }
    root.DnlApi.ResourceDirectionGet = factory(root.DnlApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The ResourceDirectionGet model module.
   * @module model/ResourceDirectionGet
   * @version 1.2.10
   */

  /**
   * Constructs a new <code>ResourceDirectionGet</code>.
   * @alias module:model/ResourceDirectionGet
   * @class
   * @param directionId {Number} 
   * @param resourceId {Number} 
   */
  var exports = function(directionId, resourceId) {
    var _this = this;

    _this['direction_id'] = directionId;



    _this['resource_id'] = resourceId;





  };

  /**
   * Constructs a <code>ResourceDirectionGet</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ResourceDirectionGet} obj Optional instance to populate.
   * @return {module:model/ResourceDirectionGet} The populated <code>ResourceDirectionGet</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('direction_id')) {
        obj['direction_id'] = ApiClient.convertToType(data['direction_id'], 'Number');
      }
      if (data.hasOwnProperty('action')) {
        obj['action'] = ApiClient.convertToType(data['action'], 'String');
      }
      if (data.hasOwnProperty('direction')) {
        obj['direction'] = ApiClient.convertToType(data['direction'], 'String');
      }
      if (data.hasOwnProperty('time_profile_id')) {
        obj['time_profile_id'] = ApiClient.convertToType(data['time_profile_id'], 'Number');
      }
      if (data.hasOwnProperty('resource_id')) {
        obj['resource_id'] = ApiClient.convertToType(data['resource_id'], 'Number');
      }
      if (data.hasOwnProperty('number_length')) {
        obj['number_length'] = ApiClient.convertToType(data['number_length'], 'Number');
      }
      if (data.hasOwnProperty('dnis')) {
        obj['dnis'] = ApiClient.convertToType(data['dnis'], 'String');
      }
      if (data.hasOwnProperty('type')) {
        obj['type'] = ApiClient.convertToType(data['type'], 'String');
      }
      if (data.hasOwnProperty('number_type')) {
        obj['number_type'] = ApiClient.convertToType(data['number_type'], 'String');
      }
      if (data.hasOwnProperty('digits')) {
        obj['digits'] = ApiClient.convertToType(data['digits'], 'String');
      }
    }
    return obj;
  }

  /**
   * @member {Number} direction_id
   */
  exports.prototype['direction_id'] = undefined;
  /**
   * @member {module:model/ResourceDirectionGet.ActionEnum} action
   * @default 'plus prefix'
   */
  exports.prototype['action'] = 'plus prefix';
  /**
   * @member {module:model/ResourceDirectionGet.DirectionEnum} direction
   * @default 'ALL'
   */
  exports.prototype['direction'] = 'ALL';
  /**
   * @member {Number} time_profile_id
   */
  exports.prototype['time_profile_id'] = undefined;
  /**
   * @member {Number} resource_id
   */
  exports.prototype['resource_id'] = undefined;
  /**
   * @member {Number} number_length
   */
  exports.prototype['number_length'] = undefined;
  /**
   * @member {String} dnis
   */
  exports.prototype['dnis'] = undefined;
  /**
   * @member {module:model/ResourceDirectionGet.TypeEnum} type
   * @default 'modify the caller'
   */
  exports.prototype['type'] = 'modify the caller';
  /**
   * @member {module:model/ResourceDirectionGet.NumberTypeEnum} number_type
   * @default 'all'
   */
  exports.prototype['number_type'] = 'all';
  /**
   * @member {String} digits
   */
  exports.prototype['digits'] = undefined;


  /**
   * Allowed values for the <code>action</code> property.
   * @enum {String}
   * @readonly
   */
  exports.ActionEnum = {
    /**
     * value: "minus suffix"
     * @const
     */
    "minus suffix": "minus suffix",
    /**
     * value: "plus prefix"
     * @const
     */
    "plus prefix": "plus prefix",
    /**
     * value: "minus prefix"
     * @const
     */
    "minus prefix": "minus prefix",
    /**
     * value: "plus suffix"
     * @const
     */
    "plus suffix": "plus suffix"  };

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
     * value: "egress"
     * @const
     */
    "egress": "egress",
    /**
     * value: "ingress"
     * @const
     */
    "ingress": "ingress"  };

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
     * value: "modify the called "
     * @const
     */
    "called ": "modify the called "  };

  /**
   * Allowed values for the <code>number_type</code> property.
   * @enum {String}
   * @readonly
   */
  exports.NumberTypeEnum = {
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
     * value: "all"
     * @const
     */
    "all": "all",
    /**
     * value: "less than"
     * @const
     */
    "less than": "less than"  };


  return exports;
}));


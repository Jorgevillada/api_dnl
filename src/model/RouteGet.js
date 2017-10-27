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
    root.DnlApi.RouteGet = factory(root.DnlApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The RouteGet model module.
   * @module model/RouteGet
   * @version 1.2.10
   */

  /**
   * Constructs a new <code>RouteGet</code>.
   * @alias module:model/RouteGet
   * @class
   */
  var exports = function() {
    var _this = this;



















  };

  /**
   * Constructs a <code>RouteGet</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/RouteGet} obj Optional instance to populate.
   * @return {module:model/RouteGet} The populated <code>RouteGet</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('DNIS_max')) {
        obj['DNIS_max'] = ApiClient.convertToType(data['DNIS_max'], 'Number');
      }
      if (data.hasOwnProperty('DNIS_min')) {
        obj['DNIS_min'] = ApiClient.convertToType(data['DNIS_min'], 'Number');
      }
      if (data.hasOwnProperty('DNIS_prefix')) {
        obj['DNIS_prefix'] = ApiClient.convertToType(data['DNIS_prefix'], 'String');
      }
      if (data.hasOwnProperty('route_type')) {
        obj['route_type'] = ApiClient.convertToType(data['route_type'], 'String');
      }
      if (data.hasOwnProperty('route_plan_id')) {
        obj['route_plan_id'] = ApiClient.convertToType(data['route_plan_id'], 'Number');
      }
      if (data.hasOwnProperty('ANI_max')) {
        obj['ANI_max'] = ApiClient.convertToType(data['ANI_max'], 'Number');
      }
      if (data.hasOwnProperty('update_at')) {
        obj['update_at'] = ApiClient.convertToType(data['update_at'], 'Date');
      }
      if (data.hasOwnProperty('route_plan_name')) {
        obj['route_plan_name'] = ApiClient.convertToType(data['route_plan_name'], 'String');
      }
      if (data.hasOwnProperty('dynamic_route_name')) {
        obj['dynamic_route_name'] = ApiClient.convertToType(data['dynamic_route_name'], 'String');
      }
      if (data.hasOwnProperty('route_id')) {
        obj['route_id'] = ApiClient.convertToType(data['route_id'], 'Number');
      }
      if (data.hasOwnProperty('dynamic_route_id')) {
        obj['dynamic_route_id'] = ApiClient.convertToType(data['dynamic_route_id'], 'Number');
      }
      if (data.hasOwnProperty('static_route_name')) {
        obj['static_route_name'] = ApiClient.convertToType(data['static_route_name'], 'String');
      }
      if (data.hasOwnProperty('inter_static_route_id')) {
        obj['inter_static_route_id'] = ApiClient.convertToType(data['inter_static_route_id'], 'Number');
      }
      if (data.hasOwnProperty('intra_static_route_id')) {
        obj['intra_static_route_id'] = ApiClient.convertToType(data['intra_static_route_id'], 'Number');
      }
      if (data.hasOwnProperty('update_by')) {
        obj['update_by'] = ApiClient.convertToType(data['update_by'], 'String');
      }
      if (data.hasOwnProperty('ANI_prefix')) {
        obj['ANI_prefix'] = ApiClient.convertToType(data['ANI_prefix'], 'String');
      }
      if (data.hasOwnProperty('static_route_id')) {
        obj['static_route_id'] = ApiClient.convertToType(data['static_route_id'], 'Number');
      }
      if (data.hasOwnProperty('ANI_min')) {
        obj['ANI_min'] = ApiClient.convertToType(data['ANI_min'], 'Number');
      }
    }
    return obj;
  }

  /**
   * @member {Number} DNIS_max
   * @default 32
   */
  exports.prototype['DNIS_max'] = 32;
  /**
   * @member {Number} DNIS_min
   */
  exports.prototype['DNIS_min'] = undefined;
  /**
   * @member {String} DNIS_prefix
   */
  exports.prototype['DNIS_prefix'] = undefined;
  /**
   * @member {module:model/RouteGet.RouteTypeEnum} route_type
   * @default 'dynamic routing'
   */
  exports.prototype['route_type'] = 'dynamic routing';
  /**
   * @member {Number} route_plan_id
   */
  exports.prototype['route_plan_id'] = undefined;
  /**
   * @member {Number} ANI_max
   * @default 32
   */
  exports.prototype['ANI_max'] = 32;
  /**
   * @member {Date} update_at
   */
  exports.prototype['update_at'] = undefined;
  /**
   * @member {String} route_plan_name
   */
  exports.prototype['route_plan_name'] = undefined;
  /**
   * @member {String} dynamic_route_name
   */
  exports.prototype['dynamic_route_name'] = undefined;
  /**
   * @member {Number} route_id
   */
  exports.prototype['route_id'] = undefined;
  /**
   * @member {Number} dynamic_route_id
   */
  exports.prototype['dynamic_route_id'] = undefined;
  /**
   * @member {String} static_route_name
   */
  exports.prototype['static_route_name'] = undefined;
  /**
   * @member {Number} inter_static_route_id
   */
  exports.prototype['inter_static_route_id'] = undefined;
  /**
   * @member {Number} intra_static_route_id
   */
  exports.prototype['intra_static_route_id'] = undefined;
  /**
   * @member {String} update_by
   */
  exports.prototype['update_by'] = undefined;
  /**
   * @member {String} ANI_prefix
   */
  exports.prototype['ANI_prefix'] = undefined;
  /**
   * @member {Number} static_route_id
   */
  exports.prototype['static_route_id'] = undefined;
  /**
   * @member {Number} ANI_min
   */
  exports.prototype['ANI_min'] = undefined;


  /**
   * Allowed values for the <code>route_type</code> property.
   * @enum {String}
   * @readonly
   */
  exports.RouteTypeEnum = {
    /**
     * value: "static routing"
     * @const
     */
    "static routing": "static routing",
    /**
     * value: "dynamic routing"
     * @const
     */
    "dynamic routing": "dynamic routing"  };


  return exports;
}));



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
    root.DnlApi.ResourceCapacityGet = factory(root.DnlApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The ResourceCapacityGet model module.
   * @module model/ResourceCapacityGet
   * @version 1.2.62
   */

  /**
   * Constructs a new <code>ResourceCapacityGet</code>.
   * @alias module:model/ResourceCapacityGet
   * @class
   */
  var exports = function() {
    var _this = this;








  };

  /**
   * Constructs a <code>ResourceCapacityGet</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ResourceCapacityGet} obj Optional instance to populate.
   * @return {module:model/ResourceCapacityGet} The populated <code>ResourceCapacityGet</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('egress_name')) {
        obj['egress_name'] = ApiClient.convertToType(data['egress_name'], 'String');
      }
      if (data.hasOwnProperty('max_cps')) {
        obj['max_cps'] = ApiClient.convertToType(data['max_cps'], 'Number');
      }
      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'String');
      }
      if (data.hasOwnProperty('max_cap')) {
        obj['max_cap'] = ApiClient.convertToType(data['max_cap'], 'Number');
      }
      if (data.hasOwnProperty('ingress_name')) {
        obj['ingress_name'] = ApiClient.convertToType(data['ingress_name'], 'String');
      }
      if (data.hasOwnProperty('egress_id')) {
        obj['egress_id'] = ApiClient.convertToType(data['egress_id'], 'Number');
      }
      if (data.hasOwnProperty('ingress_id')) {
        obj['ingress_id'] = ApiClient.convertToType(data['ingress_id'], 'Number');
      }
    }
    return obj;
  }

  /**
   * @member {String} egress_name
   */
  exports.prototype['egress_name'] = undefined;
  /**
   * @member {Number} max_cps
   */
  exports.prototype['max_cps'] = undefined;
  /**
   * @member {String} id
   */
  exports.prototype['id'] = undefined;
  /**
   * @member {Number} max_cap
   */
  exports.prototype['max_cap'] = undefined;
  /**
   * @member {String} ingress_name
   */
  exports.prototype['ingress_name'] = undefined;
  /**
   * @member {Number} egress_id
   */
  exports.prototype['egress_id'] = undefined;
  /**
   * @member {Number} ingress_id
   */
  exports.prototype['ingress_id'] = undefined;



  return exports;
}));



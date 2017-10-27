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
    define(['ApiClient', 'model/ResourceGet'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./ResourceGet'));
  } else {
    // Browser globals (root is window)
    if (!root.DnlApi) {
      root.DnlApi = {};
    }
    root.DnlApi.TrunkGroupGet = factory(root.DnlApi.ApiClient, root.DnlApi.ResourceGet);
  }
}(this, function(ApiClient, ResourceGet) {
  'use strict';




  /**
   * The TrunkGroupGet model module.
   * @module model/TrunkGroupGet
   * @version 1.2.10
   */

  /**
   * Constructs a new <code>TrunkGroupGet</code>.
   * @alias module:model/TrunkGroupGet
   * @class
   */
  var exports = function() {
    var _this = this;






  };

  /**
   * Constructs a <code>TrunkGroupGet</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/TrunkGroupGet} obj Optional instance to populate.
   * @return {module:model/TrunkGroupGet} The populated <code>TrunkGroupGet</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('group_name')) {
        obj['group_name'] = ApiClient.convertToType(data['group_name'], 'String');
      }
      if (data.hasOwnProperty('group_id')) {
        obj['group_id'] = ApiClient.convertToType(data['group_id'], 'Number');
      }
      if (data.hasOwnProperty('trunks')) {
        obj['trunks'] = ApiClient.convertToType(data['trunks'], [ResourceGet]);
      }
      if (data.hasOwnProperty('trunk_type')) {
        obj['trunk_type'] = ApiClient.convertToType(data['trunk_type'], 'String');
      }
      if (data.hasOwnProperty('trunks_count')) {
        obj['trunks_count'] = ApiClient.convertToType(data['trunks_count'], 'Number');
      }
    }
    return obj;
  }

  /**
   * @member {String} group_name
   */
  exports.prototype['group_name'] = undefined;
  /**
   * @member {Number} group_id
   */
  exports.prototype['group_id'] = undefined;
  /**
   * @member {Array.<module:model/ResourceGet>} trunks
   */
  exports.prototype['trunks'] = undefined;
  /**
   * @member {module:model/TrunkGroupGet.TrunkTypeEnum} trunk_type
   * @default 'ingress'
   */
  exports.prototype['trunk_type'] = 'ingress';
  /**
   * @member {Number} trunks_count
   */
  exports.prototype['trunks_count'] = undefined;


  /**
   * Allowed values for the <code>trunk_type</code> property.
   * @enum {String}
   * @readonly
   */
  exports.TrunkTypeEnum = {
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


  return exports;
}));



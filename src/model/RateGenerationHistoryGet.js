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
    root.DnlApi.RateGenerationHistoryGet = factory(root.DnlApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The RateGenerationHistoryGet model module.
   * @module model/RateGenerationHistoryGet
   * @version 1.2.62
   */

  /**
   * Constructs a new <code>RateGenerationHistoryGet</code>.
   * @alias module:model/RateGenerationHistoryGet
   * @class
   */
  var exports = function() {
    var _this = this;












  };

  /**
   * Constructs a <code>RateGenerationHistoryGet</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/RateGenerationHistoryGet} obj Optional instance to populate.
   * @return {module:model/RateGenerationHistoryGet} The populated <code>RateGenerationHistoryGet</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('status')) {
        obj['status'] = ApiClient.convertToType(data['status'], 'String');
      }
      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'Number');
      }
      if (data.hasOwnProperty('finished_time')) {
        obj['finished_time'] = ApiClient.convertToType(data['finished_time'], 'Date');
      }
      if (data.hasOwnProperty('processing_time')) {
        obj['processing_time'] = ApiClient.convertToType(data['processing_time'], 'Number');
      }
      if (data.hasOwnProperty('rate_table_type')) {
        obj['rate_table_type'] = ApiClient.convertToType(data['rate_table_type'], 'Number');
      }
      if (data.hasOwnProperty('progress')) {
        obj['progress'] = ApiClient.convertToType(data['progress'], 'String');
      }
      if (data.hasOwnProperty('rate_count')) {
        obj['rate_count'] = ApiClient.convertToType(data['rate_count'], 'Number');
      }
      if (data.hasOwnProperty('is_applied')) {
        obj['is_applied'] = ApiClient.convertToType(data['is_applied'], 'Boolean');
      }
      if (data.hasOwnProperty('create_on')) {
        obj['create_on'] = ApiClient.convertToType(data['create_on'], 'Date');
      }
      if (data.hasOwnProperty('create_by')) {
        obj['create_by'] = ApiClient.convertToType(data['create_by'], 'String');
      }
      if (data.hasOwnProperty('rate_generation_template_id')) {
        obj['rate_generation_template_id'] = ApiClient.convertToType(data['rate_generation_template_id'], 'Number');
      }
    }
    return obj;
  }

  /**
   * @member {module:model/RateGenerationHistoryGet.StatusEnum} status
   * @default 'initial'
   */
  exports.prototype['status'] = 'initial';
  /**
   * @member {Number} id
   */
  exports.prototype['id'] = undefined;
  /**
   * @member {Date} finished_time
   */
  exports.prototype['finished_time'] = undefined;
  /**
   * @member {Number} processing_time
   */
  exports.prototype['processing_time'] = undefined;
  /**
   * @member {Number} rate_table_type
   */
  exports.prototype['rate_table_type'] = undefined;
  /**
   * @member {String} progress
   */
  exports.prototype['progress'] = undefined;
  /**
   * @member {Number} rate_count
   */
  exports.prototype['rate_count'] = undefined;
  /**
   * @member {Boolean} is_applied
   */
  exports.prototype['is_applied'] = undefined;
  /**
   * @member {Date} create_on
   */
  exports.prototype['create_on'] = undefined;
  /**
   * @member {String} create_by
   */
  exports.prototype['create_by'] = undefined;
  /**
   * @member {Number} rate_generation_template_id
   */
  exports.prototype['rate_generation_template_id'] = undefined;


  /**
   * Allowed values for the <code>status</code> property.
   * @enum {String}
   * @readonly
   */
  exports.StatusEnum = {
    /**
     * value: "initial"
     * @const
     */
    "initial": "initial",
    /**
     * value: "in process"
     * @const
     */
    "in process": "in process",
    /**
     * value: "finished"
     * @const
     */
    "finished": "finished",
    /**
     * value: "error"
     * @const
     */
    "error": "error"  };


  return exports;
}));



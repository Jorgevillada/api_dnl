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
    define(['ApiClient', 'model/RateSendGet'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./RateSendGet'));
  } else {
    // Browser globals (root is window)
    if (!root.DnlApi) {
      root.DnlApi = {};
    }
    root.DnlApi.RateSendLogDetailGet = factory(root.DnlApi.ApiClient, root.DnlApi.RateSendGet);
  }
}(this, function(ApiClient, RateSendGet) {
  'use strict';




  /**
   * The RateSendLogDetailGet model module.
   * @module model/RateSendLogDetailGet
   * @version 1.2.62
   */

  /**
   * Constructs a new <code>RateSendLogDetailGet</code>.
   * @alias module:model/RateSendLogDetailGet
   * @class
   */
  var exports = function() {
    var _this = this;








  };

  /**
   * Constructs a <code>RateSendLogDetailGet</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/RateSendLogDetailGet} obj Optional instance to populate.
   * @return {module:model/RateSendLogDetailGet} The populated <code>RateSendLogDetailGet</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('download_date')) {
        obj['download_date'] = ApiClient.convertToType(data['download_date'], 'Date');
      }
      if (data.hasOwnProperty('parent_job')) {
        obj['parent_job'] = RateSendGet.constructFromObject(data['parent_job']);
      }
      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'Number');
      }
      if (data.hasOwnProperty('send_to')) {
        obj['send_to'] = ApiClient.convertToType(data['send_to'], 'String');
      }
      if (data.hasOwnProperty('status')) {
        obj['status'] = ApiClient.convertToType(data['status'], 'String');
      }
      if (data.hasOwnProperty('trunk_id')) {
        obj['trunk_id'] = ApiClient.convertToType(data['trunk_id'], 'Number');
      }
      if (data.hasOwnProperty('send_on')) {
        obj['send_on'] = ApiClient.convertToType(data['send_on'], 'Date');
      }
    }
    return obj;
  }

  /**
   * @member {Date} download_date
   */
  exports.prototype['download_date'] = undefined;
  /**
   * @member {module:model/RateSendGet} parent_job
   */
  exports.prototype['parent_job'] = undefined;
  /**
   * @member {Number} id
   */
  exports.prototype['id'] = undefined;
  /**
   * @member {String} send_to
   */
  exports.prototype['send_to'] = undefined;
  /**
   * @member {module:model/RateSendLogDetailGet.StatusEnum} status
   * @default 'In Progress'
   */
  exports.prototype['status'] = 'In Progress';
  /**
   * @member {Number} trunk_id
   */
  exports.prototype['trunk_id'] = undefined;
  /**
   * @member {Date} send_on
   */
  exports.prototype['send_on'] = undefined;


  /**
   * Allowed values for the <code>status</code> property.
   * @enum {String}
   * @readonly
   */
  exports.StatusEnum = {
    /**
     * value: "In Progress"
     * @const
     */
    "In Progress": "In Progress",
    /**
     * value: "completed"
     * @const
     */
    "completed": "completed",
    /**
     * value: "failed"
     * @const
     */
    "failed": "failed",
    /**
     * value: "Downloaded"
     * @const
     */
    "Downloaded": "Downloaded",
    /**
     * value: "Not Yet Downloaded"
     * @const
     */
    "Not Yet Downloaded": "Not Yet Downloaded",
    /**
     * value: "Waiting"
     * @const
     */
    "Waiting": "Waiting"  };


  return exports;
}));



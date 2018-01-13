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
    root.DnlApi.FraudDetectionGet = factory(root.DnlApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The FraudDetectionGet model module.
   * @module model/FraudDetectionGet
   * @version 1.2.62
   */

  /**
   * Constructs a new <code>FraudDetectionGet</code>.
   * @alias module:model/FraudDetectionGet
   * @class
   */
  var exports = function() {
    var _this = this;
















  };

  /**
   * Constructs a <code>FraudDetectionGet</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/FraudDetectionGet} obj Optional instance to populate.
   * @return {module:model/FraudDetectionGet} The populated <code>FraudDetectionGet</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('update_by')) {
        obj['update_by'] = ApiClient.convertToType(data['update_by'], 'String');
      }
      if (data.hasOwnProperty('one_hour_duration')) {
        obj['one_hour_duration'] = ApiClient.convertToType(data['one_hour_duration'], 'Number');
      }
      if (data.hasOwnProperty('html_content')) {
        obj['html_content'] = ApiClient.convertToType(data['html_content'], 'String');
      }
      if (data.hasOwnProperty('hour_24_duration')) {
        obj['hour_24_duration'] = ApiClient.convertToType(data['hour_24_duration'], 'Number');
      }
      if (data.hasOwnProperty('email_to')) {
        obj['email_to'] = ApiClient.convertToType(data['email_to'], 'String');
      }
      if (data.hasOwnProperty('subject')) {
        obj['subject'] = ApiClient.convertToType(data['subject'], 'String');
      }
      if (data.hasOwnProperty('name')) {
        obj['name'] = ApiClient.convertToType(data['name'], 'String');
      }
      if (data.hasOwnProperty('one_hour_revenue')) {
        obj['one_hour_revenue'] = ApiClient.convertToType(data['one_hour_revenue'], 'Number');
      }
      if (data.hasOwnProperty('ingress_trunks')) {
        obj['ingress_trunks'] = ApiClient.convertToType(data['ingress_trunks'], ['Number']);
      }
      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'Number');
      }
      if (data.hasOwnProperty('hour_24_revenue')) {
        obj['hour_24_revenue'] = ApiClient.convertToType(data['hour_24_revenue'], 'Number');
      }
      if (data.hasOwnProperty('enable_email')) {
        obj['enable_email'] = ApiClient.convertToType(data['enable_email'], 'Boolean');
      }
      if (data.hasOwnProperty('active')) {
        obj['active'] = ApiClient.convertToType(data['active'], 'Boolean');
      }
      if (data.hasOwnProperty('enable_block')) {
        obj['enable_block'] = ApiClient.convertToType(data['enable_block'], 'Boolean');
      }
      if (data.hasOwnProperty('update_on')) {
        obj['update_on'] = ApiClient.convertToType(data['update_on'], 'Date');
      }
    }
    return obj;
  }

  /**
   * @member {String} update_by
   */
  exports.prototype['update_by'] = undefined;
  /**
   * @member {Number} one_hour_duration
   */
  exports.prototype['one_hour_duration'] = undefined;
  /**
   * @member {String} html_content
   */
  exports.prototype['html_content'] = undefined;
  /**
   * @member {Number} hour_24_duration
   */
  exports.prototype['hour_24_duration'] = undefined;
  /**
   * @member {module:model/FraudDetectionGet.EmailToEnum} email_to
   * @default 'Own NOC Email'
   */
  exports.prototype['email_to'] = 'Own NOC Email';
  /**
   * @member {String} subject
   */
  exports.prototype['subject'] = undefined;
  /**
   * @member {String} name
   */
  exports.prototype['name'] = undefined;
  /**
   * @member {Number} one_hour_revenue
   */
  exports.prototype['one_hour_revenue'] = undefined;
  /**
   * @member {Array.<Number>} ingress_trunks
   */
  exports.prototype['ingress_trunks'] = undefined;
  /**
   * @member {Number} id
   */
  exports.prototype['id'] = undefined;
  /**
   * @member {Number} hour_24_revenue
   */
  exports.prototype['hour_24_revenue'] = undefined;
  /**
   * @member {Boolean} enable_email
   */
  exports.prototype['enable_email'] = undefined;
  /**
   * @member {Boolean} active
   * @default true
   */
  exports.prototype['active'] = true;
  /**
   * @member {Boolean} enable_block
   */
  exports.prototype['enable_block'] = undefined;
  /**
   * @member {Date} update_on
   */
  exports.prototype['update_on'] = undefined;


  /**
   * Allowed values for the <code>email_to</code> property.
   * @enum {String}
   * @readonly
   */
  exports.EmailToEnum = {
    /**
     * value: "Own NOC Email"
     * @const
     */
    "Own NOC Email": "Own NOC Email",
    /**
     * value: "Partner NOC Email"
     * @const
     */
    "Partner NOC Email": "Partner NOC Email",
    /**
     * value: "Both"
     * @const
     */
    "Both": "Both"  };


  return exports;
}));



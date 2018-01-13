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
    root.DnlApi.RateModify2 = factory(root.DnlApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The RateModify2 model module.
   * @module model/RateModify2
   * @version 1.2.62
   */

  /**
   * Constructs a new <code>RateModify2</code>.
   * @alias module:model/RateModify2
   * @class
   * @param rate {Number} 
   */
  var exports = function(rate) {
    var _this = this;






    _this['rate'] = rate;










  };

  /**
   * Constructs a <code>RateModify2</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/RateModify2} obj Optional instance to populate.
   * @return {module:model/RateModify2} The populated <code>RateModify2</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('rate_table_id')) {
        obj['rate_table_id'] = ApiClient.convertToType(data['rate_table_id'], 'String');
      }
      if (data.hasOwnProperty('interval')) {
        obj['interval'] = ApiClient.convertToType(data['interval'], 'Number');
      }
      if (data.hasOwnProperty('code')) {
        obj['code'] = ApiClient.convertToType(data['code'], 'String');
      }
      if (data.hasOwnProperty('min_time')) {
        obj['min_time'] = ApiClient.convertToType(data['min_time'], 'Number');
      }
      if (data.hasOwnProperty('rate_id')) {
        obj['rate_id'] = ApiClient.convertToType(data['rate_id'], 'Number');
      }
      if (data.hasOwnProperty('rate')) {
        obj['rate'] = ApiClient.convertToType(data['rate'], 'Number');
      }
      if (data.hasOwnProperty('setup_fee')) {
        obj['setup_fee'] = ApiClient.convertToType(data['setup_fee'], 'Number');
      }
      if (data.hasOwnProperty('end_date')) {
        obj['end_date'] = ApiClient.convertToType(data['end_date'], 'Date');
      }
      if (data.hasOwnProperty('gmt')) {
        obj['gmt'] = ApiClient.convertToType(data['gmt'], 'String');
      }
      if (data.hasOwnProperty('code_name')) {
        obj['code_name'] = ApiClient.convertToType(data['code_name'], 'String');
      }
      if (data.hasOwnProperty('effective_date')) {
        obj['effective_date'] = ApiClient.convertToType(data['effective_date'], 'Date');
      }
      if (data.hasOwnProperty('inter_rate')) {
        obj['inter_rate'] = ApiClient.convertToType(data['inter_rate'], 'Number');
      }
      if (data.hasOwnProperty('time_profile_id')) {
        obj['time_profile_id'] = ApiClient.convertToType(data['time_profile_id'], 'Number');
      }
      if (data.hasOwnProperty('intra_rate')) {
        obj['intra_rate'] = ApiClient.convertToType(data['intra_rate'], 'Number');
      }
      if (data.hasOwnProperty('local_rate')) {
        obj['local_rate'] = ApiClient.convertToType(data['local_rate'], 'Number');
      }
      if (data.hasOwnProperty('country')) {
        obj['country'] = ApiClient.convertToType(data['country'], 'String');
      }
    }
    return obj;
  }

  /**
   * @member {String} rate_table_id
   */
  exports.prototype['rate_table_id'] = undefined;
  /**
   * @member {Number} interval
   * @default 1
   */
  exports.prototype['interval'] = 1;
  /**
   * @member {String} code
   */
  exports.prototype['code'] = undefined;
  /**
   * @member {Number} min_time
   * @default 60
   */
  exports.prototype['min_time'] = 60;
  /**
   * @member {Number} rate_id
   */
  exports.prototype['rate_id'] = undefined;
  /**
   * @member {Number} rate
   */
  exports.prototype['rate'] = undefined;
  /**
   * @member {Number} setup_fee
   * @default 0.0
   */
  exports.prototype['setup_fee'] = 0.0;
  /**
   * @member {Date} end_date
   */
  exports.prototype['end_date'] = undefined;
  /**
   * @member {String} gmt
   * @default '+0000'
   */
  exports.prototype['gmt'] = '+0000';
  /**
   * @member {String} code_name
   */
  exports.prototype['code_name'] = undefined;
  /**
   * @member {Date} effective_date
   */
  exports.prototype['effective_date'] = undefined;
  /**
   * @member {Number} inter_rate
   * @default 0.0
   */
  exports.prototype['inter_rate'] = 0.0;
  /**
   * @member {Number} time_profile_id
   */
  exports.prototype['time_profile_id'] = undefined;
  /**
   * @member {Number} intra_rate
   * @default 0.0
   */
  exports.prototype['intra_rate'] = 0.0;
  /**
   * @member {Number} local_rate
   * @default 0.0
   */
  exports.prototype['local_rate'] = 0.0;
  /**
   * @member {String} country
   */
  exports.prototype['country'] = undefined;



  return exports;
}));



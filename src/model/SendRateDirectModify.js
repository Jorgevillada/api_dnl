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
    root.DnlApi.SendRateDirectModify = factory(root.DnlApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The SendRateDirectModify model module.
   * @module model/SendRateDirectModify
   * @version 1.2.62
   */

  /**
   * Constructs a new <code>SendRateDirectModify</code>.
   * @alias module:model/SendRateDirectModify
   * @class
   */
  var exports = function() {
    var _this = this;







  };

  /**
   * Constructs a <code>SendRateDirectModify</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/SendRateDirectModify} obj Optional instance to populate.
   * @return {module:model/SendRateDirectModify} The populated <code>SendRateDirectModify</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('content')) {
        obj['content'] = ApiClient.convertToType(data['content'], 'String');
      }
      if (data.hasOwnProperty('mail_cc')) {
        obj['mail_cc'] = ApiClient.convertToType(data['mail_cc'], 'String');
      }
      if (data.hasOwnProperty('subject')) {
        obj['subject'] = ApiClient.convertToType(data['subject'], 'String');
      }
      if (data.hasOwnProperty('sender_id')) {
        obj['sender_id'] = ApiClient.convertToType(data['sender_id'], 'Number');
      }
      if (data.hasOwnProperty('download_method')) {
        obj['download_method'] = ApiClient.convertToType(data['download_method'], 'String');
      }
      if (data.hasOwnProperty('headers')) {
        obj['headers'] = ApiClient.convertToType(data['headers'], ['String']);
      }
    }
    return obj;
  }

  /**
   * @member {String} content
   */
  exports.prototype['content'] = undefined;
  /**
   * @member {String} mail_cc
   */
  exports.prototype['mail_cc'] = undefined;
  /**
   * @member {String} subject
   */
  exports.prototype['subject'] = undefined;
  /**
   * @member {Number} sender_id
   */
  exports.prototype['sender_id'] = undefined;
  /**
   * @member {module:model/SendRateDirectModify.DownloadMethodEnum} download_method
   * @default 'send as link'
   */
  exports.prototype['download_method'] = 'send as link';
  /**
   * @member {Array.<module:model/SendRateDirectModify.HeadersEnum>} headers
   */
  exports.prototype['headers'] = undefined;


  /**
   * Allowed values for the <code>download_method</code> property.
   * @enum {String}
   * @readonly
   */
  exports.DownloadMethodEnum = {
    /**
     * value: "send as link"
     * @const
     */
    "link": "send as link",
    /**
     * value: "send as attachment"
     * @const
     */
    "attachment": "send as attachment"  };

  /**
   * Allowed values for the <code>headers</code> property.
   * @enum {String}
   * @readonly
   */
  exports.HeadersEnum = {
    /**
     * value: "rate_id"
     * @const
     */
    "rate_id": "rate_id",
    /**
     * value: "rate_table_id"
     * @const
     */
    "rate_table_id": "rate_table_id",
    /**
     * value: "code"
     * @const
     */
    "code": "code",
    /**
     * value: "rate"
     * @const
     */
    "rate": "rate",
    /**
     * value: "setup_fee"
     * @const
     */
    "setup_fee": "setup_fee",
    /**
     * value: "effective_date"
     * @const
     */
    "effective_date": "effective_date",
    /**
     * value: "end_date"
     * @const
     */
    "end_date": "end_date",
    /**
     * value: "min_time"
     * @const
     */
    "min_time": "min_time",
    /**
     * value: "grace_time"
     * @const
     */
    "grace_time": "grace_time",
    /**
     * value: "interval"
     * @const
     */
    "interval": "interval",
    /**
     * value: "time_profile_id"
     * @const
     */
    "time_profile_id": "time_profile_id",
    /**
     * value: "seconds"
     * @const
     */
    "seconds": "seconds",
    /**
     * value: "code_name"
     * @const
     */
    "code_name": "code_name",
    /**
     * value: "basic_percentages"
     * @const
     */
    "basic_percentages": "basic_percentages",
    /**
     * value: "gift_percentages"
     * @const
     */
    "gift_percentages": "gift_percentages",
    /**
     * value: "rate_type"
     * @const
     */
    "rate_type": "rate_type",
    /**
     * value: "intra_rate"
     * @const
     */
    "intra_rate": "intra_rate",
    /**
     * value: "inter_rate"
     * @const
     */
    "inter_rate": "inter_rate",
    /**
     * value: "local_rate"
     * @const
     */
    "local_rate": "local_rate",
    /**
     * value: "country"
     * @const
     */
    "country": "country",
    /**
     * value: "zone"
     * @const
     */
    "zone": "zone",
    /**
     * value: "ocn"
     * @const
     */
    "ocn": "ocn",
    /**
     * value: "lata"
     * @const
     */
    "lata": "lata",
    /**
     * value: "create_time"
     * @const
     */
    "create_time": "create_time",
    /**
     * value: "did_type"
     * @const
     */
    "did_type": "did_type"  };


  return exports;
}));



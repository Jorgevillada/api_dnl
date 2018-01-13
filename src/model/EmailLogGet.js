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
    root.DnlApi.EmailLogGet = factory(root.DnlApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The EmailLogGet model module.
   * @module model/EmailLogGet
   * @version 1.2.62
   */

  /**
   * Constructs a new <code>EmailLogGet</code>.
   * @alias module:model/EmailLogGet
   * @class
   */
  var exports = function() {
    var _this = this;










  };

  /**
   * Constructs a <code>EmailLogGet</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/EmailLogGet} obj Optional instance to populate.
   * @return {module:model/EmailLogGet} The populated <code>EmailLogGet</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('subject')) {
        obj['subject'] = ApiClient.convertToType(data['subject'], 'String');
      }
      if (data.hasOwnProperty('content')) {
        obj['content'] = ApiClient.convertToType(data['content'], 'String');
      }
      if (data.hasOwnProperty('client_id')) {
        obj['client_id'] = ApiClient.convertToType(data['client_id'], 'Number');
      }
      if (data.hasOwnProperty('sent_from')) {
        obj['sent_from'] = ApiClient.convertToType(data['sent_from'], 'String');
      }
      if (data.hasOwnProperty('sent_to')) {
        obj['sent_to'] = ApiClient.convertToType(data['sent_to'], 'String');
      }
      if (data.hasOwnProperty('status')) {
        obj['status'] = ApiClient.convertToType(data['status'], 'String');
      }
      if (data.hasOwnProperty('type')) {
        obj['type'] = ApiClient.convertToType(data['type'], 'String');
      }
      if (data.hasOwnProperty('client_name')) {
        obj['client_name'] = ApiClient.convertToType(data['client_name'], 'String');
      }
      if (data.hasOwnProperty('date')) {
        obj['date'] = ApiClient.convertToType(data['date'], 'Date');
      }
    }
    return obj;
  }

  /**
   * @member {String} subject
   */
  exports.prototype['subject'] = undefined;
  /**
   * @member {String} content
   */
  exports.prototype['content'] = undefined;
  /**
   * @member {Number} client_id
   */
  exports.prototype['client_id'] = undefined;
  /**
   * @member {String} sent_from
   */
  exports.prototype['sent_from'] = undefined;
  /**
   * @member {String} sent_to
   */
  exports.prototype['sent_to'] = undefined;
  /**
   * @member {module:model/EmailLogGet.StatusEnum} status
   * @default 'success'
   */
  exports.prototype['status'] = 'success';
  /**
   * @member {module:model/EmailLogGet.TypeEnum} type
   * @default 'undefined'
   */
  exports.prototype['type'] = 'undefined';
  /**
   * @member {String} client_name
   */
  exports.prototype['client_name'] = undefined;
  /**
   * @member {Date} date
   */
  exports.prototype['date'] = undefined;


  /**
   * Allowed values for the <code>status</code> property.
   * @enum {String}
   * @readonly
   */
  exports.StatusEnum = {
    /**
     * value: "success"
     * @const
     */
    "success": "success",
    /**
     * value: "fail"
     * @const
     */
    "fail": "fail"  };

  /**
   * Allowed values for the <code>type</code> property.
   * @enum {String}
   * @readonly
   */
  exports.TypeEnum = {
    /**
     * value: "undefined"
     * @const
     */
    "undefined": "undefined",
    /**
     * value: "lowbalance"
     * @const
     */
    "lowbalance": "lowbalance",
    /**
     * value: "auto_summary"
     * @const
     */
    "auto_summary": "auto_summary",
    /**
     * value: "auto_delivery"
     * @const
     */
    "auto_delivery": "auto_delivery",
    /**
     * value: "route_update_alert_email"
     * @const
     */
    "route_update_alert_email": "route_update_alert_email",
    /**
     * value: "download_cdr"
     * @const
     */
    "download_cdr": "download_cdr",
    /**
     * value: "exchange_auto_summary"
     * @const
     */
    "exchange_auto_summary": "exchange_auto_summary",
    /**
     * value: "invoice"
     * @const
     */
    "invoice": "invoice",
    /**
     * value: "payment"
     * @const
     */
    "payment": "payment",
    /**
     * value: "auto_balance"
     * @const
     */
    "auto_balance": "auto_balance",
    /**
     * value: "carrier_invoice"
     * @const
     */
    "carrier_invoice": "carrier_invoice",
    /**
     * value: "auto_cdr"
     * @const
     */
    "auto_cdr": "auto_cdr",
    /**
     * value: "no_route_available_alert_email"
     * @const
     */
    "no_route_available_alert_email": "no_route_available_alert_email",
    /**
     * value: "target_match_alert_email"
     * @const
     */
    "target_match_alert_email": "target_match_alert_email",
    /**
     * value: "rate_watch_alert_email"
     * @const
     */
    "rate_watch_alert_email": "rate_watch_alert_email",
    /**
     * value: "noc_email"
     * @const
     */
    "noc_email": "noc_email",
    /**
     * value: "rate_update_alert_email"
     * @const
     */
    "rate_update_alert_email": "rate_update_alert_email",
    /**
     * value: "low_balance_alert_email"
     * @const
     */
    "low_balance_alert_email": "low_balance_alert_email",
    /**
     * value: "new_invoice_posted_mail_alert_email"
     * @const
     */
    "new_invoice_posted_mail_alert_email": "new_invoice_posted_mail_alert_email",
    /**
     * value: "payment_sent"
     * @const
     */
    "payment_sent": "payment_sent",
    /**
     * value: "trouble_ticket"
     * @const
     */
    "trouble_ticket": "trouble_ticket",
    /**
     * value: "payment_received"
     * @const
     */
    "payment_received": "payment_received",
    /**
     * value: "send_cdr"
     * @const
     */
    "send_cdr": "send_cdr",
    /**
     * value: "select_route_up_email"
     * @const
     */
    "select_route_up_email": "select_route_up_email",
    /**
     * value: "alert_email"
     * @const
     */
    "alert_email": "alert_email",
    /**
     * value: "finance_alert"
     * @const
     */
    "finance_alert": "finance_alert",
    /**
     * value: "buy_qos_alert"
     * @const
     */
    "buy_qos_alert": "buy_qos_alert",
    /**
     * value: "sell_qos_alert"
     * @const
     */
    "sell_qos_alert": "sell_qos_alert",
    /**
     * value: "rate_mail_success"
     * @const
     */
    "rate_mail_success": "rate_mail_success",
    /**
     * value: "rate_mail_fail"
     * @const
     */
    "rate_mail_fail": "rate_mail_fail",
    /**
     * value: "daily_payment"
     * @const
     */
    "daily_payment": "daily_payment",
    /**
     * value: "rate"
     * @const
     */
    "rate": "rate",
    /**
     * value: "dialer_detection"
     * @const
     */
    "dialer_detection": "dialer_detection",
    /**
     * value: "retrieve_password"
     * @const
     */
    "retrieve_password": "retrieve_password",
    /**
     * value: "registration"
     * @const
     */
    "registration": "registration",
    /**
     * value: "trunk_change"
     * @const
     */
    "trunk_change": "trunk_change",
    /**
     * value: "fraud_detection"
     * @const
     */
    "fraud_detection": "fraud_detection",
    /**
     * value: "welcom"
     * @const
     */
    "welcom": "welcom",
    /**
     * value: "download_rate_notice"
     * @const
     */
    "download_rate_notice": "download_rate_notice",
    /**
     * value: "no_download_rate"
     * @const
     */
    "no_download_rate": "no_download_rate",
    /**
     * value: "carrier_email"
     * @const
     */
    "carrier_email": "carrier_email",
    /**
     * value: "vendor_invoice_dispute"
     * @const
     */
    "vendor_invoice_dispute": "vendor_invoice_dispute",
    /**
     * value: "trunk_interop"
     * @const
     */
    "trunk_interop": "trunk_interop",
    /**
     * value: "regletter"
     * @const
     */
    "regletter": "regletter",
    /**
     * value: "paymresvd"
     * @const
     */
    "paymresvd": "paymresvd",
    /**
     * value: "zerobalance"
     * @const
     */
    "zerobalance": "zerobalance",
    /**
     * value: "did_order_letter"
     * @const
     */
    "did_order_letter": "did_order_letter",
    /**
     * value: "pending_trunk"
     * @const
     */
    "pending_trunk": "pending_trunk"  };


  return exports;
}));



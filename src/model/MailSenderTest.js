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
    root.DnlApi.MailSenderTest = factory(root.DnlApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The MailSenderTest model module.
   * @module model/MailSenderTest
   * @version 1.2.10
   */

  /**
   * Constructs a new <code>MailSenderTest</code>.
   * @alias module:model/MailSenderTest
   * @class
   */
  var exports = function() {
    var _this = this;




  };

  /**
   * Constructs a <code>MailSenderTest</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/MailSenderTest} obj Optional instance to populate.
   * @return {module:model/MailSenderTest} The populated <code>MailSenderTest</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('test_content')) {
        obj['test_content'] = ApiClient.convertToType(data['test_content'], 'String');
      }
      if (data.hasOwnProperty('test_subject')) {
        obj['test_subject'] = ApiClient.convertToType(data['test_subject'], 'String');
      }
      if (data.hasOwnProperty('mail_to')) {
        obj['mail_to'] = ApiClient.convertToType(data['mail_to'], 'String');
      }
    }
    return obj;
  }

  /**
   * @member {String} test_content
   */
  exports.prototype['test_content'] = undefined;
  /**
   * @member {String} test_subject
   */
  exports.prototype['test_subject'] = undefined;
  /**
   * @member {String} mail_to
   */
  exports.prototype['mail_to'] = undefined;



  return exports;
}));



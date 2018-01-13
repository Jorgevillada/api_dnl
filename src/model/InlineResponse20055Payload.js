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
    define(['ApiClient', 'model/MailSenderGet'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./MailSenderGet'));
  } else {
    // Browser globals (root is window)
    if (!root.DnlApi) {
      root.DnlApi = {};
    }
    root.DnlApi.InlineResponse20055Payload = factory(root.DnlApi.ApiClient, root.DnlApi.MailSenderGet);
  }
}(this, function(ApiClient, MailSenderGet) {
  'use strict';




  /**
   * The InlineResponse20055Payload model module.
   * @module model/InlineResponse20055Payload
   * @version 1.2.62
   */

  /**
   * Constructs a new <code>InlineResponse20055Payload</code>.
   * @alias module:model/InlineResponse20055Payload
   * @class
   */
  var exports = function() {
    var _this = this;





  };

  /**
   * Constructs a <code>InlineResponse20055Payload</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/InlineResponse20055Payload} obj Optional instance to populate.
   * @return {module:model/InlineResponse20055Payload} The populated <code>InlineResponse20055Payload</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('total')) {
        obj['total'] = ApiClient.convertToType(data['total'], 'Number');
      }
      if (data.hasOwnProperty('page')) {
        obj['page'] = ApiClient.convertToType(data['page'], 'Number');
      }
      if (data.hasOwnProperty('per_page')) {
        obj['per_page'] = ApiClient.convertToType(data['per_page'], 'Number');
      }
      if (data.hasOwnProperty('items')) {
        obj['items'] = ApiClient.convertToType(data['items'], [MailSenderGet]);
      }
    }
    return obj;
  }

  /**
   * Total items found
   * @member {Number} total
   */
  exports.prototype['total'] = undefined;
  /**
   * Current page (starting from 0)
   * @member {Number} page
   */
  exports.prototype['page'] = undefined;
  /**
   * Items per page
   * @member {Number} per_page
   */
  exports.prototype['per_page'] = undefined;
  /**
   * @member {Array.<module:model/MailSenderGet>} items
   */
  exports.prototype['items'] = undefined;



  return exports;
}));



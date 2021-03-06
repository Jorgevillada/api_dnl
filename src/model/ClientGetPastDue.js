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
    define(['ApiClient', 'model/PastDue'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./PastDue'));
  } else {
    // Browser globals (root is window)
    if (!root.DnlApi) {
      root.DnlApi = {};
    }
    root.DnlApi.ClientGetPastDue = factory(root.DnlApi.ApiClient, root.DnlApi.PastDue);
  }
}(this, function(ApiClient, PastDue) {
  'use strict';




  /**
   * The ClientGetPastDue model module.
   * @module model/ClientGetPastDue
   * @version 1.2.62
   */

  /**
   * Constructs a new <code>ClientGetPastDue</code>.
   * @alias module:model/ClientGetPastDue
   * @class
   */
  var exports = function() {
    var _this = this;





  };

  /**
   * Constructs a <code>ClientGetPastDue</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ClientGetPastDue} obj Optional instance to populate.
   * @return {module:model/ClientGetPastDue} The populated <code>ClientGetPastDue</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('client_id')) {
        obj['client_id'] = ApiClient.convertToType(data['client_id'], 'Number');
      }
      if (data.hasOwnProperty('over_due')) {
        obj['over_due'] = ApiClient.convertToType(data['over_due'], 'Number');
      }
      if (data.hasOwnProperty('name')) {
        obj['name'] = ApiClient.convertToType(data['name'], 'String');
      }
      if (data.hasOwnProperty('past_due')) {
        obj['past_due'] = PastDue.constructFromObject(data['past_due']);
      }
    }
    return obj;
  }

  /**
   * @member {Number} client_id
   */
  exports.prototype['client_id'] = undefined;
  /**
   * @member {Number} over_due
   */
  exports.prototype['over_due'] = undefined;
  /**
   * @member {String} name
   */
  exports.prototype['name'] = undefined;
  /**
   * @member {module:model/PastDue} past_due
   */
  exports.prototype['past_due'] = undefined;



  return exports;
}));



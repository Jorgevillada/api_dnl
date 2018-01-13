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
    root.DnlApi.SystemParameterLoginPage = factory(root.DnlApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The SystemParameterLoginPage model module.
   * @module model/SystemParameterLoginPage
   * @version 1.2.62
   */

  /**
   * Constructs a new <code>SystemParameterLoginPage</code>.
   * @alias module:model/SystemParameterLoginPage
   * @class
   */
  var exports = function() {
    var _this = this;









  };

  /**
   * Constructs a <code>SystemParameterLoginPage</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/SystemParameterLoginPage} obj Optional instance to populate.
   * @return {module:model/SystemParameterLoginPage} The populated <code>SystemParameterLoginPage</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('image_url')) {
        obj['image_url'] = ApiClient.convertToType(data['image_url'], 'String');
      }
      if (data.hasOwnProperty('logo_icon_id')) {
        obj['logo_icon_id'] = ApiClient.convertToType(data['logo_icon_id'], 'Number');
      }
      if (data.hasOwnProperty('base_url')) {
        obj['base_url'] = ApiClient.convertToType(data['base_url'], 'String');
      }
      if (data.hasOwnProperty('logo_image_id')) {
        obj['logo_image_id'] = ApiClient.convertToType(data['logo_image_id'], 'Number');
      }
      if (data.hasOwnProperty('content')) {
        obj['content'] = ApiClient.convertToType(data['content'], 'String');
      }
      if (data.hasOwnProperty('default_avatar_id')) {
        obj['default_avatar_id'] = ApiClient.convertToType(data['default_avatar_id'], 'Number');
      }
      if (data.hasOwnProperty('use_captcha')) {
        obj['use_captcha'] = ApiClient.convertToType(data['use_captcha'], 'Boolean');
      }
      if (data.hasOwnProperty('fit_to_screen')) {
        obj['fit_to_screen'] = ApiClient.convertToType(data['fit_to_screen'], 'Boolean');
      }
    }
    return obj;
  }

  /**
   * @member {String} image_url
   */
  exports.prototype['image_url'] = undefined;
  /**
   * @member {Number} logo_icon_id
   */
  exports.prototype['logo_icon_id'] = undefined;
  /**
   * @member {String} base_url
   */
  exports.prototype['base_url'] = undefined;
  /**
   * @member {Number} logo_image_id
   */
  exports.prototype['logo_image_id'] = undefined;
  /**
   * @member {String} content
   */
  exports.prototype['content'] = undefined;
  /**
   * @member {Number} default_avatar_id
   */
  exports.prototype['default_avatar_id'] = undefined;
  /**
   * @member {Boolean} use_captcha
   */
  exports.prototype['use_captcha'] = undefined;
  /**
   * @member {Boolean} fit_to_screen
   */
  exports.prototype['fit_to_screen'] = undefined;



  return exports;
}));



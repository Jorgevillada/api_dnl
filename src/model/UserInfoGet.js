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
    define(['ApiClient', 'model/UsersLimit'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./UsersLimit'));
  } else {
    // Browser globals (root is window)
    if (!root.DnlApi) {
      root.DnlApi = {};
    }
    root.DnlApi.UserInfoGet = factory(root.DnlApi.ApiClient, root.DnlApi.UsersLimit);
  }
}(this, function(ApiClient, UsersLimit) {
  'use strict';




  /**
   * The UserInfoGet model module.
   * @module model/UserInfoGet
   * @version 1.2.62
   */

  /**
   * Constructs a new <code>UserInfoGet</code>.
   * @alias module:model/UserInfoGet
   * @class
   * @param passwd {String} 
   * @param name {String} 
   */
  var exports = function(passwd, name) {
    var _this = this;






    _this['passwd'] = passwd;


    _this['name'] = name;


























  };

  /**
   * Constructs a <code>UserInfoGet</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/UserInfoGet} obj Optional instance to populate.
   * @return {module:model/UserInfoGet} The populated <code>UserInfoGet</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('cdr_expire')) {
        obj['cdr_expire'] = ApiClient.convertToType(data['cdr_expire'], 'Date');
      }
      if (data.hasOwnProperty('user_type')) {
        obj['user_type'] = ApiClient.convertToType(data['user_type'], 'String');
      }
      if (data.hasOwnProperty('default_mod2')) {
        obj['default_mod2'] = ApiClient.convertToType(data['default_mod2'], 'String');
      }
      if (data.hasOwnProperty('last_login_time')) {
        obj['last_login_time'] = ApiClient.convertToType(data['last_login_time'], 'Date');
      }
      if (data.hasOwnProperty('client_limits')) {
        obj['client_limits'] = ApiClient.convertToType(data['client_limits'], [UsersLimit]);
      }
      if (data.hasOwnProperty('passwd')) {
        obj['passwd'] = ApiClient.convertToType(data['passwd'], 'String');
      }
      if (data.hasOwnProperty('outbound_report')) {
        obj['outbound_report'] = ApiClient.convertToType(data['outbound_report'], 'Boolean');
      }
      if (data.hasOwnProperty('show_carrier_trunk_drop_only')) {
        obj['show_carrier_trunk_drop_only'] = ApiClient.convertToType(data['show_carrier_trunk_drop_only'], 'Boolean');
      }
      if (data.hasOwnProperty('name')) {
        obj['name'] = ApiClient.convertToType(data['name'], 'String');
      }
      if (data.hasOwnProperty('is_online')) {
        obj['is_online'] = ApiClient.convertToType(data['is_online'], 'Number');
      }
      if (data.hasOwnProperty('create_user_id')) {
        obj['create_user_id'] = ApiClient.convertToType(data['create_user_id'], 'Number');
      }
      if (data.hasOwnProperty('auth_ip')) {
        obj['auth_ip'] = ApiClient.convertToType(data['auth_ip'], ['String']);
      }
      if (data.hasOwnProperty('reseller_id')) {
        obj['reseller_id'] = ApiClient.convertToType(data['reseller_id'], 'Number');
      }
      if (data.hasOwnProperty('agent')) {
        obj['agent'] = ApiClient.convertToType(data['agent'], 'String');
      }
      if (data.hasOwnProperty('user_id')) {
        obj['user_id'] = ApiClient.convertToType(data['user_id'], 'Number');
      }
      if (data.hasOwnProperty('report_fields')) {
        obj['report_fields'] = ApiClient.convertToType(data['report_fields'], 'String');
      }
      if (data.hasOwnProperty('role_id')) {
        obj['role_id'] = ApiClient.convertToType(data['role_id'], 'Number');
      }
      if (data.hasOwnProperty('active')) {
        obj['active'] = ApiClient.convertToType(data['active'], 'Boolean');
      }
      if (data.hasOwnProperty('fullname')) {
        obj['fullname'] = ApiClient.convertToType(data['fullname'], 'String');
      }
      if (data.hasOwnProperty('landing_page')) {
        obj['landing_page'] = ApiClient.convertToType(data['landing_page'], 'String');
      }
      if (data.hasOwnProperty('client')) {
        obj['client'] = ApiClient.convertToType(data['client'], 'String');
      }
      if (data.hasOwnProperty('create_time')) {
        obj['create_time'] = ApiClient.convertToType(data['create_time'], 'Date');
      }
      if (data.hasOwnProperty('login_ip')) {
        obj['login_ip'] = ApiClient.convertToType(data['login_ip'], 'String');
      }
      if (data.hasOwnProperty('role_name')) {
        obj['role_name'] = ApiClient.convertToType(data['role_name'], 'String');
      }
      if (data.hasOwnProperty('default_mod')) {
        obj['default_mod'] = ApiClient.convertToType(data['default_mod'], 'String');
      }
      if (data.hasOwnProperty('last_name')) {
        obj['last_name'] = ApiClient.convertToType(data['last_name'], 'String');
      }
      if (data.hasOwnProperty('client_id')) {
        obj['client_id'] = ApiClient.convertToType(data['client_id'], 'Number');
      }
      if (data.hasOwnProperty('avatar_id')) {
        obj['avatar_id'] = ApiClient.convertToType(data['avatar_id'], 'Number');
      }
      if (data.hasOwnProperty('report_group')) {
        obj['report_group'] = ApiClient.convertToType(data['report_group'], 'Boolean');
      }
      if (data.hasOwnProperty('first_name')) {
        obj['first_name'] = ApiClient.convertToType(data['first_name'], 'String');
      }
      if (data.hasOwnProperty('cdr_api_token')) {
        obj['cdr_api_token'] = ApiClient.convertToType(data['cdr_api_token'], 'String');
      }
      if (data.hasOwnProperty('email')) {
        obj['email'] = ApiClient.convertToType(data['email'], 'String');
      }
      if (data.hasOwnProperty('last_seen')) {
        obj['last_seen'] = ApiClient.convertToType(data['last_seen'], 'Date');
      }
      if (data.hasOwnProperty('card_id')) {
        obj['card_id'] = ApiClient.convertToType(data['card_id'], 'Number');
      }
      if (data.hasOwnProperty('all_termination')) {
        obj['all_termination'] = ApiClient.convertToType(data['all_termination'], 'Boolean');
      }
    }
    return obj;
  }

  /**
   * @member {Date} cdr_expire
   */
  exports.prototype['cdr_expire'] = undefined;
  /**
   * @member {module:model/UserInfoGet.UserTypeEnum} user_type
   * @default 'admin'
   */
  exports.prototype['user_type'] = 'admin';
  /**
   * @member {String} default_mod2
   */
  exports.prototype['default_mod2'] = undefined;
  /**
   * @member {Date} last_login_time
   */
  exports.prototype['last_login_time'] = undefined;
  /**
   * @member {Array.<module:model/UsersLimit>} client_limits
   */
  exports.prototype['client_limits'] = undefined;
  /**
   * @member {String} passwd
   */
  exports.prototype['passwd'] = undefined;
  /**
   * @member {Boolean} outbound_report
   */
  exports.prototype['outbound_report'] = undefined;
  /**
   * @member {Boolean} show_carrier_trunk_drop_only
   */
  exports.prototype['show_carrier_trunk_drop_only'] = undefined;
  /**
   * @member {String} name
   */
  exports.prototype['name'] = undefined;
  /**
   * @member {Number} is_online
   */
  exports.prototype['is_online'] = undefined;
  /**
   * @member {Number} create_user_id
   */
  exports.prototype['create_user_id'] = undefined;
  /**
   * @member {Array.<String>} auth_ip
   */
  exports.prototype['auth_ip'] = undefined;
  /**
   * @member {Number} reseller_id
   */
  exports.prototype['reseller_id'] = undefined;
  /**
   * @member {String} agent
   */
  exports.prototype['agent'] = undefined;
  /**
   * @member {Number} user_id
   */
  exports.prototype['user_id'] = undefined;
  /**
   * @member {String} report_fields
   */
  exports.prototype['report_fields'] = undefined;
  /**
   * @member {Number} role_id
   */
  exports.prototype['role_id'] = undefined;
  /**
   * @member {Boolean} active
   */
  exports.prototype['active'] = undefined;
  /**
   * @member {String} fullname
   */
  exports.prototype['fullname'] = undefined;
  /**
   * @member {String} landing_page
   */
  exports.prototype['landing_page'] = undefined;
  /**
   * @member {String} client
   */
  exports.prototype['client'] = undefined;
  /**
   * @member {Date} create_time
   */
  exports.prototype['create_time'] = undefined;
  /**
   * @member {String} login_ip
   */
  exports.prototype['login_ip'] = undefined;
  /**
   * @member {String} role_name
   */
  exports.prototype['role_name'] = undefined;
  /**
   * @member {String} default_mod
   */
  exports.prototype['default_mod'] = undefined;
  /**
   * @member {String} last_name
   */
  exports.prototype['last_name'] = undefined;
  /**
   * @member {Number} client_id
   */
  exports.prototype['client_id'] = undefined;
  /**
   * @member {Number} avatar_id
   */
  exports.prototype['avatar_id'] = undefined;
  /**
   * @member {Boolean} report_group
   */
  exports.prototype['report_group'] = undefined;
  /**
   * @member {String} first_name
   */
  exports.prototype['first_name'] = undefined;
  /**
   * @member {String} cdr_api_token
   */
  exports.prototype['cdr_api_token'] = undefined;
  /**
   * @member {String} email
   */
  exports.prototype['email'] = undefined;
  /**
   * @member {Date} last_seen
   */
  exports.prototype['last_seen'] = undefined;
  /**
   * @member {Number} card_id
   */
  exports.prototype['card_id'] = undefined;
  /**
   * @member {Boolean} all_termination
   */
  exports.prototype['all_termination'] = undefined;


  /**
   * Allowed values for the <code>user_type</code> property.
   * @enum {String}
   * @readonly
   */
  exports.UserTypeEnum = {
    /**
     * value: "admin"
     * @const
     */
    "admin": "admin",
    /**
     * value: "client"
     * @const
     */
    "client": "client",
    /**
     * value: "agent"
     * @const
     */
    "agent": "agent",
    /**
     * value: "viewer"
     * @const
     */
    "viewer": "viewer"  };


  return exports;
}));


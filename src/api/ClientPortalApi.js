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
    define(['ApiClient', 'model/AttributeNotExists', 'model/InlineResponse20030', 'model/InlineResponse20031', 'model/InlineResponse20032', 'model/ObjectNotFoundError', 'model/UnauthenticatedError'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/AttributeNotExists'), require('../model/InlineResponse20030'), require('../model/InlineResponse20031'), require('../model/InlineResponse20032'), require('../model/ObjectNotFoundError'), require('../model/UnauthenticatedError'));
  } else {
    // Browser globals (root is window)
    if (!root.DnlApi) {
      root.DnlApi = {};
    }
    root.DnlApi.ClientPortalApi = factory(root.DnlApi.ApiClient, root.DnlApi.AttributeNotExists, root.DnlApi.InlineResponse20030, root.DnlApi.InlineResponse20031, root.DnlApi.InlineResponse20032, root.DnlApi.ObjectNotFoundError, root.DnlApi.UnauthenticatedError);
  }
}(this, function(ApiClient, AttributeNotExists, InlineResponse20030, InlineResponse20031, InlineResponse20032, ObjectNotFoundError, UnauthenticatedError) {
  'use strict';

  /**
   * ClientPortal service.
   * @module api/ClientPortalApi
   * @version 1.2.10
   */

  /**
   * Constructs a new ClientPortalApi. 
   * @alias module:api/ClientPortalApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the homeClientGatewayPaymentsGet operation.
     * @callback module:api/ClientPortalApi~homeClientGatewayPaymentsGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse20032} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Gets paymentgatewayhistory
     * @param {Object} opts Optional parameters
     * @param {Number} opts.page 
     * @param {Number} opts.perPage 
     * @param {module:model/String} opts.orderBy 
     * @param {module:model/String} opts.orderDir 
     * @param {String} opts.paypalId 
     * @param {String} opts.paypalTransactionId 
     * @param {module:model/String} opts.type 
     * @param {String} opts.paidOnGt 
     * @param {String} opts.paidOnLt 
     * @param {module:api/ClientPortalApi~homeClientGatewayPaymentsGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InlineResponse20032}
     */
    this.homeClientGatewayPaymentsGet = function(opts, callback) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
        'page': opts['page'],
        'per_page': opts['perPage'],
        'order_by': opts['orderBy'],
        'order_dir': opts['orderDir'],
        'paypal_id': opts['paypalId'],
        'paypal_transaction_id': opts['paypalTransactionId'],
        'type': opts['type'],
        'paid_on_gt': opts['paidOnGt'],
        'paid_on_lt': opts['paidOnLt']
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['auth_token'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = InlineResponse20032;

      return this.apiClient.callApi(
        '/home/client/gateway_payments', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the homeClientGet operation.
     * @callback module:api/ClientPortalApi~homeClientGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse20030} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Gets carrier
     * @param {module:api/ClientPortalApi~homeClientGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InlineResponse20030}
     */
    this.homeClientGet = function(callback) {
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['auth_token'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = InlineResponse20030;

      return this.apiClient.callApi(
        '/home/client', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the homeClientPaymentsGet operation.
     * @callback module:api/ClientPortalApi~homeClientPaymentsGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse20031} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Gets clientpayments
     * @param {Object} opts Optional parameters
     * @param {Number} opts.page 
     * @param {Number} opts.perPage 
     * @param {module:model/String} opts.orderBy 
     * @param {module:model/String} opts.orderDir 
     * @param {String} opts.amountGt 
     * @param {String} opts.amountLt 
     * @param {String} opts.paidOnGt 
     * @param {String} opts.paidOnLt 
     * @param {module:api/ClientPortalApi~homeClientPaymentsGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InlineResponse20031}
     */
    this.homeClientPaymentsGet = function(opts, callback) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
        'page': opts['page'],
        'per_page': opts['perPage'],
        'order_by': opts['orderBy'],
        'order_dir': opts['orderDir'],
        'amount_gt': opts['amountGt'],
        'amount_lt': opts['amountLt'],
        'paid_on_gt': opts['paidOnGt'],
        'paid_on_lt': opts['paidOnLt']
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['auth_token'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = InlineResponse20031;

      return this.apiClient.callApi(
        '/home/client/payments', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));

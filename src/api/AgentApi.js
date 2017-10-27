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
    define(['ApiClient', 'model/Agent', 'model/AgentCarriersAdd', 'model/AgentModify', 'model/AttributeNotExists', 'model/InlineResponse20010', 'model/InlineResponse2005', 'model/InlineResponse2006', 'model/InlineResponse2007', 'model/InlineResponse2008', 'model/InlineResponse2009', 'model/ObjectCreated', 'model/ObjectNotFoundError', 'model/OperationError', 'model/Success', 'model/UnauthenticatedError', 'model/ValidationError'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/Agent'), require('../model/AgentCarriersAdd'), require('../model/AgentModify'), require('../model/AttributeNotExists'), require('../model/InlineResponse20010'), require('../model/InlineResponse2005'), require('../model/InlineResponse2006'), require('../model/InlineResponse2007'), require('../model/InlineResponse2008'), require('../model/InlineResponse2009'), require('../model/ObjectCreated'), require('../model/ObjectNotFoundError'), require('../model/OperationError'), require('../model/Success'), require('../model/UnauthenticatedError'), require('../model/ValidationError'));
  } else {
    // Browser globals (root is window)
    if (!root.DnlApi) {
      root.DnlApi = {};
    }
    root.DnlApi.AgentApi = factory(root.DnlApi.ApiClient, root.DnlApi.Agent, root.DnlApi.AgentCarriersAdd, root.DnlApi.AgentModify, root.DnlApi.AttributeNotExists, root.DnlApi.InlineResponse20010, root.DnlApi.InlineResponse2005, root.DnlApi.InlineResponse2006, root.DnlApi.InlineResponse2007, root.DnlApi.InlineResponse2008, root.DnlApi.InlineResponse2009, root.DnlApi.ObjectCreated, root.DnlApi.ObjectNotFoundError, root.DnlApi.OperationError, root.DnlApi.Success, root.DnlApi.UnauthenticatedError, root.DnlApi.ValidationError);
  }
}(this, function(ApiClient, Agent, AgentCarriersAdd, AgentModify, AttributeNotExists, InlineResponse20010, InlineResponse2005, InlineResponse2006, InlineResponse2007, InlineResponse2008, InlineResponse2009, ObjectCreated, ObjectNotFoundError, OperationError, Success, UnauthenticatedError, ValidationError) {
  'use strict';

  /**
   * Agent service.
   * @module api/AgentApi
   * @version 1.2.10
   */

  /**
   * Constructs a new AgentApi. 
   * @alias module:api/AgentApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the agentAgentIdCarrierGet operation.
     * @callback module:api/AgentApi~agentAgentIdCarrierGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse2007} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Gets agent
     * @param {Number} agentId Agent id to get info about
     * @param {module:api/AgentApi~agentAgentIdCarrierGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InlineResponse2007}
     */
    this.agentAgentIdCarrierGet = function(agentId, callback) {
      var postBody = null;

      // verify the required parameter 'agentId' is set
      if (agentId === undefined || agentId === null) {
        throw new Error("Missing the required parameter 'agentId' when calling agentAgentIdCarrierGet");
      }


      var pathParams = {
        'agent_id': agentId
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
      var returnType = InlineResponse2007;

      return this.apiClient.callApi(
        '/agent/{agent_id}/carrier', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the agentAgentIdCarrierIdDelete operation.
     * @callback module:api/AgentApi~agentAgentIdCarrierIdDeleteCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Success} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Deletes agentclient
     * @param {Number} agentId AgentClient agent_id to get info about
     * @param {Number} carrierId AgentClient carrier_id to get info about
     * @param {module:api/AgentApi~agentAgentIdCarrierIdDeleteCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Success}
     */
    this.agentAgentIdCarrierIdDelete = function(agentId, carrierId, callback) {
      var postBody = null;

      // verify the required parameter 'agentId' is set
      if (agentId === undefined || agentId === null) {
        throw new Error("Missing the required parameter 'agentId' when calling agentAgentIdCarrierIdDelete");
      }

      // verify the required parameter 'carrierId' is set
      if (carrierId === undefined || carrierId === null) {
        throw new Error("Missing the required parameter 'carrierId' when calling agentAgentIdCarrierIdDelete");
      }


      var pathParams = {
        'agent_id': agentId,
        'carrier_id': carrierId
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
      var returnType = Success;

      return this.apiClient.callApi(
        '/agent/{agent_id}/{carrier_id}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the agentAgentIdCarrierPatch operation.
     * @callback module:api/AgentApi~agentAgentIdCarrierPatchCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse2007} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Modifies agent
     * @param {Number} agentId Agent id to get info about
     * @param {Object} opts Optional parameters
     * @param {module:model/AgentCarriersAdd} opts.body Agent to modify
     * @param {module:api/AgentApi~agentAgentIdCarrierPatchCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InlineResponse2007}
     */
    this.agentAgentIdCarrierPatch = function(agentId, opts, callback) {
      opts = opts || {};
      var postBody = opts['body'];

      // verify the required parameter 'agentId' is set
      if (agentId === undefined || agentId === null) {
        throw new Error("Missing the required parameter 'agentId' when calling agentAgentIdCarrierPatch");
      }


      var pathParams = {
        'agent_id': agentId
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
      var returnType = InlineResponse2007;

      return this.apiClient.callApi(
        '/agent/{agent_id}/carrier', 'PATCH',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the agentAgentIdDelete operation.
     * @callback module:api/AgentApi~agentAgentIdDeleteCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Success} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Deletes agent
     * @param {Number} agentId Agent id to get info about
     * @param {module:api/AgentApi~agentAgentIdDeleteCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Success}
     */
    this.agentAgentIdDelete = function(agentId, callback) {
      var postBody = null;

      // verify the required parameter 'agentId' is set
      if (agentId === undefined || agentId === null) {
        throw new Error("Missing the required parameter 'agentId' when calling agentAgentIdDelete");
      }


      var pathParams = {
        'agent_id': agentId
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
      var returnType = Success;

      return this.apiClient.callApi(
        '/agent/{agent_id}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the agentAgentIdGet operation.
     * @callback module:api/AgentApi~agentAgentIdGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse2005} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Gets agent
     * @param {Number} agentId Agent id to get info about
     * @param {module:api/AgentApi~agentAgentIdGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InlineResponse2005}
     */
    this.agentAgentIdGet = function(agentId, callback) {
      var postBody = null;

      // verify the required parameter 'agentId' is set
      if (agentId === undefined || agentId === null) {
        throw new Error("Missing the required parameter 'agentId' when calling agentAgentIdGet");
      }


      var pathParams = {
        'agent_id': agentId
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
      var returnType = InlineResponse2005;

      return this.apiClient.callApi(
        '/agent/{agent_id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the agentAgentIdPatch operation.
     * @callback module:api/AgentApi~agentAgentIdPatchCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse2005} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Modifies agent
     * @param {Number} agentId Agent id to get info about
     * @param {Object} opts Optional parameters
     * @param {module:model/AgentModify} opts.body Agent to modify
     * @param {module:api/AgentApi~agentAgentIdPatchCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InlineResponse2005}
     */
    this.agentAgentIdPatch = function(agentId, opts, callback) {
      opts = opts || {};
      var postBody = opts['body'];

      // verify the required parameter 'agentId' is set
      if (agentId === undefined || agentId === null) {
        throw new Error("Missing the required parameter 'agentId' when calling agentAgentIdPatch");
      }


      var pathParams = {
        'agent_id': agentId
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
      var returnType = InlineResponse2005;

      return this.apiClient.callApi(
        '/agent/{agent_id}', 'PATCH',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the agentClientsGet operation.
     * @callback module:api/AgentApi~agentClientsGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse2009} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Gets all agentclients
     * @param {Object} opts Optional parameters
     * @param {Number} opts.page 
     * @param {Number} opts.perPage 
     * @param {module:model/String} opts.orderBy 
     * @param {module:model/String} opts.orderDir 
     * @param {String} opts.assignedBy 
     * @param {String} opts.assignedOnGt 
     * @param {String} opts.assignedOnLt 
     * @param {module:api/AgentApi~agentClientsGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InlineResponse2009}
     */
    this.agentClientsGet = function(opts, callback) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
        'page': opts['page'],
        'per_page': opts['perPage'],
        'order_by': opts['orderBy'],
        'order_dir': opts['orderDir'],
        'assigned_by': opts['assignedBy'],
        'assigned_on_gt': opts['assignedOnGt'],
        'assigned_on_lt': opts['assignedOnLt']
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['auth_token'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = InlineResponse2009;

      return this.apiClient.callApi(
        '/agent/clients', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the agentCommissionGet operation.
     * @callback module:api/AgentApi~agentCommissionGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse2008} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Gets agentcommissionhistorydetail list
     * @param {Object} opts Optional parameters
     * @param {Number} opts.page 
     * @param {Number} opts.perPage 
     * @param {module:model/String} opts.orderBy 
     * @param {module:model/String} opts.orderDir 
     * @param {Number} opts.agentId 
     * @param {Number} opts.clientId 
     * @param {String} opts.clientCostGt 
     * @param {String} opts.clientCostLt 
     * @param {String} opts.endTimeGt 
     * @param {String} opts.endTimeLt 
     * @param {String} opts.startTimeGt 
     * @param {String} opts.startTimeLt 
     * @param {module:api/AgentApi~agentCommissionGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InlineResponse2008}
     */
    this.agentCommissionGet = function(opts, callback) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
        'page': opts['page'],
        'per_page': opts['perPage'],
        'order_by': opts['orderBy'],
        'order_dir': opts['orderDir'],
        'agent_id': opts['agentId'],
        'client_id': opts['clientId'],
        'client_cost_gt': opts['clientCostGt'],
        'client_cost_lt': opts['clientCostLt'],
        'end_time_gt': opts['endTimeGt'],
        'end_time_lt': opts['endTimeLt'],
        'start_time_gt': opts['startTimeGt'],
        'start_time_lt': opts['startTimeLt']
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['auth_token'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = InlineResponse2008;

      return this.apiClient.callApi(
        '/agent/commission', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the agentCreatePost operation.
     * @callback module:api/AgentApi~agentCreatePostCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ObjectCreated} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Creates new agent
     * @param {Object} opts Optional parameters
     * @param {module:model/Agent} opts.body Agent to create
     * @param {module:api/AgentApi~agentCreatePostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ObjectCreated}
     */
    this.agentCreatePost = function(opts, callback) {
      opts = opts || {};
      var postBody = opts['body'];


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
      var returnType = ObjectCreated;

      return this.apiClient.callApi(
        '/agent/create', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the agentListGet operation.
     * @callback module:api/AgentApi~agentListGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse2006} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Gets agents
     * @param {Object} opts Optional parameters
     * @param {Number} opts.page 
     * @param {Number} opts.perPage 
     * @param {module:model/String} opts.orderBy 
     * @param {module:model/String} opts.orderDir 
     * @param {Number} opts.agentId 
     * @param {String} opts.agentName 
     * @param {Boolean} opts.editPermission 
     * @param {String} opts.email 
     * @param {module:model/String} opts.frequencyType 
     * @param {module:model/String} opts.methodType 
     * @param {String} opts.commissionGt 
     * @param {module:api/AgentApi~agentListGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InlineResponse2006}
     */
    this.agentListGet = function(opts, callback) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
        'page': opts['page'],
        'per_page': opts['perPage'],
        'order_by': opts['orderBy'],
        'order_dir': opts['orderDir'],
        'agent_id': opts['agentId'],
        'agent_name': opts['agentName'],
        'edit_permission': opts['editPermission'],
        'email': opts['email'],
        'frequency_type': opts['frequencyType'],
        'method_type': opts['methodType'],
        'commission_gt': opts['commissionGt']
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['auth_token'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = InlineResponse2006;

      return this.apiClient.callApi(
        '/agent/list', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the agentNotAssignedClientsGet operation.
     * @callback module:api/AgentApi~agentNotAssignedClientsGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse20010} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Gets not assigned clients
     * @param {Object} opts Optional parameters
     * @param {Number} opts.page 
     * @param {Number} opts.perPage 
     * @param {module:model/String} opts.orderBy 
     * @param {module:model/String} opts.orderDir 
     * @param {Number} opts.clientId 
     * @param {String} opts.name 
     * @param {module:api/AgentApi~agentNotAssignedClientsGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InlineResponse20010}
     */
    this.agentNotAssignedClientsGet = function(opts, callback) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
        'page': opts['page'],
        'per_page': opts['perPage'],
        'order_by': opts['orderBy'],
        'order_dir': opts['orderDir'],
        'client_id': opts['clientId'],
        'name': opts['name']
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['auth_token'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = InlineResponse20010;

      return this.apiClient.callApi(
        '/agent/not_assigned_clients', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
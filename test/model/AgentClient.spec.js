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
    // AMD.
    define(['expect.js', '../../src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.DnlApi);
  }
}(this, function(expect, DnlApi) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new DnlApi.AgentClient();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('AgentClient', function() {
    it('should create an instance of AgentClient', function() {
      // uncomment below and update the code to test AgentClient
      //var instane = new DnlApi.AgentClient();
      //expect(instance).to.be.a(DnlApi.AgentClient);
    });

    it('should have the property clientId (base name: "client_id")', function() {
      // uncomment below and update the code to test the property clientId
      //var instane = new DnlApi.AgentClient();
      //expect(instance).to.be();
    });

    it('should have the property commission (base name: "commission")', function() {
      // uncomment below and update the code to test the property commission
      //var instane = new DnlApi.AgentClient();
      //expect(instance).to.be();
    });

    it('should have the property methodType (base name: "method_type")', function() {
      // uncomment below and update the code to test the property methodType
      //var instane = new DnlApi.AgentClient();
      //expect(instance).to.be();
    });

  });

}));

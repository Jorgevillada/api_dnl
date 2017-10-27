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
    instance = new DnlApi.AgentModify();
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

  describe('AgentModify', function() {
    it('should create an instance of AgentModify', function() {
      // uncomment below and update the code to test AgentModify
      //var instane = new DnlApi.AgentModify();
      //expect(instance).to.be.a(DnlApi.AgentModify);
    });

    it('should have the property methodType (base name: "method_type")', function() {
      // uncomment below and update the code to test the property methodType
      //var instane = new DnlApi.AgentModify();
      //expect(instance).to.be();
    });

    it('should have the property commission (base name: "commission")', function() {
      // uncomment below and update the code to test the property commission
      //var instane = new DnlApi.AgentModify();
      //expect(instance).to.be();
    });

    it('should have the property email (base name: "email")', function() {
      // uncomment below and update the code to test the property email
      //var instane = new DnlApi.AgentModify();
      //expect(instance).to.be();
    });

    it('should have the property agentName (base name: "agent_name")', function() {
      // uncomment below and update the code to test the property agentName
      //var instane = new DnlApi.AgentModify();
      //expect(instance).to.be();
    });

    it('should have the property frequencyType (base name: "frequency_type")', function() {
      // uncomment below and update the code to test the property frequencyType
      //var instane = new DnlApi.AgentModify();
      //expect(instance).to.be();
    });

    it('should have the property status (base name: "status")', function() {
      // uncomment below and update the code to test the property status
      //var instane = new DnlApi.AgentModify();
      //expect(instance).to.be();
    });

    it('should have the property user (base name: "user")', function() {
      // uncomment below and update the code to test the property user
      //var instane = new DnlApi.AgentModify();
      //expect(instance).to.be();
    });

    it('should have the property editPermission (base name: "edit_permission")', function() {
      // uncomment below and update the code to test the property editPermission
      //var instane = new DnlApi.AgentModify();
      //expect(instance).to.be();
    });

  });

}));

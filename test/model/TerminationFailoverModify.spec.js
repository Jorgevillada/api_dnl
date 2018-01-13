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
    instance = new DnlApi.TerminationFailoverModify();
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

  describe('TerminationFailoverModify', function() {
    it('should create an instance of TerminationFailoverModify', function() {
      // uncomment below and update the code to test TerminationFailoverModify
      //var instane = new DnlApi.TerminationFailoverModify();
      //expect(instance).to.be.a(DnlApi.TerminationFailoverModify);
    });

    it('should have the property failoverMethod (base name: "failover_method")', function() {
      // uncomment below and update the code to test the property failoverMethod
      //var instane = new DnlApi.TerminationFailoverModify();
      //expect(instance).to.be();
    });

    it('should have the property returnCode (base name: "return_code")', function() {
      // uncomment below and update the code to test the property returnCode
      //var instane = new DnlApi.TerminationFailoverModify();
      //expect(instance).to.be();
    });

    it('should have the property returnClause (base name: "return_clause")', function() {
      // uncomment below and update the code to test the property returnClause
      //var instane = new DnlApi.TerminationFailoverModify();
      //expect(instance).to.be();
    });

  });

}));

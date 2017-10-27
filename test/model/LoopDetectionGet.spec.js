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
    instance = new DnlApi.LoopDetectionGet();
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

  describe('LoopDetectionGet', function() {
    it('should create an instance of LoopDetectionGet', function() {
      // uncomment below and update the code to test LoopDetectionGet
      //var instane = new DnlApi.LoopDetectionGet();
      //expect(instance).to.be.a(DnlApi.LoopDetectionGet);
    });

    it('should have the property name (base name: "name")', function() {
      // uncomment below and update the code to test the property name
      //var instane = new DnlApi.LoopDetectionGet();
      //expect(instance).to.be();
    });

    it('should have the property period (base name: "period")', function() {
      // uncomment below and update the code to test the property period
      //var instane = new DnlApi.LoopDetectionGet();
      //expect(instance).to.be();
    });

    it('should have the property ingressTrunks (base name: "ingress_trunks")', function() {
      // uncomment below and update the code to test the property ingressTrunks
      //var instane = new DnlApi.LoopDetectionGet();
      //expect(instance).to.be();
    });

    it('should have the property occurance (base name: "occurance")', function() {
      // uncomment below and update the code to test the property occurance
      //var instane = new DnlApi.LoopDetectionGet();
      //expect(instance).to.be();
    });

    it('should have the property id (base name: "id")', function() {
      // uncomment below and update the code to test the property id
      //var instane = new DnlApi.LoopDetectionGet();
      //expect(instance).to.be();
    });

    it('should have the property blockSecond (base name: "block_second")', function() {
      // uncomment below and update the code to test the property blockSecond
      //var instane = new DnlApi.LoopDetectionGet();
      //expect(instance).to.be();
    });

  });

}));
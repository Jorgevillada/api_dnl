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
    instance = new DnlApi.DynamicRouteQos();
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

  describe('DynamicRouteQos', function() {
    it('should create an instance of DynamicRouteQos', function() {
      // uncomment below and update the code to test DynamicRouteQos
      //var instane = new DnlApi.DynamicRouteQos();
      //expect(instance).to.be.a(DnlApi.DynamicRouteQos);
    });

    it('should have the property maxAcd (base name: "max_acd")', function() {
      // uncomment below and update the code to test the property maxAcd
      //var instane = new DnlApi.DynamicRouteQos();
      //expect(instance).to.be();
    });

    it('should have the property minAcd (base name: "min_acd")', function() {
      // uncomment below and update the code to test the property minAcd
      //var instane = new DnlApi.DynamicRouteQos();
      //expect(instance).to.be();
    });

    it('should have the property maxAsr (base name: "max_asr")', function() {
      // uncomment below and update the code to test the property maxAsr
      //var instane = new DnlApi.DynamicRouteQos();
      //expect(instance).to.be();
    });

    it('should have the property minAloc (base name: "min_aloc")', function() {
      // uncomment below and update the code to test the property minAloc
      //var instane = new DnlApi.DynamicRouteQos();
      //expect(instance).to.be();
    });

    it('should have the property limitPrice (base name: "limit_price")', function() {
      // uncomment below and update the code to test the property limitPrice
      //var instane = new DnlApi.DynamicRouteQos();
      //expect(instance).to.be();
    });

    it('should have the property minAsr (base name: "min_asr")', function() {
      // uncomment below and update the code to test the property minAsr
      //var instane = new DnlApi.DynamicRouteQos();
      //expect(instance).to.be();
    });

    it('should have the property digits (base name: "digits")', function() {
      // uncomment below and update the code to test the property digits
      //var instane = new DnlApi.DynamicRouteQos();
      //expect(instance).to.be();
    });

    it('should have the property minPdd (base name: "min_pdd")', function() {
      // uncomment below and update the code to test the property minPdd
      //var instane = new DnlApi.DynamicRouteQos();
      //expect(instance).to.be();
    });

    it('should have the property maxAbr (base name: "max_abr")', function() {
      // uncomment below and update the code to test the property maxAbr
      //var instane = new DnlApi.DynamicRouteQos();
      //expect(instance).to.be();
    });

    it('should have the property maxPdd (base name: "max_pdd")', function() {
      // uncomment below and update the code to test the property maxPdd
      //var instane = new DnlApi.DynamicRouteQos();
      //expect(instance).to.be();
    });

    it('should have the property minAbr (base name: "min_abr")', function() {
      // uncomment below and update the code to test the property minAbr
      //var instane = new DnlApi.DynamicRouteQos();
      //expect(instance).to.be();
    });

    it('should have the property maxAloc (base name: "max_aloc")', function() {
      // uncomment below and update the code to test the property maxAloc
      //var instane = new DnlApi.DynamicRouteQos();
      //expect(instance).to.be();
    });

  });

}));

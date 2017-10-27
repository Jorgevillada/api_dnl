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
    instance = new DnlApi.DailyCdrFieldGet();
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

  describe('DailyCdrFieldGet', function() {
    it('should create an instance of DailyCdrFieldGet', function() {
      // uncomment below and update the code to test DailyCdrFieldGet
      //var instane = new DnlApi.DailyCdrFieldGet();
      //expect(instance).to.be.a(DnlApi.DailyCdrFieldGet);
    });

    it('should have the property clientViewable (base name: "client_viewable")', function() {
      // uncomment below and update the code to test the property clientViewable
      //var instane = new DnlApi.DailyCdrFieldGet();
      //expect(instance).to.be();
    });

    it('should have the property clientCdrDelivery (base name: "client_cdr_delivery")', function() {
      // uncomment below and update the code to test the property clientCdrDelivery
      //var instane = new DnlApi.DailyCdrFieldGet();
      //expect(instance).to.be();
    });

    it('should have the property id (base name: "id")', function() {
      // uncomment below and update the code to test the property id
      //var instane = new DnlApi.DailyCdrFieldGet();
      //expect(instance).to.be();
    });

    it('should have the property displayName (base name: "display_name")', function() {
      // uncomment below and update the code to test the property displayName
      //var instane = new DnlApi.DailyCdrFieldGet();
      //expect(instance).to.be();
    });

    it('should have the property vendorCdrDelivery (base name: "vendor_cdr_delivery")', function() {
      // uncomment below and update the code to test the property vendorCdrDelivery
      //var instane = new DnlApi.DailyCdrFieldGet();
      //expect(instance).to.be();
    });

    it('should have the property dbName (base name: "db_name")', function() {
      // uncomment below and update the code to test the property dbName
      //var instane = new DnlApi.DailyCdrFieldGet();
      //expect(instance).to.be();
    });

    it('should have the property vendorViewable (base name: "vendor_viewable")', function() {
      // uncomment below and update the code to test the property vendorViewable
      //var instane = new DnlApi.DailyCdrFieldGet();
      //expect(instance).to.be();
    });

    it('should have the property adminDefault (base name: "admin_default")', function() {
      // uncomment below and update the code to test the property adminDefault
      //var instane = new DnlApi.DailyCdrFieldGet();
      //expect(instance).to.be();
    });

  });

}));

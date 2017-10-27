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
    instance = new DnlApi.ProductGet();
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

  describe('ProductGet', function() {
    it('should create an instance of ProductGet', function() {
      // uncomment below and update the code to test ProductGet
      //var instane = new DnlApi.ProductGet();
      //expect(instance).to.be.a(DnlApi.ProductGet);
    });

    it('should have the property name (base name: "name")', function() {
      // uncomment below and update the code to test the property name
      //var instane = new DnlApi.ProductGet();
      //expect(instance).to.be();
    });

    it('should have the property prefixCount (base name: "prefix_count")', function() {
      // uncomment below and update the code to test the property prefixCount
      //var instane = new DnlApi.ProductGet();
      //expect(instance).to.be();
    });

    it('should have the property updateBy (base name: "update_by")', function() {
      // uncomment below and update the code to test the property updateBy
      //var instane = new DnlApi.ProductGet();
      //expect(instance).to.be();
    });

    it('should have the property routedBy (base name: "routed_by")', function() {
      // uncomment below and update the code to test the property routedBy
      //var instane = new DnlApi.ProductGet();
      //expect(instance).to.be();
    });

    it('should have the property definedBy (base name: "defined_by")', function() {
      // uncomment below and update the code to test the property definedBy
      //var instane = new DnlApi.ProductGet();
      //expect(instance).to.be();
    });

    it('should have the property routeCount (base name: "route_count")', function() {
      // uncomment below and update the code to test the property routeCount
      //var instane = new DnlApi.ProductGet();
      //expect(instance).to.be();
    });

    it('should have the property staticRouteId (base name: "static_route_id")', function() {
      // uncomment below and update the code to test the property staticRouteId
      //var instane = new DnlApi.ProductGet();
      //expect(instance).to.be();
    });

    it('should have the property updateAt (base name: "update_at")', function() {
      // uncomment below and update the code to test the property updateAt
      //var instane = new DnlApi.ProductGet();
      //expect(instance).to.be();
    });

    it('should have the property codeDeckName (base name: "code_deck_name")', function() {
      // uncomment below and update the code to test the property codeDeckName
      //var instane = new DnlApi.ProductGet();
      //expect(instance).to.be();
    });

  });

}));
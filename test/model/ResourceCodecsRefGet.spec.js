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
    instance = new DnlApi.ResourceCodecsRefGet();
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

  describe('ResourceCodecsRefGet', function() {
    it('should create an instance of ResourceCodecsRefGet', function() {
      // uncomment below and update the code to test ResourceCodecsRefGet
      //var instane = new DnlApi.ResourceCodecsRefGet();
      //expect(instance).to.be.a(DnlApi.ResourceCodecsRefGet);
    });

    it('should have the property codecs (base name: "codecs")', function() {
      // uncomment below and update the code to test the property codecs
      //var instane = new DnlApi.ResourceCodecsRefGet();
      //expect(instance).to.be();
    });

    it('should have the property codec (base name: "codec")', function() {
      // uncomment below and update the code to test the property codec
      //var instane = new DnlApi.ResourceCodecsRefGet();
      //expect(instance).to.be();
    });

    it('should have the property id (base name: "id")', function() {
      // uncomment below and update the code to test the property id
      //var instane = new DnlApi.ResourceCodecsRefGet();
      //expect(instance).to.be();
    });

    it('should have the property resource (base name: "resource")', function() {
      // uncomment below and update the code to test the property resource
      //var instane = new DnlApi.ResourceCodecsRefGet();
      //expect(instance).to.be();
    });

  });

}));

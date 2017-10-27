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
    instance = new DnlApi.ResourceIpAll();
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

  describe('ResourceIpAll', function() {
    it('should create an instance of ResourceIpAll', function() {
      // uncomment below and update the code to test ResourceIpAll
      //var instane = new DnlApi.ResourceIpAll();
      //expect(instance).to.be.a(DnlApi.ResourceIpAll);
    });

    it('should have the property ip (base name: "ip")', function() {
      // uncomment below and update the code to test the property ip
      //var instane = new DnlApi.ResourceIpAll();
      //expect(instance).to.be();
    });

    it('should have the property port (base name: "port")', function() {
      // uncomment below and update the code to test the property port
      //var instane = new DnlApi.ResourceIpAll();
      //expect(instance).to.be();
    });

    it('should have the property sipRpid (base name: "sip_rpid")', function() {
      // uncomment below and update the code to test the property sipRpid
      //var instane = new DnlApi.ResourceIpAll();
      //expect(instance).to.be();
    });

    it('should have the property fqdn (base name: "fqdn")', function() {
      // uncomment below and update the code to test the property fqdn
      //var instane = new DnlApi.ResourceIpAll();
      //expect(instance).to.be();
    });

  });

}));

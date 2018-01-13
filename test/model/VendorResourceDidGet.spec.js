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
    instance = new DnlApi.VendorResourceDidGet();
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

  describe('VendorResourceDidGet', function() {
    it('should create an instance of VendorResourceDidGet', function() {
      // uncomment below and update the code to test VendorResourceDidGet
      //var instane = new DnlApi.VendorResourceDidGet();
      //expect(instance).to.be.a(DnlApi.VendorResourceDidGet);
    });

    it('should have the property ip (base name: "ip")', function() {
      // uncomment below and update the code to test the property ip
      //var instane = new DnlApi.VendorResourceDidGet();
      //expect(instance).to.be();
    });

    it('should have the property mediaType (base name: "media_type")', function() {
      // uncomment below and update the code to test the property mediaType
      //var instane = new DnlApi.VendorResourceDidGet();
      //expect(instance).to.be();
    });

    it('should have the property egressDids (base name: "egress_dids")', function() {
      // uncomment below and update the code to test the property egressDids
      //var instane = new DnlApi.VendorResourceDidGet();
      //expect(instance).to.be();
    });

    it('should have the property billingByPort (base name: "billing_by_port")', function() {
      // uncomment below and update the code to test the property billingByPort
      //var instane = new DnlApi.VendorResourceDidGet();
      //expect(instance).to.be();
    });

    it('should have the property resourceId (base name: "resource_id")', function() {
      // uncomment below and update the code to test the property resourceId
      //var instane = new DnlApi.VendorResourceDidGet();
      //expect(instance).to.be();
    });

    it('should have the property t38 (base name: "t38")', function() {
      // uncomment below and update the code to test the property t38
      //var instane = new DnlApi.VendorResourceDidGet();
      //expect(instance).to.be();
    });

  });

}));

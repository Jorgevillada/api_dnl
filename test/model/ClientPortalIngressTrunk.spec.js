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
    instance = new DnlApi.ClientPortalIngressTrunk();
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

  describe('ClientPortalIngressTrunk', function() {
    it('should create an instance of ClientPortalIngressTrunk', function() {
      // uncomment below and update the code to test ClientPortalIngressTrunk
      //var instane = new DnlApi.ClientPortalIngressTrunk();
      //expect(instance).to.be.a(DnlApi.ClientPortalIngressTrunk);
    });

    it('should have the property cpsLimit (base name: "cps_limit")', function() {
      // uncomment below and update the code to test the property cpsLimit
      //var instane = new DnlApi.ClientPortalIngressTrunk();
      //expect(instance).to.be();
    });

    it('should have the property callLimit (base name: "call_limit")', function() {
      // uncomment below and update the code to test the property callLimit
      //var instane = new DnlApi.ClientPortalIngressTrunk();
      //expect(instance).to.be();
    });

    it('should have the property ingressName (base name: "ingress_name")', function() {
      // uncomment below and update the code to test the property ingressName
      //var instane = new DnlApi.ClientPortalIngressTrunk();
      //expect(instance).to.be();
    });

    it('should have the property host (base name: "host")', function() {
      // uncomment below and update the code to test the property host
      //var instane = new DnlApi.ClientPortalIngressTrunk();
      //expect(instance).to.be();
    });

    it('should have the property productName (base name: "product_name")', function() {
      // uncomment below and update the code to test the property productName
      //var instane = new DnlApi.ClientPortalIngressTrunk();
      //expect(instance).to.be();
    });

    it('should have the property prefixes (base name: "prefixes")', function() {
      // uncomment below and update the code to test the property prefixes
      //var instane = new DnlApi.ClientPortalIngressTrunk();
      //expect(instance).to.be();
    });

  });

}));

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
    instance = new DnlApi.SipRegistration();
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

  describe('SipRegistration', function() {
    it('should create an instance of SipRegistration', function() {
      // uncomment below and update the code to test SipRegistration
      //var instane = new DnlApi.SipRegistration();
      //expect(instance).to.be.a(DnlApi.SipRegistration);
    });

    it('should have the property carrierName (base name: "carrier_name")', function() {
      // uncomment below and update the code to test the property carrierName
      //var instane = new DnlApi.SipRegistration();
      //expect(instance).to.be();
    });

    it('should have the property contact (base name: "contact")', function() {
      // uncomment below and update the code to test the property contact
      //var instane = new DnlApi.SipRegistration();
      //expect(instance).to.be();
    });

    it('should have the property networkIp (base name: "network_ip")', function() {
      // uncomment below and update the code to test the property networkIp
      //var instane = new DnlApi.SipRegistration();
      //expect(instance).to.be();
    });

    it('should have the property networkPort (base name: "network_port")', function() {
      // uncomment below and update the code to test the property networkPort
      //var instane = new DnlApi.SipRegistration();
      //expect(instance).to.be();
    });

    it('should have the property id (base name: "id")', function() {
      // uncomment below and update the code to test the property id
      //var instane = new DnlApi.SipRegistration();
      //expect(instance).to.be();
    });

    it('should have the property expires (base name: "expires")', function() {
      // uncomment below and update the code to test the property expires
      //var instane = new DnlApi.SipRegistration();
      //expect(instance).to.be();
    });

    it('should have the property time (base name: "time")', function() {
      // uncomment below and update the code to test the property time
      //var instane = new DnlApi.SipRegistration();
      //expect(instance).to.be();
    });

    it('should have the property status (base name: "status")', function() {
      // uncomment below and update the code to test the property status
      //var instane = new DnlApi.SipRegistration();
      //expect(instance).to.be();
    });

    it('should have the property trunkName (base name: "trunk_name")', function() {
      // uncomment below and update the code to test the property trunkName
      //var instane = new DnlApi.SipRegistration();
      //expect(instance).to.be();
    });

    it('should have the property username (base name: "username")', function() {
      // uncomment below and update the code to test the property username
      //var instane = new DnlApi.SipRegistration();
      //expect(instance).to.be();
    });

  });

}));

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
    instance = new DnlApi.ClientPayment();
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

  describe('ClientPayment', function() {
    it('should create an instance of ClientPayment', function() {
      // uncomment below and update the code to test ClientPayment
      //var instane = new DnlApi.ClientPayment();
      //expect(instance).to.be.a(DnlApi.ClientPayment);
    });

    it('should have the property paidOn (base name: "paid_on")', function() {
      // uncomment below and update the code to test the property paidOn
      //var instane = new DnlApi.ClientPayment();
      //expect(instance).to.be();
    });

    it('should have the property paymentType (base name: "payment_type")', function() {
      // uncomment below and update the code to test the property paymentType
      //var instane = new DnlApi.ClientPayment();
      //expect(instance).to.be();
    });

    it('should have the property note (base name: "note")', function() {
      // uncomment below and update the code to test the property note
      //var instane = new DnlApi.ClientPayment();
      //expect(instance).to.be();
    });

    it('should have the property amount (base name: "amount")', function() {
      // uncomment below and update the code to test the property amount
      //var instane = new DnlApi.ClientPayment();
      //expect(instance).to.be();
    });

  });

}));

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
    instance = new DnlApi.DidBillingRelAvailableGet();
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

  describe('DidBillingRelAvailableGet', function() {
    it('should create an instance of DidBillingRelAvailableGet', function() {
      // uncomment below and update the code to test DidBillingRelAvailableGet
      //var instane = new DnlApi.DidBillingRelAvailableGet();
      //expect(instance).to.be.a(DnlApi.DidBillingRelAvailableGet);
    });

    it('should have the property did (base name: "did")', function() {
      // uncomment below and update the code to test the property did
      //var instane = new DnlApi.DidBillingRelAvailableGet();
      //expect(instance).to.be();
    });

    it('should have the property didVendorName (base name: "did_vendor_name")', function() {
      // uncomment below and update the code to test the property didVendorName
      //var instane = new DnlApi.DidBillingRelAvailableGet();
      //expect(instance).to.be();
    });

    it('should have the property id (base name: "id")', function() {
      // uncomment below and update the code to test the property id
      //var instane = new DnlApi.DidBillingRelAvailableGet();
      //expect(instance).to.be();
    });

    it('should have the property vendorBillingRuleId (base name: "vendor_billing_rule_id")', function() {
      // uncomment below and update the code to test the property vendorBillingRuleId
      //var instane = new DnlApi.DidBillingRelAvailableGet();
      //expect(instance).to.be();
    });

    it('should have the property vendorBillingRule (base name: "vendor_billing_rule")', function() {
      // uncomment below and update the code to test the property vendorBillingRule
      //var instane = new DnlApi.DidBillingRelAvailableGet();
      //expect(instance).to.be();
    });

    it('should have the property isAvailable (base name: "is_available")', function() {
      // uncomment below and update the code to test the property isAvailable
      //var instane = new DnlApi.DidBillingRelAvailableGet();
      //expect(instance).to.be();
    });

    it('should have the property actions (base name: "actions")', function() {
      // uncomment below and update the code to test the property actions
      //var instane = new DnlApi.DidBillingRelAvailableGet();
      //expect(instance).to.be();
    });

    it('should have the property vendorResId (base name: "vendor_res_id")', function() {
      // uncomment below and update the code to test the property vendorResId
      //var instane = new DnlApi.DidBillingRelAvailableGet();
      //expect(instance).to.be();
    });

  });

}));

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
    instance = new DnlApi.ClientPortal();
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

  describe('ClientPortal', function() {
    it('should create an instance of ClientPortal', function() {
      // uncomment below and update the code to test ClientPortal
      //var instane = new DnlApi.ClientPortal();
      //expect(instance).to.be.a(DnlApi.ClientPortal);
    });

    it('should have the property balance (base name: "balance")', function() {
      // uncomment below and update the code to test the property balance
      //var instane = new DnlApi.ClientPortal();
      //expect(instance).to.be();
    });

    it('should have the property egressTrunks (base name: "egress_trunks")', function() {
      // uncomment below and update the code to test the property egressTrunks
      //var instane = new DnlApi.ClientPortal();
      //expect(instance).to.be();
    });

    it('should have the property companyName (base name: "company_name")', function() {
      // uncomment below and update the code to test the property companyName
      //var instane = new DnlApi.ClientPortal();
      //expect(instance).to.be();
    });

    it('should have the property billingEmail (base name: "billing_email")', function() {
      // uncomment below and update the code to test the property billingEmail
      //var instane = new DnlApi.ClientPortal();
      //expect(instance).to.be();
    });

    it('should have the property nocEmail (base name: "noc_email")', function() {
      // uncomment below and update the code to test the property nocEmail
      //var instane = new DnlApi.ClientPortal();
      //expect(instance).to.be();
    });

    it('should have the property phone (base name: "phone")', function() {
      // uncomment below and update the code to test the property phone
      //var instane = new DnlApi.ClientPortal();
      //expect(instance).to.be();
    });

    it('should have the property billingMode (base name: "billing_mode")', function() {
      // uncomment below and update the code to test the property billingMode
      //var instane = new DnlApi.ClientPortal();
      //expect(instance).to.be();
    });

    it('should have the property address (base name: "address")', function() {
      // uncomment below and update the code to test the property address
      //var instane = new DnlApi.ClientPortal();
      //expect(instance).to.be();
    });

    it('should have the property egressTrunkCount (base name: "egress_trunk_count")', function() {
      // uncomment below and update the code to test the property egressTrunkCount
      //var instane = new DnlApi.ClientPortal();
      //expect(instance).to.be();
    });

    it('should have the property rateEmail (base name: "rate_email")', function() {
      // uncomment below and update the code to test the property rateEmail
      //var instane = new DnlApi.ClientPortal();
      //expect(instance).to.be();
    });

    it('should have the property unreadMessageCount (base name: "unread_message_count")', function() {
      // uncomment below and update the code to test the property unreadMessageCount
      //var instane = new DnlApi.ClientPortal();
      //expect(instance).to.be();
    });

    it('should have the property ingressTrunks (base name: "ingress_trunks")', function() {
      // uncomment below and update the code to test the property ingressTrunks
      //var instane = new DnlApi.ClientPortal();
      //expect(instance).to.be();
    });

    it('should have the property mainEmail (base name: "main_email")', function() {
      // uncomment below and update the code to test the property mainEmail
      //var instane = new DnlApi.ClientPortal();
      //expect(instance).to.be();
    });

    it('should have the property unpaidInvoiceCount (base name: "unpaid_invoice_count")', function() {
      // uncomment below and update the code to test the property unpaidInvoiceCount
      //var instane = new DnlApi.ClientPortal();
      //expect(instance).to.be();
    });

    it('should have the property unreadAlertCount (base name: "unread_alert_count")', function() {
      // uncomment below and update the code to test the property unreadAlertCount
      //var instane = new DnlApi.ClientPortal();
      //expect(instance).to.be();
    });

    it('should have the property ingressTrunkCount (base name: "ingress_trunk_count")', function() {
      // uncomment below and update the code to test the property ingressTrunkCount
      //var instane = new DnlApi.ClientPortal();
      //expect(instance).to.be();
    });

    it('should have the property status (base name: "status")', function() {
      // uncomment below and update the code to test the property status
      //var instane = new DnlApi.ClientPortal();
      //expect(instance).to.be();
    });

    it('should have the property creditLimit (base name: "credit_limit")', function() {
      // uncomment below and update the code to test the property creditLimit
      //var instane = new DnlApi.ClientPortal();
      //expect(instance).to.be();
    });

  });

}));
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
    instance = new DnlApi.ClientDid();
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

  describe('ClientDid', function() {
    it('should create an instance of ClientDid', function() {
      // uncomment below and update the code to test ClientDid
      //var instane = new DnlApi.ClientDid();
      //expect(instance).to.be.a(DnlApi.ClientDid);
    });

    it('should have the property name (base name: "name")', function() {
      // uncomment below and update the code to test the property name
      //var instane = new DnlApi.ClientDid();
      //expect(instance).to.be();
    });

    it('should have the property isUnlimited (base name: "is_unlimited")', function() {
      // uncomment below and update the code to test the property isUnlimited
      //var instane = new DnlApi.ClientDid();
      //expect(instance).to.be();
    });

    it('should have the property isPanelInvoices (base name: "is_panel_invoices")', function() {
      // uncomment below and update the code to test the property isPanelInvoices
      //var instane = new DnlApi.ClientDid();
      //expect(instance).to.be();
    });

    it('should have the property username (base name: "username")', function() {
      // uncomment below and update the code to test the property username
      //var instane = new DnlApi.ClientDid();
      //expect(instance).to.be();
    });

    it('should have the property callLimit (base name: "call_limit")', function() {
      // uncomment below and update the code to test the property callLimit
      //var instane = new DnlApi.ClientDid();
      //expect(instance).to.be();
    });

    it('should have the property password (base name: "password")', function() {
      // uncomment below and update the code to test the property password
      //var instane = new DnlApi.ClientDid();
      //expect(instance).to.be();
    });

    it('should have the property autoInvoicing (base name: "auto_invoicing")', function() {
      // uncomment below and update the code to test the property autoInvoicing
      //var instane = new DnlApi.ClientDid();
      //expect(instance).to.be();
    });

    it('should have the property isPanelAccountsummary (base name: "is_panel_accountsummary")', function() {
      // uncomment below and update the code to test the property isPanelAccountsummary
      //var instane = new DnlApi.ClientDid();
      //expect(instance).to.be();
    });

    it('should have the property isPanelCdrslist (base name: "is_panel_cdrslist")', function() {
      // uncomment below and update the code to test the property isPanelCdrslist
      //var instane = new DnlApi.ClientDid();
      //expect(instance).to.be();
    });

    it('should have the property isPanelMydid (base name: "is_panel_mydid")', function() {
      // uncomment below and update the code to test the property isPanelMydid
      //var instane = new DnlApi.ClientDid();
      //expect(instance).to.be();
    });

    it('should have the property isPanelRatetable (base name: "is_panel_ratetable")', function() {
      // uncomment below and update the code to test the property isPanelRatetable
      //var instane = new DnlApi.ClientDid();
      //expect(instance).to.be();
    });

    it('should have the property billingEmail (base name: "billing_email")', function() {
      // uncomment below and update the code to test the property billingEmail
      //var instane = new DnlApi.ClientDid();
      //expect(instance).to.be();
    });

    it('should have the property company (base name: "company")', function() {
      // uncomment below and update the code to test the property company
      //var instane = new DnlApi.ClientDid();
      //expect(instance).to.be();
    });

    it('should have the property isPanelPaymenthistory (base name: "is_panel_paymenthistory")', function() {
      // uncomment below and update the code to test the property isPanelPaymenthistory
      //var instane = new DnlApi.ClientDid();
      //expect(instance).to.be();
    });

    it('should have the property rateEmail (base name: "rate_email")', function() {
      // uncomment below and update the code to test the property rateEmail
      //var instane = new DnlApi.ClientDid();
      //expect(instance).to.be();
    });

    it('should have the property billingMode (base name: "billing_mode")', function() {
      // uncomment below and update the code to test the property billingMode
      //var instane = new DnlApi.ClientDid();
      //expect(instance).to.be();
    });

    it('should have the property isPanelDidrequest (base name: "is_panel_didrequest")', function() {
      // uncomment below and update the code to test the property isPanelDidrequest
      //var instane = new DnlApi.ClientDid();
      //expect(instance).to.be();
    });

    it('should have the property testCredit (base name: "test_credit")', function() {
      // uncomment below and update the code to test the property testCredit
      //var instane = new DnlApi.ClientDid();
      //expect(instance).to.be();
    });

    it('should have the property isPanelBalance (base name: "is_panel_balance")', function() {
      // uncomment below and update the code to test the property isPanelBalance
      //var instane = new DnlApi.ClientDid();
      //expect(instance).to.be();
    });

    it('should have the property nocEmail (base name: "noc_email")', function() {
      // uncomment below and update the code to test the property nocEmail
      //var instane = new DnlApi.ClientDid();
      //expect(instance).to.be();
    });

    it('should have the property address (base name: "address")', function() {
      // uncomment below and update the code to test the property address
      //var instane = new DnlApi.ClientDid();
      //expect(instance).to.be();
    });

    it('should have the property isPanelSummaryreport (base name: "is_panel_summaryreport")', function() {
      // uncomment below and update the code to test the property isPanelSummaryreport
      //var instane = new DnlApi.ClientDid();
      //expect(instance).to.be();
    });

    it('should have the property isPanelTrunks (base name: "is_panel_trunks")', function() {
      // uncomment below and update the code to test the property isPanelTrunks
      //var instane = new DnlApi.ClientDid();
      //expect(instance).to.be();
    });

    it('should have the property allowedCredit (base name: "allowed_credit")', function() {
      // uncomment below and update the code to test the property allowedCredit
      //var instane = new DnlApi.ClientDid();
      //expect(instance).to.be();
    });

    it('should have the property mainEmail (base name: "main_email")', function() {
      // uncomment below and update the code to test the property mainEmail
      //var instane = new DnlApi.ClientDid();
      //expect(instance).to.be();
    });

    it('should have the property isPanelProducts (base name: "is_panel_products")', function() {
      // uncomment below and update the code to test the property isPanelProducts
      //var instane = new DnlApi.ClientDid();
      //expect(instance).to.be();
    });

    it('should have the property resource (base name: "resource")', function() {
      // uncomment below and update the code to test the property resource
      //var instane = new DnlApi.ClientDid();
      //expect(instance).to.be();
    });

    it('should have the property active (base name: "active")', function() {
      // uncomment below and update the code to test the property active
      //var instane = new DnlApi.ClientDid();
      //expect(instance).to.be();
    });

  });

}));

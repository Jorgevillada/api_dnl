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
    instance = new DnlApi.InvoiceGeneration();
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

  describe('InvoiceGeneration', function() {
    it('should create an instance of InvoiceGeneration', function() {
      // uncomment below and update the code to test InvoiceGeneration
      //var instane = new DnlApi.InvoiceGeneration();
      //expect(instance).to.be.a(DnlApi.InvoiceGeneration);
    });

    it('should have the property showJurisdictionDetail (base name: "show_jurisdiction_detail")', function() {
      // uncomment below and update the code to test the property showJurisdictionDetail
      //var instane = new DnlApi.InvoiceGeneration();
      //expect(instance).to.be();
    });

    it('should have the property sendInvoiceAsLink (base name: "send_invoice_as_link")', function() {
      // uncomment below and update the code to test the property sendInvoiceAsLink
      //var instane = new DnlApi.InvoiceGeneration();
      //expect(instance).to.be();
    });

    it('should have the property showCdr (base name: "show_cdr")', function() {
      // uncomment below and update the code to test the property showCdr
      //var instane = new DnlApi.InvoiceGeneration();
      //expect(instance).to.be();
    });

    it('should have the property rateDecimal (base name: "rate_decimal")', function() {
      // uncomment below and update the code to test the property rateDecimal
      //var instane = new DnlApi.InvoiceGeneration();
      //expect(instance).to.be();
    });

    it('should have the property endDate (base name: "end_date")', function() {
      // uncomment below and update the code to test the property endDate
      //var instane = new DnlApi.InvoiceGeneration();
      //expect(instance).to.be();
    });

    it('should have the property showDetailByTrunk (base name: "show_detail_by_trunk")', function() {
      // uncomment below and update the code to test the property showDetailByTrunk
      //var instane = new DnlApi.InvoiceGeneration();
      //expect(instance).to.be();
    });

    it('should have the property showRateTableBreakdown (base name: "show_rate_table_breakdown")', function() {
      // uncomment below and update the code to test the property showRateTableBreakdown
      //var instane = new DnlApi.InvoiceGeneration();
      //expect(instance).to.be();
    });

    it('should have the property showTrunkBreakdown (base name: "show_trunk_breakdown")', function() {
      // uncomment below and update the code to test the property showTrunkBreakdown
      //var instane = new DnlApi.InvoiceGeneration();
      //expect(instance).to.be();
    });

    it('should have the property includeCdrInEmail (base name: "include_cdr_in_email")', function() {
      // uncomment below and update the code to test the property includeCdrInEmail
      //var instane = new DnlApi.InvoiceGeneration();
      //expect(instance).to.be();
    });

    it('should have the property showDetailByCodeName (base name: "show_detail_by_code_name")', function() {
      // uncomment below and update the code to test the property showDetailByCodeName
      //var instane = new DnlApi.InvoiceGeneration();
      //expect(instance).to.be();
    });

    it('should have the property billingEndTime (base name: "billing_end_time")', function() {
      // uncomment below and update the code to test the property billingEndTime
      //var instane = new DnlApi.InvoiceGeneration();
      //expect(instance).to.be();
    });

    it('should have the property showDetailByCountry (base name: "show_detail_by_country")', function() {
      // uncomment below and update the code to test the property showDetailByCountry
      //var instane = new DnlApi.InvoiceGeneration();
      //expect(instance).to.be();
    });

    it('should have the property gmt (base name: "gmt")', function() {
      // uncomment below and update the code to test the property gmt
      //var instane = new DnlApi.InvoiceGeneration();
      //expect(instance).to.be();
    });

    it('should have the property startDate (base name: "start_date")', function() {
      // uncomment below and update the code to test the property startDate
      //var instane = new DnlApi.InvoiceGeneration();
      //expect(instance).to.be();
    });

    it('should have the property showCodeSummary (base name: "show_code_summary")', function() {
      // uncomment below and update the code to test the property showCodeSummary
      //var instane = new DnlApi.InvoiceGeneration();
      //expect(instance).to.be();
    });

    it('should have the property autoSendInvoice (base name: "auto_send_invoice")', function() {
      // uncomment below and update the code to test the property autoSendInvoice
      //var instane = new DnlApi.InvoiceGeneration();
      //expect(instance).to.be();
    });

    it('should have the property includeAccountDetail (base name: "include_account_detail")', function() {
      // uncomment below and update the code to test the property includeAccountDetail
      //var instane = new DnlApi.InvoiceGeneration();
      //expect(instance).to.be();
    });

    it('should have the property billingStartTime (base name: "billing_start_time")', function() {
      // uncomment below and update the code to test the property billingStartTime
      //var instane = new DnlApi.InvoiceGeneration();
      //expect(instance).to.be();
    });

    it('should have the property showPaymentSummary (base name: "show_payment_summary")', function() {
      // uncomment below and update the code to test the property showPaymentSummary
      //var instane = new DnlApi.InvoiceGeneration();
      //expect(instance).to.be();
    });

    it('should have the property showDailyBreakdown (base name: "show_daily_breakdown")', function() {
      // uncomment below and update the code to test the property showDailyBreakdown
      //var instane = new DnlApi.InvoiceGeneration();
      //expect(instance).to.be();
    });

  });

}));

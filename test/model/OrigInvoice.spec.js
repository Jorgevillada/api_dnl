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
    instance = new DnlApi.OrigInvoice();
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

  describe('OrigInvoice', function() {
    it('should create an instance of OrigInvoice', function() {
      // uncomment below and update the code to test OrigInvoice
      //var instane = new DnlApi.OrigInvoice();
      //expect(instance).to.be.a(DnlApi.OrigInvoice);
    });

    it('should have the property clientId (base name: "client_id")', function() {
      // uncomment below and update the code to test the property clientId
      //var instane = new DnlApi.OrigInvoice();
      //expect(instance).to.be();
    });

    it('should have the property state (base name: "state")', function() {
      // uncomment below and update the code to test the property state
      //var instane = new DnlApi.OrigInvoice();
      //expect(instance).to.be();
    });

    it('should have the property totalAmount (base name: "total_amount")', function() {
      // uncomment below and update the code to test the property totalAmount
      //var instane = new DnlApi.OrigInvoice();
      //expect(instance).to.be();
    });

    it('should have the property invoiceEnd (base name: "invoice_end")', function() {
      // uncomment below and update the code to test the property invoiceEnd
      //var instane = new DnlApi.OrigInvoice();
      //expect(instance).to.be();
    });

    it('should have the property invoiceNumber (base name: "invoice_number")', function() {
      // uncomment below and update the code to test the property invoiceNumber
      //var instane = new DnlApi.OrigInvoice();
      //expect(instance).to.be();
    });

    it('should have the property invoiceId (base name: "invoice_id")', function() {
      // uncomment below and update the code to test the property invoiceId
      //var instane = new DnlApi.OrigInvoice();
      //expect(instance).to.be();
    });

    it('should have the property invoiceStart (base name: "invoice_start")', function() {
      // uncomment below and update the code to test the property invoiceStart
      //var instane = new DnlApi.OrigInvoice();
      //expect(instance).to.be();
    });

    it('should have the property invoiceTime (base name: "invoice_time")', function() {
      // uncomment below and update the code to test the property invoiceTime
      //var instane = new DnlApi.OrigInvoice();
      //expect(instance).to.be();
    });

    it('should have the property clientName (base name: "client_name")', function() {
      // uncomment below and update the code to test the property clientName
      //var instane = new DnlApi.OrigInvoice();
      //expect(instance).to.be();
    });

    it('should have the property createType (base name: "create_type")', function() {
      // uncomment below and update the code to test the property createType
      //var instane = new DnlApi.OrigInvoice();
      //expect(instance).to.be();
    });

    it('should have the property pdfPath (base name: "pdf_path")', function() {
      // uncomment below and update the code to test the property pdfPath
      //var instane = new DnlApi.OrigInvoice();
      //expect(instance).to.be();
    });

  });

}));

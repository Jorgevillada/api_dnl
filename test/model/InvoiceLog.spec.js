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
    instance = new DnlApi.InvoiceLog();
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

  describe('InvoiceLog', function() {
    it('should create an instance of InvoiceLog', function() {
      // uncomment below and update the code to test InvoiceLog
      //var instane = new DnlApi.InvoiceLog();
      //expect(instance).to.be.a(DnlApi.InvoiceLog);
    });

    it('should have the property startTime (base name: "start_time")', function() {
      // uncomment below and update the code to test the property startTime
      //var instane = new DnlApi.InvoiceLog();
      //expect(instance).to.be();
    });

    it('should have the property relatedCount (base name: "related_count")', function() {
      // uncomment below and update the code to test the property relatedCount
      //var instane = new DnlApi.InvoiceLog();
      //expect(instance).to.be();
    });

    it('should have the property invoiceDueDate (base name: "invoice_due_date")', function() {
      // uncomment below and update the code to test the property invoiceDueDate
      //var instane = new DnlApi.InvoiceLog();
      //expect(instance).to.be();
    });

    it('should have the property endTime (base name: "end_time")', function() {
      // uncomment below and update the code to test the property endTime
      //var instane = new DnlApi.InvoiceLog();
      //expect(instance).to.be();
    });

    it('should have the property id (base name: "id")', function() {
      // uncomment below and update the code to test the property id
      //var instane = new DnlApi.InvoiceLog();
      //expect(instance).to.be();
    });

    it('should have the property status (base name: "status")', function() {
      // uncomment below and update the code to test the property status
      //var instane = new DnlApi.InvoiceLog();
      //expect(instance).to.be();
    });

    it('should have the property cnt (base name: "cnt")', function() {
      // uncomment below and update the code to test the property cnt
      //var instane = new DnlApi.InvoiceLog();
      //expect(instance).to.be();
    });

    it('should have the property clientName (base name: "client_name")', function() {
      // uncomment below and update the code to test the property clientName
      //var instane = new DnlApi.InvoiceLog();
      //expect(instance).to.be();
    });

    it('should have the property amount (base name: "amount")', function() {
      // uncomment below and update the code to test the property amount
      //var instane = new DnlApi.InvoiceLog();
      //expect(instance).to.be();
    });

  });

}));

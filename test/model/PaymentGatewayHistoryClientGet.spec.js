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
    instance = new DnlApi.PaymentGatewayHistoryClientGet();
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

  describe('PaymentGatewayHistoryClientGet', function() {
    it('should create an instance of PaymentGatewayHistoryClientGet', function() {
      // uncomment below and update the code to test PaymentGatewayHistoryClientGet
      //var instane = new DnlApi.PaymentGatewayHistoryClientGet();
      //expect(instance).to.be.a(DnlApi.PaymentGatewayHistoryClientGet);
    });

    it('should have the property clientId (base name: "client_id")', function() {
      // uncomment below and update the code to test the property clientId
      //var instane = new DnlApi.PaymentGatewayHistoryClientGet();
      //expect(instance).to.be();
    });

    it('should have the property paypalFee (base name: "paypal_fee")', function() {
      // uncomment below and update the code to test the property paypalFee
      //var instane = new DnlApi.PaymentGatewayHistoryClientGet();
      //expect(instance).to.be();
    });

    it('should have the property id (base name: "id")', function() {
      // uncomment below and update the code to test the property id
      //var instane = new DnlApi.PaymentGatewayHistoryClientGet();
      //expect(instance).to.be();
    });

    it('should have the property paypalId (base name: "paypal_id")', function() {
      // uncomment below and update the code to test the property paypalId
      //var instane = new DnlApi.PaymentGatewayHistoryClientGet();
      //expect(instance).to.be();
    });

    it('should have the property paidOn (base name: "paid_on")', function() {
      // uncomment below and update the code to test the property paidOn
      //var instane = new DnlApi.PaymentGatewayHistoryClientGet();
      //expect(instance).to.be();
    });

    it('should have the property type (base name: "type")', function() {
      // uncomment below and update the code to test the property type
      //var instane = new DnlApi.PaymentGatewayHistoryClientGet();
      //expect(instance).to.be();
    });

    it('should have the property actualReceived (base name: "actual_received")', function() {
      // uncomment below and update the code to test the property actualReceived
      //var instane = new DnlApi.PaymentGatewayHistoryClientGet();
      //expect(instance).to.be();
    });

    it('should have the property clientName (base name: "client_name")', function() {
      // uncomment below and update the code to test the property clientName
      //var instane = new DnlApi.PaymentGatewayHistoryClientGet();
      //expect(instance).to.be();
    });

    it('should have the property stripTransactionId (base name: "strip_transaction_id")', function() {
      // uncomment below and update the code to test the property stripTransactionId
      //var instane = new DnlApi.PaymentGatewayHistoryClientGet();
      //expect(instance).to.be();
    });

    it('should have the property returnCode (base name: "return_code")', function() {
      // uncomment below and update the code to test the property returnCode
      //var instane = new DnlApi.PaymentGatewayHistoryClientGet();
      //expect(instance).to.be();
    });

    it('should have the property error (base name: "error")', function() {
      // uncomment below and update the code to test the property error
      //var instane = new DnlApi.PaymentGatewayHistoryClientGet();
      //expect(instance).to.be();
    });

    it('should have the property stripId (base name: "strip_id")', function() {
      // uncomment below and update the code to test the property stripId
      //var instane = new DnlApi.PaymentGatewayHistoryClientGet();
      //expect(instance).to.be();
    });

    it('should have the property paypalTransactionId (base name: "paypal_transaction_id")', function() {
      // uncomment below and update the code to test the property paypalTransactionId
      //var instane = new DnlApi.PaymentGatewayHistoryClientGet();
      //expect(instance).to.be();
    });

    it('should have the property status (base name: "status")', function() {
      // uncomment below and update the code to test the property status
      //var instane = new DnlApi.PaymentGatewayHistoryClientGet();
      //expect(instance).to.be();
    });

    it('should have the property enteredOn (base name: "entered_on")', function() {
      // uncomment below and update the code to test the property enteredOn
      //var instane = new DnlApi.PaymentGatewayHistoryClientGet();
      //expect(instance).to.be();
    });

    it('should have the property amount (base name: "amount")', function() {
      // uncomment below and update the code to test the property amount
      //var instane = new DnlApi.PaymentGatewayHistoryClientGet();
      //expect(instance).to.be();
    });

    it('should have the property response (base name: "response")', function() {
      // uncomment below and update the code to test the property response
      //var instane = new DnlApi.PaymentGatewayHistoryClientGet();
      //expect(instance).to.be();
    });

  });

}));

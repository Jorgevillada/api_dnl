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
    instance = new DnlApi.SystemParameterPaymentSetting();
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

  describe('SystemParameterPaymentSetting', function() {
    it('should create an instance of SystemParameterPaymentSetting', function() {
      // uncomment below and update the code to test SystemParameterPaymentSetting
      //var instane = new DnlApi.SystemParameterPaymentSetting();
      //expect(instance).to.be.a(DnlApi.SystemParameterPaymentSetting);
    });

    it('should have the property autoCarrierNotification (base name: "auto_carrier_notification")', function() {
      // uncomment below and update the code to test the property autoCarrierNotification
      //var instane = new DnlApi.SystemParameterPaymentSetting();
      //expect(instance).to.be();
    });

    it('should have the property paypalFee (base name: "paypal_fee")', function() {
      // uncomment below and update the code to test the property paypalFee
      //var instane = new DnlApi.SystemParameterPaymentSetting();
      //expect(instance).to.be();
    });

    it('should have the property chargeType (base name: "charge_type")', function() {
      // uncomment below and update the code to test the property chargeType
      //var instane = new DnlApi.SystemParameterPaymentSetting();
      //expect(instance).to.be();
    });

    it('should have the property paypalAccount (base name: "paypal_account")', function() {
      // uncomment below and update the code to test the property paypalAccount
      //var instane = new DnlApi.SystemParameterPaymentSetting();
      //expect(instance).to.be();
    });

    it('should have the property ccEmail (base name: "cc_email")', function() {
      // uncomment below and update the code to test the property ccEmail
      //var instane = new DnlApi.SystemParameterPaymentSetting();
      //expect(instance).to.be();
    });

    it('should have the property stripeFee (base name: "stripe_fee")', function() {
      // uncomment below and update the code to test the property stripeFee
      //var instane = new DnlApi.SystemParameterPaymentSetting();
      //expect(instance).to.be();
    });

    it('should have the property enableEmailNotification (base name: "enable_email_notification")', function() {
      // uncomment below and update the code to test the property enableEmailNotification
      //var instane = new DnlApi.SystemParameterPaymentSetting();
      //expect(instance).to.be();
    });

    it('should have the property paymentReceivedConfirmation (base name: "payment_received_confirmation")', function() {
      // uncomment below and update the code to test the property paymentReceivedConfirmation
      //var instane = new DnlApi.SystemParameterPaymentSetting();
      //expect(instance).to.be();
    });

    it('should have the property stripePublisherKey (base name: "stripe_publisher_key")', function() {
      // uncomment below and update the code to test the property stripePublisherKey
      //var instane = new DnlApi.SystemParameterPaymentSetting();
      //expect(instance).to.be();
    });

    it('should have the property emails (base name: "emails")', function() {
      // uncomment below and update the code to test the property emails
      //var instane = new DnlApi.SystemParameterPaymentSetting();
      //expect(instance).to.be();
    });

    it('should have the property stripeSecretKey (base name: "stripe_secret_key")', function() {
      // uncomment below and update the code to test the property stripeSecretKey
      //var instane = new DnlApi.SystemParameterPaymentSetting();
      //expect(instance).to.be();
    });

  });

}));
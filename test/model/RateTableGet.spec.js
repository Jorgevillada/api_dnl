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
    instance = new DnlApi.RateTableGet();
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

  describe('RateTableGet', function() {
    it('should create an instance of RateTableGet', function() {
      // uncomment below and update the code to test RateTableGet
      //var instane = new DnlApi.RateTableGet();
      //expect(instance).to.be.a(DnlApi.RateTableGet);
    });

    it('should have the property name (base name: "name")', function() {
      // uncomment below and update the code to test the property name
      //var instane = new DnlApi.RateTableGet();
      //expect(instance).to.be();
    });

    it('should have the property currencyId (base name: "currency_id")', function() {
      // uncomment below and update the code to test the property currencyId
      //var instane = new DnlApi.RateTableGet();
      //expect(instance).to.be();
    });

    it('should have the property usageCount (base name: "usage_count")', function() {
      // uncomment below and update the code to test the property usageCount
      //var instane = new DnlApi.RateTableGet();
      //expect(instance).to.be();
    });

    it('should have the property updateBy (base name: "update_by")', function() {
      // uncomment below and update the code to test the property updateBy
      //var instane = new DnlApi.RateTableGet();
      //expect(instance).to.be();
    });

    it('should have the property currencyName (base name: "currency_name")', function() {
      // uncomment below and update the code to test the property currencyName
      //var instane = new DnlApi.RateTableGet();
      //expect(instance).to.be();
    });

    it('should have the property billingMethod (base name: "billing_method")', function() {
      // uncomment below and update the code to test the property billingMethod
      //var instane = new DnlApi.RateTableGet();
      //expect(instance).to.be();
    });

    it('should have the property rateTableId (base name: "rate_table_id")', function() {
      // uncomment below and update the code to test the property rateTableId
      //var instane = new DnlApi.RateTableGet();
      //expect(instance).to.be();
    });

    it('should have the property rateTypeName (base name: "rate_type_name")', function() {
      // uncomment below and update the code to test the property rateTypeName
      //var instane = new DnlApi.RateTableGet();
      //expect(instance).to.be();
    });

    it('should have the property codeDeckId (base name: "code_deck_id")', function() {
      // uncomment below and update the code to test the property codeDeckId
      //var instane = new DnlApi.RateTableGet();
      //expect(instance).to.be();
    });

    it('should have the property updateAt (base name: "update_at")', function() {
      // uncomment below and update the code to test the property updateAt
      //var instane = new DnlApi.RateTableGet();
      //expect(instance).to.be();
    });

    it('should have the property codeDeckName (base name: "code_deck_name")', function() {
      // uncomment below and update the code to test the property codeDeckName
      //var instane = new DnlApi.RateTableGet();
      //expect(instance).to.be();
    });

  });

}));
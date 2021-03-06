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
    instance = new DnlApi.RateGenerationTemplateGet();
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

  describe('RateGenerationTemplateGet', function() {
    it('should create an instance of RateGenerationTemplateGet', function() {
      // uncomment below and update the code to test RateGenerationTemplateGet
      //var instane = new DnlApi.RateGenerationTemplateGet();
      //expect(instance).to.be.a(DnlApi.RateGenerationTemplateGet);
    });

    it('should have the property name (base name: "name")', function() {
      // uncomment below and update the code to test the property name
      //var instane = new DnlApi.RateGenerationTemplateGet();
      //expect(instance).to.be();
    });

    it('should have the property lcrDigit (base name: "lcr_digit")', function() {
      // uncomment below and update the code to test the property lcrDigit
      //var instane = new DnlApi.RateGenerationTemplateGet();
      //expect(instance).to.be();
    });

    it('should have the property effectiveDays (base name: "effective_days")', function() {
      // uncomment below and update the code to test the property effectiveDays
      //var instane = new DnlApi.RateGenerationTemplateGet();
      //expect(instance).to.be();
    });

    it('should have the property decimalPlaces (base name: "decimal_places")', function() {
      // uncomment below and update the code to test the property decimalPlaces
      //var instane = new DnlApi.RateGenerationTemplateGet();
      //expect(instance).to.be();
    });

    it('should have the property egressStr (base name: "egress_str")', function() {
      // uncomment below and update the code to test the property egressStr
      //var instane = new DnlApi.RateGenerationTemplateGet();
      //expect(instance).to.be();
    });

    it('should have the property codeDeckId (base name: "code_deck_id")', function() {
      // uncomment below and update the code to test the property codeDeckId
      //var instane = new DnlApi.RateGenerationTemplateGet();
      //expect(instance).to.be();
    });

    it('should have the property rateTableType (base name: "rate_table_type")', function() {
      // uncomment below and update the code to test the property rateTableType
      //var instane = new DnlApi.RateGenerationTemplateGet();
      //expect(instance).to.be();
    });

    it('should have the property includeLocalRate (base name: "include_local_rate")', function() {
      // uncomment below and update the code to test the property includeLocalRate
      //var instane = new DnlApi.RateGenerationTemplateGet();
      //expect(instance).to.be();
    });

    it('should have the property marginDefaultType (base name: "margin_default_type")', function() {
      // uncomment below and update the code to test the property marginDefaultType
      //var instane = new DnlApi.RateGenerationTemplateGet();
      //expect(instance).to.be();
    });

    it('should have the property createBy (base name: "create_by")', function() {
      // uncomment below and update the code to test the property createBy
      //var instane = new DnlApi.RateGenerationTemplateGet();
      //expect(instance).to.be();
    });

    it('should have the property marginDefaultValue (base name: "margin_default_value")', function() {
      // uncomment below and update the code to test the property marginDefaultValue
      //var instane = new DnlApi.RateGenerationTemplateGet();
      //expect(instance).to.be();
    });

    it('should have the property defaultRate (base name: "default_rate")', function() {
      // uncomment below and update the code to test the property defaultRate
      //var instane = new DnlApi.RateGenerationTemplateGet();
      //expect(instance).to.be();
    });

    it('should have the property defaultMinTime (base name: "default_min_time")', function() {
      // uncomment below and update the code to test the property defaultMinTime
      //var instane = new DnlApi.RateGenerationTemplateGet();
      //expect(instance).to.be();
    });

    it('should have the property createOn (base name: "create_on")', function() {
      // uncomment below and update the code to test the property createOn
      //var instane = new DnlApi.RateGenerationTemplateGet();
      //expect(instance).to.be();
    });

    it('should have the property id (base name: "id")', function() {
      // uncomment below and update the code to test the property id
      //var instane = new DnlApi.RateGenerationTemplateGet();
      //expect(instance).to.be();
    });

    it('should have the property lastGenerated (base name: "last_generated")', function() {
      // uncomment below and update the code to test the property lastGenerated
      //var instane = new DnlApi.RateGenerationTemplateGet();
      //expect(instance).to.be();
    });

    it('should have the property margins (base name: "margins")', function() {
      // uncomment below and update the code to test the property margins
      //var instane = new DnlApi.RateGenerationTemplateGet();
      //expect(instance).to.be();
    });

    it('should have the property includeBlockedRoute (base name: "include_blocked_route")', function() {
      // uncomment below and update the code to test the property includeBlockedRoute
      //var instane = new DnlApi.RateGenerationTemplateGet();
      //expect(instance).to.be();
    });

    it('should have the property defaultInterval (base name: "default_interval")', function() {
      // uncomment below and update the code to test the property defaultInterval
      //var instane = new DnlApi.RateGenerationTemplateGet();
      //expect(instance).to.be();
    });

    it('should have the property details (base name: "details")', function() {
      // uncomment below and update the code to test the property details
      //var instane = new DnlApi.RateGenerationTemplateGet();
      //expect(instance).to.be();
    });

  });

}));

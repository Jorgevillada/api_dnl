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
    instance = new DnlApi.RateUploadTemplate();
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

  describe('RateUploadTemplate', function() {
    it('should create an instance of RateUploadTemplate', function() {
      // uncomment below and update the code to test RateUploadTemplate
      //var instane = new DnlApi.RateUploadTemplate();
      //expect(instance).to.be.a(DnlApi.RateUploadTemplate);
    });

    it('should have the property effectiveDateFormat (base name: "effective_date_format")', function() {
      // uncomment below and update the code to test the property effectiveDateFormat
      //var instane = new DnlApi.RateUploadTemplate();
      //expect(instance).to.be();
    });

    it('should have the property appendPrefix (base name: "append_prefix")', function() {
      // uncomment below and update the code to test the property appendPrefix
      //var instane = new DnlApi.RateUploadTemplate();
      //expect(instance).to.be();
    });

    it('should have the property endDateAllGmt (base name: "end_date_all_gmt")', function() {
      // uncomment below and update the code to test the property endDateAllGmt
      //var instane = new DnlApi.RateUploadTemplate();
      //expect(instance).to.be();
    });

    it('should have the property newCodeDays (base name: "new_code_days")', function() {
      // uncomment below and update the code to test the property newCodeDays
      //var instane = new DnlApi.RateUploadTemplate();
      //expect(instance).to.be();
    });

    it('should have the property minTimeDefault (base name: "min_time_default")', function() {
      // uncomment below and update the code to test the property minTimeDefault
      //var instane = new DnlApi.RateUploadTemplate();
      //expect(instance).to.be();
    });

    it('should have the property endDateGmt (base name: "end_date_gmt")', function() {
      // uncomment below and update the code to test the property endDateGmt
      //var instane = new DnlApi.RateUploadTemplate();
      //expect(instance).to.be();
    });

    it('should have the property rateIncreaseDays (base name: "rate_increase_days")', function() {
      // uncomment below and update the code to test the property rateIncreaseDays
      //var instane = new DnlApi.RateUploadTemplate();
      //expect(instance).to.be();
    });

    it('should have the property name (base name: "name")', function() {
      // uncomment below and update the code to test the property name
      //var instane = new DnlApi.RateUploadTemplate();
      //expect(instance).to.be();
    });

    it('should have the property headers (base name: "headers")', function() {
      // uncomment below and update the code to test the property headers
      //var instane = new DnlApi.RateUploadTemplate();
      //expect(instance).to.be();
    });

    it('should have the property intervalDefault (base name: "interval_default")', function() {
      // uncomment below and update the code to test the property intervalDefault
      //var instane = new DnlApi.RateUploadTemplate();
      //expect(instance).to.be();
    });

    it('should have the property sendErrorEmailTo (base name: "send_error_email_to")', function() {
      // uncomment below and update the code to test the property sendErrorEmailTo
      //var instane = new DnlApi.RateUploadTemplate();
      //expect(instance).to.be();
    });

    it('should have the property endDate (base name: "end_date")', function() {
      // uncomment below and update the code to test the property endDate
      //var instane = new DnlApi.RateUploadTemplate();
      //expect(instance).to.be();
    });

    it('should have the property rejectRate (base name: "reject_rate")', function() {
      // uncomment below and update the code to test the property rejectRate
      //var instane = new DnlApi.RateUploadTemplate();
      //expect(instance).to.be();
    });

    it('should have the property endDateAll (base name: "end_date_all")', function() {
      // uncomment below and update the code to test the property endDateAll
      //var instane = new DnlApi.RateUploadTemplate();
      //expect(instance).to.be();
    });

    it('should have the property dupMethod (base name: "dup_method")', function() {
      // uncomment below and update the code to test the property dupMethod
      //var instane = new DnlApi.RateUploadTemplate();
      //expect(instance).to.be();
    });

    it('should have the property codeNameMatch (base name: "code_name_match")', function() {
      // uncomment below and update the code to test the property codeNameMatch
      //var instane = new DnlApi.RateUploadTemplate();
      //expect(instance).to.be();
    });

    it('should have the property withHeader (base name: "with_header")', function() {
      // uncomment below and update the code to test the property withHeader
      //var instane = new DnlApi.RateUploadTemplate();
      //expect(instance).to.be();
    });

    it('should have the property checkEffective (base name: "check_effective")', function() {
      // uncomment below and update the code to test the property checkEffective
      //var instane = new DnlApi.RateUploadTemplate();
      //expect(instance).to.be();
    });

    it('should have the property hasCodeDeck (base name: "has_code_deck")', function() {
      // uncomment below and update the code to test the property hasCodeDeck
      //var instane = new DnlApi.RateUploadTemplate();
      //expect(instance).to.be();
    });

    it('should have the property effectiveDateDefault (base name: "effective_date_default")', function() {
      // uncomment below and update the code to test the property effectiveDateDefault
      //var instane = new DnlApi.RateUploadTemplate();
      //expect(instance).to.be();
    });

    it('should have the property appendPrefixValue (base name: "append_prefix_value")', function() {
      // uncomment below and update the code to test the property appendPrefixValue
      //var instane = new DnlApi.RateUploadTemplate();
      //expect(instance).to.be();
    });

  });

}));

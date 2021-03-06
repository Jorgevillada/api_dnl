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
    instance = new DnlApi.RateUploadTask();
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

  describe('RateUploadTask', function() {
    it('should create an instance of RateUploadTask', function() {
      // uncomment below and update the code to test RateUploadTask
      //var instane = new DnlApi.RateUploadTask();
      //expect(instance).to.be.a(DnlApi.RateUploadTask);
    });

    it('should have the property operatorUser (base name: "operator_user")', function() {
      // uncomment below and update the code to test the property operatorUser
      //var instane = new DnlApi.RateUploadTask();
      //expect(instance).to.be();
    });

    it('should have the property rateTableName (base name: "rate_table_name")', function() {
      // uncomment below and update the code to test the property rateTableName
      //var instane = new DnlApi.RateUploadTask();
      //expect(instance).to.be();
    });

    it('should have the property progress (base name: "progress")', function() {
      // uncomment below and update the code to test the property progress
      //var instane = new DnlApi.RateUploadTask();
      //expect(instance).to.be();
    });

    it('should have the property rateTableId (base name: "rate_table_id")', function() {
      // uncomment below and update the code to test the property rateTableId
      //var instane = new DnlApi.RateUploadTask();
      //expect(instance).to.be();
    });

    it('should have the property status (base name: "status")', function() {
      // uncomment below and update the code to test the property status
      //var instane = new DnlApi.RateUploadTask();
      //expect(instance).to.be();
    });

    it('should have the property method (base name: "method")', function() {
      // uncomment below and update the code to test the property method
      //var instane = new DnlApi.RateUploadTask();
      //expect(instance).to.be();
    });

    it('should have the property id (base name: "id")', function() {
      // uncomment below and update the code to test the property id
      //var instane = new DnlApi.RateUploadTask();
      //expect(instance).to.be();
    });

    it('should have the property uploadDateTime (base name: "upload_date_time")', function() {
      // uncomment below and update the code to test the property uploadDateTime
      //var instane = new DnlApi.RateUploadTask();
      //expect(instance).to.be();
    });

    it('should have the property endDateTime (base name: "end_date_time")', function() {
      // uncomment below and update the code to test the property endDateTime
      //var instane = new DnlApi.RateUploadTask();
      //expect(instance).to.be();
    });

    it('should have the property expenseDetail (base name: "expense_detail")', function() {
      // uncomment below and update the code to test the property expenseDetail
      //var instane = new DnlApi.RateUploadTask();
      //expect(instance).to.be();
    });

    it('should have the property startDateTime (base name: "start_date_time")', function() {
      // uncomment below and update the code to test the property startDateTime
      //var instane = new DnlApi.RateUploadTask();
      //expect(instance).to.be();
    });

    it('should have the property uploadOrigFile (base name: "upload_orig_file")', function() {
      // uncomment below and update the code to test the property uploadOrigFile
      //var instane = new DnlApi.RateUploadTask();
      //expect(instance).to.be();
    });

  });

}));

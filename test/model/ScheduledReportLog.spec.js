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
    instance = new DnlApi.ScheduledReportLog();
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

  describe('ScheduledReportLog', function() {
    it('should create an instance of ScheduledReportLog', function() {
      // uncomment below and update the code to test ScheduledReportLog
      //var instane = new DnlApi.ScheduledReportLog();
      //expect(instance).to.be.a(DnlApi.ScheduledReportLog);
    });

    it('should have the property emailTo (base name: "email_to")', function() {
      // uncomment below and update the code to test the property emailTo
      //var instane = new DnlApi.ScheduledReportLog();
      //expect(instance).to.be();
    });

    it('should have the property executeTime (base name: "execute_time")', function() {
      // uncomment below and update the code to test the property executeTime
      //var instane = new DnlApi.ScheduledReportLog();
      //expect(instance).to.be();
    });

    it('should have the property id (base name: "id")', function() {
      // uncomment below and update the code to test the property id
      //var instane = new DnlApi.ScheduledReportLog();
      //expect(instance).to.be();
    });

    it('should have the property attachmentPath (base name: "attachment_path")', function() {
      // uncomment below and update the code to test the property attachmentPath
      //var instane = new DnlApi.ScheduledReportLog();
      //expect(instance).to.be();
    });

    it('should have the property reportName (base name: "report_name")', function() {
      // uncomment below and update the code to test the property reportName
      //var instane = new DnlApi.ScheduledReportLog();
      //expect(instance).to.be();
    });

  });

}));

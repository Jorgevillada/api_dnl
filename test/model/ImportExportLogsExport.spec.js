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
    instance = new DnlApi.ImportExportLogsExport();
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

  describe('ImportExportLogsExport', function() {
    it('should create an instance of ImportExportLogsExport', function() {
      // uncomment below and update the code to test ImportExportLogsExport
      //var instane = new DnlApi.ImportExportLogsExport();
      //expect(instance).to.be.a(DnlApi.ImportExportLogsExport);
    });

    it('should have the property userName (base name: "user_name")', function() {
      // uncomment below and update the code to test the property userName
      //var instane = new DnlApi.ImportExportLogsExport();
      //expect(instance).to.be();
    });

    it('should have the property fileName (base name: "file_name")', function() {
      // uncomment below and update the code to test the property fileName
      //var instane = new DnlApi.ImportExportLogsExport();
      //expect(instance).to.be();
    });

    it('should have the property downloadTime (base name: "download_time")', function() {
      // uncomment below and update the code to test the property downloadTime
      //var instane = new DnlApi.ImportExportLogsExport();
      //expect(instance).to.be();
    });

    it('should have the property id (base name: "id")', function() {
      // uncomment below and update the code to test the property id
      //var instane = new DnlApi.ImportExportLogsExport();
      //expect(instance).to.be();
    });

    it('should have the property status (base name: "status")', function() {
      // uncomment below and update the code to test the property status
      //var instane = new DnlApi.ImportExportLogsExport();
      //expect(instance).to.be();
    });

    it('should have the property finishedTime (base name: "finished_time")', function() {
      // uncomment below and update the code to test the property finishedTime
      //var instane = new DnlApi.ImportExportLogsExport();
      //expect(instance).to.be();
    });

    it('should have the property obj (base name: "obj")', function() {
      // uncomment below and update the code to test the property obj
      //var instane = new DnlApi.ImportExportLogsExport();
      //expect(instance).to.be();
    });

  });

}));

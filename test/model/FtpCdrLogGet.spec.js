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
    instance = new DnlApi.FtpCdrLogGet();
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

  describe('FtpCdrLogGet', function() {
    it('should create an instance of FtpCdrLogGet', function() {
      // uncomment below and update the code to test FtpCdrLogGet
      //var instane = new DnlApi.FtpCdrLogGet();
      //expect(instance).to.be.a(DnlApi.FtpCdrLogGet);
    });

    it('should have the property clientAlias (base name: "client_alias")', function() {
      // uncomment below and update the code to test the property clientAlias
      //var instane = new DnlApi.FtpCdrLogGet();
      //expect(instance).to.be();
    });

    it('should have the property cdrEndTime (base name: "cdr_end_time")', function() {
      // uncomment below and update the code to test the property cdrEndTime
      //var instane = new DnlApi.FtpCdrLogGet();
      //expect(instance).to.be();
    });

    it('should have the property result (base name: "result")', function() {
      // uncomment below and update the code to test the property result
      //var instane = new DnlApi.FtpCdrLogGet();
      //expect(instance).to.be();
    });

    it('should have the property ftpIp (base name: "ftp_ip")', function() {
      // uncomment below and update the code to test the property ftpIp
      //var instane = new DnlApi.FtpCdrLogGet();
      //expect(instance).to.be();
    });

    it('should have the property id (base name: "id")', function() {
      // uncomment below and update the code to test the property id
      //var instane = new DnlApi.FtpCdrLogGet();
      //expect(instance).to.be();
    });

    it('should have the property ftpEndTime (base name: "ftp_end_time")', function() {
      // uncomment below and update the code to test the property ftpEndTime
      //var instane = new DnlApi.FtpCdrLogGet();
      //expect(instance).to.be();
    });

    it('should have the property ftpStartTime (base name: "ftp_start_time")', function() {
      // uncomment below and update the code to test the property ftpStartTime
      //var instane = new DnlApi.FtpCdrLogGet();
      //expect(instance).to.be();
    });

    it('should have the property ftpDir (base name: "ftp_dir")', function() {
      // uncomment below and update the code to test the property ftpDir
      //var instane = new DnlApi.FtpCdrLogGet();
      //expect(instance).to.be();
    });

    it('should have the property status (base name: "status")', function() {
      // uncomment below and update the code to test the property status
      //var instane = new DnlApi.FtpCdrLogGet();
      //expect(instance).to.be();
    });

    it('should have the property pid (base name: "pid")', function() {
      // uncomment below and update the code to test the property pid
      //var instane = new DnlApi.FtpCdrLogGet();
      //expect(instance).to.be();
    });

    it('should have the property cdrStartTime (base name: "cdr_start_time")', function() {
      // uncomment below and update the code to test the property cdrStartTime
      //var instane = new DnlApi.FtpCdrLogGet();
      //expect(instance).to.be();
    });

  });

}));
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
    instance = new DnlApi.ModifLog();
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

  describe('ModifLog', function() {
    it('should create an instance of ModifLog', function() {
      // uncomment below and update the code to test ModifLog
      //var instane = new DnlApi.ModifLog();
      //expect(instance).to.be.a(DnlApi.ModifLog);
    });

    it('should have the property name (base name: "name")', function() {
      // uncomment below and update the code to test the property name
      //var instane = new DnlApi.ModifLog();
      //expect(instance).to.be();
    });

    it('should have the property rollback (base name: "rollback")', function() {
      // uncomment below and update the code to test the property rollback
      //var instane = new DnlApi.ModifLog();
      //expect(instance).to.be();
    });

    it('should have the property rollbackExtraInfo (base name: "rollback_extra_info")', function() {
      // uncomment below and update the code to test the property rollbackExtraInfo
      //var instane = new DnlApi.ModifLog();
      //expect(instance).to.be();
    });

    it('should have the property id (base name: "id")', function() {
      // uncomment below and update the code to test the property id
      //var instane = new DnlApi.ModifLog();
      //expect(instance).to.be();
    });

    it('should have the property module (base name: "module")', function() {
      // uncomment below and update the code to test the property module
      //var instane = new DnlApi.ModifLog();
      //expect(instance).to.be();
    });

    it('should have the property detail (base name: "detail")', function() {
      // uncomment below and update the code to test the property detail
      //var instane = new DnlApi.ModifLog();
      //expect(instance).to.be();
    });

    it('should have the property type (base name: "type")', function() {
      // uncomment below and update the code to test the property type
      //var instane = new DnlApi.ModifLog();
      //expect(instance).to.be();
    });

    it('should have the property time (base name: "time")', function() {
      // uncomment below and update the code to test the property time
      //var instane = new DnlApi.ModifLog();
      //expect(instance).to.be();
    });

  });

}));

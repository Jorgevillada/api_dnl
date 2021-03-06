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
    instance = new DnlApi.SystemFunction();
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

  describe('SystemFunction', function() {
    it('should create an instance of SystemFunction', function() {
      // uncomment below and update the code to test SystemFunction
      //var instane = new DnlApi.SystemFunction();
      //expect(instance).to.be.a(DnlApi.SystemFunction);
    });

    it('should have the property isWrite (base name: "is_write")', function() {
      // uncomment below and update the code to test the property isWrite
      //var instane = new DnlApi.SystemFunction();
      //expect(instance).to.be();
    });

    it('should have the property imageName (base name: "image_name")', function() {
      // uncomment below and update the code to test the property imageName
      //var instane = new DnlApi.SystemFunction();
      //expect(instance).to.be();
    });

    it('should have the property developStatus (base name: "develop_status")', function() {
      // uncomment below and update the code to test the property developStatus
      //var instane = new DnlApi.SystemFunction();
      //expect(instance).to.be();
    });

    it('should have the property funcName (base name: "func_name")', function() {
      // uncomment below and update the code to test the property funcName
      //var instane = new DnlApi.SystemFunction();
      //expect(instance).to.be();
    });

    it('should have the property funcUrl (base name: "func_url")', function() {
      // uncomment below and update the code to test the property funcUrl
      //var instane = new DnlApi.SystemFunction();
      //expect(instance).to.be();
    });

    it('should have the property parentId (base name: "parent_id")', function() {
      // uncomment below and update the code to test the property parentId
      //var instane = new DnlApi.SystemFunction();
      //expect(instance).to.be();
    });

    it('should have the property isExe (base name: "is_exe")', function() {
      // uncomment below and update the code to test the property isExe
      //var instane = new DnlApi.SystemFunction();
      //expect(instance).to.be();
    });

    it('should have the property description (base name: "description")', function() {
      // uncomment below and update the code to test the property description
      //var instane = new DnlApi.SystemFunction();
      //expect(instance).to.be();
    });

    it('should have the property isRead (base name: "is_read")', function() {
      // uncomment below and update the code to test the property isRead
      //var instane = new DnlApi.SystemFunction();
      //expect(instance).to.be();
    });

    it('should have the property key118n (base name: "key_118n")', function() {
      // uncomment below and update the code to test the property key118n
      //var instane = new DnlApi.SystemFunction();
      //expect(instance).to.be();
    });

    it('should have the property funcType (base name: "func_type")', function() {
      // uncomment below and update the code to test the property funcType
      //var instane = new DnlApi.SystemFunction();
      //expect(instance).to.be();
    });

  });

}));

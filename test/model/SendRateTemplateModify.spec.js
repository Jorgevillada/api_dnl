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
    instance = new DnlApi.SendRateTemplateModify();
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

  describe('SendRateTemplateModify', function() {
    it('should create an instance of SendRateTemplateModify', function() {
      // uncomment below and update the code to test SendRateTemplateModify
      //var instane = new DnlApi.SendRateTemplateModify();
      //expect(instance).to.be.a(DnlApi.SendRateTemplateModify);
    });

    it('should have the property content (base name: "content")', function() {
      // uncomment below and update the code to test the property content
      //var instane = new DnlApi.SendRateTemplateModify();
      //expect(instance).to.be();
    });

    it('should have the property mailCc (base name: "mail_cc")', function() {
      // uncomment below and update the code to test the property mailCc
      //var instane = new DnlApi.SendRateTemplateModify();
      //expect(instance).to.be();
    });

    it('should have the property subject (base name: "subject")', function() {
      // uncomment below and update the code to test the property subject
      //var instane = new DnlApi.SendRateTemplateModify();
      //expect(instance).to.be();
    });

    it('should have the property senderId (base name: "sender_id")', function() {
      // uncomment below and update the code to test the property senderId
      //var instane = new DnlApi.SendRateTemplateModify();
      //expect(instance).to.be();
    });

    it('should have the property downloadMethod (base name: "download_method")', function() {
      // uncomment below and update the code to test the property downloadMethod
      //var instane = new DnlApi.SendRateTemplateModify();
      //expect(instance).to.be();
    });

    it('should have the property name (base name: "name")', function() {
      // uncomment below and update the code to test the property name
      //var instane = new DnlApi.SendRateTemplateModify();
      //expect(instance).to.be();
    });

    it('should have the property headers (base name: "headers")', function() {
      // uncomment below and update the code to test the property headers
      //var instane = new DnlApi.SendRateTemplateModify();
      //expect(instance).to.be();
    });

  });

}));

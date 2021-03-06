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
    instance = new DnlApi.ResourceUnclaimedGet();
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

  describe('ResourceUnclaimedGet', function() {
    it('should create an instance of ResourceUnclaimedGet', function() {
      // uncomment below and update the code to test ResourceUnclaimedGet
      //var instane = new DnlApi.ResourceUnclaimedGet();
      //expect(instance).to.be.a(DnlApi.ResourceUnclaimedGet);
    });

    it('should have the property direction (base name: "direction")', function() {
      // uncomment below and update the code to test the property direction
      //var instane = new DnlApi.ResourceUnclaimedGet();
      //expect(instance).to.be();
    });

    it('should have the property rateTableName (base name: "rate_table_name")', function() {
      // uncomment below and update the code to test the property rateTableName
      //var instane = new DnlApi.ResourceUnclaimedGet();
      //expect(instance).to.be();
    });

    it('should have the property active (base name: "active")', function() {
      // uncomment below and update the code to test the property active
      //var instane = new DnlApi.ResourceUnclaimedGet();
      //expect(instance).to.be();
    });

    it('should have the property trunkId (base name: "trunk_id")', function() {
      // uncomment below and update the code to test the property trunkId
      //var instane = new DnlApi.ResourceUnclaimedGet();
      //expect(instance).to.be();
    });

    it('should have the property updateAt (base name: "update_at")', function() {
      // uncomment below and update the code to test the property updateAt
      //var instane = new DnlApi.ResourceUnclaimedGet();
      //expect(instance).to.be();
    });

    it('should have the property rateTableId (base name: "rate_table_id")', function() {
      // uncomment below and update the code to test the property rateTableId
      //var instane = new DnlApi.ResourceUnclaimedGet();
      //expect(instance).to.be();
    });

    it('should have the property carrierId (base name: "carrier_id")', function() {
      // uncomment below and update the code to test the property carrierId
      //var instane = new DnlApi.ResourceUnclaimedGet();
      //expect(instance).to.be();
    });

    it('should have the property carrier (base name: "carrier")', function() {
      // uncomment below and update the code to test the property carrier
      //var instane = new DnlApi.ResourceUnclaimedGet();
      //expect(instance).to.be();
    });

    it('should have the property rateEmail (base name: "rate_email")', function() {
      // uncomment below and update the code to test the property rateEmail
      //var instane = new DnlApi.ResourceUnclaimedGet();
      //expect(instance).to.be();
    });

    it('should have the property type (base name: "type")', function() {
      // uncomment below and update the code to test the property type
      //var instane = new DnlApi.ResourceUnclaimedGet();
      //expect(instance).to.be();
    });

    it('should have the property trunkName (base name: "trunk_name")', function() {
      // uncomment below and update the code to test the property trunkName
      //var instane = new DnlApi.ResourceUnclaimedGet();
      //expect(instance).to.be();
    });

    it('should have the property prefix (base name: "prefix")', function() {
      // uncomment below and update the code to test the property prefix
      //var instane = new DnlApi.ResourceUnclaimedGet();
      //expect(instance).to.be();
    });

  });

}));

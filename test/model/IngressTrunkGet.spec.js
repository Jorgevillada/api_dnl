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
    instance = new DnlApi.IngressTrunkGet();
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

  describe('IngressTrunkGet', function() {
    it('should create an instance of IngressTrunkGet', function() {
      // uncomment below and update the code to test IngressTrunkGet
      //var instane = new DnlApi.IngressTrunkGet();
      //expect(instance).to.be.a(DnlApi.IngressTrunkGet);
    });

    it('should have the property name (base name: "name")', function() {
      // uncomment below and update the code to test the property name
      //var instane = new DnlApi.IngressTrunkGet();
      //expect(instance).to.be();
    });

    it('should have the property maxDuration (base name: "max_duration")', function() {
      // uncomment below and update the code to test the property maxDuration
      //var instane = new DnlApi.IngressTrunkGet();
      //expect(instance).to.be();
    });

    it('should have the property cpsLimit (base name: "cps_limit")', function() {
      // uncomment below and update the code to test the property cpsLimit
      //var instane = new DnlApi.IngressTrunkGet();
      //expect(instance).to.be();
    });

    it('should have the property callLimit (base name: "call_limit")', function() {
      // uncomment below and update the code to test the property callLimit
      //var instane = new DnlApi.IngressTrunkGet();
      //expect(instance).to.be();
    });

    it('should have the property passLrn (base name: "pass_lrn")', function() {
      // uncomment below and update the code to test the property passLrn
      //var instane = new DnlApi.IngressTrunkGet();
      //expect(instance).to.be();
    });

    it('should have the property routePlanId (base name: "route_plan_id")', function() {
      // uncomment below and update the code to test the property routePlanId
      //var instane = new DnlApi.IngressTrunkGet();
      //expect(instance).to.be();
    });

    it('should have the property resourceTemplateId (base name: "resource_template_id")', function() {
      // uncomment below and update the code to test the property resourceTemplateId
      //var instane = new DnlApi.IngressTrunkGet();
      //expect(instance).to.be();
    });

    it('should have the property minDuration (base name: "min_duration")', function() {
      // uncomment below and update the code to test the property minDuration
      //var instane = new DnlApi.IngressTrunkGet();
      //expect(instance).to.be();
    });

    it('should have the property minProfitType (base name: "min_profit_type")', function() {
      // uncomment below and update the code to test the property minProfitType
      //var instane = new DnlApi.IngressTrunkGet();
      //expect(instance).to.be();
    });

    it('should have the property hostRoutingStrategy (base name: "host_routing_strategy")', function() {
      // uncomment below and update the code to test the property hostRoutingStrategy
      //var instane = new DnlApi.IngressTrunkGet();
      //expect(instance).to.be();
    });

    it('should have the property carrierId (base name: "carrier_id")', function() {
      // uncomment below and update the code to test the property carrierId
      //var instane = new DnlApi.IngressTrunkGet();
      //expect(instance).to.be();
    });

    it('should have the property updateBy (base name: "update_by")', function() {
      // uncomment below and update the code to test the property updateBy
      //var instane = new DnlApi.IngressTrunkGet();
      //expect(instance).to.be();
    });

    it('should have the property prefixes (base name: "prefixes")', function() {
      // uncomment below and update the code to test the property prefixes
      //var instane = new DnlApi.IngressTrunkGet();
      //expect(instance).to.be();
    });

    it('should have the property mediaTimeout (base name: "media_timeout")', function() {
      // uncomment below and update the code to test the property mediaTimeout
      //var instane = new DnlApi.IngressTrunkGet();
      //expect(instance).to.be();
    });

    it('should have the property productName (base name: "product_name")', function() {
      // uncomment below and update the code to test the property productName
      //var instane = new DnlApi.IngressTrunkGet();
      //expect(instance).to.be();
    });

    it('should have the property t38 (base name: "t38")', function() {
      // uncomment below and update the code to test the property t38
      //var instane = new DnlApi.IngressTrunkGet();
      //expect(instance).to.be();
    });

    it('should have the property ignoreEarlyMedia (base name: "ignore_early_media")', function() {
      // uncomment below and update the code to test the property ignoreEarlyMedia
      //var instane = new DnlApi.IngressTrunkGet();
      //expect(instance).to.be();
    });

    it('should have the property prefix (base name: "prefix")', function() {
      // uncomment below and update the code to test the property prefix
      //var instane = new DnlApi.IngressTrunkGet();
      //expect(instance).to.be();
    });

    it('should have the property authType (base name: "auth_type")', function() {
      // uncomment below and update the code to test the property authType
      //var instane = new DnlApi.IngressTrunkGet();
      //expect(instance).to.be();
    });

    it('should have the property isActive (base name: "is_active")', function() {
      // uncomment below and update the code to test the property isActive
      //var instane = new DnlApi.IngressTrunkGet();
      //expect(instance).to.be();
    });

    it('should have the property trunkCount (base name: "trunk_count")', function() {
      // uncomment below and update the code to test the property trunkCount
      //var instane = new DnlApi.IngressTrunkGet();
      //expect(instance).to.be();
    });

    it('should have the property bypassMedia (base name: "bypass_media")', function() {
      // uncomment below and update the code to test the property bypassMedia
      //var instane = new DnlApi.IngressTrunkGet();
      //expect(instance).to.be();
    });

    it('should have the property rateTableId (base name: "rate_table_id")', function() {
      // uncomment below and update the code to test the property rateTableId
      //var instane = new DnlApi.IngressTrunkGet();
      //expect(instance).to.be();
    });

    it('should have the property resourceId (base name: "resource_id")', function() {
      // uncomment below and update the code to test the property resourceId
      //var instane = new DnlApi.IngressTrunkGet();
      //expect(instance).to.be();
    });

    it('should have the property ignoreEarlyNoSdp (base name: "ignore_early_no_sdp")', function() {
      // uncomment below and update the code to test the property ignoreEarlyNoSdp
      //var instane = new DnlApi.IngressTrunkGet();
      //expect(instance).to.be();
    });

    it('should have the property ringTimeout (base name: "ring_timeout")', function() {
      // uncomment below and update the code to test the property ringTimeout
      //var instane = new DnlApi.IngressTrunkGet();
      //expect(instance).to.be();
    });

    it('should have the property trunkId (base name: "trunk_id")', function() {
      // uncomment below and update the code to test the property trunkId
      //var instane = new DnlApi.IngressTrunkGet();
      //expect(instance).to.be();
    });

    it('should have the property updateAt (base name: "update_at")', function() {
      // uncomment below and update the code to test the property updateAt
      //var instane = new DnlApi.IngressTrunkGet();
      //expect(instance).to.be();
    });

    it('should have the property minProfitValue (base name: "min_profit_value")', function() {
      // uncomment below and update the code to test the property minProfitValue
      //var instane = new DnlApi.IngressTrunkGet();
      //expect(instance).to.be();
    });

    it('should have the property ip (base name: "ip")', function() {
      // uncomment below and update the code to test the property ip
      //var instane = new DnlApi.IngressTrunkGet();
      //expect(instance).to.be();
    });

    it('should have the property carrier (base name: "carrier")', function() {
      // uncomment below and update the code to test the property carrier
      //var instane = new DnlApi.IngressTrunkGet();
      //expect(instance).to.be();
    });

    it('should have the property enfourceCid (base name: "enfource_cid")', function() {
      // uncomment below and update the code to test the property enfourceCid
      //var instane = new DnlApi.IngressTrunkGet();
      //expect(instance).to.be();
    });

    it('should have the property enableGlobal404Blocking (base name: "enable_global_404_blocking")', function() {
      // uncomment below and update the code to test the property enableGlobal404Blocking
      //var instane = new DnlApi.IngressTrunkGet();
      //expect(instance).to.be();
    });

    it('should have the property trunkName (base name: "trunk_name")', function() {
      // uncomment below and update the code to test the property trunkName
      //var instane = new DnlApi.IngressTrunkGet();
      //expect(instance).to.be();
    });

    it('should have the property ingress (base name: "ingress")', function() {
      // uncomment below and update the code to test the property ingress
      //var instane = new DnlApi.IngressTrunkGet();
      //expect(instance).to.be();
    });

  });

}));

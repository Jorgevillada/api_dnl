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
    instance = new DnlApi.EgressTrunkTemplateGet();
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

  describe('EgressTrunkTemplateGet', function() {
    it('should create an instance of EgressTrunkTemplateGet', function() {
      // uncomment below and update the code to test EgressTrunkTemplateGet
      //var instane = new DnlApi.EgressTrunkTemplateGet();
      //expect(instance).to.be.a(DnlApi.EgressTrunkTemplateGet);
    });

    it('should have the property ignoreEarlyNosdp (base name: "ignore_early_nosdp")', function() {
      // uncomment below and update the code to test the property ignoreEarlyNosdp
      //var instane = new DnlApi.EgressTrunkTemplateGet();
      //expect(instance).to.be();
    });

    it('should have the property billingRule (base name: "billing_rule")', function() {
      // uncomment below and update the code to test the property billingRule
      //var instane = new DnlApi.EgressTrunkTemplateGet();
      //expect(instance).to.be();
    });

    it('should have the property intlRoute (base name: "intl_route")', function() {
      // uncomment below and update the code to test the property intlRoute
      //var instane = new DnlApi.EgressTrunkTemplateGet();
      //expect(instance).to.be();
    });

    it('should have the property maxDuration (base name: "max_duration")', function() {
      // uncomment below and update the code to test the property maxDuration
      //var instane = new DnlApi.EgressTrunkTemplateGet();
      //expect(instance).to.be();
    });

    it('should have the property profitType (base name: "profit_type")', function() {
      // uncomment below and update the code to test the property profitType
      //var instane = new DnlApi.EgressTrunkTemplateGet();
      //expect(instance).to.be();
    });

    it('should have the property createOn (base name: "create_on")', function() {
      // uncomment below and update the code to test the property createOn
      //var instane = new DnlApi.EgressTrunkTemplateGet();
      //expect(instance).to.be();
    });

    it('should have the property usedBy (base name: "used_by")', function() {
      // uncomment below and update the code to test the property usedBy
      //var instane = new DnlApi.EgressTrunkTemplateGet();
      //expect(instance).to.be();
    });

    it('should have the property priv (base name: "priv")', function() {
      // uncomment below and update the code to test the property priv
      //var instane = new DnlApi.EgressTrunkTemplateGet();
      //expect(instance).to.be();
    });

    it('should have the property ip (base name: "ip")', function() {
      // uncomment below and update the code to test the property ip
      //var instane = new DnlApi.EgressTrunkTemplateGet();
      //expect(instance).to.be();
    });

    it('should have the property billingMethod (base name: "billing_method")', function() {
      // uncomment below and update the code to test the property billingMethod
      //var instane = new DnlApi.EgressTrunkTemplateGet();
      //expect(instance).to.be();
    });

    it('should have the property lnpDipping (base name: "lnp_dipping")', function() {
      // uncomment below and update the code to test the property lnpDipping
      //var instane = new DnlApi.EgressTrunkTemplateGet();
      //expect(instance).to.be();
    });

    it('should have the property oli (base name: "oli")', function() {
      // uncomment below and update the code to test the property oli
      //var instane = new DnlApi.EgressTrunkTemplateGet();
      //expect(instance).to.be();
    });

    it('should have the property canadaOther (base name: "canada_other")', function() {
      // uncomment below and update the code to test the property canadaOther
      //var instane = new DnlApi.EgressTrunkTemplateGet();
      //expect(instance).to.be();
    });

    it('should have the property profitMargin (base name: "profit_margin")', function() {
      // uncomment below and update the code to test the property profitMargin
      //var instane = new DnlApi.EgressTrunkTemplateGet();
      //expect(instance).to.be();
    });

    it('should have the property paid (base name: "paid")', function() {
      // uncomment below and update the code to test the property paid
      //var instane = new DnlApi.EgressTrunkTemplateGet();
      //expect(instance).to.be();
    });

    it('should have the property randomTableId (base name: "random_table_id")', function() {
      // uncomment below and update the code to test the property randomTableId
      //var instane = new DnlApi.EgressTrunkTemplateGet();
      //expect(instance).to.be();
    });

    it('should have the property minDuration (base name: "min_duration")', function() {
      // uncomment below and update the code to test the property minDuration
      //var instane = new DnlApi.EgressTrunkTemplateGet();
      //expect(instance).to.be();
    });

    it('should have the property rpidParty (base name: "rpid_party")', function() {
      // uncomment below and update the code to test the property rpidParty
      //var instane = new DnlApi.EgressTrunkTemplateGet();
      //expect(instance).to.be();
    });

    it('should have the property name (base name: "name")', function() {
      // uncomment below and update the code to test the property name
      //var instane = new DnlApi.EgressTrunkTemplateGet();
      //expect(instance).to.be();
    });

    it('should have the property rpidPrivacy (base name: "rpid_privacy")', function() {
      // uncomment below and update the code to test the property rpidPrivacy
      //var instane = new DnlApi.EgressTrunkTemplateGet();
      //expect(instance).to.be();
    });

    it('should have the property waitRingtime180 (base name: "wait_ringtime180")', function() {
      // uncomment below and update the code to test the property waitRingtime180
      //var instane = new DnlApi.EgressTrunkTemplateGet();
      //expect(instance).to.be();
    });

    it('should have the property resourceTemplateId (base name: "resource_template_id")', function() {
      // uncomment below and update the code to test the property resourceTemplateId
      //var instane = new DnlApi.EgressTrunkTemplateGet();
      //expect(instance).to.be();
    });

    it('should have the property usOther (base name: "us_other")', function() {
      // uncomment below and update the code to test the property usOther
      //var instane = new DnlApi.EgressTrunkTemplateGet();
      //expect(instance).to.be();
    });

    it('should have the property trunkType2 (base name: "trunk_type2")', function() {
      // uncomment below and update the code to test the property trunkType2
      //var instane = new DnlApi.EgressTrunkTemplateGet();
      //expect(instance).to.be();
    });

    it('should have the property createBy (base name: "create_by")', function() {
      // uncomment below and update the code to test the property createBy
      //var instane = new DnlApi.EgressTrunkTemplateGet();
      //expect(instance).to.be();
    });

    it('should have the property resStrategy (base name: "res_strategy")', function() {
      // uncomment below and update the code to test the property resStrategy
      //var instane = new DnlApi.EgressTrunkTemplateGet();
      //expect(instance).to.be();
    });

    it('should have the property info (base name: "info")', function() {
      // uncomment below and update the code to test the property info
      //var instane = new DnlApi.EgressTrunkTemplateGet();
      //expect(instance).to.be();
    });

    it('should have the property pci (base name: "pci")', function() {
      // uncomment below and update the code to test the property pci
      //var instane = new DnlApi.EgressTrunkTemplateGet();
      //expect(instance).to.be();
    });

    it('should have the property direction (base name: "direction")', function() {
      // uncomment below and update the code to test the property direction
      //var instane = new DnlApi.EgressTrunkTemplateGet();
      //expect(instance).to.be();
    });

    it('should have the property ignoreRing (base name: "ignore_ring")', function() {
      // uncomment below and update the code to test the property ignoreRing
      //var instane = new DnlApi.EgressTrunkTemplateGet();
      //expect(instance).to.be();
    });

    it('should have the property reInvite (base name: "re_invite")', function() {
      // uncomment below and update the code to test the property reInvite
      //var instane = new DnlApi.EgressTrunkTemplateGet();
      //expect(instance).to.be();
    });

    it('should have the property inband (base name: "inband")', function() {
      // uncomment below and update the code to test the property inband
      //var instane = new DnlApi.EgressTrunkTemplateGet();
      //expect(instance).to.be();
    });

    it('should have the property rateProfile (base name: "rate_profile")', function() {
      // uncomment below and update the code to test the property rateProfile
      //var instane = new DnlApi.EgressTrunkTemplateGet();
      //expect(instance).to.be();
    });

    it('should have the property codecsStr (base name: "codecs_str")', function() {
      // uncomment below and update the code to test the property codecsStr
      //var instane = new DnlApi.EgressTrunkTemplateGet();
      //expect(instance).to.be();
    });

    it('should have the property amountPerPort (base name: "amount_per_port")', function() {
      // uncomment below and update the code to test the property amountPerPort
      //var instane = new DnlApi.EgressTrunkTemplateGet();
      //expect(instance).to.be();
    });

    it('should have the property trunkType (base name: "trunk_type")', function() {
      // uncomment below and update the code to test the property trunkType
      //var instane = new DnlApi.EgressTrunkTemplateGet();
      //expect(instance).to.be();
    });

    it('should have the property displayName (base name: "display_name")', function() {
      // uncomment below and update the code to test the property displayName
      //var instane = new DnlApi.EgressTrunkTemplateGet();
      //expect(instance).to.be();
    });

    it('should have the property ringTimeout (base name: "ring_timeout")', function() {
      // uncomment below and update the code to test the property ringTimeout
      //var instane = new DnlApi.EgressTrunkTemplateGet();
      //expect(instance).to.be();
    });

    it('should have the property resource (base name: "resource")', function() {
      // uncomment below and update the code to test the property resource
      //var instane = new DnlApi.EgressTrunkTemplateGet();
      //expect(instance).to.be();
    });

    it('should have the property mediaTimeout (base name: "media_timeout")', function() {
      // uncomment below and update the code to test the property mediaTimeout
      //var instane = new DnlApi.EgressTrunkTemplateGet();
      //expect(instance).to.be();
    });

    it('should have the property rateRounding (base name: "rate_rounding")', function() {
      // uncomment below and update the code to test the property rateRounding
      //var instane = new DnlApi.EgressTrunkTemplateGet();
      //expect(instance).to.be();
    });

    it('should have the property rateTableId (base name: "rate_table_id")', function() {
      // uncomment below and update the code to test the property rateTableId
      //var instane = new DnlApi.EgressTrunkTemplateGet();
      //expect(instance).to.be();
    });

    it('should have the property rateDecimal (base name: "rate_decimal")', function() {
      // uncomment below and update the code to test the property rateDecimal
      //var instane = new DnlApi.EgressTrunkTemplateGet();
      //expect(instance).to.be();
    });

    it('should have the property mediaType (base name: "media_type")', function() {
      // uncomment below and update the code to test the property mediaType
      //var instane = new DnlApi.EgressTrunkTemplateGet();
      //expect(instance).to.be();
    });

    it('should have the property rpidIdType (base name: "rpid_id_type")', function() {
      // uncomment below and update the code to test the property rpidIdType
      //var instane = new DnlApi.EgressTrunkTemplateGet();
      //expect(instance).to.be();
    });

    it('should have the property rfc2833 (base name: "rfc2833")', function() {
      // uncomment below and update the code to test the property rfc2833
      //var instane = new DnlApi.EgressTrunkTemplateGet();
      //expect(instance).to.be();
    });

    it('should have the property canadaRoute (base name: "canada_route")', function() {
      // uncomment below and update the code to test the property canadaRoute
      //var instane = new DnlApi.EgressTrunkTemplateGet();
      //expect(instance).to.be();
    });

    it('should have the property ignoreEarlyMedia (base name: "ignore_early_media")', function() {
      // uncomment below and update the code to test the property ignoreEarlyMedia
      //var instane = new DnlApi.EgressTrunkTemplateGet();
      //expect(instance).to.be();
    });

    it('should have the property usRoute (base name: "us_route")', function() {
      // uncomment below and update the code to test the property usRoute
      //var instane = new DnlApi.EgressTrunkTemplateGet();
      //expect(instance).to.be();
    });

    it('should have the property lnpDippingRate (base name: "lnp_dipping_rate")', function() {
      // uncomment below and update the code to test the property lnpDippingRate
      //var instane = new DnlApi.EgressTrunkTemplateGet();
      //expect(instance).to.be();
    });

    it('should have the property updateOn (base name: "update_on")', function() {
      // uncomment below and update the code to test the property updateOn
      //var instane = new DnlApi.EgressTrunkTemplateGet();
      //expect(instance).to.be();
    });

    it('should have the property reInviteInterval (base name: "re_invite_interval")', function() {
      // uncomment below and update the code to test the property reInviteInterval
      //var instane = new DnlApi.EgressTrunkTemplateGet();
      //expect(instance).to.be();
    });

    it('should have the property div (base name: "div")', function() {
      // uncomment below and update the code to test the property div
      //var instane = new DnlApi.EgressTrunkTemplateGet();
      //expect(instance).to.be();
    });

    it('should have the property billBy (base name: "bill_by")', function() {
      // uncomment below and update the code to test the property billBy
      //var instane = new DnlApi.EgressTrunkTemplateGet();
      //expect(instance).to.be();
    });

    it('should have the property rpidScreen (base name: "rpid_screen")', function() {
      // uncomment below and update the code to test the property rpidScreen
      //var instane = new DnlApi.EgressTrunkTemplateGet();
      //expect(instance).to.be();
    });

  });

}));

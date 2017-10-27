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
    instance = new DnlApi.CarrierAlerts();
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

  describe('CarrierAlerts', function() {
    it('should create an instance of CarrierAlerts', function() {
      // uncomment below and update the code to test CarrierAlerts
      //var instane = new DnlApi.CarrierAlerts();
      //expect(instance).to.be.a(DnlApi.CarrierAlerts);
    });

    it('should have the property autoSummaryPeriod (base name: "auto_summary_period")', function() {
      // uncomment below and update the code to test the property autoSummaryPeriod
      //var instane = new DnlApi.CarrierAlerts();
      //expect(instance).to.be();
    });

    it('should have the property lowBalanceNotice (base name: "low_balance_notice")', function() {
      // uncomment below and update the code to test the property lowBalanceNotice
      //var instane = new DnlApi.CarrierAlerts();
      //expect(instance).to.be();
    });

    it('should have the property lowBalanceNotificationTimeCycle (base name: "low_balance_notification_time_cycle")', function() {
      // uncomment below and update the code to test the property lowBalanceNotificationTimeCycle
      //var instane = new DnlApi.CarrierAlerts();
      //expect(instance).to.be();
    });

    it('should have the property isDailyBalanceNotification (base name: "is_daily_balance_notification")', function() {
      // uncomment below and update the code to test the property isDailyBalanceNotification
      //var instane = new DnlApi.CarrierAlerts();
      //expect(instance).to.be();
    });

    it('should have the property isSendTrunkUpdate (base name: "is_send_trunk_update")', function() {
      // uncomment below and update the code to test the property isSendTrunkUpdate
      //var instane = new DnlApi.CarrierAlerts();
      //expect(instance).to.be();
    });

    it('should have the property notifyClientBalanceType (base name: "notify_client_balance_type")', function() {
      // uncomment below and update the code to test the property notifyClientBalanceType
      //var instane = new DnlApi.CarrierAlerts();
      //expect(instance).to.be();
    });

    it('should have the property isShowDailyUsage (base name: "is_show_daily_usage")', function() {
      // uncomment below and update the code to test the property isShowDailyUsage
      //var instane = new DnlApi.CarrierAlerts();
      //expect(instance).to.be();
    });

    it('should have the property dailyCdrGeneration (base name: "daily_cdr_generation")', function() {
      // uncomment below and update the code to test the property dailyCdrGeneration
      //var instane = new DnlApi.CarrierAlerts();
      //expect(instance).to.be();
    });

    it('should have the property zeroBalanceNotice (base name: "zero_balance_notice")', function() {
      // uncomment below and update the code to test the property zeroBalanceNotice
      //var instane = new DnlApi.CarrierAlerts();
      //expect(instance).to.be();
    });

    it('should have the property attachCdrsList (base name: "attach_cdrs_list")', function() {
      // uncomment below and update the code to test the property attachCdrsList
      //var instane = new DnlApi.CarrierAlerts();
      //expect(instance).to.be();
    });

    it('should have the property autoSummaryNotZero (base name: "auto_summary_not_zero")', function() {
      // uncomment below and update the code to test the property autoSummaryNotZero
      //var instane = new DnlApi.CarrierAlerts();
      //expect(instance).to.be();
    });

    it('should have the property autoSummaryGroupBy (base name: "auto_summary_group_by")', function() {
      // uncomment below and update the code to test the property autoSummaryGroupBy
      //var instane = new DnlApi.CarrierAlerts();
      //expect(instance).to.be();
    });

    it('should have the property dailyCdrGenerationZone (base name: "daily_cdr_generation_zone")', function() {
      // uncomment below and update the code to test the property dailyCdrGenerationZone
      //var instane = new DnlApi.CarrierAlerts();
      //expect(instance).to.be();
    });

    it('should have the property autoSummaryHour (base name: "auto_summary_hour")', function() {
      // uncomment below and update the code to test the property autoSummaryHour
      //var instane = new DnlApi.CarrierAlerts();
      //expect(instance).to.be();
    });

    it('should have the property lowBalanceNotificationTimeType (base name: "low_balance_notification_time_type")', function() {
      // uncomment below and update the code to test the property lowBalanceNotificationTimeType
      //var instane = new DnlApi.CarrierAlerts();
      //expect(instance).to.be();
    });

    it('should have the property isAutoSummary (base name: "is_auto_summary")', function() {
      // uncomment below and update the code to test the property isAutoSummary
      //var instane = new DnlApi.CarrierAlerts();
      //expect(instance).to.be();
    });

  });

}));
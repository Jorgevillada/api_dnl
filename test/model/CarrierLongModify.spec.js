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
    instance = new DnlApi.CarrierLongModify();
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

  describe('CarrierLongModify', function() {
    it('should create an instance of CarrierLongModify', function() {
      // uncomment below and update the code to test CarrierLongModify
      //var instane = new DnlApi.CarrierLongModify();
      //expect(instance).to.be.a(DnlApi.CarrierLongModify);
    });

    it('should have the property lowBalanceNotice (base name: "low_balance_notice")', function() {
      // uncomment below and update the code to test the property lowBalanceNotice
      //var instane = new DnlApi.CarrierLongModify();
      //expect(instance).to.be();
    });

    it('should have the property profitType (base name: "profit_type")', function() {
      // uncomment below and update the code to test the property profitType
      //var instane = new DnlApi.CarrierLongModify();
      //expect(instance).to.be();
    });

    it('should have the property billingEmail (base name: "billing_email")', function() {
      // uncomment below and update the code to test the property billingEmail
      //var instane = new DnlApi.CarrierLongModify();
      //expect(instance).to.be();
    });

    it('should have the property sccCharge (base name: "scc_charge")', function() {
      // uncomment below and update the code to test the property sccCharge
      //var instane = new DnlApi.CarrierLongModify();
      //expect(instance).to.be();
    });

    it('should have the property notifyClientBalanceType (base name: "notify_client_balance_type")', function() {
      // uncomment below and update the code to test the property notifyClientBalanceType
      //var instane = new DnlApi.CarrierLongModify();
      //expect(instance).to.be();
    });

    it('should have the property paymentReceivedNotice (base name: "payment_received_notice")', function() {
      // uncomment below and update the code to test the property paymentReceivedNotice
      //var instane = new DnlApi.CarrierLongModify();
      //expect(instance).to.be();
    });

    it('should have the property autoSummaryNotZero (base name: "auto_summary_not_zero")', function() {
      // uncomment below and update the code to test the property autoSummaryNotZero
      //var instane = new DnlApi.CarrierLongModify();
      //expect(instance).to.be();
    });

    it('should have the property isPrepay (base name: "is_prepay")', function() {
      // uncomment below and update the code to test the property isPrepay
      //var instane = new DnlApi.CarrierLongModify();
      //expect(instance).to.be();
    });

    it('should have the property isPanelaccess (base name: "is_panelaccess")', function() {
      // uncomment below and update the code to test the property isPanelaccess
      //var instane = new DnlApi.CarrierLongModify();
      //expect(instance).to.be();
    });

    it('should have the property dailyCdrGenerationZone (base name: "daily_cdr_generation_zone")', function() {
      // uncomment below and update the code to test the property dailyCdrGenerationZone
      //var instane = new DnlApi.CarrierLongModify();
      //expect(instance).to.be();
    });

    it('should have the property showDetailByTrunk (base name: "show_detail_by_trunk")', function() {
      // uncomment below and update the code to test the property showDetailByTrunk
      //var instane = new DnlApi.CarrierLongModify();
      //expect(instance).to.be();
    });

    it('should have the property lowBalanceConfig (base name: "low_balance_config")', function() {
      // uncomment below and update the code to test the property lowBalanceConfig
      //var instane = new DnlApi.CarrierLongModify();
      //expect(instance).to.be();
    });

    it('should have the property creditLimit (base name: "credit_limit")', function() {
      // uncomment below and update the code to test the property creditLimit
      //var instane = new DnlApi.CarrierLongModify();
      //expect(instance).to.be();
    });

    it('should have the property sccBelow (base name: "scc_below")', function() {
      // uncomment below and update the code to test the property sccBelow
      //var instane = new DnlApi.CarrierLongModify();
      //expect(instance).to.be();
    });

    it('should have the property isShowDailyUsage (base name: "is_show_daily_usage")', function() {
      // uncomment below and update the code to test the property isShowDailyUsage
      //var instane = new DnlApi.CarrierLongModify();
      //expect(instance).to.be();
    });

    it('should have the property rateDeliveryEmail (base name: "rate_delivery_email")', function() {
      // uncomment below and update the code to test the property rateDeliveryEmail
      //var instane = new DnlApi.CarrierLongModify();
      //expect(instance).to.be();
    });

    it('should have the property isPanelTrunks (base name: "is_panel_trunks")', function() {
      // uncomment below and update the code to test the property isPanelTrunks
      //var instane = new DnlApi.CarrierLongModify();
      //expect(instance).to.be();
    });

    it('should have the property unlimitedCredit (base name: "unlimited_credit")', function() {
      // uncomment below and update the code to test the property unlimitedCredit
      //var instane = new DnlApi.CarrierLongModify();
      //expect(instance).to.be();
    });

    it('should have the property isPanelPaymenthistory (base name: "is_panel_paymenthistory")', function() {
      // uncomment below and update the code to test the property isPanelPaymenthistory
      //var instane = new DnlApi.CarrierLongModify();
      //expect(instance).to.be();
    });

    it('should have the property showAccountSummary (base name: "show_account_summary")', function() {
      // uncomment below and update the code to test the property showAccountSummary
      //var instane = new DnlApi.CarrierLongModify();
      //expect(instance).to.be();
    });

    it('should have the property password (base name: "password")', function() {
      // uncomment below and update the code to test the property password
      //var instane = new DnlApi.CarrierLongModify();
      //expect(instance).to.be();
    });

    it('should have the property usageFields (base name: "usage_fields")', function() {
      // uncomment below and update the code to test the property usageFields
      //var instane = new DnlApi.CarrierLongModify();
      //expect(instance).to.be();
    });

    it('should have the property profitMargin (base name: "profit_margin")', function() {
      // uncomment below and update the code to test the property profitMargin
      //var instane = new DnlApi.CarrierLongModify();
      //expect(instance).to.be();
    });

    it('should have the property login (base name: "login")', function() {
      // uncomment below and update the code to test the property login
      //var instane = new DnlApi.CarrierLongModify();
      //expect(instance).to.be();
    });

    it('should have the property showJurisdictionDetail (base name: "show_jurisdiction_detail")', function() {
      // uncomment below and update the code to test the property showJurisdictionDetail
      //var instane = new DnlApi.CarrierLongModify();
      //expect(instance).to.be();
    });

    it('should have the property inlcudeCdrInEmail (base name: "inlcude_cdr_in_email")', function() {
      // uncomment below and update the code to test the property inlcudeCdrInEmail
      //var instane = new DnlApi.CarrierLongModify();
      //expect(instance).to.be();
    });

    it('should have the property isPanelCdrslist (base name: "is_panel_cdrslist")', function() {
      // uncomment below and update the code to test the property isPanelCdrslist
      //var instane = new DnlApi.CarrierLongModify();
      //expect(instance).to.be();
    });

    it('should have the property sendInvoiceAsLink (base name: "send_invoice_as_link")', function() {
      // uncomment below and update the code to test the property sendInvoiceAsLink
      //var instane = new DnlApi.CarrierLongModify();
      //expect(instance).to.be();
    });

    it('should have the property timeZone (base name: "time_zone")', function() {
      // uncomment below and update the code to test the property timeZone
      //var instane = new DnlApi.CarrierLongModify();
      //expect(instance).to.be();
    });

    it('should have the property rateEmail (base name: "rate_email")', function() {
      // uncomment below and update the code to test the property rateEmail
      //var instane = new DnlApi.CarrierLongModify();
      //expect(instance).to.be();
    });

    it('should have the property accountDetail (base name: "account_detail")', function() {
      // uncomment below and update the code to test the property accountDetail
      //var instane = new DnlApi.CarrierLongModify();
      //expect(instance).to.be();
    });

    it('should have the property email (base name: "email")', function() {
      // uncomment below and update the code to test the property email
      //var instane = new DnlApi.CarrierLongModify();
      //expect(instance).to.be();
    });

    it('should have the property isBreakdownByRateTable (base name: "is_breakdown_by_rate_table")', function() {
      // uncomment below and update the code to test the property isBreakdownByRateTable
      //var instane = new DnlApi.CarrierLongModify();
      //expect(instance).to.be();
    });

    it('should have the property cpsLimit (base name: "cps_limit")', function() {
      // uncomment below and update the code to test the property cpsLimit
      //var instane = new DnlApi.CarrierLongModify();
      //expect(instance).to.be();
    });

    it('should have the property isPanelRatetable (base name: "is_panel_ratetable")', function() {
      // uncomment below and update the code to test the property isPanelRatetable
      //var instane = new DnlApi.CarrierLongModify();
      //expect(instance).to.be();
    });

    it('should have the property showCountrySummary (base name: "show_country_summary")', function() {
      // uncomment below and update the code to test the property showCountrySummary
      //var instane = new DnlApi.CarrierLongModify();
      //expect(instance).to.be();
    });

    it('should have the property isPanelProducts (base name: "is_panel_products")', function() {
      // uncomment below and update the code to test the property isPanelProducts
      //var instane = new DnlApi.CarrierLongModify();
      //expect(instance).to.be();
    });

    it('should have the property address (base name: "address")', function() {
      // uncomment below and update the code to test the property address
      //var instane = new DnlApi.CarrierLongModify();
      //expect(instance).to.be();
    });

    it('should have the property format (base name: "format")', function() {
      // uncomment below and update the code to test the property format
      //var instane = new DnlApi.CarrierLongModify();
      //expect(instance).to.be();
    });

    it('should have the property includeShortCallCharge (base name: "include_short_call_charge")', function() {
      // uncomment below and update the code to test the property includeShortCallCharge
      //var instane = new DnlApi.CarrierLongModify();
      //expect(instance).to.be();
    });

    it('should have the property isPanelInvoices (base name: "is_panel_invoices")', function() {
      // uncomment below and update the code to test the property isPanelInvoices
      //var instane = new DnlApi.CarrierLongModify();
      //expect(instance).to.be();
    });

    it('should have the property showCodeSummary (base name: "show_code_summary")', function() {
      // uncomment below and update the code to test the property showCodeSummary
      //var instane = new DnlApi.CarrierLongModify();
      //expect(instance).to.be();
    });

    it('should have the property sccType (base name: "scc_type")', function() {
      // uncomment below and update the code to test the property sccType
      //var instane = new DnlApi.CarrierLongModify();
      //expect(instance).to.be();
    });

    it('should have the property attachCdrsList (base name: "attach_cdrs_list")', function() {
      // uncomment below and update the code to test the property attachCdrsList
      //var instane = new DnlApi.CarrierLongModify();
      //expect(instance).to.be();
    });

    it('should have the property autoSummaryHour (base name: "auto_summary_hour")', function() {
      // uncomment below and update the code to test the property autoSummaryHour
      //var instane = new DnlApi.CarrierLongModify();
      //expect(instance).to.be();
    });

    it('should have the property isPanelOnlinepayment (base name: "is_panel_onlinepayment")', function() {
      // uncomment below and update the code to test the property isPanelOnlinepayment
      //var instane = new DnlApi.CarrierLongModify();
      //expect(instance).to.be();
    });

    it('should have the property showTrunkSummary (base name: "show_trunk_summary")', function() {
      // uncomment below and update the code to test the property showTrunkSummary
      //var instane = new DnlApi.CarrierLongModify();
      //expect(instance).to.be();
    });

    it('should have the property isPanelSippacket (base name: "is_panel_sippacket")', function() {
      // uncomment below and update the code to test the property isPanelSippacket
      //var instane = new DnlApi.CarrierLongModify();
      //expect(instance).to.be();
    });

    it('should have the property tax (base name: "tax")', function() {
      // uncomment below and update the code to test the property tax
      //var instane = new DnlApi.CarrierLongModify();
      //expect(instance).to.be();
    });

    it('should have the property isSendTrunkUpdate (base name: "is_send_trunk_update")', function() {
      // uncomment below and update the code to test the property isSendTrunkUpdate
      //var instane = new DnlApi.CarrierLongModify();
      //expect(instance).to.be();
    });

    it('should have the property currency (base name: "currency")', function() {
      // uncomment below and update the code to test the property currency
      //var instane = new DnlApi.CarrierLongModify();
      //expect(instance).to.be();
    });

    it('should have the property nocEmail (base name: "noc_email")', function() {
      // uncomment below and update the code to test the property nocEmail
      //var instane = new DnlApi.CarrierLongModify();
      //expect(instance).to.be();
    });

    it('should have the property status (base name: "status")', function() {
      // uncomment below and update the code to test the property status
      //var instane = new DnlApi.CarrierLongModify();
      //expect(instance).to.be();
    });

    it('should have the property companyName (base name: "company_name")', function() {
      // uncomment below and update the code to test the property companyName
      //var instane = new DnlApi.CarrierLongModify();
      //expect(instance).to.be();
    });

    it('should have the property isPanelBalance (base name: "is_panel_balance")', function() {
      // uncomment below and update the code to test the property isPanelBalance
      //var instane = new DnlApi.CarrierLongModify();
      //expect(instance).to.be();
    });

    it('should have the property paymentTerm (base name: "payment_term")', function() {
      // uncomment below and update the code to test the property paymentTerm
      //var instane = new DnlApi.CarrierLongModify();
      //expect(instance).to.be();
    });

    it('should have the property autoSummaryGroupBy (base name: "auto_summary_group_by")', function() {
      // uncomment below and update the code to test the property autoSummaryGroupBy
      //var instane = new DnlApi.CarrierLongModify();
      //expect(instance).to.be();
    });

    it('should have the property lowBalanceNotificationTimeType (base name: "low_balance_notification_time_type")', function() {
      // uncomment below and update the code to test the property lowBalanceNotificationTimeType
      //var instane = new DnlApi.CarrierLongModify();
      //expect(instance).to.be();
    });

    it('should have the property nonZeroInvoiceOnly (base name: "non_zero_invoice_only")', function() {
      // uncomment below and update the code to test the property nonZeroInvoiceOnly
      //var instane = new DnlApi.CarrierLongModify();
      //expect(instance).to.be();
    });

    it('should have the property isPanelAccountsummary (base name: "is_panel_accountsummary")', function() {
      // uncomment below and update the code to test the property isPanelAccountsummary
      //var instane = new DnlApi.CarrierLongModify();
      //expect(instance).to.be();
    });

    it('should have the property enoughBalance (base name: "enough_balance")', function() {
      // uncomment below and update the code to test the property enoughBalance
      //var instane = new DnlApi.CarrierLongModify();
      //expect(instance).to.be();
    });

    it('should have the property cdrFormat (base name: "cdr_format")', function() {
      // uncomment below and update the code to test the property cdrFormat
      //var instane = new DnlApi.CarrierLongModify();
      //expect(instance).to.be();
    });

    it('should have the property zeroBalanceNotice (base name: "zero_balance_notice")', function() {
      // uncomment below and update the code to test the property zeroBalanceNotice
      //var instane = new DnlApi.CarrierLongModify();
      //expect(instance).to.be();
    });

    it('should have the property showDailyUsage (base name: "show_daily_usage")', function() {
      // uncomment below and update the code to test the property showDailyUsage
      //var instane = new DnlApi.CarrierLongModify();
      //expect(instance).to.be();
    });

    it('should have the property showPaymentSummary (base name: "show_payment_summary")', function() {
      // uncomment below and update the code to test the property showPaymentSummary
      //var instane = new DnlApi.CarrierLongModify();
      //expect(instance).to.be();
    });

    it('should have the property autoSummaryPeriod (base name: "auto_summary_period")', function() {
      // uncomment below and update the code to test the property autoSummaryPeriod
      //var instane = new DnlApi.CarrierLongModify();
      //expect(instance).to.be();
    });

    it('should have the property isAutoSummary (base name: "is_auto_summary")', function() {
      // uncomment below and update the code to test the property isAutoSummary
      //var instane = new DnlApi.CarrierLongModify();
      //expect(instance).to.be();
    });

    it('should have the property rateValue (base name: "rate_value")', function() {
      // uncomment below and update the code to test the property rateValue
      //var instane = new DnlApi.CarrierLongModify();
      //expect(instance).to.be();
    });

    it('should have the property autoSendInvoice (base name: "auto_send_invoice")', function() {
      // uncomment below and update the code to test the property autoSendInvoice
      //var instane = new DnlApi.CarrierLongModify();
      //expect(instance).to.be();
    });

    it('should have the property isDailyBalanceNotification (base name: "is_daily_balance_notification")', function() {
      // uncomment below and update the code to test the property isDailyBalanceNotification
      //var instane = new DnlApi.CarrierLongModify();
      //expect(instance).to.be();
    });

    it('should have the property includeTax (base name: "include_tax")', function() {
      // uncomment below and update the code to test the property includeTax
      //var instane = new DnlApi.CarrierLongModify();
      //expect(instance).to.be();
    });

    it('should have the property sccPercent (base name: "scc_percent")', function() {
      // uncomment below and update the code to test the property sccPercent
      //var instane = new DnlApi.CarrierLongModify();
      //expect(instance).to.be();
    });

    it('should have the property isPanelSummaryreport (base name: "is_panel_summaryreport")', function() {
      // uncomment below and update the code to test the property isPanelSummaryreport
      //var instane = new DnlApi.CarrierLongModify();
      //expect(instance).to.be();
    });

    it('should have the property carrierName (base name: "carrier_name")', function() {
      // uncomment below and update the code to test the property carrierName
      //var instane = new DnlApi.CarrierLongModify();
      //expect(instance).to.be();
    });

    it('should have the property callLimit (base name: "call_limit")', function() {
      // uncomment below and update the code to test the property callLimit
      //var instane = new DnlApi.CarrierLongModify();
      //expect(instance).to.be();
    });

    it('should have the property decimal (base name: "decimal")', function() {
      // uncomment below and update the code to test the property decimal
      //var instane = new DnlApi.CarrierLongModify();
      //expect(instance).to.be();
    });

    it('should have the property phone (base name: "phone")', function() {
      // uncomment below and update the code to test the property phone
      //var instane = new DnlApi.CarrierLongModify();
      //expect(instance).to.be();
    });

    it('should have the property dailyCdrGeneration (base name: "daily_cdr_generation")', function() {
      // uncomment below and update the code to test the property dailyCdrGeneration
      //var instane = new DnlApi.CarrierLongModify();
      //expect(instance).to.be();
    });

    it('should have the property showCodeNameSummary (base name: "show_code_name_summary")', function() {
      // uncomment below and update the code to test the property showCodeNameSummary
      //var instane = new DnlApi.CarrierLongModify();
      //expect(instance).to.be();
    });

  });

}));

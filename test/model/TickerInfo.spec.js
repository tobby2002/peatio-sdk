/**
 * Peatio SDK
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: 0.2.4
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
    factory(root.expect, root.PeatioSdk);
  }
}(this, function(expect, PeatioSdk) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new PeatioSdk.TickerInfo();
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

  describe('TickerInfo', function() {
    it('should create an instance of TickerInfo', function() {
      // uncomment below and update the code to test TickerInfo
      //var instane = new PeatioSdk.TickerInfo();
      //expect(instance).to.be.a(PeatioSdk.TickerInfo);
    });

    it('should have the property at (base name: "at")', function() {
      // uncomment below and update the code to test the property at
      //var instane = new PeatioSdk.TickerInfo();
      //expect(instance).to.be();
    });

    it('should have the property ticker (base name: "ticker")', function() {
      // uncomment below and update the code to test the property ticker
      //var instane = new PeatioSdk.TickerInfo();
      //expect(instance).to.be();
    });

  });

}));

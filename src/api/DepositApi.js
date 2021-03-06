/**
 * Peatio SDK
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: 0.2.6
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
    // AMD. Register as an anonymous module.
    define(['../ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.PeatioSdk) {
      root.PeatioSdk = {};
    }
    root.PeatioSdk.DepositApi = factory(root.PeatioSdk.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * Deposit service.
   * @module api/DepositApi
   * @version 0.2.6
   */

  /**
   * Constructs a new DepositApi. 
   * @alias module:api/DepositApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the getV2Deposit operation.
     * @callback module:api/DepositApi~getV2DepositCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get details of specific deposit.
     * Get details of specific deposit.
     * @param {String} txid 
     * @param {module:api/DepositApi~getV2DepositCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.getV2Deposit = function(txid, callback) {
      var postBody = null;

      // verify the required parameter 'txid' is set
      if (txid === undefined || txid === null) {
        throw new Error("Missing the required parameter 'txid' when calling getV2Deposit");
      }


      var pathParams = {
      };
      var queryParams = {
        'txid': txid
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['jwt'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = null;

      return this.apiClient.callApi(
        '/deposit', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));

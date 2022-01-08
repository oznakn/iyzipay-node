'use strict';

var IyzipayResource = require('../IyzipayResource');

function PayWithIyzico() {
    this._config = arguments[0];
    this._api = {
        create: {
            path: '/payment/pay-with-iyzico/initialize',
            method: 'POST',
            requestModel: 'CreatePayWithIyzicoRequest'
        }
    };
}

PayWithIyzico.prototype = new IyzipayResource();

module.exports = PayWithIyzico;

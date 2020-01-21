'use strict';

import { browser } from 'protractor';

var VALUES = require('../constant.value');

export class LoginObject {

    constructor() {
        this.email = element(by.name('email'));

        // eslint-disable-next-line quotes
        this.password = element(by.css("input[type='password']"));
        this.signInButton = element(by.id('signIn_btn'));
        this.loginPasswordError = element(by.id('error-password-popup'));
        this.emailFormError = element(by.id('email-form-validation-error'));
        this.credentialsErrorMsg = element(by.id('credentialsErrorMsgBackednId'));
    }

    async loginAction(email = VALUES.EMAIL, password = VALUES.PASSWORD, url = VALUES.WEBSITE_URL) {
        await browser.get(url);

        console.log('############# loginAction function ##############')
        await this.email.sendKeys(email);
        await this.password.sendKeys(password);
        await this.signInButton.click();
        console.log('##################################################')
    }
}
import { LoginObject } from './login.obj';
const VALUES = require('../constant.value');

describe('Test login logic', function () {
    let elm = new LoginObject();

    beforeEach(async () => {
        elm = new LoginObject();
        await browser.get(VALUES.WEBSITE_LOCAL);
        await browser.waitForAngular();
    });

    it('test login password must contain at least one upper-case letter', async function () {
        const passwordWithoutupper = 'testreport12345';

        await elm.email.sendKeys(VALUES.EMAIL);
        await elm.password.sendKeys(passwordWithoutupper);

        expect(await elm.loginPasswordError.getText()).toEqual('Password must contain at least one upper-case letter');
        expect(await elm.signInButton.isEnabled()).toBe(false);
    });

    it('test login password must contain at least one lower-case letter', async function () {
        const passwordWithoutLower = 'TESTREPORT12345';

        await elm.email.sendKeys(VALUES.EMAIL);
        await elm.password.sendKeys(passwordWithoutLower);

        expect(await elm.loginPasswordError.getText()).toEqual('Password must contain at least one lower-case letter');
        expect(await elm.signInButton.isEnabled()).toBe(false);
    });

    it('test login Password must be 8-16 characters', async function () {
        const longPassword = 'TESTREPORT12345asdasdasdasd';
        const shortPassword = '2sA';
        await elm.email.sendKeys(VALUES.EMAIL);
        await elm.password.sendKeys(longPassword);

        expect(await elm.loginPasswordError.getText()).toEqual('Password must be 8-16 characters');
        expect(await elm.signInButton.isEnabled()).toBe(false);

        await elm.password.clear();
        await elm.password.sendKeys(shortPassword);

        expect(await elm.loginPasswordError.getText()).toEqual('Password must be 8-16 characters');
        expect(await elm.signInButton.isEnabled()).toBe(false);
    });

    it('test login must not contain any spaces', async function () {
        const passwordSpace = 'TEEP  123dassd';

        await elm.email.sendKeys(VALUES.EMAIL);
        await elm.password.sendKeys(passwordSpace);

        expect(await elm.loginPasswordError.getText()).toEqual('Password must not contain any spaces');
        expect(await elm.signInButton.isEnabled()).toBe(false);
    });

    it('test login with invalid email', async function () {

        await elm.email.sendKeys('ahmed@asd.');
        await elm.password.sendKeys(VALUES.PASSWORD);

        expect(await elm.emailFormError.getText()).toEqual('Invalid email format');
        expect(await elm.signInButton.isEnabled()).toBe(false);
    });

    it('test login button is active', async function () {
        await elm.email.sendKeys(VALUES.EMAIL);
        await elm.password.sendKeys(VALUES.PASSWORD);

        expect(await elm.signInButton.isEnabled()).toBe(true);
    });

    it('test login with un register user', async function () {
        await elm.email.sendKeys('UnregisteredAccount_______' + VALUES.EMAIL);
        await elm.password.sendKeys(VALUES.PASSWORD);
        expect(await elm.signInButton.isEnabled()).toBe(true);
        await elm.signInButton.click();

        expect(await elm.credentialsErrorMsg.getText()).toEqual('Unregistered Account');
    });

});
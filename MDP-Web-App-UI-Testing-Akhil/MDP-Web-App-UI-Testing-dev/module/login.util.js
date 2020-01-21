var VALUES = require('./constant.value');

const getElements = () => {
    const globalXpath = '/html/body/app-root/app-login-page/div/div/div[2]';
    return {
        email: element(by.name('email')),
        password: element(by.id('mat-input-1')),
        SignIn: element(by.xpath(`${globalXpath}/mat-card/mat-card-content/form/div[2]/button/span/span`)),
        login_b: element(by.xpath(globalXpath)).element(by.tagName('mat-card-title')),
    };
};

const login = async (EMAIL,PASSWORD) => {
    console.log('****** LOGIN FUNCTION ******');
    console.log('webiste url', VALUES.WEBSITE_URL);
    await browser.get(VALUES.WEBSITE_URL);

    const loginElements = getElements();

    console.log('check sign in title form');
    
   // expect(await loginElements.login_b.getText()).toEqual('Sign In');

    console.log('fill email and password');
    await loginElements.email.sendKeys(EMAIL);
    await loginElements.password.sendKeys(PASSWORD);
    await loginElements.SignIn.click();
};

module.exports = { login: login };

export class VerificationActionPopup {
    constructor() {
        this.verifyLaterButton = element(by.id('recipientVerificationLaterId'));
    }

    async dismissVerificationIfExist() {

        console.log('verif before');
        browser.actions().mouseMove(this.verifyLaterButton).click().perform();
        await this.verifyLaterButton.isPresent();
        await this.verifyLaterButton.click();
        console.log('verif after');

    }
}
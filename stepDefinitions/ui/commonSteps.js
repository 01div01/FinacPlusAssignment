import { Given, When, Then } from '../customFixer';    


Given('Navigate to Books Store Application', async function () {
    await this.commonPage.navigateDemoQaPage();
});
Given('User clicks on {string} text', async function (buttonName) {
    await this.commonPage.clickAnyByText(buttonName);
});
Given('User clicks on {string} button', async function (buttonName) {
    await this.commonPage.clickButtonByText(buttonName);
});

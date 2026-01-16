import { BasePage } from "../utility/BasePage";

export class CommonPage extends BasePage{
    constructor(page) {
        super(page);
    }
    async navigateDemoQaPage() {
        await this.webActionUtils.goto(process.env.BASE_URL);
    }
    async clickButtonByText(buttonName) {
        await this.webActionUtils.clickButton(`//button[text()="${buttonName}"]`);
    }
    async clickAnyByText(buttonName) {
        await this.webActionUtils.clickButton(`//*[text()="${buttonName}"]`);
    }
}
export class WebActionUtils {
    constructor(page) {
        this.page = page;
    }

    async goto(url){
        await this.page.goto(url);
    }
    async clickButton(locator){
        await this.page.click(locator);
    }
    async getLocator(selector) {
        return await this.page.locator(selector);
    }
   
}
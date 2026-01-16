import { CommonPage } from '../commonPage';
export class LoginPage extends CommonPage {
    constructor(page) {
        super(page)
    }
    
    async loginUser(username, password) {
        await this.page.fill('#userName', username);
        await this.page.fill('#password', password);
        await this.page.click('#login');
    }
    async validateUserName(userName) {
        const userLocator = await this.webActionUtils.getLocator('#userName-value');
        let actualText =  await userLocator.textContent();
        this.assertUtils.assertEqual(actualText, userName);
    }
    async getTitle() {
        return await this.page.title();
    }
}
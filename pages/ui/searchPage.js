import { CommonPage } from '../commonPage';
import fs from 'fs';
import path from 'path';

export class SearchPage extends CommonPage {
    constructor(page) {
        super(page)
    }
    async searchBook(bookName) {
        await this.page.fill('#searchBox', bookName);
        await this.page.press('#searchBox', 'Enter');
    }
    async getTitle() {
        return await this.page.title();
    }
    async validateSearchResult(bookName) {
        const bookLocator = await this.webActionUtils.getLocator(`//a[text()="${bookName}"]`);
        let actualText = await bookLocator.textContent();
        this.assertUtils.assertTrue(actualText.includes(bookName));
    }
    async printBookDetailsToFile(bookName) {
        const rowContent = await this.page.locator(`(//a[text()='${bookName}']//ancestor::div[@role='row'])[1]/div`).allTextContents();
        let allDetails = [];
        for (let i = 1; i < rowContent.length; i++) {
            allDetails.push(rowContent[i]);
        }
        const detailsString = allDetails.join('\n');
        const filePath = path.join(process.cwd(), 'bookDetails.txt');
        fs.writeFileSync(filePath, detailsString, 'utf-8');
        console.log('File written at:', filePath);
    }
}
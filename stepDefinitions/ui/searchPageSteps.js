import { Given, When, Then } from '../customFixer';    


When('Search {string}', async function (string) {
    await this.searchPage.searchBook(string);
});
Then('Validate the search result to contain {string} book.', async function (string) {
    await this.searchPage.validateSearchResult(string);
});
Then('Print Title, Author and Publisher into a file for {string}', async function (bookName) {
    await this.searchPage.printBookDetailsToFile(bookName);
});



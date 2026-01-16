import { test as base, createBdd } from 'playwright-bdd';
import { LoginPage } from '../pages/ui/loginPage.js';
import { SearchPage } from '../pages/ui/searchPage.js';
import { CommonPage } from '../pages/commonPage.js';
import { ApiUserAction } from '../pages/api/userAction.js';

export class CustomWorld {
  apiData = {};
  setApiData(key, value) {
    this.apiData[key] = value;
  }
  getApiData(key) {
    return this.apiData[key];
  }
  constructor(page) {
    this.page = page;
    this.loginPage = new LoginPage(page);
    this.searchPage = new SearchPage(page);
    this.commonPage = new CommonPage(page);
    this.apiUserAction = new ApiUserAction();
  }
}

export const test = base.extend({
  customWorld: async ({ page }, use) => {
    await use(new CustomWorld(page));
  },
});

export const { Given, When, Then } = createBdd(test, { worldFixture: 'customWorld' });

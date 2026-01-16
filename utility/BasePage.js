import { WebActionUtils } from "./WebActionUtils";
import { AssertUtils } from "./AssertUtils";

export class BasePage {
    constructor(page) {
        this.page = page;
        this.webActionUtils = new WebActionUtils(page);
        this.assertUtils = new AssertUtils(page);
    }
}
import { expect } from "@playwright/test";

export class AssertUtils {
    async assertEqual(actual, expected) {
       expect(actual).toBe(expected);
    }
    async assertTrue(condition) {
       expect(condition).toBe(true);
    }
}
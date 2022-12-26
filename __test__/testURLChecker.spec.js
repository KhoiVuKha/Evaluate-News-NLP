import { checkForUrl } from "../src/client/js/urlChecker"

describe("Testing the checkForUrl() function", () => {
    test("Testing for missing https/http", () => {
        const url = 'www.udacity.com/'
        expect(checkForUrl(url)).toBe(false);
    });
    test("Testing for missing www", () => {
        const url = 'udacity.com/'
        expect(checkForUrl(url)).toBe(false);
    });
    test("Testing for space", () => {
        const url = 'https://www.uda city   .com/'
        expect(checkForUrl(url)).toBe(false);
    });
    test("Testing for valid url", () => {
        const url = 'https://www.udacity.com/'
        expect(checkForUrl(url)).toBe(true);
    });
});

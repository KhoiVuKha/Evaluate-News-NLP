// Import the js file to test
import { parseScoreValue } from "../src/client/js/formHandler"

// A test suite may contain one or more related tests    
describe("Testing the parse score value functionality", () => { 
        // test if function is exist
        test("Testing the parseScoreValue() function", () => {
            expect(parseScoreValue).toBeDefined();
        })
        // test Score = "P+"
        test("Testing the parseScoreValue() function", () => {
            expect(parseScoreValue('P+')).toBe('Strong positive');
        })
        // test Score = "P"
        test("Testing the parseScoreValue() function", () => {
            expect(parseScoreValue('P')).toBe('Positive');
        })
        // test Score = "NEU"
        test("Testing the parseScoreValue() function", () => {
            expect(parseScoreValue('NEU')).toBe('Neutral');
        })
        // test Score = "N"
        test("Testing the parseScoreValue() function", () => {
            expect(parseScoreValue('N')).toBe('Negative');
        })
        // test Score = "N+"
        test("Testing the parseScoreValue() function", () => {
            expect(parseScoreValue('N+')).toBe('Strong negative');
        })
        // test Score = "NONE"
        test("Testing the parseScoreValue() function", () => {
            expect(parseScoreValue('NONE')).toBe('No sentiment');
        })
        // test Score = ""
        test("Testing the parseScoreValue() function", () => {
            expect(parseScoreValue('')).toBe('No data');
        })
    }
);
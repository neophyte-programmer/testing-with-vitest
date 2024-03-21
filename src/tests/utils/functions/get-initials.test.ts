// eslint-disable
import { expect, test, describe } from 'vitest';
import { getInitials } from '../../../utils/functions';

const NAMES = {
    single: "Nutifafa",
    double: "Nutifafa Afi",
    triple: "Samuel L Jackson"
}

describe("Get Initials Function", () => {
    test("should be defined", () => {
        expect(getInitials).toBeDefined();
    })

    test("should return the first two letters if its a single name", () => {
        expect(getInitials(NAMES.single)).toBe("NU")
    })

    test("should return the first letter of the first word and first letter of second word if words are two", () => {
        expect(getInitials(NAMES.double)).toBe("NA")
    })

    test("should return the first letter of the first word and first letter of last word if words are greater than two", () => {
        expect(getInitials(NAMES.triple)).toBe("SJ")
    })

    test("should return NA if input is not a string", () => {
        expect(getInitials({})).toBe("NA");
    });
});
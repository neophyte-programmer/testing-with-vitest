import { expect, test, describe } from 'vitest';
import  getInitials  from './index';

const NAMES = {
    single: "Nutifafa",
    double: "Nutifafa Afi",
    triple: "Samuel L Jackson"
};

describe("Get Initials Function", () => {
    test("given a single name, it should return the first two letters", () => {
        expect(getInitials(NAMES.single)).toBe("NU");
    });

    test("given two names, it should return the first letter of the first word and first letter of second word", () => {
        expect(getInitials(NAMES.double)).toBe("NA");
    });

    test("given more than two naes, it should return the first letter of the first word and first letter of last word", () => {
        expect(getInitials(NAMES.triple)).toBe("SJ");
    });

    test("given the input is not a string, it should return NA", () => {
        expect(getInitials((123))).toBe("NA");
    });
});
// eslint-disable
import { expect, test, describe } from 'vitest';
import { getInitials, letterCounter } from '../../../utils/functions';

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
        expect(getInitials((123))).toBe("NA");
    });
});


describe("Count letters", () => {

    test("given an undefined value: it returns 0 as the letter count", () => {
        const word = undefined as unknown as string
        const actual = letterCounter(word)
        const expected = {
            letterCount: 0,
            vowelCount: 0,
            consonantCount: 0
        }
        expect(actual).toEqual(expected)
    })

    test("given a string: it returns the count of the string", () => {
        const word = "Lorem"
        const actual = letterCounter(word)
        const expected = 5
        expect(actual.letterCount).toEqual(expected)
    })

    test("given a string: it returns an object with property vowel count", () => {
        const word = "Lorem Ipsum"
        const actual = letterCounter(word)
        const expected = 4
        expect(actual.vowelCount).toEqual(expected)
    })

    test("given a string: it returns an object with property consonant count", () => {
        const word = "Lorem Ipsum"
        const actual = letterCounter(word)
        const expected = 6
        expect(actual.consonantCount).toEqual(expected)
    })
})
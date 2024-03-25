import { expect, test, describe } from 'vitest';
import calculateProfit from "./index"

describe("Calculate Profit Function", () => {
    test("given the cost price, selling price and quantity sold, it should return the computed result", () => {
        const costPrice = 20
        const sellingPrice = 30
        const quantity = 5
        const expected = 50
        const actual = calculateProfit(costPrice, sellingPrice, quantity)
        expect(actual.result).toBe(expected)
    })

    test("given the cost price, selling price and quantity sold, it should return whether it is a profit, loss or none", () => {
        const costPrice = 100;
        const sellingPrice = 90;
        const quantity = 7;
        const expected = {
            result: -70,
            type: "loss"
        };
        const actual = calculateProfit(costPrice, sellingPrice, quantity);
        expect(actual).toStrictEqual(expected);
    })

    test("given the cost price, selling price and quantity sold, the result should be rounded to 2 decimal places", () => {
        const costPrice = 105.50;
        const sellingPrice = 120;
        const quantity = 7;
        const expected =  101.50
        
        const actual = calculateProfit(costPrice, sellingPrice, quantity);
        expect(actual.result).toStrictEqual(expected);
    });

    test("given one of the parameters is undefined, it should throw an error", () => {
        const costPrice = undefined;
        const sellingPrice = 120;
        const quantity = 7;
        const expected = "A parameter is undefined"
        const actual = () => calculateProfit(costPrice, sellingPrice, quantity);
        expect(actual).toThrowError(expected);
    });

    test("given quantity is a decimal, it should throw an error", () => {
        const costPrice = 100;
        const sellingPrice = 120;
        const quantity = 7.5;
        const expected = "Quantity must be a whole number";
        const actual = () => calculateProfit(costPrice, sellingPrice, quantity);
        expect(actual).toThrowError(expected);
    })

    test("given one of the parameters is a number but a string literal, it should convert to number and compute", () => {
        const costPrice = "105.50";
        const sellingPrice = "120";
        const quantity = "7";
        const expected = 101.50;
        const actual = calculateProfit(costPrice, sellingPrice, quantity);
        expect(actual.result).toStrictEqual(expected);
    })

    test("given one of the parameters is not a number, it should throw an error", () => {
        const costPrice = "kwame";
        const sellingPrice = 120;
        const quantity = 7.5;
        const expected = "All parameters should be valid numbers";
        const actual = () => calculateProfit(costPrice, sellingPrice, quantity);
        expect(actual).toThrowError(expected);
    });
})
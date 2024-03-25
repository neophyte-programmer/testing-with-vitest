// Create a function that calculates the profit from a sale, given the cost price, selling price, and quantity sold.
import _ from "lodash";

type ProfitTypes = "profit" | "loss" | "break-even";

type ProfitOutput = {
    result: number;
    type: ProfitTypes;
};

export default function calculateProfit(costPrice: number, sellingPrice: number, quantity: number): ProfitOutput {

    if (_.isUndefined(costPrice) || _.isUndefined(sellingPrice) || _.isUndefined(quantity)) {
        throw new Error("A parameter is undefined");
    }

    const __costPrice = _.toNumber(costPrice)
    const __sellingPrice = _.toNumber(sellingPrice)
    const __quantity = _.toNumber(quantity)

    console.log(__costPrice, __sellingPrice, __quantity)



    if (isNaN(__costPrice) || isNaN(__sellingPrice) || isNaN(__costPrice)) {
        throw new Error("All parameters should be valid numbers")
    }

    if (!_.isInteger(__quantity)) {
        throw new Error("Quantity must be a whole number")
    }


    const totalRevenue = __sellingPrice * __quantity;
    const totalCost = __costPrice * __quantity;
    const profit = totalRevenue - totalCost;
    let __type: ProfitTypes = "break-even";

    if (profit > 0) {
        __type = "profit";
    } else if (profit < 0) {
        __type = "loss";
    } else {
        __type = "break-even";
    }

    return {
        result: _.round(profit, 2),
        type: __type
    };

}
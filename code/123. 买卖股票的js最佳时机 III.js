/*
 * @Descripttion: 
 * @Author: zhuangshunan
 * @Date: 2023-04-04 15:00:09
 * @LastEditors: zhuangshunan
 * @LastEditTime: 2023-04-04 15:05:00
 */
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let dp_i10 = 0, dp_i11 = -Infinity;
    let dp_i20 = 0, dp_i21 = -Infinity;
    for (let price of prices) {
        dp_i20 = Math.max(dp_i20, dp_i21 + price);
        dp_i21 = Math.max(dp_i21, dp_i10 - price);
        dp_i10 = Math.max(dp_i10, dp_i11 + price);
        dp_i11 = Math.max(dp_i11, -price);
    }
    return dp_i20;
};
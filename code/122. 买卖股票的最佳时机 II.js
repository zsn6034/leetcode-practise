/*
 * @Descripttion: 
 * @Author: zhuangshunan
 * @Date: 2023-04-04 14:00:22
 * @LastEditors: zhuangshunan
 * @LastEditTime: 2023-04-04 14:15:16
 */
/**
 * @param {number[]} prices
 * @return {number}
 */
// 解法1
// var maxProfit = function(prices) {
//     const n = prices.length;
//     const dp = Array.from(Array(n), () => Array(2).fill(0));
//     for (let i = 0; i < n; i += 1) {
//         if (i === 0) {
//             dp[i][0] = 0;
//             dp[i][1] = -prices[i];
//         } else {
//             dp[i][0] = Math.max(dp[i-1][0], dp[i-1][1] + prices[i]);
//             dp[i][1] = Math.max(dp[i-1][1], dp[i-1][0] - prices[i]);
//         }
//     }
//     return dp[n-1][0];
// };

// 解法2
var maxProfit = function(prices) {
    const n = prices.length;
    let dp_i_0 = 0, dp_i_1 = -Infinity;
    for (let i = 0; i < n; i += 1) {
        const temp = dp_i_0;
        dp_i_0 = Math.max(dp_i_0, dp_i_1 + prices[i]);
        dp_i_1 = Math.max(dp_i_1, temp - prices[i]);
    }
    return dp_i_0;
}
/**
 * @param {number[]} prices
 * @return {number}
 */
// 解法1
// var maxProfit = function(prices) {
//     const n = prices.length;
//     // const dp = Array.from(Array(n), () => Array(2).fill(0));
//     const dp = new Array(n).fill(null).map(() => new Array(2).fill(0));
//     for (let i = 0; i < n; i += 1) {
//         if (i === 0) {
//             // base case 1
//             dp[i][0] = 0;
//             dp[i][1] = -prices[i];
//         }
//         else if (i === 1) {
//             // base case 2
//             dp[i][0] = Math.max(dp[i-1][0], dp[i-1][1] + prices[i]);
//             dp[i][1] = Math.max(dp[i-1][1], -prices[i]);
//             //   dp[i][1] 
//             // = max(dp[i-1][1], dp[-1][0] - prices[i])
//             // = max(dp[i-1][1], 0 - prices[i])
//             // = max(dp[i-1][1], -prices[i])
//         }
//         else {
//             dp[i][0] = Math.max(dp[i-1][0], dp[i-1][1] + prices[i]);
//             dp[i][1] = Math.max(dp[i-1][1], dp[i-2][0] - prices[i]);
//         }
//     }
//     return dp[n-1][0];
// };
// 解法2
var maxProfit = function(prices) {
    const n = prices.length;
    let dp_i_0 = 0;
    let dp_i_1 = -Infinity;
    let dp_pre_0 = 0; // 代表dp[i-2][0]
    for (let i = 0; i < n; i += 1) {
        let temp = dp_i_0;
        dp_i_0 = Math.max(dp_i_0, dp_i_1 + prices[i]);
        dp_i_1 = Math.max(dp_i_1, dp_pre_0 - prices[i]);
        dp_pre_0 = temp;
    }
    return dp_i_0;
}


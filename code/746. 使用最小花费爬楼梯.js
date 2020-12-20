// 1. cost 的长度将会在 [2, 1000]。
// 2. 每一个 cost[i] 将会是一个Integer类型，范围为 [0, 999]。
/**
 * @param {number[]} cost
 * @return {number}
 */
var minCostClimbingStairs = function(cost) {
    // 解法1：dp[i]代表到达第i时（包含i）的最小值
    // let len = cost.length;
    // let dp = new Array(len).fill(0);
    // dp[0] = cost[0];
    // dp[1] = cost[1];
    // for (let i = 2; i < len; i++) {
    //     dp[i] = Math.min(dp[i - 2], dp[i - 1]) + cost[i];
    // }
    // return Math.min(dp[len - 1], dp[len - 2]);
    // 解法2：dp[i]代表到达第i时（不包含i）的最小值
    let len = cost.length;
    let dp = new Array(len + 1).fill(0);
    for (let i = 2; i <= len; i++) {
        dp[i] = Math.min(dp[i - 2] + cost[i - 2], dp[i - 1] + cost[i - 1]);
    }
    return dp[len];
};

// console.log(minCostClimbingStairs([10, 15, 20])); // 15
console.log(minCostClimbingStairs([1, 100, 1, 1, 1, 100, 1, 1, 100, 1])); // 6

// 动态规划
// f(i) = min(f(i-1), f(i-2)) + c[i]
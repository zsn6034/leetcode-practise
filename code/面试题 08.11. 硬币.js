// dp[i][j] 使用前i种硬币计算j分的表示法种数 令coins=[25, 10, 5, 1]
// dp[i][j] = dp[i-1][j] + dp[i-1][j-coins[i]] + dp[i-1][j-2*coins[i]] + ... dp[i-1][j-k*coins[i]]
// j >= k*coins[i]
// dp[i][j-coins[i]] = dp[i-1][j-coins[i]] + dp[i-1][j-2*coins[i]] + ... dp[i-1][j-k*coins[i]]
// dp[i][j] - dp[i][j-coins[i]] = dp[i-1][j]
// dp[i][j] = dp[i][j-coins[i]] + dp[i-1][j]

/**
 * @param {number} n
 * @return {number}
 */
var waysToChange = function(n) {
    let coins = [25, 10, 5, 1];
    let dp = new Array(n + 1).fill(0);
    dp[0] = 1;
    for (let i = 0; i < 4; i++) {
        let coin = coins[i];
        for (let j = coins[i]; j <= n; j++) {
            dp[j] = (dp[j] + dp[j - coin]) % 1000000007;
        }
    }
    return dp[n];
};

console.log(waysToChange(5)); // 2
console.log(waysToChange(10)); // 4
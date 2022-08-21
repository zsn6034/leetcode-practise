/**
 * @param {number[]} prices
 * @return {number}
 */
// g(n)代表第n天之前（不包含第n天）某天股票最低价
// g(n) = min(g(n-1), prices(n-1))
// f(n)代表截止第n天获利最大值
// f(n) = max(f(n-1), prices(n) - g(n))
var maxProfit = function(prices) {
    const n = prices.length;
    if (n === 1) return 0;
    const g = [Number.MAX_SAFE_INTEGER], f = [0];
    for (let i = 1; i < n; i += 1) {
        g.push(Math.min(g[i - 1], prices[i - 1]));
        f.push(Math.max(f[i - 1], prices[i] - g[i]));
    }
    return f[n - 1];
};
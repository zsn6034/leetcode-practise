// 泰波那契序列 Tn 定义如下： 

// T0 = 0, T1 = 1, T2 = 1, 且在 n >= 0 的条件下 Tn+3 = Tn + Tn+1 + Tn+2

// 给你整数 n，请返回第 n 个泰波那契数 Tn 的值。

 

// 示例 1：

// 输入：n = 4
// 输出：4
// 解释：
// T_3 = 0 + 1 + 1 = 2
// T_4 = 1 + 1 + 2 = 4
// 示例 2：

// 输入：n = 25
// 输出：1389537

/**
 * @param {number} n
 * @return {number}
 */
// 解法1：递归（尾递归）
var tribonacci = function(n, prev1 = 0, prev2 = 1, prev3 = 1) {
    if (n === 0) return prev1;
    if (n === 1) return prev2;
    if (n === 2) return prev3;
    [prev1, prev2, prev3] = [prev2, prev3, prev1 + prev2 + prev3];
    return tribonacci(n - 1, prev1, prev2, prev3);
};

// 解法2：迭代
var tribonacci = function(n) {
    if (n === 0) return 0;
    if (n === 1) return 1;
    if (n === 2) return 1;
    let n1 = 0,
        n2 = 1,
        n3 = 1;
    for(let i = 3; i <= n; i++) {
        let sum = n1 + n2 + n3;
        n1 = n2;
        n2 = n3;
        n3 = sum;
    }
    return n3;
}

console.log(tribonacci(1));
console.log(tribonacci(2));
console.log(tribonacci(3));
console.log(tribonacci(4));
console.log(tribonacci(5));
console.log(tribonacci(25));
console.log(tribonacci(36));
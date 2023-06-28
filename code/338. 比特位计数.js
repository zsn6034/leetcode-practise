// 给你一个整数 n ，对于 0 <= i <= n 中的每个 i ，
// 计算其二进制表示中 1 的个数 ，返回一个长度为 n + 1 的数组 ans 作为答案。
// 示例 1：

// 输入：n = 2
// 输出：[0,1,1]
// 解释：
// 0 --> 0
// 1 --> 1
// 2 --> 10
// 示例 2：

// 输入：n = 5
// 输出：[0,1,1,2,1,2]
// 解释：
// 0 --> 0
// 1 --> 1
// 2 --> 10
// 3 --> 11
// 4 --> 100
// 5 --> 101
/**
 * @param {number} n
 * @return {number[]}
 */
// 解法1：利用Number.toString(2)转换为对应二进制数
// var countBits = function(n) {
//     const res = [];
//     for (let i = 0; i <= n; i += 1) {
//         const bNum = i.toString(2);
//         const len = bNum.length;
//         let count = 0;
//         for (let j = 0; j < len; j += 1) {
//             if (bNum[j] === '1') {
//                 count += 1;
//             }
//         }
//         res[i] = count;
//     }
//     return res;
// };
// 解法2：x=x&(x-1)，该运算将x的二进制表示的最后一个1变成0。因此，对x重复该操作，直到x变成0，则操作次数即为x的「一比特数」
// var countBits = function(n) {
//     const bits = new Array(n + 1).fill(0);
//     for (let i = 0; i <= n; i += 1) {
//         bits[i] = countOnes(i);
//     }
//     return bits;
// }
// const countOnes = (x) => {
//     let ones = 0;
//     while (x > 0) {
//         x = x & (x - 1);
//         ones += 1;
//     }
//     return ones;
// }

// 4 = 0100

// 7 - 4 = 3
// 7 = 0111
// 3 = 0011

// 6 - 4 = 2
// 6 = 0110
// 2 = 0010
// 解法3：动态规划-最高有效位
var countBits = function(n) {
    const bits = new Array(n + 1).fill(0);
    let highBit = 0;
    for (let i  = 1; i <= n; i += 1) {
        if ((i & (i - 1)) === 0) {
            highBit = i;
        }
        bits[i] = bits[i - highBit] + 1;
    }
    return bits;
}
/*
 * @Description: 
 * @Author: zhuangshunan
 * @Date: 2023-07-06 21:40:33
 * @LastEditors: zhuangshunan
 * @LastEditTime: 2023-07-06 21:40:39
 */
/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
// 解法1：暴力解
// var dailyTemperatures = function(temperatures) {
//     const len = temperatures.length;
//     const ans = new Array(len).fill(0);
//     for (let i = 0; i < len; i += 1) {
//         for (let j = i + 1; j < len; j += 1) {
//             if (temperatures[j] > temperatures[i]) {
//                 ans[i] = j - i;
//                 break;
//             }
//         }
//     }
//     return ans;
// };

// 解法2：单调栈
var dailyTemperatures = function(temperatures) {
    const len = temperatures.length;
    const ans = new Array(len).fill(0);
    const stack = [];
    for (let i = 0; i < len; i += 1) {
        const t = temperatures[i];
        while (stack.length > 0 && t > temperatures[stack[stack.length - 1]]) {
            const prevIdx = stack.pop();
            ans[prevIdx] = i - prevIdx;
        }
        stack.push(i);
    }
    return ans;
};
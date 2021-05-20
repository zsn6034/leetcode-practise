/*
 * @Descripttion: 
 * @Author: zhuangshunan
 * @Date: 2021-05-20 21:46:31
 * @LastEditors: zhuangshunan
 * @LastEditTime: 2021-05-20 22:21:22
 */
/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
    const res = [];
    dfs(n, n, '', res);
    return res;
};

var dfs = function(left, right, str, res) {
    if (left === 0 && right === 0) {
        res.push(str);
        return;
    }
    if (left > 0) {
        dfs(left - 1, right, str + '(', res);
    }
    if (right > 0 && left < right) {
        dfs(left, right - 1, str + ')', res);
    }
};

console.log(generateParenthesis(4));
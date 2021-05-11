/*
 * @Descripttion: 
 * @Author: zhuangshunan
 * @Date: 2021-05-11 21:56:56
 * @LastEditors: zhuangshunan
 * @LastEditTime: 2021-05-11 22:11:24
 */
/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    let res = '';
    let len = s.length;
    if (len === 1) {
        return s;
    }
    for (let i = 0; i < len; i += 1) {
        // 滚筒法
        let s1 = find(i, i, s);
        let s2 = find(i, i + 1, s);
        if (s1.length > s2.length) {
            res = res.length < s1.length ? s1 : res;
        } else {
            res = res.length < s2.length ? s2 : res;
        }
    }
    return res;
};

var find = function(i, j, s) {
    let left = i, right = j;
    while (left >= 0 && right < s.length && s[left] === s[right]) {
        left -= 1;
        right += 1;
    }
    return s.substring(left + 1, right);
};

console.log(longestPalindrome('SQQSYYSQQS'));
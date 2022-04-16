/*
 * @Description: 
 * @Author: zhuangshunan
 * @Date: 2022-04-16 21:39:39
 * @LastEditors: zhuangshunan
 * @LastEditTime: 2022-04-16 21:46:11
 */
/**
 * @param {string} s
 * @return {number}
 */
 var minimumMoves = function(s) {
    let ans = 0, i = 0, len = s.length;
    while (i < len) {
        if (s[i] === 'X') {
            ans += 1;
            i += 3;
        } else {
            i += 1;
        }
    }
    return ans;
};

console.log(minimumMoves('XXX'));
console.log(minimumMoves('XXOX'));
console.log(minimumMoves('OOOO'));
/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
// 滑动窗口1
// var maxVowels = function(s, k) {
//     let left = 0, right = 0;
//     const len = s.length;
//     const goods = ['a', 'e', 'i', 'o', 'u'];
//     let res = 0,
//         count = 0;
//     while (right <= len) {
//         if (right - left < k) {
//             if (goods.includes(s[right])) {
//                 count += 1;
//                 res = Math.max(count, res);
//             }
//             right += 1;
//         } else {
//             if (goods.includes(s[left])) {
//                 count -= 1;
//             }
//             left += 1;
//         }
//     }
//     return res;
// };
// 滑动窗口2
var maxVowels = function(s, k) {
    const isGood = (c) => {
        if (['a', 'e', 'i', 'o', 'u'].includes(c)) return 1;
        return 0;
    };
    const len = s.length;
    let count = 0;
    for (let i = 0; i < k; i += 1) {
        count += isGood(s[i]);
    }
    let res = count;
    for (let i = k; i < len; i += 1) {
        count += isGood(s[i]) - isGood(s[i - k]);
        res = Math.max(count, res);
    }
    return res;
};
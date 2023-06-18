/** 
 * Forward declaration of guess API.
 * @param {number} num   your guess
 * @return 	     -1 if num is higher than the picked number
 *			      1 if num is lower than the picked number
 *               otherwise return 0
 * var guess = function(num) {}
 */

/**
 * @param {number} n
 * @return {number}
 */
// 解法1
// var guessNumber = function(n) {
//     let left = 1, right = n;
//     while (left < right) {
//         let mid = left + Math.floor((right - left) / 2);
//         if (guess(mid) <= 0) {
//             right = mid;
//         } else {
//             left = mid + 1;
//         }
//     }
//     return left;
// };
// 解法2
// var guessNumber = function(n) {
//     let left = 1, right = n;
//     while (left <= right) {
//         let mid = left + Math.floor((right - left) / 2);
//         if (guess(mid) === 1) {
//             left = mid + 1;
//         }
//         if (guess(mid) === -1) {
//             right = mid - 1;
//         }
//         if (guess(mid) === 0) {
//             return mid;
//         }
//     }
//     return -1;
// };
// 解法3
var guessNumber = function(n) {
    return helper(1, n);
};
var helper = function(start, end) {
    const n = start + Math.floor((end - start) / 2);
    const res = guess(n);
    if (res === 0) return n;
    if (res === 1) return helper(n + 1, end);
    return helper(start, n - 1);
}
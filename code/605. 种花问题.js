/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
// 贪心算法1
// var canPlaceFlowers = function(flowerbed, n) {
//     const arr = flowerbed, len = flowerbed.length;
//     if (n === 0) return true;
//     if (len === 1) {
//         return arr[0] === 0 && n < 2;
//     }
//     let count = n, idx = 0;
//     while (count > 0 && idx < len) {
//         if (arr[idx] === 0) {
//             if (idx === 0) {
//                 if (idx + 1 < len && arr[idx + 1] === 0) {
//                     count -= 1;
//                     arr[idx] = 1;
//                 }
//             }
//             else if (idx === len - 1) {
//                 if (idx - 1 >= 0 && arr[idx - 1] === 0) {
//                     count -= 1;
//                     arr[idx] = 1;
//                 }
//             }
//             else {
//                 if (arr[idx - 1] === 0 && arr[idx + 1] === 0) {
//                     count -= 1;
//                     arr[idx] = 1;
//                 }
//             }
//         }
//         idx += 1;
//     }
//     return count <= 0;
// };
// 贪心算法2
var canPlaceFlowers = function(flowerbed, n) {
    if (n === 0) return true;
    const len = flowerbed.length;
    for (let i = 0; i < len; i += 1) {
        if (flowerbed[i] === 0 && (i === 0 || flowerbed[i - 1] === 0) && (i === len - 1 || flowerbed[i + 1] === 0)) {
            n -= 1;
            flowerbed[i] = 1;
        }
        if (n === 0) {
            return true;
        }
    }
    return false;
}
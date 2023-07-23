/**
 * @param {number[]} arr
 * @return {boolean}
 */
// 解法1：哈希表1
// var uniqueOccurrences = function(arr) {
//     const valueMap = {};
//     const len = arr.length;
//     for (let i = 0; i < len; i += 1) {
//         valueMap[arr[i]] = valueMap[arr[i]] ? valueMap[arr[i]] + 1 : 1;
//     }
//     const set = new Set();
//     let result = true;
//     Object.keys(valueMap).forEach(k => {
//         const count = valueMap[k];
//         if (set.has(count)) {
//             result = false;
//             return;
//         };
//         set.add(count);
//     });
//     return result;
// };
// 解法2：哈希表2
var uniqueOccurrences = function(arr) {
    const occur = new Map();
    for (const x of arr) {
        if (occur.has(x)) {
            occur.set(x, occur.get(x) + 1);
        } else {
            occur.set(x, 1);
        }
    }
    const times = new Set();
    for (const [key, value] of occur) {
        times.add(value);
    }
    return times.size === occur.size;
};
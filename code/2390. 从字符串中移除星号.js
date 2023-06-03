/*
 * @Description: 
 * @Author: zhuangshunan
 * @Date: 2023-06-03 15:58:52
 * @LastEditors: zhuangshunan
 * @LastEditTime: 2023-06-03 15:59:26
 */
/**
 * @param {string} s
 * @return {string}
 */
// 解法1：暴力解
// var removeStars = function(s) {
//     let res = s;
//     let i = 0;
//     while (i < res.length) {
//         if (res[i] !== '*') {
//             i += 1;
//             continue;
//         }
//         let before = res.substring(0, i - 1);
//         let after = res.substring(i + 1);
//         // res = res.substring(0, i - 1) + res.substring(i + 1);
//         res = before + after;
//         i -= 1;
//     }
//     return res;
// };
// 解法2：利用栈
// var removeStars = function(s) {
//     const stack = [];
//     for (let item of s) {
//         if (item !== '*') {
//             stack.push(item);
//         } else {
//             stack.pop();
//         }
//     }
//     return stack.join('');
// };
// 解法3：双指针，一个写入，一个扫描
var removeStars = function(s) {
    let write = 0, scan = 0;
    const res = s.split('');
    while (scan < res.length) {
        if (res[scan] === '*') {
            if (write > 0) {
                write -= 1;
            }
            scan++;
            continue;
        }
        res[write++] = res[scan++];
    }
    return res.slice(0, write).join('');
}

console.log(removeStars('leet**cod*e'))

// 示例 1：

// 输入：s = "leet**cod*e"
// 输出："lecoe"
// 解释：从左到右执行移除操作：
// - 距离第 1 个星号最近的字符是 "leet**cod*e" 中的 't' ，s 变为 "lee*cod*e" 。
// - 距离第 2 个星号最近的字符是 "lee*cod*e" 中的 'e' ，s 变为 "lecod*e" 。
// - 距离第 3 个星号最近的字符是 "lecod*e" 中的 'd' ，s 变为 "lecoe" 。
// 不存在其他星号，返回 "lecoe" 。
// 示例 2：

// 输入：s = "erase*****"
// 输出：""
// 解释：整个字符串都会被移除，所以返回空字符串。
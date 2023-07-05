/**
 * @param {number[][]} intervals
 * @return {number}
 */
// 解法1：动态规划，时间复杂度O(N^2)，会超时
// var eraseOverlapIntervals = function(intervals) {
//     if (!intervals.length) {
//         return 0;
//     }

//     intervals.sort((a, b) => a[0] - b[0]);
//     const n = intervals.length;
//     const f = new Array(n).fill(1);

//     for (let i = 1; i < n; i++) {
//         for (let j = 0; j < i; j++) {
//             if (intervals[j][1] <= intervals[i][0]) {
//                 f[i] = Math.max(f[i], f[j] + 1);
//             }
//         }
//     }
//     return n - Math.max(...f);
// };
// 解法2：贪心算法
var eraseOverlapIntervals = function(intervals) {
    if (intervals.length === 0) return 0;
    let ans = 0;
    // 按照 start 进行排序
    intervals.sort((a, b) => a[0] - b[0]);
    // 表示已经添加进去的区间的结束位置
    let end = intervals[0][1];
    for (let i = 1; i < intervals.length; i += 1) {
        // 发生重叠了，保留最小的end，保证给后面留下更多空间
        if (intervals[i][0] < end) {
            ans += 1;
            end = Math.min(intervals[i][1], end);
        }
        // 没发生重叠，则更新end值
        else {
            end = intervals[i][1];
        }
    }
    return ans;
}
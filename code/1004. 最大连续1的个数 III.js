/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
// 滑动窗口：窗口中全是1（算上翻转0的1）
var longestOnes = function(nums, k) {
    let l = 0, r = 0;
    let sum = 0; // 记录窗口内有几个1
    let res = 0;
    const len = nums.length;
    for (; r < len; r += 1) {
        sum += nums[r];
        // 当钱窗口最大宽度超过要求，缩小左边界，知道满足要求
        while (r - l + 1 > sum + k) {
            sum -= nums[l];
            l += 1;
        }
        res = Math.max(res, r - l + 1);
    }
    return res;
};
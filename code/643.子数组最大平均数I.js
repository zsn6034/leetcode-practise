/*
 * @Descripttion: 
 * @Author: zhuangshunan
 * @Date: 2023-06-02 14:29:16
 * @LastEditors: zhuangshunan
 * @LastEditTime: 2023-06-02 14:49:08
 */
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findMaxAverage = function(nums, k) {
    // 滑动窗口解法：时间复杂度O(n)，空间复杂度O(1)
    let sum = 0;
    let len = nums.length;
    for (let i = 0; i < k; i += 1) {
        sum += nums[i];
    }
    let maxSum = sum;
    for (let i = k; i < len; i += 1) {
        sum = sum - nums[i - k] + nums[i];
        maxSum = Math.max(sum, maxSum);
    }
    return maxSum / k;
};

console.log(findMaxAverage([1,12,-5,-6,50,3], 4))
console.log(findMaxAverage([5], 1))

// 示例 1：

// 输入：nums = [1,12,-5,-6,50,3], k = 4
// 输出：12.75
// 解释：最大平均数 (12-5-6+50)/4 = 51/4 = 12.75
// 示例 2：

// 输入：nums = [5], k = 1
// 输出：5.00000
/**
 * @param {number[]} nums
 * @return {number}
 */
// 解法1：左右窗口
// var pivotIndex = function(nums) {
//     let leftSum = 0, rightSum = 0;
//     if (nums.length === 0) return -1;
//     if (nums.length === 1) return 0;
//     const len = nums.length;
//     rightSum = nums.slice(1).reduce((p, c) => p + c);
//     for (let i = 0; i < len; i += 1) {
//         if (leftSum === rightSum) {
//             return i;
//         }
//         if (i !== len - 1) {
//             leftSum += nums[i];
//             rightSum -= nums[i + 1];
//         }
//     }
//     return -1;
// };
// 解法2：前缀和
var pivotIndex = function(nums) {
    let sumLeft = 0, sumRight = nums.reduce((p, c) => p + c, 0);
    for (let i = 0; i < nums.length; i += 1) {
        sumRight -= nums[i];
        // 若左侧元素和等于右侧元素和，返回中心下标 i
        if (sumLeft === sumRight) {
            return i;
        }
        sumLeft += nums[i];
    }
    return -1;
}
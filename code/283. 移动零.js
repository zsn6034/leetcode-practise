/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
// 解法1：单指针，判断非0元素
var moveZeroes = function(nums) {
    const len = nums.length;
    if (len <= 1) return nums;
    // 定义指针
    let now = 0;
    // 对于非0元素，左移
    for (let i = 0; i < len; i += 1) {
        if (nums[i] !== 0) {
            nums[now++] = nums[i];
        }
    }
    // 从指针当前位置到结束，设置为0
    for (let i = now; i < len; i += 1) {
        nums[i] = 0;
    }
    return nums;
};

// 解法2：双指针（快慢指针），交换0和非0元素
// var moveZeroes = function(nums) {
//     const len = nums.length;
//     if (len <= 1) return nums;
//     // 定义指针，慢指针指向当前保存位置，快指针i寻找非0元素
//     let j = 0;
//     for (let i = 0; i < len; i += 1) {
//         if (nums[i] !== 0) {
//             let tmp = nums[i];
//             nums[i] = nums[j];
//             nums[j++] = tmp;
//         }
//     }
//     return nums;
// };

console.log(moveZeroes([0,1,0,3,12]));

// 示例 1:

// 输入: nums = [0,1,0,3,12]
// 输出: [1,3,12,0,0]
// 示例 2:

// 输入: nums = [0]
// 输出: [0]
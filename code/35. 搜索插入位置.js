/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    if (nums.length === 0) {
        return 0;
    }
    for (let i in nums) {
        if (nums[i] >= target) {
            return i;
        }
    }
    return nums.length;
};

// console.log(searchInsert([1,3,5,6], 5));
// console.log(searchInsert([1,3,5,6], 2));
// console.log(searchInsert([1,3,5,6], 7));
console.log(searchInsert([1,3,5,6], 0));
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    // 先排序
    nums.sort((i, j) => i - j);
    const len = nums.length; const res = [];
    for (let i = 0; i < len - 2; i += 1) {
        // 确保固定的第1个元素不重复，比如：第1个元素为-1已经试过了，再遇到第1个元素为-1的就跳过
        if (i > 0 && nums[i] === nums[i - 1]) {
            continue;
        }
        let target = -nums[i];
        // 双指针
        let left = i + 1, right = len - 1;
        while (left < right) {
            // 确保第2个元素不重复
            if (left > i + 1 && nums[left] === nums[left - 1]) {
                left += 1;
                continue;
            }
            let sum = nums[left] + nums[right];
            if (sum === target) {
                res.push([-target, nums[left], nums[right]]);
                left += 1;
            } else if (sum < target) {
                left += 1;
            } else {
                right -= 1;
            }
        }
    }
    return res;
};

console.log(threeSum([-1,0,1,2,-1,-4,-2,-3,3,0,4]));
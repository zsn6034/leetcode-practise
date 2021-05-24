/*
 * @Descripttion: 
 * @Author: zhuangshunan
 * @Date: 2021-05-24 23:15:18
 * @LastEditors: zhuangshunan
 * @LastEditTime: 2021-05-24 23:15:48
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    let res = Number.MIN_SAFE_INTEGER;
    let pre = 0;
    for (let i = 0; i < nums.length; i += 1) {
        pre = Math.max(pre + nums[i], nums[i]);
        res = Math.max(res, pre);
    }
    return res;
};

console.log(maxSubArray([-2,1,-3,4,-1,2,1,-5,4]));
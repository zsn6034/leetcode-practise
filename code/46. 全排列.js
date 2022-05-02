/*
 * @Descripttion: 
 * @Author: zhuangshunan
 * @Date: 2022-05-02 14:50:35
 * @LastEditors: zhuangshunan
 * @LastEditTime: 2022-05-02 15:04:30
 */
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
    return backtrack(nums, []);
};

const backtrack = (nums, track) => {
    // 递归出口
    if (track.length === nums.length) {
        return [track.slice()];
    }
    let res = [];
    for (let i = 0; i < nums.length; i += 1) {
        // 包含者，跳过
        if (track.includes(nums[i])) continue;
        // 加入
        track.push(nums[i]);
        // 递归
        res = res.concat(backtrack(nums, track));
        // 回退
        track.pop();
    }
    return res;
};

console.log(permute([1,2,3]));
// console.log(permute([0,1]));
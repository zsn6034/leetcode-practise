/*
 * @Descripttion: 
 * @Author: zhuangshunan
 * @Date: 2022-04-08 17:13:45
 * @LastEditors: zhuangshunan
 * @LastEditTime: 2022-04-08 17:24:30
 */
var sortArrayByParityII = function(nums) {
    const res = Array.from(nums);
    let even = 0, odd = 1; 
    for (let i = 0; i < nums.length; i += 1) {
        if (nums[i] % 2 === 0) {
            res[even] = nums[i];
            even += 2;
        } else {
            res[odd] = nums[i];
            odd += 2;
        }
    }

    return res;
};

console.log(sortArrayByParityII([4,2,5,7]));
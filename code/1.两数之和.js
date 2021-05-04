// 思路：使用map建立KV关系：
// 假设当前遍历到下标i，则当前map存的是target-nums[i]。
// 每次遍历到j时，先判断map.get(nums[j])是否存在，存在则说明之前已出现过nums[i]使得nums[j]=target-nums[i]
var twoSum = function(nums, target) {
    const map = new Map();
    for (let i = 0; i < nums.length; i += 1) {
        if (map.get(nums[i]) !== undefined) {
            return [map.get(nums[i]), i];
        }
        map.set(target - nums[i], i);
    }
    return undefined;
};

console.log(twoSum([2,7,11,15], 9));
console.log(twoSum([3,2,4], 6));
console.log(twoSum([3,3], 6));
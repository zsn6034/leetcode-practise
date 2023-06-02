/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[][]}
 */
var findDifference = function(nums1, nums2) {
    const set1 = new Set(), set2 = new Set();
    const res1 = [], res2 = [];
    for (let item of nums1) {
        set1.add(item);
    }
    for (let item of nums2) {
        set2.add(item);
    }
    set1.forEach(v => {
        if (!set2.has(v)) {
            res1.push(v);
        }
    });
    set2.forEach(v => {
        if (!set1.has(v)) {
            res2.push(v);
        }
    });
    return [res1, res2];
};

console.log(findDifference([1,2,3], [2,4,6]));
console.log(findDifference([1,2,3,3], [1,1,2,2]));

// 示例 1：

// 输入：nums1 = [1,2,3], nums2 = [2,4,6]
// 输出：[[1,3],[4,6]]
// 解释：
// 对于 nums1 ，nums1[1] = 2 出现在 nums2 中下标 0 处，然而 nums1[0] = 1 和 nums1[2] = 3 没有出现在 nums2 中。因此，answer[0] = [1,3]。
// 对于 nums2 ，nums2[0] = 2 出现在 nums1 中下标 1 处，然而 nums2[1] = 4 和 nums2[2] = 6 没有出现在 nums2 中。因此，answer[1] = [4,6]。
// 示例 2：

// 输入：nums1 = [1,2,3,3], nums2 = [1,1,2,2]
// 输出：[[3],[]]
// 解释：
// 对于 nums1 ，nums1[2] 和 nums1[3] 没有出现在 nums2 中。由于 nums1[2] == nums1[3] ，二者的值只需要在 answer[0] 中出现一次，故 answer[0] = [3]。
// nums2 中的每个整数都在 nums1 中出现，因此，answer[1] = [] 。 
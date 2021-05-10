/*
 * @Descripttion: 
 * @Author: zhuangshunan
 * @Date: 2021-05-10 23:03:37
 * @LastEditors: zhuangshunan
 * @LastEditTime: 2021-05-10 23:13:13
 */
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    let m = nums1.length, n = nums2.length;
    let left = Math.floor((m + n + 1) / 2);
    let right = Math.floor((m + n + 2) / 2);
    // trick：m+n为奇数or偶数，中位数可以取(m+n+1)/2和(m+n+2)/2的平均值
    return (findKth(nums1, 0, nums2, 0, left) + findKth(nums1, 0, nums2, 0, right)) / 2;
};

/**
 * 在nums1数组和nums2数组中，找第k大的数
 * @param {*} nums1 
 * @param {*} i 
 * @param {*} nums2 
 * @param {*} j 
 * @param {*} k 
 * @returns 
 */
var findKth = function(nums1, i, nums2, j, k) {
    // 起始位置大于数组长度，说明该数组已被淘汰，直接取另一个数组的第k个元素
    if (i >= nums1.length) return nums2[j + k - 1];
    if (j >= nums2.length) return nums1[i + k - 1];
    // k为1时，取两个数组中i和j较小者
    if (k === 1) {
        return Math.min(nums1[i], nums2[j]);
    }
    // 找到对应数组的k/2值，不存在时设置为最大整形
    let midVal1 = (i + Math.floor(k / 2) - 1 < nums1.length) ? nums1[i + Math.floor(k / 2) - 1] : Number.MAX_SAFE_INTEGER;
    let midVal2 = (j + Math.floor(k / 2) - 1 < nums2.length) ? nums2[j + Math.floor(k / 2) - 1] : Number.MAX_SAFE_INTEGER;
    // 核心：如果nums1的第k/2个数字小，说明要找的数字肯定不在nums1中的前k/2个数字，所以可以将其淘汰
    // 将nums1的起始位置向后移动K/2个，并且此时的K也自减去K/2
    if (midVal1 < midVal2) {
        return findKth(nums1, i + Math.floor(k / 2), nums2, j, k - Math.floor(k / 2));
    } else {
        return findKth(nums1, i, nums2, j + Math.floor(k / 2), k - Math.floor(k / 2));
    }
};

console.log(findMedianSortedArrays([1,3], [2,4]));
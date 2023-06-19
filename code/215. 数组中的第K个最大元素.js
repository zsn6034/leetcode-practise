/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
// 解法1：快速排序，时间复杂度是O(N)
//快排每次进行完一轮后，总能得到一个数在数组中的最终位置i(我们称这个数为pivot)
//然后比较pivot的下标i与当前第K小的(whichMax=i-left+1代表当前[left,right]中i是第几小的)
//1）whichMax与K相等，直接返回
//2）whichMax大于K，说明太大了，应该在nums[i]左半侧继续寻找，此时寻找[left, i-1]中第K小的
//3）whichMax小于K，说明太小了，应该在nums[i]右半侧继续寻找，此时寻找[i+1, right]中第(K-whichMax)小的
// var findKthLargest = function(nums, k) {
//     return helper(nums, 0, nums.length - 1, nums.length - k + 1);
// };
// const helper = (nums, left, right, k) => {
//     if (left >= right) {
//         return nums[right];
//     }
//     let i = left, j = right;
//     while (i < j) {
//         while (i < j && nums[j] >= nums[left]) {
//             j -= 1;
//         }
//         while (i < j && nums[i] <= nums[left]) {
//             i += 1;
//         }
//         if (i < j) {
//             let tmp = nums[i];
//             nums[i] = nums[j];
//             nums[j] = tmp;
//         }
//     }
//     tmp = nums[i];
//     nums[i] = nums[left];
//     nums[left] = tmp;
//     const whichMax = i - left + 1;
//     if (whichMax === k) {
//         return nums[i];
//     }
//     // 太大了，往前找
//     if (whichMax > k) {
//         return helper(nums, left, i - 1, k);
//     }
//     // 太小了，往后找
//     return helper(nums, i + 1, right, k - whichMax);
// };
// 解法2：堆排序，时间复杂度是O(N*logK)
//维护一个大小为k的堆，当堆中元素少于k时，直接入堆；否则，当堆顶元素小于新元素时，将堆顶元素设置为新元素，并重新整理堆
//因为是最小堆，堆顶元素总是保持最小，堆有k个元素，堆顶元素就是第k大
var findKthLargest = function(nums, k) {
    const heap = new Array(k).fill(0);
    let n = 0,
        len = nums.length;
    // 堆未满，逐个入推
    for (; n<k; n+=1) {
        heap[n] = nums[n];
    }
    // 调整堆
    for (let i = Math.floor(k/2) - 1; i >= 0; i -= 1) {
        minHeapify(heap, i, k - 1);
    }
    // 堆满了，入堆+调整
    for (; n < len; n += 1) {
        if (nums[n] > heap[0]) {
            heap[0] = nums[n];
            minHeapify(heap, 0, k - 1);
        }
    }
    return heap[0];
}
const minHeapify = (heap, start, end) => {
    let dad = start, son = 2 * dad + 1;
    while (son <= end) {
        if (son + 1 <= end && heap[son + 1] < heap[son]) {
            son += 1;
        }
        if (heap[dad] < heap[son]) return;
        let tmp = heap[dad];
        heap[dad] = heap[son];
        heap[son] = tmp;
        dad = son;
        son = dad * 2 + 1;
    }
};
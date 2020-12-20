/*
设计一个找到数据流中第 k 大元素的类（class）。注意是排序后的第 k 大元素，不是第 k 个不同的元素。

请实现 KthLargest 类：

KthLargest(int k, int[] nums) 使用整数 k 和整数流 nums 初始化对象。
int add(int val) 返回当前数据流中第 k 大的元素。
 

示例：

输入：
["KthLargest", "add", "add", "add", "add", "add"]
[[3, [4, 5, 8, 2]], [3], [5], [10], [9], [4]]
输出：
[null, 4, 5, 5, 8, 8]

解释：
KthLargest kthLargest = new KthLargest(3, [4, 5, 8, 2]);
kthLargest.add(3);   // return 4
kthLargest.add(5);   // return 5
kthLargest.add(10);  // return 5
kthLargest.add(9);   // return 8
kthLargest.add(4);   // return 8
 

提示：
1 <= k <= 104
0 <= nums.length <= 104
-104 <= nums[i] <= 104
-104 <= val <= 104
最多调用 add 方法 104 次
题目数据保证，在查找第 k 大元素时，数组中至少有 k 个元素
*/
/*
解题思路：
1. 使用数组来构建一个容量为k的小顶堆。
2. 如果小顶堆满后，再添加元素，那么直接和堆顶元素进行比较。
    2.1 如果大于堆顶元素，则重建堆；
    2.2 如果小于或等于堆顶元素，则忽略。
3. heap[0]就是第k个最大元素
*/

/**
 * @param {number} k
 * @param {number[]} nums
 */
var KthLargest = function(k, nums) {
    this.size = 0;
    this.heap = new Array(k).fill(0);

    for (let num of nums) {
        this.add(num);
    }
};

/** 
 * @param {number} val
 * @return {number}
 */
KthLargest.prototype.add = function(val) {
    if (this.size < this.heap.length) {
        // this.size ++;
        this.heap[this.size++] = val;
        if (this.size === this.heap.length) {
            // 构建小顶堆
            this.makeMinHeap();
        }
    } else {
        if (this.heap[0] < val) {
            // 替换堆顶元素
            this.heap[0] = val;
            // 调整堆
            this.minHeapFixdown(0);
        }
    }
    // 返回堆顶元素，即第k大元素
    return this.heap[0];
};

// 构建堆
KthLargest.prototype.makeMinHeap = function() {
    let len = this.heap.length;
    for (let i = Math.floor((len / 2)) - 1; i >= 0; i--) {
        this.minHeapFixdown(i);
    }
};

// 调整堆
KthLargest.prototype.minHeapFixdown = function(i) {
    let c = i;
    let temp = this.heap[c];
    let subLeft = 2 * c + 1;
    while (subLeft < this.heap.length) {
        let subRight = subLeft + 1;
        if (subRight < this.heap.length && this.heap[subLeft] > this.heap[subRight]) {
            subLeft++;
        }
        if (this.heap[subLeft] > this.heap[c]) {
            break;
        }
        this.heap[c] = this.heap[subLeft];
        this.heap[subLeft] = temp;

        c = subLeft;
        subLeft = 2 * c + 1;
    }
};
/**
 * Your KthLargest object will be instantiated and called as such:
 * var obj = new KthLargest(k, nums)
 * var param_1 = obj.add(val)
 */

let kthLargest = new KthLargest(3, [4,5,8,2]);
console.log(kthLargest.add(3));// return 4
console.log(kthLargest.add(5)); // return 5
console.log(kthLargest.add(10)); // return 5
console.log(kthLargest.add(9)); // return 8
console.log(kthLargest.add(4)); // return 8

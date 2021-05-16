/**
 * Definition for singly-linked list.
 */
function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val);
    this.next = (next === undefined ? null : next);
}

/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
// 方法1：递归
// let m = 0;
// var removeNthFromEnd = function(head, n) {
//     if (!head) return null;
//     head.next = removeNthFromEnd(head.next, n);
//     m += 1;
//     if (m === n) {
//         return head.next;
//     }
//     return head;
// };

// 方法2：快慢指针
// var removeNthFromEnd = function(head, n) {
//     if (!head || !head.next) {
//         return null;
//     }
//     let fast = slow = head;
//     for (let i = 0; i < n; i += 1) {
//         fast = fast.next;
//     }
//     if (!fast) {
//         return head.next;
//     }
//     while (fast.next) {
//         fast = fast.next;
//         slow = slow.next;
//     }
//     slow.next = slow.next.next;
//     return head;
// }

// 方法3：借助map
var removeNthFromEnd = function(head, n) {
    if (!head || !head.next) {
        return null;
    }
    const map = new Map();
    let i = 0;
    let node = head;
    for (; node; node = node.next, i += 1) {
        map.set(i, node);
        // console.log(map.get(i));
    }
    let index = i - n;
    if (index === 0) {
        map.get(0).next = null;
        return map.get(1);
    }
    map.get(index - 1).next = map.get(index + 1);
    return map.get(0);
};

let head = new ListNode(1, new ListNode(2, null));
// console.log(head);
console.log(removeNthFromEnd(head, 2));
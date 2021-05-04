function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val);
    this.next = (next === undefined ? null : next);
}

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    let res = new ListNode(0, undefined);
    const dumpHead = res;
    let carry = 0, sum = 0, val = 0;
    while (l1 && l2) {
        sum = carry + l1.val + l2.val;
        val = sum % 10;
        carry = Math.floor(sum / 10);
        res.next = new ListNode(val, undefined);
        res = res.next;
        l1 = l1.next;
        l2 = l2.next;
    }
    while (l1) {
        sum = carry + l1.val;
        val = sum % 10;
        carry = Math.floor(sum / 10);
        res.next = new ListNode(val, undefined);
        res = res.next;
        l1 = l1.next;
    }
    while (l2) {
        sum = carry + l2.val;
        val = sum % 10;
        carry = Math.floor(sum / 10);
        res.next = new ListNode(val, undefined);
        res = res.next;
        l2 = l2.next;
    }
    if (carry === 1) {
        res.next = new ListNode(carry, undefined);
    }
    return dumpHead.next;
};

var createList = function(arr) {
    let res = new ListNode(0, undefined);
    const dumpHead = res;
    arr.forEach(element => {
        res.next = new ListNode(element, undefined);
        res = res.next;
    });
    return dumpHead.next;
};

var showList = function(l) {
    const res = [];
    while (l) {
        res.push(l.val);
        l = l.next;
    }
    console.log(res);
};

const res = addTwoNumbers(createList([9,9,9,9,9,9,9]), createList([9,9,9,9]));
showList(res);
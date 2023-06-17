/*
 * @Description: 
 * @Author: zhuangshunan
 * @Date: 2023-06-17 14:11:20
 * @LastEditors: zhuangshunan
 * @LastEditTime: 2023-06-17 14:11:34
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
// 解法1：层次遍历
// var rightSideView = function(root) {
//     if (root === null) return [];
//     const queue = [root];
//     const res = [];
//     while (queue.length > 0) {
//         let count = queue.length;
//         while (count > 0) {
//             const node = queue.shift();
//             if (count === 1) {
//                 res.push(node.val);
//             }
//             if (node.left) {
//                 queue.push(node.left);
//             }
//             if (node.right) {
//                 queue.push(node.right);
//             }
//             count -= 1;
//         }
//     }
//     return res;
// };
// 解法2：深度遍历
var rightSideView = function(root) {
    if (root === null) return [];
    const nodeStack = [root];
    const depthStack = [0];
    let maxDepth = -1;
    const res = [];
    while (nodeStack.length > 0) {
        const node = nodeStack.pop();
        const depth = depthStack.pop();
        maxDepth = Math.max(maxDepth, depth);
        if (res[maxDepth] === undefined) {
            res[maxDepth] = node.val;
        }
        if (node.left) {
            nodeStack.push(node.left);
            depthStack.push(depth + 1);
        }
        if (node.right) {
            nodeStack.push(node.right);
            depthStack.push(depth + 1);
        }
    }
    return res;
}
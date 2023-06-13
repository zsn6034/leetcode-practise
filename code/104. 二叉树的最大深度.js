/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
// 解法1：递归1
// var maxDepth = function(root) {
//     if (root === null) return 0;
//     let max = 0;
//     const findMax = (root, height) => {
//         if (root === null) {
//             max = Math.max(height, max);
//             return;
//         }
//         findMax(root.left, height + 1);
//         findMax(root.right, height + 1);
//     }
//     findMax(root, 0);
//     return max;
// };
// 解法2：递归2
// var maxDepth = function(root) {
//     if (root === null) return 0;
//     return 1 + Math.max(maxDepth(root.left), maxDepth(root.right));
// }
// 解法3：层次遍历
var maxDepth = function(root) {
    if (root === null) return 0;
    const queue = [root];
    let level = 0;
    while (queue.length > 0) {
        let count = queue.length;
        while (count > 0) {
            const node = queue.shift();
            if (node.left) {
                queue.push(node.left);
            }
            if (node.right) {
                queue.push(node.right);
            }
            count -= 1;
        }
        level += 1;
    }
    return level;
}

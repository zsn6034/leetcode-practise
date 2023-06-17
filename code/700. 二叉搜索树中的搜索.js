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
 * @param {number} val
 * @return {TreeNode}
 */
// 解法1：递归
// var searchBST = function(root, val) {
//     if (root === null) return null;
//     if (root.val === val) return root;
//     if (val < root.val) {
//         return searchBST(root.left, val);
//     }
//     else {
//         return searchBST(root.right, val);
//     }
// };
// 解法2：递归迭代版
var searchBST = function(root, val) {
    while (root !== null) {
        if (val === root.val) {
            return root;
        }
        root = val < root.val ? root.left : root.right;
    }
    return null;
}
// 解法3：dfs
// var searchBST = function(root, val) {
//     if (root === null) return null;
//     const stack = [root];
//     while (stack.length > 0) {
//         const node = stack.pop();
//         if (node.val === val) return node;
//         if (val < node.val) {
//             if (node.left) {
//                 stack.push(node.left);
//             } else {
//                 return null;
//             }
//         } else {
//             if (node.right) {
//                 stack.push(node.right);
//             } else {
//                 return null;
//             }
//         }
//     }
//     return null;
// }
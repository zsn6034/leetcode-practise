/*
 * @Descripttion: 
 * @Author: zhuangshunan
 * @Date: 2022-05-02 16:27:04
 * @LastEditors: zhuangshunan
 * @LastEditTime: 2022-05-02 16:35:05
 */
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
var minDepth = function(root) {
    if (root === null) return 0;
    // bfs：使用队列
    const queue = [];
    queue.push(root);
    let depth = 1;
    // 外层循环：遍历层数
    while (queue.length > 0) {
        const len = queue.length;
        // 内层循环：遍历当前层
        for (let i = 0; i < len; i += 1) {
            const cur = queue.shift();
            // 找到叶子节点，返回最小深度
            if (cur.left === null && cur.right === null) {
                return depth;
            }
            // 加入子节点（相邻节点）
            if (cur.left) {
                queue.push(cur.left);
            }
            if (cur.right) {
                queue.push(cur.right);
            }
        }
        // 本层遍历结束，深度+1
        depth += 1;
    }
    return depth;
};
/*
 * @Descripttion: 
 * @Author: zhuangshunan
 * @Date: 2022-05-02 16:36:16
 * @LastEditors: zhuangshunan
 * @LastEditTime: 2022-05-02 16:49:43
 */
// https://leetcode-cn.com/problems/open-the-lock/
/**
* @param {string[]} deadends
* @param {string} target
* @return {number}
*/
var openLock = function(deadends, target) {
    const visited = new Set();
    let step = 0;
    // bfs
    const queue = ['0000'];
    // 外层循环
    while(queue.length > 0) {
        const len = queue.length;
        // 内层循环
        for (let i = 0; i < len; i += 1) {
            const cur = queue.shift();
            // 属于死亡锁：跳过
            if (deadends.includes(cur)) continue;
            // 找到目标：返回最小尝试次数
            if (target === cur) return step;
            // 4个转盘，8个相邻节点（每个转盘可以向上or向下拨动）
            for (let j = 0; j < 4; j += 1) {
                const plusStr = plusOne(cur, j);
                // 还未访问过，加入
                if (!visited.has(plusStr)) {
                    queue.push(plusStr);
                    visited.add(plusStr);
                }
                const minusStr = minusOne(cur, j);
                if (!visited.has(minusStr)) {
                    queue.push(minusStr);
                    visited.add(minusStr);
                }
            }
        }
        step += 1;
    }
    // bfs结束未找到，说明无解
    return -1;
};

// 将s[i]向上拨动一次
const plusOne = (s, i) => {
    if (s[i] === '9') {
        return s.replaceAt(i, '0');
    }
    const n = Number(s[i]);
    return s.replaceAt(i, String(n + 1));
};

// 将s[i]向下拨动一次
const minusOne = (s, i) => {
    if (s[i] === '0') {
        return s.replaceAt(i, '9');
    }
    const n = Number(s[i]);
    return s.replaceAt(i, String(n - 1));
};

String.prototype.replaceAt = function(index, replacement) {
    return this.substr(0, index) + replacement + this.substr(index + replacement.length);
};

console.log(openLock(["0201","0101","0102","1212","2002"], '0202'));
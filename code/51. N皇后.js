/*
 * @Descripttion: 
 * @Author: zhuangshunan
 * @Date: 2022-05-02 15:05:28
 * @LastEditors: zhuangshunan
 * @LastEditTime: 2022-05-02 15:53:22
 */
// 串替换字符的第index个位置为replacement
String.prototype.replaceAt = function(index, replacement) {
    return this.substr(0, index) + replacement + this.substr(index + replacement.length);
};

/**
 * @param {number} n
 * @return {string[][]}
 */
var solveNQueens = function(n) {
    // 创建棋盘
    const board = new Array(n).fill('.'.repeat(n));
    // 递归回溯
    return backtrack(board, 0);
};

const backtrack = (board, row) => {
    // 递归出口
    if (row === board.length) {
        return [board.slice()];
    }
    const res = [];
    // 遍历
    for (let col = 0; col < board.length; col += 1) {
        // 该行的第i列不满足条件，跳过
        if (!isValid(board, row, col)) continue;
        // 选择
        board[row] = board[row].replaceAt(col, 'Q');
        // 递归
        res.push(...backtrack(board, row + 1));
        // 回退
        board[row] = '.'.repeat(board.length);
    }
    return res;
};

const isValid = (board, row, col) => {
    // 判断列是否冲突（上方）
    for (let i = 0; i < row; i += 1) {
        if (board[i][col] === 'Q') return false;
    }
    // 判断左上方是否冲突
    for (let i = row, j = col; i >= 0 && j >= 0; i -= 1, j -= 1) {
        if (board[i][j] === 'Q') return false;
    }
    // 判断右上方是否冲突
    for (let i = row, j = col; i >= 0 && j < board.length; i -= 1, j += 1) {
        if (board[i][j] === 'Q') return false;
    }
    return true;
};

console.log(solveNQueens(4));
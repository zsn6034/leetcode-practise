/**
 * @param {character[][]} maze
 * @param {number[]} entrance
 * @return {number}
 */
// 解法1：递归
// var nearestExit = function(maze, entrance) {
//     const [startX, startY] = entrance;
//     let count = 0;
//         res = -1;
//     let visit = new Array(maze.length).fill([]);
//     maze.forEach((row, i) => {
//         visit[i] = new Array(maze[i].length).fill(false);
//     });
//     visit[startX][startY] = true;
// 	// console.log('visit=',visit);
//     const findPath = (list) => {
//         const next = [];
//         while (list.length > 0) {
//             // console.log('list=', list)
//             const [i, j] = list.shift();;
//             if ((i === 0 || j === 0 || i === maze.length - 1 || j === maze[0].length - 1) && (i !== startX || j !== startY)) {
//                 // console.log(`good i = ${i}, j = ${j}`)
//                 res = count;
//                 return;
//             }
//             // console.log(`now i = ${i}, j = ${j}`)
//             if (i - 1 >= 0 && !visit[i - 1][j] && maze[i - 1][j] === '.') {
//                 next.push([i - 1, j]);
//                 visit[i - 1][j] = true;
//             }
//             if (j + 1 < maze[0].length && !visit[i][j + 1] && maze[i][j + 1] === '.') {
//                 next.push([i, j + 1]);
//                 visit[i][j + 1] = true;
//             }
//             if (i + 1 < maze.length && !visit[i + 1][j] && maze[i + 1][j] === '.') {
//                 next.push([i + 1, j]);
//                 visit[i + 1][j] = true;
//             }
//             if (j - 1 >= 0 && !visit[i][j - 1] && maze[i][j - 1] === '.') {
//                 next.push([i, j - 1]);
//                 visit[i][j - 1] = true;
//             }
//         }
//         if (next.length > 0) {
// 			count += 1;
// 			findPath(next);
// 		}
//     };
//     findPath([entrance]);
//     return res;
// };
// 解法2：迭代
var nearestExit = function(maze, entrance) {
    const [startX, startY] = entrance;
    let res = -1;
	const next = [[startX, startY, 0]];
	while (next.length > 0) {
		const [i, j, d] = next.shift();
		if ((i === 0 || j === 0 || i === maze.length - 1 || j === maze[0].length - 1) && (i !== startX || j !== startY)) {
			return d;
		}
		if (i - 1 >= 0 && maze[i - 1][j] === '.') {
			next.push([i - 1, j, d + 1]);
			maze[i - 1][j] = '+';
		}
		if (j + 1 < maze[0].length && maze[i][j + 1] === '.') {
			next.push([i, j + 1, d + 1]);
			maze[i][j + 1] = '+';
		}
		if (i + 1 < maze.length && maze[i + 1][j] === '.') {
			next.push([i + 1, j, d + 1]);
			maze[i + 1][j] = '+';
		}
		if (j - 1 >= 0 && maze[i][j - 1] === '.') {
			next.push([i, j - 1, d + 1]);
			maze[i][j - 1] = '+';
		}
	}
	return -1;
};

// console.log(nearestExit(maze = [["+","+",".","+"],[".",".",".","+"],["+","+","+","."]], entrance = [1,2]));
// console.log(nearestExit([["+","+","+"],[".",".","."],["+","+","+"]],[1,0]));
// console.log(nearestExit([[".","+"]], [0,0]));
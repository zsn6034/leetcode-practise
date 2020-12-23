/**
 * @param {number[][]} rooms
 * @return {boolean}
 */
var canVisitAllRooms = function(rooms) {
    let len = rooms.length;
    let num = [0];
    let vis = new Array(len).fill(false);
    dfs(0, rooms, vis, num);
    console.log(num[0]);
    return num[0] === len;
};

// 深度优先遍历：递归判断能否到达所有房间
function dfs(index, rooms, vis, num) {
    vis[index] = true;
    num[0]++;
    for (let key of rooms[index]) {
        if (!vis[key]) {
            dfs(key, rooms, vis, num);
        }
    }
}

console.log(canVisitAllRooms([[1],[2],[3],[]])); // true
// console.log(canVisitAllRooms([[1,3],[3,0,1],[2],[0]])); // false
// console.log(canVisitAllRooms([[2,3],[],[2],[1,3,1]])); // true
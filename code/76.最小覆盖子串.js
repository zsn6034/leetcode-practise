/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
// 解法1
// var minWindow = function(s, t) {
//     const need = new Map();
//     // 将t中的每个字符设置为key,值为出现的次数
//     for (let c of t) {
//         need.set(c, need.get(c) ? need.get(c) + 1 : 1);
//     }
//     let needType = need.size;
//     let left = 0, right = 0, res = '';
//     while (right < s.length) {
//         const rightChar = s[right];
//         // 遇到t中的字符，将字符数量减1，当该key数量为0时，needType-1
//         if (need.has(rightChar)) {
//             need.set(rightChar, need.get(rightChar) - 1);
//             if (need.get(rightChar) === 0) needType -= 1;
//         }
//         // 找到字符串，开始移动左指针
//         while (needType === 0) {
//             // 获取当前串
//             const curStr = s.substring(left, right + 1);
//             // 保存最小子串
//             res = !res || res.length > curStr.length ? curStr : res;
//             // 左指针当前字符
//             const leftChar = s[left];
//             // 如果左子针当前字符在子串中，那么字符数加+1,因为左子针向右移动时会把当前元素移出去，此时needType ！== 0，跳出，继续移动右指针
//             if (need.has(leftChar)) {
//                 need.set(leftChar, need.get(leftChar) + 1);
//                 if (need.get(leftChar) === 1) needType += 1;
//             }
//             left += 1;
//         }
//         // 移动右指针
//         right += 1;
//     }
//     return res;
// };

// 解法2
var minWindow = function(s, t) {
    const need = new Map();
    const window = new Map();
    for (let c of t) {
        need.set(c, need.get(c) ? need.get(c) + 1 : 1);
    }
    let left = 0, right = 0, valid = 0;
    // 记录最小覆盖子串的起始索引及长度
    let start = 0, len = Infinity;
    while (right < s.length) {
        c = s[right];
        right += 1;
        if (need.has(c)) {
            window.set(c, window.has(c) ? window.get(c) + 1 : 1);
            if (window.get(c) === need.get(c)) {
                valid += 1;
            }
        }
        // 判断左侧窗口是否要收缩
        while (valid === need.size) {
            // 更新最小子串
            if (right - left < len) {
                start = left;
                len = right - left;
            }
            const d = s[left];
            // 缩小窗口
            left += 1;
            // 进行窗口数据的更新
            if (need.has(d)) {
                if (window.get(d) === need.get(d)) {
                    valid -= 1;
                }
                window.set(d, window.get(d) - 1);
            }
        }
    }
    return len === Infinity ? '' : s.substr(start, len);
};


console.log(minWindow('ADOBECODEBANC', 'ABC'));
// console.log(minWindow('A', 'AA'));
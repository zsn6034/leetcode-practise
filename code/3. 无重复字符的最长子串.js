var lengthOfLongestSubstring = function(s) {
    // 方法1：暴力法
    // let n = 0, max = 0, str = '';
    // for (let i = 0; i < s.length; i += 1) {
    //     if (!str.includes(s[i])) {
    //         str += s[i];
    //         n += 1;
    //     } else {
    //         if (n > max) {
    //             max = n;
    //         }
    //         for (let j = i - str.length; j < i; j+= 1) {
    //             if (s[j] === s[i]) {
    //                 str = s.substring(j + 1, i + 1);
    //                 n = str.length;
    //                 break;
    //             }
    //         }
    //     }
    // }
    // if (n > max) {
    //     max = n;
    // }
    // return max;

    // 方法2：滑动窗口法
    // 参考：https://suixinblog.cn/2019/04/leetcode-longest-substring-without-repeating-characters.html#%E8%A7%A3%E9%A2%98%E6%80%9D%E8%B7%AF
    // let map = new Map();
    // let start = 0, max = 0;
    // for (let i = 0; i < s.length; i += 1) {
    //     if (map.get(s[i])) {
    //         start = Math.max(start, map.get(s[i]));
    //     }
    //     max = Math.max(max, i - start + 1);
    //     map.set(s[i], i + 1);
    // }
    // return max;

    // 方法3：滑动窗口法
    const window = new Map();
    for (let i = 0; i < s.length; i += 1) {
        window.set(s[i], 0);
    }
    let left = 0, right = 0, res = 0;
    while (right < s.length) {
        const c = s[right];
        right += 1;
        window.set(c, window.get(c) + 1);
        while (window.get(c) > 1) {
            const d = s[left];
            left += 1;
            window.set(d, window.get(d) - 1);
        }
        res = Math.max(res, right - left);
    }
    return res;
};




console.log(lengthOfLongestSubstring('abcabcbb'));
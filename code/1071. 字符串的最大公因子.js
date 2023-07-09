/**
 * @param {string} str1
 * @param {string} str2
 * @return {string}
 */
// 最大公约数
var gcdOfStrings = function(str1, str2) {
    const len1 = str1.length, len2 = str2.length;
    const target = str1.substring(0, gcd(len1, len2));
    if (check(target, str1) && check(target, str2)) {
        return target;
    }
    return '';
};

const gcd = (a, b) => {
    let remainder = a % b;
    while (remainder !== 0) {
        a = b;
        b = remainder;
        remainder = a % b;
    }
    return b;
};

const check = (t, s) => {
    const len = s.length / t.length;
    let res = '';
    for (let i = 0; i < len; i += 1) {
        res += t;
    }
    return res === s;
};
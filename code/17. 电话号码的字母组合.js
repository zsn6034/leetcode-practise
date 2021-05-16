/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
    const chars = [
        ['a', 'b', 'c'],
        ['d', 'e', 'f'],
        ['g', 'h', 'i'],
        ['j', 'k', 'l'],
        ['m', 'n', 'o'],
        ['p', 'q', 'r', 's'],
        ['t', 'u', 'v'],
        ['w', 'x', 'y', 'z'],
    ];
    return digits ? find(0, '', digits, chars) : [];
};

var find = function(index, str, digits, chars) {
    if (index === digits.length) {
        return [str];
    }
    let res = [];
    const curIndex = Number(digits[index]); // 2
    const curArr = chars[curIndex - 2];
    let curStr = str;
    for (let i = 0; i < curArr.length; i += 1) {
        curStr += curArr[i];
        res = [...res, ...find(index + 1, curStr, digits, chars)];
        curStr = curStr.slice(0, -1);
    }
    return res;
};

console.log(letterCombinations(''));


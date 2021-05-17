/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    let arr = [];
    let len = s.length;
    for (let i = 0; i < len; i += 1) {
        let c = s[i];
        if (c === ')') {
            if (arr.length && arr[arr.length - 1] === '(') {
                arr.pop();
            } else {
                return false;
            }
        }
        else if (c === ']') {
            if (arr.length && arr[arr.length - 1] === '[') {
                arr.pop();
            } else {
                return false;
            }
        }
        else if (c === '}') {
            if (arr.length && arr[arr.length - 1] === '{') {
                arr.pop();
            } else {
                return false;
            }
        }
        else {
            arr.push(c);
        }
    }
    return !arr.length;
};

console.log(isValid('()'));
console.log(isValid('()[]{}'));
console.log(isValid('(]'));
console.log(isValid('([)]'));
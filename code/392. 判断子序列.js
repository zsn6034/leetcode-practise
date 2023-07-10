/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function(s, t) {
    let si = 0,
        ti = 0;
    const slen = s.length, tlen = t.length;
    while (ti < tlen && si < slen) {
        if (s[si] === t[ti]) {
            si++;
        }
        ti++;
    }
	return si === slen;
};
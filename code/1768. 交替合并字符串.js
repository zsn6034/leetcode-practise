/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function(word1, word2) {
    const len1 = word1.length, len2 = word2.length;
    let res = '';
    let i = 0;
    for (; i < len1 && i < len2; i+= 1) {
        res += word1[i] + word2[i];
    }
    const last1 = word1.slice(i);
    const last2 = word2.slice(i);
    if (last1) {
        res += last1;
    }
    if (last2) {
        res += last2;
    }
    return res;
};

console.log(mergeAlternately('ab', 'pqrs'));
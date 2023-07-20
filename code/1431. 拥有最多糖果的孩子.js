/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
var kidsWithCandies = function(candies, extraCandies) {
    const max = candies.reduce((p, c) => p > c ? p : c, 0);
    const res = new Array(candies.length).fill(false);
    for (let i = 0; i < candies.length; i += 1) {
        if (candies[i] + extraCandies >= max) {
            res[i] = true;
        }
    }
    return res;
};
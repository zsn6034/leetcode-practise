/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let left = 0, right = height.length - 1, res = 0;
    while (left < right) {
        let h = Math.min(height[left], height[right]);
        let area = (right - left) * h;
        res = Math.max(res, area);
        if (height[left] > height[right]) {
            right -= 1;
        } else {
            left += 1;
        }
    }
    return res;
};

console.log(maxArea([1,8,6,2,5,4,8,3,7]));
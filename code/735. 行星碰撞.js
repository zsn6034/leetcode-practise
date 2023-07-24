/**
 * @param {number[]} asteroids
 * @return {number[]}
 */
var asteroidCollision = function(asteroids) {
    const stack = [];
    for (const aster of asteroids) {
        let alive = true;
        while (alive && aster < 0 && stack.length > 0 && stack[stack.length - 1] > 0) {
            // aster 是否存在
            alive = stack[stack.length - 1] < -aster;
            // 栈顶行星是否爆炸
            if (stack[stack.length - 1] <= -aster) {
                stack.pop();
            }
        }
        if (alive) {
            stack.push(aster);
        }
    }
    return stack;
};


/*
 * @lc app=leetcode.cn id=735 lang=typescript
 *
 * [735] 行星碰撞
 */

// @lc code=start
function asteroidCollision(asteroids: number[]): number[] {
  let isPositive = false,
    res: number[] = [];
  for (let i = 0; i < asteroids.length; i++) {
    const v = asteroids[i];
    if (!isPositive || v > 0) {
      res.push(v);
      isPositive = v > 0;
    } else {
      let n = res.length;
      while (n--) {
        const target = res[n];
        if (target < 0) {
          res.push(v);
          break;
        }
        if (target < -v) {
          res.pop();
          if (n === 0) {
            res.push(v);
            break;
          }
        } else if (target === -v) {
          res.pop();
          break;
        } else {
          break;
        }
      }
      isPositive = res[res.length - 1] > 0;
    }
  }
  return res;
}
// @lc code=end
// console.log(asteroidCollision([5, 10, -5])); // [5, 10]
// console.log(asteroidCollision([7, 8, -9])); // []
// console.log(asteroidCollision([10, 2, -5])); // [10]
// console.log(asteroidCollision([-2, -1, 1])); // [-2, -1, 1]
// console.log(asteroidCollision([-2, -1, -1, -1])); // [-2, -1, -1, -1]
console.log(asteroidCollision([-4, 3, 4, 2, -3, -5, 4])); // [-4, -5, 4]
console.log(asteroidCollision([1, -1, -2, -2])); // [-2, -2]

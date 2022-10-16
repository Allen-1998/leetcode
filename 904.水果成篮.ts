/*
 * @lc app=leetcode.cn id=904 lang=typescript
 *
 * [904] 水果成篮
 */

// @lc code=start
function totalFruit(fruits: number[]): number {
  let l = 0,
    r1 = 0,
    r2 = 0,
    a = -1,
    b = -1,
    m = 0;
  for (let i = 0; i < fruits.length; i++) {
    const v = fruits[i];
    if (v === a) {
      if (r2 > r1) {
        r1 = i;
      }
    } else if (v === b) {
      if (r1 > r2) {
        r2 = i;
      }
    } else {
      if (a !== -1) {
        l = Math.max(r1, r2);
      }
      if (r1 > r2) {
        b = v;
        r2 = i;
      } else {
        a = b;
        b = v;
        r1 = r2;
        r2 = i;
      }
    }
    m = Math.max(m, i - l + 1);
  }
  return m;
}
// @lc code=end
console.log(totalFruit([1])); // 1
console.log(totalFruit([1, 2])); // 2
console.log(totalFruit([1, 1])); // 2
console.log(totalFruit([1, 2, 1])); // 3
console.log(totalFruit([0, 1, 2, 2])); // 3
console.log(totalFruit([0, 0, 1, 1])); // 4
console.log(totalFruit([1, 2, 3, 2, 2])); // 4
console.log(totalFruit([1, 0, 3, 4, 3])); // 3
console.log(totalFruit([6, 2, 1, 1, 3, 6, 6])); // 3
console.log(totalFruit([3, 3, 3, 1, 2, 1, 1, 2, 3, 3, 4])); // 5
console.log(totalFruit([3, 3, 3, 1, 2, 1, 1, 2, 3, 3, 4])); // 5
console.log(totalFruit([1, 0, 1, 4, 1, 4, 1, 2, 3])); // 5

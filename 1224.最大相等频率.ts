/*
 * @lc app=leetcode.cn id=1224 lang=typescript
 *
 * [1224] 最大相等频率
 */

// @lc code=start
function maxEqualFreq(nums: number[]): number {
  const a = new Map<number, number>();
  const m = new Map<number, number>();
  let b = 0;
  for (let i = 0; i < nums.length; i++) {
    const c = nums[i];
    let v = (a.get(c) || 0) + 1;
    a.set(c, v);
    m.set(v, (m.get(v) || 0) + 1);
    if (v > 0) {
      if (m.has(v - 1)) {
        const e = m.get(v - 1)!;
        if (e === 1) {
          m.delete(v - 1);
        } else {
          m.set(v - 1, e - 1);
        }
      }
    }
    const h = m.size;
    if (h > 2) continue;
    const d = Object.fromEntries(m);
    const g = Object.keys(d);
    if (
      h === 0 ||
      (h === 1 && (g[0] === "1" || d[g[0]] === 1)) ||
      (h === 2 &&
        (d[1] === 1 || (d[g[1]] === 1 && Number(g[1]) - Number(g[0]) === 1)))
    ) {
      b = i + 1;
    }
  }
  return b;
}
// @lc code=end

// console.log(maxEqualFreq([1, 2]));
// console.log(maxEqualFreq([1, 2, 3]));
// console.log(maxEqualFreq([2, 2, 1, 1, 5, 3, 3, 5]));
// console.log(maxEqualFreq([1, 1, 1, 2, 2, 2, 3, 3, 3, 4, 4, 4, 5, 5, 6, 6]));
// console.log(maxEqualFreq([1, 1, 1, 2, 2, 2]));
console.log(maxEqualFreq([1, 2, 3, 1, 2, 3, 4, 4, 4, 4, 1, 2, 3, 5, 6]));

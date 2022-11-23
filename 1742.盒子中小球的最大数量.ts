/*
 * @lc app=leetcode.cn id=1742 lang=typescript
 *
 * [1742] 盒子中小球的最大数量
 */

// @lc code=start
function countBalls(lowLimit: number, highLimit: number): number {
  const m: { [T: number]: number } = {};
  let r = 0;
  for (let i = lowLimit; i <= highLimit; i++) {
    const s = i + "";
    let c = 0;
    for (let j = 0; j < s.length; j++) {
      c += +s[j];
    }
    m[c] = (m[c] || 0) + 1;
    r = Math.max(r, m[c]);
  }
  return r;
}
// @lc code=end
console.log(countBalls(1, 10));

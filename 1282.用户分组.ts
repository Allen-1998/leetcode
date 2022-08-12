/*
 * @lc app=leetcode.cn id=1282 lang=typescript
 *
 * [1282] 用户分组
 */

// @lc code=start
function groupThePeople(groupSizes: number[]): number[][] {
  const m = new Map<number, number[]>();
  for (let i = 0; i < groupSizes.length; i++) {
    const v = groupSizes[i];
    if (m.has(v)) {
      m.set(v, m.get(v)!.concat([i]));
    } else {
      m.set(v, [i]);
    }
  }
  const r: number[][] = [];
  for (const [k, v] of m) {
    const n = v.length / k;
    for (let i = 0; i < n; i++) {
      r.push(v.slice(i * k, (i + 1) * k));
    }
  }
  return r;
}
// @lc code=end
console.log(groupThePeople([2, 1, 3, 3, 3, 2]));

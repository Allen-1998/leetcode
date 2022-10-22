/*
 * @lc app=leetcode.cn id=1235 lang=typescript
 *
 * [1235] 规划兼职工作
 */

// @lc code=start
function jobScheduling(
  startTime: number[],
  endTime: number[],
  profit: number[]
): number {
  const n = startTime.length;
  const list = new Array<Array<number>>();
  for (let i = 0; i < n; i++) list.push([startTime[i], endTime[i], profit[i]]);
  list.sort((a, b) => a[1] - b[1]);
  const f = new Array<number>(n + 10).fill(0);
  for (let i = 1; i <= n; i++) {
    const info = list[i - 1];
    const a = info[0],
      b = info[1],
      c = info[2];
    f[i] = Math.max(f[i - 1], c);
    let l = 0,
      r = i - 1;
    while (l < r) {
      const mid = (l + r + 1) >> 1;
      if (list[mid][1] <= a) l = mid;
      else r = mid - 1;
    }
    if (list[r][1] <= a) f[i] = Math.max(f[i], f[r + 1] + c);
  }
  return f[n];
}
// @lc code=end

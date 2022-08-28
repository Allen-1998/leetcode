/*
 * @lc app=leetcode.cn id=1470 lang=typescript
 *
 * [1470] 重新排列数组
 */

// @lc code=start
function shuffle(nums: number[], n: number): number[] {
  const r: number[] = [];
  for (let i = 0; i < n; i++) {
    r.push(nums[i]);
    r.push(nums[i + n]);
  }
  return r;
}
// @lc code=end
console.log(shuffle([2, 5, 1, 3, 4, 7], 3));

/*
 * @lc app=leetcode.cn id=532 lang=typescript
 *
 * [532] 数组中的 k-diff 数对
 */

// @lc code=start
function findPairs(nums: number[], k: number): number {
  const visited = new Set();
  const res = new Set();
  for (const num of nums) {
    if (visited.has(num - k)) {
      res.add(num - k);
    }
    if (visited.has(num + k)) {
      res.add(num);
    }
    visited.add(num);
  }
  return res.size;
}
// @lc code=end
let nums = [3, 1, 4, 1, 5],
  k = 2;
(nums = [1, 2, 3, 4, 5]), (k = 1);
(nums = [1, 3, 1, 5, 4]), (k = 0);
console.log(findPairs(nums, k));

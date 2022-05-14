/*
 * @lc app=leetcode.cn id=169 lang=typescript
 *
 * [169] 多数元素
 */

// @lc code=start
function majorityElement(nums: number[]): number {
  const n = nums.length;
  const map = new Map();
  for (let i = 0; i < n; i++) {
    const num = nums[i];
    if (map.has(num)) {
      map.set(num, map.get(num) + 1);
    } else {
      map.set(num, 1);
    }
    if (map.get(num) > n / 2) {
      return num;
    }
  }
}
// @lc code=end

let nums = [2, 2, 1, 1, 1, 2, 2];
nums = [3, 2, 3];

console.log(majorityElement(nums));

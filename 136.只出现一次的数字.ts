/*
 * @lc app=leetcode.cn id=136 lang=typescript
 *
 * [136] 只出现一次的数字
 */

// @lc code=start
function singleNumber(nums: number[]): number {
  const map = new Map();
  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    if (map.has(num)) {
      map.delete(num);
    } else {
      map.set(num, 1);
    }
  }
  return map.keys().next().value;
}
// @lc code=end

let nums = [2, 2, 1];
console.log(singleNumber(nums));

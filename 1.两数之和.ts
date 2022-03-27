/*
 * @lc app=leetcode.cn id=1 lang=typescript
 *
 * [1] 两数之和
 */

// @lc code=start
function twoSum(nums: number[], target: number): number[] {
  const numberMap = new Map();
  for (let i = 0; i < nums.length; i++) {
    const diff = target - nums[i];
    if (numberMap.has(diff)) {
      return [numberMap.get(diff), i];
    }
    numberMap.set(nums[i], i);
  }
}
// @lc code=end

const nums = [-3, 4, 3, 90],
  target = 0;
console.log(twoSum(nums, target));

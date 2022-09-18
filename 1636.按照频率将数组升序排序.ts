/*
 * @lc app=leetcode.cn id=1636 lang=typescript
 *
 * [1636] 按照频率将数组升序排序
 */

// @lc code=start
function frequencySort(nums: number[]): number[] {
  const m = new Map();
  for (let i = 0; i < nums.length; i++) {
    const v = nums[i];
    m.set(v, (m.get(v) || 0) + 1);
  }
  nums.sort((a, b) => (m.get(a) === m.get(b) ? b - a : m.get(a) - m.get(b)));
  return nums;
}
// @lc code=end

console.log(frequencySort([1, 1, 2, 2, 2, 3]));
console.log(frequencySort([2, 3, 1, 3, 2]));
console.log(frequencySort([-1, 1, -6, 4, 5, -6, 1, 4, 1]));

/*
 * @lc app=leetcode.cn id=961 lang=typescript
 *
 * [961] 在长度 2N 的数组中找出重复 N 次的元素
 */

// @lc code=start
function repeatedNTimes(nums: number[]): number {
  const map = new Map();
  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    if (map.has(num)) {
      const count = map.get(num) + 1;
      if (count === nums.length / 2) {
        return num;
      }
      map.set(num, count);
    } else {
      map.set(num, 1);
    }
  }
}
// @lc code=end

const nums = [1, 2, 3, 3];
console.log(repeatedNTimes(nums));

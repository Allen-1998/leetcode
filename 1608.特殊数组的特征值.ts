/*
 * @lc app=leetcode.cn id=1608 lang=typescript
 *
 * [1608] 特殊数组的特征值
 */

// @lc code=start
function specialArray(nums: number[]): number {
  nums.sort((a, b) => a - b);
  let a = 0;
  const b = nums.length;
  for (let i = 0; i < b; i++) {
    const c = nums[i],
      d = b - i;
    if (c >= d && (!i || nums[i - 1] < d)) {
      a = d;
      break;
    }
  }
  return a || -1;
}
// @lc code=end
console.log(specialArray([3, 5]));
console.log(specialArray([0, 0]));
console.log(specialArray([0, 4, 3, 0, 4]));
console.log(specialArray([3, 6, 7, 7, 0]));

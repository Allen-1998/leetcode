/*
 * @lc app=leetcode.cn id=905 lang=typescript
 *
 * [905] 按奇偶排序数组
 */

// @lc code=start
function sortArrayByParity(nums: number[]): number[] {
  const res = [];
  for (const num of nums) {
    if (num % 2 === 0) {
      res.unshift(num);
    } else {
      res.push(num);
    }
  }
  return res;
}
// @lc code=end
let nums = [3, 1, 2, 4];
console.log(sortArrayByParity(nums));

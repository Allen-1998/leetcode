/*
 * @lc app=leetcode.cn id=448 lang=typescript
 *
 * [448] 找到所有数组中消失的数字
 */

// @lc code=start
function findDisappearedNumbers(nums: number[]): number[] {
  const arr = new Array(nums.length);
  for (let i = 0; i < nums.length; i++) {
    arr[nums[i] - 1] = true;
  }
  let final = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== true) final.push(i + 1);
  }
  return final;
}
// @lc code=end

let nums = [4, 3, 2, 7, 8, 2, 3, 1];
console.log(findDisappearedNumbers(nums));

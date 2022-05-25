/*
 * @lc app=leetcode.cn id=167 lang=typescript
 *
 * [167] 两数之和 II - 输入有序数组
 */

// @lc code=start
function twoSum(numbers: number[], target: number): number[] {
  let l = 0,
    r = numbers.length - 1;
  while (l < r) {
    const sum = numbers[l] + numbers[r];
    if (sum === target) return [l + 1, r + 1];
    if (sum < target) {
      l++;
    } else {
      r--;
    }
  }
  return [-1, -1];
}
// @lc code=end
let numbers = [2, 7, 11, 15],
  target = 9;
(numbers = [2, 3, 4]), (target = 6);
console.log(twoSum(numbers, target));

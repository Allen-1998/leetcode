/*
 * @lc app=leetcode.cn id=374 lang=typescript
 *
 * [374] 猜数字大小
 */

// @lc code=start
/**
 * Forward declaration of guess API.
 * @param {number} num   your guess
 * @return 	            -1 if num is lower than the guess number
 *			             1 if num is higher than the guess number
 *                       otherwise return 0
 * var guess = function(num) {}
 */

//  @ts-nocheck
function guessNumber(n: number): number {
  let left = 1,
    right = n;
  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    const g = guess(mid);
    if (g === 0) return mid;
    if (g === -1) right = mid - 1;
    else left = mid + 1;
  }
  return -1;
}
// @lc code=end
let n = 10,
  pick = 6;
console.log(guessNumber(n));

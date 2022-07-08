/*
 * @lc app=leetcode.cn id=1217 lang=typescript
 *
 * [1217] 玩筹码
 */

// @lc code=start
function minCostToMoveChips(position: number[]): number {
  let odd = 0;
  let even = 0;
  for (let i = 0; i < position.length; i++) {
    if (position[i] % 2 === 0) {
      even++;
    } else {
      odd++;
    }
  }
  return Math.min(odd, even);
}
// @lc code=end

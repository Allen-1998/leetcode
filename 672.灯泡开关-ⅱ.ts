/*
 * @lc app=leetcode.cn id=672 lang=typescript
 *
 * [672] 灯泡开关 Ⅱ
 */

// @lc code=start
function flipLights(n: number, presses: number): number {
  if (presses === 0) return 1;
  if (n === 1) return 2;
  if (n === 2) return presses === 1 ? 3 : 4;
  return presses === 1 ? 4 : presses === 2 ? 7 : 8;
}
// @lc code=end

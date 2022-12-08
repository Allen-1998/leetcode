/*
 * @lc app=leetcode.cn id=1812 lang=typescript
 *
 * [1812] 判断国际象棋棋盘中一个格子的颜色
 */

// @lc code=start
function squareIsWhite(coordinates: string): boolean {
  return (coordinates[0].charCodeAt(0) + Number(coordinates[1])) % 2 !== 0;
}
// @lc code=end

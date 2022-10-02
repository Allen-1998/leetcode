/*
 * @lc app=leetcode.cn id=777 lang=typescript
 *
 * [777] 在LR字符串中交换相邻字符
 */

// @lc code=start
function canTransform(start: string, end: string): boolean {
  const n = start.length;
  let i = 0,
    j = 0;
  while (true) {
    while (start[i] == "X") i++;
    while (end[j] == "X") j++;
    if (i >= n && j >= n) return true;
    if (i >= n || j >= n) return false;
    if (start[i] != end[j]) return false;
    if (start[i] == "L" && i < j) return false;
    if (start[i] == "R" && i > j) return false;
    i++, j++;
  }
}
// @lc code=end

console.log(canTransform("RXXLRXRXL", "XRLXXRRLX"));

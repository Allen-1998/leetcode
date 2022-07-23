/*
 * @lc app=leetcode.cn id=551 lang=typescript
 *
 * [551] 学生出勤记录 I
 */

// @lc code=start
function checkRecord(s: string): boolean {
  let a = 0,
    l = 0;
  for (let i = 0; i < s.length; i++) {
    const v = s[i];
    if (v === "L") {
      if (l === 2) return false;
      l++;
    } else {
      l = 0;
      if (v === "A") {
        if (a === 1) return false;
        a++;
      }
    }
  }
  return true;
}
// @lc code=end

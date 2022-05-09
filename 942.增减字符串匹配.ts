/*
 * @lc app=leetcode.cn id=942 lang=typescript
 *
 * [942] 增减字符串匹配
 */

// @lc code=start
function diStringMatch(s: string): number[] {
  const n = s.length;
  let res: number[] = [];
  let min = 0;
  let max = n;
  for (let i = 0; i < n; i++) {
    if (s[i] === "I") {
      res.push(min);
      min++;
    } else {
      res.push(max);
      max--;
    }
  }
  res.push(max);
  return res;
}
// @lc code=end

let s = "IDID";
s = "DDI";
console.log(diStringMatch(s));

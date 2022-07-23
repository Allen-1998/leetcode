/*
 * @lc app=leetcode.cn id=984 lang=typescript
 *
 * [984] 不含 AAA 或 BBB 的字符串
 */

// @lc code=start
function strWithout3a3b(a: number, b: number): string {
  let s = "";
  let n = a + b;
  while (n--) {
    const v = s.slice(-2);
    if ((a > b || v === "bb") && v !== "aa") {
      s += "a";
      a--;
    } else {
      s += "b";
      b--;
    }
  }
  return s;
}
// @lc code=end
console.log(strWithout3a3b(4, 1));

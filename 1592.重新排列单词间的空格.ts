/*
 * @lc app=leetcode.cn id=1592 lang=typescript
 *
 * [1592] 重新排列单词间的空格
 */

// @lc code=start
function reorderSpaces(text: string): string {
  let a = 0,
    b = "",
    c: string[] = [];
  for (let i = 0; i < text.length; i++) {
    if (text[i] === " ") {
      a++;
      if (b) {
        c.push(b);
        b = "";
      }
    } else {
      b += text[i];
    }
  }
  if (b) c.push(b);
  let d = "",
    e = c.length - 1,
    f = Math.floor(a / e);
  for (let i = 0; i < e; i++) {
    d += c[i] + "".padStart(f, " ");
    a -= f;
  }
  d += c[e] + "".padStart(a, " ");
  return d;
}
// @lc code=end
console.log(reorderSpaces(" practice   makes   perfect"));

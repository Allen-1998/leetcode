/*
 * @lc app=leetcode.cn id=1410 lang=typescript
 *
 * [1410] HTML 实体解析器
 */

// @lc code=start
function entityParser(text: string): string {
  const map = {
    "&quot;": '"',
    "&apos;": "'",
    "&amp;": "&",
    "&gt;": ">",
    "&lt;": "<",
    "&frasl;": "/",
  };
  return text.replace(/&\w+;/g, (i) => map[i] || i);
}
// @lc code=end
console.log(entityParser("&amp; is an HTML entity but &ambassador; is not."));

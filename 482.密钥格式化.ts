/*
 * @lc app=leetcode.cn id=482 lang=typescript
 *
 * [482] 密钥格式化
 */

// @lc code=start
function licenseKeyFormatting(s: string, k: number): string {
  s = s.replace(/-/g, "").toUpperCase();
  const reg = new RegExp(`(?<=\\w{${s.length % k || k}})(\\w{${k}})`, "g");
  return s.replace(reg, "-$1");
}
// @lc code=end

console.log(licenseKeyFormatting("5F3Z-2e-9-w", 4));

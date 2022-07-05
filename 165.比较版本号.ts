/*
 * @lc app=leetcode.cn id=165 lang=typescript
 *
 * [165] 比较版本号
 */

// @lc code=start
function compareVersion(version1: string, version2: string): number {
  const v1 = version1.split(".").map((v) => parseInt(v));
  const v2 = version2.split(".").map((v) => parseInt(v));
  const len = Math.max(v1.length, v2.length);
  for (let i = 0; i < len; i++) {
    const n1 = v1[i] || 0;
    const n2 = v2[i] || 0;
    if (n1 > n2) {
      return 1;
    } else if (n1 < n2) {
      return -1;
    }
  }
  return 0;
}
// @lc code=end

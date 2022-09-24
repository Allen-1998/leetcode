/*
 * @lc app=leetcode.cn id=97 lang=typescript
 *
 * [97] 交错字符串
 */

// @lc code=start
function isInterleave(s1: string, s2: string, s3: string): boolean {
  if (s1.length + s2.length !== s3.length) return false;
  s1 = " " + s1;
  s2 = " " + s2;
  s3 = " " + s3;
  const len1 = s1.length;
  const len2 = s2.length;
  const len3 = s3.length;
  const dp = new Array(len1).fill(0).map(() => new Array(len3).fill(false));

  dp[0][0] = true;

  for (let k = 1; k < len3; k++) {
    for (let i = 0; i <= k && i < len1; i++) {
      const j = k - i;
      if (j > len2) continue;
      dp[i][k] ||= dp[i][k - 1] && s2[j] === s3[k];
      if (i - 1 >= 0) {
        dp[i][k] ||= dp[i - 1][k - 1] && s1[i] === s3[k];
      }
    }
  }

  return dp[len1 - 1][len3 - 1];
}
// @lc code=end
console.log(isInterleave("aabcc", "dbbca", "aadbcbbcac"));

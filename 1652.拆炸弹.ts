/*
 * @lc app=leetcode.cn id=1652 lang=typescript
 *
 * [1652] 拆炸弹
 */

// @lc code=start
function decrypt(code: number[], kk: number): number[] {
  const len = code.length;

  return code.map((_, i) => {
    let sum = 0;
    let k = kk;
    if (k < 0) {
      while (k < 0) {
        sum += code[i + k < 0 ? i + k + len : i + k];
        k++;
      }
    } else if (k > 0) {
      while (k > 0) {
        sum += code[i + k > len - 1 ? i + k - len : i + k];
        k--;
      }
    }
    return sum;
  });
}
// @lc code=end
let code = [5, 7, 1, 4],
  k = 3;
(code = [1, 2, 3, 4]), (k = 0);
(code = [2, 4, 9, 3]), (k = -2);
console.log(decrypt(code, k));

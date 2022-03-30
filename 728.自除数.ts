/*
 * @lc app=leetcode.cn id=728 lang=typescript
 *
 * [728] 自除数
 */

// @lc code=start
function selfDividingNumbers(left: number, right: number): number[] {
  return Array.from({ length: right - left + 1 }, (_, i) => left + i).filter(
    (i) => {
      const str = String(i);
      let len = str.length;
      while (len--) {
        const cur = str[len];
        if (cur === "0" || i % Number(cur) !== 0) return false;
      }
      return true;
    }
  );
}
// @lc code=end

const left = 1,
  right = 22;
console.log(selfDividingNumbers(left, right));

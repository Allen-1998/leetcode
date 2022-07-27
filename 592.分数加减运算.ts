/*
 * @lc app=leetcode.cn id=592 lang=typescript
 *
 * [592] 分数加减运算
 */

// @lc code=start
function fractionAddition(expression: string): string {
  const a = expression.match(/[+-]?\d+(\/\d+)?/g)!;
  const b = a.map((x) => x.split("/"));
  const c = b.reduce((acc, cur) => acc * (Number(cur[1]) || 1), 1);
  const d = b.reduce(
    (acc, cur) => acc + (Number(cur[0]) / (Number(cur[1]) || 1)) * c,
    0
  );
  if (d === 0) return "0/1";
  let e = Math.min(c, Math.abs(d));
  while (e > 0) {
    if (c % e === 0 && d % e === 0) {
      break;
    }
    e--;
  }
  return `${d / e}/${c / e}`;
}
// @lc code=end

// console.log(fractionAddition("-1/2+1/2"));
// console.log(fractionAddition("-1/2+1/2+1/3"));
console.log(fractionAddition("1/3-1/2"));

/*
 * @lc app=leetcode.cn id=640 lang=typescript
 *
 * [640] 求解方程
 */

// @lc code=start
function sum(arr: string[]) {
  return arr
    .map((v) => {
      if (v.startsWith("+")) {
        return Number(v.slice(1) || 1);
      } else if (v.startsWith("-")) {
        return -Number(v.slice(1) || 1);
      } else {
        return Number(v || 1);
      }
    })
    .reduce((a, b) => a + b, 0);
}
function solveEquation(equation: string): string {
  const [l, r] = equation.split("=");
  const a = l.match(/((^\d*)|(\d+)|([+-]\d*))(?=x)/g) || [];
  const b = r.match(/((^\d*)|(\d+)|([+-]\d*))(?=x)/g) || [];
  const c = sum(a) - sum(b);
  const d = l.match(/[+-]?\d+(?=(\+|\-))/g) || [];
  const x = l.match(/[+-]?\d+$/);
  if (x) {
    d.push(x[0]);
  }
  const e = r.match(/[+-]?\d+(?=(\+|\-))/g) || [];
  const y = r.match(/[+-]?\d+$/);
  if (y) {
    e.push(y[0]);
  }
  const f = sum(e) - sum(d);
  if (c === 0) {
    if (f === 0) {
      return "Infinite solutions";
    }
    return "No solution";
  }
  return `x=${f / c}`;
}
// @lc code=end
console.log(solveEquation("x+5-3+x=6+x-2"));

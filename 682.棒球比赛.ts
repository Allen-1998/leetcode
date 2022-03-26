/*
 * @lc app=leetcode.cn id=682 lang=typescript
 *
 * [682] 棒球比赛
 */

// @lc code=start
function calPoints(ops: string[]): number {
  const arr = [];
  for (const i of ops) {
    switch (i) {
      case "C":
        arr.pop();
        break;
      case "D":
        arr.push(arr[arr.length - 1] * 2);
        break;
      case "+":
        arr.push(arr[arr.length - 1] + arr[arr.length - 2]);
        break;

      default:
        arr.push(Number(i));
        break;
    }
  }
  return arr.reduce((i, x) => i + x);
}
// @lc code=end
const ops = ["5", "2", "C", "D", "+"];
console.log(calPoints(ops));

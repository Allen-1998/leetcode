/*
 * @lc app=leetcode.cn id=927 lang=typescript
 *
 * [927] 三等分
 */

// @lc code=start
function threeEqualParts(arr: number[]): number[] {
  const a = arr.filter((i) => i).length;
  if (a % 3) return [-1, -1];
  let b = a / 3;
  let c = "";
  let r = 0;
  for (let i = arr.length - 1; i >= 0; i--) {
    const v = arr[i];
    c = v + c;
    if (v === 1) {
      b--;
      if (b === 0) {
        r = i;
        b = a / 3;
        break;
      }
    }
  }
  let d = "";
  for (let i = 0; i < arr.length; i++) {
    const v = arr[i];
    if (v === 1 || d) {
      d += v;
      if (d === c) {
      }
    }
  }
}
// @lc code=end

// console.log(threeEqualParts([1, 0, 1, 0, 1]));
// console.log(threeEqualParts([1, 1, 0, 1, 1]));
// console.log(threeEqualParts([1, 1, 0, 0, 1]));
console.log(threeEqualParts([1, 0, 1, 1, 0]));

/*
 * @lc app=leetcode.cn id=927 lang=typescript
 *
 * [927] 三等分
 */

// @lc code=start
function threeEqualParts(arr: number[]): number[] {
  const a = arr.filter((i) => i).length;
  if (a === 0) return [0, arr.length - 1];
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
        break;
      }
    }
  }
  let d = "";
  let l = 0;
  for (let i = 0; i < arr.length; i++) {
    if (i === r) return [-1, -1];
    const v = arr[i];
    if (v === 1 || d) {
      d += v;
      if (d === c) {
        l = i;
        break;
      }
    }
  }
  let e = "";
  for (let i = l + 1; i < r; i++) {
    const v = arr[i];
    if (v === 1 || (e && e !== d)) {
      e += v;
      if (e === d) {
        return [l, i + 1];
      }
    }
  }
  return [-1, -1];
}
// @lc code=end

console.log(threeEqualParts([1, 0, 1, 0, 1]));
console.log(threeEqualParts([1, 1, 0, 1, 1]));
console.log(threeEqualParts([1, 1, 0, 0, 1]));
console.log(threeEqualParts([1, 0, 1, 1, 0]));
console.log(threeEqualParts([1, 1, 0, 0, 1]));
console.log(threeEqualParts([0, 1, 0, 1, 1]));

/*
 * @lc app=leetcode.cn id=954 lang=typescript
 *
 * [954] 二倍数对数组
 */

// @lc code=start
function canReorderDoubled(arr: number[]): boolean {
  if (arr.filter((v) => v).length % 2 !== 0) return false;
  arr.sort((a, b) => Math.abs(b) - Math.abs(a));
  let l = arr.length;
  while (l--) {
    const num = arr[l];
    const x = arr.indexOf(num * 2);
    if (x > -1) {
      arr[l] = arr[x] = 0;
    } else {
      return false;
    }
  }
  return true;
}
// @lc code=end

let arr = [3, 1, 3, 6];
arr = [2, 1, 2, 6];
arr = [4, -2, 2, -4];
// arr = [1, 2, 4, 8];
// arr = [2, 1, 1, 4, 8, 8];
// arr = [1, 2, 4, 16, 8, 4];
// arr = [2, 1, 2, 1, 1, 1, 2, 2];
// arr = [0, 0, 0, 0, 0, 0];
// arr = [-2, -6, -3, 4, -4, 2];
// arr = [1,2,1,-8,8,-4,4,-4,2,-2]
console.log(canReorderDoubled(arr));

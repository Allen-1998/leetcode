/*
 * @lc app=leetcode.cn id=1089 lang=typescript
 *
 * [1089] 复写零
 */

// @lc code=start
/**
 Do not return anything, modify arr in-place instead.
 */
function duplicateZeros(arr: number[]): void {
  let count = 0,
    n = arr.length - 1;
  for (let i = 0; i < n; i++) {
    if (arr[i] === 0) {
      count++;
      n--;
    }
  }
  arr[n + count] = arr[n];
  if (arr[n] === 0 && count > 0 && (count % 2 === 0 || n % 2 === 0)) {
    count--;
    arr[n + count] = 0;
  }
  while (n--) {
    arr[n + count] = arr[n];
    if (arr[n] === 0 && count > 0) {
      count--;
      arr[n + count] = 0;
    }
  }
}
// @lc code=end
// duplicateZeros([
//   9, 9, 9, 4, 8, 0, 0, 3, 7, 2, 0, 0, 0, 0, 9, 1, 0, 0, 1, 1, 0, 5, 6, 3, 1, 6,
//   0, 0, 2, 3, 4, 7, 0, 3, 9, 3, 6, 5, 8, 9, 1, 1, 3, 2, 0, 0, 7, 3, 3, 0, 5, 7,
//   0, 8, 1, 9, 6, 3, 0, 8, 8, 8, 8, 0, 0, 5, 0, 0, 0, 3, 7, 7, 7, 7, 5, 1, 0, 0,
//   8, 0, 0,
// ]);
// duplicateZeros([1, 5, 2, 0, 6, 8, 0, 6, 0]);
// duplicateZeros([1,0,7,2,4,3,1,0,2,6])
duplicateZeros([0, 1, 9, 2, 6, 0, 0, 4, 1, 0]);

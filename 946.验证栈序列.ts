/*
 * @lc app=leetcode.cn id=946 lang=typescript
 *
 * [946] 验证栈序列
 */

// @lc code=start
function validateStackSequences(pushed: number[], popped: number[]): boolean {
  const arr: number[] = [];
  for (let i = 0; i < pushed.length; i++) {
    arr.push(pushed[i]);
    while (arr.length && arr[arr.length - 1] === popped[0]) {
      arr.pop();
      popped.shift();
    }
  }
  return arr.length === 0;
}
// @lc code=end
console.log(validateStackSequences([1, 2, 3, 4, 5], [4, 5, 3, 2, 1]));

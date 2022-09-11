/*
 * @lc app=leetcode.cn id=1598 lang=typescript
 *
 * [1598] 文件夹操作日志搜集器
 */

// @lc code=start
function minOperations(logs: string[]): number {
  let a = 0;
  for (let i = 0; i < logs.length; i++) {
    const b = logs[i];
    if (b === "../") {
      if (a > 0) {
        a--;
      }
    } else if (b === "./") {
    } else {
      a++;
    }
  }
  return a;
}
// @lc code=end
console.log(minOperations(["d1/", "d2/", "../", "d21/", "./"]));

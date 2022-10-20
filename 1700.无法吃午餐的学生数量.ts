/*
 * @lc app=leetcode.cn id=1700 lang=typescript
 *
 * [1700] 无法吃午餐的学生数量
 */

// @lc code=start
function countStudents(students: number[], sandwiches: number[]): number {
  let i = students.indexOf(sandwiches.shift()!);
  while (~i) {
    students.splice(i, 1);
    i = students.indexOf(sandwiches.shift()!);
  }
  return students.length;
}
// @lc code=end
console.log(countStudents([1, 1, 1, 0, 0, 1], [1, 0, 0, 0, 1, 1]));

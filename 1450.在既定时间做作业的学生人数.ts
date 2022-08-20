/*
 * @lc app=leetcode.cn id=1450 lang=typescript
 *
 * [1450] 在既定时间做作业的学生人数
 */

// @lc code=start
function busyStudent(
  startTime: number[],
  endTime: number[],
  queryTime: number
): number {
  return startTime.reduce((a, b, i) => (b <= queryTime && queryTime <= endTime[i] ? a + 1 : a),0);
}
// @lc code=end

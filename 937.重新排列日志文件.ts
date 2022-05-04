/*
 * @lc app=leetcode.cn id=937 lang=typescript
 *
 * [937] 重新排列日志文件
 */

// @lc code=start
function reorderLogFiles(logs: string[]): string[] {
  const l = [];
  const r = [];
  for (const log of logs) {
    if (/ [0-9]/.test(log)) {
      r.push(log);
    } else {
      l.push(log);
    }
  }
  return [
    ...l.sort((a, b) => {
      const i = a.indexOf(" ");
      const j = b.indexOf(" ");
      if (a.slice(i + 1) === b.slice(j + 1)) {
        return a.slice(0, i) < b.slice(0, j) ? -1 : 1;
      }
      return a.slice(i + 1) < b.slice(j + 1) ? -1 : 1;
    }),
    ...r,
  ];
}
// @lc code=end

let logs = [
  "dig1 8 1 5 1",
  "let1 art can",
  "dig2 3 6",
  "let2 own kit dig",
  "let3 art zero",
];
logs = [
  "a1 9 2 3 1",
  "g1 act car",
  "zo4 4 7",
  "ab1 off key dog",
  "a8 act zoo",
  "a2 act car",
];

console.log(reorderLogFiles(logs));

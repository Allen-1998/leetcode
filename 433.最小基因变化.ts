/*
 * @lc app=leetcode.cn id=433 lang=typescript
 *
 * [433] 最小基因变化
 */
// TODO 二刷
// @lc code=start
function minMutation(start: string, end: string, bank: string[]): number {
  const posEnd = bank.indexOf(end); // end在bank中的索引
  if (posEnd === -1) return -1; // end不存在则直接返回-1
  let posStart = bank.indexOf(start); // start在bank中的索引
  if (posStart === -1) {
    // 如果start不存在则向bank中加入start
    bank.push(start);
    posStart = bank.length - 1; // 更新start在bank中的索引
  }

  const n = bank.length;
  const strLen = 8; // 字符长度
  // 0未处理 1可转变 -1不可转变
  const matrix: number[][] = new Array(n)
    .fill(0)
    .map(() => new Array(n).fill(0));
  // 填表
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (matrix[i][j] !== 0) continue; // 已经计算过，无需再计算
      if (i === j) {
        matrix[i][j] = -1; // 字符串i无法变成j
        continue;
      }
      // 计算字符串i与j是否只有一个字母不同
      let diff = 0;
      for (let k = 0; k < strLen && diff <= 1; k++) {
        if (bank[i][k] !== bank[j][k]) diff++;
      }
      const res = diff === 1 ? 1 : -1; // 1可转变 -1不可转变
      matrix[i][j] = matrix[j][i] = res; // 字符串i可以转变为j，反之亦然
    }
  }
  // 是否只相差一个字符
  const isAccessible = (i: number, j: number): boolean => matrix[i][j] === 1;

  const vis = new Set([posStart]); // 已经访问过的字符串
  let minStep = Infinity; // 最少步数minStep
  const dfs = (idx: number, step: number) => {
    if (step > minStep) return; // 剪枝，如果步数超过之前求得的minStep则跳过
    if (idx === posEnd) {
      minStep = Math.min(minStep, step);
      return;
    }
    for (let j = 0; j < n; j++) {
      if (isAccessible(idx, j) && !vis.has(j)) {
        // 如果从idx能到达j，且未访问过，则继续深度遍历
        vis.add(j);
        dfs(j, step + 1);
        vis.delete(j); // 恢复现场
      }
    }
  };
  dfs(posStart, 0);
  if (minStep === Infinity) return -1; // 未找到方法转换为end
  return minStep;
}
// @lc code=end

let start = "AACCGGTT",
  end = "AAACGGTA",
  bank = ["AACCGGTA", "AACCGCTA", "AAACGGTA"];

console.log(minMutation(start, end, bank));

/*
 * @lc app=leetcode.cn id=655 lang=typescript
 *
 * [655] 输出二叉树
 */
class TreeNode {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;
  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
}
// @lc code=start

function printTree(root: TreeNode | null): string[][] {
  if (!root) return [];
  let h = 0;
  const dfs1 = (node: TreeNode | null, depth: number) => {
    if (!node) return;
    dfs1(node.left, depth + 1);
    dfs1(node.right, depth + 1);
    h = Math.max(h, depth);
  };
  dfs1(root, 0);
  const w = Math.pow(2, h + 1) - 1;
  const res: string[][] = Array.from({ length: h + 1 }, () =>
    new Array(w).fill("")
  );
  const dfs2 = (node: TreeNode | null, depth: number, x: number) => {
    if (!node) return;
    res[depth][x] = node.val.toString();
    const v = Math.pow(2, h - depth - 1);
    dfs2(node.left, depth + 1, x - v);
    dfs2(node.right, depth + 1, x + v);
  };
  dfs2(root, 0, Math.floor(w / 2));
  return res;
}
// @lc code=end

const root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(5);
root.left.left = new TreeNode(3);
root.left.left.left = new TreeNode(4);

console.log(printTree(root));
[
  ["", "", "", "", "", "", "", "1", "", "", "", "", "", "", ""],
  ["", "", "", "", "2", "", "", "", "", "", "5", "", "", "", ""],
  ["", "", "3", "", "", "", "", "", "", "", "", "", "", "", ""],
  ["", "4", "", "", "", "", "", "", "", "", "", "", "", "", ""],
];
[
  ["", "", "", "", "", "", "", "1", "", "", "", "", "", "", ""],
  ["", "", "", "2", "", "", "", "", "", "", "", "5", "", "", ""],
  ["", "3", "", "", "", "", "", "", "", "", "", "", "", "", ""],
  ["4", "", "", "", "", "", "", "", "", "", "", "", "", "", ""],
];

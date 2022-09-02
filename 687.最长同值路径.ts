/*
 * @lc app=leetcode.cn id=687 lang=typescript
 *
 * [687] 最长同值路径
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

const getRoot = (arr: Array<number | null>, i: number = 0): TreeNode | null => {
  if (i >= arr.length) return null;
  if (arr[i] === null) return null;
  const node = new TreeNode(arr[i] as number);
  node.left = getRoot(arr, i * 2 + 1);
  node.right = getRoot(arr, i * 2 + 2);
  return node;
};

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
// @lc code=start

function longestUnivaluePath(root: TreeNode | null): number {
  let max = 0;
  const dfs = (root: TreeNode | null) => {
    if (!root) return 0;
    const left = dfs(root.left),
      right = dfs(root.right);
    let left1 = 0,
      right1 = 0;
    if (root.left?.val === root.val) {
      left1 = left + 1;
    }
    if (root.right?.val === root.val) {
      right1 = right + 1;
    }
    max = Math.max(max, left1 + right1);
    return Math.max(left1, right1);
  };
  dfs(root);
  return max;
}
// @lc code=end

const root = new TreeNode(1);
root.right = new TreeNode(1);
root.right.left = new TreeNode(1);
root.right.right = new TreeNode(1);
root.right.left.left = new TreeNode(1);
root.right.left.right = new TreeNode(1);
root.right.right.left = new TreeNode(1);
root.right.right.right = new TreeNode(1);

console.log(longestUnivaluePath(root));

/*
 * @lc app=leetcode.cn id=662 lang=typescript
 *
 * [662] 二叉树最大宽度
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

function widthOfBinaryTree(root: TreeNode | null): number {
  const arr: bigint[][] = [];
  let max = 1n;
  const dfs = (root: TreeNode | null, m: number, n: bigint) => {
    if (!root) return;
    if (arr[m]) {
      arr[m][1] = n;
    } else {
      arr[m] = [n, 1n];
    }
    const v = arr[m][1] - arr[m][0] + 1n;
    if (v > max) {
      max = v;
    }
    dfs(root.left, m + 1, 2n * n);
    dfs(root.right, m + 1, 2n * n + 1n);
  };
  dfs(root, 0, 1n);
  return Number(max);
}
// @lc code=end

let root = new TreeNode(1);
root.left = new TreeNode(3);
root.right = new TreeNode(2);
root.left.left = new TreeNode(5);
root.right.right = new TreeNode(9);
root.left.left.left = new TreeNode(6);
root.right.right.left = new TreeNode(7);
console.log(widthOfBinaryTree(root));

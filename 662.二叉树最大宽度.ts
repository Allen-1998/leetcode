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
let map = new Map<number, number>();
let ans = 0;
function widthOfBinaryTree(root: TreeNode | null): number {
  map.clear();
  ans = 0;
  dfs(root, 1, 0);
  return ans;
}
function dfs(root: TreeNode | null, u: number, depth: number): void {
  if (root == null) return;
  if (!map.has(depth)) map.set(depth, u);
  ans = Math.max(ans, u - map.get(depth) + 1);
  u = u - map.get(depth) + 1;
  dfs(root.left, u << 1, depth + 1);
  dfs(root.right, (u << 1) | 1, depth + 1);
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

/*
 * @lc app=leetcode.cn id=652 lang=typescript
 *
 * [652] 寻找重复的子树
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

function findDuplicateSubtrees(root: TreeNode | null): Array<TreeNode | null> {
  const a = new Map(),
    b: Array<TreeNode | null> = [];
  const dfs = (root: TreeNode | null) => {
    if (!root) return;
    const c = JSON.stringify(root);
    if (a.has(c)) {
      if (a.get(c) === 1) {
        a.set(c, 2);
        b.push(root);
      }
    } else {
      a.set(c, 1);
    }
    dfs(root.left);
    dfs(root.right);
  };
  dfs(root);
  return b;
}
// @lc code=end
const root = new TreeNode(0);
root.left = new TreeNode(0);
root.right = new TreeNode(0);
root.left.left = new TreeNode(0);
root.right.right = new TreeNode(0);
root.left.left.left = new TreeNode(0);
root.left.left.right = new TreeNode(0);
root.right.right.left = new TreeNode(0);
root.right.right.right = new TreeNode(0);
console.log(findDuplicateSubtrees(root));

/*
 * @lc app=leetcode.cn id=654 lang=typescript
 *
 * [654] 最大二叉树
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

function constructMaximumBinaryTree(nums: number[]): TreeNode | null {
  const n = nums.length;
  if (n === 0) return null;
  let max = 0,
    maxIndex = 0;
  for (let i = 0; i < n; i++) {
    let num = nums[i];
    if (num > max) {
      max = num;
      maxIndex = i;
    }
  }
  const root = new TreeNode(max);
  root.left = constructMaximumBinaryTree(nums.slice(0, maxIndex));
  root.right = constructMaximumBinaryTree(nums.slice(maxIndex + 1));
  return root;
}
// @lc code=end

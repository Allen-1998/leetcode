/*
 * @lc app=leetcode.cn id=1305 lang=typescript
 *
 * [1305] 两棵二叉搜索树中的所有元素
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */
// @ts-nocheck
function getAllElements(
  root1: TreeNode | null,
  root2: TreeNode | null
): number[] {
  function parseTree(root: TreeNode | null) {
    return root
      ? [root.val, ...parseTree(root.left), ...parseTree(root.right)]
      : [];
  }
  return [...parseTree(root1), ...parseTree(root2)].sort((a, b) => a - b);
}
// @lc code=end

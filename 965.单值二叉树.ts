/*
 * @lc app=leetcode.cn id=965 lang=typescript
 *
 * [965] 单值二叉树
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 class TreeNode {
     val: number
     left: TreeNode | null
     right: TreeNode | null
     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
         this.val = (val===undefined ? 0 : val)
         this.left = (left===undefined ? null : left)
         this.right = (right===undefined ? null : right)
     }
 }
 */

function isUnivalTree(root: TreeNode | null): boolean {
  if (root == null) return true;
  let val = root.val;
  let left = root.left;
  let right = root.right;
  if (left != null && left.val != val) return false;
  if (right != null && right.val != val) return false;
  return isUnivalTree(left) && isUnivalTree(right);
}
// @lc code=end

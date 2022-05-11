/*
 * @lc app=leetcode.cn id=449 lang=typescript
 *
 * [449] 序列化和反序列化二叉搜索树
 */
// @ts-nocheck
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
// class TreeNode {
//   val: number;
//   left: TreeNode | null;
//   right: TreeNode | null;
//   constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
//     this.val = val === undefined ? 0 : val;
//     this.left = left === undefined ? null : left;
//     this.right = right === undefined ? null : right;
//   }
// }
/*
 * Encodes a tree to a single string.
 */
function serialize(root: TreeNode | null): string {
  if (!root) return "";
  const result = [];
  const preOrder = (root: TreeNode | null) => {
    if (root) {
      result.push(root.val);
      preOrder(root.left);
      preOrder(root.right);
    }
  };
  preOrder(root);
  return result.join(",");
}

/*
 * Decodes your encoded data to tree.
 */
function deserialize(data: string): TreeNode | null {
  if (!data) return null;

  const findSite = (root: TreeNode, n: number) => {
    if (n < root.val) {
      if (root.left) {
        findSite(root.left, n);
      } else {
        root.left = new TreeNode(n);
      }
    } else if (n > root.val) {
      if (root.right) {
        findSite(root.right, n);
      } else {
        root.right = new TreeNode(n);
      }
    }
  };

  const treeData = data.split(",");
  const tree = new TreeNode(+treeData.shift());
  for (let i = 0; i < treeData.length; i++) {
    findSite(tree, +treeData[i]);
  }

  return tree;
}

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */
// @lc code=end

const tree = new TreeNode(
  1,
  new TreeNode(2, new TreeNode(3), new TreeNode(4)),
  new TreeNode(5)
);
console.log(serialize(tree));
console.log(deserialize(serialize(tree)));

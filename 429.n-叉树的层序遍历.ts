/*
 * @lc app=leetcode.cn id=429 lang=typescript
 *
 * [429] N 叉树的层序遍历
 */

// @lc code=start
/**
 * Definition for node.
 * class Node {
 *     val: number
 *     children: Node[]
 *     constructor(val?: number) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.children = []
 *     }
 * }
 */
// TODO 有点菜，以后做
class Node1 {
  val: number;
  children: Node1[];
  constructor(val?: number) {
    this.val = val === undefined ? 0 : val;
    this.children = [];
  }
}

function levelOrder(root: Node1 | null): number[][] {
  if (!root) return [];
  let res: number[][] = [];
  let queue: Node1[] = [root];
  while (queue.length) {
    let len = queue.length;
    let level: number[] = [];
    for (let i = 0; i < len; i++) {
      let node = queue.shift();
      level.push(node.val);
      queue.push(...node.children);
    }
    res.push(level);
  }
  return res;
}
// @lc code=end
let root = new Node1(1);
root.children.push(new Node1(3));
root.children.push(new Node1(2));
root.children.push(new Node1(4));
root.children.push(new Node1(5));
root.children[0].children.push(new Node1(6));
console.log(levelOrder(root));

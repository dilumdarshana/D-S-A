// single node
class TreeNode {
  value: number;
  children: TreeNode[];

  constructor(value: number, children: TreeNode[] = []) {
    this.value = value;
    this.children = children;
  }
}

// create tree structure
const tree = new TreeNode(1, [
  new TreeNode(2, [new TreeNode(4), new TreeNode(5)]),
  new TreeNode(3, [new TreeNode(6), new TreeNode(7)]),
]);

// find target value on the tree using DFS using Stack
const dfs = (node: TreeNode | null, target: number): boolean => {
  if (!node) return false;

  if (node.value === target) return true;

  for (let child of node.children) {
    if (dfs(child, target)) return true;
  }

  return false;
};

// calling this function
const target = 7;
console.log(dfs(tree, target));

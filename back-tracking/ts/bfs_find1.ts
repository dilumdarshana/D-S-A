// create node class
class TreeNode {
  value: number;
  children: TreeNode[];

  constructor(value: number, children: TreeNode[] = []) {
    this.value = value;
    this.children = children;
  }
};

// create a tree
const tree = new TreeNode(1, [
  new TreeNode(2, [new TreeNode(4), new TreeNode(5)]),
  new TreeNode(3, [new TreeNode(6), new TreeNode(7)]),
]);

// find target value on the tree using Queue
const bfs = (node: TreeNode | null, target: number) => {
  if (!node) return false;

  const queue: TreeNode[] = [];

  queue.push(node);

  while (queue.length > 0) {
    const currentNode = queue.shift();

    if (currentNode?.value === target) return true;

    if (currentNode) {
      for (let child of currentNode.children) {
        queue.push(child);
      }
    }
  }

  return false;
};

const target = 3;
console.log(bfs(tree, target));
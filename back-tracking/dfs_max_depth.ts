class TreeNodeM {
  val: number;
  left: TreeNodeM | null;
  right: TreeNodeM | null;

  constructor(val: number, left: TreeNodeM | null, right: TreeNodeM | null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

// create tree structure
const treeM = new TreeNodeM(2, 
  new TreeNodeM(5, new TreeNodeM(3, null, null), null),
  new TreeNodeM(6, null, null),
);

const findMaxDepth = (root: TreeNodeM): number => {
  if (!root) return 0;
  let left = 0;
  let right = 0;

  if (root.left) left = findMaxDepth(root.left);
  if (root.right) right = findMaxDepth(root.right);

  return Math.max(left, right) + 1;
};

// calling this function
console.log(findMaxDepth(treeM));

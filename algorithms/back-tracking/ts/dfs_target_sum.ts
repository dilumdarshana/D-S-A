// base class
class TreeNodeN {
  val: number;
  left: TreeNodeN | null;
  right: TreeNodeN | null;

  constructor(val: number, left: TreeNodeN | null, right: TreeNodeN | null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

// create tree structure
const trees = new TreeNodeN(5,
  new TreeNodeN(4, 
    new TreeNodeN(11,
      new TreeNodeN(7, null, null),
      new TreeNodeN(2, null, null),
    ),
    null),
  new TreeNodeN(8, 
    new TreeNodeN(13, null, null),
    new TreeNodeN(4,
      null, 
      new TreeNodeN(1, null, null),
    )
  )
);

// find target sum
const findTargetSum = (root: TreeNodeN | null, target: number): boolean => {
  if (!root) return false;

  if (root.val === target) return true;

  return findTargetSum(root.left, target - root.val) || findTargetSum(root.right, target - root.val);
};

// calling the function
const target = 22;
console.log(findTargetSum(trees, target));

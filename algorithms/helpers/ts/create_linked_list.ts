namespace ts {
  export class NodeList {
    val: number | null;
    next: NodeList | null;

    constructor(val?: number, next?: NodeList | null) {
      this.val = val === undefined ? null : val;
      this.next = next === undefined ? null : next;
    }
  }
}

function create_linked_list(nums: number[]) {
  const dymmy = new ts.NodeList(0);
  let current = dymmy;

  for (let num of nums) {
    current.next = new ts.NodeList(num);
    current = current.next;
  }

  return dymmy.next
}

console.log(create_linked_list([1,2,3,4,5]));

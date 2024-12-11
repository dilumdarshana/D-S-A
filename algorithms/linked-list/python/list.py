class ListNode:
  def __init__(self, val=0, next=None):
    self.val = val
    self.next = next

class LinkedList:
  size = 0
  head = ListNode | None

  def __init__(self, nums) -> ListNode:
    dummy = ListNode(0)
    current = dummy

    for num in nums:
      current.next = ListNode(num)
      current = current.next

    self.head = dummy.next

  def is_empty(self) -> bool:
    return self.size == 0

  def show_list(self) -> str:
    current = self.head

    result = []
    while (current):
      result.append(str(current.val))
      current = current.next

    return '->'.join(result)

  def remove_middle(self):
    dummy = ListNode(0)
    dummy.next = self.head
    slow = dummy
    fast = self.head

    while fast and fast.next:
      slow = slow.next
      fast = fast.next.next

    slow.next = slow.next.next

    return dummy.next

list = LinkedList([1,2,3,4])

list.remove_middle()

print(list.show_list())

class ListNode:
  def __init__(self, val=0, next=None):
    self.val = val
    self.next = next

class LinkedList:
  def create_linked_list(self, nums: list) -> ListNode:
    dummy = ListNode(0)
    current = dummy

    for num in nums:
      current.next = ListNode(num)
      current = current.next
    
    return dummy.next

  def list_linked_list(self, head: ListNode) -> ListNode:
      current = head

      while current:
          print(current.val)
          current = current.next
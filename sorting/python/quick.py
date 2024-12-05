import math

class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next

def create_linked_list(nums: list) -> ListNode:
    dummy = ListNode(0)
    current = dummy

    for num in nums:
        current.next = ListNode(num)
        current = current.next
  
    return dummy.next

def list_linked_list(head: ListNode):
    current = head

    while current:
        print(current.val)
        current = current.next

class Solution:
    def deleteMiddle(self, head: ListNode | None) -> ListNode | None:
        dummy = ListNode(0)
        dummy.next = head
        slow = dummy
        fast = head

        while fast and fast.next:
            slow = slow.next
            fast = fast.next.next

        # remove the middle node
        slow.next = slow.next.next

        # return new head
        return dummy.next

linkedList = Solution()
head = create_linked_list([1,2,3,4,5])

out = linkedList.deleteMiddle(head)

list_linked_list(out)

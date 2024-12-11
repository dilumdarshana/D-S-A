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
    def addTwoNumbers(self, l1: ListNode | None, l2: ListNode | None) ->  ListNode:
        l, r = 0, 0
        out = ListNode(0)
        current = out
        carry_amount = 0

        while l1 or l2:
            i, j = 0, 0
            if l1:
                i = l1.val if l1 else 0
                l1 = l1.next
            if l2:
                j = l2.val if l2 else 0
                l2 = l2.next
            current_amnt = (i + j + carry_amount)%10
            carry_amount = (i + j + carry_amount)//10
            current.next = ListNode(current_amnt)
            current = current.next

        if carry_amount > 0:
            current.next = ListNode(carry_amount)
        return out.next

    
linkedList = Solution()
head1 = create_linked_list([9,9,9,9,9,9,9])
head2 = create_linked_list([9,9,9,9])
#print(linkedList.addTwoNumbers(head1, head2))
# head = create_linked_list([1,2,3,4,5])

out = linkedList.addTwoNumbers(head1, head2)
list_linked_list(out)

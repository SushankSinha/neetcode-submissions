/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

class Solution {
    /**
     * @param {ListNode} head
     * @return {ListNode}
     */
    reverseList(head) {
        if (!head) return null;
        let res = [];
        let current = head;
        while(current !== null){
            res.push(current.val);
            current = current.next;
        }

        current = head;
        let i = res.length-1;

        while(current !== null){
            current.val = res[i];
            current = current.next;
            i--;
        }
        return head;
    }
}

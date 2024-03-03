/*
A linked list is a linear data structure, Unlike arrays, linked list elements are not stored at a contiguous location. 
It is basically chains of nodes, each node contains information such as data and a pointer to the next node in the chain. 
In the linked list there is a head pointer, which points to the first element of the linked list, and if the list is empty then it simply points to null or nothing.

Operations on Linked List:
    Traversal: We can traverse the entire linked list starting from the head node. If there are n nodes then the time complexity for traversal becomes O(n) as we hop through each and every node.
    Insertion: Insert a key to the linked list. An insertion can be done in 3 different ways; insert at the beginning of the list, insert at the end of the list and insert in the middle of the list.
    Deletion: Removes an element x from a given linked list. You cannot delete a node by a single step. A deletion can be done in 3 different ways; delete from the beginning of the list, delete from the end of the list and delete from the middle of the list.
    Search: Find the first element with the key k in the given linked list by a simple linear search and returns a pointer to this element
*/

class Node {
    constructor(element) {
        this.element = element;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }

    add(element) {
        let node = new Node(element);
        // store current node
        let current;

        // if list is empty, add element and make it head 
        if(this.head === null) {
            this.head = node;
        } else {
            current = this.head;

            // iterate to end of linked list
            while(current.next) {
                current = current.next;
            }

            current.next = node;
        }
        this.size++;
        const elemDetails = {
            size: this.size,
            node,
            head: this.head,
            next: node.next
        }
        console.log(`elemDetails for added ${element}`, elemDetails);
    }
}

const linkedList = new LinkedList();

linkedList.add(20);
linkedList.add(30);
// linkedList.add(40)
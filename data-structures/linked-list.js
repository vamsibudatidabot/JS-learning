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
        if (this.head === null) {
            this.head = node;
        } else {
            current = this.head;

            // iterate to end of linked list
            while (current.next) {
                current = current.next;
            }

            current.next = node;
        }
        this.size++;
    }

    // returns the element in the linked list at a given index
    fetchElementAt(index) {
        // check for valid index
        if (index < 0 || index > this.size) {
            const msg = 'Please enter valid index';
            console.log(msg);
            return -1;
        }

        // init count and current node
        let count = 0;
        let current = this.head;

        // iterate through the list of nodes untill count meets the given index
        while (count < index) {
            current = current.next;
            count++;
        }
        return current;
    }

    // returns all the elements in the linked list
    fetchElements() {
        // init count, elements to return and current node
        let count = 0;
        let elements = [];
        let current = this.head;

        // iterate through the size and capture the element
        while (count < this.size) {
            elements.push(current.element);
            current = current.next;
            count++;
        }
        return { elements, nodes: JSON.stringify(this.head) };
    }

    // inserts element in the linked list at a given index
    insertAt(element, index) {
        // check for valid index
        if (index < 0 || index >= this.size) {
            const msg = 'Please enter valid index';
            console.log(msg);
            return -1;
        }

        // init count and current node
        let count = 0;
        let current = this.head;
        let prev;

        while (count < index) {
            prev = current;
            current = current.next;
            count++
        }
        let node = new Node(element);
        if (index === 0) {
            node.next = this.head;
            this.head = node;
        } else {
            node.next = current;
            prev.next = node;
        }
        this.size++
    }

    push(element) {
        // set current to the head
        let current = this.head;

        // iterate over elements in linked list till pointer reaches last element
        while (current.next) {
            current = current.next;
        }

        // create node and assign it to the previous last element
        let node = new Node(element);
        current.next = node;

        // increase size of linked list
        this.size++;
    }

    // returns the size of list
    getSize() {
        return this.size;
    }
}

const linkedList = new LinkedList();

linkedList.add(10);
linkedList.add(30);
linkedList.add(40);
linkedList.add(50);
linkedList.add(60);
linkedList.add(70);
linkedList.add(80);
console.log(linkedList.fetchElementAt(2))
console.log(linkedList.fetchElements());
linkedList.insertAt(20, 1);
console.log(linkedList.fetchElements());
linkedList.push(100);
console.log(linkedList.fetchElements());
linkedList.push(90);
console.log(linkedList.getSize());
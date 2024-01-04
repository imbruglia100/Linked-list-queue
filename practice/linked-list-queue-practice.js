// Basic implementation of Nodes and Linked List for you to use

class SinglyLinkedNode {
    constructor(val) {
        this.value = val;
        this.next = null;
    }
}

class SinglyLinkedList {
    constructor(head = null) {
        this.head = head;
    }

    addToHead(val){
        let newNode = new SinglyLinkedNode(val)
        if(this.head){
            newNode.next = this.head
        }

        this.head = newNode
    }

    addToTail(val) {
        let newNode = new SinglyLinkedNode(val);

        if (!this.head) {
            this.head = newNode;
            return this.head;
        }

        let curr = this.head;
        while (curr.next) {
            curr = curr.next;
        }

        curr.next = newNode;
        return this.head;
    }

    listLength() {
        // Returns the length of the list
        // Implement in O(n) and in O(1) time complexity

         let counter = 0

        let current = this.head
        while(current){
            counter++
            if(!current.next){
                return counter
            }
            current = current.next
        }



        // Your code here
    }

    sumOfNodes() {
        // Returns the sum of the values of all the nodes
        let counter = 0

        let current = this.head

        while(current){
            counter += current.value
            if(!current.next){
                return counter
            }
            current = current.next
        }

        // Write your hypothesis on the time complexity of this method here
        //O(n)
    }

    averageValue() {
        // Returns the average value of all the nodes

        return this.sumOfNodes() / this.listLength()

        // Write your hypothesis on the time complexity of this method here
        //O(n)
    }

    findNthNode(n) {
        // Returns the node at the nth index from the head
        let index = 0
        let current = this.head

        while(current){

            if(index === n){
                return current
            }

            index++
            current = current.next
        }

        // Write your hypothesis on the time complexity of this method here
    }

    findMid() {
        // Returns the middle node
        // Implement this as a singly linked list then as a doubly linked list
            // How do the implementation for singly and doubly vary if at all?

        let n = Math.floor((this.listLength() - 1) / 2)

        return this.findNthNode(n)

        // Write your hypothesis on the time complexity of this method here
    }


    reverse() {
        // Returns a new reversed version of the linked list
        // Try implementing it by returning a new linked list then returning
        // the original linked list reversed in place
            // Does the time complexity change? How about space complexity?
        const reversed = new SinglyLinkedList()

        let current = this.head

        while(current){
            reversed.addToHead(current.value)
            if(current.next){
                current = current.next
            }else{
                return reversed
            }
        }


        // Write your hypothesis on the time complexity of this method here
    }

    reverseInPlace() {
        // Reverses the linked list in-place

        // Your code here

        // Write your hypothesis on the time complexity of this method here
    }

}

class DoublyLinkedNode {
    constructor(val) {
        this.value = val;
        this.next = null;
        this.prev = null;
    }
}

class DoublyLinkedList {
    constructor(head = null) {
        this.head = head;
        this.tail = head;
    }

    addToTail(val) {
        let newNode = new DoublyLinkedNode(val);

        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
            return this.head;
        }

        this.tail.next = newNode;
        newNode.prev = this.tail;
        this.tail = newNode;

        return this.head;
    }

    findMid() {
        // Returns the middle node
        // Implement this as a singly linked list then as a doubly linked list
            // How do the implementation for singly and doubly vary if at all?

        // Your code here

        // Write your hypothesis on the time complexity of this method here
    }

    reverse() {
        // Returns a new reversed version of the linked list

        // Your code here

        // Write your hypothesis on the time complexity of this method here
    }

    reverseInPlace() {
        // Reverses the linked list in-place

        // Your code here

        // Write your hypothesis on the time complexity of this method here
    }

}

    let list = new SinglyLinkedList();

    list.addToTail(13);
    list.addToTail(21);
    list.addToTail(32);
    list.addToTail(14);
    list.addToTail(53);
    console.log(list.findNthNode(3))


module.exports = {
    SinglyLinkedNode,
    SinglyLinkedList,
    DoublyLinkedNode,
    DoublyLinkedList
}

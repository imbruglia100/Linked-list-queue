const { SinglyLinkedNode } = require("./01-singly-linked-list");

class Queue {

    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    enqueue(val) {
        // Add node to end of queue (linked list)

        const newNode = new SinglyLinkedNode(val);

        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        }else{
            this.tail.next = newNode;
            this.tail = newNode;
        }

        this.length++
        return this.length;

        // Write your hypothesis on the time complexity of this method here
        //O(1)
    }

    dequeue() {
        // Remove node from front of queue (linked list)

        if(!this.tail) return null

        let oldHead = this.head

        if(this.head.next){
            this.head = this.head.next
        } else {
            this.head = null
            this.tail = null
        }
        
        this.length--
        return oldHead.value
        // Write your hypothesis on the time complexity of this method here
        //O(1)
    }

}

module.exports = {
    Queue,
    SinglyLinkedNode
}

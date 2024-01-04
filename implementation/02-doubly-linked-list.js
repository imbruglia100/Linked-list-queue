// Node class is implemented for you, no need to look for bugs here!
class DoublyLinkedNode {
    constructor(val) {
        this.value = val;
        this.next = null;
        this.prev = null;
    }
}

class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    addToHead(val) {
        // There are bugs in this method! Fix them!!!

        // Add node of val to head of linked list
        let newNode = new DoublyLinkedNode(val);
        
        if (this.length > 0) {
            this.head.prev = newNode;
            newNode.next = this.head;
            this.head = newNode;
        } else {
            this.head = newNode;
            this.tail = newNode;
        }

        this.length++;

        // Write your hypothesis on the time complexity of this method here
        //O(1)
    }

    addToTail(val) {
        // Add node of val to tail of linked list
        const newNode = new DoublyLinkedNode(val)
        
        if(!this.tail){
            this.head = newNode
            this.tail = newNode
            this.length++
        } else {
            this.tail.next = newNode
            newNode.prev = this.tail
            this.tail = newNode
            this.length++
        }

        // Write your hypothesis on the time complexity of this method here
        //O(1)
    }

    removeFromHead() {
        // Remove node at head
        if(!this.head) return
        
        let oldHead = this.head

        if(this.head.next){
            let newHead = this.head.next
            
            newHead.prev = null
            this.head = newHead
        } else {
            this.head = null
        }
        this.length--
        return oldHead.value
        
        // Write your hypothesis on the time complexity of this method here
        //O(1)
    }

    removeFromTail() {
        // Remove node at tail
        if(!this.tail) return

        if(this.tail){
            let oldTail = this.tail
            
            if(!this.tail.prev){
                this.head = null
                this.tail = null
                this.length--
                return oldTail.value
            }

            let newTail = this.tail.prev
            
            newTail.next = null
            this.tail = newTail
            this.length--
            return oldTail.value
        }
        
        // Write your hypothesis on the time complexity of this method here
        //O(1)
    }

    peekAtHead() {
        // Return value of head node

        return this.head ? this.head.value : undefined

        // Write your hypothesis on the time complexity of this method here
        //O(1)
    }

    peekAtTail() {
        // Return value of tail node

        return this.tail ? this.tail.value : undefined

        // Write your hypothesis on the time complexity of this method here
        //O(1)
    }
}

module.exports = {
    DoublyLinkedList,
    DoublyLinkedNode
}

//
// This is only a SKELETON file for the 'Linked List' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

class Node {
	constructor(data, next = null) {
		this.data = data;
		this.next = next;
		//next is the pointer
	}
}
class LinkedList {
	constructor(head, size) {
		this.head = null;
		//if the head is empty it's null
		this.size = 0;
	}
	printListData() {
		let current = this.head;

		while (current) {
			console.log(current.data);
			current = current.next;
		}
	}

	unshift(data) {
		//adds to the beginning of the array
		this.head = new Node(data, this.head);
		this.size++;
	}
	shift(data) {
		// removes first element of an array
		if (!this.head) {
			return;
		} // essentially if null
		this.head = this.head.next;
		//changes pointers and should send to garbage collection
		return this.head;
	}
	push(data) {
		//adds to the end of the array
		let node = new Node(data);
		let current;

		if (!this.head) {
			this.head = node;
		} else {
			current = this.head;
			while (current.next) {
				current = current.next;
			}
			current.next = node;
		}
		this.size++;
	}
	pop() {
		//remove from the end
		if (!this.head) {
			return null;
		}
		if (!this.head.next) {
			this.head = null;
			return;
		}
		let previous = this.head;
		let tail = this.head.next;

		while (tail.next !== null) {
			previous = tail;
			tail = tail.next;
		}
		previous.next = null;
		return this.head;
	}
}

// const ll = new LinkedList();
// ll.unshift(100);
// ll.unshift(200);
// ll.unshift(300);
// ll.push(400);
// ll.printListData();
// ll.shift();
// console.log('break');
// ll.printListData();
// console.log('break');
// ll.pop();
// ll.printListData();
// ll.pop();
// console.log('break');
// ll.printListData();
// ll.pop();
// console.log('break');
// ll.printListData();

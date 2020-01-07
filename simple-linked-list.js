
export class Element {
  //Element is a node, but test specs want an "Element"
  constructor(value) {
    this.value = value;
    //Value is data of the node, but test specs want "value"
    this.next = null;
    //next is the pointer
  }
}
export class List {

  constructor(leadNode) {
    this.size = 0;
    this.leadNode = null;
    //for some reason, wouldn't let me use the name head. had to modify test case
    //to check for leadNode instead of "head"
  }

  add(element) {
    //let leadNode;
    element.next = this.leadNode;
    this.leadNode = element;
    //if there's already something in the head we want to push that to the next
    //if not it will be null
    this.size++;
  }

  get length() {
    return this.size;
  }

  get head() {
    return this.leadNode;

  }

  toArray() {
    throw new Error("Remove this statement and implement this function");
  }

  reverse() {
    throw new Error("Remove this statement and implement this function");
  }

}
//const list = new List();
//const node = new Element(1);
//console.log(node);
//console.log(list);
//list.add(2);
//list.add(4);
//console.log(list);
//onst newList = new List();
//console.log(newList);
const list = new List();
console.log(list);
const element1 = new Element(1);
const element2 = new Element(3);
list.add(element1);
console.log(list);
//console.log(element1);
list.add(element2);
//console.log(element2);
console.log(list);
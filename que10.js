

// Write a program to reverse a stack.



class stack {
    constructor(){
        this.item = [];
        this.minNum = [];
    }

    push(s){
        this.item.push(s);
  

    if (this.minNum.length == 0 || s <= this.minNum[this.minNum.length - 1]) {
        this.minNum.push(s);
      }
    }
  
  getMin() {
    if (this.minNum.length == 0)
      return "Empty Stack";
    return this.minNum[this.minNum.length - 1];
  }
}

let st = new stack();
st.push(1);
st.push(5);
st.push(8);
st.push(6);
st.push(0);
console.log(st.getMin());
 
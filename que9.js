// Write a program to reverse a stack.


let s = [];

function addToBottom(x){
  if(s.length == 0){
    s.push(x)
  }
  else{
    let b = s.pop();
    addToBottom(x);
    s.push(b);
  }
}

function reverse(){
  if(s.length > 0){
    let x = s.pop();
    reverse();
    addToBottom(x);
  }
}

s.push(1);
s.push(5);
s.push(5);
s.push(2);

reverse();
console.log(s.join());

 
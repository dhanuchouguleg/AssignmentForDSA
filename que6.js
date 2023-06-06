//Read about infix, prefix, and postfix expressions. Write a program to convert postfix to prefix expression.


function isOperator(symbol)
{

    switch (symbol) {
    case '+':
    case '-':
    case '/':
    case '*':
        return true;
    }
    return false;
}

function postToPre(postExp){
let s = [];
let len = postExp.length;

for(let i=0;i<len;i++){
if(isOperator(postExp[i])){
            let op1 = s[s.length - 1];
            s.pop();
            let op2 = s[s.length - 1];
            s.pop();
          
            let temp = postExp[i] + op2 + op1;
            s.push(temp);
}
else{
         s.push(postExp[i] + "");
}
}
let answer = "";
    while (s.length > 0)
        answer += s.pop();
    return answer;
}

let postExp = "ABC/-AK/L-*";
console.log( postToPre(postExp))
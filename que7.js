//Write a program to convert prefix expression to infix expression.

function isOperator(x)
{
    switch(x)
    {
        case '+':
        case '-':
        case '*':
        case '/':
        case '^':
        case '%':
            return true;
    }
    return false;
}
function preToInfix(preExp)
{
    let s = [];
    let l = preExp.length;
    for(let i = l - 1; i >= 0; i--)
    {
        let c = preExp[i];

        if (isOperator(c))
        {
            let op1 = s[s.length - 1];
            s.pop()
            let op2 = s[s.length - 1];
            s.pop()
            let temp = "(" + op1 + c + op2 + ")";
            s.push(temp);
        }
        else
        {
            s.push(c + "");
        }
    }
    return s[s.length - 1];
}
 
let preExp = "*-A/BC-/AKL";
console.log(preToInfix(preExp))

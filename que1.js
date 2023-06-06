//Write a program to find all pairs of an integer array whose sum is equal to a given number?
function pairsSum(input,len,sum){
    
    for(let i=0;i<len;i++){
      for(let j=i+1;j<len;j++){
        if(input[i]+input[j] === sum){
          console.log("[" +input[i] +","+input[j]+"]")
        }
      }
    }
    
  }
  let input =[ 1, 5, 7, -1, 5 ];
  let len = input.length;
  let sum = 6;
  pairsSum(input,len,sum)
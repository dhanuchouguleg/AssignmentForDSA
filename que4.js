//Write a program to print the first non-repeated character from a string?
function findNonRepeater(string){
  
    for(let i=0;i<string.length;i++){
       
      if (string.indexOf(string.charAt(i),string.indexOf(string.charAt(i))+1) == -1)
         {
             console.log(string[i])
   
             break;
         }
    }
    return
  }
  let string = "Dhanshree";
  findNonRepeater(string)
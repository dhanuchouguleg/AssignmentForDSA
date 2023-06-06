//Write a program to reverse an array in place? In place means you cannot create a new array. You have to update the original array.

let array = [1,2,3,4,5];
let temp;
let len = array.length;
for(let i = 0; i<len/2; i++){
         temp= array[i];
         array[i] = array[len-i-1];
         array[len-i-1] = temp;
      }
      document.write("After reverse array: ");
      for(let i = 0; i<len; i++){
         document.write(array[i] + " ");
         console.log(array[i]);
      }
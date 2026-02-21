// Problem 1:
// Array ka sum nikalo
const arr = [10, 20, 30, 40, 50];
// Method 1
const sum = (arr)=>{
   let total = 0;
   for(let i=0; i < arr.length; i++){
    total += arr[i]
   }
   return total
}
console.log(sum(arr));

// Method 2
let sum2 = arr.reduce((sum,num)=>sum+ num,0)
console.log(sum);




// QNo
// Problem 2:
// Largest number nikalo
const numbers = [5, 12, 8, 20, 3];

function findLargestN(arr){
    let largest = arr[0];
    let indx = arr.indexOf(largest)
    
    for(let i = 0; i < arr.length; i++){
        if(arr[i] > largest){
            largest = arr[i]
        }
    }
   console.log(indx); 
    return largest
};
console.log(findLargestN(numbers));



// Problem 3:
// String reverse karo
// Method 1
const str = "muzaffar";
let reversed = str.split("").reverse().join("");
console.log(reversed);

// Method 2 reversing
function reversing(str){
    let result = ""
    for(let i=str.length-1;i>=0;i--){
         result += str[i]
    }
    return result
};
let res = reversing(str)
console.log(res);


// Method 3
let reverseds = str.split("").reduce((chain,char)=>char+chain);
console.log(reverseds);







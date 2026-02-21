// Day 2: Arrays Deep Dive
// 1. Remove duplicates [1,2,2,3,4,4,5] → [1,2,3,4,5]
let arr = [1,2,2,3,4,4,5];
function removeDuplicates(arr){
    let result = [];
    for(let i=0; i <arr.length; i++){
        if(!result.includes(arr[i])){
            result.push(arr[i]);
        };
    };
    return result;
};

console.log(removeDuplicates(arr));

// 2. Find second largest [10, 5, 20, 8, 15] → 15

let listOfNumber = [10, 5, 20, 8, 15];
function findLargest(arr){
    let largest = -Infinity; // sab se chota num
    let second = -Infinity; // sab se chota nuber
    for(let i=0; i <arr.length; i++){
        if (arr[i] > largest){
            second = largest;
            largest = arr[i];
        }else if(arr[i] > second && arr[i] !== largest){
            second = arr[i]
        }
    };
    return second;
};
console.log(findLargest(listOfNumber));

// method 2 best for beggner
let max = -Infinity
listOfNumber.forEach((num)=> {
    if(num > max) return max = num
})
console.log(max);

// 3. Merge arrays [1,2,3] + [4,5,6] → [1,2,3,4,5,6]
// Method 1 
let arr1 = [1,2,3];
let arr2 = [4,5,6];
function mergeArrays(arr1, arr2) {
    return arr1.concat(arr2);
};
console.log(mergeArrays(arr1,arr2));


// Method 2 
function mergeArray(arr1,arr2){
    return [...arr1,...arr2]
};
console.log(mergeArray(arr1,arr2));

// Method 3 Manual
function mergeArrys(arr1,arr2){
    let result = [];
    for(let i=0; i < arr1.length; i++){
        result.push(arr1[i])
    };

    for(let i=0; i < arr2.length; i++){
        result.push(arr2[i])
    };
    return result;
};
console.log(mergeArrys(arr1,arr2));


// 4. Count vowels in "javascript"
function countVowels(str){
    let count = 0;
    let vowels = ["a","e","i","o","u"];

    for(let i=0; i < str.length; i++){
        let char = str[i].toLowerCase();
        if(vowels.includes(char)){
            count++
        }
    };
    return count;
};
console.log(countVowels("javascript"));

// 5. Check if array is sorted [1,2,3,4,5] → true

function isSorted(arr){
    for(let i=0; i < arr.length; i++){
        if(arr[i] > arr[i + 1]){
            return false
        };
    };
    return true
};
console.log(isSorted([1,2,3,4,5]));


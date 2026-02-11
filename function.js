// Word blanks
// function WordBlanks(myNoun,myAdjective,myVerb,myAdverb){
//     var result = "";
//     result += "The " + myAdjective + " " + myNoun + " " + myVerb + " to the store " + myAdverb;
//     return result  
// }

// console.log(WordBlanks("dog","big","ran","quickly"));
// console.log(WordBlanks("bike","slow","flew","slowly"));



// Write Reusable with Functions
// function reusableFunction() {
//     console.log("Hello World!");
// }
// reusableFunction()
// reusableFunction()

// Passing values to function with Arguments
// function functionWithArgs(a,b) {
//     console.log(a + b);
// }
// functionWithArgs(10,5);



// global Scope and Function
// var myGlobal = 10;
// function fun1(){
//    console.log(myGlobal);
// }
// fun1()]
// console.log(myGlobal);



// Local Scope And Functon
// function myLocalFunc(){
//     var mylocalvar = 5;
//     console.log(mylocalvar);
// }
// myLocalFunc()
// console.log(mylocalvar); // error variable not found


// Global vs Local Scope in Function
// var outerWear = "T-Shirt";
// function myOutfit(){
//     var outerWear = "sweter"
//     return outerWear
// }
// console.log(myOutfit()); // sweter
// console.log(outerWear); T-Shirt


// Return Value from a Function using return keyword
// function timesFive(num){
//     return num * 5
// }
// console.log(timesFive(5));
// console.log(timesFive(2));


// UnderStanding undefined Value from a Function
// var sum = 0;
// function addfive(){
//     sum += 5;
// }  // Not return means Undefied 



// Sum of Multiple Numbers Logic
// var numbers = [0, 1, 2, 3, 4, 5];
// function sumArray(arr){
//     let total = 0;
//     for (let element of arr){
//         total += element
//     }
//     console.log(total);
// }
// sumArray(numbers) 



// Asignment with a return value
// var processed = 0;
// function processedArg(num){
//     return (num + 5) / 3
// }
// processed = processedArg(10);
// console.log(processed);


// Stand In Line    queue and fifo
// function nextInLine(arr,item){
//     arr.push(item) 
//     return arr.shift()
// }
// var testArr = [1,2,3,4,5];
// console.log("Before " + JSON.stringify(testArr));
// console.log(nextInLine(testArr,6));
// console.log("After " + JSON.stringify(testArr));




// Boolean Values
// function returnBooleanValue(){
//     return true
// }



// use Arrow Functions to write concise Anonymous functions
// const magic = ()=> new Date();
// console.log(magic()); // call

// const magic = ()=>{
//     return new Date();
// };
// console.log(magic()); // call



// write Arrow functon with parameter
// const myConcat = (a,b)=> a.concat(b);
// console.log(myConcat([1,2],[3,4]));



// Write higher order Arrow Function
// const realNumberArray = [4,5.6,-9.8,3.14,42,6,8.34,-2];
// const squareList = (arr)=>{
//     const squaredIntegers = arr.filter(num => Number.isInteger(num) && num > 0).map(x=>x *x);
//     return squaredIntegers; 
// };

// const result = squareList(realNumberArray);
// console.log(result);



// Default Args in Functions
// const increament = (num_1,num_2=10)=>{
//       return num_1 + num_2
// }
// console.log(increament(1,33));


// use the rest operator with function operatr
// const sum = (...nums)=>{
//     let total = 0;
//     for(let i=0; i < nums.length; i++){
//         total += nums[i];
//     };
//     return total;
// };
// console.log(sum(1,2,3,4,5));


// Spread Operator to evulate Array in place
// const arr1= ["Jan","Feb","Mar","Apr"];
// let arr2 ;
// (function(){
//     arr2 = [...arr1];
//     arr1[0] ="potato";
// })();
// console.log(arr2);



//use Destructuring Assignment to Assign Variables from Objects
// const voxel = {x:33,y:22,z:11};
// let {x:a,y:b,z:c} = voxel;
// console.log(a);

// const AVG_TEMPERATURES = {
//     today:77.5,
//     tomorrow : 89
// }

// function getTemperatureOfTomorrow(AVG_T){
//     "use strict"
//     let {tomorrow:tempOfTomorrow} = AVG_T;
//     return tempOfTomorrow
// };
// console.log(getTemperatureOfTomorrow(AVG_TEMPERATURES));




//  Destructuring Assignment with Nested Object
// const LOCALFORCAST = {
//     today: {min:12,max:34},
//     tomorrow: {min:22,max:24.4}
// }

// function getTomForcast(forcast){

//     let {tomorrow:{max:forcastOFTom}} = forcast;
//    return forcastOFTom
// };
// console.log(getTomForcast(LOCALFORCAST));



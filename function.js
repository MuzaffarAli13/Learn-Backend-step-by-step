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


// Use Conditional Logic with If Statements
// function trueOrFalse(wasThatTrue){
//     if (wasThatTrue){
//         return "Yes That was True"
//     }
//     return "No That was false"
// }
// console.log(trueOrFalse(true));



// Equality Operators
// function testEqual(val) {
//     if(val == 12){
//         return "Equal"
//     }
//     return "Not Equal"
// }
// console.log(testEqual(10));


// Strict Equality 
/*
3 === 3
3 === "3"
*/

// function testEqual(val) {
//     if(val === 12){
//         return "Equal"
//     }
//     return "Not Equal"
// }
// console.log(testEqual("12"));


// Practice Comparing Different Values
// function PracticeComparing(a,b){
//     if(a === b){
//         return "Equal"
//     }
//     return "Not Equal"
// }

// console.log(PracticeComparing(10,"10"));



// Ineqaulity Operator 
// function Ineqaulity(value){
//     if(value != 99){ // Not Equal to
//         return "Not Equal"
//     }
//     return "Equal"
// }

// console.log(Ineqaulity(9));


// Comparision with strict inequality 
// function Ineqaulity(value){
//     if(value !== 99){ // Not Equal to
//         return "Not Equal"
//     }
//     return "Equal"
// }

// console.log(Ineqaulity("99"));


// Comparision with the Logicl And Operator
// function testGreaterThen(val){
//     if(val > 100){
//         return "Over 100";
//     }
//     if(val > 10){
//         return "Over 10";
//     }
//     return "10 or under"
// }
// console.log(testGreaterThen(10));



// greater Than or equal to 
// function testGreaterThanAndEqualto(val){
//     if (val >= 20) {
//         return "20 or Over"
//     }

//     if (val >= 10) {
//         return "10 or Over"
//     }
//     return "Less than 10"
// }
// console.log(testGreaterThanAndEqualto(10));


// lessthan operator
// function testLessThan(val){
//     if(val < 25){
//         return "uder 25";
//     }
//     if(val < 55){
//         return "under 55";
//     }
//     return "Above 55"
// }
// console.log(testLessThan(78));



// lessthan or Equal operator
// function testLessOrEqual(val){
//     if(val <= 25){
//         return "uder 25";
//     }
//     if(val <= 55){
//         return "under 55";
//     }
//     return "More 55"
// }
// console.log(testLessOrEqual(25));



// And operator
// function testLogicalAnd(val){
//     if(val <= 50 && val >= 25){
//         return "Yes"
//     }
//     return "Not"
// }
// console.log(testLogicalAnd(26));



// Logical OR operator
// function testlogicalOr(val){
//     if(val <= 10 || val >= 20){
//         return "Outside"
//     }
//     return "InSide"
// }
// console.log(testlogicalOr(12));




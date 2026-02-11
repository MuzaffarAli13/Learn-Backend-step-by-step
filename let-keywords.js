// Deffrent Between Var and Let Keywords
// var myName = "Muzaffar";
// var myName = "Ali";
// console.log(myName);

// let myName = "Muzaffar";
// myName = "Ali";
// console.log(myName);



// Compare Scopes of The  var and Let  Keywords
// function blockScopes(){
//     // let i = "function scope";
//     if(true){
//         let i = "block Scope"
//         console.log(i);
//     }
//     console.log(i);
    
// }

// blockScopes()



// Declare a Read-Only variable with a const keyword
// function printManyTimes(str){
    
//     const SENTENCE = str + " is cool";

//     for(let i=0; i < str.length; i +=2){
//         console.log(SENTENCE);
//     }
// };
// printManyTimes("freecodecamp")




// Mutate an Array Declared With const
// const s = [5,6,7];
// function editInPlace(){
//     // s = [1,2,3]; 
//     s[0] = 1;
//     s[1] = 2;
//     s[2] = 3;
// }

// editInPlace();
// console.log(s);




// Prevent Object mutation
// function freezeObj(){
//     'use strict'
//     const MATH_CONSTANT = {
//         PI : 3.14
//     };
//     //  strict
//     Object.freeze(MATH_CONSTANT)   // this line is important
//     try{
//         MATH_CONSTANT.PI = 99 
//     }catch(error){
//         console.log(error);
//     };
//     return MATH_CONSTANT.PI;
// }
// let PI = freezeObj()
// console.log(PI);





// Comments
// There Are 2 types of Comments in JavaScript
// 1:    in line Comment => //
// 2: MultiPle Lines Comment like this -< /* here   */




// Data Types :
// there are 5/6 Data Types In JavaScript
//  Undefine , null , string, number , object,boolean,symbol



// Variables 
// Declare 
// var name ;
// // Assign Value
// name = "Muzaffar";


// var a = (true + true) - false;
// a += true 
// console.log(a);

// "use strict"
// // String
// var a = "khan";
// a[0] = "Muzaffar";
// console.log(a);



// let a = "khan";
// console.log(a[0]);

// // "use strcit";

// a = 123;
// const a = 456;
// console.log(a);



// count down timer 

// for(let i=10; i >0 ; i--){
//    console.log(i);
// };

// let count = 10;
// while(count > 0){
//     console.log(count);
//     count--
// }


// let numbers = [10,9,8,7,6,5,4,3,2,1,0];
// for (let index = numbers; index >0 ; index--) {
//    console.log(index);
// }


// let data = 
//     {
//         "name":"Mzaffar",
//         "age":"20",
//         "caste":"kalwar",
//     }
// let {name:naam} = data;
// naam = "khan";
// console.log(naam);



// const FRIENDS_LIST = {
//     "10":[{
//         name:"Ayaz",
//         age:10,
//         caste:"kalwar"
//     },
//     {
//         name:"Afzal",
//         age:10,
//         caste:"kalwar",
//     }
// ],
// "15":[
//     {
//         name:"kashif",
//         age:15,
//         caste:"kalwar"
//     },
//     {
//         name:"sheeraz",
//         age:15,
//         caste:"kalwar"
//     }
// ],
// 20:[
//     {
//         name:"hadi",
//         age:24,
//         caste:"Seelro"
//     },
//     {
//         name:"parveez",
//         age:30,
//         caste:"Bhuto"
//     },
//     {
//         name:"ubaid",
//         age:20,
//         caste:"Panjabi"
//     },
// ]
    
// }
// FRIENDS_LIST["10"][0].name = "Muzaffar"
// console.log(FRIENDS_LIST["10"][0].name);



// Data


// const SHOPING_LIST = [];


// SHOPING_LIST.unshift("Apples","Bannas","Mangos");
// let item_removed = SHOPING_LIST.pop();
// console.log(item_removed);
// console.log(SHOPING_LIST);

// let con = SHOPING_LIST.concat("Khan")




// Quiz
// let a = 5;
// let b = ++a;
// console.log(a + b);


// let x = 5 /2;
// console.log(typeof(x)); Number



// let name = "muzaffar";

// function logIn(val){
   
//     return val === name? "LoggedIn" : "WrongName";
// };

// console.log(logIn("Muzaffar"));




// function checkVal(val){
//      let answer = "";
//     switch(val){
//         case 1:
//         case 2:
//         case 3:
//             answer = "Low";
//             break;
//         case 4:
//         case 5:
//         case 6:
//             answer = "Mid";
//             break;
//         case 7:
//         case 8:
//         case 9:
//             answer = "high";
//             break;
//         default :
//              answer = "Try Again";
//              break;
//     }
//     return answer
// };
// console.log(checkVal(8));

let  my_data = [
    {
    name:"Muzaffar",
    id:"828392",
    score:90
    },
     {
    name:"khan",
    id:"8392",
    score:97
    },
     {
    name:"Zaffar",
    id:"828",
    score:97
    },

]

let data = ()=>{
    let res = my_data
   return res.length > 0 ? res : "Data Not Found" ; 
};

console.log(data());


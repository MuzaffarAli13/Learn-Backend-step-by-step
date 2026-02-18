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

// let  my_data = [
//     {
//     name:"Muzaffar",
//     id:"828392",
//     score:90
//     },
//      {
//     name:"khan",
//     id:"8392",
//     score:97
//     },
//      {
//     name:"Zaffar",
//     id:"828",
//     score:97
//     },

// ]

// let data = ()=>{
//     let res = my_data
//    return res.length > 0 ? res : "Data Not Found" ; 
// };

// console.log(data());


// TAsks
//  Task 1 — Variables & Data Types
let dashes = "----------------------------";

// let myData = {
//     name:"Muzaffar",
//     age:20,
//     city:"Ghotki"
// };

// console.log(`My name is ${myData.name}\nmy age is ${myData.age}\nand my city is ${myData.city}`);


// let fruits = ["Apple","Orange","Bananas"];
// console.log(fruits[2]);

// console.log(dashes);


// //  Task 2 — Conditions
// let temperature = 30;
// if(temperature > 35){
//     console.log("Bohot garmi hai!");
// }else if(temperature > 20){
//     console.log("Mausam theek hai");
// }else{
//     console.log("Thand hai!"); 
// }

// console.log(dashes);


// //  Task 3 — Loops
// // Method 1
// const cities = ["Karachi", "Lahore", "Islamabad", "Peshawar", "Quetta"];
// let count = 1;
// for (const element of cities) {
//     console.log(`${count}: ${element}`);
//     count++
// }
// console.log(dashes);

// // Method 2 easy
// for(let i=0 ; i <cities.length; i++){
//     console.log(`${i+1}: ${cities[i]}`);
// }


// console.log(dashes);

// // Task 4 — Functions
// function calculateBill(itemName, price, quantity){
//     return `${itemName} ki total bill: ${(price * quantity)}`
// }
// console.log(calculateBill("chai",100,1));
// console.log(calculateBill("roti",100,2));
// console.log(calculateBill("biryani",160,3));

// console.log(dashes);


// //  Task 5 — Sab Mila Kar (Final Task) ⭐
// const students = [
//   { name: "Ali", marks: 90 },
//   { name: "Sara", marks: 45 },
//   { name: "Ahmed", marks: 72 },
//   { name: "Zara", marks: 60 },
//   { name: "Bilal", marks: 33 }
// ];

// function checkGrade(marks){

//     if(marks >= 80){
//         return "A Grade"
//     }else if(marks >=60 && marks <= 79){
//         return "B Grade"
//     }else if(marks >=40 && marks <= 59){
//         return "C Grade"
//     }else{
//        return "fail"
//     }

// };
// for(let i=0 ; i < students.length;i++){
//    let res =  checkGrade(students[i].marks)
//    console.log(`${students[i].name} Grade ${res}`);
// }





// const fruits = ["mango", "apple", "banana"];

// // old (loop)
// // for (let i = 0; i < fruits.length; i++) {
// //     console.log(fruits[i]);
// // }

// // new way — forEach
// fruits.forEach((fruit)=>{
//     console.log(fruit);
// })



// String Methods
// const STR = "Hello World javaScirpt";
// console.log("length ", STR.length);
// console.log("toLowerCase ", STR.toLowerCase());
// console.log("toUpperCase ", STR.toUpperCase());
// console.log("includes ", STR.includes("World"));
// console.log("slice ", STR.slice(0,5));
// console.log("indexOf", STR.indexOf("java"));
// console.log("replace", STR.replace("World","Pakistan"));
// console.log("split — array mein todna ",STR.split(" "));
// let word = "           hello   "
// console.log("trim — spaces hatao ",word.trim());



// Topic 4 — Math Object
// let random = Math.floor(Math.random() * 10) + 1;
// console.log(random);


// SCOPE — variable kahan accessible hai

// // Global Scope — poore code mein accessible
// let globalVar = "Main global hun";

// function testScope() {
//     // Local Scope — sirf is function mein
//     let localVar = "Main local hun";
//     console.log(globalVar); // ✅ accessible
//     console.log(localVar);  // ✅ accessible
// }

// testScope();
// // console.log(localVar); // ❌ Error! bahar accessible nahi

// // Block Scope — let/const sirf {} ke andar
// if (true) {
//     let blockVar = "Main block mein hun";
//     console.log(blockVar); // ✅
// }
// // console.log(blockVar); // ❌ Error!

// // HOISTING — var upar uth jaata hai
// console.log(myVar); // undefined — error nahi ata!
// var myVar = "hello";

// // let/const hoist nahi hote properly
// // console.log(myLet); // ❌ Error — ReferenceError
// // let myLet = "hello";



//  Topic 6 — Closures
// Closure — function ke andar function
// andar wala function bahar wale ka variable yaad rakhta hai

// function counter() {
//     let count = 0; // yeh variable closure mein band hai

//     return function() {
//         count++;
//         console.log("Count:", count);
//     };
// }

// const increment = counter();
// increment(); // Count: 1
// increment(); // Count: 2
// increment(); // Count: 3


// Bank 
// function bankAccount(initialBalance){
//     let balance = initialBalance;
//     console.log(balance);
    
//     return {
//         deposit : function (amount){
//             balance += amount
//             console.log(`Deposit: ${amount} | Balance: ${balance}`);
//         },
//         withdraw: function(amount){
//            if (amount > balance){
//              console.log("infussinat balance");
//            }else{
//              balance -= amount
//             console.log(`WithDraw: ${amount} | Balance: ${balance}`);
//            }
//         }
//     }
    
// }

// let myAccount = bankAccount(100)
// myAccount.deposit(100)
// myAccount.withdraw(500)


// Topic 7 — Error Handling (try/catch)
// try{
//     let obj = null
//     console.log(obj.name);
// }
// catch(error){
//    console.log(error.message);
// }finally{
//     console.log("good");
    
// }


// // Custom Error throw karna
// function deivide(a,b){
//     if (b === 0){
//         throw new Error("Zero Not Divieded y 10")
//     }
//     return a / b
// }
// try{
//     console.log(deivide(10,0));
// }catch(error){
//     console.log(error.message);
// }


// Topic 8 — ES6+ Modern Features
// 1. Optional Chaining ?.
// const user = {
//     name:"Muzaffar",
//     address:{
//         city:"karachi"
//     }
// };
// console.log(user.address?.city);
// console.log(user.phone?.number);



// 2. Nullish Coalescing ??
// let username = null;
// console.log(username ?? "Guest");   // Guest
// let loggedIn = "Muzaffar";
// console.log(loggedIn ?? "Guest");   // Muzaffar



//  3. Short Circuit Evaluation
// let isLoggedIn = true;
// isLoggedIn && console.log("Welcom");

// let isAdmin = false
// isAdmin || console.log("Acces Denai");

// // 4. Array/Object Destructuring (recap)
// const [first, , third] = [10, 20, 30];
// console.log(first, third); // 10 30

// const { name, age = 25 } = { name: "Sara" };
// console.log(name, age); // Sara 25 (default value)



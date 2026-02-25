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


//  PAPER — Complete Questions 
// Section A — Operators
// Q1. Do numbers lo a = 15, b = 4 aur yeh sab print karo: addition, subtraction, multiplication, division, remainder aur power.
// let a = 15 , b = 4
// console.log(a + b);
// console.log(a - b);
// console.log(a * b);
// console.log(a ** b);
// console.log(a / b);
// console.log(a % b);

// Q2. Check karo ke ek number even hai ya odd (% operator use karo).
// function evenOdd(num){
//     if (num % 2 === 0){
//         console.log("Even Number");
//     }else{
//         console.log("Odd Number");
//     }
// }
// evenOdd(10)
// let evenOdd = (num)=> num % 2 === 0 ? "Even" : "Odd";
// console.log(evenOdd(10));



// Section B — Objects & Strings
// Q3. Apna ek object banao jisme name, age, city, hobby hon aur ek introduce() method bhi ho jo yeh print kare: "Mera naam X hai, meri umar Y hai..."
// let myData = {
//     name:"Muzaffar Ali",
//     age:20,
//     city:"karachi",
//     hobby:"Reading",
//     introduce(){
//         return `My Name is  ${this.name} i'm ${this.age} my city is ${this.city} and my hobby is ${this.hobby}`
//     }
// };
// console.log(myData);
// console.log(myData.introduce());



// Q4. Ek string lo "javascript is awesome" aur yeh karo:

// Uppercase mein print karo
// "awesome" ko "amazing" se replace karo
// Space se split karke array banao
// Check karo ke "java" include hai ya nahi


// let str = "javascript is awesome";
// console.log(str.toUpperCase());
// console.log(str.replace("awesome","amazig"));
// console.log(str.split(" "));
// console.log(str.includes("java"));


// // Section C — Array Methods
// // Q5. Products ki is list se sirf woh nikalo jinki price 500 se zyada ho (filter), phir unki prices mein 10% izafa karo (map), phir total nikalo (reduce):
// const products = [
//     { name: "Pen",    price: 50  },
//     { name: "Bag",    price: 800 },
//     { name: "Book",   price: 300 },
//     { name: "Laptop", price: 50000 },
//     { name: "Eraser", price: 20  }
// ];
// let greterThanFiveTh = products.filter((product)=>product.price > 500);
// let add_10 = greterThanFiveTh.map((pro)=> Math.floor(pro.price * 1.10));
// let total = add_10.reduce((pre,num) => pre + num,0);
// console.log(greterThanFiveTh);
// console.log(add_10);
// console.log(total);



// Section D — Scope & Error Handling
// Q6. try/catch use karke ek function banao getUser(id) jo:

// Agar id 0 ho to error throw kare: "Invalid ID!"
// Warna user ka naam return kare
// function getUser(id){
//     if(id === 0){
//         throw new Error("Invalid ID!");
//     }
//     return "Ali"
// };

// try{
//     console.log(getUser(1));
//     console.log(getUser(0));
//     console.log("Yeh line nahi chalegi"); // Skip ho jayegi
// }catch(error){
//     console.log(error.message);
// }finally{
//     console.log("Best Of Luck");
// }


// Section E — Async/Await
// Q7. Ek async function banao placeOrder(item) jo:

// Pehle print kare: "Order aa raha hai..."
// 2 second wait kare (setTimeout + Promise)
// Phir print kare: "[item] ka order deliver ho gaya! ✅"

// function wait(second){
//     return new Promise((resolve)=>{
//         setTimeout(resolve,second * 1000)
//     }) 
// }
// async function placeOrder(item) {
//      console.log("Order aa raha hai...");
//      await wait(2);
//      console.log(`${item} order succesfuly completed`);
// }
// placeOrder("t-shirt")


// async function correct(item) {
//     console.log("Start");
    
//     await new Promise(resolve => setTimeout(resolve, 2000));
    
//     console.log("End");
//     console.log("Function khatam!");
// }
// correct("test");



// Section F — Closures
// Q8. Ek closure banao makeMultiplier(x) jo ek function return kare — woh function koi bhi number le aur use x se multiply kare:
// function makeMultiplier(x) {
    
//     return function(num) {
//         return num * x
//     };
// }
// let double = makeMultiplier(2);
// console.log(double(10));


// Async
// function wait(second){
//     return new Promise((res)=>{
//         setTimeout(res,second * 1000)
//     })
// };

// async function main(){
//     console.log("start");
//     await wait(1);
//     console.log("Midle");
//     await wait(1);
//     console.log("end");
// };

// main()





// // String Methods
// let str = "Muzaffar";
// console.log(str.length);


// let str = "Hello World";
// console.log(str.toUpperCase());
// console.log(str.toLowerCase());

// Trm
// let str = "   remove space outside    ";
// console.log(str.trim());


// Includes
// let str = "hello world";
// console.log(str.includes("world")); // true
// console.log(str.includes("World"));


// index of
// let str = "Hello world";
// console.log(str.indexOf("world")); // 6 index
// console.log(str.indexOf("xyz")); // -1 index


// Slice
// let str = "Hello world";
// console.log(str.slice(0,5));
// console.log(str.slice(6));
// console.log(str.slice(-5));


// Replace
// let str = "cat cat cat";
// console.log(str.replace("cat","dog"));

//  Replace all
// let str = "cat cat cat";
// console.log(str.replaceAll("cat","dog"));


// Split
// let str = "Ali,Khan,Aftab";
// console.log(str.split(","));

// let str2 = "Hello";
// console.log(str2.split(""));


// Concat
// let a = "hello";
// let b = "world";
// console.log(a.concat(" ",b));

// // template litera
// console.log(`${a} ${b}`);


// charat   if i write 0 then retrun H
// let str = "Hello world";
// console.log(str.charAt(0));
// console.log(str.charAt(-1)); // not response 
// // at modern negative support

// console.log(str.at(-1)); // d

'use strict'
// Q2: Interview Trap Question — String immutable hoti hai kya?
// A: Haan! String immutable hoti hai JavaScript mein:
// let str = "Hello";
// str[0] = "J";
// console.log(str);   // not change




// String methods original string nahi badlte — hamesha nai string return karte hain.
// let str = "Hello";
// let newStr = str.toUpperCase();
// console.log(str); 
// console.log(newStr); 

// let str = "cat-dog-bird-fish";
// let arr = str.split("-");
// let result = arr[arr.length - 1];
// console.log(result);

// functions
// greet(); // hoist function
// function greet(){
//     console.log("Hello");
// }
// setTimeout(() => {
//      console.log("wait");
//      find();
// }, 1000);

// let find = function(){
//     console.log("Hello find");
// }



//  Arrow Function mein kya special hai?
// A: 3 cheezein —
// 1. Short syntax:
// Normal
// const add = function(a,b){return a + b}

// Arrow
// const add = (a,b)=> a +b
// console.log(add(1,2));

//  Apna this nahi hota:

// const person = {
//   name: "Ali",
//   greet: function() {
//     console.log(this); // person object
//     // console.log(this.name); // "Ali"
//   },
//   find:()=>{
//     console.log(this.name);  // underfine
//   }
// };

// person.greet();

// Arrow sinle line
// let sum = n => n + 12
// console.log(sum(33));

// Q7: Rest Parameters kya hote hain?
// A: Jab pata na ho kitne arguments aayenge:
// function sum(...nums){
//     let total = nums.reduce((sum,num)=>sum + num,0)
//     console.log(total);
// }
// sum(1,2,3,4,5)
// ...numbers saare arguments ko array mein le leta hai!




// Q8: Callback Function kya hota hai?
// A:Ek function jo doosre function ko argument ki tarah diya jaye:
// function loggedIn(welcom){
//     console.log("User Logged In");
//     welcom()
// };
// function welcom(){
//     console.log("welcome back!");
// }
// loggedIn(welcom)

// setTimeout(() => {
//   console.log("2 second baad chala!"); // yeh bhi callback hai!
// }, 2000);


// const person = {
//   name: "Ali",
//   greet: function() {
//     return this.name;
//   }
// };

// const fn = person.greet;
// console.log(fn()); // undefined


// function add(a, b) {
//   return a + b;
// }

// console.log(add(2, 3) * 10);
// const add = (a, b) => a + b;
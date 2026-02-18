// var ourArray = ["one",1];
// console.log(ourArray);

// Nested Array
// var ourArray = [["Bulls",1],["white Sox",23,true]]
// console.log(ourArray);


// Acces Array Data With Index
// var myArray = [50,60,70];
// var myData = myArray[0];
// console.log(myData);


// Modify Array Data
// var myArray = [10,20,30];
// myArray[1] = 45;
// console.log(myArray);

// Access Multi-Dimensional Arrays
// var myArray = [[1,2,3],[4,5,6],[7,8,9],[[10,11,12],1234,45]];
// var myData = myArray[3][0][0];
// console.log(myData);


// Push();
//  var myArray = [["Apple","Mango"],["Banana",30]];
//  myArray.push(["Dog","Cat"]);
//  console.log(myArray);
 
 
// pop()
// var myArray = [["cat",30],[30,"Apples"]];
// var removedfromArray = myArray.pop();
// console.log(myArray);


//  Shift();
// var myArray = ["Muzaffar","Ali","Aftab"];
// var shiftingArray = myArray.shift();
// console.log(myArray);


// Unshift()
// var myArray = [["Ali",25],["Khan",36]];
// myArray.shift() // removed firt Element
// myArray.unshift(["Muzaffar",18]);
// console.log(myArray); 
// [ [ 'Muzaffar', 18 ], [ 'Khan', 36 ] ]



// Shoping list with arrays
// var mylist = [["Apples",30],["Eggs",10],["Milk",2],["Bananas",12]];
// console.log(mylist);


// Nested Array
// var myPlants = [
//     {
//         type:"flower",
//         list:[
//             "sun",
//             "moon",
//         ]
//     },
//     {
//         type:"tree",
//         list:[
//             "sun",
//             "moon",
//         ]
//     },
// ];
// console.log(myPlants[0].list[0]);

// Record Collection
// var collection = {
//     "2548":{
//         "album":"Sliperry",
//         "artist":"Bon Jovi",
//         "tracks":["Let it roc","You give love"],
//          },
//     "2448":{
//         "album":"1998",
//         "artist":"prince",
//         "tracks":["Let it rock","You give love don't "],
//          },
//     "1245":{
//         "artist":"Robot",
//         "tracks":[],
//          },
//     "5439":{
//       "album":"ABBA Gold"
//         }
// }

// var collectionCopy = JSON.parse(JSON.stringify(collection));
// function updateColloection(id,prop,value){
//    if(value === ""){
//     delete collection[id][prop];
//    }else if(prop === "tracks"){
//     collection[id][prop] = collection[id][prop] || [];
//     collection[id][prop].push(value);
//    }else{
//     collection[id][prop] = value;
//    }
//     return collection;
// };

// console.log(updateColloection(1245,"tracks",""));



// map
// Yaad rakho: map() naya array return karta hai, original array change nahi hota!
// const numbers = [1, 2, 3, 4, 5]
// let double = numbers.map((num)=>num*2);
// console.log(double);

// let students = ["ali","khan","ahmed"];
// let upperCase = students.map((student)=>student.toUpperCase());
// console.log(upperCase);


// filter() — condition ke hisaab se elements chuno
// let numbers = [10,20,30,40,50,60];
// let bigNumber = numbers.filter((number)=> number > 30);
// console.log(bigNumber);


// const students = [
//     { name: "Ali",   marks: 80 },
//     { name: "Sara",  marks: 35 },
//     { name: "Ahmed", marks: 65 },
//     { name: "Bilal", marks: 28 }
// ];

// let passingStudents = students.filter((std)=>std.marks >= 40)
// console.log(passingStudents);



// find()
// const students = [
//     { name: "Ali",   marks: 80 },
//     { name: "Sara",  marks: 35 },
//     { name: "Ahmed", marks: 65 },
// ];

// let std = students.find((student)=>student.name === "Ali");
// console.log(std);


// reduce() — sab values ko ek value mein convert karo
// const numbers = [10, 20, 30, 40];

// // Sab ka total nikalo
// const total = numbers.reduce((sum, num) => sum + num, 0);
// console.log(total); // 100

// // 0 matlab — sum ki starting value 0 hai


// reduce 
// let num = [1,2,3,4,5,6];
// let total = num.reduce((sum,num)=> sum + num,0);
// console.log(total);


// 2. ES6+ Features
// Object Destructuring
// const person = { name: "Muzaffar", age: 20, city: "Ghotki" };
// let {name:naam,age,city} = person;
// console.log(naam,age,city);


// Array Destructuring
// const fruits = ["mango", "apple", "banana"];
// const [first, second, third] = fruits;
// console.log(first);  // mango
// console.log(second); // apple


// Spread Operator ... — array/object ko copy ya merge karo
// Array copy karna

// let arr1 = [1,2,3,4];
// let arr2 = [...arr1,5,6];
// console.log(arr2);


// Object merge karna
// const user     = { name: "Ali", age: 25 };
// const extraInfo = { city: "Karachi", job: "Developer" };
// const fullUser = {...user,...extraInfo};
// console.log(fullUser);


// Default Parameters — function mein default value dena
// function greet(name="Guest"){
//     return `Hello ${name}`;
// };
// console.log(greet());


// Callback matlab — ek function jo doosre function ko argument ki tarah diya jaye.
// function doTask(user,welcomMsg){ 
//     console.log(user,"Login Succesfuly..");
//     welcomMsg() 
// }

// function welcomMsg(){
//     console.log("welcome to Admin Office");
// };


// doTask("Ali",welcomMsg)



//  Promises — Async kaam ke liye
// let order = new Promise((resolve,reject)=>{
//    let orderPlaced = false;
//    if(orderPlaced){
//     resolve("Pizza Agya");
//    }else {
//     reject("Örder cancel...")
//    }
// })

// order
//   .then((res)=> console.log(res))
//   .catch((error) => console.log(error))

// let myPromise = new Promise((resolve,reject)=>{
//     let succe = true;
//     if(succe){
//         resolve("Data mil gaya! ✅")
//     }else{
//         reject("Kuch ghalat ho gaya! ❌")
//     }
// })

// myPromise
//     .then((result)=>console.log(result))
//     .catch((error)=>console.log(error))
    

// 5. Async / Await — Promise ka asaan tarika
// function getUserData(){
//     return new Promise((resolve)=>{
//        setTimeout(()=>{
//         resolve({name:"Muzaffar Ali",age:20})
//        },2000)
//     })
// }

// async function main() {
//     console.log("Data load ho raha hai...");
//     let data = await getUserData();
//     console.log(`Name: ${data.name}`);
//     console.log(`Age: ${data.age}`);
// }

// main()


// Task
// let numbers = [5, 12, 8, 130, 44];
// let greaterTen = numbers.filter((num)=> num > 10);

// const products = [
//     { name: "Shirt",  price: 1000 },
//     { name: "Pants",  price: 2000 },
//     { name: "Shoes",  price: 3000 }
// ]
// let disCount = products.map((pro)=> pro.price * 0.90 );
// console.log(disCount);

// let total = products.reduce((sum,s)=> sum + s.price,0);
// console.log(total);

// function wait(second){
//    return new Promise((resolve)=>{
//     setTimeout(resolve, second * 1000)
//    })
// }

// async function main(){
//     console.log("order a rha h");
//     await wait(1);
//     console.log("order place ho gya");
// };

// main()





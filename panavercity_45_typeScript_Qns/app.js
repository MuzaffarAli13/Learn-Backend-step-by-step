// // Arrays
// let users = ['Ali','Khan','Imtiaz'];
// console.log(users);



// //push --> adding new item in the end 
// users.push('Muzaffar');
// console.log(users);

// // pop -> remove the element to the array on the end
// let removed = users.pop();
// console.log(users);

// //map
// users.map((item)=> console.log(item));


// //filter
// let greater = users.filter((item)=> item.length === 4);
// console.log(greater);


// //includes

// let inc = users.includes('khan');
// console.log(inc);


// Objects
// let users = [
//    {
//     name:"Muzaffar",
//     id:1,
//     email:'muzafar@gmail.com'
//    },
//    {
//     name:'Khan',
//      id:2,
//     email:'khan@gmail.com'
//    }
// ];

// users.forEach((item,index)=>{
//     console.log(index+1,item);  
// })


// Destructuring
// let user = {
//     name:"Muzaffar",
//     age:10,
//     caste:'kalwar'
// }
// let {name:naam} = user;
// console.log(naam);

// let tableOf10 = [10,20,30,40,50];
// let [a,,b] = tableOf10;
// console.log(a,b);


// Spread & Rest Operator
// let a = [1,2,3];
// let b = [4,5,6];
// let mrg = [...a,...b]
// console.log(mrg);

// let c = {age:12};
// let d = {name:'muzaffar'};
// let mrge = {...c,...d};
// console.log(mrge);

// callback
// function greet(){
//     return "welcom!"
// };

// function loggIn(email){
//    return email();
// };

// let res = loggIn(greet)
// console.log(res);



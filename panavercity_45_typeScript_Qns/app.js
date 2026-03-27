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
let users = [
   {
    name:"Muzaffar",
    id:1,
    email:'muzafar@gmail.com'
   },
   {
    name:'Khan',
     id:2,
    email:'khan@gmail.com'
   }
];

users.forEach((item,index)=>{
    console.log(index+1,item);  
})



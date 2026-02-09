// var myDog = {
//     name:"puppy",
//     legs:4,
//     tails:2,
//     friends:[]
// }

// var myDog = {
//     "name":"puppy",
//     "legs":4,
//     "tails":2,
//     "friends":[]
// }

// Accessing Object Properties With Dot Notation
// var myData = {
//     "name": "Muzaffar Ali",
//     "age":20,
//     "skills":["JavaScript","Nextjs","TypeScript"],
//     "city":"Ghotki"
// }
// var nameValue = myData.name;
// var skillsValue = JSON.stringify(myData.skills);
// console.log(`Name: ${nameValue}\nAge: ${myData.age}\nSkills: ${skillsValue}`);


// Accessing Object Properties With Bracket Notation
// var myData = {
//     "name": "Muzaffar Ali",
//     "age":20,
//     "skills":["JavaScript","Nextjs","TypeScript"],
//     "city":"Ghotki"
// }
// var nameValue = myData["skills"];
// console.log(nameValue);



// Accessing Object Properties With variables
// var testObj = {
//     12:"khan",
//     16:"muzafar",
//     18:"ali"
// }
// var value = 16;
// var otherValue = testObj[value]
// console.log(otherValue);


// Updating Object prperties
// var myDog = {
//     "name":"Coder",
//     "legs":4,
//     "tails":1,
//     "friends": ["Everyone"]
// }
// myDog.name = "Happy Coder";
// console.log(myDog.name);


// Add new properties to an Object
// var myDog = {
//     "name":"Coder",
//     "legs":4,
//     "tails":1,
//     "friends": ["Everyone"]
// }
// myDog.bark = "Bow-wow"; 
// myDog["bark"] = "woof"
// console.log(myDog);


// Delete properties from an Object
// var myDog = {
//     "name":"Coder",
//     "legs":4,
//     "tails":1,
//     "friends": ["Everyone"]
// }
// delete myDog.friends;
// console.log(myDog);


// Using Object for lookups;
// function lookups(val){
//     let result = "";
//     let lookup = {
//         "name":"Muzaffar",
//         "score":"102*",
//         "balls":"45",
//     }
//     result = lookup[val];
//     return result
// };
// console.log(lookups("balls"));
// console.log(lookups("name"));


// Testing Objects For Properties
// var myObj = {
//     "gift":"pony",
//     "pet":"kitten",
//     "bed":"sleigh",
// };

// function checkObj(checkProp){
//     if(myObj.hasOwnProperty(checkProp)){
//         return myObj[checkProp]
//     }else{
//         return "Not Found"
//     }
// };
// console.log(checkObj("gift"));



// Manipulating Complex Objects
// var friendsData = [
//     {
//         "name":"Ali",
//         "caste":"Kalwar",
//         "age":20,
//         "skill":[
//             "AI Engineer",
//             "Data Scienist"
//         ],
//     },
//     {
//         "name":"Ali",
//         "caste":"Kalwar",
//         "age":20,
//         "skill":[
//             "AI Engineer",
//             "Data Scienist"
//         ],
//     }
// ]
// console.log(friendsData[0].name);


// Nested Objects
// var myStorage = {
//     "users":{
//         "cars":{
//             "name":"GLI",
//             "model":"Hunda"
//         },
//         "bikes":{
//             "name":"OneTwo5",
//             "model":"Hunda"
//         },
//     }
// }
// var globalvar = myStorage.users.cars.name;
// console.log(globalvar);








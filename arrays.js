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
var myPlants = [
    {
        type:"flower",
        list:[
            "sun",
            "moon",
        ]
    },
    {
        type:"tree",
        list:[
            "sun",
            "moon",
        ]
    },
];
console.log(myPlants[0].list[0]);

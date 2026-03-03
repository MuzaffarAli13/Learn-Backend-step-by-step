// const Emitter = require("./emitter"); // this is my own custom modules
const Emitter = require("events") // this is core nodejs module
const events = require("./config").evets;


const emitr = new Emitter();

// event listern add 
emitr.on(events.GREET,function(){
    console.log("Hello");
});

emitr.on(events.FILEOPEN,function(){
    console.log("File open Succesfully.");
});

emitr.on(events.FILESAVED,function(){
    console.log("File Saved..");
});


emitr.on("my-age",function(){
    console.log("i am 20 year old..");
});

emitr.emit(events.GREET)
emitr.emit(events.FILEOPEN)
emitr.emit(events.FILESAVED)
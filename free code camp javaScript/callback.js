// function getUser(callback){
//     setTimeout(()=>{
//      console.log("User Fetched!");
//      callback({"id":1,"name":"Muzaffar"})
//     },1000)
// };

// function user(user){
//    console.log(user)
// }
// getUser(user) 


function getUser(){
    return new Promise((res,rej)=>{
      setTimeout(() => {
         res({"id":1,"name":"Muzaffar"})
      }, 1000);
    })
}

async function getData() {
    let user = await getUser();
    console.log(user);
}
getData()
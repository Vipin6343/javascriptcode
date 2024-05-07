const promisesOne=new Promise(function(resolve,reject){
    //do an async task
    // DB calls, cryptography,network
    setTimeout(function(){
        console.log('Async task is complete');
        resolve()
    },1000)
});
promisesOne.then(function(){
   console .log("promise is consumed")
})

new Promise(function(resolve,reject){
   
    setTimeout(function(){
        console.log("Asyn task is 2")
        resolve()
    },1000)
}).then(function(){
    console.log("resolve is completed")

})


const promiseThree=new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve({username:"vipin6343",email:"vipin@16127"})
    },1000)
})
promiseThree.then(function(user){
    console.log(user)

})

const PromisesFour= new Promise(function(resolve,reject){
    setTimeout(function(){
        let error=false;
        if(!error){
            resolve({username:"vipin6343",password:"123"})
          
        }
        else{
            reject("something went wrong")
        }
    },1000)

})
PromisesFour.then((user) =>{
    console.log(user);
    return user.username
}).then((username)=>{
    console.log(username)
}).catch(function(error){
    console.log(error)
}).finally(()=> console.log("the promise is either resolved or rejectes"))
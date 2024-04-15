const mysym=Symbol("key1")

const jsuser={
    name: "vipin yadav",
    [mysym]:"mykey1",
    age : 20,
    location: "gorakhpur",
    email:"vipin@gmail.com",
    islogin: false,
    lastlogin:["monday" , "tuesday"]
}

// console.log(jsuser["email"])
// Object.freeze(jsuser)
// jsuser.email = "vipin123"

// console.log(jsuser)

jsuser.greeting=function(){
    console.log(`hello js user,${this.name}`)
}
console.log(jsuser.greeting())
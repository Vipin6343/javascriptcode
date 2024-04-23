const user ={
    username:"vipin",
    price:555,
    welcome: function(){
        console.log(`${this.username}, welcome to website`)
        // console.log(this)

    }

}
// user.welcome()
// user.username="vip"
// user.welcome()
// console.log(this)

// function chai(){
//     let username="vipin yadav"
//     console.log(this.chai)
// }
// chai()


//creating arrow function
// const chai=() =>{
//     let user="mr vip"
//     console.log(user)
// }
// chai()

//explicit return
//   const addnum=   (num1,num2)=>{
//     return num1+num2

// }
// console.log(addnum(3,4))

//implicit return
const addnum=   (num1,num2)=> num1+num2
console.log(addnum(3,4))

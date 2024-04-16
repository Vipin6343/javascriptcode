const Tinderuser=new Object()
// this declaration is singleton object
Tinderuser.id="1234"
Tinderuser.name="vipin yadav"
Tinderuser.islogin="false"
console.log(Tinderuser)


const regularuser={
    email:"vipi@gmail.com",
    fullname :{
        userfull:{
            firstname:"vipin ",
            lastname:"yadavji"

        }

    }
}
console.log(regularuser.fullname.userfull.firstname)


const objetc1=new Object(1,2,3,3)
const object2=new Object(2,4,5,6,7)
let object3=Object.assign(objetc1,object2)
console.log(object3)

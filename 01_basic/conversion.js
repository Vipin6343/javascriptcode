let score= "33 aaa"
console.log(typeof score)
 
let valueInNum=Number(score)
console.log(typeof(valueInNum))


// nan means not a number 

/* now if we  check the type of valueInNUm then it will show number 

but if we print as such AS valueInNum 
then it will show the nan
*/
console.log(valueInNum)
/*
33=>=33
"33 abx"=>nan
true=>1
null=>=0
undefined=>nan

*/
// num to boolean conversion
let isLogin=1
let isboolLogin=Boolean(isLogin)
console.log(isboolLogin);

// 1=> true;
//""=>false
// "hitesh"=>true
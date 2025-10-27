// let a = 12;
// {
//   let a = 13;
//   console.log("Inside :",a);
// }
// console.log("outside :",a)
// // var can not use outside of the function 
// // let can not be used outside this {} bracket

// if(true){
//   var s = 1;
//   let d = 2;
// }
// console.log(s);// 1
// console.log(d);// undefined

// // in const

// const person = {name : "shreeman"};
// person.name = "shree"; // update is allowed
// person = {}; // not allowed 
// // Assignment to constant variable.

// primitive
// let a = 12;
// let b = a;
//  a = a + 2; // a = 14 , b = 12

// reference

let a = [1,2,4];
let b = a;
b.pop();
 
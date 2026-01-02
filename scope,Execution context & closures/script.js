// scope : functional , global , block scope

// functional scope : within the funciton access:function(){//    }
// global scope : access for all
// block scope : within the { //    } curly braces

// lexical scope vs dynamic scope

/**
 *
 * closure definationa and how variable are preserved
 * with advantages and dis advantages
 *
 * This keyword :  in,
 *
 * with 1 : global scope : window
 *
 *
 * with 2 : functional scope : window
 *
 *
 * with 3 : method(obj inside function(){} : obj  itself) and with arrow function () => {// window} but function(){() => {}} then : obj it self
 *
 *
 * with 4 : event handeling : jiske uppre event hua hai ; this.style.color = "red";
 *
 *
 * with 5 : class : blank obj
 *
 * Manual binding  :  bind, call, apply
 */

// this in global scope

console.log(this); // window

// this in functional scope

function myFun() {
  // window also
  console.log(this);
}
myFun();

// this in method
// case 1

let object1 = {
  name: "name",
  age: 1,

  myFuns: function () {
    console.log(this); // object1 it self
    console.log(this.name); // name
    console.log(this.age); // age
  },
};
object1.myFuns();

// case 2

let object2 = {
  name: "name",
  age: 1,

  myFuns: () => {
    console.log(this); // window
    console.log(this.name); // blank
    console.log(this.age); // undefined
  },
};
object2.myFuns();

// case 3

let object3 = {
  name: "name",
  age: 1,

  myFun: function () {
    let fn = () => {
      console.log(this); // object1 it self
      console.log(this.name); // name
      console.log(this.age); // age
    };
    fn();
  },
};
object3.myFun();

// case 4

let object4 = {
  name: "name",
  age: 1,

  myFun: function () {
    let fn = function () {
      console.log(this); // window
      console.log(this.name); // blank
      console.log(this.age); // undefined
    };
    fn();
  },
};
object4.myFun();

// this in event handler
let hOne = document.querySelector("h1");
hOne.addEventListener("click", function () {
  console.log((this.style.color = "red"));
});

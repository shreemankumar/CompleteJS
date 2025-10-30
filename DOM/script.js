// let getid = document.getElementById("id");
// console.dir(getid);
// let getwithoutid = document.getElementsByClassName("abcd"); // in console u will see the technical properties
// console.log(getwithoutid);
// let getwithquerry = document.querySelector("h1");
// console.log(getwithquerry);
// let getwithquerrys = document.querySelectorAll("h1");
// console.log(getwithquerrys);

let h1 = document.querySelector("h1");
// h1.outerText = "I'am Fine";
//h1.innerText = "I'am Fine";
h1.innerHTML = "<strong>I'am Fine</strong>";
console.log(h1);

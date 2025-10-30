// let getid = document.getElementById("id");
// console.dir(getid);
// let getwithoutid = document.getElementsByClassName("abcd"); // in console u will see the technical properties
// console.log(getwithoutid);
// let getwithquerry = document.querySelector("h1");
// console.log(getwithquerry);
// let getwithquerrys = document.querySelectorAll("h1");
// console.log(getwithquerrys);

// let h1 = document.querySelector("h1");
// // h1.outerText = "I'am Fine";
// //h1.innerText = "I'am Fine";
// h1.innerHTML = "<strong>I'am Fine</strong>";
// console.log(h1);

// setAttribute
let ele = document.querySelector("a");
ele.setAttribute("href", "https://www.google.com/");

let image = document.querySelector("img");
image.setAttribute(
  "src",
  "https://images.unsplash.com/photo-1761835563595-630c9f52c67e?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyfHx8ZW58MHx8fHx8&auto=format&fit=crop&q=60&w=900"
);

//getAttribute
let a = document.querySelector("a");
console.log(a.getAttribute("href"));
a.removeAttribute("href");

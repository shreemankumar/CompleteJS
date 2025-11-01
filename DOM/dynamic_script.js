// let h1 = document.createElement("h1");

// let h1context = document.createTextNode("creating h1");

// h1.appendChild(h1context);
// document.body.appendChild(h1);

let h1 = document.createElement("h1");
h1.textContent = "this is h1's content";
document.querySelector("body").prepend(h1);

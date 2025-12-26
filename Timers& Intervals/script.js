// console.log("Google");
// setTimeout(() => {
//   console.log("hey welcome");
// }, 7000);

// setInterval(() => {
//   console.log("hey welcome");
// }, 3000);

let counter = 10;
let tm = setInterval(() => {
  if (counter >= 0) {
    console.log(counter);
    counter--;
  } else {
    clearInterval(tm);
  }
}, 1000);

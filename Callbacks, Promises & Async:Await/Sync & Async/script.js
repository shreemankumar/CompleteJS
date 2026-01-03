// sync
// runs line by line
console.log("1");
console.log("2");
console.log("3");
console.log("4");

// async
//  aisa code jab chalne keliye ready hojaye tab chale

console.log("1");
console.log("2");
setTimeout(() => {
  console.log("3");
}, 4000);
console.log("4");

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

let pr = new Promise(function (res, rej) {
  setTimeout(() => {
    let result = Math.floor(Math.random() * 10);

    if (result > 5) {
      res("resolved with: " + result);
    } else {
      rej("rejected with: " + result);
    }
  }, 3000);
});

async function abcd() {
  try {
    let val = await pr;
    console.log(val);
  } catch (err) {
    console.log(err);
  }
}
abcd();

let pr = new Promise(function (res, rej) {
  // async code
  // res = resolve
  // rej = rejected
  setTimeout(() => {
    let result = Math.floor(Math.random() * 10);
    if (result > 5) {
      console.log("resolved with : " + result);
    } else {
      console.log("rejected with : " + result);
    }
  }, 3000);
});

pr.then(function (val) {
  console.log(val);
}).catch(function (val) {
  console.log(val);
});

let input = document.querySelector("input");
let datainput = function (val) {
  if (val.data !== null) {
    console.log(val.data);
  }
};
input.addEventListener("input", datainput);

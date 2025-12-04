let form = document.querySelector("form");
let nm = document.querySelector("#name");

form.addEventListener("submit", (det) => {
  det.preventDefault();
  let namelength = nm.value.length;
  if (namelength <= 2) {
    document.querySelector("#hide").style.display = "initial";
  } else {
    document.querySelector("#hide").style.display = "none";
  }
});

let fileinpt = document.querySelector("#fileinp");
let btn = document.querySelector("#btn");

btn.addEventListener("click", () => {
  // console.dir(fileinpt);
  fileinpt.click();
});
fileinpt.addEventListener("change", (details) => {
  //console.log(details.target.files[0].name);
  const file = details.target.files[0];
  if (file) {
    btn.textContent = file.name;
  } else {
    btn.textContent = "Upload File";
  }
});

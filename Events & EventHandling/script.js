let select = document.querySelector("select");
let selected = document.querySelector("#devices");

select.addEventListener("change", function (val) {
  selected.textContent = `${val.target.value} device selected`;
});

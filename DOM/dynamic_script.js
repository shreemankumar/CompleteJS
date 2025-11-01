let element = document.createElement("i");
element.innerText = "This is student qoaut";
document.body.appendChild(element);
//document.body.removeChild(element);

document.querySelectorAll("h1").forEach(function (h1) {
  document.body.removeChild(h1);
});

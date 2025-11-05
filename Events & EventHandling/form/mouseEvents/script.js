let abcd = document.querySelector("#abcd");

abcd.addEventListener("mouseover", () => {
  abcd.style.backgroundColor = "green";
});
abcd.addEventListener("mouseout", () => {
  abcd.style.backgroundColor = "red";
});

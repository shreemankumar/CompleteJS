let progressbar = document.querySelector(".progress-bar");
let showstatus = document.querySelector(".showstatus");
let downloadcard = document.querySelector(".download-card");
let btn = document.querySelector(".btn");
let count = 0;
let second = 5;

setInterval(() => {
  if (count <= 99) {
    count++;
    progressbar.style.width = `${count}%`;
    showstatus.textContent = `${count}%`;
  } else {
    document.querySelector(".status").textContent = "Downloaded.";
    btn.style.display = "grid";
  }
}, (second * 1000) / 100);

btn.addEventListener("click", () => {
  downloadcard.style.display = "none";
});

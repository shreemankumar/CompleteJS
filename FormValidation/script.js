let form = document.querySelector("#form");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  let emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  let passwordRegex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

  let email = document.querySelector("#email").value;
  let password = document.querySelector("#password").value;

  if (!emailRegex.test(email)) {
    alert("Invalid email format!");
  }

  if (!passwordRegex.test(password)) {
    alert(
      "Password must be 8+ chars, include uppercase, lowercase, number, and special character."
    );
  }
});

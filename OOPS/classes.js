class mobiles {
  constructor(name, model, noOfCamera, fringerPrint, facelock, color) {
    (this.name = name),
      (this.model = model),
      (this.noOfCamera = noOfCamera),
      (this.fringerPrint = fringerPrint),
      (this.facelock = facelock);
  }
  mobile() {
    this.color = color;
    this.Add = function (text) {
      let h1 = document.createElement("h1");
      h1.textContent = text;
      h1.style.color = color;
      document.body.append(h1);
    };
  }
}

let mob3 = new mobile("samsung", "s20", 2, "yes", "yes", "black");
let mob4 = new mobile("apple", "17", 2, "nope", "yes", "red");

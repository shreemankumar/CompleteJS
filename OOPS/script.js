function mobile(name, model, noOfCamera, fringerPrint, facelock, color) {
  (this.name = name),
    (this.model = model),
    (this.noOfCamera = noOfCamera),
    (this.fringerPrint = fringerPrint),
    (this.facelock = facelock);
  this.color = color;
  this.Add = function (text) {
    let h1 = document.createElement("h1");
    h1.textContent = text;
    h1.style.color = color;
    document.body.append(h1);
  };
}

let mob1 = new mobile("samsung", "s20", 2, "yes", "yes", "black");
let mob2 = new mobile("apple", "17", 2, "nope", "yes", "red");

/**
 * In console
 * 
 * mob1
mobile {name: 'samsung', model: 's20', noOfCamera: 2, fringerPrint: 'yes', facelock: 'yes'}
mob2
mobile {name: 'apple', model: '17', noOfCamera: 2, fringerPrint: 'nope', facelock: 'yes'}
 */

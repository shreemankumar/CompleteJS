function mobile(name, model, noOfCamera, fringerPrint, facelock) {
  (this.name = name),
    (this.model = model),
    (this.noOfCamera = noOfCamera),
    (this.fringerPrint = fringerPrint),
    (this.facelock = facelock);
}

let mob1 = new mobile("samsung", "s20", 2, "yes", "yes");
let mob2 = new mobile("apple", "17", 2, "nope", "yes");

/**
 * In console
 * 
 * mob1
mobile {name: 'samsung', model: 's20', noOfCamera: 2, fringerPrint: 'yes', facelock: 'yes'}
mob2
mobile {name: 'apple', model: '17', noOfCamera: 2, fringerPrint: 'nope', facelock: 'yes'}
 */

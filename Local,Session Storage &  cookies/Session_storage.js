// session storage : Temp. storage
//  by reopening tab, will be removing that data
sessionStorage.setItem("age", "21");

sessionStorage.getItem("age");

sessionStorage.removeItem("age");

sessionStorage.setItem("place", "hydearbad");
sessionStorage.setItem("place", "berhampur");

// cookies : can handel small types of data (4 kb)
// data goes automatically to server while reloading.
document.cookie = "email = shreeman@gmail.com";
// cookie name = email
// value  =  shreeman@gmail.com

// can view with the help of EditTheCookie chrome extension

// local storage can always store srting value
// To store arrays, objects, we have to use localStorage.

let friends = ["ram", "shyam", "bulu"];
localStorage.setItem("friends", JSON.stringify(friends));

let friend = JSON.parse(localStorage.getItem("friends"));

console.log(friend);

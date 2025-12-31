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

// local storage :
/**
 * it stores data within yr browser only.
 * you can : refresh, tab reopen and reopen browser : data remains there
 */

localStorage.setItem("name", "Shreeman");
// in console :
//Storage {name: 'Shreeman', length: 1}

localStorage.getItem("name"); // Data Fatching

localStorage.removeItem("name"); // delete existing data form yr browser
// Storage {length: 0}

localStorage.setItem("name", "javascript"); // update
// if same data is already existing there then it will just update it (Override)
// if not then, create

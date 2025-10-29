// key-value Structure and Dot vs Braket Notation
// let obj = {
//   name : "shreeman",
//   class : 12,
//   id : "2201109295"
// }
// console.log(obj.class)
// console.log(obj['class'])
// let another = "id";
// console.log(obj[another])

// Nesting and Deep access

const user = {
  name: "shreeman",
  address: {
    city: "Berhampur",
    pin: 760010,
    location: {
      lat: 23.6,
      long: 87.9876,
    },
  },
};

console.log(user.address.location.long);

// object destructuring
let { lat, long } = user.address.location;
console.log(lat, long);

// loopings : forin, Object.keys, Object.entries

let objlooping = {
  name: "shreeman kumar",
  email: "test@gmail.com",
  password: 11223344,
};
// forin
// can preform loop in the object

for (let key in objlooping) {
  // console.log(key);
  console.log(key, objlooping[key]);
}
/**
 * console.log(key);
 * output
 *  
 * name
  object.js:43 email
  object.js:43 password

  console.log(key, objlooping[key]);
  output

  name shreeman kumar
  object.js:44 email test@gmail.com
  object.js:44 password 11223344
 */

// Object.keys
let objs = {
  name: "shreeman kumar",
  email: "test@gmail.com",
  password: 11223344,
};
console.log(Object.keys(objs)); // makes an array of the object's values
console.log(Object.entries(objs)); // makes an arry of array of the object's value (double arry means array inside array)

//Copying object : spread, Object.assign, deep clone

//spread
let obj2 = { ...objs }; //spread
console.log(obj2);
for (let val in obj2) {
  console.log(val, obj2[val]);
}
//Object.assign
let obj3 = Object.assign({ Price: 12 }, obj2);

//deep clone (real copy): bassically when u are doing copy of nested obj then the first nested will be copyed and the nested objs will be passing reference instread of copying . so that we have to do deep clone.

/*
     JSON.stringify(obj2)
    '{"name":"shreeman kumar","email":"test@gmail.com","password":11223344}'
    JSON.parse('{"name":"shreeman kumar","email":"test@gmail.com","password":11223344}')
    {name: 'shreeman kumar', email: 'test@gmail.com', password: 11223344}
 */

let oneplus = {
  screen: 6.7,
  processer: "snapdrogon 855",
  waterproof: true,
  glass: {
    flat: false,
    curve: true,
  },
  camera: {
    frontcamera: 12,
    backcamera: 50,
  },
};
//console.log(oneplus);
// let copyedOneplus = Object.assign({}, oneplus);
// copyedOneplus.camera.backcamera = 10;
// console.log(copyedOneplus);
// console.log(oneplus);

let copy = JSON.parse(JSON.stringify(oneplus));
copy.camera.backcamera = 10;
/**
 * copy
{screen: 6.7, processer: 'snapdrogon 855', waterproof: true, glass: {…}, camera: {…}}
camera
: 
{frontcamera: 12, backcamera: 10}
glass
: 
{flat: false, curve: true}
processer
: 
"snapdrogon 855"
screen
: 
6.7
waterproof
: 
true
[[Prototype]]
: 
Object
oneplus
{screen: 6.7, processer: 'snapdrogon 855', waterproof: true, glass: {…}, camera: {…}}
camera
: 
{frontcamera: 12, backcamera: 50}
glass
: 
{flat: false, curve: true}
processer
: 
"snapdrogon 855"
screen
: 
6.7
waterproof
: 
true
 */
//Optional chaining, computed properties

//oneplus?.camerag?.backcamera;   //undefined

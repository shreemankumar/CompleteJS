// type 1
let marks = [78,89,90,98,71];
console.log(marks[2])// 90
console.log(marks[4])// 71
console.log(marks[5])// undefined
// modify
marks[3] = 44;
console.log(marks)

marks.push(11);// this 11 will be pushing on the last of the array
console.log(marks)
marks.pop()// last element will be deleted from the array
console.log(marks)
marks.shift();// remove first element 
console.log(marks)
marks.unshift(3) //  add element at the first
console.log(marks)
marks.splice(2,1); // where first (2,2) 2 : which index se value koo haata na hai and the second 2 which denotes that kitni value uusse index se haata na hai 
console.log(marks)
  let newarray = marks.slice(2);
//let newarray = marks.slice(0,2);
console.log(marks)
console.log(newarray)

marks.sort(function(a,b){
  // return a - b;// ascending order 
  return b - a;// descending order 
})
marks.reverse();

console.log(marks)
//type 2
let mark = new Array();
let arr = [1,2,3,4,5];
// arr.forEach(element => {
//   console.log(element)
// });
// arr.forEach(function(val){
//   console.log(val + 1);
// })
// map
let newarr = arr.map(function(val){
  return 12;
})
// filter

let nums = [12,11,3,22,55,3];
let newnums  = nums.filter(function(element){
  return (element > 10);
})
// reduce
// sum of the ele of an array : reduce the ele of the number in to one....
let sumsrr = nums.reduce(function(acc,element){
  return acc + element;
},0)
// let findele =  nums.find(function(ele){
//   return ele === 11
// })

let findelement =  [
  {id : 1 , val : 12},
  {id : 2 , val : 2},
  {id : 6 , val : 12}
];
let findele = findelement.find(function(ele){
  return ele.val === 12;
})

let issome = nums.some(function(ele){
  return ele > 32;
})

let isevery = nums.every(function(ele){
  return ele > 1;
})
// destructuring and spread operator
let [a,d,,,e] = nums;
let nums1 = [...nums]
/*
nums
(6) [12, 11, 3, 22, 55, 3]
nums1
(6) [12, 11, 3, 22, 55, 3]
nums1.pop
ƒ pop() { [native code] }
nums1.pop()
3
nums1
(5) [12, 11, 3, 22, 55]
nums
(6) [12, 11, 3, 22, 55, 3]
nums1.pop()
55
nums1
(4) [12, 11, 3, 22]
nums
(6) [12, 11, 3, 22, 55, 3]
*/
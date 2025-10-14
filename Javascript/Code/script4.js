const arr = [1,3,4,21,4,5,6];

//for of loop
for (const element of arr) {
  console.log(element)
}

const person = {
  name:'Kumar',
  age:34,
  profession:'cricketer'
}
//for of trick to iterate the object properties , but use for in always
for (const element of Object.values(person)) {
 console.log(element) 
}

const callName = (greet) =>{
  console.log('hello I am name')
  greet('Rohan Rawat')
}

const greet = (name) =>{
  console.log('Good Morning ! ', name)
}

//passing greet reference in callName 
callName(greet)

arr.forEach(function call(item) {
  console.log('Item - ', item)
})

const callNum = (num) =>{
  console.log('hello I am name')
  greet(`Rohan Rawat - ${num}`)
}
arr.forEach(callNum)

const numberLessThan4 = arr.filter((num)=>num<4);
console.log(numberLessThan4)
console.log(arr)
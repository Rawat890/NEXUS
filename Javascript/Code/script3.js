const obj1 ={
  name:'object1',
  age:56,
  city:'Hsp'
}

//passed by reference , so the changes made in function to object reflects in actual object as well
function check(obj) {
  obj.name = 'hwdvcjhawdv';
  console.log(obj)
}

console.log(obj1)
check(obj1)
console.log(obj1)

const person = {
  name:'Virat',
  age: 36,
  profession:'cricket',
}

for (const key in person) {
  const element = person[key];
  console.log(element)
}

//Object.keys only prints the keys that is of that particular objects, but for in also prints the inherited properties as well

const person1 = Object.create(person);
person1.country = 'India';
console.log(person1)
console.log(Object.keys(person1))

for (const key in person1) {  
  const element = key;
  console.log(element)
}

console.log(Object.getOwnPropertyDescriptor(person, 'profession'))

Object.defineProperty(person1, 'address', {
  value: 'Hoshiarpur, Punjab',
  writable: true,
  enumerable:true,
  configurable:true
})

console.log(person1)
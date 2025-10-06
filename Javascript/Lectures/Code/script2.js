const obj = {
  12: 456,
  name: 'Rohit',
  age: 24,
  account_balance: 190,
  'account number': 38239032,
  null:78,
  undefined:10,
}

console.log(obj)
console.log(obj['name'])
console.log(obj[null])
console.log(obj["account number"])
delete obj["account number"];
console.log(obj)

const arr =[1,2,3,5,6];
delete arr[0];
delete arr[3];
console.log(arr)

class People {
  constructor(name, age, gender) {
    this.name = name,
    this.age = age,
    this.gender= gender
  }
}

let person1  = new People("Rohan",34, "Male");
console.log(person1)

console.log(Object.keys(obj).length)
console.log(Object.values(obj))
console.log(Object.entries(obj)) //array of arrays of key-value

const obj1 = Object.assign(obj);
console.log(obj1)
obj1.age = 188;
console.log(obj1);
console.log(obj)

obj1.occupation = 'police';
const obj2 = Object.assign({}, obj1, obj);
console.log(obj2)
const obj = {
  12: 456,
  name: 'Rohit',
  age: 24,
  account_balance: 190,
  'account number': 38239032,
  null: 78,
  undefined: 10,
}

console.log(obj)
console.log(obj['name'])
console.log(obj[null])
console.log(obj["account number"])
delete obj["account number"];
console.log(obj)

const arr = [1, 2, 3, 5, 6];
delete arr[0];
delete arr[3];
console.log(arr)

class People {
  constructor(name, age, gender) {
    this.name = name,
      this.age = age,
      this.gender = gender
  }
}

let person1 = new People("Rohan", 34, "Male");
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

//Shallow copy vs deep copy
let employee = {
  eid: "E102",
  ename: "Jack",
  eaddress: "New York",
  salary: 50000
}

console.log("Employee=> ", employee);
let newEmployee = employee;    // Shallow copy
console.log("New Employee=> ", newEmployee);

console.log("---------After modification----------");
newEmployee.ename = "Beck";
console.log("Employee=> ", employee);
console.log("New Employee=> ", newEmployee);
// Name of the employee as well as 
// newEmployee is changed.

let employee1 = {
  eid: "E102",
  ename: "Jack",
  eaddress: "New York",
  salary: 50000
}
console.log("=========Deep Copy========");
let newEmployee1 = JSON.parse(JSON.stringify(employee1));
console.log("Employee=> ", employee1);
console.log("New Employee=> ", newEmployee1);
console.log("---------After modification---------");
newEmployee1.ename = "Beck";
newEmployee1.salary = 70000;
console.log("Employee=> ", employee1);
console.log("New Employee=> ", newEmployee1);


const object1 = {
  name: 'object1',
  age: 23,
  address: {
    city: 'Hsp',
    pincode: 146001
  }
}

const deepCopy1 = structuredClone(object1);
deepCopy1.address.pincode = 199990
console.log(deepCopy1)
console.log(object1)

const deepCopy2 = Object.assign({}, object1);
deepCopy2.address.pincode = 76234
console.log(deepCopy2)
console.log(object1)

//We cannot use name to access , use fullName
const { name: fullName, ...restData } = object1;
console.log(fullName)
console.log(restData)

const {pincode} = object1.address;
const {address:{city}} = object1;
console.log(pincode)
console.log(city)
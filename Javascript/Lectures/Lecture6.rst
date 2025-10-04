Even the variable is constant, but the non-primitive data type values can bve changes as the varible stores the address of the object in heap memory.
But, if we try to reassign the varible to a new object, it will throw error.

example - 
```Javascript
const obj1 = {name: 'John', age: 22}; //reference type - stored in heap
obj1.age =45 //allowed
obj1 = {name: 'Rohit', age: 30} //not allowed
```
obj2 = obj1; //not allowed as obj1 is constant
object.freeze() - to make object immutable

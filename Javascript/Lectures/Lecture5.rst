MEMORY IN JAVASCRIPT 
====================

let a = 10; //primitive type - stored in stack
let b = a; //copy by value
b = 30;
console.log(a) //10
console.log(b). //30

Primitive data types are immutable, value cannot be changed. When we assign a new value to primitive type variable, a new memory is allocated in stack.
let obj1 = {name: 'John', age: 22}; //reference type - stored in heap
let obj2 = obj1; //copy by reference
obj2.age =30;
console.log(obj1.age) //30 
console.log(obj2.age) //30 

|||||||||||||||||||||||||||||||||||||||||
|||                                   |||
|||                                   |||
|||  person(123)                      ||| STACK
|||  12                               ||| (primitives stored here)
|||  Kumar                            |||
|||  D2                               |||
|||  D1                               |||
|||||||||||||||||||||||||||||||||||||||||
|||                                   |||
|||             D1            D4      |||
|||      {id:20, name:'Rohit'}        |||
|||             123 is address        |||
|||                                   ||| HEAP
|||      D2            D3             ||| (non primitive stored here)
|||                                   ||| but variables are in stack
|||                                   |||
|||||||||||||||||||||||||||||||||||||||||


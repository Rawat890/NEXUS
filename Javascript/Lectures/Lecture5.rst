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
|||1 byte 1byte 1byte  ........       |||
|||                                   |||
|||  person(123)                      ||| STACK
|||  12                               ||| (primitives stored here)
|||  Kumar                            |||
|||  D2                               |||
|||  D1                               |||
|||||||||||||||||||||||||||||||||||||||||
|||                                   |||
|||          D1      D4               |||
|||                                   |||
|||             D5                    |||
|||                                   |||
|||                                   |||
|||      {id:20, name:'Rohit'}        |||
|||             123 is address        |||
|||                                   ||| HEAP
|||      D2            D3             ||| (non primitive stored here)
|||              D6                   ||| but variables are in stack
|||                                   |||
|||||||||||||||||||||||||||||||||||||||||

1GB = 2^30 BYTES
8GB = 2^33 BYTES (RANDOM ACCESS MEMORY)

When we try to chjange the value of primitive type variable, a new memory is allocated in stack. But when we change the value of reference type variable, the same memory location is used in heap.

As in languages like C, C++, we have to free memory manually, but in js we have garbage collector which automatically frees memory which is not being used.
In C, int a =10 // means in a only integer value can be stored. But in js, we can store any type so that's is why it is called dynamically type language and new memory is allocated when we try to update the value of primitive type varible.

When we store a movie in memory, there is a reference to it, so even when we delete the reference, the movie is still in memory. The garbage collector frees memory when there is no reference to it.
Means we can override to that memory location

example - How 16 Gb pub g game is loaded in 8 Gb RAM (fragments of game is loaded in memory)
1. Load the game
2. Play the game
3. Close the game
4. Memory is freed by garbage collector
5. Open the game again

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

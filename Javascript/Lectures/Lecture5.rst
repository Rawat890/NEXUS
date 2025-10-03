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
|||             D1            D4      |||
|||      {id:20, name:'Rohit'}        |||
|||             123 is address        |||
|||                                   ||| HEAP
|||      D2            D3             ||| (non primitive stored here)
|||                                   ||| but variables are in stack
|||                                   |||
|||||||||||||||||||||||||||||||||||||||||

1GB = 2^30 BYTES
8GB = 2^33 BYTES (RANDOM ACCESS MEMORY)

When we try to chjange the value of primitive type variable, a new memory is allocated in stack. But when we change the value of reference type variable, the same memory location is used in heap.

As in languages like C, C++, we have to free memory manually, but in js we have garbage collector which automatically frees memory which is not being used.
In C, int a =10 // means in a only integer value can be stored. But in js, we can store any type so that's is why it is called dynamically type language and new memory is allocated when we try to update the value of primitive type varible.

When we store a movie in memory, there is areference to it, so even when we delete the reference, the movie is still in memory. The garbage collector frees memory when there is no reference to it.
HOW JAVASCRIPT CODE GETS EXECUTED ? 

example - 
var x =10;
let y =19;    //let and const introduced in ECMA script before that var is used in javascript
console(x)
console(y)

   Memory               Code
|||||||||||||||||||||||||||||||||||||||
||                 |                 ||
||  x:undefined    |                 || x is initialized while - undefined ,
||  y: (nothing    |                 || but y gets memory but is not initialized yet
||      given)     |                 || Temporal dead zone - memory allocated but value not given
||                 |                 ||
||    Key values   |                 ||
||                 |                 ||
||                 |                 ||
||                 |                 ||
|||||||||||||||||||||||||||||||||||||||

Execution Context in javascript for the code
First Mmeory is allocated to the varibles and the code is executed

   Memory               Code
|||||||||||||||||||||||||||||||||||||||
||                 |                 ||
||  x:10           |line 1 executes  ||
||  y:19           |line 2 executes  ||
||                 | logs data       ||
||                 |                 ||
||    Key values   |                 ||
||                 |                 ||
||                 |                 ||
||                 |                 ||
|||||||||||||||||||||||||||||||||||||||

Javascript is a single threaded, synchronous and dynamically typed and interpretign language
One statement at a time and in sequence

What is Temporal Deadzone ?
It is that time period, when the variables are not initialized properly insisde the memory block, they are said to be in the temporal dead zone.
We are accessing the varibale , even before declaring and defining it

Hositing in javascript is the behavior where variable and function declarations are moved to the top of their containing scope, during the compilation phase, before the code is being executed
Not the assignment

example- 
let a = 10;
let b= 20;
function add(a,b) {
let result = a + b;
return result;
}

var ans= add(a, b);
console(ans);

   Memory               Code
|||||||||||||||||||||||||||||||||||||||
||                  |                 ||
||  x:              |line 1 executes  ||
||  y:              |line 2 executes  ||
||  add: { function |                 ||
|| stored not memory|                 ||
|| assigend to vars |                 ||
||    Key values    |                 ||
||                  |                 ||
||                  |                 ||
||                  |                 ||
|||||||||||||||||||||||||||||||||||||||

execution context created;

Steps -
1. Memory allocated to a and b but value is not assigned
2. add : { } // add is allocated in memory but not executed
3. ans is allocated Memory and assigned a value of undefined
4. Now code execution starts - 
   a = 10 and b =10
   add is called and a and b passed
   New 'EXECUTION CONTEXT' created for the function

   Memory               Code
|||||||||||||||||||||||||||||||||||||||
||                 |                 ||
||  x:10           |line 1 executes  ||
||  y:20           |line 2 executes  ||
||  add: { }       | logs data       ||
||                 |                 ||
||    Key values   |                 ||
||                 |                 ||
||                 |                 ||
||                 |                 ||
|||||||||||||||||||||||||||||||||||||||


||                         ||
||                         ||
||                         ||
||                         ||
||                         ||
||                         ||
||                         ||
||     add(a,b)            ||   Push Pop happens 
|||||||||||||||||||||||||||||                       
||Global execution constant||
|||||||||||||||||||||||||||||                         
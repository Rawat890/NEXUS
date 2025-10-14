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
||      given)     |                 || Temporal dead zone 
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
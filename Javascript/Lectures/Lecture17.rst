HOW JAVASCRIPT CODE GETS EXECUTED ? 

example - 
var x =10;
let y =19;    //let and const introduced in ECMA script before that var is used in javascript
console(x)
console(y)

   Memory               Code
|||||||||||||||||||||||||||||||||||||||
||                 |                 ||
||  x:undefined    |                 ||
||  y: (nothing    |                 ||
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
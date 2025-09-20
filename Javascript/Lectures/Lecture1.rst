Javascript is 'interpreted, not compiled and is dynamically typed'. This means that the code is executed line by line, and types are determined at runtime. This can lead to some unexpected behaviors, especially for those coming from statically typed languages like Java or C++.
example - 
```Javascript
let x =5;
let y=5;
console.log(x==y); //true
console.log(x===y;) //true
let a = '5';
console.log(x==a) //true
console.log(x===a) //false
```
In the above example, `==` checks for value equality and performs type coercion, while `===` checks for both value and type equality. Thus, `x == a` is true because '5' is coerced to 5, but `x === a` is false because they are of different types (number vs string).

Netscape developed Javascript in 1995. It was initially called Mocha, then renamed as Livescript, and finally as Jaavascript. 
ECMA sets the standards for Jaavascript.
Netscape open sourced Javascript in 1996, and it was later adopted by Microsoft for their Internet Explorer browser. 
Mozilla Foundation, which was formed by Netscape, continured and created Firefox browser.

In 2008, Google release V8 engine, which significantly improved the performance of Javascript execution. This led to the rise of server-side Javascript with the introduction of Node.js in 2009.

undefined vs null
- `undefined` means a variable has been declared but not assigned a value yet
- `null` is an assignment value that represents no value or no object (typeof object)
example of upi checking balance (intentionally send null if server is down and unable to fetch balance)

BigInt - normal Number type store number in 64 bit in memory, out of which 52 bits are used for storing the actual number. This means that the maximum safe integer in Javascript is 2^53 - 1 (9007199254740991). Beyond this, precision issues can arise. BigInt allows you to work with integers larger than this limit.
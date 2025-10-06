Difference between slice and substring and splice>
slice can take negative index  but substring cannot.
splice mutates original array but slice do not

const str ='HeloDon';
clg(str.slice(-6,5)) //eloD
Starting index must be greater than end index

const num1 = 231;
const num2 = new Number(231);
const num3 = new Number(231);
console.log(num1==num2); //true
console.log(num2==num3); //false

const array1 = [1,2,45,0];
const array2 = structuredClone(array1) //copy of array1

delete arr[0] //deletes element but creates a hole means space is there.

If date is in number format then it uses the index format, but if in string format it does not uses index format
Default format - Year-Month-Date T Hours:Minutes:Seconds
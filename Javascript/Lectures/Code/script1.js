const num1 = 231;
const num2 = new Number(231);
const num3 = new Number(231);
console.log(num1==num2); //true
console.log(num2==num3); //false

const n1 = 244.1124;
console.log('Fixed upto 2 decimel - ', n1.toFixed(2))
console.log('Precision upto 4 numbers - ', n1.toPrecision(4))

//Generate 10 random numbers between 31 to 50, both included
function getRandomNumber() {
  const n1 = 31;
  const n2 = 50;
  for (let i = 0; i < 30; i++) {
    console.log(`The ${i+1} random number is - `, Math.floor(Math.random()*(n2-n1+1)+n1))
  }
}

getRandomNumber();


const arr1 =[1,2,3,46,76,11];
const a = arr1.splice(1,4);
console.log(a);
console.log(arr1); //deletes the elements above mentioned

const d = new Date();
console.log('Current date is - ',d)
console.log('Current day number is - ', d.getDate())
console.log('Current month is - ', d.getMonth())
console.log('Current year is - ', d.getFullYear())
console.log('String format - ', d.toString())
console.log('Date format only complete date , not time - ', d.toDateString())
console.log('ISO format - ', d.toISOString())
console.log('UTC format - ', d.toUTCString())
console.log('Locale date format - ', d.toLocaleDateString())
console.log('Locale time format - ', d.toLocaleTimeString())
console.log('Locale time string format - ', d.toTimeString())
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

const date = Date.now();
console.log('Date using now - ', date)

const date1 = new Date('2025-10-06');
const date2 = new Date('2002-02-11');
console.log('Subtraction is - ', date1 - date2)

function getDateDiff(d1, d2) {
  const years = d1.getFullYear() - d2.getFullYear();
  const months = d1.getMonth() - d2.getMonth();
  const days = d1.getDate() - d2.getDate();

  let adjustedYears = years;
  let adjustedMonths = months;
  let adjustedDays = days;

  if (adjustedDays < 0) {
    adjustedMonths -= 1;
    adjustedDays += new Date(d1.getFullYear(), d1.getMonth(), 0).getDate();
  }

  if (adjustedMonths < 0) {
    adjustedYears -= 1;
    adjustedMonths += 12;
  }

  return { years: adjustedYears, months: adjustedMonths, days: adjustedDays };
}

const diff = getDateDiff(date1, date2);
console.log(`Difference: ${diff.years} years, ${diff.months} months, ${diff.days} days`);

function getTimer() {
  setInterval(() => {
    const date = new Date();
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    const seconds = String(date.getSeconds()).padStart(2, '0');
    
    console.log(`${hours}:${minutes}:${seconds}`);
  }, 1000);
}


//QUES 1. Find the sum of all elements in an array

const arr = [1,34,12,'', 'Hero',45,19,33];

function printSum1(arr) {
  let sum =0;
  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i]=='number') {
      sum = sum + arr[i];
    }
  }
  return sum;
}

function printSum2(arr) {
  let sum =0;
  arr.forEach(element => {
    if (typeof element==='number') {
      sum += element;
    }
  });
  return sum;
}

function printSum3(arr) {
  let sum =0;
  arr.map((item)=>{
    if (typeof item==='number') {
      sum += item;
    }
  })
  return sum;
}

function printSum4(arr) {
  const sum = arr.reduce((acc, current) => {
    if (typeof current === 'number') {
      return acc + current; // add current to accumulator
    }
    return acc; // keep previous sum if not a number
  }, 0);
  return sum;
}


console.log('Solution 1 - ', printSum1(arr))

//QUES 2. Find the largest number in array
function largestNumber1(arr) {
  
}
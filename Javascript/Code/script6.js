//QUES 1. Find the sum of all elements in an array

const arr = [1,34,12,'', 'Hero',-45,19,33,34,45,1,1,54];

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
  let maximum = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (typeof arr[i]==='number' && maximum < arr[i]) {
      maximum =arr[i];
    }
  }
  return maximum;
}

function largestNumber2(arr) {
  let maximum = arr[0];
  arr.forEach((element)=>{
    if (typeof element==='number' && element > maximum) {
      maximum=element
    }
  })
  return maximum;
}

function largestNumber3(arr) {
  return arr.reduce((max, current) => {
    if (typeof current === 'number' && current > max) {
      return current;
    }
    return max;
  }, arr[0]);
}

console.log('maximum 1 - ', largestNumber1(arr))
console.log('maximum 2 - ', largestNumber2(arr))
console.log('maximum 3 - ', largestNumber3(arr))

//QUES 3. Find the smallest number in an array
function smallestNumber1(arr) {
  return arr.reduce((min, current)=>{
    if (typeof current==='number' && current < min) {
      return current;
    }
    return min;
  }, arr[0])
}

console.log('Smallest 1 - ', smallestNumber1(arr))

//QUES 4. Reverse an array without using the built-in reverse method
function arrayReverse1(arr) {
  for (let i = 0, j =arr.length-1 ; i <=j; i++, j--) {
    let temp = arr[i];
    arr[i]=arr[j];
    arr[j]=temp;
  }

  console.log('Reversed array - ', arr);
}

function arrayReverse2(arr) {  //modifies original array
  const reversed = arr.reverse();
  console.log(reversed)
}

function arrayReverse3(arr) {  
  const reversed = [...arr].reverse();
  console.log(reversed)
}

function arrayReverse4(arr) {  
  const reversed = arr.reduceRight((acc, current) => {
  acc.push(current);
  return acc;
  }, []);
  console.log(reversed)
}

arrayReverse4(arr)


//QUES 5. Calculate the average of numbers in an array
function average1(arr) {
  const sum = arr.reduce((acc, current)=>{
    if (typeof current == 'number') {
      acc = acc + current;
    }
    return acc;
  }, 0);
  return sum/arr.length;
}

function average2(arr) {
  let sum =0;
   arr.forEach((element)=>{
    if (typeof element ==='number') {
      sum =sum + element;
    }
  })
  return sum/arr.length;
}

function average3(arr) {
  const sum = arr.reduce((acc, current)=>{
    if (typeof current == 'number') {
      acc = acc + current;
    }
    return acc;
  }, 0);
  return sum/arr.length;
}

console.log('Average 1 - ', average3(arr))

//QUES 6. Check if an element exists in an array
console.log(Array.isArray(arr))
console.log(arr.includes('Hero'))

//QUES 7. Count how many times a specific element appears in an array
function countNumber(arr, num) {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i]==='number' && arr[i]===num) {
      count++;
    }
  }
  return count;
}

console.log('Count is - ', countNumber(arr,10))
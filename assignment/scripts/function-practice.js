console.log('***** Function Practice *****')

// Add the required code to complete the functions below
// After _each_ function, use a console log to call the function
// to test it and display the result

// 1. Function to return 'Hello World!'
function hello() {
  return 'Hello World!';
}
// Call the function to test
console.log('Test - should say "Hello World!"', hello());

// 2. Function to return an personalized hello, using the `name` argument.
//    for example 'Hello, Jo!', or 'Hello, Stacy!'
function helloName( name ) {
  return `Hello, ${name}!`;
}
// Remember to call the function to test
console.log('helloName: Expect Hello, Ryan, got:', helloName('Ryan'));

// 3. Function to add two numbers together & return the result
function addNumbers( firstNumber, secondNumber ) {
  // return firstNumber + secondNumber;
  return firstNumber + secondNumber;
}
console.log('addNumbers: Expect 5, got:', addNumbers(2,3));

// 4. Function to multiply three numbers & return the result
function multiplyThree(num1, num2, num3 ){
  return num1*num2*num3;
}
console.log('multiplyThree: Expect 6, got:', multiplyThree(1,2,3));

// 5. Function that will return true if a number is positive, 
//    or greater than zero, and false otherwise
function isPositive( number ) {
  if ( number > 0 ){
    return true;
  } else {
    return false;
  }
}

// Call the function to test each outcome (true & false) 
// Write a separate console.log statement for each outcome
console.log( 'isPositive - should say true', isPositive(3) );
console.log( 'isPositive - should say false', isPositive(0) );
console.log( 'isPositive - should say false', isPositive(-3) );

// 6. Function to return the _last_ item in an array. If the 
//    array is empty, return `undefined`.
function getLast( array ) {
  if ((typeof array === 'array') && (array.length != 0)) {
    return array[array.length-1];
  }
  return `undefined`;
}
let testArray = [9,'grape', 'rancore', 8];
console.log('getLast: Expect 8, got:', getLast(testArray));
console.log('getLast: Expect undefined, got:', getLast([]));
console.log('getLast: Expect undefined, got:', getLast(3));

// 7. Function to find a value in an array. Return true if the 
//    value is found and false otherwise. Use a loop;
//    DO NOT use Array.includes, Array.indexOf, or Array.find 
function find( value, array ){
  for (i = 0; i < array.length; i++){
    if (array[i] === value) {
      return true;
    }
  }
  return false;
}
console.log('find: Expect true, got:', find('rancore', testArray));
console.log('find: Expect false, got:', find('panda', testArray));


// ----------------------
// Stretch Goals
// ----------------------
// 8. Function to check if a letter is the first letter in a 
//    string. Return true if it is, and false otherwise
function isFirstLetter(letter, string) {
  if (string[0] === letter) {
    return true;
  }
  return false;
}
console.log( 'isFirstLetter - should say true', isFirstLetter('a', 'apple') );
console.log( 'isFirstLetter - should say false', isFirstLetter('z', 'apple') );

// 9. Function to return the sum of all numbers in an array
function sumAll( array ) {
  let sum = 0
  // TODO: loop to add items
  for (let i = 0; i < array.length; i++) {
    if (typeof array[i] === 'number') {
      sum += array[i];
    }
  }
  return sum;
}
console.log('sumAll: Expect 17, got:', sumAll(testArray));

// 10. Function to return a new array of all positive (greater than zero)
//     numbers contained in an input array. If there are no positive numbers
//     return an empty array. Note: The input array should not change.

function onlyPositive( array ) {
  let returnArray = [];
  function pushPositiveIndex( index ) {
    if ((typeof array[index] === 'number') && (array[index] > 0)) {
      returnArray.push(array[index]);
    }
    if (array[index+1] != undefined) {
      pushPositiveIndex(index+1);
    }
  }
  pushPositiveIndex(0);
  return returnArray;
}

let testPositive = [5,-3,0,'liver',6,'zonk'];
console.log('onlyPositive: Expect [5,6], got:', onlyPositive(testPositive));


// 11. Pick a problem from Edabit(https://edabit.com/) or 
//     CodeWars(https://www.codewars.com/). Then describe it 
//     here in a comment, write the function, and test it!

//Create a function that determines whether a number is Oddish or Evenish. 
//A number is Oddish if the sum of all of its digits is odd, 
//and a number is Evenish if the sum of all of its digits is even. 
//If a number is Oddish, return "Oddish". Otherwise, return "Evenish".

function oddish(num) {
  let numString = num.toString(); //Convert num to a string and store it in numString
  let numSum = 0; //Innitialize numSum at 0
  for (i = 0; i < numString.length; i++) { //Loop through each character in numString
    numSum += Number(numString[i]); //Convert each character to a number and add it to numSum
  }
  if (numSum % 2 === 0) { //If the remainder after dividing numSum by 2 is 0, it is an even number
    return 'Evenish'; //Return evenish
  }
  return 'Oddish'; //If evenish was not returned, return oddish
}

console.log('oddish: Expected Oddish, got:', oddish(153));
console.log('oddish: Expected Evenish, got:', oddish(26));

//--------------------Sort numbers in descending order--------------------//
// Given a number, return a number with the same integers but in descending order.

function descendingOrder(n) { 
  let numString = n.toString(); //Convert the n number to a string
  let descendingNum = []; //Innitialize an empty array
  for(let i = 0; i < numString.length; i++) {descendingNum.push(-1)}; //Fill the descendingNum array with placeholder values up to the length of numString
  for(let i = 0; i < numString.length; i++) { //Loop through the numString index
    let thisIndex = 0; //Innitialize thisIndex as 0 at the beginning of each loop
    for(let k = 0; k < numString.length; k++) { //Loop through the array a second time
      if(numString[i] < numString[k]) { //If numString at i is less than numString at k
        thisIndex++; //Add one to thisIndex //thisIndex becomes the number of values that numString[i] is less than and that value is used to place numString[i] 
      }              //in the descendingNum array at index thisIndex
    } //while loop for repeted numbers, e.g. 3 and 3 would have the same thisIndex value after the for loop
    while (descendingNum[thisIndex] != -1) { //If descendingNum at thisIndex is not -1, that index has already been filled
      thisIndex++; //Add one to the index and repete until a -1 index is found.
    }
    descendingNum[thisIndex] = numString[i]; //Set descendingNum at thisIndex to equal numString at i
  }
  return Number(descendingNum.join('')); //Join the array togeather and convert it to a number. Return that number
}

n = 355564372;
console.log(descendingOrder(n));

// when we make an array using [] we are creating a INSTANCE of the Array prototypethe full way to create an array is to use the new keyword: const numbers = new Array(1, 2, 3, 4, 5) we [] to make it easer and conveniet
const numbersarray = [1, 2, 3, 4, 5];
console.log(numbersarray)

const numbersnew = new Array(1, 2, 3, 4, 5);
console.log(numbersnew)

//filter
const numbers = [1, 2, 3, 4, 5]
const oddNumbers = numbers.filter((number) => number % 2)

console.log(oddNumbers) // [1, 3, 5]

//A predicate is a function that returns a boolean value
function isEven(number) {
    return number % 2 === 0;
}

console.log(isEven(4));  // Output: true
console.log(isEven(7));  // Output: false

// modulus operator. It returns the remainder of a division operation. For example, 5 % 2 returns 1, because 2 goes into 5 two times, with a remainder of 1.
console.log(5 % 2);  // Output: 1
console.log(10 % 3); // Output: 1
console.log(7 % 4);  // Output: 3
console.log(9 % 3);  // Output: 0

//To coerce a number to a boolean in JavaScript, you can use the Boolean() function or double negation (!!).

//Using Boolean() function:

const numberz = 5;
const result = Boolean(numberz);  // Converts number to a boolean
console.log(result);  // Output: true

//Using double negation (!!):let number = 5;
const results = !!number;  // Converts number to a boolean
console.log(results);  // Output: true

//Numbers other than 0 are coerced to true.
// 0 is coerced to false.
console.log(Boolean(0));  // Output: false
console.log(Boolean(1));  // Output: true
console.log(!!0);        // Output: false
console.log(!!5);        // Output: true



// filter 
//The filter() method in JavaScript creates a new array with all elements that pass a test defined by a provided function.
const filternumbers = [1, 2, 3, 4, 5];
const evenfilter = filternumbers.filter(num => num % 2 === 0);

console.log(evenfilter);  // Output: [2, 4]



// thinking like a developer
const players = [
  { name: 'DoomGuy', frags: 25, deaths: 0 },
  { name: 'Slayer', frags: 25, deaths: 1 },
  { name: 'Marine', frags: 12, deaths: 15 },
  { name: 'Noob', frags: 0, deaths: 25 },
]

const playersWithMoreFragsThanDeath = players.filter((player) => {
  // Additional `console.log` for clarity.
  console.log(`We are now looking at this player: ${player.name}`)

  return player.frags > player.deaths
})

console.log(playersWithMoreFragsThanDeath)
// output
//We are now looking at this player: DoomGuy
//We are now looking at this player: Slayer
//We are now looking at this player: Marine
//We are now looking at this player: Noob
//[
  //{ name: 'DoomGuy', frags: 25, deaths: 0 },
  // { name: 'Slayer', frags: 25, deaths: 1 }
//]

//reduce
//The reduce() method in JavaScript applies a function to each element of an array (from left to right) to reduce it to a single value, such as the sum, product, or other aggregated results.

const reducenumbers = [1, 2, 3, 4, 5];

// Using reduce to sum the numbers
const total = reducenumbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);

console.log(total);  // Output: 15

//accumulator is the running total (or result) that is returned from the previous call of the function.

//currentValue is the current element being processed in the array.

//0 is the initial value of the accumulator.


//think like a dev code example

const reduceplayer = [
    { name: 'DoomGuy', frags: 25, deaths: 0 },
    { name: 'Slayer', frags: 25, deaths: 1 },
    { name: 'Marine', frags: 12, deaths: 15 },
    { name: 'Noob', frags: 0, deaths: 25 },
  ]
  
  const totalFrags = reduceplayer.reduce((total, player) => {
    return total + player.frags
  }, 0)
  console.log(totalFrags) // Output: 62

  //find
  //The find() method in JavaScript returns the first element in an array that satisfies a provided testing function.
  
  const people = [
    { name: 'John', age: 30 },
    { name: 'Jane', age: 25 },
    { name: 'Sam', age: 35 }
  ];
  
  // Find the person with the name 'Jane'
  const person = people.find(p => p.name === 'Jane');
  
  console.log(person);  // Output: { name: 'Jane', age: 25 }
  //find() searches through the array of people objects and returns the first one that has a matching name of 'Jane'.
  //If no match is found, find() will return undefined.


  //think like a dev code example

const findplayers = [
  { name: 'DoomGuy', frags: 25, deaths: 0 },
  { name: 'Slayer', frags: 25, deaths: 1 },
  { name: 'Marine', frags: 12, deaths: 15 },
  { name: 'Noob', frags: 0, deaths: 25 },
]

const firstPlayerWithMoreFragsThanDeaths = findplayers.find((player) => player.frags > player.deaths)

console.log(firstPlayerWithMoreFragsThanDeaths) // { name: 'DoomGuy', frags: 25, deaths: 0 }


//some
//The some method in JavaScript is used to test whether at least one element in an array passes the test implemented by a provided callback function. It returns true if the callback function returns true for any one element, otherwise it returns false.
//array.some(callback(element, index, array), thisArg)
//callback: A function that tests each element of the array.
//thisArg: Optional. A value to use as this when executing the callback.

const somenumbers = [1, 2, 3, 4, 5];

// Check if the array contains any number greater than 3
const hasGreaterThanThree = somenumbers.some(num => num > 3);

console.log(hasGreaterThanThree); // Output: true

//think like a dev code example

const someplayers = [
  { name: 'DoomGuy', frags: 25, deaths: 0 },
  { name: 'Slayer', frags: 25, deaths: 1 },
  { name: 'Marine', frags: 12, deaths: 15 },
  { name: 'Noob', frags: 0, deaths: 25 },
]

const hasFrags = someplayers.some((player) => player.frags)

console.log(hasFrags) // true

//every
//The every method checks if all elements in an array satisfy a given condition, returning true or false.

const everynumbers = [2, 4, 6, 8];

// Check if all numbers in the array are even
const allEven = everynumbers.every(num => num % 2 === 0);

console.log(allEven); // Output: true
//think like a dev code example


const everyplayers = [
  { name: 'DoomGuy', frags: 25, deaths: 0 },
  { name: 'Slayer', frags: 25, deaths: 1 },
  { name: 'Marine', frags: 12, deaths: 15 },
  { name: 'Noob', frags: 0, deaths: 25 },
]

const allPlayersHaveMoreFragsThanDeaths = everyplayers.every((player) => player.frags > player.deaths)

console.log(allPlayersHaveMoreFragsThanDeaths) // false
// sort
//The sort method sorts an array in place and returns it, defaulting to ascending order by string Unicode.
const sortnumbers = [3, 1, 4, 2];
sortnumbers.sort((a, b) => a - b); // Sorts in ascending numerical order
console.log(sortnumbers); // Output: [1, 2, 3, 4]

//think like a dev code example


const sortplayers = [
  { name: 'DoomGuy', frags: 25, deaths: 0 },
  { name: 'Slayer', frags: 25, deaths: 1 },
  { name: 'Marine', frags: 12, deaths: 15 },
  { name: 'Noob', frags: 0, deaths: 25 },
]

const sortedPlayers = sortplayers.sort((a, b) => b.frags - a.frags)

console.log(sortedPlayers)

//output
//[
  //{ name: 'DoomGuy', frags: 25, deaths: 0 },
  //{ name: 'Slayer', frags: 25, deaths: 1 },
  //{ name: 'Marine', frags: 12, deaths: 15 },
  //{ name: 'Noob', frags: 0, deaths: 25 }
//]





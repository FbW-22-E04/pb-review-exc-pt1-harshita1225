// ### CHALLENGE 1: REVERSE A STRING
// // Return a string in reverse
function reverseString(str) {
  console.log(str.split("").reverse().join(""));
}
reverseString("hello"); // "olleh";

// #### CHALLENGE 2: VALIDATE A PALINDROME
// // Return true if palindrome and false if not

function isPalindrome(str) {
  // const strReverse = str.split("").reverse().join("");

  for (let i = 0; i < str.length; i++) {
    if (str[i] !== str[str.length - 1 - i]) {
      return false;
    }
  }
  return true;
}
console.log("is this string a Palindrome", isPalindrome("racecar")); //true;
console.log("is this string a Palindrome", isPalindrome("hello")); // false;

// ### CHALLENGE 3: REVERSE AN INTEGER
// // Return an integer in reverse

function reverseInt(num) {
  let numStr = String(num);
  let reversestr = numStr.split("").reverse().join("");
  let result = Number(reversestr);
  console.log(result);
}
reverseInt(521); // 125;
reverseInt(54821987); //

// ### CHALLENGE 4: CAPITALIZE LETTERS
// // Return a string with the first letter of every word capitalized

function capitalizeLetters(str) {
  let words = str.split(" ");
  for (let i = 0; i < words.length; i++)
    words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);

  const result = words.join(" ");
  console.log(result);
}

capitalizeLetters("i love javascript"); ///'I Love Javascript';

// ### CHALLENGE 5: MAX CHARACTER
// // Return the character that is most common in a string
function maxCharacter(str) {
  let lettersSort = str.split("").sort();

  const result = lettersSort.reduce((acc, curr) => {
    acc[curr] = acc[curr] ? acc[curr] + 1 : 1;
    return acc;
  }, {});
  const maxChar = Object.values(result);
  const maxCharFinal = Math.max(...maxChar);
  return maxCharFinal;
}

console.log("max char repeat is:", maxCharacter("javascript"));

// ### CHALLENGE 6: FIZZBUZZ
// Write a program that prints all the numbers from 1 to 100. For multiples of 3, instead of the number, print "Fizz", for multiples of 5 print "Buzz". For numbers which are multiples of both 3 and 5, print "FizzBuzz".

for (let i = 0; i < 100; i++) {
  if (i % 3 === 0) {
    console.log("multiples of 3", i);
  }
}

for (let i = 0; i < 100; i++) {
  if (i % 5 === 0) {
    console.log("multiples of 5", i);
  }
}
for (let i = 0; i < 100; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log("multiples of both 3 and 5", i);
  }
}

// ### CHALLENGE 7: LONGEST WORD
// Return the longest word of a string
// SOLUTION 1 - Return a single longest word
// SOLUTION 2 - Return an array and include multiple words if they have the same length
// SOLUTION 3 - Only return an array if multiple words, otherwise return a string

function longestWord(str) {
  let words = str.split(" ");
  console.log(words);
  const result = words.reduce(
    (acc, curr) => (acc.length >= curr.length ? acc : curr),
    []
  );

  console.log(result);
}

longestWord("Hi there, my name is Brad") === "there,";
longestWord("My name is Brad") === ["name", "brad"];
longestWord("Brad") === "brad";

// ### CHALLENGE 8: ARRAY CHUNKING
// // Split an array into chunked arrays of a specific length

function chunkArray(arr, len) {
  let chunkArray = [];
  for (let i = 0; i < arr.length; i += len) {
    chunkArray.push(arr.slice(i, i + len));
  }
  console.log("chunk my array===>", chunkArray);
}
chunkArray([1, 2, 3, 4, 5, 6, 7], 3); //[[1, 2, 3], [4, 5, 6], [7]];
chunkArray([1, 2, 3, 4, 5, 6, 7], 2); // [[1, 2], [3, 4], [5, 6], [7]];

// ### CHALLENGE 9: FLATTEN ARRAY
// Take an array of arrays and flatten to a single array

const result = [[1, 2], [3, 4], [5, 6], [7]].flat(2);
console.log("flatten array ==>", result);
// [[1, 2], [3, 4], [5, 6], [7]] = [1, 2, 3, 4, 5, 6, 7]

// ### CHALLENGE 10: ANAGRAM
// Return true if anagram and false if not

function isAnagram(str1, str2) {
  let str1Sort = str1.split(" ").sort().join("");
  let str2Sort = str2.split(" ").sort().join("");

  if (str1.length !== str2.length) return false;
  else if (str1Sort === str1Sort) return true;
}
console.log("isAnagram >>>>", isAnagram("elbow", "below")); // true
console.log("isAnagram >>>>", isAnagram("Dormitory", "dirty room##")); //false

// ### CHALLENGE 11: ADD ALL NUMBERS
// Return a sum of all parameters entered regardless of the amount of numbers
console.log(
  "Sum of numbers in an array using reduce method:",
  [2, 5, 6, 7].reduce((acc, curr) => acc + curr, 0)
);
// addAll(2, 5, 6, 7) === 20;

// ### CHALLENGE 12: SUM ALL PRIMES

// Pass in a number to loop up to and add all of the prime numbers. A prime number is a whole number greater than 1 whose only factors are 1 and itself
function sumAllPrimes(num) {
  let store = [],
    i,
    j,
    primes = [];
  for (i = 2; i <= num; ++i) {
    if (!store[i]) {
      primes.push(i);
      for (j = i << 1; j <= num; j += i) {
        store[j] = true;
      }
    }
  }
  const result2 = primes.reduce((acc, curr) => acc + curr, 0);
  return result2;
}

console.log("sum of ALL prime numbers is :", sumAllPrimes(10)); //17;

// ### CHALENGE 13: SEEK AND DESTROY
// Remove from the array whatever is in the following arguments. Return the leftover numbers in an array

function seekAndDestroy(arr, ...valuesToRemove) {
  return arr.filter((value) => !valuesToRemove.includes(value));
}

console.log(
  "seek and destroy:",
  seekAndDestroy([2, 3, 4, 6, 6, "hello"], 2, 6)
); // [3, 4, 'hello'];

// ### CHALLENGE 14: EVEN & ODD SUMS
// Take in an array and return an array of the sums of even and odd numbers

let arr1 = [50, 60, 60, 45, 71];

// sum of even
const sumEven = arr1.reduce(
  (acc, curr) => (curr % 2 === 0 ? acc + curr : acc),
  0
);
console.log("sum of even values", sumEven);

//sum of odd
const sumOdd = arr1.reduce(
  (acc, curr) => (curr % 2 !== 0 ? acc + curr : acc),
  0
);
console.log("sum of even values", sumOdd);
// evenOddSums([50, 60, 60, 45, 71]) == [170, 116];

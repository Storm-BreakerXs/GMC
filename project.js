// String Manipulation Functions

// REVERSE A STRING

function reverseString(str) {
  return str.split("").reverse().join("");
}
console.log(reverseString("hello")); // Output: "olleh"

// COUNT CHARACTERS

function countCharacters(str) {
  return str.length;
}
console.log(countCharacters("hello")); // Output: 5

// Capitalize Words

function capitalizeWords(sentence) {
  return sentence
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}
console.log(capitalizeWords("hello world")); // Output: "Hello World"

// ARRAY FUNCTIONS

// Find Maximum and Minimum

function findMaximum(arr) {
  return Math.max(...arr);
}

function findMinimum(arr) {
  return Math.min(...arr);
}

console.log(findMaximum([1, 3, 5, 7, 9])); // Output: 9
console.log(findMinimum([1, 3, 5, 7, 9])); // Output: 1

// Sum of Array

function filterArray(arr, condition) {
  return arr.filter(condition);
}
console.log(filterArray([1, 2, 3, 4, 5], (num) => num > 2)); // Output: [3, 4, 5]

// Filter Array

function filterArray(arr, condition) {
  return arr.filter(condition);
}
console.log(filterArray([1, 2, 3, 4, 5], (num) => num > 2)); // Output: [3, 4, 5]

// Mathematical Functions

// Factorial

function factorial(n) {
  if (n <= 1) return 1;
  return n * factorial(n - 1);
}
console.log(factorial(5)); // Output: 120

// Prime Number Check

function isPrime(num) {
  if (num <= 1) return false;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return true;
}
console.log(isPrime(7)); // Output: true
console.log(isPrime(10)); // Output: false

// Fibonacci Sequence

function fibonacci(n) {
  let fib = [0, 1];
  for (let i = 2; i < n; i++) {
    fib.push(fib[i - 1] + fib[i - 2]);
  }
  return fib;
}
console.log(fibonacci(10)); // Output: [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]

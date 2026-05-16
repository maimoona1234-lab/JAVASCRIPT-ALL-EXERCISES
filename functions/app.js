// NUMBER 1
//  const add = (a,b) => a+b ;
//  console.log (add(1,3));

// number2
// const isEvenOdd = num => num % 2 ===0? "Even": "Odd";
// console.log(isEvenOdd (7))

// number3
// const greater = (a, b) => (a > b ? a : b);
// console.log(greater(10, 20));

// number 4
// const result = marks => (marks > 40 ? "Pass" : "Fail");
// console.log(result(35));
// console.log(result(75));

// number 5
// const checkNumber = num => (num >= 0 ? "Positive" : "Negative");
// console.log(checkNumber(5));
// console.log(checkNumber(-3));

// number6
// const square = num => num * num;
// console.log(square(6));

// number 7
// const toUpper = str => str.toUpperCase();
// console.log(toUpper("hello"));


// number 8
// const toLower = str => str.toLowerCase();
// console.log(toLower("HELLO"));


// number 9
// const isEmpty = str => str.length === 0;
// console.log(isEmpty(""));
// console.log(isEmpty("ChatGPT"));


// number 10
// const firstChar = str => str[0];
// console.log(firstChar("JavaScript"));


//number 11
// const firstElement = arr => arr[0];
// console.log(firstElement([10, 20, 30]));


// number 12
// const lastElement = arr => arr[arr.length - 1];
// console.log(lastElement([10, 20, 30]));


// number 13
// const countElements = arr => arr.length;
// console.log(countElements([1, 2, 3, 4, 5]));


//number 14
// const evenNumbers = arr => arr.filter(num => num % 2 === 0);
// console.log(evenNumbers([1, 2, 3, 4, 5, 6]));


//number 15
// const oddNumbers = arr => arr.filter(num => num % 2 !== 0);
// console.log(oddNumbers([1, 2, 3, 4, 5, 6]));


// number 16
// const greaterThanTen = arr => arr.filter(num => num > 10);
// console.log(greaterThanTen([5, 12, 8, 20, 3]));


//number 17
// const largestNumber = arr => Math.max(...arr);
// console.log(largestNumber([10, 50, 25, 99, 5]));


// number 18
// const smallestNumber = arr => Math.min(...arr);
// console.log(smallestNumber([10, 50, 25, 99, 5]));


// number 19
// const onlyStrings = arr => arr.filter(item => typeof item === "string");
// console.log(onlyStrings([1, "Ali", true, "Ahmed", 50]));


//number 20
// const removeLast = arr => arr.slice(0, -1);
// console.log(removeLast([1, 2, 3, 4]));


//number 21
// const sumArray = arr => arr.reduce((sum, num) => sum + num, 0);
// console.log(sumArray([1, 2, 3, 4, 5]));


// number 22
// const countVowels = str => (str.match(/[aeiou]/gi) || []).length;
// console.log(countVowels("JavaScript"));


// number 23
// const removeSpaces = str => str.replace(/\s/g, "");
// console.log(removeSpaces("Hello World"));


// number 24
// const containsWord = (sentence, word) => sentence.includes(word);
// console.log(containsWord("I love JavaScript", "JavaScript"));


// number 25
// const firstWord = sentence => sentence.split(" ")[0];
// console.log(firstWord("JavaScript is awesome"));


// number 26
// const lastWord = sentence => {
//   const words = sentence.split(" ");
//   return words[words.length - 1];
// };
// console.log(lastWord("JavaScript is awesome"));


//number 27
// const reverseString = str => str.split("").reverse().join("");
// console.log(reverseString("hello"));


// number 28

// const divisibleBy3 = num => num % 3 === 0;
// console.log(divisibleBy3(9));
// console.log(divisibleBy3(10));


// number 29
// const onlyLetters = str => /^[A-Za-z]+$/.test(str);
// console.log(onlyLetters("Hello"));
// console.log(onlyLetters("Hello123"));


// number 30
// const sentenceToWords = sentence => sentence.split(" ");
// console.log(sentenceToWords("JavaScript is fun"));
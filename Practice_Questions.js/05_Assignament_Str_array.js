//String Reverse \ Plaindrome Program
//Given a string, Reverse it and print true if they are same.

function checkPalindrome(str) {
    // 1. Reverse the string
    const reversedStr = str.split('').reverse().join('');

    // 2. Compare original with reversed
    return str === reversedStr;
}

// Test cases
console.log(checkPalindrome("racecar")); // true
console.log(checkPalindrome("hello"));   // false



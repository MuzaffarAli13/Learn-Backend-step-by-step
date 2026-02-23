// 1. Palindrome check ("madam" → true, "hello" → false)

// 4. Longest word in sentence
// 5. Object manipulation (students data)

function isPalindrome(str) {
    str = str.toLowerCase();
    let reversed = str.split('').reverse().join('');
    return str === reversed;
}

console.log(isPalindrome("Madam"));   // true ✅
console.log(isPalindrome("RaceCar")); // true ✅
console.log(isPalindrome("Hello"));   // false ✅

// 2. Count words in "hello world from pakistan" → 4
function countWord(str){
    let word = str.trim();
    // if(word === "") return 0
    let words = word.split(" ").filter((word)=> word !== "");
    return words.length;
};
console.log(countWord("hello world from pakistan"));


// 3. Title case "hello world" → "Hello World"

// . String ko words mein todo (split by space)
// 2. Har word ka first letter capital banao
// 3. Baaki letters small rakho
// 4. Words ko wapas jod do (join)

let str = "hello world"
function titleCase(str){
      let word = str.split(" ");
      let result = []
      for(let i=0; i < word.length; i++){
        let words = word[i];
        let title = words[0].toUpperCase() + words.slice(1).toLowerCase();
        result.push(title)
      };
      return result
    
}
console.log(titleCase(str));



// 4. Longest word in sentence
function longestWord(str){
    let words = str.split(" ");
    let longest = '';
    for(let i=0; i < words.length; i++){
        if(words[i].length > longest.length){
            longest = words[i]
        }
    };
    return longest
};
console.log(longestWord("hello world from pakistan"));



// 5. Object manipulation (students data)
let students = {
    name: "Muzaffar",
    obtainedMarks: 425,
    totalMarks: 500
};

function persontage(std){
    return (std.obtainedMarks / std.totalMarks) * 100
};

console.log(persontage(students));

// Method 2 
let student = [
    { name: "Ali", obtained: 425, total: 500 },
    { name: "Sara", obtained: 460, total: 500 },
    { name: "Ahmed", obtained: 390, total: 500 }
]

function getpersontage(std){
    for(let i=0; i < std.length; i++){
        let persontage = (std[i].obtained / std[i].total) * 100
        std[i].persontage = persontage
    }
    return std;
}
console.log(getpersontage(student));


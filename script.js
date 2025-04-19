let sentence = "I am learning JavaScript now.";

let length = 0;
let words = 1;
let vowels = 0;

for (let i = 0; i < sentence.length; i++) {
  let char = sentence[i];

  length++;

  if (char === ' ') {
    words++;
  }

  if (char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u' ||
      char === 'A' || char === 'E' || char === 'I' || char === 'O' || char === 'U') {
    vowels++;
  }
}

console.log("Length:", length);
console.log("Words:", words);
console.log("Vowels:", vowels);
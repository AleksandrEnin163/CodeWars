// function abbrevName(name){
//     const [firstName, lastName] = name.split(' ')

//     return `${firstName[0]}.${lastName[0]}`.toUpperCase()
// }

// abbrevName("Qwe Rty") === "Q.R"

// 10_000 × 10_000 === 100_000_000
// 20_000 × 20_000 === 400_000_000

// O(N²)
// function arrayDiff(a, b) {
//   const s = new Set(b);
//   return a.filter((el) => !s.has(el));

  // const newArr = [];
  // for(const element of a) {
  //   if (!b.includes(element)) {
  //     newArr.push(element);
  //   }
  // }
  // return newArr;
// }

// const N = 80_000;
// const a = [];
// const b = [];

// for(let i = 0; i < N; i++) {
//   a.push(i);
//   b.push(-i);
// }

// console.time(N);
// console.log(arrayDiff(a, b).length);
// console.timeEnd(N);

//  5000: 32.425ms
// 10000: 77.49ms
// 20000: 279.73ms
// 40000: 1.123s
// 80000: 4.426s         43.648ms

// console.log(arrayDiff([1, 3, 5, 7], [1, 2, 3, 4])) // [5, 7]

// function formatWords(words) {
//   if (words === null) {
//     return "";
//   }

//   const nonEmptyWords = words.filter((word) => word !== "");

//   if (nonEmptyWords.length === 0) {
//     return "";
//   }
//   if (nonEmptyWords.length === 1) {
//     return nonEmptyWords[0];
//   }

  // nonEmptyWords[nonEmptyWords.length - 1] = `${nonEmptyWords[nonEmptyWords.length - 2]} and ${nonEmptyWords[nonEmptyWords.length - 1]}`
  // nonEmptyWords.splice(nonEmptyWords.length -2, 1)
  // return nonEmptyWords.join(', ')

//   const wordsWithoutLast = nonEmptyWords.slice(0, -1).join(", ");
//   const lastWord = nonEmptyWords.at(-1);

//   return `${wordsWithoutLast} and ${lastWord}`;
// }

// isLoading && <Loader />

// formatWords(null) // ""
// formatWords(["", "", "", ""]) // ""
// formatWords([]) // ""
// formatWords(["A"]) // "A"
// formatWords(["A", "B"]) // "A and B"
// formatWords(["A", "B", "C", "D"]) // "A, B, C and D"
// formatWords(["A", "", "B", "C", "", "D"]) // "A, B, C and D"
// function greetDevelopers(list) {
//   return list.map((el) => ({
//     ...el,
//     greeting: `Hi ${el.firstName}, what do you like the most about ${el.language}?`,
//   }));
// }

// function zipWith(fn, a0, a1) {
  // const arrLength = a0.length > a1.length ? a1.length : a0.length
//   const arrLength = Math.min(a0.length, a1.length)
//   const zipArr = [];
//   for (let i = 0; i < arrLength; i++) {
//     zipArr.push(fn(a0[i], a1[i]));
//   }
//   return zipArr;
// }

// function solve(arr){
    //..
//   }

// https://www.codewars.com/kata/homogenous-arrays/train/javascript


// 400
function sortByLength(array) {
  return array.sort((a, b) => a.length - b.length);
}

//   401
function dbSort(a) {
  const nums = a
    .filter((value) => typeof value === "number")
    .sort((a, b) => a - b);
  const strings = a.filter((value) => typeof value === "string").sort();
  return [...nums, ...strings];
}

//    402
function sort(students) {
  return students
    .sort((a, b) => {
      if (a.gpa !== b.gpa) return b.gpa - a.gpa;
      const lastNameA = a.fullName.split(" ")[1][0];
      const lastNameB = b.fullName.split(" ")[1][0];
      if (a.gpa === b.gpa && lastNameA !== lastNameB)
        return lastNameA.localeCompare(lastNameB);
      else if (a.gpa === b.gpa && lastNameA === lastNameB) return a.age - b.age;
    })
    .map((student) => student.fullName)
    .join(",");
}

//   409
function convertHashToArray(hash) {
  return Object.entries(hash).sort((a, b) => a[0].localeCompare(b[0]));
}

//   403
// function sortArray(array) {

//     const oddNumbers = array
//       .map((num, index) => ({ num, index }))
//       .filter(val => val.num % 2 !== 0)
//       .sort((a, b) => a.num - b.num)
//       .forEach(val => array[val.index] = val.num)

//     return array
//   }

// не работает

function sortArray(array) {
  const oddNumbers = array.filter((num) => num % 2 !== 0).sort((a, b) => a - b);

  array.forEach((val, index) => {
    if (val % 2 !== 0) {
      array[index] = oddNumbers.shift();
    }
  });

  return array;
}

//   как правильно переписать с map

// 404
function sortByBit(arr) {
  return arr.sort((a, b) => {
    let bitsA = a.toString(2).replaceAll("0", "").length;
    let bitsB = b.toString(2).replaceAll("0", "").length;

    if (bitsA === bitsB) return a - b;
    return bitsA - bitsB;
  });
}

// function sort(array, cb) {



//   for(let i = 0; i < array.length; i++){
//     let minIndex = i;
//     for (let ind = i; ind < array.length; ind++) {
//       // if (array[ind] < array[minIndex]) {
//       if (cb(array[ind], array[minIndex]) < 0) {
//         minIndex = ind;
//       }
//     }
//     const firstElem = array[i]
//     array[i] = array[minIndex]
//     array[minIndex] = firstElem
//   }
  


//   return array
// }

// const numbers = [2, 8, 1, 5, 4, 3, 2, 9, 6];
//              [1, 8, 2, 5, 4, 3, 2, 9, 6];
//              [1, 2, 8, 5, 4, 3, 2, 9, 6];
//              [1, 2, 2, 5, 4, 3, 8, 9, 6];
//              [1, 2, 2, 3, 4, 5, 8, 9, 6];
//              [1, 2, 2, 3, 4, 5, 8, 9, 6];
//              [1, 2, 2, 3, 4, 5, 8, 9, 6];
//              [1, 2, 2, 3, 4, 5, 6, 9, 8];
//              [1, 2, 2, 3, 4, 5, 6, 8, 9];
//              [1, 2, 2, 3, 4, 5, 6, 8, 9];

// console.log(sort(numbers));

// ...
// const strings = ["qwer", "yu", "zrjgiohjieht", "asdfghjkjhgfdsdfghj", "g", "x", "rngj", "gjr"];

// console.log(sort(
//   strings,
//   (a, b) => {
//     return b.length - a.length;
    // if (a.length > b.length) {
    //   return -6;
    // }
    // if (a.length < b.length) {
    //   return 89.12;
    // }
    // return 0;
//   }
// ));


// 405
function alphabetized(s) {
  return s
    .replaceAll(/[^a-zA-Z]/g, '')
    .split('')
    .sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase()))
    .join('')
}

// 408
function solve(arr){
  const frequencyNums = {}
  for(let num of arr){
    frequencyNums[num] = frequencyNums[num] || []
    frequencyNums[num].push(num)
  }
  
  const sortedByFrequency = Object.values(frequencyNums).sort((a, b) => b.length - a.length || a[0] - b[0])
  return [].concat(...sortedByFrequency)
}

// 406

function sortStringsByVowels(strings){
  function getLngstVowelSbstr(str){
    const vowels = 'aeiouAEIOU'
    let currentLength = 0
    let maxLength = 0
    
    for(let char of str){
      if(vowels.includes(char)){
        currentLength++
      }else{
        maxLength = Math.max(currentLength, maxLength)
        currentLength = 0
      }
    }
    return Math.max(currentLength, maxLength)
  }
  return strings.sort((a, b) => {
    const lengthA = getLngstVowelSbstr(a)
    const lengthB = getLngstVowelSbstr(b)
    
    return lengthB - lengthA
  })
}

// 407
function computeRanks(number, games) {
  let teams = {}
  
  for(let i = 0; i < number.length; i++){
    teams[i] = {points: 0, goalsScored: 0, goalsConceded: 0}
  }
  
  for(const game of games){
    teams[game[0]].goalsScored += game[2]
    teams[game[0]].goalsConceded += game[3]
    
    teams[game[1]].goalsScored += game[3]
    teams[game[1]].goalsConceded += game[2]  
    
    if(game[2] > game[3]){
      teams[game[0]].points += 2
    }else if(game[2] < game[3]){
      teams[game[1]].points += 2
    }else{
      teams[game[0]].points += 1
      teams[game[1]].points += 1
    }
  }
  
    let teamsArray = Object.entries(teams).map(([teamId, stats]) => ({
    id: parseInt(teamId),
    ...stats,
  }));
  
    teamsArray.sort((a, b) => {
    if (a.points !== b.points) {
      return b.points - a.points;
    } else if (a.goalsScored - a.goalsConceded !== b.goalsScored - b.goalsConceded) {
      return (b.goalsScored - b.goalsConceded) - (a.goalsScored - a.goalsConceded);
    } else {
      return b.id - a.id;
    }
  });
  
}

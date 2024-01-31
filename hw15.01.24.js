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
      if (a.gpa !== b.gpa) {
        return b.gpa - a.gpa;
      }

      const lastNameA = a.fullName.split(" ")[1][0];
      const lastNameB = b.fullName.split(" ")[1][0];

      if (lastNameA !== lastNameB) {
        return lastNameA.localeCompare(lastNameB);
      }
      
      return a.age - b.age;
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

//     console.log(oddNumbers);
//       // .forEach(val => array[val.index] = val.num)

//     return array
//   }
//  sortArray([0,3,6,8,9,1])
// не работает

function sortArray(array) {
  const oddNumbers = array.filter((num) => num % 2 !== 0).sort((a, b) => a - b);
  for(let i = 0, oddIndex = 0; i < array.length; i++){
    if(array[i] % 2 !== 0){
      array[i] = oddNumbers[oddIndex]
      oddIndex += 1
    }
  }

  // array.forEach((val, index) => {
  //   if (val % 2 !== 0) {
  //     array[index] = oddNumbers.shift();
  //   }
  // });

  return array;
}

//   как правильно переписать с map

// 404
function sortByBit(arr) {
  return arr.sort((a, b) => {
    let bitsA = a.toString(2).replaceAll("0", "").length;
    let bitsB = b.toString(2).replaceAll("0", "").length;

    if (bitsA !== bitsB) {
      return bitsA - bitsB;
    }
    return a - b;
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
    // .sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase()))
    .sort((a, b) => a.localeCompare(b, { sensitivity: 'base' }))
    .join('')
}

// 408
function solve(arr){
  const frequencyNums = {}
  for(let num of arr){
    frequencyNums[num] = frequencyNums[num] || []
    frequencyNums[num].push(num)
  }

  // const frequencyNums = Object.groupBy(arr, x => x);

  // Object.groupBy(["qwer", "54", "hruhfuir", "ss", "kofw"], x => x.length)

  // {
  //   "2": ["54",  "ss"],
  //   "4": ["qwer", "kofw"],
  //   "8": ["hruhfuir"],
  // }
  
  const sortedByFrequency = Object.values(frequencyNums).sort((a, b) => b.length - a.length || a[0] - b[0])
  // return [].concat(...sortedByFrequency)
  return sortedByFrequency.flat()


  const frequency = {}
  for(let num of arr){
    frequencyNums[num] ??= 0;
    frequencyNums[num] +=1
  }

  return arr.sort((a, b) => frequency[b] - frequency[a] || a - b);

}

// 406

function getLngstVowelSbstr(str){
  const vowels = 'aeiouAEIOU'
  let currentLength = 0
  let maxLength = 0
  
  for(let char of str){
    if(vowels.includes(char)){
      currentLength++
    }else{
      currentLength = 0
    }
    maxLength = Math.max(currentLength, maxLength)
  }
  return maxLength
}

function sortStringsByVowels(strings){
  return strings.sort((a, b) => {
    const lengthA = getLngstVowelSbstr(a)
    const lengthB = getLngstVowelSbstr(b)
    
    return lengthB - lengthA
  })
}

// 407
function computeRanks(number, games) {
  let teams = []
  
  for(let i = 0; i < number; i++){
    teams[i] = {id: i, points: 0, goalsScored: 0, GD: 0}
  }
  
  for(const [teamA, teamB, goalA, goalB] of games){
    teams[teamA].goalsScored += goalA
    teams[teamA].GD += goalA - goalB
    
    teams[teamB].goalsScored += goalB
    teams[teamB].GD += goalB - goalA  
    
    if(goalA > goalB){
      teams[teamA].points += 2
    }else if(goalA < goalB){
      teams[teamB].points += 2
    }else{
      teams[teamA].points += 1
      teams[teamB].points += 1
    }
  }
  
  teams.sort((a, b) => {
    if (a.points !== b.points) {
      return b.points - a.points;
    }
    if (a.GD !== b.GD) {
      return b.GD - a.GD;
    }
    if (a.goalsScored !== b.goalsScored) {
      return b.goalsScored - a.goalsScored;
    }
    return 0
  });

  
  let positions = [];
  let currentRank = 1;

  for (let i = 0; i < teams.length; i++) {
    if (i > 0 && teams[i].points === teams[i - 1].points && teams[i].GD === teams[i - 1].GD && teams[i].goalsScored === teams[i - 1].goalsScored) {
      teams[i].rank = teams[i - 1].rank;
    } else {
      teams[i].rank = currentRank;
      currentRank++;
    }
  }

  return teams.sort((a,b) => a.id - b.id).map(team => team.rank)
}
console.log(computeRanks(6, [[0, 5, 2, 2],
[1, 4, 0, 2],   
[2, 3, 1, 2],   
[1, 5, 2, 2],   
[2, 0, 1, 1],   
[3, 4, 1, 1],  
[2, 5, 0, 2], 
[3, 1, 1, 1],
[4, 0, 2, 0]]))
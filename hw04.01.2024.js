// 300
function hexStringToRGB(hexString) {
  const [r, g, b] = hexString.match(/[0-9a-f]{2}/gi).map((x) => parseInt(x, 16));

  return {
    r,
    g,
    b,
  };
}

//   301
function DNAStrand(dna) {
  const dnaObj = {
    'A': 'T',
    'T': 'A',
    'G': 'C',
    'C': 'G'
  }

  return dna.split('').map(char => dnaObj[char]).join('')
}


DNAStrand('ATCAAG')

//   302

function scoreboard(string) {
  const scoreObj = {
    "nil": 0,
    "one": 1,
    "two": 2,
    'three': 3,
    'four': 4,
    'five': 5,
    "six": 6,
    'even': 7,
    'eight': 8,
    'nine': 9
  }

  // in

  return string
    .split(" ")
    .filter(word => word in scoreObj)
    .map((score) => scoreObj[score]);
}

console.log(scoreboard('tft fyfyt six gvgv nine fhrdri'))

// 303
function outed(meet, boss) {
  const values = Object.values(meet);
  const bossPoints = meet[boss];

  const totalPoints = values.reduce((acc, cur) => acc + cur, 0) + bossPoints;
  const happinessRate = totalPoints / values.length;
  return happinessRate <= 5 ? "Get Out Now!" : "Nice Work Champ!";
}

// 304
const whosOnline = (friends) => {
  const online = [];
  const offline = [];
  const away = [];
  for (const { status, lastActivity, username } of friends) {
    if (status === "online" && lastActivity > 10) {
      away.push(username);
    } else if (status === "offline") {
      offline.push(username);
    } else {
      online.push(username);
    }
  }

  const obj = {online, offline, away};

  for(const key in obj) {
    if (obj[key].length === 0) {
      delete obj[key];
    }
  }

  // if (online.length > 0) {
  //   obj.online = online;
  // }

  return {
    ...(online.length > 0 && { online }),
    ...(offline.length > 0 && { offline }),
    ...(away.length > 0 && { away }),
  };
};

// 305
function duplicateEncode(word) {
  let str = word.toLowerCase();
  let frequencyChar = {};
  
  for (const char of str) {
    // frequencyChar[char] = (frequencyChar[char] || 0) + 1;

    // frequencyChar[char] = frequencyChar[char] ?? 0;
    frequencyChar[char] ??= 0;
    frequencyChar[char] += 1;
  }

  let result = "";
  for (const char of str) {
    result += frequencyChar[char] > 1 ? ")" : "(";
  }
  return result;
}

// 306
function isAnagram(test, original) {
  test = test.toLowerCase();
  original = original.toLowerCase();

  let frequencyTest = {};
  for (let char of test) {
    frequencyChar[char] ??= 0;
    frequencyChar[char] += 1;
  }
  for (let char of original) {
    frequencyTest[char] ??= 0
    frequencyTest[char] -= 1
  }
  return Object.values(frequencyTest).every(val => val === 0)
}

// 307
const operators = {
  add: (a, b) => a + b,
  divide: (a, b) => a / b,
  substract: (a, b) => a - b,
  multiple: (a, b) => a * b,
};

function arithmetic(a, b, operator) {
  return operators[operator](a, b);
}

// 308
function pluck(objs, name) {
  return objs.map((obj) => obj[name]);
}

// уточнить про обращение через точку или квадратные скобки

// 309
function objConcat(o) {
  return Object.assign({}, ...o);
}

const a1 = {x: 1, y: 2}
const a2 = {x: 5, z: 8}
const a3 = {m: 7, t: 4}

// {...a1, ...a2. ...a3}

console.log(objConcat([a1, a2, a3]));

console.log(a1);


// 310
function removeDuplicateWords(s) {
  let frequencyWord = {};
  const wordsArr = s.split(" ");

  for (const word of wordsArr) {
    frequencyWord[word] = (frequencyWord[word] || 0) + 1;
  }
  return Object.keys(frequencyWord).join(" ");
}

removeDuplicateWords("qwe 3 6 qwe a a 222 3 gtg gtg") // "qwe 3 6 a 2222 gtg"

// 311
function findUnique(numbers) { // numbers.length === N
  let frequencyNum = {};
  for (let num of numbers) { // N
    frequencyNum[num] = (frequencyNum[num] || 0) + 1;
  }
  return +Object.keys(frequencyNum).find((key) => frequencyNum[key] === 1);
}

// 313
function myLanguages(results) {
  return Object.entries(results)
    .filter((language) => language[1] >= 60)
    .sort((a, b) => b[1] - a[1])
    .map((language) => language[0]);
}

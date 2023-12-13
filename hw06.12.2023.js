function isHomogenous(arr){
    // for (const el of arr) {
    //     if (typeof el !== typeof arr[0]){
    //         return false
    //     }
    // }
    // return true
    return arr.every(el => typeof el === typeof arr[0])
}

function filterHomogenous(arrays) {
    return arrays.filter(arr => arr.length > 0 && isHomogenous(arr));
  }
  
// const arr = [[1, 5, 4], ['a', 3, 5], ['b'], [], ['1', 2, 3]]
// console.log(filterHomogenous(arr))

// 100
function filterArrayNumbers(arr) {
    return arr.filter(el => typeof el === 'number')
  }

//   101
function findShortestWordsLength(string){
    const words = string.split(' ')
    const lengths = words.map(word => word.length);

    return Math.min(...lengths)

    // let shortestWordLength = Infinity
    // for (const length of lengths){
    //   shortestWordLength = Math.min(length, shortestWordLength)
    // }
    // return shortestWordLength
}

// 102
function positiveSum(arr) {
    const arrPositiveNumbers = arr.filter(num => num > 0)
    return arrPositiveNumbers.reduce((acc, curr) => acc + curr, 0)
  }

  // 103
  function generateShape(integer){
    const line = '+'.repeat(integer);
    return Array(integer).fill(line).join("\n")

    // return `${line}\n`.repeat(integer - 1) + line
  }

  // 104
  function getCount(str) {
    const lettersArray = str.split('')
    const vowelsSet = new Set(['a','e','i','o','u'])
    return lettersArray.filter(letter => !vowelsSet.has(letter)).length
  }

  // 105 reduce

  // 106
  function min(arr, toReturn) {
    const minNumber = Math.min(...arr)
    return toReturn === 'value' ? minNumber : arr.indexOf(minNumber)
  }

  // 108
  function capitalsIndex(word) {
    const arrayIndexOfCapitals = []
    for(let i = 0; i < word.length; i++){
      if(word[i] === word[i].toUpperCase()){
        arrayIndexOfCapitals.push(i)
      }
    }
    return arrayIndexOfCapitals
  };


  // 109
  function insertDash(num) {
    return num
      .toString()
      .split('')
      .map((num, i, arr) => i !== 0 && num % 2 !== 0 && arr[i-1] % 2 !== 0 ? -num : num)
      .join('')
  }

  // 111
  function isMiniWin(str, code){
    // return str.split('').map(symbol => symbol.charCodeAt(0)).includes(code)
    return str.split('').some(symbol => symbol.charCodeAt(0) === code);
  }
  
  function bingo(ticket, win){
    let miniWins = 0
    for(const [str, code] of ticket){
      if(isMiniWin(str, code)){
        miniWins++
      }
    }
    return miniWins >= win ? 'Winner!' : 'Loser!'
  }

  // 112
  function rowWeights(array){
    const firstTeamWeight = array.filter((_, i) => i % 2 === 0).reduce((acc, cur) => acc + cur, 0)
    const secondTeamWeight = array.filter((_, i) => i % 2 !== 0).reduce((acc, cur) => acc + cur, 0)

    return [firstTeamWeight, secondTeamWeight]
  }

  // 113
  function scrollingText(text){
    const stringRotations = []
    for(let i = 0; i < text.length; i++){
      stringRotations.push((text.slice(i) + text.slice(0, i)).toUpperCase())
    }
    return stringRotations
  }

  // 114
  function expandedForm(num) {
    return num
      .toString()
      .split('')
      .map((digit, i, arr) => digit + '0'.repeat(arr.length - (i + 1)))
      // .filter(digit => digit[0] !== "0")
      .filter(digit => !digit.startsWith("0"))
      .join(' + ')
  }

  console.log(expandedForm(89075032))

  // 0123456789  index = 6  length = 10
  // 5843978123  length - (index + 1)
  //       ↑   

  // 115
  const arrCheck = value => {
    return value.every(el => Array.isArray(el))
  }

  // 117
  function findMagic(arr){
    // for(let i = 0; i < arr.length; i++){
    //   if(arr[i] === i){
    //     return i
    //   }
    // }
    // return -1
    return arr.findIndex((value, i) => value === i)
  }

  // 118
  obfuscate = function(email) {
    // return email.split('').map(symbol => {
    //   if(symbol === '.'){
    //     return symbol = ' [dot] '
    //   }else if(symbol === '@'){
    //     return symbol = ' [at] '
    //   }
    //   return symbol
    // }).join('')

    return email.replaceAll('.', ' [dot] ').replace('@', ' [at] ')
  }

  console.log(obfuscate("qwer@asdf.ru.com"))

  // 119
  function checkExam(array1, array2) {
    let results = 0
    for(let i = 0; i < array1.length; i++){
      if(array2[i] === array1[i]){
        results += 4
      }else if(array2[i] === ''){
        results += 0
      }else{
        results -= 1
      }
    }
    return results < 0 ? 0 : results
  }

  // 120
  function countSmileys(arr) {
    const smileyRegex = /[:;][-~]?[)D]/
    return arr.filter(face => face.match(smileyRegex)).length
  }

  // 121
  function smallEnough(a, limit){
    for(const num of a){
      if(num > limit){
        return false
      }
    }
    return true
  }
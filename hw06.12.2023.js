function isHomogenous(arr){
    if(arr.length === 0){
        return false
    }
    for (const el of arr) {
        if (typeof el !== typeof arr[0]){
            return false
        }
    }
    return true
}

function filterHomogenous(arrays) {
    return arrays.filter(arr => isHomogenous(arr));
  }
  
// const arr = [[1, 5, 4], ['a', 3, 5], ['b'], [], ['1', 2, 3]]
// console.log(filterHomogenous(arr))

// 100
function filterArrayNumbers(arr) {
    return arr.filter(el => typeof el === 'number')
  }

//   101
function findShortestWordsLength(string){
    const arrayWords = string.split(' ')
    let shortestWordLength = arrayWords[0].length
    for (const word of arrayWords){
      shortestWordLength = word.length <= shortestWordLength ? word.length : shortestWordLength
    }
    return shortestWordLength
}

// 102
function positiveSum(arr) {
    const arrPositiveNumbers = arr.filter(num => num > 0)
    return arrPositiveNumbers.reduce((acc, curr) => acc + curr, 0)
  }

  // 103
  function generateShape(integer){
    return `${'+'.repeat(integer)}\n`.repeat(integer - 1) + '+'.repeat(integer)
  }

  // 104
  function getCount(str) {
    const lettersArray = str.split('')
    const vowelsSet = new Set(['a','e','i','o','u', ' '])
    return lettersArray.filter(letter =>  !vowelsSet.has(letter)).length
  }

  // 106
  function min(arr, toReturn) {
    const minNumber = Math.min(...arr)
    return toReturn === 'value' ? minNumber : arr.indexOf(minNumber)
  }

  // 108
  function capitalsIndex(word) {
    const arrayLetters = word.split('')
    const arrayIndexOfCapitals = []
    for(const letter of arrayLetters){
      if(letter === letter.toUpperCase()){
        arrayIndexOfCapitals.push(arrayLetters.indexOf(letter))
      }
    }
    return arrayIndexOfCapitals
  };

  // 109
  function insertDash(num) {
    const arrayNumbers = num.toString().split('')
    return arrayNumbers.map((num, i, arr) => num = i !== 0 && num % 2 !== 0 && arr[i-1] % 2 !== 0 ? -num : num).join('')
  }

  // 111
  function strToCharCodeArray(str){
    const charCodeArray = []
    for(let i = 0; i < str.length; i++){
      charCodeArray.push(str.charCodeAt(i))
    }
    return charCodeArray
    }
  
  function bingo(ticket, win){
    let miniWins = 0
    for(const subArray of ticket){
      if(strToCharCodeArray(subArray[0]).includes(subArray[1])){
        miniWins++
      }
    }
    if(miniWins >= win){
      return 'Winner!'
    }
    return 'Loser!'
  }

  // 112
  function rowWeights(array){
    if(array.length === 1){
      return [array[0], 0]
    }
    let firstTeamWeight = array.map((num, i) => i % 2 === 0 ? num : 0).reduce((acc, cur) => acc + cur, 0)
    let secondTeamWeight = array.map((num, i) => num = i % 2 !== 0 ? num : 0).reduce((acc, cur) => acc + cur, 0)
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

  // 115
  const arrCheck = value => {
    for( const elem of value){
      if(!Array.isArray(elem)){
        return false
      }
    }
    return true
  }

  // 117
  function findMagic(arr){
    for(let i = 0; i <= arr.length; i++){
      if(arr[i] === i){
        return i
      }
    }
    return -1
  }

  // 118
  obfuscate = function(email) {
    return email.split('').map(symbol => {
      if(symbol === '.'){
        return symbol = ' [dot] '
      }else if(symbol === '@'){
        return symbol = ' [at] '
      }
      return symbol
    }).join('')
  }

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
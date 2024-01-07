// 300
function hexStringToRGB(hexString) {
    return {
            r: parseInt(hexString.slice(1,3), 16),
            g: parseInt(hexString.slice(3,5), 16),
            b: parseInt(hexString.slice(5,7), 16)
           }
  }

//   301
function DNAStrand(dna){
    const dnaArr = []
    for(let i = 0; i <= dna.length; i++){
      if(dna[i] === 'A'){
        dnaArr.push('T')
      }else if(dna[i] === 'T'){
        dnaArr.push('A')
      }else if(dna[i] === 'G'){
        dnaArr.push('C')
      }else if(dna[i] === 'C'){
        dnaArr.push('G')
      }
    }
    return dnaArr.join('')
  }

//   302

function scoreboard(string) {
  return string
    .split(' ')
    .splice(-2)
    .map(score => {
        if(score === 'nil') return 0;
        if(score === 'one') return 1;
        if(score === 'two') return 2;
        if(score === 'three') return 3;
        if(score === 'four') return 4;
        if(score === 'five') return 5;
        if(score === 'six') return 6;
        if(score === 'seven') return 7;
        if(score === 'eight') return 8;
        if(score === 'nine') return 9
    })
}

// 303
function outed(meet, boss){
    const peopleAmount = Object.keys(meet).length
    const bossPoints = meet[boss] * 2
    
    delete meet.boss
    const totalPoints = Object.values(meet).reduce((acc, cur) => acc + cur, 0) + bossPoints
    const happinessRate = totalPoints / peopleAmount
    return happinessRate <= 5 ? 'Get Out Now!' : 'Nice Work Champ!'
  }

  // 306
  function isAnagram(test, original) {
      test = test.toLowerCase();
      original = original.toLowerCase()
      if(test.length !== original.length){
        return false
      }
      let frequencyTest = {}
      let frequencyOriginal = {}
      for(let char of test){
        frequencyTest[char] = (frequencyTest[char] || 0) + 1
      }
      for(let char of original){
        frequencyOriginal[char] = (frequencyOriginal[char] || 0) + 1
      }
      for (let char in frequencyTest) {
        if (frequencyTest[char] !== frequencyOriginal[char]) {
          return false;
        }
      }
      return true
  };

  // 307
  const operators = {
    "add": (a, b) => a + b,
    "divide": (a, b) => a / b,
    "substract": (a, b) => a - b,
    "multiple": (a, b) => a * b,
  };

  function arithmetic(a, b, operator){
    return operators[operator](a, b)
  }
    
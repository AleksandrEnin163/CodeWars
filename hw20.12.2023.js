// 211

const operators = {
    "+": (a, b) => a + b,
    "/": (a, b) => a / b,
    "-": (a, b) => a - b,
    "*": (a, b) => a * b,
  };
  
  function calculate(expression) {
    const tokens = expression.split(' ');
  
    while (tokens.length > 1) {
      const i = tokens.findLastIndex(token=> operators.hasOwnProperty(token))
      const result = operators[tokens[i]](+tokens[i + 1], +tokens[i + 2]);
      tokens.splice(i, 3, result);
    }
    return tokens[0];
}

function calculateStack(expression){
    const tokens = expression.split(' ');
    const stack = []
    for(let i = tokens.length - 1; i >= 0; i--){
        if(!operators.hasOwnProperty(tokens[i])){
            stack.push(+tokens[i])
        }else{
            const operandOne = stack.pop()
            const operandTwo = stack.pop()
            const result = operators[tokens[i]](operandOne, operandTwo)
            stack.push(result)
        }
    }
    return stack[0]
}

// ["A","B","C","D"].at(1) === "B"
// ["A","B","C","D"].at(-2) === "C"
// ["A","B","C","D"].at(-1) === "D"

// 21
  
  console.log(calculateStack('* + 4 / - * 7 + 3 / + 3 5 * 2 2 2 11 3'));

//   209
function indexEqualsValue(a) {
    let left = 0;
    let right = a.length - 1;
    let result = -1
    
    while (left <= right) {
      let mid = Math.floor((left + right) / 2);
      if (a[mid] === mid) {
        result = mid;
        right = mid - 1
      }
      else if (a[mid] > mid) {
        right = mid - 1;
      }
      else {
        left = mid + 1;
      }
    }
    
    return result;
  }

//   210

// [[()]{()[{}]}]({}[]){}([])

// [{[{

// ((()()())))((())()
function vldParnth(parentStr){
    let open = 0
    let close = 0
    for(let prnt of parentStr){
        if(prnt === '('){
            open++
        }else{
            close++ 
        }
        if(close > open){
            return false
        }
    }
    return open === close
}

// function validParentheses(parenStr) {
//   while(parenStr.includes("()")) {
//     parenStr = parenStr.replace("()", "");
//   }
//   return parenStr.length === 0;
// }

// function validParentheses(parenStr) {
//     const arrPar = parenStr.split('')
//     for(let i = 0; i < arrPar.length; i++){
//       if(arrPar[i] + arrPar[i + 1] === '()'){
//         arrPar.splice(i, 2)
//         i -= 2
//       }
//     }
//     return arrPar.length === 0
//   }


    function letngthEnoding(str){
        const arr = []
        let sum = 0
        for(let i = 0; i < str.length; i++){
            if(i + 1 < str.length && str[i].toUpperCase() === str[i + 1].toUpperCase()){
                sum += 1
            }else{
                arr.push([sum, str[i]])
                sum = 0
            }
        }
        return arr
    }
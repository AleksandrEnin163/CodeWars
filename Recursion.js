
const obj = {
  a: 1,
  b: {    // 1
    c: 2,
    d: 3,
  },
  e: {    // 2
    f: { 
      g: 4,
      h: 5,
    },
  },
  i: 6,
};

const isObject = value => typeof value === "object" && value !== null && !Array.isArray(value);

function depth(obj) {
  if (!isObject(obj) || Object.keys(obj).length === 0) {
    return 0;
  }
  const values = Object.values(obj); // [1, {c, d }, { f }, 6]
  const depths = values.map(value => depth(value)); // [?, 1, 2, ?]
  const maxDepth = Math.max(...depths);
  return maxDepth + 1;
}

depth({
  x: 5,
}); // 1


// 1. взять все значения в объекте
// 2. для каждого из них посчитать глубину
// 3. найти максимальную из них
// 4. прибавить 1 и вернуть ответ

// обратились три раза и дошли до примитива:
// obj.e.f.g

// console.log(depth(obj)); // 3

const root = {
  value: 3,
  left: {
    value: 5,
    left: {
      value: 1,
      left: null,
      right: null,
    },
    right: null,
  },
  right: {
    value: 2,
    left: null,
    right: {
      value: 8,
      left: null,
      right: null,
    },
  },
};

function sumTheTreeValues(root) {
      if (root === null) {
        return 0;
    }
    return root.value + sumTheTreeValues(root.left) + sumTheTreeValues(root.right);
}


// console.log(sumTheTreeValues(root)); // 19

function maxSum(root) {
  if(root === null){
    return 0
  }
  let leftSum = maxSum(root.left)
  let rightSum = maxSum(root.right)
  if(root.left === null){
    return root.value + rightSum
  }
  if(root.right === null){
    return root.value + leftSum
  }
    return root.value + Math.max(leftSum, rightSum)
}

const tree = {
  "value": 5,
  "left": {
    "value": 4,
    "left": {
      "value": -80, // -71
      "left": null,
      "right": null
    },
    "right": {
      "value": -60, // -51 
      "left": null,
      "right": null
    }
  },
  "right": {
    "value": 10,
    "left": {
      "value": -90, // -75
      "left": null,
      "right": null
    },
    "right": null
  }
}

console.log(maxSum(tree)); // -51


function smartSum(arr) {
  let sum = 0
  for(elem of arr){
    if(Array.isArray(elem)){
      sum += smartSum(elem)
    }else {
      sum += elem
    }
  }
  return sum
}

// function flattenArr(arr, depth = 1) {
//   if(depth > 0){
//     return arr.reduce((acc, val) => acc.concat(Array.isArray(val) ? flattenArr(val, depth - 1) : val),[])
//   }
//     return arr//.slice();
// }

// const arr = [1,[2,3],4];

// const fArr = flattenArr(arr, 0);
// fArr.push(123);

// console.log(arr)
// console.log(fArr)


function flattenArr(arr) {
  const stack = [arr];
  const result = []
  while (stack.length){
    const elem = stack.pop()
    if(Array.isArray(elem)){
      // stack.push(...elem)
      for(const x of elem) {
        stack.push(x)
      }
    }else{
      result.push(elem)
    }
  }
  return result.reverse();
}

// let x = [];

// for(let i = 0; i < 153456; i++) {
//   x.push(1);
// }

// console.log(flattenArr(x));


// let counter = 0;
// function f(a, b) {
//   let x = 9;
//   let y = 6;
//   counter++;
//   f(a, b)
// }

// try {
//   f(1, 2);
// } catch{
//   console.log({counter})
// }

// const y = 1;
// const y = "qwerty"
// const x = [1, [[2, [3, 4, [5]], 6], [7]], [8]];


// [1, 2, 3, 4, 5, 6, 7, 8]

// console.log(flattenArr(x)) // ===  [1, 2, 3, 4, 5, 6, 7, 8]


const o1 = {
  x: 1,
  y: { q: 9 },
  t: 9,
};

const o2 = {
  x: 1,
  y: { q: 9 },
  t: 9,
};

console.log(deepCompare(o1, o2)); // true

function deepCompare(o1, o2) {
  const keys_o1 = Object.keys(o1)
  const keys_o2 = Object.keys(o2)
  if(keys_o1.length !== keys_o2.length){
    return false
  }
  for(let key of keys_o1){
    if(typeof o1[key] === 'object' || typeof o2[key] === 'object'){
      if(!deepCompare(o1[key], o2[key])){
        return false
      }
    }else{
      if(o1[key] !== o2[key]){
        return false
      }
    }
  }
  return true
}
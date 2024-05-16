const obj = {
  a: 1,
  b: {
    // 1
    c: 2,
    d: 3,
  },
  e: {
    // 2
    f: {
      g: 4,
      h: 5,
    },
  },
  i: 6,
};

const isObject = (value) =>
  typeof value === "object" && value !== null && !Array.isArray(value);

function depth(obj) {
  if (!isObject(obj) || Object.keys(obj).length === 0) {
    return 0;
  }
  const values = Object.values(obj); // [1, {c, d }, { f }, 6]
  const depths = values.map((value) => depth(value)); // [?, 1, 2, ?]
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
  return (
    root.value + sumTheTreeValues(root.left) + sumTheTreeValues(root.right)
  );
}

// console.log(sumTheTreeValues(root)); // 19

function maxSum(root) {
  if (root === null) {
    return 0;
  }
  let leftSum = maxSum(root.left);
  let rightSum = maxSum(root.right);
  if (root.left === null) {
    return root.value + rightSum;
  }
  if (root.right === null) {
    return root.value + leftSum;
  }
  return root.value + Math.max(leftSum, rightSum);
}

const tree = {
  value: 5,
  left: {
    value: 4,
    left: {
      value: -80, // -71
      left: null,
      right: null,
    },
    right: {
      value: -60, // -51
      left: null,
      right: null,
    },
  },
  right: {
    value: 10,
    left: {
      value: -90, // -75
      left: null,
      right: null,
    },
    right: null,
  },
};

console.log(maxSum(tree)); // -51

function smartSum(arr) {
  let sum = 0;
  for (elem of arr) {
    if (Array.isArray(elem)) {
      sum += smartSum(elem);
    } else {
      sum += elem;
    }
  }
  return sum;
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
  const result = [];
  while (stack.length) {
    const elem = stack.pop();
    if (Array.isArray(elem)) {
      // stack.push(...elem)
      for (const x of elem) {
        stack.push(x);
      }
    } else {
      result.push(elem);
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
  t: null,
};

const o2 = {
  x: 1,
  y: { q: 9 },
  t: null,
};

console.log(deepCompare(o1, o2)); // true

function checkObj(obj) {
  return typeof obj === "object" && obj !== null;
}

function deepCompare(obj1, obj2) {
  if (!checkObj(obj1) || !checkObj(obj2)) {
    return obj1 === obj2;
  }

  const keys1 = Object.keys(obj1);
  const keys2 = Object.keys(obj2);
  if (keys1.length !== keys2.length) {
    return false;
  }
  return keys1.every((key) => deepCompare(obj1[key], obj2[key]));
}

function recordDepth(obj, depth = 0) {
  if (!checkObj(obj)) {
    return obj;
  }
  obj.depth = depth;
  for (let key in obj) {
    recordDepth(obj[key], depth + 1);
  }
  return obj;
}

const o = {
  a: { x: {} },
  b: {},
  c: {},
  d: {},
};

console.log(recordDepth(o));

function clone(obj, clonedObjects = new Map()) {
  if (!checkObj(obj)) {
    return obj;
  }

  const copiedObj = {};
  if (clonedObjects.has(obj)) {
    //проверка был ли уже такой же объект
    return clonedObjects.get(obj); //возвращаем клон этого объекта
  }
  clonedObjects.set(obj, copiedObj); //сохранем клона этого объекта в Map, для дальнейших проверок, на случай встреи такого же объекта
  for (let key in obj) {
    //если такого объекта не было, то проходимся по нему и создаем клона
    // if(!checkObj(obj[key])){
    //   copiedObj[key] = obj[key]
    // }else{
    copiedObj[key] = clone(obj[key], clonedObjects);
    // }
  }
  return copiedObj;
}

// доп.аргумент Map туда сохраняем объекты и если его встречаем то не вызываем рекурсию, а берем клон этого объекта из Map.

// const example = {
//   x: 1,
//   y: {
//     z: 2,
//     t: 3,
//   },
// };

// const objCopy = clone(example);
// console.log(objCopy);

// objCopy.y.z = 100;

// console.log(objCopy.y.z); // 100
// console.log(example.y.z);     // 2

const obj2 = {
  a: 1,
};
obj2.b = obj2;

// console.log(obj2)

const obj2Copy = clone(obj2);

obj2Copy.b.b.b.b.b.b.b.a = 2;
console.log(obj2Copy.a); // 2
console.log(obj2.a); // 1


// function id2children(catalog) {
//   const result = {}
//   result[catalog.id] = []
//   for(const child of catalog.children){
//     result[catalog.id].push(child.id)
//     const x = id2children(child); // { '2': [ '3', '4' ], '3': [] , '4': [] }
//     Object.assign(result, x)
//   }
//   return result
// }

// const catalog = {
//   id: "1",
//   name: "Электроника",
//   children: [
//     {
//       id: "2",
//       name: "Товары для компьютера",
//       children: [
//         { id: "3", name: "Оперативная память", children: [] },
//         { id: "4", name: "Процессоры", children: [] },
//       ],
//     },
//     { id: "5", name: "Мобильные телефоны", children: [] },
//   ],
// };

// console.log(id2children(catalog));

const expected = {
  "1": ["2", "5"],
  "2": ["4", "3"],
  "3": [],
  "4": [],
  "5": [],
}

function id2children(catalog) {
  const stack = [catalog]
  const result = {}
  while(stack.length){
    const elem = stack.pop()
    result[elem.id] = elem.children.map(child => child.id)
    for(const child of elem.children){
      // result[elem.id].push(child.id)
      stack.push(child)
    }
  }
  return result
}

function id2parent(catalog, parent = null) {
  const result = {}
  result[catalog.id] = parent
  for(const child of catalog.children){
    Object.assign(result, id2parent(child, catalog.id)) 
  }
  return result
}

function breadcrumbs(catalog, findId, names = []) {
  const { id, name, children } = catalog
  if(findId === id){
    return [...names, name]
  }
  for(const child of children){
    const result = breadcrumbs(child, findId, [...names, name])
    if(result !== null){
      return result
    }
  }
  return null
}

function allDescendants(catalog, targetId){
  const category = findElem(catalog, targetId)
  return descendants(category)
}

function findElem(catalog, targetId){
  const { id, children } = catalog
  if(targetId === id){
    return catalog
  }
  for(const child of children){
    const result = findElem(child, targetId)
    if(result !== null){
      return result
    }
  }
  return null
}

function descendants(catalog) {
  const result = []
  const { children } = catalog
  const childIds = children.map(child => child.id)
  result.push(...childIds)
  for(const child of children){
    result.push(...descendants(child))
  }
  return result
}

const catalog = {
  id: "1",
  name: "Электроника",
  children: [
    {
      id: "2",
      name: "Товары для компьютера",
      children: [
        { id: "3", name: "Оперативная память", children: [] },
        { id: "4", name: "Процессоры", children: [] },
      ],
    },
    { id: "5", name: "Мобильные телефоны", children: [] },
  ],
};

console.log(allDescendants(catalog, '3'))
// ["2", "3", "4", "5"]

function a(x, y) {
  return b(x) + c(y)
}


function b(m) {
  return 1 + c(m * 2)
}

function c(t) {
  return t ** 2;
}

function countChange(amount, coins) {
  if(amount === 0){
    return 1
  }
  if(amount < 0 || coins.length === 0){
    return 0
  }
  const [first, ...rest] = coins
  const r1 = countChange(amount - first, coins);
  const r2 = countChange(amount, rest)
  return r1 + r2;
}

function countChangeList(money, coins, usedCoins = []) {
  if(money === 0){
    return [usedCoins.join('+')]
  }
  if(money < 0 || coins.length === 0){
    return []
  }
  const [first, ...rest] = coins
  const r1 = countChangeList(money - first, coins, [...usedCoins, first] )
  const r2 = countChangeList(money, rest, usedCoins)
  return [...r1, ...r2]
}

console.log(countChangeList(4, [1, 2]));

//что возвращает countChange, если у нас только при amount 0 или меньше 0 мы возвращаем 1 или 0, где у нас сохранятеся количество способов.

// [2, 3, 5, 7, 11]
// 100


// countChange(100, [2, 3, 5, 7, 11])
// countChange(100, [3,5,7,11]) + countChange(98, [2, 3, 5, 7, 11])

// countChange(10, [2, 3, 5, 7, 11])
// countChange(10, [3,5,7,11]) + countChange(8, [2, 3, 5, 7, 11])
//            3+7 5+5                       2+2+2+2 2+3+3 3+5


// https://www.codewars.com/kata/5a942c461a60f677730032df/train/javascript
// https://www.codewars.com/kata/determine-sizeof-c-datatype-beginner-no-prior-c-knowledge-required/train/javascript

function sizeof(type) {
  const types = {
  char: 1,
  short: 2,
  int: 2,
  long: 4,
  'long long': 8,
  'unsigned char': 1,
  'unsigned short': 2,
  'unsigned int': 2,
  'unsigned long': 4,
  'unsigned long long': 8,
  float: 4,
  double: 8
}
if(typeof type === 'string'){
  return types[type]
}
// if(type.members.length === 0){
//   return 0
// }
if(type.type === 'union'){
  return Math.max(0, ...type.members.map(member => sizeof(member)))
} else {
  return type.members.reduce((acc, member) => acc + sizeof(member), 0)
}
}

// sizeof("int") === 2

// console.log(sizeof({
//   type: "struct",
//   members: ["char", "int"],
// })) === 3

console.log(sizeof({
  type: "struct",
  members: [
    "int",
    "int",
    "float",
    {
      type: "union",
      members: []
    }
  ]
})) === 8

function flattenObj(obj, path = []) {
  const result = {};
  for (const key in obj) {
    const value = obj[key];
    if (typeof value === "object" && value !== null) {
      Object.assign(result, flattenObj(value, [...path, key]));
    } else {
      result[[...path, key].join('/')] = value;
    }
  }
  return result;
}

const obj1 = {
  m: {
    o: {
      w: 4n,
      g: true,
    },
    f: 571,
  },
};

console.log(flattenObj(obj1))

// flattenObj(obj) === {
//   "m/o/w": 4n,
//   "m/o/g": true,
//   "m/f": 571,
// };


function combos(num, min = 1) {
  if(num === 0){
    return [[]]
  }
  const result = []
  for(let i = min; i <= num; i++){
    // i === 1
    const prevArr = combos(num - i, i)
    const newArr = prevArr.map(arr => [i, ...arr]) //
    // result.push(...newArr)
    for(const x of newArr) {
      result.push(x)

    }
    //         [ [1,1,1], [1,2], [2,1], [3] ]
    //                          ↓
    // arr === [ [1,1,1,1], [1,1,2], [1,2,1], [1,3] ]
  }
  return result
}

// combos(4) === ???
// 1+1+1+1, 1+1+2, ... 2+1+1, 2+2, 3+1, 4
// --------------      ----------  ---  -

// 4 = 1+.......       2+

// [ [1,1,1,1], [1,1,2], [1,2,1], [1,3] ];  ← combos(3)
// [ [2,1,1], [2,2] ];  ← combos(2)
// [ [3,1] ];  ← combos(1)
// [ [4] ];  ← combos(0)

// 4 = 2 + ...

// combos(2) === [ [1,1], [2] ]  →  [ [2,1,1], [2,2] ]
// combos(0) ===  [ [] ]  → [ [4] ]

// combos(1) === [ [1] ];
// combos(2) === [ [1,1], [2] ];
// combos(3) === [ [1,1,1], [1,2], [2,1], [3] ];

// console.log(combos(20))
console.log(combos(20).length)


// 10 512
// 15 16384
// 20 524288 627

// D F S  →  depth first search

const grid = [
  [0,0,0,0,0,0,0,1,0,0],
  [0,0,1,1,0,0,1,0,0,0],
  [0,0,1,1,1,1,0,0,0,0],
  [0,1,0,0,0,1,0,0,1,0],
  [0,0,0,0,0,1,1,1,0,0],
  [1,1,0,0,0,1,0,0,0,0],
];

// grid[y][x]


function dfs(grid, y, x){
  if(y < 0 || y > grid.length - 1 || x < 0 || x > grid[0].length - 1){
    return
  }
  if(grid[y][x] === 0){
    return
  }
  if(grid[y][x] === 2){
    return
  }
  grid[y][x] = 2

  // console.log({x, y});

  dfs(grid, y - 1, x - 1)
  dfs(grid, y - 1, x)
  dfs(grid, y - 1, x + 1)
  dfs(grid, y, x - 1)
  dfs(grid, y, x + 1)
  dfs(grid, y + 1, x - 1)
  dfs(grid, y + 1, x)
  dfs(grid, y + 1, x + 1)
}

function countIslands(grid){
  let count = 0
  for(let y = 0; y < grid.length; y++){
    for(let x = 0; x < grid[y].length; x++){
      if(grid[y][x] === 1){
        count += 1
        dfs(grid, y, x)
      }
    }
  }
  return count
}

// console.log(countIslands(grid)); // 2




function dfsWords(board, y, x, word){
  const directions = [[-1, -1], [-1, 0], [-1, 1], [0, -1], [0, 1], [1, -1], [1, 0], [1, 1]]
  console.log(board);
  if(word.length === 0){
    return true
  }
  if(y < 0 || y > board.length - 1 || x < 0 || x > board[0].length - 1){
    return false
  }
  if(typeof board[y][x] === 'number'){
    return false
  }
  if(board[y][x] !== word[0]){
    return false
  }
  let letter = board[y][x]
  board[y][x] = 1
  // if(dfsWords(board, y - 1, x - 1, word.slice(1)) ||
  // dfsWords(board, y - 1, x, word.slice(1))
  // || dfsWords(board, y - 1, x + 1, word.slice(1))
  // || dfsWords(board, y, x - 1, word.slice(1))
  // ||dfsWords(board, y, x + 1, word.slice(1))
  // || dfsWords(board, y + 1, x - 1, word.slice(1))
  // || dfsWords(board, y + 1, x, word.slice(1))
  // || dfsWords(board, y + 1, x + 1, word.slice(1))){
  //   board[y][x] = letter
  //   return true
  // for(const [dy, dx] of directions){
  //   if(dfsWords(board, y + dy, x + dx, word.slice(1))){
  //     board[y][x] = letter
  //     return true
  //   }
  // }
  // board[y][x] = letter
  // return false


  const result = directions.some(([dy, dx]) => dfsWords(board, y + dy, x + dx, word.slice(1)))
  board[y][x] = letter
  return result
}

function checkWord(board, word) {
  for(let y = 0; y < board.length; y++){
    for(let x = 0; x < board[y].length; x++){
      if(dfsWords(board, y, x, word)) {
        return true;
      }
    }
  }
  return false;
}

const board = [ 
  ["I","L","A","W"],
  ["B","N","G","E"],
  ["I","U","A","O"],
  ["A","S","R","L"],
];

console.log(dfsWords(
  board,
  1,
  0,
  "BIUNLA",
)) // true

console.log(board);


// можно ли в матрице board найти слово word
// если первая буква этого слова находиться в board[y][x]

// true или false


function dfsMax(grid, y, x){
  if(y < 0 || y > grid.length - 1 || x < 0 || x > grid[0].length - 1){
    return 0
  }
  if(grid[y][x] === 0){
    return 0
  }
  if(grid[y][x] === 2){
    return 0
  }
  grid[y][x] = 2

  return 1 + dfsMax(grid, y - 1, x - 1) +
  dfsMax(grid, y - 1, x) +
  dfsMax(grid, y - 1, x + 1) +
  dfsMax(grid, y, x - 1) +
  dfsMax(grid, y, x + 1) +
  dfsMax(grid, y + 1, x - 1) +
  dfsMax(grid, y + 1, x) +
  dfsMax(grid, y + 1, x + 1)
}

function maxArea(grid){
  let areaMax = 0
  for(let y = 0; y < grid.length; y++){
    for(let x = 0; x < grid[y].length; x++){
      if(grid[y][x] === 1){
        let newArea = dfsMax(grid, y, x)
        areaMax = Math.max(newArea, areaMax)
      }
    }
  }
  return areaMax
}

const grid1 = [
  [0,0,0,0,0,0,0,0,0,0],
  [0,0,1,1,0,0,0,0,0,0],
  [0,0,1,1,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,1,0],
  [0,0,0,0,0,1,1,1,0,0],
  [1,1,0,0,0,0,0,0,0,0],
];

// console.log(maxArea(grid1)); // 4
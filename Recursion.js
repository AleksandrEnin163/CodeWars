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

console.log(id2children(catalog));

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

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

console.log(depth(obj)); // 3

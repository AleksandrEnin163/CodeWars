class HttpRouter {
  #details = {};
  // constructor() {
  //   this.#details = {}
  // }

  addHandler(url, method, func) {
    this.#details[url] ??= {};
    this.#details[url][method] = func;
  }
  runRequest(url, method) {
    // if(!this.#details[url] || !this.#details[url][method]){
    //     return 'Error 404: Not Found'
    // }
    return this.#details[url]?.[method]?.() ?? "Error 404: Not Found";
  }
}
const rout = new HttpRouter();

// rout.#details = {}
// rout.details = {}

rout.addHandler("/api/qwerty", "GET", () => "qwerty");
rout.addHandler("/api/contacts", "GET", () => "user");
rout.addHandler("/api/contacts", "POST", () => "user2");

console.log(rout.runRequest("/api/contacts", "GET")); // user
// console.log(rout.runRequest('/api/contacts', 'POST')); // user2
// console.log(rout.runRequest('/api/contacts', 'GET1')); // error

class QueryParams {
  constructor(params = {}) {
    this.details = {};
    if (typeof params === "string") {
      params
        .split("&")
        .map((subStr) => subStr.split("="))
        .forEach(([key, value]) => {
          this.details[key] ??= [];
          this.details[key].push(value);
        });
    } else if (typeof params === "object") {
      // for(const [key, value] of Object.entries(params)){
      //   this.details[key] = [value]
      // }
      const entries = Object.entries(params).map(([k, v]) => [k, [v]]);
      this.details = Object.fromEntries(entries);
    }
  }
  append(key, value) {
    this.details[key] ??= [];
    this.details[key].push(value);
  }
  toString() {
    // const result = []
    // for(const [key, values] of Object.entries(this.details)){
    //   result.push(...values.map(value => `${key}=${value}`));
    // }
    // return result.join('&')
    console.log(this.details);
    return Object.entries(this.details)
      .flatMap(([key, values]) => values.map((value) => `${key}=${value}`))
      .join("&");
  }
  set(key, value) {
    this.details[key] = [value];
  }
  delete(key) {
    delete this.details[key];
  }
  get(key) {
    return this.details[key][0];
  }
  getAll(key) {
    return this.details[key];
  }
  has(key, value) {
    if (value === undefined) {
      return key in this.details;
    }
    return key in this.details && this.details[key].includes(value);
  }
}

// const u3 = new QueryParams('genre=comedy&genre=action&year=2024&year=2025');
// const u3 = new QueryParams("genre=comedy&year=2023");
const u3 = new QueryParams({ genre: "comedy", year: "2023" });
console.log(u3.toString());

// u3.append("year", "2024");
// u3.append("year", "2025");
// u3.append("genre", "comedy");
// u3.append("genre", "action");
// u3.set("genre", "drama");
// u3.delete("genre");
// console.log(u3.getAll('year'))

// console.log(u3.toString());
// "genre=comedy&genre=action&year=2024&year=2025

class Randomizer {
  usedNums = new Set();
  constructor(a, b) {
    if (arguments.length === 0 || arguments.length > 2) {
      throw new Error("Неверное количество аргументов");
    }
    if (arguments.length === 1) {
      if (!Number.isInteger(a) || a < 0) {
        throw new Error("Аргумент должен быть целым позитивным числом");
      }
      this.min = 0;
      this.max = a;
    } else if (arguments.length === 2) {
      if (!Number.isInteger(a) || !Number.isInteger(b)) {
        throw new Error("Оба аргумента должны быть целыми позитивными числами");
      }
      if (a > b) {
        throw new Error("Правая граница должна быть больше левой");
      }
      this.min = a;
      this.max = b;
    }
  }

  next() {
    // console.log(this);
    if (this.usedNums.size === this.max - this.min + 1) {
      throw new Error("Все числа уже были возвращены");
    }
    while(true){
      const randomNum = Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
      if(!this.usedNums.has(randomNum)){
        this.usedNums.add(randomNum);
        return randomNum
      }
    }
  }
}

const rand = new Randomizer(5,15);

// console.log(rand.next());
// console.log(rand.next());
// console.log(rand.next());
// console.log(rand.next());
// console.log(rand.next());
// console.log(rand.next());
// console.log(rand.next());
// console.log(rand.next());
// console.log(rand.next());
// console.log(rand.next());
// console.log(rand.next());
// console.log(rand.next());

function Tuple(...args) {
  this.value = args
}

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/this
// https://www.youtube.com/watch?v=Qn3Qah7W6Vs


Tuple.prototype.equals = function (arr){
  if(this.values.length !== arr.length){
    return false
  }
  for(let i = 0; i < arr.length; i++){
    if(arr[i] !== this.values[i]){
      return false
    }
  }
  return true
}

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/new


const colors1 = Tuple("red", "yellow", "green");
const colors2 = Tuple("red", "yellow", "green");
const colors3 = Tuple("red", "green", "blue");

// console.log(colors1.equals(colors2));     // true
// console.log(colors1.equals(colors3));     // false
// console.log(colors1.equals("xxx"));       // false
// console.log(colors1 instanceof Tuple);    // true/

class VersionManager {
  constructor(vers = '0.1.0'){
    this.history = [vers]
  }

  major(){
    const [maj] = this.history.at(-1).split('.').map(num => Number(num))
    this.history.push(`${maj + 1}.0.0`)
    return this
  }

  minor() {
    const [maj, min] = this.history.at(-1).split('.').map(num => Number(num))
    this.history.push(`${maj}.${min + 1}.0`)
    return this;
  }

  patch() {
    const [maj, min, pat] = this.history.at(-1).split('.').map(num => Number(num))
    this.history.push(`${maj}.${min}.${pat + 1}`)
    return this;
  }
  rollback(){
    if(this.history.length === 1){
      throw new Error('Cannot rollback!')
    }
    this.history.pop();
    return this
  }
  release(){
    return this.history.at(-1)
  }
}


const vm = new VersionManager();

console.log(
  vm  // 0 1 0
    .major() // 1 0 0
    .patch() // 1 0 1
    .patch() // 1 0 2
    .patch() // 1 0 3
    .minor() // 1 1 0
    .rollback() // 1 0 3
    .patch() // 1 0 4
    .release()
)

//  чейнинг = надо возвращать this
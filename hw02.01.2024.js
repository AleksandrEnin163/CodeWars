// 216
function abbreviate(string) {
  // function abbreviateWord(word) {
  //       if (word.length >= 4) {
  //           return word[0] + (word.length - 2) + word.slice(-1);
  //       } else {
  //           return word;
  //       }
  //   }

  // return string.replace(/\b[a-zA-Z]+\b/g, abbreviateWord)

  return string.replace(/[a-z]{4,}/gi, (word) => {
    return word[0] + (word.length - 2) + word.slice(-1);
  });
}

// console.log(abbreviate("uhu gerygreyhgy-uhguihuihg urehgu hguheiurthgui"));

//   218
function incrementString(str) {
  return str.replace(/\d*$/, (num) =>
    (+num + 1).toString().padStart(num.length, "0")
  );
}

// console.log(incrementString("urhfuhru47584knjfgkb00123"));

// 208
function balance(book) {
  const [firstLine, ...lines] = book
    .replace(/[^0-9a-z \n.]/gi, "")
    .split("\n")
    .filter((line) => line.length > 0);

  const originalBalance = Number(firstLine);

  let balance = originalBalance;
  const reportLines = [];
  reportLines.push(`Original Balance: ${originalBalance.toFixed(2)}`);

  lines.forEach((line) => {
    const [checkNumber, category, amountStr] = line.split(" ");
    const amount = Number(amountStr);

    balance -= amount;

    reportLines.push(
      `${checkNumber} ${category} ${amount.toFixed(2)} Balance ${balance.toFixed(2)}`
    );
  });

  const totalExpense = originalBalance - balance;
  const averageExpense = totalExpense / lines.length;

  reportLines.push(`Total expense  ${totalExpense.toFixed(2)}`);
  reportLines.push(`Average expense  ${averageExpense.toFixed(2)}`);

  return reportLines.join("\r\n");
}

'Original Balance: 1000.00\r\n125 Market 125.45 Balance 874.55\r\n126 Hardware 34.95 Balance 839.60\r\n127 Video 7.45 Balance 832.15\r\n128 Book 14.32 Balance 817.83\r\n129 Gasoline 16.10 Balance 801.73\r\nTotal expense 198.27\r\nAverage expense 39.65'
'Original Balance: 1000.00\r\n125 Market 125.45 Balance 874.55\r\n126 Hardware 34.95 Balance 839.60\r\n127 Video 7.45 Balance 832.15\r\n128 Book 14.32 Balance 817.83\r\n129 Gasoline 16.10 Balance 801.73\r\nTotal expense  198.27\r\nAverage expense  39.65'


// 219
function format(str, obj){
    return str.replace(/{(.+?)}/g, (word, key) => {
        // const key = word.slice(1, -1)
        return obj.hasOwnProperty(key) ? obj[key] : word
    });
    // return str.replace(/{[^}]+}/g, "XXX");
}

//             MM/DD/YY  →  DD.MM.YY
console.log("f drtdi fiyt 03/16/24 ygyuf trdtrd".replace(
  /(\d\d)\/(\d\d)\/(\d\d)/,
  (_, month, day, year) => `${day}/${month}/${year}`
))

const str = "heriuh hih-{he45ghg} {i} hef3a {taffw} ephfp {pghb} bpgit"
const dict = {
  word: "qwerty",
  he45ghg: "TTTTTTTT",
  taffw: "XXXX",
  gtfdex: "AAAA",
}

// console.log(format(str, dict))

// "heriuh hih-TTTTTTTT {i} hef3a XXXX ephfp {pghb} bpgit"

// 213
function isPrime(num){
    if(num <= 1 ){
        return false
    }
    let del = 0
    for(let i = 1; i <= Math.sqrt(num); i++){
        if(num % i === 0 ){
            del += 2
        }
    }
    return del === 2
}

// i <= num / i
// i * i <= num
// i <= Math.sqrt(num)

console.log(isPrime(2));
console.log(isPrime(73));
console.log(isPrime(121));
console.time("xxx")
console.log(isPrime(2 ** 31 - 1));
console.timeEnd("xxx")

// 1000

// 120 

//   1   2   3   4   5   6   8   10   i
// 120  60  40  30  24  20  15   12   num / i

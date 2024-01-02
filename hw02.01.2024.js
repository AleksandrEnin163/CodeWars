// 216
function abbreviate(string) {
    function abbreviateWord(word) {
          if (word.length >= 4) {
              return word[0] + (word.length - 2) + word.slice(-1);
          } else {
              return word;
          }
      }
    
    return string.replace(/\b[a-zA-Z]+\b/g, abbreviateWord)
  
  }

//   218
function incrementString(str) {
    const num = str.match(/(\d+)$/);
    if (num) {
        const incrNum = +num[0] + 1;
        return str.replace(/(\d+)$/, incrNum.toString().padStart(num[0].length, '0'));
    } else {
        return str + '1';
    }
}

// 208
function balance(book) {
    const lines = book.split('\n');
    const originalBalance = parseFloat(lines[0].replace(/[^\d.]/g, ''));

    let totalExpense = 0;
    let numExpenses = 0;

    const reportLines = lines.slice(1).filter(line => line.length > 0).map(line => {
        const lineParts = line.replace(/[^\w. ]/g, '').split(' ');
        const checkNumber = lineParts[0];
        const category = lineParts[1];
        const amount = parseFloat(lineParts[2]);

        totalExpense += amount;
        numExpenses++;

        const newBalance = originalBalance - totalExpense;

        return `${checkNumber} ${category} ${amount.toFixed(2)} Balance ${newBalance.toFixed(2)}`;
    });

    const totalLine = `Total expense ${totalExpense.toFixed(2)}`;
    const averageLine = `Average expense ${(totalExpense / numExpenses).toFixed(2)}`;

    const report = [`Original Balance: ${originalBalance.toFixed(2)}`, ...reportLines, totalLine, averageLine].join('\n');

    return report;
}
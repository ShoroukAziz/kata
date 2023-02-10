const createMultiplicationTable = maxValue => {

  const table = [];
  for (let i = 1; i <= maxValue; i++) {
    const row = [];
    for (let j = 1; j <= maxValue; j++)
      row.push(i * j);
    
    table.push(row.join(" "));
  }
  return table.join("\n") + "\n";
};

// Tests
console.log(createMultiplicationTable(1));
console.log(createMultiplicationTable(5));
console.log(createMultiplicationTable(10));
console.log(createMultiplicationTable(12));


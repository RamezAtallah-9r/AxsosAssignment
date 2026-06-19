function printRangoli(n) {
  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  const totalRows = 2 * n - 1;
  const totalCols = 4 * n - 3;

  for (let r = 0; r < totalRows; r++) {
    let rowStr = "";

    for (let c = 0; c < totalCols; c++) {
      if (c % 2 !== 0) {
        rowStr += "-";
      } else {
        let targetRow = Math.abs(r - (n - 1));
        let targetCol = Math.abs(c / 2 - (n - 1));
        if (targetRow + targetCol >= n) {
          rowStr += "-";
        } else {

          let letterIndex = n - 1 - (n - 1 - (targetRow + targetCol));
          rowStr += alphabet[letterIndex];
        }
      }
    }
    console.log(rowStr);
  }
}

// Example usage:
printRangoli(1);

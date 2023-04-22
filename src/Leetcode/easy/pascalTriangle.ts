/*
    Given an integer numRows, return the first numRows of Pascal's triangle.

    In Pascal's triangle, each number is the sum of the two numbers directly above.

    Example:
    Input: numRows = 5
    Output: [[1],[1,1],[1,2,1],[1,3,3,1],[1,4,6,4,1]]
*/

const getPascalTriangle = (numRows: number): Array<number[]> => {
  const pascalTriangle = [[1]];

  for (let i = 1; i < numRows; i++) {
    const row = [];
    let count1 = 0;
    let count2 = 1;

    row.push(1);

    while (pascalTriangle[i - 1][count1] && pascalTriangle[i - 1][count2]) {
      row.push(pascalTriangle[i - 1][count1] + pascalTriangle[i - 1][count2]);
      count1++;
      count2++;
    }

    row.push(1);
    pascalTriangle.push(row);
  }
  return pascalTriangle;
};

// TESTING
console.log("rows = 1");
console.log(getPascalTriangle(1));
console.log("\nrows = 3");
console.log(getPascalTriangle(3));
console.log("\nrows = 5");
console.log(getPascalTriangle(5));

/*console.log("Part 1 : Fizz Buzz");

for (let i = 1; i <= 100; i++) {
  if (i % 3 === 0) {
    console.log("Fizz");
  } else if (i % 5 === 0) {
    console.log("Buzz");
  } else if (i % 3 === 0 && i % 5 === 0) {
    console.log("Fizz Buzz");
  } else {
    console.log(i);
  }
}
*/

console.log("Part 2: ");

console.log("Part 3: Feeling Loopy");

//Test String

const csvData =
  "ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26";

let cell = "";

let cellArray = [];

for (let i = 0; i < csvData.length; i++) {
  let char = csvData[i];

  //check for newline from Test String

  if (char == "\n") {
    cellArray.push(cell);
    console.log(cellArray[0], cellArray[1], cellArray[2], cellArray[3]);
    cellArray = []; //reset cell Array
    cell = ""; // reset current cell
  } else if (char == ",") {
    cellArray.push(cell); //Push completed cell
    cell = ""; // reset current cell
  }

  //add characte  to current cell
  else {
    cell += char;
  }
}

//handle last row where there is no newlin character

if (cell) {
  cellArray.push(cell);
  console.log(cellArray[0], cellArray[1], cellArray[2], cellArray[3]);
}

console.log("Test Actual String");
const csvData2 =
  "Index,Mass (kg),Spring 1 (m),Spring 2 (m)\n1,0.00,0.050,0.050\n2,0.49,0.066,0.066\n3,0.98,0.087,0.080\n4,1.47,0.116,0.108\n5,1.96,0.142,0.138\n6,2.45,0.166,0.158\n7,2.94,0.193,0.174\n8,3.43,0.204,0.192\n9,3.92,0.226,0.205\n10,4.41,0.238,0.232";

let cell2 = "";

let cellArray2 = [];

for (let i = 0; i < csvData2.length; i++) {
  let char = csvData2[i];

  //check for newline from Test String

  if (char == "\n") {
    cellArray2.push(cell2);
    console.log(cellArray2[0], cellArray2[1], cellArray2[2], cellArray2[3]);
    cellArray2 = []; //reset cell Array
    cell2 = ""; // reset current cell
  } else if (char == ",") {
    cellArray2.push(cell2); //Push completed cell
    cell2 = ""; // reset current cell
  }

  //add characte  to current cell
  else {
    cell2 += char;
  }
}

//handle last row where there is no newlin character

if (cell2) {
  cellArray2.push(cell2);
  console.log(cellArray2[0], cellArray2[1], cellArray2[2], cellArray2[3]);
}

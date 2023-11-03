//! ----------1---------
const myArray = [[false, true], [1, 2], 99, "yahshi"];

//--------------------------------------------------
myArray.forEach((elem, ind) => {
  if (typeof elem === "string") {
    console.log(ind);
  }
});

// --------------------------------------------------
let res = myArray.indexOf("yahshi");

console.log(res);

//---------------------------------------------------

for (let key in myArray) {
  if (typeof myArray[key] === "string") {
    console.log(myArray.indexOf(myArray[key]));
  }
}

//! ---------2----------

const data = [[1, 2, 3], "qizil", [4, 5, 6], true, false];

let res1 = data.flat();
let num = [];
for (key in res1) {
  if (typeof res1[key] === "number") {
    num.push(res1[key]);
  }
}

console.log(num);

//! ---------3----------

const checkData = [null, "false", 0, 99, false, undefined, "", NaN, "0"];
const newData = [];
const newData1 = [];
checkData.forEach((item) => {
  if (!item) {
    newData.push(item);
  }
});

console.log(newData);
//-------------------------------------
for (key in checkData) {
  if (!checkData[key]) {
    newData1.push(checkData[key]);
  }
}

console.log(newData1);

//! ---------4----------

const str1 = "samarqand";

const arr = str1.split("").reverse().join("");
console.log(arr);

//! ---------5----------

const salom = "AsSalomU AlAykUM YaxsHimiSiz";
const newSalom = salom.split(" ");
let newSalomlar = "";
newSalom.forEach((item) => {
  let firstLetter = item.charAt().toLowerCase();
  let nextLetters = item.slice(1).toUpperCase();
  let result = firstLetter + nextLetters;

  newSalomlar += " " + firstLetter + nextLetters;
});

console.log(newSalomlar);

//! ---------6----------

const numbers = [-1, 87, 4, 3.1, -5.5, Infinity, 0, 2, 15, 2.3, 0.9];
let sum = 0;
for (key in numbers) {
  if (
    numbers[key] > 0 &&
    Math.floor(numbers[key]) === numbers[key] &&
    numbers[key] !== Infinity
  ) {
    console.log(numbers[key]);
    sum += numbers[key];
  }
}
console.log(sum);

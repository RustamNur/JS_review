let num = 5645;
let binaryNumber = num.toString(2);

console.log(binaryNumber);

let count = 0;
let count1 = 0;
const divideNumbers = (nums) => {
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] == "1") {
      count++;
    } else {
      count1++;
    }
  }
  return nums;
};
divideNumbers(binaryNumber);
console.log(count);
console.log(count1);
console.log(`1 sonidan: ${count}ta, 0 sonidan: ${count1}ta`);

let str = "webbbbbrain";
let obj = {}

let counter = 0;
const countLetter = (letter) => {
  for (let i = 0; i < letter.length; i++) {
    if (letter[i] == "b") {
      counter++;
    }
  }
  return letter;
};

countLetter(str);
console.log(counter);

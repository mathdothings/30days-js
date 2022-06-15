const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24];
// sort the array and find the min and max
ages.sort();
let min = ages[0];
let max = ages[ages.length - 1];
console.log(`Min: ${min}, Max: ${max}`);

// Find the median age(one middle item or two middle items divided by two)
let len = ages.length;
let indexOfMiddle = Math.trunc(len / 2);

if (len % 2 === 0) {
  let middle = (ages[indexOfMiddle] + ages[indexOfMiddle + 1]) / 2;
  console.log(middle);
} else {
  console.log(ages[indexOfMiddle + 1]);
}

// Find the average age(all items divided by number of items)
let sum = 0;
sum += ages[0];
sum += ages[1];
sum += ages[2];
sum += ages[3];
sum += ages[4];
sum += ages[5];
sum += ages[6];
sum += ages[7];
sum += ages[8];
sum += ages[9];

let average = Math.floor(sum / len);
console.log(average);

// Find the range of the ages(max minus min)
console.log(`Range: ${ages[ages.length - 1] - ages[0]}`);

// Compare the value of (min - average) and (max - average), use abs() method

let compare = [Math.abs(min - average), Math.abs(max - average)];
console.log(compare);

const mernStack = ["MongoDB", "Express", "React", "Node"];

const len = mernStack.length;
let result = "";

for (let x = 0; x < len; x++) {
  let element = mernStack[x]; // element is the value of mernStack array in x index
  result += element[0]; // element[0] is always the first letter of the element name
}

console.log(result); // MERN

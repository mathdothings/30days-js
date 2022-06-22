// let p = "math";
// p = p[0].toUpperCase() + p.substring(1);
//
// console.log(p);

function captializeArray(arr) {
  const arrCopy = [];
  for (let element of arr) {
    let cap = element[0].toUpperCase() + element.substring(1);
    arrCopy.push(cap);
  }

  return arrCopy;
}

console.log(captializeArray(["math", "do", "things"]));

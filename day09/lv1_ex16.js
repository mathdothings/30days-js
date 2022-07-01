const arr = [1, 2, 3, true, null, undefined, "string"];

function getStringList(array) {
  const result = array.filter(function (elem) {
    if (elem !== null && elem !== undefined) return elem.toString();
  });

  return result;
}

console.log(getStringList(arr));

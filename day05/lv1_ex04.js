let arr = [1, 2, 3, 4];
const middle = Math.floor(arr.length / 2);
const end = arr.length - 1;

switch (arr.length % 2) {
  case 0:
    console.log("Your array do not have a middle item.");
    console.log(arr[0], arr[end]);
    break;
  default:
    console.log(arr[0], arr[middle], arr[end]);
    break;
}

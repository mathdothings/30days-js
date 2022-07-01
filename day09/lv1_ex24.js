const countries = ["Finland", "Sweden", "Denmark", "Norway", "IceLand"];

const findIndexOfFirstWithSixLetters = countries.findIndex(
  (ele) => ele.length === 6
);

console.log(findIndexOfFirstWithSixLetters);

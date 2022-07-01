const countries = ["Finland", "Sweden", "Denmark", "Norway", "IceLand"];

const findFirstWithSixLetters = countries.find((ele) => ele.length === 6);

console.log(findFirstWithSixLetters);

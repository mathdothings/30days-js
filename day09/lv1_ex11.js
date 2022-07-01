const countries = ["Finland", "Sweden", "Denmark", "Norway", "IceLand"];

const hasLand = countries.filter((elem) => elem.toLowerCase().includes("land"));
console.log(hasLand);

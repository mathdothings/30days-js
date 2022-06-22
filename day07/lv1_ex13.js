const BMI = (weight, height) => weight / height ** 2;
const weight = 100;
const height = 1.67;
const me = BMI(weight, height);

if (me < 18.5) {
  console.log("Underweight");
} else if (me >= 18.5 || me <= 24.9) {
  console.log("Normal weight");
} else if (me >= 25 || me <= 29.9) {
  console.log("Overweight");
} else if (me >= 30) {
  console.log("Obese");
}

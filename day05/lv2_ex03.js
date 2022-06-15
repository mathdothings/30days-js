const shoppingCart = ["Milk", "Coffee", "Tea", "Honey"];

shoppingCart.includes("Meat")
  ? console.log("You already has Meat in your cart.")
  : shoppingCart.unshift("Meat");
shoppingCart.includes("Sugar")
  ? console.log("You already has Sugar in your cart.")
  : shoppingCart.push("Sugar");
shoppingCart.pop("Honey");
let honeyIndex = shoppingCart.indexOf("Honey");
shoppingCart.splice(honeyIndex, 1);
let teaIndex = shoppingCart.indexOf("Tea");
shoppingCart[teaIndex] = "Green Tea";

console.log(shoppingCart);

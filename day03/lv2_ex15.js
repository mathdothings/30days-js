let year = new Date().getFullYear();
let month = new Date().getMonth() + 1; // return 0 ~ 11 and i want 1 ~ 12
let day = new Date().getDate(); // day of month
let hour = new Date().getHours();
let min = new Date().getMinutes();

// YYYY-MM-DD hh:mm
console.log(`i. ${year}-${month}-${day} ${hour}:${min}`);

// MM-DD-YYYY hh:mm
console.log(`ii. ${month}-${day}-${year} ${hour}:${min}`);

// DD-MM-YYYY hh:mm
console.log(`iii. ${day}-${month}-${year} ${hour}:${min}`);

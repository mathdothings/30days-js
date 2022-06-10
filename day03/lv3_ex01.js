let year = new Date().getFullYear();
let month = new Date().getMonth() + 1; // return 0 ~ 11 and i want 1 ~ 12
let day = new Date().getDate(); // day of month
let hour = new Date().getHours();
let min = new Date().getMinutes();

// YYYY-MM-DD hh:mm | MM, DD, hh and mm should always be 2 digit
// first take care if month, day, hour and min are always 2 digits
month < 9 ? (month = "0" + month.toString()) : month;
day < 9 ? (day = "0" + day.toString()) : day;
hour < 9 ? (hour = "0" + hour.toString()) : hour;
min < 9 ? (min = "0" + min.toString()) : min;

console.log(`${year}-${month}-${day} ${hour}:${min}`); // 2020-06-10 13:00

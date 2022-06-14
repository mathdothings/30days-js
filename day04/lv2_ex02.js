let month = new Date().getMonth() + 1;

if (month === 1) month = "January";
else if (month === 2) month = "Frebuary";
else if (month === 3) month = "March";
else if (month === 4) month = "April";
else if (month === 5) month = "May";
else if (month === 6) month = "June";
else if (month === 7) month = "July";
else if (month === 8) month = "August";
else if (month === 9) month = "September";
else if (month === 10) month = "October";
else if (month === 11) month = "November";
else month === "December";

if (month === "September" || month === "October" || month === "November")
  console.log("Autumn");
if (month === "December" || month === "January" || month === "Frebuary")
  console.log("Winter");
if (month === "March" || month === "April" || month === "May")
  console.log("Spring");
if (month === "June" || month === "July" || month === "August")
  console.log("Summer");

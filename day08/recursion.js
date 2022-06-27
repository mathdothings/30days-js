function hasproperty(o) {
  if (typeof o === "object") {
    for (var k in o) {
      if (o.hasOwnProperty(k)) {
        return true;
      }
    }
  }

  return false;
}

function iterate(o) {
  for (var k in o) {
    if (o.hasOwnProperty(k)) {
      if (hasproperty(o[k])) {
        console.log("within " + k);
        iterate(o[k]);
        console.log("exit " + k);
      } else {
        console.log("K: " + k + ", V:" + o[k]);
      }
    }
  }
}

const getAllUserEmail = (obj, emails = []) => {
  const isObject = (obj) => {
    // not safest way to check obj type
    if (typeof obj === "object") {
      for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
          if (key !== undefined || key !== null) {
            return true;
          }
        }
      }
    }

    return false;
  };
  for (let prop in obj) {
    if (obj.hasOwnProperty(prop)) {
      if (isObject(obj[prop])) {
        getAllUserEmail(obj[prop], emails);
      } else {
        if (prop === "email" && obj[prop]) {
          emails.push(obj[prop]);
        }
      }
    }
  }

  return emails;
};

console.log(getAllUserEmail(users));

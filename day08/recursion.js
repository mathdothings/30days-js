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

const ages = [
  31, 26, 34, 37, 27, 26, 32, 32, 26, 27, 27, 24, 32, 33, 27, 25, 26, 38, 37,
  31, 34, 24, 33, 29, 26,
];

ages.sort((prev, curr) => {
  if (prev < curr) return -1;
  if (prev > curr) return 1;
  return 0;
});

// console.log(ages);

class statistics {
  static count() {
    return ages.length;
  }

  static sum() {
    let sum = 0;
    sum = ages.reduce((prev, curr) => prev + curr);
    return sum;
  }

  static min() {
    return ages[0];
  }

  static max() {
    return ages[ages.length - 1];
  }

  static range() {
    return ages[ages.length - 1] - ages[0];
  }

  static mean() {
    return Math.round(this.sum() / this.count());
  }

  static median() {
    const len = ages.length;
    return ages[(len - 1) / 2];
  }

  static mode() {
    let count = 0;
    let appearsMore = 0;
    let mode = ages[0];
    ages.forEach((item) => {
      count = 0;
      ages.forEach((value) => {
        if (value === item) count++;
      });

      if (count > appearsMore) {
        mode = item;
        appearsMore = count;
      }
    });

    return { mode: mode, count: appearsMore };
  }

  static var() {
    const v = ages.map((item) => (item - this.mean()) ** 2);
    const s = v.reduce((prev, curr) => prev + curr);
    const n = this.count() - 1;
    return Math.floor(s / n);
  }

  static std() {
    const v = ages.map((item) => (item - this.mean()) ** 2);
    const s = v.reduce((prev, curr) => prev + curr);
    const n = this.count();
    return Math.sqrt(s / n).toFixed(1);
  }
}

console.log("Count:", statistics.count()); // 25
console.log("Sum: ", statistics.sum()); // 744
console.log("Min: ", statistics.min()); // 24
console.log("Max: ", statistics.max()); // 38
console.log("Range: ", statistics.range()); // 14
console.log("Mean: ", statistics.mean()); // 30
console.log("Median: ", statistics.median()); // 29
console.log("Mode: ", statistics.mode()); // {'mode': 26, 'count': 5}
console.log("Variance: ", statistics.var()); // 17.5
console.log("Standard Deviation: ", statistics.std()); // 4.2
// console.log("Frequency Distribution: ", statistics.freqDist()); // [(20.0, 26), (16.0, 27), (12.0, 32), (8.0, 37), (8.0, 34), (8.0, 33), (8.0, 31), (8.0, 24), (4.0, 38), (4.0, 29), (4.0, 25)]

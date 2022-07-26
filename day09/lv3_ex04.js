const ages = [
  31, 26, 34, 37, 27, 26, 32, 32, 26, 27, 27, 24, 32, 33, 27, 25, 26, 38, 37,
  31, 34, 24, 33, 29, 26,
];

// first sort all elements ascending
ages.sort((prev, curr) => {
  if (prev < curr) return -1;
  if (prev > curr) return 1;
  return 0;
});

const statistics = {
  count() {
    return ages.length;
  },
  sum() {
    let sum = 0;
    sum = ages.reduce((prev, curr) => prev + curr);
    return sum;
  },
  min() {
    return ages[0];
  },
  max() {
    return ages[this.count() - 1];
  },
  range() {
    return this.max() - this.min();
  },
  mean() {
    return Math.ceil(this.sum() / this.count());
  },
  median() {
    return ages[Math.floor(this.count() / 2 + 1) - 1];
  },
  mode() {
    // this is the elements without repeating values
    const elements = [];
    ages.forEach((elem) => {
      if (!elements.includes(elem)) elements.push(elem);
    });

    // create all objs with mode and count properties and put then in a single array
    const noRepeatItems = [];
    elements.forEach((item) => noRepeatItems.push({ mode: item, count: 1 }));

    // increment count for each appearence
    ages.forEach((item) => {
      noRepeatItems.forEach((prop) => {
        if (prop["mode"] === item) {
          prop["count"] += 1;
        }
      });
    });

    // sort all objs by highest count
    noRepeatItems.sort((prev, curr) => {
      if (prev["count"] < curr["count"]) return 1;
      if (prev["count"] > curr["count"]) return -1;
      return 0;
    });

    // return only the highest one (the first one)
    const appearsMore = noRepeatItems[0];
    return appearsMore;
  },

  variance() {
    const variances = [];
    ages.forEach((item) => variances.push((item - this.mean()) ** 2));

    const result = variances.reduce((prev, curr) => prev + curr) / this.count();

    return result;
  },

  std() {
    const stds = [];
    ages.forEach((item) => stds.push((item - this.mean()) ** 2));

    const result = stds.reduce((prev, curr) => prev + curr);

    return Math.sqrt(result / this.count()).toFixed(1);
  },

  describe() {
    return (
      `Count: ${this.count()}\n` +
      `Sum: ${this.sum()}\n` +
      `Min: ${this.min()}\n` +
      `Max: ${this.max()}\n` +
      `Range: ${this.range()}\n` +
      `Mean: ${this.mean()}\n` +
      `Median: ${this.median()}\n` +
      `Mode: {${Object.entries(this.mode())}}\n` +
      `Variance: ${this.variance()}\n` +
      `Standard Deviation: ${this.std()}`
    );
  },
};

console.log(statistics.describe());

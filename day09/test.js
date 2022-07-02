if (pattern === "capital") {
    function sortCountriesByName() {
      const names = [];
      const sortedByNames = [];
      array.forEach((country) => names.push(country["name"]));
      names.sort(); // this will aplhabetically sort all countries names

      names.forEach((countryName) => {
        array.forEach((country) => {
          if (countryName === country["name"]) {
            sortedByNames.push(country);
          }
        });
      });

      return sortedByNames;
    }
    result = sortCountriesByName();
  }

/* const min = 1402112000;
const max = 128932753;

countries = APIDATA;
countries.forEach((country) => {
  console.log(country.population);
});
 */

const ctx = document.getElementById("myChart");
const myChart = new Chart(ctx, {
  type: "bar",
  data: {
    labels: [
      "CHN",
      "IND",
      "USA",
      "IDN",
      "PAK",
      "BRA",
      "NGA",
      "BAN",
      "RUS",
      "MEX",
    ],
    datasets: [
      {
        label: "% based on 10 more populated",
        /* data: [
          1402112000, 1380004385, 329484123, 273523621, 220892331, 212559409,
          206139587, 164689383, 144104080, 128932753,
        ], */
        data: [10, 20, 30, 40, 50, 60, 70, 80, 90, 100],
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(255, 159, 64, 0.2)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
        ],
        borderWidth: 1,
      },
    ],
  },
  options: {
    barPercentage: 1,
    categoryPercentage: 0.5,
    indexAxis: "y",
    offset: true,
    scales: {
      x: {
        stacked: false,
      },
      y: {
        stacked: false,
        ticks: {
          autoSkip: false,
          fontSize: 20,
        },
      },
    },
  },
});

// metirc/total * 100 => %total metris is

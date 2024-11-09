// Get the context of the canvas element we want to select
var ctx = document.getElementById("myBarChart").getContext("2d");

// Dummy data for standard deviation
var stdDevs = [0.024, 0.035, 0.025, 0.044, 0.028];

// Data values
var dataValues = [8.482, 8.442, 8.481, 8.446, 8.438];

// Create a new Chart instance

Chart.defaults.font.family = "Outfit, sans-serif";
Chart.defaults.color = "#000";
var myBarChart = new Chart(ctx, {
  type: "bar", // Specify the chart type
  data: {
    labels: [
      "NBA Authentic",
      "NCAA Replica",
      "Wilson Evolution",
      "Molten GM7X",
      "Nike Outdoor Elite",
    ], // X-axis labels
    datasets: [
      {
        label: "PSI Average Value", // Name the series
        data: dataValues, // Y-axis data
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
        ],
        borderWidth: 1, // Border width of the bars
      },
    ],
  },
  options: {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false, // Disable the legend
      },
      title: {
        display: true, // Enable the title
        text: "Basketball Models Performance in Terms of PSI Levels", // Title text
        font: {
          size: 18, // Font size
        },
        padding: {
          top: 10,
          bottom: 30,
        },
      },
      // annotation: {
      //   annotations: dataValues.map((value, index) => ({
      //     type: "line",
      //     mode: "vertical",
      //     scaleID: "x",
      //     value: index,
      //     borderColor: "rgba(0, 0, 0, 0.5)",
      //     borderWidth: 2,
      //     yMin: value - stdDevs[index], // Starting point of the line on the y-axis
      //     yMax: value + stdDevs[index], // Ending point of the line on the y-axis
      //     label: {
      //       content: `±${stdDevs[index]}`,
      //       enabled: true,
      //       position: "top",
      //     },
      //   })),
      // },
    },
    scales: {
      x: {
        title: {
          display: true,
          text: "Basketball Models", // X-axis title
          font: {
            size: 16, // Font size
          },
        },
        beginAtZero: true, // Ensure the x-axis starts at zero
      },
      y: {
        title: {
          display: true,
          text: "Air Pressure (PSI)", // Y-axis title
          font: {
            size: 16, // Font size
          },
        },
        beginAtZero: true, // Ensure the y-axis starts at zero
        min: 8.4,
        max: 8.5,
      },
    },
  },
});

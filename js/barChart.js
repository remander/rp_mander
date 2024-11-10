// Get the context of the canvas element we want to select
var ctx = document.getElementById("myBarChart").getContext("2d");

// Standard deviation values for possible error bars
var stdDevs = [0.024, 0.035, 0.025, 0.044, 0.028];

// Function to fetch and parse CSV data
async function getData() {
  const response = await fetch("../data/air-pressure-calculated.csv");
  const data = await response.text(); // CSV in text format

  const xModels = []; // x-axis labels
  const dataValues = []; // y-axis data

  const table = data.split("\n").filter((row) => row.trim() !== ""); // Split the CSV into rows and skip empty lines

  table.forEach((row) => {
    const columns = row.split(","); // Split each row into columns

    const model = columns[0].trim(); // Assign basketball model type and trim any whitespace
    xModels.push(model);

    const psiValue = parseFloat(columns[1].trim()); // Parse the PSI value and trim any whitespace
    dataValues.push(psiValue);
  });

  console.log(xModels, dataValues);
  return { xModels, dataValues };
}

// Create a new Chart instance
Chart.defaults.font.family = "Outfit, sans-serif";
Chart.defaults.color = "#000";

async function createChart() {
  const data = await getData();
  const barChart = document.getElementById("myBarChart").getContext("2d");

  const myBarChart = new Chart(ctx, {
    type: "bar", // Specify the chart type
    data: {
      labels: data.xModels, // X-axis labels from CSV
      datasets: [
        {
          label: "PSI Average Value", // Name the series
          data: data.dataValues, // Y-axis data from CSV
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
          text: "Basketball Performance in Terms of PSI Retention Levels", // Title text
          font: {
            size: 18, // Font size
          },
          padding: {
            top: 10,
            bottom: 30,
          },
        },
      },
      scales: {
        x: {
          title: {
            display: true,
            text: "Basketball Models", // X-axis title
            font: {
              size: 16, // Font size
            },
            align: "center", // Center the x-axis title
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
}

createChart();

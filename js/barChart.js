// Get the context of the canvas element we want to select
var ctx = document.getElementById("myBarChart").getContext("2d");

// Create a new Chart instance
var myBarChart = new Chart(ctx, {
  type: "bar", // Specify the chart type
  data: {
    labels: ["January", "February", "March", "April", "May", "June", "July"], // X-axis labels
    datasets: [
      {
        label: "Dummy Data", // Name the series
        data: [65, 59, 80, 81, 56, 55, 40], // Y-axis data
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(255, 159, 64, 0.2)",
          "rgba(255, 99, 132, 0.2)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
          "rgba(255, 99, 132, 1)",
        ],
        borderWidth: 1, // Border width of the bars
      },
    ],
  },
  options: {
    scales: {
      y: {
        beginAtZero: true, // Ensure the y-axis starts at zero
      },
    },
  },
});

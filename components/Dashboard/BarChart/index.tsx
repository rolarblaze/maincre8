import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import React from "react";

// Register necessary chart.js elements
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

interface BarChartProps {
  labels: string[]; // Labels for the X-axis
  dataValues: number[]; // Values for each bar
}

const BarChart: React.FC<BarChartProps> = ({ labels, dataValues }) => {
  // Dummy data structure using the provided props
  const data = {
    labels,
    datasets: [
      {
        label: "Services",
        data: dataValues, // Use the data passed in as a prop
        backgroundColor: "#6056CB",
        barThickness: 120, // Customize the width of each bar
        borderRadius: 4,
      },
    ],
  };

  // Configuration for the chart
  const options = {
    maintainAspectRatio: false,
    responsive: true,
    scales: {
      x: {
        grid: {
          display: false, // Hide the gridlines for x-axis
        },
        ticks: {
          font: {
            size: 11, // Set the font size of the labels on the x-axis
          },
        },
        border: {
          display: true, // Hide x-axis line
        },
      },
      y: {
        max: 10, // Set maximum value for y-axis
        grid: {
          drawBorder: false, // Hide the border (axis line)
          color: "rgba(0, 0, 0, 0.03)", // Set a feinter color for the grid lines
          borderDash: [5, 5], // Makes the grid lines dashed (broken lines) //NOT WOKING-DON'T KNOW WHY
        },
        ticks: {
          stepSize: 2, // Set the increment on the y-axis
          font: {
            size: 11, // Set the font size of the labels on the y-axis
          },
        },
        border: {
          display: false, // Hide y-axis line
        },
      },
    },
    plugins: {
      legend: {
        display: false, // Hide the legend
      },
    },
    layout: {
      padding: {
        right: 20,
      },
    },
    barPercentage: 0.5, // Decreases the width of the bars, increasing the space between them
    categoryPercentage: 0.5, // // Adjusts the width of the entire group of bars, giving more space between bar groups
  };

  return (
    <div className="w-full max-w-lg mx-auto xs:max-md:mx-0">
      <Bar data={data} options={options} />
    </div>
  );
};

export default BarChart;

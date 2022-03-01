import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  plugins: {
    title: {
      display: true,
      text: "Chart.js Bar Chart - Stacked"
    }
  },
  responsive: true,
  scales: {
    x: {
      stacked: true
    },
    y: {
      stacked: true
    }
  }
};

const labels = ["Summary"];

export const data = {
  labels,
  datasets: [
    {
      label: "Earnings",
      data: labels.map(() => [1200]),
      backgroundColor: "rgb(2, 184, 0)"
    },
    {
      label: "Spendings",
      data: labels.map(() => [5000]),
      backgroundColor: "rgb(2, 222, 0)"
    }
  ]
};

export function App() {
  return <Bar options={options} data={data} />;
}

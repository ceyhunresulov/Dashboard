import Chart from "chart.js/auto";
import {
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import { Box, useTheme } from "@mui/material";
import useGetBarChartData from "../../hooks/useGetBarChartData";

Chart.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

function BarChart() {
  const theme = useTheme();
  const chartData = useGetBarChartData();

  const options = {
    plugins: {
      title: {
        display: true,
        text: "User Statistics by Age",
        color: theme.palette.primary.contrastText,
        font: {
          size: 20,
        },
      },
      legend: {
        display: false,
      },
    },
    scales: {
      y: {
        ticks: {
          color: theme.palette.primary.contrastText,
          stepSize: 1,
          precision: 0,
        },
      },
    },
  };

  return (
    <Box
      flex={2}
      sx={{
        backgroundColor: theme.palette.primary.main,
        borderRadius: "20px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        p: 2,
        boxSizing: "border-box",
        height: "100%",
        "& canvas": {
          height: "100% !important",
          width: "100% !important",
        },
      }}
    >
      <Bar data={chartData} options={options} />
    </Box>
  );
}

export default BarChart;

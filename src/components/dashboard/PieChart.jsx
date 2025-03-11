import Chart from "chart.js/auto";
import { ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";
import { Box, useTheme } from "@mui/material";
import useGetPieChartData from "../../hooks/useGetPieChartData";

Chart.register(ArcElement, Tooltip, Legend);

function PieChart() {
  const theme = useTheme();
  const chartData = useGetPieChartData();

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: true,
        position: "left",
        color: "red",
        labels: {
          color: theme.palette.primary.contrastText,
          font: {
            size: 14,
            weight: "bold",
          },
        },
      },
      tooltip: {
        enabled: true,
      },
      title: {
        display: true,
        text: "Count of Courses Purchased",
        font: {
          size: 20,
        },
        color: theme.palette.primary.contrastText,
      },
    },
  };
  return (
    <Box
      flex={1}
      sx={{
        borderRadius: "20px",
        backgroundColor: theme.palette.primary.main,
        padding: 2,
        boxSizing: "border-box",
        height: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        "& canvas": {
          height: "100% !important",
        },
      }}
    >
      <Pie options={options} data={chartData}></Pie>
    </Box>
  );
}

export default PieChart;
